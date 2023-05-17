declare global {
  type Store = import('./libraries/store').Store
  type GlobalState = import('./store/global').GlobalState

  interface Window {
    __MODULE: import('./libraries/module').ModuleManager<
      'global',
      Store<GlobalState>
    >
  }
}

export {}
