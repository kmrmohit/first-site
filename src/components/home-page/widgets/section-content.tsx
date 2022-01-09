import React from 'react';
import styled from 'styled-components';

interface ComponentProps {
  content: React.ReactNode
}

const ContentContainer = styled.div`
  font-size: 14px;
  padding-left: 8px;
  margin-top: 4px;
  align-self: baseline;
`;

export default function SectionContent(props: ComponentProps) {
  return <ContentContainer>{props.content}</ContentContainer>;
}
