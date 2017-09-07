import React from 'react'
import { storiesOf } from '@storybook/react'

import ColorPicker from './ColorPicker'

const stories = storiesOf('Color Picker', module)

stories.add(
  'default usage',
  () => (
    <ColorPicker colorLeft={'#1C9BFF'} colorRight={'#00CCFF'}/>
  )
)

stories.add(
  'Select picker',
  () => (
    <ColorPicker picker onClick={() => console.log('pick me! pick me!')}/>
  )
)
