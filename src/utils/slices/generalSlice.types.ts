export interface GeneralState {
    search: any;
    realEstateLists: any[] | RealEstateLists[];
    realEstate: any | RealEstateLists;
    details: RealEstateLists | undefined,
    locations: Locations[] | undefined,
}

export interface RealEstateLists {
    id: string
    locationsId: string;
    locations: Locations;
    lat: number;
    lng: number;
    images: string[]
    neighborhood: string;
    state: string;
    bedrooms: number;
    bathrooms: number;
    price: number;
    createdAt: string;
    updatedAt: string;
}

export interface Locations {
    id: string
    name: string
    parentId: string
    type: string
}