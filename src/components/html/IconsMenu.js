import React from 'react';
import useSceneStore from '@src/useSceneStore';
import OpacityIcon from '@images/opacity.svg';
import BulbIcon from '@images/bulb.svg';
import { Tooltip } from '@mui/material';
import styled from 'styled-components';
import "@styles/styles.css"

const IconsDiv = styled.div`
  margin-top: 10px;
  position: absolute;
  top: 7px;
  left: 7px;
  height: 30px;
  z-index: 10;
  background-color: aliceblue;
  line-height: normal;
  background-color: rgb(104, 104, 104, 0.7);
  position: fixed;
  top: 0px;
  left: 200px;
  z-index: 20;
  border: .2px solid rgb(243, 243, 243);
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  margin-top: 8px;
`;

const LightingInput = () => {

    const lightingOpen = useSceneStore((state) => state.lightingOpen);
    const opacityOpen = useSceneStore((state) => state.opacityOpen);

    return (
        <IconsDiv id={"iconsdiv"}>
            <Tooltip title="Scene Lighting" placement="left">
                <BulbIcon className={'topicon'} style={{ fill: lightingOpen ? 'white' : 'gray' }} onClick={() => useSceneStore.setState({ lightingOpen: !lightingOpen })} />
            </Tooltip>
            <Tooltip title="Opacity Dialogue" placement="right">
                <OpacityIcon className={'topicon'} style={{ fill: opacityOpen ? 'white' : 'gray' }} onClick={() => useSceneStore.setState({ opacityOpen: !opacityOpen })} />
            </Tooltip>
        </IconsDiv>
    );
};

export default LightingInput;
