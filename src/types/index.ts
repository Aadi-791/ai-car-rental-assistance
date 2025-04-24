export interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface Car {
  id: string;
  name: string;
  category: 'Economy' | 'Midsize' | 'SUV' | 'Luxury' | 'Electric';
  pricePerDay: number;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: string;
  features: string[];
  imageUrl: string;
}

export interface BookingDetails {
  carId: string;
  startDate: Date;
  endDate: Date;
  location: string;
  additionalOptions?: string[];
}