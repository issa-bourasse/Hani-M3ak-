import axios from 'axios';
import { auth } from './firebase';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: async (data: {
    email: string;
    password: string;
    name: string;
    phone?: string;
    role?: 'RIDER' | 'DRIVER' | 'ADMIN';
  }) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },

  verifyToken: async (idToken: string) => {
    const response = await api.post('/auth/verify', { idToken });
    return response.data;
  },
};

// Users API
export const usersAPI = {
  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },

  updateProfile: async (data: {
    name?: string;
    phone?: string;
    avatar?: string;
    language?: 'en' | 'fr' | 'ar';
  }) => {
    const response = await api.put('/users/profile', data);
    return response.data;
  },

  getAllUsers: async (role?: string) => {
    const response = await api.get('/users', { params: { role } });
    return response.data;
  },

  getUserById: async (id: string) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  deleteUser: async (id: string) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  },
};

// Trips API
export const tripsAPI = {
  createTrip: async (data: {
    originLat: number;
    originLng: number;
    originAddress: string;
    destLat: number;
    destLng: number;
    destAddress: string;
    vehicleType: 'ECONOMY' | 'COMFORT' | 'PREMIUM' | 'XL';
  }) => {
    const response = await api.post('/trips', data);
    return response.data;
  },

  acceptTrip: async (tripId: string) => {
    const response = await api.post(`/trips/${tripId}/accept`);
    return response.data;
  },

  updateTrip: async (
    tripId: string,
    data: {
      status?: 'REQUESTED' | 'ACCEPTED' | 'DRIVER_ARRIVED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
      distance?: number;
      duration?: number;
      fare?: number;
      riderRating?: number;
      driverRating?: number;
      riderComment?: string;
      driverComment?: string;
    }
  ) => {
    const response = await api.put(`/trips/${tripId}`, data);
    return response.data;
  },

  getTripById: async (tripId: string) => {
    const response = await api.get(`/trips/${tripId}`);
    return response.data;
  },

  getMyTrips: async (role: 'rider' | 'driver' = 'rider') => {
    const response = await api.get('/trips/user/my-trips', { params: { role } });
    return response.data;
  },

  getAllTrips: async (status?: string) => {
    const response = await api.get('/trips', { params: { status } });
    return response.data;
  },
};

export default api;

