/* ID locations */
export const BOGOTA: string = "5f47e751be331d5edff7a2f5"
export const MEDELLIN: string = "5f47e751be331d5edff7a2f4"
export const CORDOBA: string = "5f47e752be331d5edff7a2fc"
/*-- ID locations --*/




/* Filters */
export const filterGeneral = (data: any) => {
    const filters: any = {};

    if (data.state) {
        filters.state = { like: data.state, options: 'i' };
    }

    if (data.search) {
        filters.neighborhood = { like: data.search, options: 'i' };
    }

    if (data.location) {
        filters.locationsId = data.location;
    }

    return {
        include: [{ relation: 'locations' }],
        order: ['createdAt DESC'],
        where: {
            and: [filters]
        }
    };
};

export const filterLocations = {
    include: [{ relation: 'locations' }],
    limit: 6,
    order: ['createdAt DESC']
}
/*--Filters --*/