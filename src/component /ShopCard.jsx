import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, Center, HStack } from '@chakra-ui/react'
import { FaBeer, FaFacebook, FaTwitter } from 'react-icons/fa';
const ShopCard = (props) => {
  let { id, name, photo } = props;
  return (
    <>
      <Card maxW="sm" width={350} height={500} >
        <CardBody>
          <Image
            width={300}
            height={200}
            crossOrigin='anonymous'
            src={photo}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />

          <Stack mt="6" spacing="3">


            <Image src='https://pngbie.com/assets/images/icon/ivjSOl1UQ5Pngbie-05302149121622386152.png'
              width={50} height={50}
            ></Image>
            <Center>
            <Heading size="lg"><Text >{name}</Text></Heading>
            </Center>



          </Stack>
        </CardBody>

        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" bgGradient="linear(to-r, red.400,pink.400)" color='white'>
              สั่งซื้อ
            </Button>
            <Button variant="ghost" colorScheme="blue">
              รายละเอียด
            </Button>
          </ButtonGroup>

        </CardFooter>

      </Card>
    </>
  )
}

export default ShopCard