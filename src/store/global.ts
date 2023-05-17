import { Store } from '../libraries/store'

// const initial = {
//   count: 0,
//   increment: () =>
//     global.updateState((state) => ({ ...state, count: state.count + 1 })),
//   decrement: () =>
//     global.updateState((state) => ({ ...state, count: state.count - 1 })),
// }

export interface GlobalState {
  count: number
  decrement: () => void
  increment: () => void
  set: (n: number) => void
}

export const global = Store.create<GlobalState>((set) => {
  return {
    count: 0,
    decrement: () => set((state) => ({ ...state, count: state.count - 1 })),
    increment: () => set((state) => ({ ...state, count: state.count + 1 })),
    set: (n: number) => set((state) => ({ ...state, count: n })),
  }
})
