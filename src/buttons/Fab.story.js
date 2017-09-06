import React from 'react'
import { storiesOf } from '@storybook/react'
import Fab from './Fab'

const stories = storiesOf('Fab', module)
import { Icon } from '../icons'

const ICONS = { ADD: 'M915.2 588.8h-806.4c-44.8 0-76.8-32-76.8-76.8s32-76.8 76.8-76.8h806.4c44.8 0 76.8 32 76.8 76.8s-32 76.8-76.8 76.8z M512 992c-44.8 0-76.8-32-76.8-76.8v-806.4c0-44.8 32-76.8 76.8-76.8s76.8 32 76.8 76.8v806.4c0 44.8-32 76.8-76.8 76.8z' }

stories.add(
  'default usage',
  () => (
    <Fab
      onClick={() => console.log('Click detected')}
      icon={<Icon icon={ICONS.ADD} color={'primary'}/>}
    />
  )
)
