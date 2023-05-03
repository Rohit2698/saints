import { Grid } from '@mantine/core'
import React from 'react'
import LeftHome from "../../assets/homepageleft.png";
import RightHome from "../../assets/homepageright.png";
import CenterImage from "../../assets/homepageModal.png";
import Header from './component/Header';
import AppInfo from './component/AppInfo';
import NftSaintsVer from './component/NftSaintsVer';

const Homepage = () => {
    return (
        <Grid>
            <Grid.Col sx={{
                backgroundColor: 'red',
                backgroundImage: `url(${LeftHome})`
            }}
                span={2} />
            <Grid.Col sx={{
                height: '7078.89px',
                backgroundColor: 'red',
                backgroundImage: `url(${CenterImage})`
            }} span={8}>
                <Header />
                <AppInfo />
                <NftSaintsVer />
            </Grid.Col>
            <Grid.Col sx={{
                backgroundColor: 'red',
                backgroundImage: `url(${RightHome})`
            }} span={2} />
        </Grid>
    )
}

export default Homepage