import React from 'react';
import './styles.scss';

const Header: React.FC = () => {
    return (
        <header className="colorBorder pt-1 pb-1">
            <section className="d-flex justify-content-center">
                <h1 className="header-title text-white fontText">Prueba</h1>
            </section>
        </header>
    );
};

export default Header;
