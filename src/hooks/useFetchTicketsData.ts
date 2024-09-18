import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import { ENDPOINTS } from '../api/apiEndpoints';
import { APIResponse } from '../types';




const fetchTickets = async (): Promise<APIResponse> => {
   try {
      const { data } = await axiosInstance.get(ENDPOINTS.ASSIGNMENT);
      return data;
   } catch (error) {
      console.error('Error fetching tickets:', error);
      throw error;
   }
};

export const useFetchTicketsData = () => {
   return useQuery(['assignment'], fetchTickets);
};
