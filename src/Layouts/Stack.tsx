import { FC, ReactNode } from 'react'
import Split from 'react-split'

type WideDirection = 'x' | 'y' | 'horizontal' | 'vertical'
type Direction = 'horizontal' | 'vertical'

export interface StackProps {
  direction: WideDirection
  children?: ReactNode
}

const MAP_DIRECTION: { [key in WideDirection]: Direction } = {
  horizontal: 'horizontal',
  vertical: 'vertical',
  x: 'horizontal',
  y: 'vertical',
}

const MAP_CLASSNAME = {
  horizontal: 'hStack',
  vertical: 'vStack',
}

export const Stack: FC<StackProps> = ({ direction, children }) => {
  const direct = MAP_DIRECTION[direction]

  return (
    <Split direction={direct} className={MAP_CLASSNAME[direct]} gutterSize={4}>
      {children}
    </Split>
  )
}
