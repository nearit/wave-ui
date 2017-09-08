import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import styledweb from 'styled-components'
import { Platform } from 'react-primitives'
import { Touchable } from 'react-primitives'

const IconStyled = styledweb.svg`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  fill: ${({ color }) => color === 'primary' ? '#9F92FF' : color };
`

const Container = styled.View`
  cursor: pointer;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`
const WebIcon = ({size, color, icon, style}) => (
  <IconStyled size={size} color={color} viewBox="0 0 1024 1024" style={style}>
    <path d={icon}></path>
  </IconStyled>
)

/*
const MobileIcon = ({size, color, icon}) => (
  <Svg width={size} height={size}>
    <Path fill={color} d={icon} />
  </Svg>
)

//Platform.OS === 'web' ?
  <WebIcon size={size} color={color} icon={icon} style={style}/>
  // : <MobileIcon size={size} color={color} icon={icon} />

*/

const Icon = ({ icon, size, color, style, onClick}) => {
  if (!onClick) {
    return (
      <WebIcon size={size} color={color} icon={icon} style={style}/>
    )
  }

  return (
    <Touchable onPress={onClick}>
      <Container width={size} height={size}>
        <WebIcon size={size} color={color} icon={icon} style={style}/>
      </Container>
    </Touchable>
  )
}

Icon.propTypes = {
  icon    : PropTypes.string.isRequired,
  size    : PropTypes.number,
  color   : PropTypes.string,
  onClick : PropTypes.func
};

Icon.defaultProps = {
  size: 12,
  color: '#333333'
};


export default Icon
