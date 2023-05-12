import { Children, FC, ReactNode } from 'react'
import { useDivider } from '../hooks/useDivider'

export interface StackProps {
  direction: 'x' | 'y' | 'horizontal' | 'vertical'
  children?: ReactNode
}

export const Stack: FC<StackProps> = ({ direction, children }) => {
  const [stack, divider] =
    direction === 'x' ? ['hStack', 'hDivider'] : ['vStack', 'vDivider']

  const kids = Children.map(children, (child) => child)
  const [first, second] = kids as ReactNode[]

  const ref = useDivider(direction === 'x' ? 'horizontal' : 'vertical')

  if (!second)
    return (
      <div className={stack}>
        <div className="first">{first}</div>
      </div>
    )

  return (
    <div className={stack}>
      <div className="first">{first}</div>
      <div className={divider} ref={ref} />
      <div className="second">{second}</div>
    </div>
  )
}
