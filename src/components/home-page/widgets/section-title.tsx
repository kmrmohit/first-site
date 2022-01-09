import React from 'react'
import styled from 'styled-components'

interface ComponentProps {
  title: React.ReactNode
}

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  align-self: baseline;
`

export default function SectionTitle(props: ComponentProps) {
  return <Title>{props.title}</Title>
}
