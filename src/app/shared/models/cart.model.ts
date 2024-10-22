import { IDessert } from "./dessert.model";

export interface ICart {
  dessert: IDessert;
  quantity: number;
  subtotal: number;
}