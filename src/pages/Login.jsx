import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useToast,
  FormControl,
  FormErrorMessage,
  useBreakpointValue,

  Icon,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { LoginFX} from '../services/AuthenService';
import { useNavigate } from 'react-router-dom';
const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png',
  },
  
  {
    name: 'Kent Dodds',
    url: 'https://e0.pxfuel.com/wallpapers/413/122/desktop-wallpaper-naruto-png-2-png-naruto-face-thumbnail.jpg',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://e0.pxfuel.com/wallpapers/877/1021/desktop-wallpaper-transparent-sasuke-png-sasuke-rinnegan-png-adult-sasuke-rinnegan.jpg',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://i.pinimg.com/originals/76/4d/ae/764daea2aefa49d14e32f7c59f43a1d0.jpg',
  },
];

export default function Login() {
  const Toast = useToast();
  const navi = useNavigate();
  const schema = yup.object().shape({
   email:yup.string().required('กรุณาป้อนอีเมลด้วย').email('ต้องใช้รูปเเบบอีเมล'),
   password:yup.string().required('กรุณาป้อนรหัสผ่าน').min(4,'รหัสผ่านอย่างน้อย 4 ตัวนะ')
  });
  const {
    register,handleSubmit,formState: { errors },} = useForm({
    resolver: yupResolver(schema),
    mode:"",
  });

   const onsubmit = async (data) => {
    console.log(data)
    try{
    const result = await LoginFX(data);
      console.log(result.data);
      
    if(result.data.access_token) {
      localStorage.setItem("token", JSON.stringify(result.data.access_token))
      navi("/home");
    }

    if(result){
      Toast({
        title: 'Account created.',
        description: result.statusText ,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position:"bottom"
        
        

      })
    }
    }catch(error){
      Toast({
        title: 'Account error',
        description: error.response.data.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:"bottom"
      })
    }

    
    

   };
  return (


    
    <Box position={'relative'}>
    <Box boxSize='sm'>
    <Image src='https://www.pngplay.com/wp-content/uploads/9/Starbucks-Coffee-Transparent-Free-PNG.png' 
    alt='Dan Abramov'  
   
    objectFit='cover' />
</Box>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}
        >
          
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
         Akkharachai   {' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, green.400,orange.200)"
              bgClip="text">
              &
            </Text>{' '}
          Full-Stack Developers
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, green.100,green.900)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
            Login
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
            login เพื่ออนาคตที่ดีของคุณของคุณ
            </Text>
          </Stack>
          <Box as={'form'} mt={2} onSubmit={handleSubmit(onsubmit)} noValidate>
            <Stack spacing={4}>
              
            <FormControl isInvalid = {errors.email ?  true : false}>
             <Input
              {...register("email")}
                placeholder="E-mail"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
                <FormErrorMessage>
                {errors.name && errors.email?.message}
                </FormErrorMessage>


             </FormControl>
             <FormControl isInvalid = {errors.password ?  true : false}>
             <Input
              {...register("password")}
                placeholder="password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
                <FormErrorMessage>
                {errors.name && errors.password?.message}
                </FormErrorMessage>


             </FormControl>
             
            </Stack>
            <Button
            type='submit'
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, green.400,green.100)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, green.100,green.400)',
                boxShadow: 'xl',
              }}>
              Letgo!
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
     
      
      {/* <circle cx="100.5" cy="100.5" r="101.5" fill="#48BB78" /> */}
      {/* <circle cx="291" r="139" fill="#48BB78" /> */}
      <circle cx="10.5" cy="489.5" r="101.5" fill="#48BB78" />
     
    </Icon>
  );
};