import { OrderPending } from './order-pending';
import { ShoppingOrderState } from './shopping-order-state';

export class ShoppingOrder {
  private state: ShoppingOrderState = new OrderPending(this);

  getState(): ShoppingOrderState {
    return this.state;
  }

  setState(state: ShoppingOrderState): void {
    this.state = state;
    console.log(`O estado do pedido é ${this.getStateName()}`);
  }

  getStateName(): string {
    return this.state.getName();
  }

  approvedPayment(): void {
    this.state.approvedPayment();
  }

  rejectedPayment(): void {
    this.state.rejectedPayment();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}
