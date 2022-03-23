import { Center, Link } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
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
    );
};

export default Footer;
