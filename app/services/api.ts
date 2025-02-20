import axios from "axios";
import {
  ApiResponse,
  RegisterData,
  LoginData,
  User,
  VehicleData,
  Vehicle,
  DossierData,
  Dossier,
} from "@/types";

const API_URL = "http://localhost:8000";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (data: RegisterData) =>
    api.post<ApiResponse<{ token: string; user: User }>>(
      "/auth/register",
      data
    ),
  login: (data: LoginData) =>
    api.post<ApiResponse<{ token: string; user: User }>>("/auth/login", data),
  me: () => api.get<ApiResponse<User>>("/auth/me"),
};

// Vehicles API
export const vehiclesAPI = {
  create: (data: VehicleData) =>
    api.post<ApiResponse<Vehicle>>("/vehicles", data),
  list: () => api.get<ApiResponse<Vehicle[]>>("/vehicles"),
  get: (id: string) => api.get<ApiResponse<Vehicle>>(`/vehicles/${id}`),
  update: (id: string, data: Partial<VehicleData>) =>
    api.patch<ApiResponse<Vehicle>>(`/vehicles/${id}`, data),
  delete: (id: string) => api.delete<ApiResponse<void>>(`/vehicles/${id}`),
  uploadImages: (id: string, images: FormData) =>
    api.post<ApiResponse<void>>(`/vehicles/${id}/images`, images, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

// Dossiers API
export const dossiersAPI = {
  create: (data: DossierData) =>
    api.post<ApiResponse<Dossier>>("/dossiers", data),
  list: () => api.get<ApiResponse<Dossier[]>>("/dossiers"),
  myDossiers: () => api.get<ApiResponse<Dossier[]>>("/dossiers/me"),
  get: (id: string) => api.get<ApiResponse<Dossier>>(`/dossiers/${id}`),
  update: (id: string, data: Partial<DossierData>) =>
    api.patch<ApiResponse<Dossier>>(`/dossiers/${id}`, data),
  delete: (id: string) => api.delete<ApiResponse<void>>(`/dossiers/${id}`),
  uploadDocuments: (id: string, documents: FormData) =>
    api.post<ApiResponse<void>>(`/dossiers/${id}/documents`, documents, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

// Admin API
export const adminAPI = {
  // Dossiers
  updateDossierStatus: (id: string, status: string) =>
    api.patch<ApiResponse<Dossier>>(`/admin/dossiers/${id}/status`, { status }),
  getPendingDossiers: () =>
    api.get<ApiResponse<Dossier[]>>("/admin/dossiers/pending"),
  requestDocuments: (id: string, documents: string[]) =>
    api.post<ApiResponse<void>>(`/admin/dossiers/${id}/request-documents`, {
      documents,
    }),
  getInProgressDossiers: () =>
    api.get<ApiResponse<Dossier[]>>("/admin/dossiers/in-progress"),
};

export default api;
