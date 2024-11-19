import { Route, Routes } from 'react-router-dom';
import Table from '../src/components/common/Table';
import { Button } from '../src/components/ui/button';
import { Eye, Plus, Printer } from 'lucide-react';
import { useState } from 'react';
import AddTeacher from '@/components/teacher-management/AddTeacher';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const data = [
    {
      teacherId: 1,
      name: 'John Doe',
      role: 'Lecturer',
      contact: '9249484948',
      joining: '2022-08-4',
    },
    {
      teacherId: 1,
      name: 'John Doe',
      role: 'Lecturer',
      contact: '9249484948',
      joining: '2022-08-4',
    },
    {
      teacherId: 1,
      name: 'John Doe',
      role: 'Lecturer',
      contact: '9249484948',
      joining: '2022-08-4',
    },
    {
      teacherId: 1,
      name: 'John Doe',
      role: 'Lecturer',
      contact: '9249484948',
      joining: '2022-08-4',
    },
  ];

  const columns = [
    { key: 'teacherId', header: 'Teacher ID', sortable: true },
    { key: 'name', header: 'Name', sortable: true },
    { key: 'role', header: 'Role', sortable: true },
    { key: 'contact', header: 'Contact', sortable: true },
    { key: 'joining', header: 'Joining', sortable: true },
    {
      key: 'actions',
      header: 'Actions',
      render: (item: unknown) => <Eye />,
    },
  ];

  return (
    <div className="p-4 sm:p-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg sm:text-xl lg:text-2xl">
          Teacher Management
        </h2>

        <div className="flex flex-wrap justify-end items-center gap-2">
          <Link
            to={'/admin/teacher-management/add-teacher'}
            className="flex justify-center items-center gap-1 p-2 bg-gradient-to-l from-blue-700 via-blue-600 to-blue-500 text-primary-foreground hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 transition-all duration-300 text-[12px] md:text-[14px] rounded-md"
          >
            <Plus />
            Add Teacher
          </Link>
          <Button className="flex justify-center items-center gap-1 p-2">
            <Printer />
            Print
          </Button>
        </div>
      </div>

      <Table data={data} columns={columns} itemsPerPage={20} />
    </div>
  );
};

const TeacherManagement = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />

        <Route
          path="/add-teacher"
          element={<AddTeacher />}
        />
      </Routes>
    );
}






export default TeacherManagement;


