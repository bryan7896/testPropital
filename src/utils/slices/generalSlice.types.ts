export interface GeneralState {
    search: string;
    realEstateLists: any[] | realEstateLists[];
    realEstate: any | realEstateLists;
    details: realEstateLists | undefined,
    locations: Locations | undefined,
}

export interface realEstateLists {
    id: string
    locationsId: string;
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