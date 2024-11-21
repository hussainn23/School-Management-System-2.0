import Table from '../src/components/common/Table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../src/components/ui/dropdown-menu';
import { Button } from '../src/components/ui/button';
import { MoreHorizontal, Plus, Printer } from 'lucide-react';
import { useState } from 'react';
import AddSection from '../src/components/section-management/AddSection';
import DeleteConfirmation from '@/components/common/DeleteConfirmation';

const SectionManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

   const openDeleteModal = () => setIsDeleteModal(true);
   const closeDeleteModal = () => setIsDeleteModal(false);

  const data = [
    {
      createdAt: '05-12-2024',
      classname: '9th ',
    },
    {
      createdAt: '04-12-3000',
      classname: '10th ',
    },
  ];

  const columns = [
    { key: 'createdAt', header: 'Created At' },
    { key: 'classname', header: 'Class Name', sortable: true },
    {
      key: 'actions',
      header: 'Actions',
      render: (item: unknown) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => console.log('Edit', item)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => openDeleteModal()}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="p-4 sm:p-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg sm:text-xl lg:text-2xl">
          Section Management
        </h2>

        <div className="flex flex-wrap justify-end items-center gap-2">
          <Button
            className="flex justify-center items-center gap-1 p-2"
            onClick={openModal}
          >
            <Plus />
            Add Section
          </Button>
          <Button className="flex justify-center items-center gap-1 p-2">
            <Printer />
            Print
          </Button>
        </div>
      </div>

      <DeleteConfirmation
        isModalOpen={isDeleteModal}
        closeModal={closeDeleteModal}
        doSomething={() => {}}
      />
      <AddSection isModalOpen={isModalOpen} closeModal={closeModal} />

      <Table data={data} columns={columns} itemsPerPage={20} />
    </div>
  );
};

export default SectionManagement;
