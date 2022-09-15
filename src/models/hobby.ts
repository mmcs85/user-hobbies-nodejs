
export enum PassionLevel {
    LOW,
    MEDIUM,
    HIGH,
    VERYHIGH
}

export interface Hobby {
    _id: string,
    userId: string,
    passionLevel: PassionLevel, 
    name: string, 
    year: number
}