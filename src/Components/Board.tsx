import { Center, Text, type TextProps } from '@chakra-ui/react'
import { AnimationControls, motion } from 'framer-motion'

type BoardTypes = {
    player: String
    computer: String
    winner: String | undefined
    controls: AnimationControls
}

const Board = ({ player, computer, winner, controls }: BoardTypes) => {
    const MotionText = motion<TextProps>(Text)

    return (
        <>
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
                    {winner && winner + (winner !== 'Tie!' ? ' won! 🏆' : '')}
                </Text>
            </Center>
        </>
    )
}

export default Board
