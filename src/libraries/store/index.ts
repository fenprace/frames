import { useCallback, useSyncExternalStore } from 'react'

type StoreListener = () => void
type StoreSetter<State> = (updater: (oldState: State) => State) => void
type StoreInitializer<State> = (set: StoreSetter<State>) => State

const EMPTY = Symbol()

export class Store<State> {
  private _state: symbol | State = EMPTY
  private _listeners: Set<StoreListener> = new Set()

  initialize(initialState: State) {
    this._state = initialState
  }

  private _notify = () => {
    for (const cb of this._listeners) cb()
  }

  public unsubscribe = (cb: StoreListener) => {
    this._listeners.delete(cb)
  }

  public subscribe = (cb: StoreListener) => {
    this._listeners.add(cb)
    return () => this.unsubscribe(cb)
  }

  public getState = () => this._state as State

  public setState = (nextState: State) => {
    this._state = nextState
    this._notify()
  }

  public mergeState = (nextState: Partial<State>) => {
    this._state = { ...(this._state as State), ...nextState }
    this._notify()
  }

  public updateState = (update: (oldState: State) => State) => {
    this._state = update(this._state as State)
    this._notify()
  }

  public useStore = <Selected>(selector: (state: State) => Selected) => {
    return useSyncExternalStore<Selected>(
      this.subscribe,
      useCallback(() => selector(this.getState()), [selector]),
    )
  }
  public useSelector = this.useStore

  static useStore = <State, Selected>(
    store: Store<State>,
    selector: (state: State) => Selected,
  ) => {
    return store.useStore(selector)
  }

  static createUseSelector = <State>(store: Store<State>) => {
    return store.useStore
  }

  static create = <State>(
    init: State | StoreInitializer<State>,
  ): Store<State> => {
    const store = new Store<State>()

    if (init instanceof Function) {
      const initialState = init(store.updateState)
      store.initialize(initialState)
      return store
    }

    store.initialize(init)
    return store
  }

  static follow = <State>(
    originStore: Promise<Store<State>>,
    initialState: State,
  ) => {
    const store = Store.create(initialState)

    originStore.then((origin) => {
      origin.subscribe(() => {
        store.setState(origin.getState())
      })
    })

    return store
  }
}
