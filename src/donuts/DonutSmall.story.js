import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, array, select } from '@storybook/addon-knobs'
import { Icon } from '../icons'
import DonutSmall from './DonutSmall'

const stories = storiesOf('Donut Small', module)
stories.addDecorator(withKnobs)

const ICON_CANCEL ="M259.413 853.333c-20.48 0-47.787-6.827-61.44-27.307-34.133-34.133-34.133-95.573 0-129.707l505.173-505.173c34.133-34.133 95.573-34.133 129.707 0s34.133 95.573 0 129.707l-505.173 505.173c-20.48 20.48-40.96 27.307-68.267 27.307z M764.587 853.333c-20.48 0-47.787-6.827-61.44-27.307l-505.173-498.347c-34.133-34.133-34.133-95.573 0-129.707s95.573-34.133 129.707 0l505.173 505.173c34.133 34.133 34.133 95.573 0 129.707-20.48 13.653-47.787 20.48-68.267 20.48z"

stories.add(
  'default usage',
  () => (
    <DonutSmall
      label={"chip"}
      color={"#1C9BFF"}
      icon={ICON_CANCEL}
      onClick={() => console.log('chip clicked')}
    />
  )
)
