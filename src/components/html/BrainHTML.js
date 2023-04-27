import React from 'react';
import LogoDiv from './LogoDiv';
import LightingInput from './LightingInput';
import ObjectDetsInput from './ObjectDetsInput';
import BoneDecalx from './BoneDecalHtml';
import OpacityHtml from '@components/html/OpacityHtml';
import '@styles/styles.css';

const BrainHtml = () => {
    return (
        <>
            <LogoDiv />
            <OpacityHtml />
            <BoneDecalx />
            <LightingInput />
            <ObjectDetsInput />
        </>
    );
};

export default BrainHtml;
