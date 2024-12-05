import { axiosInstance } from "./instance";

interface Subject {
  id: string;
  class_id: string;
  section_id: string;
  name: string;
  teacher_id: string 
  period_num: string
  starting_time: string
  ending_time: string 
  created_at: string 
}

export const fetchSubjects = async (): Promise<Subject[]> => {
  try {
    const response = await axiosInstance.get('/subjects');
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching subjects');
  }
};

export const addSubject = async (
  newSubjectData: any 
): Promise<Subject> => {
  try {
    const response = await axiosInstance.post('/subjects', newSubjectData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding section');
  }
};

export const updateSubject = async (
  subjectId: string,
  subjectData: any
): Promise<Subject> => {
  try {
    const response = await axiosInstance.put(
      `/subjects/${subjectId}`,
      subjectData
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error updating section: ${error.message}`);
    } else {
      throw new Error('Error updating section');
    }
  }
};

export const deleteSubject = async (subjectId: string): Promise<void> => {
  try {
    await axiosInstance.delete(`/subjects/${subjectId}`);
  } catch (error) {
    throw new Error('Error deleting section');
  }
};
