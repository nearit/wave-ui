import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import { Touchable } from 'react-primitives'

const Button = styled.View`
  width: ${({ isConfirm }) => isConfirm ? '150' : '170'};
  height: 35;
  user-select: none;
  border-radius: 100;
  cursor: 'pointer';
  background-color: ${({ type }) => type === 'secondary' ? '#F2F2F2' : '#333333'};
  position: relative;
`
const Label = styled.Text`
  color: ${({ type }) => type === 'secondary' ? '#333333' : '#FFFFFF'};
  display: block;
  width: 100%;
  font-family: 'Asap, sans-serif';
  font-size: 16;
  font-weight: bold;
  text-align: center;
  line-height: 35;
  text-transform: uppercase
`

/**
  type:
    - primary (default)
    - secondary

  isConfirm:
    - true
    - false (default)
*/
const InnerButton = ({ type, isConfirm, label, onClick}) => (
  <Touchable onPress={onClick}>
    <Button type={type} isConfirm={isConfirm}>
      <Label type={type}>{label}</Label>
    </Button>
  </Touchable>
)

InnerButton.propTypes = {
  label   : PropTypes.string,
  type    : PropTypes.string,
  onClick : PropTypes.func
}

InnerButton.defaultProps = {
  type: 'primary',
  isConfirm : false
};

export default InnerButton
