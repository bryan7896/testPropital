import React from 'react';
import './styles.scss';
import Logo from '../../atoms/logo/Logo';

const Header: React.FC = () => {
    return (
        <header className="pt-1 pb-1">
            <Logo isWithText={true}/>
        </header>
    );
};

export default Header;
