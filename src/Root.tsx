import { Frame, Panel, Window } from './Layouts'
import { Stack } from './Layouts/Stack'
import { Count } from './components/Count'
import { Dec } from './components/Dec'
import { Inc } from './components/Inc'
import { Set } from './components/Set'

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
          <Count />
        </Frame>
        <Stack direction="y">
          <Frame>
            <Set />
          </Frame>
          <Frame>
            <Panel />
          </Frame>
        </Stack>
      </Stack>
    </Window>
  )
}
