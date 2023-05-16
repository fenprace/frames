import { global } from '../store/globalAsync'

export const Count = () => {
  const count = global.use((state) => state.count)

  return (
    <div
      className="panel"
      style={{
        color: '#E0E0E0',
        fontSize: '24px',
      }}
    >
      {count}
    </div>
  )
}
