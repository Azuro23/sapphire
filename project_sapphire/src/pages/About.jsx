import {   
  Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Icon,
    Img,
    Link,
    SimpleGrid,
    Stack,
    Text,
    } from "@chakra-ui/react";
import StackEx from './aboutText'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { members } from './data'

export default function About() {

    return (
      <Flex backgroundColor={"#062143"} bgGradient={90} >
    <Container maxW={''}  py={{ base: '16', md: '24', }} >
    <Stack spacing={{base: '12', md: '16',  }} padding={ "50" } >
      <Stack spacing={{ base: '8',  md: '10', }} direction={{ base: 'column', lg: 'row',}}justify="space-between" >
        <Stack spacing="3" maxW="3xl">
          <Text fontSize={{ base: 'sm', md: 'xl',}} color="#FCB721" fontWeight="semibold">
            Welcome
          </Text>
          <Stack spacing={{ base: '4', md: '5', }} >
            <Heading  size={{ base: 'sm', md: 'xl', }} color="#FCB721" >
              Meet our team
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl',  }} color="#FCB721"  >
            Azuro is owned and run by a group of hands-on partners who actively work on each and every project. There is no B-team. Working with Azuro means that our entire leadership team is involved in the day-to-day of your project, providing a level of dedication and attention not found in a large firm!
            </Text>
          </Stack>
        </Stack>
        <Stack
          direction={{base: 'column-reverse', md: 'row', }} spacing="3" >
          <Button colorScheme="purple">
            Contact us
          </Button>
          <Button >
            Join our team
          </Button>
        </Stack>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2,  lg: 4, }} columnGap="20"  rowGap={{base: '10', lg: '16', }} color="#FCB721">
        {members.map((member) => (
          <Stack key={member.name} spacing="4">
            <Stack spacing="5">
              
              <Img shadow="2xl" src={member.image} alt={member.name} h="72" objectFit="cover" />
              <Stack spacing="1">
                <Text fontWeight="medium" fontSize={{ base: 'lg', md: 'xl', }} >
                  {member.name}
                </Text>
                <Text color="accent" fontSize={{ base: 'md', md: 'lg', }} >
                  {member.role}
                </Text>
              </Stack>
            </Stack>
            <HStack spacing="4" color="fg.subtle">
              {[FaGithub, FaLinkedin, FaTwitter].map((item, id) => (
                <Link href="#" key={id}>
                  <Icon as={item} boxSize="5" />
                </Link>
              ))}
            </HStack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
    <Stack> 
      <Box>    
     <StackEx />
     </Box> 
    </Stack>
  </Container>
  
  </Flex>
    )
}