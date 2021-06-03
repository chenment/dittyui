import { defineComponent } from 'vue'
import { DButton } from '../src/main'
import SvgIcon from './SvgIcon'

export default defineComponent({
  name: 'ButtonPg',
  setup() {
    const slots = {
      icon: () => <SvgIcon />,
    }

    return () => (
      <>
        <div class="p-4">
          <div class="p-4 space-x-2">
            <DButton color="primary">Primary</DButton>
            <DButton color="secondary">Secondary</DButton>
            <DButton color="success">Success</DButton>
            <DButton color="info">Info</DButton>
            <DButton color="warning">Warning</DButton>
            <DButton color="danger">Danger</DButton>
            <DButton color="dark">Dark</DButton>
            <DButton color="light">Light</DButton>
          </div>

          <div class="p-4 space-x-2">
            <DButton color="primary" outlined>
              Primary
            </DButton>
            <DButton color="secondary" outlined>
              Secondary
            </DButton>
            <DButton color="success" outlined>
              Success
            </DButton>
            <DButton color="info" outlined>
              Info
            </DButton>
            <DButton color="warning" outlined>
              Warning
            </DButton>
            <DButton color="danger" outlined>
              Danger
            </DButton>
            <DButton color="dark" outlined>
              Dark
            </DButton>
            <DButton color="light" outlined>
              Light
            </DButton>
          </div>

          <div class="p-4 space-x-2">
            <DButton color="primary" text>
              Primary
            </DButton>
            <DButton color="secondary" text>
              Secondary
            </DButton>
            <DButton color="success" text>
              Success
            </DButton>
            <DButton color="info" text>
              Info
            </DButton>
            <DButton color="warning" text>
              Warning
            </DButton>
            <DButton color="danger" text>
              Danger
            </DButton>
            <DButton color="dark" text>
              Dark
            </DButton>
            <DButton color="light" text>
              Light
            </DButton>
          </div>
        </div>
        <div class="p-4 bg-gray-800">
          <div class="p-4 space-x-2">
            <DButton color="primary">Primary</DButton>
            <DButton color="secondary">Secondary</DButton>
            <DButton color="success">Success</DButton>
            <DButton color="info">Info</DButton>
            <DButton color="warning">Warning</DButton>
            <DButton color="danger">Danger</DButton>
            <DButton color="dark">Dark</DButton>
            <DButton color="light">Light</DButton>
          </div>
          <div class="p-4 space-x-2">
            <DButton color="primary" outlined>
              Primary
            </DButton>
            <DButton color="secondary" outlined>
              Secondary
            </DButton>
            <DButton color="success" outlined>
              Success
            </DButton>
            <DButton color="info" outlined>
              Info
            </DButton>
            <DButton color="warning" outlined>
              Warning
            </DButton>
            <DButton color="danger" outlined>
              Danger
            </DButton>
            <DButton color="dark" outlined>
              Dark
            </DButton>
            <DButton color="light" outlined>
              Light
            </DButton>
          </div>

          <div class="p-4 space-x-2">
            <DButton color="primary" text>
              Primary
            </DButton>
            <DButton color="secondary" text>
              Secondary
            </DButton>
            <DButton color="success" text>
              Success
            </DButton>
            <DButton color="info" text>
              Info
            </DButton>
            <DButton color="warning" text>
              Warning
            </DButton>
            <DButton color="danger" text>
              Danger
            </DButton>
            <DButton color="dark" text>
              Dark
            </DButton>
            <DButton color="light" text>
              Light
            </DButton>
          </div>
        </div>

        <div class="p-4 grid">
          <DButton>Block</DButton>
        </div>

        <div class="p-4 space-x-2">
          <DButton size="large">Large</DButton>
          <DButton>Default</DButton>
          <DButton size="small">Small</DButton>
        </div>

        <div class="p-4 space-x-2">
          <DButton v-slots={slots}>Caption</DButton>

          <DButton color="secondary" v-slots={slots}>
            Caption
          </DButton>

          <DButton color="success" v-slots={slots}>
            Caption
          </DButton>

          <DButton color="info" v-slots={slots}>
            Caption
          </DButton>

          <DButton color="warning" v-slots={slots}>
            Caption
          </DButton>
          <DButton color="danger" v-slots={slots}>
            Caption
          </DButton>
          <DButton color="dark" v-slots={slots}>
            Caption
          </DButton>
          <DButton color="light" v-slots={slots}>
            Caption
          </DButton>
        </div>

        <div class="p-4 space-x-2">
          <DButton outlined v-slots={slots}>
            Caption
          </DButton>

          <DButton color="secondary" outlined v-slots={slots}>
            Caption
          </DButton>

          <DButton color="success" outlined v-slots={slots}>
            Caption
          </DButton>

          <DButton color="info" outlined v-slots={slots}>
            Caption
          </DButton>

          <DButton color="warning" outlined v-slots={slots}>
            Caption
          </DButton>
          <DButton color="danger" outlined v-slots={slots}>
            Caption
          </DButton>
          <DButton color="dark" outlined v-slots={slots}>
            Caption
          </DButton>
          <DButton color="light" outlined v-slots={slots}>
            Caption
          </DButton>
        </div>

        <div class="p-4 space-x-2">
          <DButton text v-slots={slots}>
            Caption
          </DButton>

          <DButton color="secondary" text v-slots={slots}>
            Caption
          </DButton>

          <DButton color="success" text v-slots={slots}>
            Caption
          </DButton>

          <DButton color="info" text v-slots={slots}>
            Caption
          </DButton>

          <DButton color="warning" text v-slots={slots}>
            Caption
          </DButton>
          <DButton color="danger" text v-slots={slots}>
            Caption
          </DButton>
          <DButton color="dark" text v-slots={slots}>
            Caption
          </DButton>
          <DButton color="light" text v-slots={slots}>
            Caption
          </DButton>
        </div>

        <div class="p-4 space-x-2">
          <DButton size="large" v-slots={slots}>
            Hello world
          </DButton>
          <DButton size="large" v-slots={slots}></DButton>
          <DButton size="default" v-slots={slots}>
            Hello world
          </DButton>
          <DButton size="default" v-slots={slots}></DButton>
          <DButton size="small" v-slots={slots}>
            Hello world
          </DButton>
          <DButton size="small" v-slots={slots}></DButton>
        </div>

        {/* color size 传入不合法值，要有console.warn()提醒提醒 */}
        <div class="p-4 space-x-2">
          <DButton size="sdf" v-slots={slots} color="asdfadsf" outlined="yes">
            pass invalid value to size, color or outlined props.
          </DButton>
        </div>

        <div class="p-4 space-x-2">
          <DButton v-slots={slots}>Hello world</DButton>
          <DButton v-slots={slots} icon="right">
            Hello world
          </DButton>
        </div>

        <div class="p-4">
          <DButton disabled>Disabled</DButton>
        </div>

        <div class="p-4 space-x-2">
          <DButton v-slots={slots} loading>
            Hello world
          </DButton>
          <DButton v-slots={slots} icon="right" loading>
            Hello world
          </DButton>
        </div>

        <div class="p-4 space-x-2">
          <DButton onClick={() => alert('Hello button')}>Click me!</DButton>
        </div>
      </>
    )
  },
})
