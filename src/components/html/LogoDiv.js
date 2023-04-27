
import React from 'react';
import styled from 'styled-components';
import '@styles/styles.css';

const LogoDivX = styled.div`
    outline - style: none;
    position: absolute;
    top: 7px;
    left: 7px;
    width: 100px;
    height: 100px;
    z - index: 10;
    color: aliceblue;
    pointer - events: none;
`;

const LogoImage = styled.img`
    max - height: 44px;
    outline - style: none;
    -webkit - touch - callout: none;
    -webkit - user - select: none;
    -khtml - user - select: none;
    -moz - user - select: none;
    -ms - user - select: none;
    user - select: none;
    pointer - events: none;
`;


const LogoDiv = () => {
    return (
        <LogoDivX id="logodiv">
            <LogoImage src="@images/wideLogo.5x.png" alt="Logo" />
        </LogoDivX>
    );
};

export default LogoDiv;
