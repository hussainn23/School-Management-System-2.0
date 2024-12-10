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
import AddStudentToHostelModal from '@/features/Hostel/components/AddStudent';
import DeleteConfirmation from '@/components/DeleteConfirmation';
import { PageHeader } from '@/components/PageHeader';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

const HostelStudents = () => {
	const [allSelected, setAllSelected] = useState(false);
	const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleteModal, setIsDeleteModal] = useState(false);
	const [studentToDelete, setStudentToDelete] = useState<string | null>(null);
	const [studentToEdit, setStudentToEdit] = useState(null);
	// const [searchQuery, setSearchQuery] = useState('');

	const openModal = (studentData?: any) => {
		setStudentToEdit(studentData || null);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setStudentToEdit(null);
	};

	const openDeleteModal = (id: string) => {
		setStudentToDelete(id);
		setIsDeleteModal(true);
	};

	const closeDeleteModal = () => {
		setIsDeleteModal(false);
		setStudentToDelete(null);
	};

	// const handleSearch = (query: string) => {
	// 	setSearchQuery(query);
	// };

	const handleDelete = async (id: string) => {
		openDeleteModal(id);
	};

	const confirmDelete = async () => {
		if (studentToDelete) {
			// Implement delete functionality here
			closeDeleteModal();
		}
	};

	const handleSelectAll = () => {
		setAllSelected(!allSelected);
		setSelectedStudents(allSelected ? [] : ['1', '2']); // Replace with actual student IDs
	};

	const handleSelectSingle = (id: string) => {
		setSelectedStudents((prev) =>
			prev.includes(id)
				? prev.filter((item) => item !== id)
				: [...prev, id]
		);
	};

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
							<BreadcrumbItem>Students</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				}
			/>

			<AddStudentToHostelModal
				closeModal={closeModal}
				isModalOpen={isModalOpen}
				studentData={studentToEdit}
				classes={[]}
				sections={[]}
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
									<SelectItem value="class1">
										Class 1
									</SelectItem>
									<SelectItem value="class2">
										Class 2
									</SelectItem>
									<SelectItem value="class3">
										Class 3
									</SelectItem>
									<SelectItem value="class4">
										Class 4
									</SelectItem>
									<SelectItem value="class5">
										Class 5
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
									<SelectItem value="section1">
										Section 1
									</SelectItem>
									<SelectItem value="section2">
										Section 2
									</SelectItem>
									<SelectItem value="section3">
										Section 3
									</SelectItem>
									<SelectItem value="section4">
										Section 4
									</SelectItem>
									<SelectItem value="section5">
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
							<TableHead>Class</TableHead>
							<TableHead>Section</TableHead>
							<TableHead>Room</TableHead>
							<TableHead>Hostel Fee</TableHead>
							<TableHead>Date Added</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
						<TableBody>
							<TableRow key={1}>
								<TableCell>
									<input
										type="checkbox"
										checked={selectedStudents.includes('1')}
										onChange={() => handleSelectSingle('1')}
									/>
								</TableCell>
								<TableCell>1</TableCell>
								<TableCell>REG-1</TableCell>
								<TableCell>John Doe</TableCell>
								<TableCell>David Doe</TableCell>
								<TableCell>9th</TableCell>
								<TableCell>A</TableCell>
								<TableCell>101</TableCell>
								<TableCell>$500</TableCell>
								<TableCell>Dec 23, 2023</TableCell>
								<TableCell className="flex justify-start items-center gap-2">
									<Button
										size={'sm'}
										className="bg-theme/10 text-theme hover:bg-theme/30 dark:bg-theme/30 dark:text-white"
										onClick={() => openModal({ id: '1' })}
									>
										<PencilLine size={16} />
									</Button>
									<Button
										size={'sm'}
										className="bg-red-200 text-red-600 hover:bg-red-300 dark:bg-red-400 dark:text-red-700"
										onClick={() => handleDelete('1')}
									>
										<Trash2 size={16} />
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>

					<div className="flex items-center justify-between px-2 py-4">
						<p className="text-sm text-muted-foreground">
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

export default HostelStudents;
