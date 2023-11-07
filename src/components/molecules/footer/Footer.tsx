import React from 'react';
import './styles.scss'; // Importamos los estilos para este componente
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import ServicesApi from '../../../api/services';
import { BOGOTA, CORDOBA, MEDELLIN, filterGeneral } from '../../../utils/helpers/helpers';
import { setRealEstateLists } from '../../../utils/slices/generalSlice';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = ({ }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [get_realEstateLists] = ServicesApi.useRealEstateMutation();

    const getRealEstateList = async (data: any) => {
        try {
            // Realiza una llamada a la API para obtener la lista de bienes raíces y la almacena en el estado.
            const res = await get_realEstateLists(filterGeneral(data)).unwrap();
            dispatch(setRealEstateLists(res));

            // Navega a la página de resultados.
            navigate('/results');
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Descubre la mejor forma de buscar vivienda:</span>
                </div>
            </section>

            <section className="">
                <div className="text-center text-md-start" style={{ marginInline: 30 }}>
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Este es un espacio donde podrás encontrar el inmueble que tanto has deseado. Ya no busques más, en propital encuentras lo que buscas.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Recomendados en Venta
                            </h6>
                            <p>
                                <a onClick={() => getRealEstateList({ state: "venta", location: BOGOTA })} className="text-reset">Casas en venta Bogotá</a>
                            </p>
                            <p>
                                <a onClick={() => getRealEstateList({ state: "venta", location: MEDELLIN })} className="text-reset">Casas en venta Antioquia</a>
                            </p>
                            <p>
                                <a onClick={() => getRealEstateList({ state: "venta", location: CORDOBA })} className="text-reset">Casas en venta Córdoba</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Recomendadas en Arriendo
                            </h6>
                            <p>
                                <a onClick={() => getRealEstateList({ state: "arriendo", location: BOGOTA })} className="text-reset">Apartamentos en arriendo Bogotá</a>
                            </p>
                            <p>
                                <a onClick={() => getRealEstateList({ state: "arriendo", location: MEDELLIN })} className="text-reset">Apartamentos en arriendo Antioquia</a>
                            </p>
                            <p>
                                <a onClick={() => getRealEstateList({ state: "arriendo", location: CORDOBA })} className="text-reset">Apartamentos en arriendo Córdoba</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                            <p><i className="fas fa-home me-3"></i> Bryan Sandoval Troncoso</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                bryansandoval16@hotmail.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> +57 310 801 2566</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2023 Propital:
                <a className="text-reset fw-bold" style={{ marginLeft: 4 }} href="https://propital.com/">propital.com</a>
            </div>
        </footer>
    );
};

export default Footer;
