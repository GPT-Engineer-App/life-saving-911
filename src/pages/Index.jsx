import { Box, Heading, Text, List, ListItem, ListIcon, Container, Image, VStack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1612574935301-af13ccce9258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBzZXJ2aWNlc3xlbnwwfHx8fDE3MTAyODg4MjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Emergency Services" />
        <Heading as="h1" size="2xl" textAlign="center">
          The Lifesaving Impact of 911
        </Heading>
        <Text fontSize="xl" textAlign="justify">
          The 911 emergency number has been a critical component in providing timely assistance to those in urgent need. Since its inception, 911 has become the universal number to call in emergencies in the United States, saving countless lives and ensuring help is just a phone call away.
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Benefits of 911 Emergency Number
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Immediate connection to emergency services.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Coordination among different emergency response teams.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Enhanced response times to medical, fire, and crime incidents.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Accessible to everyone, including children, to report emergencies.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Support for TTY and TDD communication for the hearing impaired.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Provides a sense of security knowing help is just a call away.
            </ListItem>
          </List>
        </Box>
        <Text fontSize="md" textAlign="justify">
          The effectiveness of the 911 system relies on its simplicity and the public's ability to remember this number in times of crisis. It's a testament to the foresight of policymakers who established a straightforward system for reaching immediate assistance. The countless stories of lives saved and situations resolved through 911 calls serve as a reminder of the importance of maintaining and improving this crucial public service.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
