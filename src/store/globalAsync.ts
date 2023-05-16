import { Store } from '../libraries/store'
import { moduleManager } from '../moduleManager'
import { GlobalState } from './global'

// const globalAsync = import('./global')

const globalAsync = moduleManager.require('global')

const stub = async <K extends keyof GlobalState>(key: K) => {
  const store = await globalAsync
  const state = store.getState()[key] as GlobalState[K]
  return state
}

export const global = Store.follow(globalAsync, {
  count: 0,
  decrement: () => stub('decrement'),
  increment: () => stub('increment'),
  set: async (n: number) => (await stub('set'))(n),
})
