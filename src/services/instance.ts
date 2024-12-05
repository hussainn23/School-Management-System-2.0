import axios from 'axios';
import { useAuthStore } from '@/store/authStore';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const getAuthHeader = () => {
	const { token } = useAuthStore.getState();
	return token ? { Authorization: `Bearer ${token}` } : {};
};

// Create an Axios instance
export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		...getAuthHeader(),
	},
});
