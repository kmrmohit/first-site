import React, { useEffect, useCallback, useState } from 'react';
import { useNavigate, useBlocker } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header';

export default function About(props) {
    const navigate = useNavigate();
   
    function useCallbackPrompt(when) {
        const [showPrompt, setShowPrompt] = useState(false);
        const [lastLocation, setLastLocation] = useState(null);
        const [confirmedNavigation, setConfirmedNavigation] = useState(false);

        const cancelNavigation = useCallback(() => {
            setShowPrompt(false);
        }, []);

        const handleBlockedNavigation = useCallback(
            (nextLocation) => {
                if (
                    !confirmedNavigation &&
                    nextLocation.location.pathname !== location.pathname
                ) {
                    setLastLocation(nextLocation);
                    console.log("inside block handler", confirmedNavigation, location, nextLocation.location);
                    const x = confirm("Do you want to leave?");
                    if(x) {
                        confirmNavigation();
                    }
                    
                    return false;
                }
                return true;
            },
            [confirmedNavigation]
        );
        const confirmNavigation = useCallback(() => {
            setShowPrompt(false);
            setConfirmedNavigation(true);
        }, []);

        useEffect(() => {
            if (confirmedNavigation && lastLocation) {
                navigate(lastLocation.location.pathname);
            }
        }, [confirmedNavigation, lastLocation]);
        useBlocker(handleBlockedNavigation, when);

        return [showPrompt, confirmNavigation, cancelNavigation];
    }

    const [showPrompt, confirmNavigation, cancelNavigation] =
        useCallbackPrompt(true);
    useEffect(() => {
        const msg = 'Do you want to leave?';
        //window.onbeforeunload = () => msg;
        // window.onpopstate = (e) => {
        //     const conf = confirm(msg);
        //     if (conf) {
        //         //navigate('/about');
        //     } else {
        //         navigate('/about');
        //         return;
        //     }
        // };
        return () => {
            window.onbeforeunload = null;
        };
    });
    return (
        <ThemeProvider>
            <Header />
            This is the about page
            <button onClick={(e) => navigate('/')}>Go back</button>
            <iframe
                frameBorder={1}
                width="100px"
                height="100px"
                src="//www.youtube.com/embed/C8kSrkz8Hz8"
                onLoad={() => {
                    console.log('frame loaded');
                }}
            />
        </ThemeProvider>
    );
}

const ThemeProvider = styled.div`
    postion: relative;
    width: 100vw;
    height: 100vh;
`;
