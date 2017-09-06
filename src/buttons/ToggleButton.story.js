import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, array, select } from '@storybook/addon-knobs'

import ToggleButton from './ToggleButton'

const stories = storiesOf('Toggle Button', module)
stories.addDecorator(withKnobs)

stories.add(
  'default usage',
  () => (
    <ToggleButton
      label='toggle button'
      onClick={() => console.log('Click detected')}
    />
  )
)

stories.add(
  'custom label',
  () => (
    <ToggleButton
      label={text('label', 'custom label')}
      onClick={() => console.log('Click detected')}
    />
  )
)

stories.add(
  'different states',
  () => (
    <div style={{ backgroundColor: '#000' }}>
      <ToggleButton
        label={text('label', 'label')}
        onClick={() => console.log('Click detected')}
        state={select('state', ['default', 'active', 'inactive'], 'default')}
      />
    </div>
  )
)
