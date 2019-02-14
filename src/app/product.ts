export class Product {
  id: number;
  imgUrl: string;
  name: string;
  price: number;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
