import { Product } from './product';

describe('Product', () => {

  it('should create an instance', () => {
    expect(new Product("Cellphone Motorola Motog60", "Eletronics", 1300)).toBeTruthy();
  });

});
