import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives'
import { Touchable } from 'react-primitives';

const Button = styled.View`
  width: 300;
  height: 40;
  user-select: none;
  border-radius: 100;
  cursor: pointer;
  background-color: ${props => {
    const state = props['data-state']
    switch (state) {
      case 'active':
        return '#FFFFFF'
      case 'inactive':
        return '#E7E7E7'
      default:
        return '#333333'
    }
  }};
`
const Label = styled.Text`
  color: ${props => props['data-state'] === 'active' ? '#9F92FF' : '#FFFFFF'};
  display: block;
  width: 100%;
  font-family: 'Asap, sans-serif';
  font-size: 16;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  text-transform: uppercase
`

const ToggleButton = ({ label, state, onClick }) => {

  if (state === 'inactive') {
    return (
      <Button data-state={state}>
        <Label data-state={state}>{label}</Label>
      </Button>
    )
  }

  return (
    <Touchable
      disabled={state === 'inactive'}
      onPress={onClick}
    >
      <Button data-state={state}>
        <Label data-state={state}>{label}</Label>
      </Button>
    </Touchable>
  )
}

ToggleButton.propTypes = {
  label   : PropTypes.string,
  state   : PropTypes.string,
  onClick : PropTypes.func
}

export default ToggleButton
