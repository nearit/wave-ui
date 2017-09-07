import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import { Touchable, View } from 'react-primitives';
import { Icon } from '../icons'

const CHECKED_ICON = "M383.253 853.333c-20.48 0-40.96-6.827-54.613-20.48l-204.8-204.8c-34.133-34.133-34.133-81.92-0-116.053 34.133-27.307 81.92-27.307 109.227 0l143.36 143.36 395.947-464.213c27.307-34.133 75.093-34.133 109.227-13.653 34.133 27.307 40.96 75.093 13.653 109.227l-457.387 532.48c-6.827 20.48-27.307 34.133-54.613 34.133 0 0 0 0 0 0z"

const Container = styled.View`
  min-width: 40;
  user-select: none;
  position: relative;
  display: flex;
  flex-direction: row;
`

const Toggle = styled.View`
  width: 18;
  height: 18;
  border-radius: 2;
  border: solid 1px ${({ checked }) => checked ? '#9F92FF' : '#E1E1E1'};
  background-color: ${({ checked }) => checked ? '#9F92FF' : '#FFFFFF'}
`

const Label = styled.Text`
  margin-left: 3;
  padding-left: 3;
`

class Checkbox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      checked : false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { onClick } = this.props
    let { checked } = this.state
    checked = !checked
    this.setState({ checked }, () => {
      const { checked } = this.state
      onClick(checked)
    })
  }

  renderCheckIcon() {
    const { checked } = this.state
    return !checked ? '' : <Icon icon={CHECKED_ICON} size={14} color={'white'}/>
  }

  renderLabel() {
    const { label, icon } = this.props
    return label ? <Label>{label}</Label> : <View style={{marginLeft : '10'}}>{icon}</View>
  }

  render() {
    const { checked } = this.state
    return (
      <Touchable onPress={this.handleClick}>
        <Container>
          <Toggle checked={checked}>
            {this.renderCheckIcon()}
          </Toggle>
          {this.renderLabel()}
        </Container>
      </Touchable>
    )
  }

}

Checkbox.propTypes = {
  onClick : PropTypes.func
}

export default Checkbox
