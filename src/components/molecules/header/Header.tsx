import React from 'react';
import './styles.scss'; // Importamos los estilos para este componente

import Logo from '../../atoms/logo/Logo';
import { useNavigate } from 'react-router';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header className="pt-1 pb-1">
            <Logo isWithText={true} onClick={() => navigate('/')} />
        </header>
    );
};

export default Header;
