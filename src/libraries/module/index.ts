type ModuleRepository<N extends string, M> = Map<N, M>
type Listener<M> = (module: M) => void
type ListenerRepository<N extends string, M> = Map<N, Set<Listener<M>>>

export class ModuleManager<N extends string, M> {
  private _modules: ModuleRepository<N, M> = new Map()
  private _listenrs: ListenerRepository<N, M> = new Map()

  public register = <T extends M>(key: N, module: T) => {
    this._modules.set(key, module)
    const listenrs = this._listenrs.get(key)

    if (listenrs) {
      for (const listener of listenrs) {
        listener(module)
      }
    }
  }

  private _require = <T extends M>(key: N, cb: Listener<T>) => {
    const module = this._modules.get(key)
    if (module) {
      cb(module as T)
      return
    }

    const listeners = this._listenrs.get(key)
    if (listeners) {
      listeners.add(cb as Listener<M>)
      return
    }

    this._listenrs.set(key, new Set([cb as Listener<M>]))
  }

  public require = <T extends M>(key: N): Promise<T> => {
    return new Promise((resolve) => {
      this._require<T>(key, (mod) => resolve(mod))
    })
  }
}

export const register = (key: 'global', module: GlobalStore) => {
  if (!window.__MODULE)
    window.__MODULE = new ModuleManager<'global', GlobalStore>()

  window.__MODULE.register(key, module)
}

export const acquire = (key: 'global') => {
  if (!window.__MODULE)
    window.__MODULE = new ModuleManager<'global', GlobalStore>()

  return window.__MODULE.require<GlobalStore>(key)
}
