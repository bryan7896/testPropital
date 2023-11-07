import './styles.scss'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/organisms/cards/Cards';
import { RealEstateLists } from '../../utils/slices/generalSlice.types';
import { setDetails } from '../../utils/slices/generalSlice';
import MapComponent from '../../components/molecules/map/Map';
import CardMap from '../../components/molecules/cardMap/CardMap';
import SearchForm from '../../components/organisms/map/SearchForm';
import Cards from '../../components/organisms/cards/Cards';

const Results: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchValue = useSelector((state: RootState) => state.general.search);
    const realEstateLists = useSelector((state: RootState) => state.general.realEstateLists);
    const [infoWindowOpen, setInfoWindowOpen] = React.useState<boolean>(false);
    const [infoWindowPosition, setInfoWindowPosition] = React.useState<RealEstateLists | undefined>(undefined);

    const handleMarkerHover = (marker: RealEstateLists) => {
        if (marker) {
            console.log(marker)
            setInfoWindowPosition(marker);
            setInfoWindowOpen(true);
        }
    };

    const details = (property: RealEstateLists) => {
        dispatch(setDetails(property));
        navigate('/details');
    }



    return (
        <div className=''>
            <h1 className='d-flex justify-content-center fontText'>
                Resultados de la búsqueda
            </h1>
            <SearchForm />

            <div className='justify-content-center d-flex classBorder'>
                {realEstateLists.length && <div className="row" style={{ width: "98%" }}>
                    <div className='col-sm-12 col-md-4 overScroll'>
                        {realEstateLists?.map((realEstate: RealEstateLists, i: number) => (
                            <CardMap onClick={() => details(realEstate)} key={`cardMap-${i}`} realEstate={realEstate} onMouseEnter={() => handleMarkerHover(realEstate)} />
                        ))}
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <MapComponent
                            realEstateLists={realEstateLists}
                            handleMarkerHover={handleMarkerHover}
                            infoWindowOpen={infoWindowOpen}
                            infoWindowPosition={infoWindowPosition}
                            setInfoWindowOpen={setInfoWindowOpen} />
                    </div>
                </div>}
            </div>


            <Cards text='Explora entre diversas opciones' navigate={navigate} realEstateLists={realEstateLists} />

        </div>
    );
};

export default Results;
