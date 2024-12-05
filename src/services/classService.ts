import { axiosInstance } from "./instance";

// Fetch Classes using Axios
export const fetchClasses = async () => {
  try {
    const response = await axiosInstance.get('/classes');
    return response.data.data; 
  } catch (error) {
    throw new Error('Error fetching classes');
  }
};

// Add a new Class using Axios
export const addClass = async (newClassData: object) => {
  try {
    const response = await axiosInstance.post('/classes', newClassData);
    return response.data; 
  } catch (error) {
    throw new Error('Error adding class');
  }
};

// Update a Class using Axios
export const updateClass = async (
  classId: string,
  classData: { name: string; description: string }
) => {
  try {
    const response = await axiosInstance.put(`/classes/${classId}`, classData);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error updating class: ${error.message}`);
    } else {
      throw new Error('Error updating class');
    }
  }
};


// Delete a Class using Axios
export const deleteClass = async (classId: string) => {
  try {
    const response = await axiosInstance.delete(`/classes/${classId}`);
    return response.data; 
  } catch (error) {
    throw new Error('Error deleting class');
  }
};
