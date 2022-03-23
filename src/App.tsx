import { Center, Grid, GridItem, Text, type TextProps } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'
import Buttons from './Components/Buttons'
import Footer from './Components/Footer'

const App = () => {
    const [winner, setWinner] = useState<String | undefined>(undefined)
    const [player, setPlayer] = useState<String>('✊')
    const [computer, setComputer] = useState<String>('✊')
    const [playerScore, setPlayerScore] = useState<any>(0)
    const [computerScore, setComputerScore] = useState<any>(0)

    const checkWinner = (player: number, computer: number) => {
        if (player === 0 && computer === 1) return 'Computer'
        else if (player === 1 && computer === 2) return 'Computer'
        else if (player === 2 && computer === 0) return 'Computer'
        else if (player === 2 && computer === 1) return 'Player'
        else if (player === 1 && computer === 0) return 'Player'
        else if (player === 0 && computer === 2) return 'Player'
        else return 'Tie!'
    }

    const MotionText = motion<TextProps>(Text)
    const controls = useAnimation()

    const handleClick = async (item: number) => {
        await controls.start({
            y: [0, -50, 0, -50, 0, -50, 0],
            transition: { duration: 1.5 },
        })
        const computerMove = Math.round(Math.random() * 2)
        const check = checkWinner(item, computerMove)
        setWinner(check)

        if (check === 'Player') setPlayerScore(playerScore + 1)
        else if (check === 'Computer') setComputerScore(computerScore + 1)

        if (item === 0) setPlayer('✊')
        else if (item === 1) setPlayer('✋')
        else if (item === 2) setPlayer('✌')

        if (computerMove === 0) setComputer('✊')
        else if (computerMove === 1) setComputer('✋')
        else if (computerMove === 2) setComputer('✌')
    }
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
                        🧑 Player: <Text as="span">{playerScore}</Text>
                    </Text>
                    <Text fontSize="4xl">
                        💻 Computer: <Text as="span">{computerScore}</Text>
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Center gap={{ base: '16', sm: '20', md: '32' }}>
                        <MotionText fontSize="8xl" animate={controls}>
                            <Text transform="rotate(90deg)">{player}</Text>
                        </MotionText>
                        <MotionText fontSize="8xl" animate={controls}>
                            <Text transform="rotate(270deg)">{computer}</Text>
                        </MotionText>
                    </Center>
                    <Center>
                        <Text as="div" w="100%" h="20px" fontSize="2xl">
                            {winner &&
                                winner + (winner !== 'Tie!' ? ' won! 🏆' : '')}
                        </Text>
                    </Center>
                </GridItem>
                <GridItem
                    display="flex"
                    flexDirection={{ base: 'row', xl: 'column' }}
                    alignItems="end"
                    justifyContent="center"
                    gap="5"
                >
                    <Buttons onClick={() => handleClick(0)}>✊</Buttons>
                    <Buttons onClick={() => handleClick(1)}>✋</Buttons>
                    <Buttons onClick={() => handleClick(2)}>✌</Buttons>
                </GridItem>
            </Grid>
            <Footer />
        </Center>
    )
}

export default App
