export interface SubsetInput {
    M: number[];
    N: number;
}

export interface SubsetResult {
    pair: [number, number] | null;
    message: string;
}