import React from 'react'
import { Box, Flex, Image } from '@mantine/core'
import Logo from "../../../assets/saintlogo.png";
import SentSaintLogo from "../../../assets/sentsaintlogo.png";

const Header = () => {
    return (
        <Box>
            <Flex justify={"center"} align={"center"}>
                <Image src={Logo} alt={"logo"} width={"200px"} />
                <Image src={SentSaintLogo} alt={"logo"} width={"300px"} />
            </Flex>
        </Box>
    )
}

export default Header