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
import SectionFormModal from '@/components/section-management/SectionFormModal';
import DeleteConfirmation from '@/components/common/DeleteConfirmation';
import { PageHeader } from '@/components/common/PageHeader';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { TableHeader as TableTopHeader } from '@/components/common/TableHeader';
import { deleteSection, fetchSections } from '@/services/sectionService';
import { fetchClasses } from '@/services/classService';
import { fetchTeachers } from '@/services/teacherService';
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

interface SectionData {
  id: string;
  section_name: string;
  description: string;
  class_id: string;
  medium: string;
  teacher_id: string;
  created_at: string;
}

const SectionManagement = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery(
    ['sections'],
    fetchSections
  );

  const { data: classes} = useQuery(
    ['classes'],
    fetchClasses
  );

  const { data: teachers} = useQuery(
    ['teachers'],
    fetchTeachers
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [sectionToDelete, setSectionToDelete] = useState<string | null>(null);
  const [sectionToEdit, setSectionToEdit] = useState<SectionData | null>(null);

  const [searchQuery, setSearchQuery] = useState('');

  const deleteMutation = useMutation(deleteSection, {
    onSuccess: () => {
      queryClient.invalidateQueries(['sections']);
      toast.success('Section deleted successfully');
    },
    onError: (error) => {
      toast.error(`Error deleting section: ${error}`);
    },
  });

  const openModal = (sectionData?: SectionData) => {
    setSectionToEdit(sectionData || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSectionToEdit(null);
  };

  const openDeleteModal = (id: string) => {
    setSectionToDelete(id);
    setIsDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModal(false);
    setSectionToDelete(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleDelete = async (id: string) => {
    openDeleteModal(id);
  };

  const confirmDelete = async () => {
    if (sectionToDelete) {
      deleteMutation.mutate(sectionToDelete);
      closeDeleteModal();
    }
  };

  const filteredData = data?.filter((row: any) =>
    row.section_name.toLowerCase().includes(searchQuery.toLowerCase())
  );



  if (isLoading) {
    return (
      <div className="p-4 sm:p-6">
        <PageHeader
          title="Section Management"
          rightButtons={
            <div className="flex justify-center items-center gap-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export & Print
              </Button>
              <Button onClick={() => openModal()}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Section
              </Button>
            </div>
          }
          leftContent={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>Section Management</BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
        />

        <div className="w-full bg-white dark:bg-gray-800 shadow-sm p-3 rounded-md max-h-svh">
          <TableTopHeader
            title="All Sections"
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
        title="Section Management"
        rightButtons={
          <div className="flex justify-center items-center gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export & Print
            </Button>
            <Button onClick={() => openModal()} variant={'theme'}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Section
            </Button>
          </div>
        }
        leftContent={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>Admin</BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Section Management</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <SectionFormModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        sectionData={sectionToEdit}
        classes={classes}
        teachers={teachers}
      />

      <DeleteConfirmation
        isModalOpen={isDeleteModal}
        closeModal={closeDeleteModal}
        doSomething={confirmDelete}
      />

      <div className="w-full bg-white dark:bg-gray-800 shadow-sm p-3 rounded-md max-h-svh">
        <TableTopHeader
          title="All Sections"
          onSearch={handleSearch}
          onSort={() => {}}
        />
        <div className="w-full">
          <Table>
            <TableRow>
              <TableHead className="w-12">
                <input type="checkbox" name="all" id="" />
              </TableHead>
              <TableHead>Section Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Medium</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
            <TableBody>
              {filteredData?.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell>{row.section_name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.medium}</TableCell>
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

export default SectionManagement;
