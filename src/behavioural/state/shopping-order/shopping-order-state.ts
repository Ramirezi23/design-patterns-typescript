export interface ShoppingOrderState {
  getName(): string;
  approvedPayment(): void;
  rejectedPayment(): void;
  waitPayment(): void;
  shipOrder(): void;
}
