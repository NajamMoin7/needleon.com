export function formatPKR(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

export function pct(off: number): string {
  return `${Math.round(off)}% OFF`;
}

export function discountPercent(price: number, discountPrice?: number): number {
  if (!discountPrice || discountPrice >= price) return 0;
  return Math.round(((price - discountPrice) / price) * 100);
}
