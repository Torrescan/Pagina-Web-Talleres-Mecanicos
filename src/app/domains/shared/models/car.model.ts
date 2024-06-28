export interface car {
    id: number;
    name: string;
    price: number;
    image: string;
    modelo: string;
    descripcion?: string;
}
export interface cliente {
    id: number;
    name: string;
    rfc: string;
    image : string;
    historial?: string[];
    cars: number;
    moneyint: number;
}
export interface servicios{
    id: number;
    name: string;
    cost: number;
    image: string;
    descripcion?: string;
}
export interface modelos{
    id: number;
    name:string;
    image: string;
    descripcion?: string;
    url?: string;
}
export interface talleres{
    id: number;
    name: string;
    image: string;
    descripcion?: string;
    url?: string;
}