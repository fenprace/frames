import { Store } from '../libraries/store'

// const initial = {
//   count: 0,
//   increment: () =>
//     global.updateState((state) => ({ ...state, count: state.count + 1 })),
//   decrement: () =>
//     global.updateState((state) => ({ ...state, count: state.count - 1 })),
// }

interface GlobalState {
  count: number
  increment: () => void
  decrement: () => void
}

export const global = Store.create<GlobalState>((set) => {
  return {
    count: 0,
    increment: () => set((state) => ({ ...state, count: state.count + 1 })),
    decrement: () => set((state) => ({ ...state, count: state.count - 1 })),
  }
})

// export const global = new Store(initial)

export const useGlobal = global.useStore
