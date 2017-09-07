import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import { Touchable } from 'react-primitives'

const Border = styled.View`
  width: 35;
  height: 35;
  align-items: center;
  justify-content: center;
  border: ${(props) => props['data-picker'] ? '1px black dashed' : '1px black solid'};
  border-radius: 100;
  display: flex;
`

const InnerColor = styled.View`
  width: 25;
  height: 25;
  border-radius: 100;
  background-image: ${(props) => `linear-gradient(to right, ${props['data-rgb1']}, ${props['data-rgb2']})`}
`

const ColorPicker = ({ colorLeft, colorRight, picker, onClick }) => (
  <Touchable onPress={onClick}>
    <Border data-picker={picker}>
      <InnerColor data-rgb1={colorLeft} data-rgb2={colorRight ? colorRight : colorLeft} />
    </Border>
  </Touchable>
)

ColorPicker.propTypes = {
  colorLeft   : PropTypes.string.isRequired,
  colorRight  : PropTypes.string,
  picker      : PropTypes.bool,
  onClick     : PropTypes.func
};

ColorPicker.defaultProps = {
  colorLeft: '#F2F2F2'
};


export default ColorPicker
