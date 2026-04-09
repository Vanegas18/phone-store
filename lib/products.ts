export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  storage: string;
  condition: "nuevo" | "usado" | "reacondicionado";
  price: string | number;
  originalPrice?: string | number;
  batteryHealth?: number;
  accessories: string[];
  warranty: string;
  physicalCondition?: string;
  images: string[];
  featured: boolean;
  color: string;
}

export const products: Product[] = [
  // ─── GAMA ALTA ───────────────────────────────────────────
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    storage: "256GB",
    condition: "nuevo",
    price: 6800000,
    images: ["/phones/15pro.webp", "/phones/15pro2.webp"],
    accessories: ["Cable USB-C", "Manual", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: true,
    color: "Titanio Natural",
  },
  {
    id: "2",
    name: "iPhone 14",
    brand: "Apple",
    model: "iPhone 14",
    storage: "128GB",
    condition: "nuevo",
    price: 3_900_000,
    images: ["/phones/iphone-14.jpg"],
    accessories: ["Cable USB-C", "Manual", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: false,
    color: "Azul Medianoche",
  },
  {
    id: "3",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    model: "Galaxy S25 Ultra",
    storage: "256GB",
    condition: "nuevo",
    price: 7_200_000,
    images: ["/phones/samsung-s25-ultra.jpg"],
    accessories: ["Cargador 45W", "Cable USB-C", "S Pen", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: true,
    color: "Titanio Negro",
  },
  {
    id: "4",
    name: "Samsung Galaxy S24 FE",
    brand: "Samsung",
    model: "Galaxy S24 FE",
    storage: "128GB",
    condition: "nuevo",
    price: 2_800_000,
    images: ["/phones/samsung-s24-fe.jpg"],
    accessories: ["Cargador 25W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: false,
    color: "Grafito",
  },
  {
    id: "5",
    name: "POCO F7 Ultra",
    brand: "Xiaomi",
    model: "POCO F7 Ultra",
    storage: "256GB",
    condition: "nuevo",
    price: 2_600_000,
    images: ["/phones/poco-f7-ultra.jpg"],
    accessories: ["Cargador 120W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: true,
    color: "Negro",
  },

  // ─── GAMA MEDIA ALTA ─────────────────────────────────────
  {
    id: "6",
    name: "Samsung Galaxy A56 5G",
    brand: "Samsung",
    model: "Galaxy A56 5G",
    storage: "128GB",
    condition: "nuevo",
    price: 1_800_000,
    images: ["/phones/samsung-a56.jpg"],
    accessories: ["Cargador 25W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: true,
    color: "Azul Hielo",
  },
  {
    id: "7",
    name: "Xiaomi Redmi Note 14 Pro",
    brand: "Xiaomi",
    model: "Redmi Note 14 Pro",
    storage: "256GB",
    condition: "nuevo",
    price: 1_650_000,
    images: ["/phones/redmi-note-14-pro.jpg"],
    accessories: ["Cargador 67W", "Cable USB-C", "Funda", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: false,
    color: "Verde Bosque",
  },
  {
    id: "8",
    name: "POCO X7 Pro 5G",
    brand: "Xiaomi",
    model: "POCO X7 Pro",
    storage: "256GB",
    condition: "nuevo",
    price: 1_550_000,
    images: ["/phones/poco-x7-pro.jpg"],
    accessories: ["Cargador 90W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: true,
    color: "Negro Medianoche",
  },
  {
    id: "9",
    name: "Motorola Edge 50 Neo",
    brand: "Motorola",
    model: "Edge 50 Neo",
    storage: "256GB",
    condition: "nuevo",
    price: 1_400_000,
    images: ["/phones/motorola-edge-50-neo.jpg"],
    accessories: ["Cargador 68W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: false,
    color: "Azul Pavo Real",
  },
  {
    id: "10",
    name: "Realme GT Neo 7",
    brand: "Realme",
    model: "GT Neo 7",
    storage: "256GB",
    condition: "nuevo",
    price: 1_500_000,
    images: ["/phones/realme-gt-neo-7.jpg"],
    accessories: ["Cargador 150W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: false,
    color: "Gris Espacial",
  },

  // ─── GAMA MEDIA ──────────────────────────────────────────
  {
    id: "11",
    name: "Samsung Galaxy A35 5G",
    brand: "Samsung",
    model: "Galaxy A35 5G",
    storage: "128GB",
    condition: "nuevo",
    price: 1_150_000,
    images: ["/phones/samsung-a35.jpg"],
    accessories: ["Cargador 25W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: false,
    color: "Azul Marino",
  },
  {
    id: "12",
    name: "Xiaomi Redmi Note 13 4G",
    brand: "Xiaomi",
    model: "Redmi Note 13",
    storage: "256GB",
    condition: "nuevo",
    price: 950_000,
    images: ["/phones/redmi-note-13.jpg"],
    accessories: ["Cargador 33W", "Cable USB-C", "Funda", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: false,
    color: "Plata Ártica",
  },
  {
    id: "13",
    name: "Motorola Moto G85",
    brand: "Motorola",
    model: "Moto G85",
    storage: "256GB",
    condition: "nuevo",
    price: 1_050_000,
    images: ["/phones/moto-g85.jpg"],
    accessories: ["Cargador 33W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: false,
    color: "Gris Urbano",
  },

  // ─── GAMA ENTRADA ────────────────────────────────────────
  {
    id: "14",
    name: "Samsung Galaxy A05",
    brand: "Samsung",
    model: "Galaxy A05",
    storage: "64GB",
    condition: "nuevo",
    price: 550_000,
    images: ["/phones/samsung-a05.jpg"],
    accessories: ["Cargador 15W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: false,
    color: "Negro",
  },
  {
    id: "15",
    name: "Motorola Moto G04s",
    brand: "Motorola",
    model: "Moto G04s",
    storage: "128GB",
    condition: "nuevo",
    price: 620_000,
    images: ["/phones/moto-g04s.jpg"],
    accessories: ["Cargador 15W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: false,
    color: "Verde Jade",
  },
  {
    id: "16",
    name: "Realme C75",
    brand: "Realme",
    model: "Realme C75",
    storage: "128GB",
    condition: "nuevo",
    price: 720_000,
    images: ["/phones/realme-c75.jpg"],
    accessories: ["Cargador 45W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantía oficial",
    featured: false,
    color: "Verde",
  },

  // ─── USADOS / REACONDICIONADOS ────────────────────────────
  {
    id: "17",
    name: "iPhone 13",
    brand: "Apple",
    model: "iPhone 13",
    storage: "128GB",
    condition: "usado",
    price: 2_100_000,
    images: ["/phones/iphone-13-usado.jpg"],
    accessories: ["Cable USB-C", "Caja original"],
    warranty: "3 meses de garantía del vendedor",
    featured: false,
    color: "Negro Medianoche",
  },
  {
    id: "18",
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    model: "Galaxy S23",
    storage: "128GB",
    condition: "reacondicionado",
    price: 1_900_000,
    images: ["/phones/samsung-s23-reacond.jpg"],
    accessories: ["Cargador 25W", "Cable USB-C"],
    warranty: "6 meses de garantía del vendedor",
    featured: false,
    color: "Crema",
  },
];

export const brands = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "Google",
  "OnePlus",
  "Motorola",
];
export const conditions = ["nuevo", "usado", "reacondicionado"] as const;
export const storageOptions = ["64GB", "128GB", "256GB", "512GB"];
export const priceRanges = [
  { label: "Menos de $800.000", min: 0, max: 800_000 },
  { label: "$800.000 - $1.500.000", min: 800_000, max: 1_500_000 },
  { label: "$1.500.000 - $3.000.000", min: 1_500_000, max: 3_000_000 },
  { label: "$3.000.000 - $5.000.000", min: 3_000_000, max: 5_000_000 },
  { label: "Más de $5.000.000", min: 5_000_000, max: Infinity },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
