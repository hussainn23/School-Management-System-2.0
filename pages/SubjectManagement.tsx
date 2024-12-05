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
import SubjectFormModal from '@/components/subjectManagement/SubjectFormModal';
import DeleteConfirmation from '@/components/common/DeleteConfirmation';
import { PageHeader } from '@/components/common/PageHeader';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { TableHeader as TableTopHeader } from '@/components/common/TableHeader';
import { fetchSubjects, deleteSubject } from '@/services/subjectService';
import { fetchClasses } from '@/services/classService';
import { fetchSections } from '@/services/sectionService';
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

interface SubjectData {
  id: string;
  name: string;
  class_id: string;
  section_id: string;
  teacher_id: string;
  period_num: string;
  starting_time: string;
  ending_time: string;
  created_at: string;
}

const SubjectManagement = () => {
  const queryClient = useQueryClient();
  const {
    data: subjects,
    isLoading,
    isError,
    error,
  } = useQuery(['subjects'], fetchSubjects);
  const { data: classes } = useQuery(['classes'], fetchClasses);
  const { data: sections } = useQuery(['sections'], fetchSections);
  const { data: teachers } = useQuery(['teachers'], fetchTeachers);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState<string | null>(null);
  const [subjectToEdit, setSubjectToEdit] = useState<SubjectData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const deleteMutation = useMutation(deleteSubject, {
    onSuccess: () => {
      queryClient.invalidateQueries(['subjects']);
      toast.success('Subject deleted successfully');
    },
    onError: (error) => {
      toast.error(`Error deleting subject: ${error}`);
    },
  });

  const openModal = (subjectData?: SubjectData) => {
    setSubjectToEdit(subjectData || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubjectToEdit(null);
  };

  const openDeleteModal = (id: string) => {
    setSubjectToDelete(id);
    setIsDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModal(false);
    setSubjectToDelete(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleDelete = async (id: string) => {
    openDeleteModal(id);
  };

  const confirmDelete = async () => {
    if (subjectToDelete) {
      deleteMutation.mutate(subjectToDelete);
      closeDeleteModal();
    }
  };

  const filteredData = subjects?.filter((subject: SubjectData) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="p-4 sm:p-6">
        <PageHeader
          title="Subject Management"
          rightButtons={
            <div className="flex justify-center items-center gap-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export & Print
              </Button>
              <Button onClick={() => openModal()}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Subject
              </Button>
            </div>
          }
          leftContent={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>Subject Management</BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
        />

        <div className="w-full bg-white dark:bg-gray-800 shadow-sm p-3 rounded-md max-h-svh">
          <TableTopHeader
            title="All Subjects"
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

  const formatTime = (time: string): string => {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  return (
    <div className="p-4 sm:p-6">
      <PageHeader
        title="Subject Management"
        rightButtons={
          <div className="flex justify-center items-center gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export & Print
            </Button>
            <Button onClick={() => openModal()} variant={'theme'}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Subject
            </Button>
          </div>
        }
        leftContent={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>Admin</BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Subject Management</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <SubjectFormModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        subjectData={subjectToEdit}
        classes={classes || []}
        sections={sections || []}
        teachers={teachers || []}
      />

      <DeleteConfirmation
        isModalOpen={isDeleteModal}
        closeModal={closeDeleteModal}
        doSomething={confirmDelete}
      />

      <div className="w-full bg-white dark:bg-gray-800 shadow-sm p-3 rounded-md max-h-svh">
        <TableTopHeader
          title="All Subjects"
          onSearch={handleSearch}
          onSort={() => {}}
        />
        <div className="w-full">
          <Table>
            <TableRow>
              <TableHead className="w-12">
                <input type="checkbox" name="all" id="" />
              </TableHead>
              <TableHead>Subject Name</TableHead>
              <TableHead>Period Number</TableHead>
              <TableHead>Starting Time</TableHead>
              <TableHead>Ending Time</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
            <TableBody>
              {filteredData?.map((subject: SubjectData) => (
                <TableRow key={subject.id}>
                  <TableCell>
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>{subject.period_num}</TableCell>
                  <TableCell>{formatTime(subject.starting_time)}</TableCell>
                  <TableCell>{formatTime(subject.ending_time)}</TableCell>
                  <TableCell className="flex justify-start items-center gap-2">
                    <Button
                      size={'sm'}
                      className="bg-theme/10 text-theme hover:bg-theme/30 dark:bg-theme/30 dark:text-white"
                      onClick={() => openModal(subject)}
                    >
                      <PencilLine size={30} />
                    </Button>
                    <Button
                      size={'sm'}
                      className="bg-red-200 text-red-600 hover:bg-red-300 dark:bg-red-400 dark:text-red-700"
                      onClick={() => handleDelete(subject.id)}
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

export default SubjectManagement;
