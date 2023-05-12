interface VLayout {
  type: 'vertical'
  children: Layout[]
  id: string
  basis?: number
}

interface HLayout {
  type: 'horizontal'
  children: Layout[]
  id: string
  basis?: number
}

interface TabLayout {
  id: string
  type: 'tab'
  children: ReactNode
}

interface FrameLayout {
  type: 'frame'
  children: ReactNode
  id: string
  basis?: number
  tabs: TabLayout[]
  currentTabId: string
}

interface DividerLayout {
  type: 'divider'
  id: string
}

type Layout = VLayout | HLayout | FrameLayout | DividerLayout
