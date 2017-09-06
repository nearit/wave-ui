import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import { Touchable } from 'react-primitives'

const Button = styled.View`
  min-width: 150;
  max-width: 400;
  height: 35;
  user-select: none;
  border-radius: 100;
  cursor: 'pointer';
  background-color: ${({ type }) => type === 'action' ? '#9F92FF' : '#333333'};
  position: relative;
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

const IconContainer = styled.View`
  position: absolute;
  top: 14px;
  left: 20px;
`

/**
  type:
    - primary (default)
    - action

  isConfirm:
    - true
    - false (default)
*/
const MainConfirmButton = ({ type, label, icon, onClick}) => (
  <Touchable onPress={onClick}>
    <Button type={type}>
      <IconContainer>{icon}</IconContainer>
      <Label>{label}</Label>
    </Button>
  </Touchable>
)

MainConfirmButton.propTypes = {
  label   : PropTypes.string,
  type    : PropTypes.string,
  onClick : PropTypes.func
}

MainConfirmButton.defaultProps = {
  type: 'primary'
};

export default MainConfirmButton
