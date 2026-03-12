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
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    storage: "256GB",
    condition: "nuevo",
    price: 1299,
    images: ["/phones/iphone-15-pro-max.jpg"],
    accessories: ["Cargador", "Cable USB-C", "Manual", "Caja original"],
    warranty: "12 meses de garantia oficial",
    featured: true,
    color: "Titanio Natural",
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    storage: "512GB",
    condition: "nuevo",
    price: 1199,
    images: ["/phones/samsung-s24-ultra.jpg"],
    accessories: ["Cargador rapido", "Cable USB-C", "S Pen", "Caja original"],
    warranty: "12 meses de garantia oficial",
    featured: true,
    color: "Titanium Gray",
  },
  {
    id: "3",
    name: "iPhone 14 Pro",
    brand: "Apple",
    model: "iPhone 14 Pro",
    storage: "128GB",
    condition: "usado",
    price: "2.400.000",
    originalPrice: "3.000.000",
    batteryHealth: 92,
    images: ["/phones/iphone-14-pro.jpg"],
    accessories: ["Cable USB-C", "Caja original"],
    warranty: "3 meses de garantia en tienda",
    physicalCondition: "Excelente estado, minimos signos de uso",
    featured: true,
    color: "Space Black",
  },
  {
    id: "4",
    name: "Xiaomi 14",
    brand: "Xiaomi",
    model: "Xiaomi 14",
    storage: "256GB",
    condition: "nuevo",
    price: 699,
    images: ["/phones/xiaomi-14.jpg"],
    accessories: [
      "Cargador 90W",
      "Cable USB-C",
      "Funda protectora",
      "Caja original",
    ],
    warranty: "12 meses de garantia oficial",
    featured: true,
    color: "Negro",
  },
  {
    id: "5",
    name: "Samsung Galaxy A54",
    brand: "Samsung",
    model: "Galaxy A54",
    storage: "128GB",
    condition: "reacondicionado",
    price: 299,
    originalPrice: 449,
    batteryHealth: 95,
    images: ["/phones/samsung-a54.jpg"],
    accessories: ["Cargador", "Cable USB-C"],
    warranty: "6 meses de garantia en tienda",
    physicalCondition: "Como nuevo, sin marcas visibles",
    featured: false,
    color: "Awesome Lime",
  },
  {
    id: "6",
    name: "iPhone 13",
    brand: "Apple",
    model: "iPhone 13",
    storage: "128GB",
    condition: "usado",
    price: 449,
    originalPrice: 599,
    batteryHealth: 88,
    images: ["/phones/iphone-13.jpg"],
    accessories: ["Cable Lightning", "Caja original"],
    warranty: "3 meses de garantia en tienda",
    physicalCondition: "Buen estado, pequenas marcas de uso",
    featured: false,
    color: "Midnight",
  },
  {
    id: "7",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    model: "Pixel 8 Pro",
    storage: "256GB",
    condition: "nuevo",
    price: 899,
    images: ["/phones/pixel-8-pro.jpg"],
    accessories: ["Cargador", "Cable USB-C", "Adaptador SIM", "Caja original"],
    warranty: "12 meses de garantia oficial",
    featured: true,
    color: "Obsidian",
  },
  {
    id: "8",
    name: "OnePlus 12",
    brand: "OnePlus",
    model: "OnePlus 12",
    storage: "256GB",
    condition: "nuevo",
    price: 799,
    images: ["/phones/oneplus-12.jpg"],
    accessories: ["Cargador 100W", "Cable USB-C", "Funda", "Caja original"],
    warranty: "12 meses de garantia oficial",
    featured: false,
    color: "Silky Black",
  },
  {
    id: "9",
    name: "Samsung Galaxy Z Flip 5",
    brand: "Samsung",
    model: "Galaxy Z Flip 5",
    storage: "256GB",
    condition: "reacondicionado",
    price: 649,
    originalPrice: 999,
    batteryHealth: 97,
    images: ["/phones/samsung-z-flip-5.jpg"],
    accessories: ["Cargador", "Cable USB-C", "Caja original"],
    warranty: "6 meses de garantia en tienda",
    physicalCondition: "Excelente estado, pantalla impecable",
    featured: true,
    color: "Lavender",
  },
  {
    id: "10",
    name: "Motorola Edge 40 Pro",
    brand: "Motorola",
    model: "Edge 40 Pro",
    storage: "256GB",
    condition: "nuevo",
    price: 549,
    images: ["/phones/motorola-edge-40.jpg"],
    accessories: ["Cargador 125W", "Cable USB-C", "Caja original"],
    warranty: "12 meses de garantia oficial",
    featured: false,
    color: "Interstellar Black",
  },
  {
    id: "11",
    name: "iPhone 12",
    brand: "Apple",
    model: "iPhone 12",
    storage: "64GB",
    condition: "usado",
    price: 349,
    originalPrice: 499,
    batteryHealth: 85,
    images: ["/phones/iphone-12.jpg"],
    accessories: ["Cable Lightning"],
    warranty: "3 meses de garantia en tienda",
    physicalCondition: "Buen estado general",
    featured: false,
    color: "Blue",
  },
  {
    id: "12",
    name: "Xiaomi Redmi Note 13 Pro",
    brand: "Xiaomi",
    model: "Redmi Note 13 Pro",
    storage: "256GB",
    condition: "nuevo",
    price: 299,
    images: ["/phones/redmi-note-13.jpg"],
    accessories: ["Cargador 67W", "Cable USB-C", "Funda", "Caja original"],
    warranty: "12 meses de garantia oficial",
    featured: false,
    color: "Midnight Black",
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
  { label: "Menos de $300", min: 0, max: 300 },
  { label: "$300 - $500", min: 300, max: 500 },
  { label: "$500 - $800", min: 500, max: 800 },
  { label: "$800 - $1000", min: 800, max: 1000 },
  { label: "Mas de $1000", min: 1000, max: Infinity },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
