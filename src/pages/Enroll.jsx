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
  useBreakpointValue,
  useToast,
  Icon,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { EnrollFX } from '../services/AuthenService';




const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzj90XMSA5e5UweZHehAbixY1RtYQS1qUfMw&usqp=CAU',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
];

export default function Enroll() {
  const Toast = useToast();

  const schema = yup.object().shape({
   name:yup.string().required('กรุณากรอกชื่อด้วยครับ!'),
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
    const result = await EnrollFX(data);
      console.log(result);
    try{
      Toast({
        title: 'Account created.',
        description: "5555",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position:"center"
      })

      

    }catch(error){
      Toast({
        title: 'Account created.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:"bottom"
      })
  console.log(error)
    }

   };
  return (
    <Box position={'relative'}>
        <Box boxSize='sm'>
    <Image className='img' 
    
    src='https://freepngimg.com/thumb/coffee/62115-tea-coffee-drink-starbucks-latte-free-download-image.png' 
    alt='Dan Abramov'  
   
    objectFit='cover' />
</Box>
     
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
         Akkharachai   {' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, red.400,pink.400)"
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
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
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
             Enroll My Account
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
            Enroll เพื่ออนาคตที่ดีของคุณของคุณ
            </Text>
          </Stack>

          {/* ฟอร์มลงทะเบียน */}
          <Box as={'form'} mt={2} onSubmit={handleSubmit(onsubmit)} noValidate >
            <Stack spacing={4}>

             <FormControl isInvalid = {errors.name ?  true : false}>
             <Input
                 {...register("name")}
                placeholder="Firstname"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
                <FormErrorMessage>
                {errors.name && errors.name?.message}
                </FormErrorMessage>


             </FormControl>
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
            {/* ปุ่มsubmit */}
            <Button
              type="submit"
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, pink.400,red.100)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.100,pink.400)',
                boxShadow: 'xl',
              }}>
              Enroll
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
     
      <circle cx="100.5" cy="800.5" r="321.5" fill="#f08080" />
      {/* <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" /> */}
     
    </Icon>
  );
};