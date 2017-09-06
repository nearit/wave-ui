import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import { Touchable } from 'react-primitives'

const Button = styled.View`
  min-width: 100px;
  max-width: 400px;
  height: 35;
  user-select: none;
  border-radius: 100;
  cursor: 'pointer';
  background-color: ${({ type }) => type === 'primary' ? '#68C600' : '#F2F2F2'};
`
const Label = styled.Text`
  color: ${({ type }) => type === 'primary' ? '#FFFFFF' : '#333333'};
  display: block;
  width: 100%;
  font-family: 'Asap, sans-serif';
  font-size: 16;
  font-weight: bold;
  text-align: center;
  line-height: 35;
`

/**
  type:
    - primary (default)
    - secondary
*/
const PopupConfirmButton = ({ label, type, onClick}) => (
  <Touchable onPress={onClick}>
    <Button type={type}>
      <Label type={type}>{label}</Label>
    </Button>
  </Touchable>
)

PopupConfirmButton.propTypes = {
  label   : PropTypes.string,
  onClick : PropTypes.func
}

PopupConfirmButton.defaultProps = {
  type: 'primary'
};

export default PopupConfirmButton
