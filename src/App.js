import { ChakraProvider, Flex,  Box, Button, Image, Spacer, Stack, Text, HStack,Center, IconButton, Link, Icon, VStack } from "@chakra-ui/react"
import React from 'react'
import { SearchIcon, ArrowForwardIcon, ViewIcon,InfoIcon, EmailIcon } from '@chakra-ui/icons'
function App() {
  return (
    <ChakraProvider>
      <Flex bg="black" >
        <Box p={2} >    
          <Image src="https://unblocker.ai/static/media/unblockerai.99855652.png" w="200px" h="20px" />
        </Box>
        <Spacer/>
       <Box>
         <Button bg="white" color="black"  mr="2"  size="sm"  > Log in </Button>
         <Button bg="white" color="black"  mr="2"  size="sm" > Sign Up  </Button>    
       </Box>
     </Flex>
     <Flex mb={5} bg="lightgrey">
     
     <Box >
          <Stack pt="60px" pl="60px" ml="10px">
            <Text color="black" pl="20px" fontSize="12px" ml="10px"><b> CONTENT  </b></Text>
            <HStack as={Button} h="27px" w="165px" borderRadius="1" bg="lightgrey">
              <Image src="https://cdn-icons-png.flaticon.com/512/25/25694.png" w="22px" h="15px" mr="20px" /> 
              <Text textAlign="center" fontSize="12px" color="black" pr="65px"> Home </ Text> 
            </ HStack>
            <HStack as={Button} h="27px" w="165px" borderRadius="1" bg="lightgrey" pr="0.5px"> 
               <Image src="https://www.iconbolt.com/iconsets/font-awesome-solid/user-circle.svg" w="30px" h="15px" mr="16px" pl="10px"/>
               <Text fontSize="12px" textAlign="center" color="black" pr="70px">Showcases</Text>
            </ HStack>
            <HStack as={Button} h="27px" w="165px" borderRadius="1" bg="lightgrey">
              <Image src="https://icons.veryicon.com/png/o/business/classic-icon/trophy-20.png" borderRadius="full" w="25px" h="15px" mr="20px" />
              <Text fontSize="12px" color="black" pr="65px" >Heroes</Text> 
            </ HStack>
          </Stack>
          <Stack pt="20px" pl="40px" ml="40px"><Text color="black" pl="20px" fontSize="11px"><b>HELP AND ASSISTANCE </b></Text>
              <HStack as={Button} h="27px" w="165px" borderRadius="1" bg="lightgrey">  <Icon as={InfoIcon}  mr="25px" /> 
                  <Text fontSize="12px" pr="28px">Help </Text>
              </HStack>
              <HStack as={Button} h="27px" w="165px" borderRadius="1" bg="lightgrey"><Icon as={EmailIcon} mr="19px" />
                 <Text fontSize="12px" pr="6px"> <b> Contact Us </b></Text>
              </HStack>
  
          </Stack> 
        </Box>
        
        <Spacer />
        <Stack spacing="2px">
       
        <Box bg="white"  borderColor="black" borderTopRadius="2xl"  w="98%" h="35%" mt="10px" mr="90px"> 
          <Text fontSize="2xl" textAlign="center" color="black" mt="20px"><b>UnBlocker.Ai Professional Showcases</b></Text>
          <Text color="black" fontSize="0.1xl" align="center"mb="20px" >Please visit each individual showcase listed below and learn more about individual professional and their expertise</Text>
                   
        </Box>
        <Box bg="white" w="98%" h="14%" borderBottomRadius="2xl" ml="20px">
          <IconButton mr="2" icon={<SearchIcon />} /> 
          <Text as="Button" color="black" mr="220px" > ACTIVE MEMBERS (39) </Text>
          <Text as="Button" color="black" > Help </Text>
          <Text as="Button" color="black" > Filter </Text>
        </Box> 
        <Center>
       <HStack>
        <Stack spacing="2px"  borderColor="white" >
            <Box Spacing="2px" borderTopRadius="2xl" bgImage="https://unblockerai.s3-us-west-2.amazonaws.com/webcontent/showcase-ready.jpg" bgPosition="center" pr="60px" mt="20px" pt="10px" w="240px" h="120px" borderColor="">
              <Image src="https://u  <Center>  nblockerai.s3-us-west-2.amazonaws.com/webcontent/Robot-ai-512.png" mb="80px"  ml="76px" border="2px" borderColor="white" borderRadius="full" w="100px"  />
            </Box>
            <Box pr="60px" mt="15px" pt="20px" w="240px" h="220px" borderWidth="1px" borderBottomRadius="2xl" color="black" bg="white">
                <Center>
                  <Text fontSize="0.5xl" ml="41px" mb="25px" fontWeight="bold" > Amitabh Chauhan </Text>
                </Center>
                   <Button bg="lightgrey" color="green" h="30px" w="30px" ml="10px"  border="2px"> 
                       <Text textColor="black" fontSize="12px">Artist </Text>
                   </Button>
                   <Stack spacing={43} direction="row" align="top" mt="50px" pt="10px"> 
                      <Button bg="lightgrey" color="grey" h="22px" w="150px" pl="15px" ml="15px"> 
                         <Image src="https://icon-library.com/images/red-heart-icon-png/red-heart-icon-png-7.jpg" h="15px" w="30px" />0 
                      </Button>
                      <Button bg="lightgrey" color="grey" h="22px" w="130px" pl="15px" ml="15px"> <ViewIcon color="cyan" />63  </Button>
                      <Button bg="lightgrey" color="grey" h="22px" w="130px" pl="15px" ml="15px">
                        <Image src="https://unblockerai.s3.us-west-2.amazonaws.com/webcontent/star-incircle.svg"  h="25px" w="35px"/> 0 </Button>
                   </Stack>
                   <Center>
                     <Button bg="lightgrey" color="grey" h="22px" w="140px" mt="10px" ml="58px" border="2px"> <ArrowForwardIcon border="2px" borderColor="grey" borderRadius="full"/><Spacer />
                     <Text fontSize="13px"> Showcase </Text></Button>
                    </Center>
             </Box>
                    </Stack>
                    <Stack spacing="-0.2px" borderColor="white" >
            <Box Spacing="0" borderTopRadius="2xl" bgImage="https://unblockerai.s3-us-west-2.amazonaws.com/webcontent/showcase-ready.jpg" bgPosition="center" pr="60px" mt="20px" pt="10px" w="240px" h="120px" borderColor="">
              <Image src="https://u  <Center>  nblockerai.s3-us-west-2.amazonaws.com/webcontent/Robot-ai-512.png" mb="80px"  ml="76px" border="2px" borderColor="white" borderRadius="full" w="100px"  />
            </Box>
            <Box pr="60px" mt="15px" pt="20px" w="240px" h="220px" borderWidth="1px" borderBottomRadius="2xl" color="black" bg="white">
                <Center>
                  <Text fontSize="0.5xl" ml="41px" mb="25px" fontWeight="bold" > Amitabh Chauhan </Text>
                </Center>
                   <Button bg="lightgrey" color="green" h="30px" w="30px" ml="10px"  border="2px"> 
                       <Text textColor="black" fontSize="12px">Artist </Text>
                   </Button>
                   <Stack spacing={43} direction="row" align="top" mt="50px" pt="10px"> 
                      <Button bg="lightgrey" color="grey" h="22px" w="150px" pl="15px" ml="15px"> 
                         <Image src="https://icon-library.com/images/red-heart-icon-png/red-heart-icon-png-7.jpg" h="15px" w="30px" />0 
                      </Button>
                      <Button bg="lightgrey" color="grey" h="22px" w="130px" pl="15px" ml="15px"> <ViewIcon color="cyan" />63  </Button>
                      <Button bg="lightgrey" color="grey" h="22px" w="130px" pl="15px" ml="15px">
                        <Image src="https://unblockerai.s3.us-west-2.amazonaws.com/webcontent/star-incircle.svg"  h="25px" w="35px"/> 0 </Button>
                   </Stack>
                   <Center>
                     <Button bg="lightgrey" color="grey" h="22px" w="140px" mt="10px" ml="58px" border="2px"> <ArrowForwardIcon border="2px" borderColor="grey" borderRadius="full"/><Spacer />
                     <Text fontSize="13px"> Showcase </Text></Button>
                    </Center>
             </Box>
                    </Stack>
                     <Stack spacing="-0.5px" borderColor="white" >
            <Box borderTopRadius="2xl" bgImage="https://unblockerai.s3-us-west-2.amazonaws.com/webcontent/showcase-ready.jpg" bgPosition="center" pr="60px" mt="20px" pt="10px" w="240px" h="120px" borderColor="">
              <Image src="https://u  <Center>  nblockerai.s3-us-west-2.amazonaws.com/webcontent/Robot-ai-512.png" mb="80px"  ml="76px" border="2px" borderColor="white" borderRadius="full" w="100px"  />
            </Box>
            <Box pr="60px" mt="15px" pt="20px" w="240px" h="220px" borderWidth="1px" borderBottomRadius="2xl" color="black" bg="white">
                <Center>
                  <Text fontSize="0.5xl" ml="41px" mb="25px" fontWeight="bold" > Amitabh Chauhan </Text>
                </Center>
                   <Button bg="lightgrey" color="green" h="30px" w="30px" ml="10px"  border="2px"> 
                       <Text textColor="black" fontSize="12px">Artist </Text>
                   </Button>
                   <Stack spacing={43} direction="row" align="top" mt="50px" pt="10px"> 
                      <Button bg="lightgrey" color="grey" h="22px" w="150px" pl="15px" ml="15px"> 
                         <Image src="https://icon-library.com/images/red-heart-icon-png/red-heart-icon-png-7.jpg" h="15px" w="30px" />0 
                      </Button>
                      <Button bg="lightgrey" color="grey" h="22px" w="130px" pl="15px" ml="15px"> <ViewIcon color="cyan" />63  </Button>
                      <Button bg="lightgrey" color="grey" h="22px" w="130px" pl="15px" ml="15px">
                        <Image src="https://unblockerai.s3.us-west-2.amazonaws.com/webcontent/star-incircle.svg"  h="25px" w="35px"/> 0 </Button>
                   </Stack>
                   <Center>
                     <Button bg="lightgrey" color="grey" h="22px" w="140px" mt="10px" ml="58px" border="2px"> <ArrowForwardIcon border="2px" borderColor="grey" borderRadius="full"/><Spacer />
                     <Text fontSize="13px"> Showcase </Text></Button>
                    </Center>
             </Box>
                    </Stack>
                    </HStack>
                    </Center>
        </ Stack>
       </Flex>
       <Box bg="black">
  <HStack spacing="0px">
    <Box ml="90px">
      <Image src="https://unblocker.ai/static/media/unblockerai.99855652.png" w="400px" h="90" />    
      <Text color="white" ml="260px">Technology Adoption Platform </Text>
    </Box>
    
  
    <Stack pb="30px" >
      <Text color="white" >COMMUNITY</Text>
      <Link color="yellow" >Code of Conduct</Link>
      <Link color="yellow" >Help</Link><Link color="yellow" >Tutorials</Link>
      <Link color="yellow" >(Signup) Register</Link>
    </Stack>
    
    <Stack ml="160px">
      <Text color="white" >COMPANY</Text>
      <Link color="yellow" >About Us</Link>
      <Link color="yellow" > Career</Link>
      <Link color="yellow" >Contact Us</Link>
      <Link color="yellow" >Privacy Policy</Link>
      <Link color="yellow" >Terms of Services</Link>

    </Stack>
  
  </HStack>
</Box>

    </ChakraProvider>
    );
  }
  
  export default App;
