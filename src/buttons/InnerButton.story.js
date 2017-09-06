import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, array, select } from '@storybook/addon-knobs'
import InnerButton from './InnerButton'

const stories = storiesOf('Inner Button', module)
stories.addDecorator(withKnobs)

stories.add(
  'default usage',
  () => (
    <InnerButton
      label='Ok'
      onClick={() => console.log('Click detected')}
    />
  )
)

stories.add(
  'inner confirm',
  () => (
    <InnerButton
      isConfirm={true}
      label='Ok'
      onClick={() => console.log('Click detected')}
    />
  )
)

stories.add(
  'inner secondary confirm',
  () => (
    <InnerButton
      isConfirm={true}
      type={'secondary'}
      label='Cancel'
      onClick={() => console.log('Click detected')}
    />
  )
)
