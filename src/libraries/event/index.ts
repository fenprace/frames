import { useCallback } from 'react'
import { Store } from '../store'

type EventState<E extends string> = { [key in E]?: number }

export class Event<E extends string> {
  private _store = Store.create<EventState<E>>({})
  private _listeners: Map<E, Set<() => void>> = new Map()

  public emit = (event: E) => {
    this._store.updateState((state) => {
      const count = state[event]
      if (count) return { ...state, [event]: count + 1 }
      return { ...state, [event]: 1 }
    })

    const listeners = this._listeners.get(event)
    if (listeners) {
      for (const listener of listeners) listener()
    }
  }

  public use = (event: E) => {
    this._store.use(
      useCallback(() => (state: EventState<E>) => state[event], [event]),
    )
  }

  public on = (event: E, cb: () => void) => {
    const listeners = this._listeners.get(event)

    if (listeners) listeners.add(cb)
    else this._listeners.set(event, new Set([cb]))
  }
}
