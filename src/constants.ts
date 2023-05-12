const layout: Layout = {
  id: v1(),
  type: 'horizontal',
  children: [
    {
      id: v1(),
      type: 'vertical',
      basis: 0.2,
      children: [
        {
          id: v1(),
          type: 'frame',
          children: <Panel />,
          basis: 0.33,
          tabs: [
            {
              id: v1(),
              type: 'tab',
              children: <Panel />,
            },
          ],
        },
        { id: v1(), type: 'divider' },
        { id: v1(), type: 'frame', children: <Panel /> },
      ],
    },

    { id: v1(), type: 'divider' },

    {
      id: v1(),
      type: 'vertical',
      children: [
        { id: v1(), type: 'frame', children: <Panel />, basis: 0.75 },
        { id: v1(), type: 'divider' },
        { id: v1(), type: 'frame', children: <Panel /> },
      ],
    },

    { id: v1(), type: 'divider' },

    {
      id: v1(),
      type: 'vertical',
      basis: 0.2,
      children: [
        { id: v1(), type: 'frame', children: <Panel /> },
        { id: v1(), type: 'divider' },
        { id: v1(), type: 'frame', children: <Panel /> },
      ],
    },
  ],
}

const render = (root: Layout) => {
  if (root.type === 'divider') return <Divider key={root.id} />

  if (root.type === 'frame')
    return (
      <Frame key={root.id} defaultBasis={root.basis}>
        {root.children}
      </Frame>
    )

  const Comp = root.type === 'horizontal' ? HStack : VStack

  // const newChildren: Layout[] = []
  // for (let i = 0; i < root.children.length; i++) {
  //   const child = root.children[i]
  //   if (i !== 0) newChildren.push({ id: v1(), type: 'divider' })
  //   newChildren.push(child)
  // }

  return (
    <Comp key={root.id} defaultBasis={root.basis}>
      {root.children.map((child) => {
        return render(child)
      })}
    </Comp>
  )
}
