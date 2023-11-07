import React from 'react';
import { render, screen } from '@testing-library/react';
import CardGeneral from './CardGeneral';
import { RealEstateLists } from '../../../utils/slices/generalSlice.types';

test('renders CardGeneral component', () => {
  const realEstate: RealEstateLists = {
    id: '1',
    locationsId: '2',
    locations: {
      id: '2',
      name: 'Montería',
      parentId: "wwqw",
      type: 'city',
    },
    lat: 8.75,
    lng: -75.88,
    images: ['https://example.com/image1.jpg'],
    neighborhood: 'Centro',
    state: 'Córdoba',
    bedrooms: 3,
    bathrooms: 2,
    price: 100000000,
    createdAt: '2023-11-07T14:09:31.000Z',
    updatedAt: '2023-11-07T14:09:31.000Z',
  };

  render(<CardGeneral realEstate={realEstate} />);

  const cardGeneralElement = screen.getByTestId('cardGeneral');

  expect(cardGeneralElement).toBeInTheDocument();
});
