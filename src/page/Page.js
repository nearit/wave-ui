import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'

const PageContainer = styled.View`
  margin-left: 130;
  margin-right: 130;
`
const Page = ({ children }) => (
  <PageContainer >
    {children}
  </PageContainer>
)

Page.propTypes = {
  children : PropTypes.node
};


export default Page
