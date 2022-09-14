export interface CarDTO {
  id: string;
  name: string;
  brand: string;
  about: string;
  price: number;
  period: string;
  fuel_type: string;
  thumbnail: string;
  accessories: {
    id: string;
    type: string;
    name: string;
  }[];

  photos: {
    id: string;
    photo: string;
  }[];
}
