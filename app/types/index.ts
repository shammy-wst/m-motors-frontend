// Auth types
export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
}

// Vehicle types
export interface VehicleData {
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  fuel: "DIESEL" | "ESSENCE" | "HYBRID" | "ELECTRIC";
  transmission: "MANUAL" | "AUTOMATIC";
  features: string[];
  imageUrls: string[];
  createdAt: string;
  updatedAt: string;
}

// Dossier types
export interface DossierData {
  vehicleId: string;
  type: "PURCHASE" | "LEASE" | "TEST_DRIVE";
  desiredDate: string;
  message?: string;
  documents?: File[];
}

export interface Dossier {
  id: string;
  vehicle: Vehicle;
  user: User;
  type: "PURCHASE" | "LEASE" | "TEST_DRIVE";
  desiredDate: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
  message?: string;
  documentUrls: string[];
  createdAt: string;
  updatedAt: string;
}

// Service types
export interface ServiceData {
  name: string;
  description: string;
  price: number;
  duration: number;
  category: "MAINTENANCE" | "REPAIR" | "CUSTOM";
}

export interface Service extends ServiceData {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// API Response types
export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// API Error types
export interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message: string;
}
