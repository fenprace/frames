type ModuleRepository<N extends string, M> = {
  [key in N]?: M
}

type Listener<M> = (module: M) => void

type ListenerRepository<N extends string, M> = {
  [key in N]?: Listener<M>[]
}

export class ModuleManager<N extends string, M> {
  private _modules: ModuleRepository<N, M> = {}
  private _listenrs: ListenerRepository<N, M> = {}

  public register<T extends M>(key: N, module: T) {
    this._modules[key] = module
    const listenrs = this._listenrs[key]

    if (listenrs) {
      for (const listener of listenrs) {
        listener(module)
      }
    }
  }

  private _require<T extends M>(key: N, cb: Listener<T>) {
    if (this._modules[key]) {
      cb(this._modules[key] as T)
      return
    }

    if (this._listenrs[key]) {
      this._listenrs[key]?.push(cb as Listener<M>)
      return
    }

    this._listenrs[key] = [cb as Listener<M>]
  }

  public require<T extends M>(key: N): Promise<T> {
    return new Promise((resolve) => {
      this._require<T>(key, (mod) => resolve(mod))
    })
  }
}
