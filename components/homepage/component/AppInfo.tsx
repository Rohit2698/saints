import { Box, Divider, Grid, Flex, Text, Image } from '@mantine/core'
import React from 'react'
import NftMarketPlaceIcon from "../../../assets/iconmarketplace.png";
import ChurchIcon from "../../../assets/iconchurch.png";

const AppInfo = () => {
  return (
    <Box mt={"100px"} px={"50px"}>
      <Divider my={"40px"} />
      <Grid>
        <Grid.Col span={6}>
          <Flex gap={"10px"}>
            <Box>
              <Image src={NftMarketPlaceIcon} height={"48px"} width={"48px"} />
            </Box>
            <Box>
              <Text color={"#fff"}>
                NFT MARKETPLACE
              </Text>
              <Text color={"#fff"}>
                SHORT BRIEF ABOUT COMPANY’S GOALS & MISSIONS: Lorem ipsum dolor sit uge amet, consectetur adipiscing elit, sedsdsdsd do eiusmod tempor incididunt ut lasds sds aminim veniam.
              </Text>
            </Box>
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex gap={"10px"}>
            <Box>
              <Image src={ChurchIcon} height={"48px"} width={"48px"} />
            </Box>
            <Box>
              <Text color={"#fff"}>
                A DIGITAL BLESSING
              </Text>
              <Text color={"#fff"}>
                SHORT BRIEF ABOUT COMPANY’S GOALS & MISSIONS:  Lorem ipsum dolor sit uge amet, consectetur  adipiscing elit,  do eiusmod tempor incididunt ut lasds sds  aminim veniam.
              </Text>
            </Box>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  )
}

export default AppInfo