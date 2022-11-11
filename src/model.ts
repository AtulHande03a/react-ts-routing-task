export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface DataTable {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: number;
  website: string;
  company: Company;
}
export type Column = {
  heading: string;
  value: string;
}[];
