import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, array, select } from '@storybook/addon-knobs'

import MainConfirmButton from './MainConfirmButton'
import { Icon } from '../icons'

const ICONS = { ADD: 'M915.2 588.8h-806.4c-44.8 0-76.8-32-76.8-76.8s32-76.8 76.8-76.8h806.4c44.8 0 76.8 32 76.8 76.8s-32 76.8-76.8 76.8z M512 992c-44.8 0-76.8-32-76.8-76.8v-806.4c0-44.8 32-76.8 76.8-76.8s76.8 32 76.8 76.8v806.4c0 44.8-32 76.8-76.8 76.8z' }

const stories = storiesOf('Main Confirm Button', module)
stories.addDecorator(withKnobs)

stories.add(
  'default usage',
  () => (
    <MainConfirmButton
      label='main confirm'
      onClick={() => console.log('Click detected')}
      icon={<Icon icon={ICONS.ADD} color={'primary'}/>}
    />
  )
)

stories.add(
  'add action label',
  () => (
    <MainConfirmButton
      type={'action'}
      label={'action confirm'}
      onClick={() => console.log('Click detected')}
      icon={<Icon icon={ICONS.ADD} color={'white'}/>}
    />
  )
)
