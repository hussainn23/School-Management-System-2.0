// src/pages/SubjectManagement.tsx

import React, { useState } from 'react';
import { Button } from '../src/components/ui/button';
import { MoreHorizontal, Plus, Printer } from 'lucide-react';
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from '../src/components/ui/dropdown-menu';
import  Table  from '../src/components/common/Table';
import AddSubjectModal from '../src/components/subjectManagement/AddSubjectModal';
import EditSubjectModal from '../src/components/subjectManagement/EditSubjectModal';
import TimeTableModal from '../src/components/subjectManagement/TimeTableModal';

const SubjectManagement: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isTimeTableModalOpen, setIsTimeTableModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const data = [
    { createdAt: '05-12-2024', classname: '9th', description: 'lorem ipsum dolor sit apum' },
    { createdAt: '04-12-3000', classname: '10th', description: 'lorem ipsum dolor sit apum' },
  ];

  const columns = [
    { key: 'period', header: 'Period#' },
    { key: 'subjectname', header: 'Subject Name', sortable: true },
    { key: 'teacher', header: 'Teacher', sortable: true },
    { key: 'time', header: 'Time', sortable: true },
    {
      key: 'actions',
      header: '',
      render: (item) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => {
              setSelectedSubject(item.subjectname);
              setIsEditModalOpen(true);
            }}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              setSelectedSubject(item.subjectname);
              setIsTimeTableModalOpen(true);
            }}>Time Table</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="p-4 sm:p-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-xl sm:text-2xl mb-3">Subject Management</h2>
        <div className="flex justify-center items-center gap-2">
          <Button onClick={() => setIsAddModalOpen(true)}>
            <Plus />
            Add Subject
          </Button>
          <Button>
            <Printer />
            Print
          </Button>
        </div>
      </div>

      {/* Render the Table */}
      <Table data={data} columns={columns} itemsPerPage={20} />

      {/* Add Subject Modal */}
      <AddSubjectModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        doSomething={() => console.log('Add Subject Action')}
      />

      {/* Edit Subject Modal */}
      <EditSubjectModal
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        doSomething={() => console.log('Edit Subject Action')}
        subjectName={selectedSubject || ''}
      />

      {/* Time Table Modal */}
      <TimeTableModal
        isOpen={isTimeTableModalOpen}
        closeModal={() => setIsTimeTableModalOpen(false)}
        subjectName={selectedSubject || ''}
      />
    </div>
  );
};

export default SubjectManagement;