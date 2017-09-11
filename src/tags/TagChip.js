import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import { Touchable } from 'react-primitives'
import { Icon } from '../icons'

const ChipContainer = styled.View`
  height: 25;
  padding: 3px 9px 3px 18px;
  border-radius: 100;
  background-color: ${(props) => props['data-state'] === 'active' ? '#FFFFFF' : '#F2F2F2'};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Label = styled.Text`
  margin-right: 9;
  flex: 1;
  color: ${(props) => props['data-state'] === 'disabled' ? '#CACACA' : '#333333'}
  font-size: 15;
  font-style: italic;
  text-align: center;
  white-space: nowrap;
  line-height: 19;
  user-select: none;
`

/**

state:
  - default
  - active
  - disabled

*/
const TagChip = ({ state, label, actionIcon, onClick }) => (
  <Touchable onPress={onClick}>
    <ChipContainer data-state={state}>
      <Label data-state={state}>{label}</Label>
        {actionIcon}
    </ChipContainer>
  </Touchable>
)

TagChip.propTypes = {
  state       : PropTypes.string,
  label       : PropTypes.string,
  onClick     : PropTypes.func
};

TagChip.defaultProps = {
  state : 'default'
};


export default TagChip
