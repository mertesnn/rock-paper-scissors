import SingleButton from './SingleButton'

const Buttons = ({ handleClick }: { handleClick: Function }) => {
    return (
        <>
            <SingleButton onClick={() => handleClick(0)}>✊</SingleButton>
            <SingleButton onClick={() => handleClick(1)}>✋</SingleButton>
            <SingleButton onClick={() => handleClick(2)}>✌</SingleButton>
        </>
    )
}

export default Buttons
