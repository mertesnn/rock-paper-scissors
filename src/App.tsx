import { Center, Grid, GridItem, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Buttons from './Components/Buttons';

const App = () => {
    return (
        <Center
            maxW="full"
            h="100vh"
            backgroundColor="#B066DB"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            userSelect="none"
        >
            <Text fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
                ✊ Rock - ✋ Paper - ✌ Scissors
            </Text>
            <Grid
                maxW="full"
                w="8xl"
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    xl: 'repeat(4, 1fr)',
                }}
                h="500px"
            >
                <GridItem
                    display="flex"
                    flexDirection="column"
                    alignItems={{ base: 'center', xl: 'start' }}
                    justifyContent="center"
                >
                    <Text fontSize="4xl">
                        🧑 Player: <Text as="span">0</Text>
                    </Text>
                    <Text fontSize="4xl">
                        💻 Computer: <Text as="span">0</Text>
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={2}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    gap={{ base: '16', sm: '20', md: '32' }}
                >
                    <Text fontSize="8xl" transform="rotate(90deg)">
                        ✌
                    </Text>
                    <Text fontSize="8xl" transform="rotate(270deg)">
                        ✋
                    </Text>
                </GridItem>
                <GridItem
                    display="flex"
                    flexDirection={{ base: 'row', xl: 'column' }}
                    alignItems="end"
                    justifyContent="center"
                    gap="5"
                >
                    <Buttons>✊</Buttons>
                    <Buttons>✋</Buttons>
                    <Buttons>✌</Buttons>
                </GridItem>
            </Grid>
            <Center gap="4" paddingY="3" fontSize="3xl">
                <Link
                    href="https://www.instagram.com/mertesen__/"
                    target="_blank"
                    _focus={{ border: 0 }}
                >
                    <FaInstagram />
                </Link>
                <Link
                    href="https://github.com/mertesnn/"
                    target="_blank"
                    _focus={{ border: 0 }}
                >
                    <FaGithub />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/mert-esen/"
                    target="_blank"
                    _focus={{ border: 0 }}
                >
                    <FaLinkedinIn />
                </Link>
            </Center>
        </Center>
    );
};

export default App;
