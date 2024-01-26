import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Nabais', 23, 'Av Marechal', 'Carcavelos');
deliveryContext(factory, 'Maria', 23, 'Av Marechal', 'Carcavelos');
deliveryContext(factory, 'Joana', 35, 'Av Marechal', 'Carcavelos');
deliveryContext(factory, 'António', 35, 'Rua 5 Outubro', 'Sabugal');

console.log();
console.log(factory.getLocations());
