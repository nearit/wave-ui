import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import { Touchable } from 'react-primitives'

const Button = styled.View`
  width: 100px;
  height: 35;
  user-select: none;
  border-radius: 100;
  cursor: 'pointer';
  background-color: #333333;
`
const Label = styled.Text`
  color: #FFFFFF;
  display: block;
  width: 100%;
  font-family: 'Asap, sans-serif';
  font-size: 16;
  font-weight: bold;
  text-align: center;
  line-height: 35;
`

const PopupButton = ({ label, onClick}) => (
  <Touchable onPress={onClick}>
    <Button>
      <Label>{label}</Label>
    </Button>
  </Touchable>
)

PopupButton.propTypes = {
  label   : PropTypes.string,
  onClick : PropTypes.func
}

export default PopupButton
