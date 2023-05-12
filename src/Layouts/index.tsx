import { FC, ReactNode } from 'react'
import { useDivider } from '../hooks/useDivider'

export interface StackProps {
  children?: ReactNode
  basis?: number
}

export interface FrameProps {
  children?: ReactNode
  basis?: number
}

export interface DividerProps {
  onChangeBasis: () => void
}

export const Window: FC<StackProps> = ({ children }) => {
  return <div className="window">{children}</div>
}

export const Frame: FC<FrameProps> = ({ children, basis }) => {
  return (
    <div
      className="frame"
      style={
        {
          // flex: basis ? `0 0 ${basis * 100}%` : '1 1 auto',
        }
      }
    >
      {/* <div className="tabBar">Tabs</div> */}
      {children}
    </div>
  )
}

export const Panel: FC = () => {
  return <div className="panel">Panel</div>
}

export const VDivider = () => {
  const ref = useDivider('vertical')

  return <div className="vDivider" ref={ref} />
}

export const HDivider = () => {
  const ref = useDivider('horizontal')

  return <div className="hDivider" ref={ref} />
}

export const VStack: FC<StackProps> = ({ children }) => {
  return <div className="vStack">{children}</div>
}

export const HStack: FC<StackProps> = ({ children }) => {
  return <div className="hStack">{children}</div>
}
