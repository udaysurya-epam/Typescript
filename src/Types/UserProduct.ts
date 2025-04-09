
export interface User {
  id: number;
  name: string;
  role: 'admin' | 'editor' | 'viewer'; // 🧩 Discriminated Union
}

export interface Product {
  id: string;
  title: string;
  price: number;
}

export type UserUnion =
  | { id: number; name: string; role: 'admin'; permissions: string[] }
  | { id: number; name: string; role: 'editor'; section: string }
  | { id: number; name: string; role: 'viewer' };
