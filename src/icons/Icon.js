import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import styledweb from 'styled-components'
import { Platform } from 'react-primitives'
// import Svg, { Path } from 'react-native-svg'

const IconStyled = styledweb.svg`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  fill: ${({ color }) => color === 'primary' ? '#9F92FF' : color }
`

const WebIcon = ({size, color, icon}) => (
  <IconStyled size={size} color={color} viewBox="0 0 1024 1024">
    <path d={icon}></path>
  </IconStyled>
)

/*
const MobileIcon = ({size, color, icon}) => (
  <Svg width={size} height={size}>
    <Path fill={color} d={icon} />
  </Svg>
)
*/

const Icon = ({ icon, size, color}) => (
  //Platform.OS === 'web' ?
    <WebIcon size={size} color={color} icon={icon} />
    // : <MobileIcon size={size} color={color} icon={icon} />
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 12,
  color: '#333333'
};


export default Icon
