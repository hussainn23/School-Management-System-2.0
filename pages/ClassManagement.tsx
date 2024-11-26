import { BaseTable } from '../src/components/common/Table';
import { Button } from '../src/components/ui/button';
import { Download, PlusCircle, Pencil, Trash2 } from 'lucide-react';
import { useCallback, useState } from 'react';
import AddClassModal from '@/components/class-management/AddClass';
import DeleteConfirmation from '@/components/common/DeleteConfirmation';
import { PageHeader } from '@/components/common/PageHeader';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { StatusBadge } from '@/components/ui/status-badge';
import { TableHeader } from '@/components/common/TableHeader';

interface ClassData {
  id: string;
  className: string;
  description: string;
  status: 'top-scored' | 'poor-results' | 'moderate';
  createdDate: string;
}

const ClassManagement = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeleteModal = () => setIsDeleteModal(true);
  const closeDeleteModal = () => setIsDeleteModal(false);





  

  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<{
      key: keyof ClassData | null;
      direction: 'asc' | 'desc';
    }>({ key: null, direction: 'asc' });
    const [data, setData] = useState<ClassData[]>([
      {
        id: '1',
        className: '9th',
        description:
          'Lorem ipsum is a dummy text and a dummy filler to replace the dummy lines in the place of dumm.',
        status: 'top-scored',
        createdDate: '2024-05-21',
      },
    ]);


    const columns = [
      {
        header: 'Class Name',
        accessorKey: 'className' as const,
      },
      {
        header: 'Description',
        accessorKey: 'description' as const,
      },
      {
        header: 'Status',
        accessorKey: 'status' as const,
        cell: (row: ClassData) => <StatusBadge status={row.status} />,
      },
      {
        header: 'Created Date',
        accessorKey: 'createdDate' as const,
      },
      {
        header: 'Action',
        accessorKey: 'id' as const,
        cell: (row: ClassData) => (
          <div className="flex gap-2">
            <Button
              size="icon"
              className="bg-theme/20 text-theme hover:bg-theme/30"
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="bg-red-100 text-red-500 hover:bg-red-200"
              onClick={openDeleteModal}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ),
      },
    ];

    const handleSearch = useCallback((query: string) => {
      setSearchQuery(query);
    }, []);

    const handleSort = useCallback(() => {
      if (!sortConfig.key) {
        setSortConfig({ key: 'className', direction: 'asc' });
      } else {
        setSortConfig((prev) => ({
          key: prev.key,
          direction: prev.direction === 'asc' ? 'desc' : 'asc',
        }));
      }
    }, [sortConfig]);


  return (
    <div className="p-4 sm:p-6">
      <PageHeader
        title="Class Management"
        rightButtons={
          <div className="flex justify-center items-center gap-2">
            <Button variant={'white'}>
              <Download />
              Export & Print
            </Button>
            <Button variant={'theme'} onClick={() => openModal()}>
              <PlusCircle />
              Add Class
            </Button>
          </div>
        }
        leftContent={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/components">Components</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <AddClassModal closeModal={closeModal} isModalOpen={isModalOpen} />

      <DeleteConfirmation
        isModalOpen={isDeleteModal}
        closeModal={closeDeleteModal}
        doSomething={() => {}}
      />

      <div className='w-full bg-white shadow-sm p-3 rounded-md max-h-svh'>
        <TableHeader
          title="All Classes"
          onSearch={handleSearch}
          onSort={handleSort}
        />
        <BaseTable
          data={data}
          columns={columns}
          selectable
          onRowSelect={(selectedRows) => console.log('Selected:', selectedRows)}
          pagination={{
            currentPage: 1,
            pageSize: 10,
            totalItems: 50,
            onPageChange: (page) => console.log('Page:', page),
          }}
          onSort={(column, direction) =>
            console.log('Sort:', column, direction)
          }
        />
      </div>
    </div>
  );
};

export default ClassManagement;
