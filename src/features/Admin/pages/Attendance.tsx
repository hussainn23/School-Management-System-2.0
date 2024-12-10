import { Button } from '@/components/ui/button';
import {
  Download,
  PlusCircle,
  Trash2,
  ChevronLeft,
  ChevronRight,
  PencilLine,
  User2,
  CircleGauge,
  CircleCheckBig,
  SquareX,
} from 'lucide-react';
import { useState } from 'react';
import ClassFormModal from '@/features/Admin/components/class-management/ClassFormModal';
import DeleteConfirmation from '@/components/DeleteConfirmation';
import { PageHeader } from '@/components/PageHeader';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { TableHeader as TableTopHeader } from '@/components/TableHeader';
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

const Attendance = () => {
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

//   const [searchQuery, setSearchQuery] = useState('');

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

//   const openDeleteModal = (id: string) => {
//     setClassToDelete(id);
//     setIsDeleteModal(true);
//   };

  const closeDeleteModal = () => {
    setIsDeleteModal(false);
    setClassToDelete(null);
  };

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//   };

//   const handleDelete = async (id: string) => {
//     openDeleteModal(id);
//   };

  const confirmDelete = async () => {
    if (classToDelete) {
      deleteMutation.mutate(classToDelete);
      closeDeleteModal();
    }
  };

//   const filteredData = data?.filter((row) =>
//     row.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

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
          title="Attendance"
          rightButtons={
            <div className="flex justify-center items-center gap-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export & Print
              </Button>
              <Button onClick={() => openModal()}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          }
          leftContent={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>Attendance</BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
        />

        <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-5">
          <Skeleton className="h-10 mb-2" />
          <Skeleton className="h-10 mb-2" />
          <Skeleton className="h-10 mb-2" />
          <Skeleton className="h-10 mb-2" />
        </div>

        <div className="w-full bg-white dark:bg-gray-800 shadow-sm p-3 rounded-md max-h-svh">
          <TableTopHeader title="" onSearch={() => {}} onSort={() => {}} />
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
				title="Attendance"
				rightButtons={
					<div className="flex justify-center items-center gap-2">
						<Button variant="outline">
							<Download className="mr-2 h-4 w-4" />
							Export & Print
						</Button>
						<Button onClick={() => openModal()} variant={'theme'}>
							<PlusCircle className="mr-2 h-4 w-4" />
							Download
						</Button>
					</div>
				}
				leftContent={
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>Admin</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>Attendance</BreadcrumbItem>
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

			{/* // TOP CARDS  */}
			<div className="w-full grid md:grid-cols-4 grid-cols-2 gap-10 mb-4">
				<div className="bg-white px-5 py-3 dark:bg-gray-700 flex items-center gap-6 shadow-sm rounded-sm">
					<span className="bg-indigo-600 p-3 rounded-sm text-white">
						<User2 />
					</span>
					<div className="flex flex-col gap-1">
						<span className="text-sm font-medium">
							Total Students
						</span>
						<h5 className="font-medium text-2xl">1291</h5>
					</div>
				</div>
				<div className="bg-white px-5 py-3 dark:bg-gray-700 flex items-center gap-6 shadow-sm rounded-sm">
					<span className="bg-orange-600 p-3 rounded-sm text-white">
						<CircleGauge />
					</span>
					<div className="flex flex-col gap-1">
						<span className="text-sm font-medium">Leave</span>
						<h5 className="font-medium text-2xl">1291</h5>
					</div>
				</div>
				<div className="bg-white px-5 py-3 dark:bg-gray-700 flex items-center gap-6 shadow-sm rounded-sm">
					<span className="bg-green-600 p-3 rounded-sm text-white">
						<CircleCheckBig />
					</span>
					<div className="flex flex-col gap-1">
						<span className="text-sm font-medium">Present</span>
						<h5 className="font-medium text-2xl">1291</h5>
					</div>
				</div>
				<div className="bg-white px-5 py-3 dark:bg-gray-700 flex items-center gap-6 shadow-sm rounded-sm">
					<span className="bg-red-600 p-3 rounded-sm text-white">
						<SquareX />
					</span>
					<div className="flex flex-col gap-1">
						<span className="text-sm font-medium">Absent</span>
						<h5 className="font-medium text-2xl">1291</h5>
					</div>
				</div>
			</div>

			<div className="w-full bg-white dark:bg-gray-800 shadow-sm p-3 rounded-md max-h-svh">
				<TableTopHeader
					title=""
					onSearch={() => {}}
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
							<TableHead>Sr</TableHead>
							<TableHead>Class</TableHead>
							<TableHead>Section</TableHead>
							<TableHead className="text-theme">
								Total Students
							</TableHead>
							<TableHead className="text-orange-600">
								Leave{' '}
							</TableHead>
							<TableHead className="text-green-600">
								Present
							</TableHead>
							<TableHead className="text-red-600">
								Absent
							</TableHead>
							<TableHead>Class Teacher</TableHead>
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
                  <TableCell>{row?.id}</TableCell>
                  <TableCell>{row?.name}</TableCell>
                  <TableCell>{row?.description}</TableCell>
                  <TableCell>{row?.status}</TableCell>
                  <TableCell>
                    {new Date(row?.created_at).toISOString().split('T')[0]}
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
										checked={selectedClasses.includes(
											"1"
										)}
										onChange={() =>
											handleSelectSingle("1")
										}
									/>
								</TableCell>
								<TableCell>1</TableCell>
								<TableCell>Class 1</TableCell>
								<TableCell>Section 1</TableCell>
								<TableCell>200</TableCell>
								<TableCell>
									10
								</TableCell>
								<TableCell>
									20
								</TableCell>
								<TableCell>
									30
								</TableCell>
								<TableCell>
									Teacher 1
								</TableCell>
								<TableCell className="flex justify-start items-center gap-2">
									<Button
										size={'sm'}
										className="bg-theme/10 text-theme hover:bg-theme/30 dark:bg-theme/30 dark:text-white"
										// onClick={() => openModal(row)}
									>
										<PencilLine size={30} />
									</Button>
									<Button
										size={'sm'}
										className="bg-red-200 text-red-600 hover:bg-red-300 dark:bg-red-400 dark:text-red-700"
										// onClick={() => handleDelete(row.id)}
									>
										<Trash2 />
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>

					<div className="flex items-center justify-between px-2 py-4">
						<p className="text-sm text-muted-foreground">
							{/* Showing {filteredData?.length ?? 0} of{' '}
							{filteredData?.length ?? 0} entries */}
                            Showing 1 of 1 entries 
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

export default Attendance;
