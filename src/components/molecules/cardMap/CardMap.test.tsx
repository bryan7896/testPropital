import React from 'react';
import { render, screen } from '@testing-library/react';
import CardMap from './CardMap';
import { RealEstateLists } from '../../../utils/slices/generalSlice.types';

const realEstate: RealEstateLists = {
  id: '1',
  locationsId: '2',
  locations: {
    id: '2',
    name: 'Montería',
    parentId: "ewrew",
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

test('renders CardMap component', () => {
  render(<CardMap realEstate={realEstate} />);
  const cardMapElement = screen.getByTestId('cardMap');
  expect(cardMapElement).toBeInTheDocument();
});

test('calls onClick callback when card is clicked', () => {
  const onClickMock = jest.fn();
  render(<CardMap realEstate={realEstate} onClick={onClickMock} />);
  const cardMapElement = screen.getByTestId('cardMap');
  cardMapElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(onClickMock).toHaveBeenCalled();
});

