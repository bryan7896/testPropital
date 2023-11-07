import { LogoProps } from './Logo.types';
import './styles.scss'
import React from 'react';

import Logo1 from '../../../assets/logo1.png';
import Logo2 from '../../../assets/logo2.png';

const Logo: React.FC<LogoProps> = ({ isWithText, onClick }) => {

    return (
        <div className="d-flex align-items-center m-2 imgS">
            <img onClick={onClick} src={Logo1} height={isWithText ? 35 : 60} width={isWithText ? 35 : 60} alt="Logo company" />
            {isWithText && <img onClick={onClick} src={Logo2} height={30} width={100} style={{ paddingLeft: 5 }} alt="Logo company" />}
        </div>
    );
};

export default Logo;
