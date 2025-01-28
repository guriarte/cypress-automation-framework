export interface postPurchaseCartResponse {
  id: string;
}

export interface getPurchaseCartResponse {
  id: string;
  additional_discount_percentage: string;
  lat: string;
  lng: string;
  cart_items: [];
}
