declare global {
  type Store = import('./libraries/store').Store
  type GlobalState = import('./store/global').GlobalState
  type GlobalStore = import('./store/global').GlobalStore

  interface Window {
    __MODULE: import('./libraries/module').ModuleManager<
      'global',
      Store<GlobalState>
    >
  }
}

export {}
