import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import { Touchable } from 'react-primitives'

const Button = styled.View`
  width: 30;
  height: 30;
  user-select: none;
  border-radius: 100;
  cursor: 'pointer';
  background-color: #333333;
  position: relative;
`
const IconContainer = styled.View`
  position: absolute;
  top: 50%;
	left: 50%;
	transform: ${({ translateBy }) => `translate(${translateBy}, ${translateBy})`};
`

const Fab = ({ icon, onClick}) => {
  const { size } = icon.props
  const translateBy = `-${size/2}px`
  return(
    <Touchable onPress={onClick}>
      <Button>
        <IconContainer translateBy={translateBy}>{icon}</IconContainer>
      </Button>
    </Touchable>
  )
}

Fab.propTypes = {
  onClick : PropTypes.func
}

export default Fab
