import { axiosInstance } from './instance';

interface SectionData {
  id: string;
  section_name: string;
  description: string;
  class_id: string;
  medium: string;
  teacher_id: string;
}

export const fetchSections = async (): Promise<SectionData[]> => {
  try {
    const response = await axiosInstance.get('/sections');
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching sections');
  }
};

export const addSection = async (
  newSectionData: Omit<SectionData, 'id'>
): Promise<SectionData> => {
  try {
    const response = await axiosInstance.post('/sections', newSectionData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding section');
  }
};

export const updateSection = async (
  sectionId: string,
  sectionData: Omit<SectionData, 'id'>
): Promise<SectionData> => {
  try {
    const response = await axiosInstance.put(
      `/sections/${sectionId}`,
      sectionData
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

export const deleteSection = async (sectionId: string): Promise<void> => {
  try {
    await axiosInstance.delete(`/sections/${sectionId}`);
  } catch (error) {
    throw new Error('Error deleting section');
  }
};
