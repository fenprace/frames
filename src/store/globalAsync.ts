import { Store } from '../libraries/store'

// const globalAsync = import('./global')

import { moduleManager } from '../moduleManager'

const globalAsync = moduleManager.require('global')

export const global = Store.follow(globalAsync, {
  count: 0,
  decrement: () => globalAsync.then((g) => g.getState().decrement()),
  increment: () => globalAsync.then((g) => g.getState().increment()),
})
