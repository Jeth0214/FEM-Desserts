import { IDessert } from "./dessert.model";

export interface IOrder {
  dessert: IDessert;
  quantity: number;
}