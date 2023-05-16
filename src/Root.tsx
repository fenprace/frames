import { Frame, Panel, Window } from './Layouts'
import { Stack } from './Layouts/Stack'
import { Count } from './components/Count'
import { Dec } from './components/Dec'
import { Inc } from './components/Inc'

export const Root = () => {
  return (
    <Window>
      <Stack direction="x">
        <Stack direction="y">
          <Frame>
            <Count />
          </Frame>
          <Frame>
            <Inc />
          </Frame>
          <Frame>
            <Dec />
          </Frame>
        </Stack>
        <Frame>
          <Panel />
        </Frame>
        <Stack direction="y">
          <Frame>
            <Panel />
          </Frame>
          <Frame>
            <Panel />
          </Frame>
        </Stack>
      </Stack>
    </Window>
  )
}
