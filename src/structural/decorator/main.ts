import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const stampedTShirt = new ProductStampDecorator(tShirt);
const stampedTShirtFrontAndBack = new ProductStampDecorator(stampedTShirt);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(stampedTShirt.getPrice(), stampedTShirt.getName());
console.log(
  stampedTShirtFrontAndBack.getPrice(),
  stampedTShirtFrontAndBack.getName(),
);

console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
