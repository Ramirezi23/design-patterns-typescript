import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Camisa', price: 50 });
seller1.addProduct({ id: '2', name: 'Ténis', price: 75 });

const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Calças', price: 40 });
seller2.addProduct({ id: '4', name: 'Chapéu', price: 23 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
