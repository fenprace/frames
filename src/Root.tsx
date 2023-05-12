import { Panel, Window } from './Layouts'
import { Stack } from './Layouts/Stack'

export const Root = () => {
  return (
    <Window>
      <Stack direction="x">
        <Stack direction="y">
          <Panel />
          <Panel />
        </Stack>
        <Panel />
      </Stack>
    </Window>
  )
}
