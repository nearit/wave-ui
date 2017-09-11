import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import styledWeb from 'styled-components'
import { /* Platform, */ Touchable } from 'react-primitives'
import { Icon } from '../icons'

const DonutCircle = styledWeb.div`
  border: 5px solid ${(props) => props['data-color'] ? props['data-color'] : 'transparent' };
  border-radius: 50%;
  width: 150px;
  height: 150px;
  transition: all .3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props['data-color']};
    border-color: white;
  }

  &:hover ${Label} {
    color: white;
  }

  &:hover {
    svg {
      fill: white;
    }
  }

`

const Label = styled.Text`
  width: 110;
	height: 24;
	font-family: Raleway;
	font-size: 20;
	font-weight: 900;
	text-align: center;
  color: '#333333';
  margin-bottom: 18;
`
const DonutSmall = ({ state, label, color, icon, onClick }) => (
  <Touchable onPress={onClick}>
    <DonutCircle data-color={color}>
      <Label>{label}</Label>
      <Icon
         icon={icon}
         color={color}
         hoverColor={'#FFFFFF'}
         size={20}
         hover
      />
    </DonutCircle>
  </Touchable>
)

DonutSmall.propTypes = {
  label       : PropTypes.string,
  onClick     : PropTypes.func
};

DonutSmall.defaultProps = {
  state : 'default'
};


export default DonutSmall

// TODO: Mobile
/*
Platform.OS === 'web' ?
  <DonutCircle data-color={borderColor}/>
   : <DonutCircleMobile data-color={borderColor}/>
*/

/*
<ChipContainer data-state={state}>
  <Label data-state={state}>{label}</Label>
    {actionIcon}
</ChipContainer>
*/
