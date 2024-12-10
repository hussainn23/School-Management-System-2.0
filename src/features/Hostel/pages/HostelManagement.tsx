import { Button } from '@/components/ui/button';
import {
  Download,
  PlusCircle,
//   Trash2,
  ChevronLeft,
  ChevronRight,
//   PencilLine,
  Eye,
} from 'lucide-react';
import { useState } from 'react';
import AddStudentToHostelModal from '@/features/Hostel/components/AddStudent';
import DeleteConfirmation from '@/components/DeleteConfirmation';
import { PageHeader } from '@/components/PageHeader';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { TableHeader as TableTopHeader } from '@/components/TableHeader';
import { fetchClasses, deleteClass } from '@/services/classService';
import { fetchSections } from '@/services/sectionService';
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
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ClassData {
  id: string;
  name: string;
  description: string;
  status: string;
  created_at: string;
}

const HostelManagement = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery<ClassData[], Error>(
    ['classes'],
    fetchClasses
  );
  const { data: sections } = useQuery(
		['sections'],
		fetchSections
  );

  const [allSelected, setAllSelected] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [classToDelete, setClassToDelete] = useState<string | null>(null);
  const [studentToEdit, setStudentToEdit] = useState(null);

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

  const openModal = (studentData?: any) => {
		setStudentToEdit(studentData || null);
		setIsModalOpen(true);
  };

  const closeModal = () => {
		setIsModalOpen(false);
		setStudentToEdit(null);
  };

//   const openDeleteModal = (id: string) => {
//     setClassToDelete(id);
//     setIsDeleteModal(true);
//   };

  const closeDeleteModal = () => {
    setIsDeleteModal(false);
    setClassToDelete(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

//   const handleDelete = async (id: string) => {
//     openDeleteModal(id);
//   };

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
          title="Hostel Management"
          rightButtons={
            <div className="flex justify-center items-center gap-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export & Print
              </Button>
              <Button onClick={() => openModal()}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Student 
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
            title="List Items"
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
				title="Hostel Management"
				rightButtons={
					<div className="flex justify-center items-center gap-2">
						<Button variant="outline">
							<Download className="mr-2 h-4 w-4" />
							Export & Print
						</Button>
						<Button onClick={() => openModal()} variant={'theme'}>
							<PlusCircle className="mr-2 h-4 w-4" />
							Add Student
						</Button>
					</div>
				}
				leftContent={
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>Hostel Management</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>Pending Students</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				}
			/>

			<AddStudentToHostelModal
				closeModal={closeModal}
				isModalOpen={isModalOpen}
				studentData={studentToEdit}
				classes={data ?? []}
				sections={sections ?? []}
			/>

			<DeleteConfirmation
				isModalOpen={isDeleteModal}
				closeModal={closeDeleteModal}
				doSomething={confirmDelete}
			/>

			<div className="w-full bg-white dark:bg-gray-800 shadow-sm p-3 rounded-md max-h-svh">
				<div className="flex items-center mb-8 gap-20">
					<h2 className="text-2xl font-bold">List Items</h2>
					<div className="flex items-center space-x-2">
						<Input
							size={8}
							placeholder="Registration Number"
							className="dark:bg-gray-700 w-[350px]"
						/>
						<Select>
							<SelectTrigger className="h-8 w-[350px]">
								<SelectValue placeholder="Class" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Classes</SelectLabel>
									<SelectItem value="apple">
										Class1
									</SelectItem>
									<SelectItem value="banana">
										Class2
									</SelectItem>
									<SelectItem value="blueberry">
										Class3
									</SelectItem>
									<SelectItem value="grapes">
										Class4
									</SelectItem>
									<SelectItem value="pineapple">
										Class5
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger className="h-8 w-[350px]">
								<SelectValue placeholder="Section" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Sections</SelectLabel>
									<SelectItem value="apple">
										Section 1
									</SelectItem>
									<SelectItem value="banana">
										Section 2
									</SelectItem>
									<SelectItem value="blueberry">
										Section 3
									</SelectItem>
									<SelectItem value="grapes">
										Section 4
									</SelectItem>
									<SelectItem value="pineapple">
										Section 5
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
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
							<TableHead>Sr</TableHead>
							<TableHead>Reg No</TableHead>
							<TableHead>Student Name</TableHead>
							<TableHead>Father Name</TableHead>
							<TableHead>Class </TableHead>
							<TableHead>Section</TableHead>
							<TableHead>Hostel Status</TableHead>
							<TableHead>Date Added</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
						<TableBody>
							{/* {filteredData?.map((row) => (
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
              ))} */}
							<TableRow key={1}>
								<TableCell>
									<input
										type="checkbox"
										checked={selectedClasses.includes('1')}
										onChange={() => handleSelectSingle('1')}
									/>
								</TableCell>
								<TableCell>1</TableCell>
								<TableCell>REG-1</TableCell>
								<TableCell>Adnan</TableCell>
								<TableCell>John David</TableCell>
								<TableCell>9th</TableCell>
								<TableCell>A</TableCell>
								<TableCell>Pending</TableCell>
								<TableCell>Dec 23,2000</TableCell>
								<TableCell className="flex justify-start items-center gap-2">
									<Button
										size={'sm'}
										className="bg-theme/10 text-theme hover:bg-theme/30 dark:bg-theme/30 dark:text-white"
										// onClick={() =>

										// }
									>
										<Eye size={30} />
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>

					<div className="flex items-center justify-between px-2 py-4">
						<p className="text-sm text-muted-foreground">
							Showing {filteredData?.length ?? 0} of{' '}
							{filteredData?.length ?? 0} entries
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

export default HostelManagement;
