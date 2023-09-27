// src/types.ts

export interface AppointmentData {
    key: number;
    date: string;
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
}

export interface hospital{
    id: number,
    name: string,
    kind: string,
    address: string,
    image: string,
    description: string,
    phone: string,
}
  