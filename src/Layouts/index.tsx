import { FC, ReactNode } from 'react'

export interface StackProps {
  children?: ReactNode
}

export interface FrameProps {
  children?: ReactNode
}

export const Window: FC<StackProps> = ({ children }) => {
  return <div className="window">{children}</div>
}

export const Frame: FC<FrameProps> = ({ children }) => {
  return (
    <div className="frame">
      <div className="tabBar">Tabs</div>
      {children}
    </div>
  )
}

export const Panel: FC = () => {
  return <div className="panel">Panel</div>
}
