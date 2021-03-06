import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './Checkbox'
import { Icon } from '../icons'

const stories = storiesOf('Checkbox', module)

const ICON = 'M512 64c282.77 0 512 186.25 512 416 0 229.752-229.23 416-512 416-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z'

stories.add(
  'default usage',
  () => (
    <Checkbox
      label={"label"}
      onClick={() => console.log('Click detected')}
    />
  )
)

stories.add(
  'icon usage',
  () => (
    <Checkbox
      icon={<Icon icon={ICON} size={17}/>}
      onClick={() => console.log('Click detected')}
    />
  )
)
