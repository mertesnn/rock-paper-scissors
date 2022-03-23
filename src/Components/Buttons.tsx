import { Button } from '@chakra-ui/react';
import { MouseEventHandler, ReactNode } from 'react';

const Buttons = ({
    children,
    onClick,
}: {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
    return (
        <Button
            variant="outline"
            borderColor="#BE81E2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            w={{ base: '100px', md: '130px', lg: '150px' }}
            h={{ base: '80px', md: '100px', lg: '120px' }}
            onClick={onClick}
            _hover={{
                backgroundColor: '#CC98E8',
                borderColor: '#CC98E8',
            }}
            _focus={{
                borderColor: '#BE81E2',
            }}
            _active={{
                backgroundColor: '#CC98E8',
            }}
        >
            {children}
        </Button>
    );
};

export default Buttons;
