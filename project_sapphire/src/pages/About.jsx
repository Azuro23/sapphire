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
    Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalBody, useDisclosure,
    } from "@chakra-ui/react";
import StackEx from './aboutText'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClientInfoCard } from "./ClientInfo";



export default function About() {
  const Overlay = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [overlay, setOverlay] = useState(<Overlay />)

  const { id } = useParams();
	const [developers, setDevelopers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	const getDataForDevelopers = async () => {
		try {
			const res = await fetch(
				`https://azuro-agency-default-rtdb.firebaseio.com/developers.json`
			);

			if (!res.ok) throw new Error('Something went wrong');

			const developers = await res.json();
			console.log('List of developers: ', developers);

			setDevelopers(developers);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setError(error.msg);
		}
	};

	useEffect(() => {
		getDataForDevelopers();
	}, []);

	if (isLoading) {
		return <Box>Loading...</Box>;
	}

	if (error) {
		return <Box color={'red'}>{error.msg}</Box>;
	}
 

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
          <Button colorScheme="purple" onClick={() => {
            setOverlay(<Overlay/>) 
            onOpen()}}>
            Contact us
          </Button>
          <Button >
            Join our team
          </Button>
        </Stack>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2,  lg: 4, }} columnGap="20"  rowGap={{base: '10', lg: '16', }} color="#FCB721">
        {developers.map((dev) => (
          <Stack key={dev.iD} spacing="4">
            <Stack spacing="5">
              <Link href={`/developer/${dev.iD}`}>
              <Img shadow="2xl" src={dev.profilePic.desktop} alt={dev.firstName} h="72" objectFit="cover" /></Link>
              <Stack spacing="1">
                <Text fontWeight="medium" fontSize={{ base: 'lg', md: 'xl', }} >
                {dev.firstName} {dev.lastName}
                </Text>
                <Text color="accent" fontSize={{ base: 'md', md: 'lg', }} >
                {dev.currentTitle}
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
  <div>
    <Modal isCentered 
    size={"xl"}
    backgroundColor={"gray.500"}
    backdropBlur={30}
    closeOnOverlayClick={false}
    isOpen={isOpen}
    onClose={onClose}>
        {overlay}
        <ModalContent>
            <ModalHeader bgColor={"#062143"} textColor={"#FCB721"}>Getting to know you!</ModalHeader>
            <ModalCloseButton textColor={"#FFFFFF"}/>
            <ModalBody bgColor={"#062143"}>
              <ClientInfoCard/>
            </ModalBody>
            <ModalFooter bgColor={"#062143"}> 
            </ModalFooter>
        </ModalContent>
    </Modal>
    </div>  
  </Flex>
    );
}
