import { Text } from '@chakra-ui/react'

type ScoreTypes = {
    playerScore: Number
    computerScore: Number
}

const Scores = ({ playerScore, computerScore }: ScoreTypes) => {
    return (
        <>
            <Text fontSize="4xl">
                🧑 Player: <Text as="span">{playerScore}</Text>
            </Text>
            <Text fontSize="4xl">
                💻 Computer: <Text as="span">{computerScore}</Text>
            </Text>
        </>
    )
}

export default Scores
