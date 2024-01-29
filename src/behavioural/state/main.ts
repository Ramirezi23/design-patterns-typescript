import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
order.approvedPayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder();
order.rejectedPayment(); // Daqui não altera mais o estado
order.approvedPayment(); // n
order.waitPayment(); // n
order.approvedPayment(); // n
order.shipOrder(); // n
