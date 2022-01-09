import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, SectionWrapper } from './styles';
import SectionTitle from './widgets/section-title';
import SectionContent from './widgets/section-content';
import { SectionList } from './widgets/sections';
import Header from '../header';

export default function HomePage(props) {
    const navigate = useNavigate();
    return (
        <ThemeProvider>
            <Header />
            <Container>
                {SectionList.map(({ title, content }, index) => (
                    <SectionWrapper key={title} pos={index}>
                        <SectionTitle title={title} />
                        <SectionContent content={content} />
                    </SectionWrapper>
                ))}
                <iframe
                    frameBorder={1}
                    width="100px"
                    height="100px"
                    src="//www.youtube.com/embed/C8kSrkz8Hz8"
                    onLoad={() => {
                        console.log('frame loaded');
                    }}
                />
                <button onClick={(e) => navigate('/about')}>Go to about</button>
            </Container>
        </ThemeProvider>
    );
}

const ThemeProvider = styled.div`
    postion: relative;
    width: 100vw;
    height: 100vh;
`;
