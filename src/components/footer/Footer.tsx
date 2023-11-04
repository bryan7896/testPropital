import './styles.scss'
import React from 'react';

interface FooterProps {
    phoneNumber: string;
    name: string;
}

const Footer: React.FC<FooterProps> = ({ phoneNumber, name }) => {

    return (
        <footer className="">
            
        </footer>
    );
};

export default Footer;
