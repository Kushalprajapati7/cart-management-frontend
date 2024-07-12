
export interface ICart {
    _id?: string;
    userId: string;
    profileId: string;
    items: Array<{
        productId: string;
        quantity: number;
    }>;
    total: number;
}
