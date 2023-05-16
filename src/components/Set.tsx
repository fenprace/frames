import { MouseEventHandler, useRef } from 'react'
import { global } from '../store/globalAsync'

export const Set = () => {
  const set = global.use((state) => state.set)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = () => {
    if (!inputRef.current) return
    set(Number(inputRef.current.value))
  }

  return (
    <div
      className="panel"
      style={{
        color: '#E0E0E0',
        fontSize: '36px',
      }}
    >
      <input
        style={{
          fontSize: '24px',
        }}
        type="number"
        ref={inputRef}
      />
      <button
        style={{
          fontSize: '24px',
          marginLeft: '8px',
        }}
        onClick={handleSubmit}
      >
        Set
      </button>
    </div>
  )
}
