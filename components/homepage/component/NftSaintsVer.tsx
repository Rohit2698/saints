import { Box, Image, Flex, Grid, Text } from '@mantine/core'
import React from 'react'
import NftImage from "../../../assets/nftimage.png";
import HandShakeLeft from "../../../assets/handshakeleft.png"
import HandShakeRight from "../../../assets/handshakeright.png"
import Ellipsis from "../../../assets/ellipse.png";

const NftSaintsVer = () => {
    return (
        <Box>
            <Flex align={"center"} mt={"60%"}>
                <Image src={HandShakeLeft} height={"575px"} style={{ position: "absolute", left: 30 }} width={"fit-content"} />
                <Image src={Ellipsis} height={"548px"} style={{ position: "absolute", marginLeft: 250 }} width={"fit-content"} />
                <Image src={HandShakeRight} height={"509px"} style={{ position: "absolute", right: 10 }} width={"fit-content"} />
            </Flex>
            <Flex justify={"center"} bottom={"100px"} pos={"relative"} left={"30px"}>
                <Image src={NftImage} width={"173px"} height={"183.91px"} />
            </Flex>
        </Box>
    )
}

export default NftSaintsVer