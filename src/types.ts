export interface House {
    id: number;
    image: string;
    price: number;
    size: number;
    craetedAt: string;
    constructionYear: number;
    hasGarage: boolean;
    madeByMe: boolean;
    description: string;
    rooms: {
        bedrooms: number;
        bathrooms: number;
    },
    location: {
        street: string;
        city: string;
        zip: string;
    };
    
}