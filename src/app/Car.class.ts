import { CarDetail } from "./CarDetail.interface";

export class Car implements CarDetail {
  model: string;
  brand: string;
  year: number;
  constructor(model:string, brand:string, year:number) {
    this.model = model;
    this.brand = brand;
    this.year = year;
  }
  }