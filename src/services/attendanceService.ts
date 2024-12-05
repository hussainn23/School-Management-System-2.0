import { axiosInstance } from "./instance";

interface AttendanceData{
    studentId: string | number
    classId: string | number 
    date: string 
    status: string 
}

// Fetch Attendance 
export const fetchAttendance = async (classId: number,period: string) => {
  try {
    const response = await axiosInstance.get(
		`attendance?class=${classId}&period=${period}`
	);
    return response.data.data; 
  } catch (error) {
    throw new Error('Error fetching attendance');
  }
};

// Add Attendance 
export const addAttendance = async (attendanceData: AttendanceData) => {
  try {
    const response = await axiosInstance.post('/attendance',attendanceData);
    return response.data; 
  } catch (error) {
    throw new Error('Error adding attendance');
  }
};