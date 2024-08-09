/**
 
-------- Format to create interface and types --------

export interface User extends Drivwr{
    name: string;
    age: number;
    address: Address
}

export type Address = {
    city: string;
    country: string;
    state: string;
    addressLine1: string
    addressLine2?: string  // ? represent optional field
    
}

**/