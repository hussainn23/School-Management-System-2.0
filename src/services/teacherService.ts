import { axiosInstance } from './classService';


export const fetchTeachers = async () => {
  try {
    const response = await axiosInstance.get('/teachers');
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching teachers');
  }
};

export const addTeacher = async (newTeacherData: any) => {
  try {
    const response = await axiosInstance.post('/teachers', newTeacherData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding teacher');
  }
};

