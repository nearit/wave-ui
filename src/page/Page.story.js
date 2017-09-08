import React from 'react'
import { storiesOf } from '@storybook/react'

import Page from './Page'

const stories = storiesOf('Page', module)

stories.add(
  'default usage',
  () => (
    <Page colorLeft={'#1C9BFF'} colorRight={'#00CCFF'}>
      <div>line line</div>
      <div>line 2 line 2</div>
      <div>line 3 line 3</div>
      <div>line 4 line 4</div>
      <div>line 5 line 5</div>
    </Page>
  )
)
