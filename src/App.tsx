import { Center, Grid, GridItem, Text } from '@chakra-ui/react'
import { useAnimation } from 'framer-motion'
import { useState } from 'react'
import Footer from './Components/Footer'
import Scores from './Components/Scores'
import { checkWinner } from './utils/Functions'
import Buttons from './Components/Buttons'
import Board from './Components/Board'

const App = () => {
    const [winner, setWinner] = useState<String | undefined>(undefined)
    const [player, setPlayer] = useState<String>('✊')
    const [computer, setComputer] = useState<String>('✊')
    const [playerScore, setPlayerScore] = useState<any>(0)
    const [computerScore, setComputerScore] = useState<any>(0)

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
                    <Scores
                        playerScore={playerScore}
                        computerScore={computerScore}
                    />
                </GridItem>
                <GridItem
                    colSpan={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Board
                        player={player}
                        computer={computer}
                        winner={winner}
                        controls={controls}
                    />
                </GridItem>
                <GridItem
                    display="flex"
                    flexDirection={{ base: 'row', xl: 'column' }}
                    alignItems="end"
                    justifyContent="center"
                    gap="5"
                >
                    <Buttons handleClick={handleClick} />
                </GridItem>
            </Grid>
            <Footer />
        </Center>
    )
}

export default App
