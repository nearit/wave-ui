import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, array, select } from '@storybook/addon-knobs'

import Icon from './Icon'

const ICONS = {
  BUBBLE: 'M512 64c282.77 0 512 186.25 512 416 0 229.752-229.23 416-512 416-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z',
  ADD: 'M915.2 588.8h-806.4c-44.8 0-76.8-32-76.8-76.8s32-76.8 76.8-76.8h806.4c44.8 0 76.8 32 76.8 76.8s-32 76.8-76.8 76.8z M512 992c-44.8 0-76.8-32-76.8-76.8v-806.4c0-44.8 32-76.8 76.8-76.8s76.8 32 76.8 76.8v806.4c0 44.8-32 76.8-76.8 76.8z'
}

const stories = storiesOf('Icon', module)
stories.addDecorator(withKnobs)

stories.add(
  'default usage',
  () => (
    <Icon
      icon={ICONS.ADD}
    />
  )
)

stories.add(
  'different size and color',
  () => (
    <Icon
      icon={ICONS.BUBBLE}
      size={40}
      color={'red'}
    />
  )
)

stories.add(
  'clickable',
  () => (
    <Icon
      icon={ICONS.BUBBLE}
      size={20}
      color={'black'}
      onClick={() => console.log("icon click")}
    />
  )
)
