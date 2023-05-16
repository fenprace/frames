import { global } from '../store/globalAsync'

export const Dec = () => {
  const decrement = global.use((state) => state.decrement)

  return (
    <div
      className="panel"
      style={{
        color: '#E0E0E0',
        fontSize: '24px',
      }}
    >
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
