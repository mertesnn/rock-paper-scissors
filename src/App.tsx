import { Button, Center, Grid, GridItem, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
            <Text fontSize="5xl">✊ Rock - ✋ Paper - ✌ Scissors</Text>
            <Grid w="8xl" templateColumns="repeat(4, 1fr)" h="500px">
                <GridItem
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
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
                    gap="32"
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
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="center"
                    gap="5"
                >
                    <Button
                        variant="outline"
                        borderColor="#BE81E2"
                        fontSize="5xl"
                        w="150px"
                        h="120px"
                        _hover={{
                            backgroundColor: '#CC98E8',
                            borderColor: '#CC98E8',
                        }}
                    >
                        ✊
                    </Button>
                    <Button
                        variant="outline"
                        borderColor="#BE81E2"
                        fontSize="5xl"
                        w="150px"
                        h="120px"
                        _hover={{
                            backgroundColor: '#CC98E8',
                            borderColor: '#CC98E8',
                        }}
                    >
                        ✋
                    </Button>
                    <Button
                        variant="outline"
                        borderColor="#BE81E2"
                        fontSize="5xl"
                        w="150px"
                        h="120px"
                        _hover={{
                            backgroundColor: '#CC98E8',
                            borderColor: '#CC98E8',
                        }}
                    >
                        ✌
                    </Button>
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
