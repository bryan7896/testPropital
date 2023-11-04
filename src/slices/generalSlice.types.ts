export interface GeneralState {
    search: string;
    realEstateLists: any[] | realEstateLists[];
    realEstate: any | realEstateLists;
    details: realEstateLists | undefined,
}

export interface realEstateLists {
    _id: string
    locationsId: string;
    lat: string;
    lon: string;
    images: string[]
    neighborhood: string;
    state: string;
    bedrooms: number;
    bathrooms: number;
    price: number;
    createdAt: string;
    updatedAt: string;
}