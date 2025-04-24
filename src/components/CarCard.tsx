import React from 'react';
import { Car, ShieldCheck, Users, Fuel, Gauge } from 'lucide-react';
import { Car as CarType } from '../types';

interface CarCardProps {
  car: CarType;
  onSelect: (car: CarType) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        {car.imageUrl ? (
          <img 
            src={car.imageUrl} 
            alt={car.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Car className="h-24 w-24 text-gray-400" />
          </div>
        )}
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
          ${car.pricePerDay}/day
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
            <p className="text-sm text-gray-500">{car.category}</p>
          </div>
          <div className="flex items-center text-sm text-green-600">
            <ShieldCheck className="h-4 w-4 mr-1" />
            <span>Available</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-1" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Gauge className="h-4 w-4 mr-1" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Fuel className="h-4 w-4 mr-1" />
            <span>{car.fuelType}</span>
          </div>
        </div>
        
        <button
          onClick={() => onSelect(car)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors duration-200"
        >
          Select Vehicle
        </button>
      </div>
    </div>
  );
};

export default CarCard;