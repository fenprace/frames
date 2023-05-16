import { global } from '../store/global'

// const increment = () => {
//   global.updateState((state) => ({ ...state, count: state.count + 1 }))
// }

export const Inc = () => {
  const increment = global.useSelector((state) => state.increment)

  console.log('re-render')

  return (
    <div
      className="panel"
      style={{
        color: '#E0E0E0',
        fontSize: '24px',
      }}
    >
      <button onClick={increment}>Increment</button>
    </div>
  )
}
