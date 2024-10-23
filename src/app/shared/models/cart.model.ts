import { IDessert } from "./dessert.model";

export interface ICartItem {
  dessert: IDessert;
  quantity: number;
  subtotal: number;
}