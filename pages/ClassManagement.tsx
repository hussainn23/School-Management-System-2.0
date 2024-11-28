import { Button } from '@/components/ui/button';
import {
  Download,
  PlusCircle,
  Trash2,
  ChevronLeft,
  ChevronRight,
  PencilLine,
} from 'lucide-react';
import { useState } from 'react';
import ClassFormModal from '@/components/class-management/ClassFormModal';
import DeleteConfirmation from '@/components/common/DeleteConfirmation';
import { PageHeader } from '@/components/common/PageHeader';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { TableHeader as TableTopHeader } from '@/components/common/TableHeader';
import { fetchClasses, deleteClass } from '@/services/classService';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/table';
import { toast } from 'sonner';

interface ClassData {
  id: string;
  name: string;
  description: string;
  status: string;
  created_at: string;
}

const ClassManagement = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery<ClassData[], Error>(
    ['classes'],
    fetchClasses
  );
  const [allSelected, setAllSelected] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [classToDelete, setClassToDelete] = useState<string | null>(null);
  const [classToEdit, setClassToEdit] = useState<ClassData | null>(null);

  const [searchQuery, setSearchQuery] = useState('');

  const deleteMutation = useMutation(deleteClass, {
    onSuccess: () => {
      queryClient.invalidateQueries(['classes']);
      toast.success('Class deleted successfully');
    },
    onError: (error) => {
      toast.error(`Error deleting class: ${error}`);
    },
  });

  const openModal = (classData?: ClassData) => {
    setClassToEdit(classData || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setClassToEdit(null);
  };

  const openDeleteModal = (id: string) => {
    setClassToDelete(id);
    setIsDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModal(false);
    setClassToDelete(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleDelete = async (id: string) => {
    openDeleteModal(id);
  };

  const confirmDelete = async () => {
    if (classToDelete) {
      deleteMutation.mutate(classToDelete);
      closeDeleteModal();
    }
  };

  const filteredData = data?.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedClasses([]);
    } else {
      setSelectedClasses(data?.map((row) => row.id) || []);
    }
    setAllSelected(!allSelected);
  };

  const handleSelectSingle = (id: string) => {
    if (selectedClasses.includes(id)) {
      setSelectedClasses(selectedClasses.filter((item) => item !== id));
    } else {
      setSelectedClasses([...selectedClasses, id]);
    }
  };

  if (isLoading) {
    return (
      <div className="p-4 sm:p-6">
        <PageHeader
          title="Class Management"
          rightButtons={
            <div className="flex justify-center items-center gap-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export & Print
              </Button>
              <Button onClick={() => openModal()}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Class
              </Button>
            </div>
          }
          leftContent={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>Components</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
        />

        <div className="w-full bg-white dark:bg-gray-800 shadow-sm p-3 rounded-md max-h-svh">
          <TableTopHeader
            title="All Classes"
            onSearch={handleSearch}
            onSort={() => {}}
          />
          <Skeleton className="h-8 mb-2" />
          <Skeleton className="h-6 mb-4" />
          <Skeleton className="h-6 mb-4" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <PageHeader
        title="Class Management"
        rightButtons={
          <div className="flex justify-center items-center gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export & Print
            </Button>
            <Button onClick={() => openModal()} variant={'theme'}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Class
            </Button>
          </div>
        }
        leftContent={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>Admin</BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Class Management</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <ClassFormModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        classData={classToEdit}
      />

      <DeleteConfirmation
        isModalOpen={isDeleteModal}
        closeModal={closeDeleteModal}
        doSomething={confirmDelete}
      />

      <div className="w-full bg-white dark:bg-gray-800 shadow-sm p-3 rounded-md max-h-svh">
        <TableTopHeader
          title="All Classes"
          onSearch={handleSearch}
          onSort={() => {}}
        />
        <div className="w-full">
          <Table>
            <TableRow>
              <TableHead className="w-12">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Class Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
            <TableBody>
              {filteredData?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedClasses.includes(row.id)}
                      onChange={() => handleSelectSingle(row.id)}
                    />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    {new Date(row.created_at).toISOString().split('T')[0]}
                  </TableCell>
                  <TableCell className="flex justify-start items-center gap-2">
                    <Button
                      size={'sm'}
                      className="bg-theme/10 text-theme hover:bg-theme/30 dark:bg-theme/30 dark:text-white"
                      onClick={() => openModal(row)}
                    >
                      <PencilLine size={30} />
                    </Button>
                    <Button
                      size={'sm'}
                      className="bg-red-200 text-red-600 hover:bg-red-300 dark:bg-red-400 dark:text-red-700"
                      onClick={() => handleDelete(row.id)}
                    >
                      <Trash2 />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between px-2 py-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredData?.length ?? 0} of {filteredData?.length ?? 0}{' '}
              entries
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" disabled>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassManagement;
