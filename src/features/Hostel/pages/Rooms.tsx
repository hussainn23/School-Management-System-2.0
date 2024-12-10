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
import RoomFormModal from '@/features/Hostel/components/RoomFormModal';
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

const Rooms = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleteModal, setIsDeleteModal] = useState(false);
	const [roomToDelete, setRoomToDelete] = useState<string | null>(null);
	const [roomToEdit, setRoomToEdit] = useState(null);
	// const [searchQuery, setSearchQuery] = useState('');

	const openModal = (roomData?: any) => {
		setRoomToEdit(roomData || null);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setRoomToEdit(null);
	};

	const openDeleteModal = (id: string) => {
		setRoomToDelete(id);
		setIsDeleteModal(true);
	};

	const closeDeleteModal = () => {
		setIsDeleteModal(false);
		setRoomToDelete(null);
	};

	// const handleSearch = (query: string) => {
	// 	setSearchQuery(query);
	// };

	const handleDelete = async (id: string) => {
		openDeleteModal(id);
	};

	const confirmDelete = async () => {
		if (roomToDelete) {
			// Implement delete functionality here
			closeDeleteModal();
		}
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
							Add Room
						</Button>
					</div>
				}
				leftContent={
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>Hostel Management</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>Rooms</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				}
			/>

			<RoomFormModal
				closeModal={closeModal}
				isModalOpen={isModalOpen}
				roomData={roomToEdit}
			/>

			<DeleteConfirmation
				isModalOpen={isDeleteModal}
				closeModal={closeDeleteModal}
				doSomething={confirmDelete}
			/>

			<div className="w-full bg-white dark:bg-gray-800 shadow-sm p-3 rounded-md max-h-svh">
				<div className="flex items-center mb-8 gap-20">
					<h2 className="text-2xl font-bold">Rooms List</h2>
					<div className="flex items-center space-x-2">
						<Input
							size={8}
							placeholder="Search rooms..."
							className="dark:bg-gray-700 w-[350px]"
							onChange={() => {}}
						/>
					</div>
				</div>
				<div className="w-full">
					<Table>
						<TableRow>
							<TableHead>Sr</TableHead>
							<TableHead>Room</TableHead>
							<TableHead>Capacity</TableHead>
							<TableHead>Room Type</TableHead>
							<TableHead>Student List</TableHead>
							<TableHead>Room Fee</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
						<TableBody>
							<TableRow key={1}>
								<TableCell>1</TableCell>
								<TableCell>101</TableCell>
								<TableCell>4</TableCell>
								<TableCell>Standard</TableCell>
								<TableCell>3 students</TableCell>
								<TableCell>$500</TableCell>
								<TableCell className="flex justify-start items-center gap-2">
									<Button
										size={'sm'}
										className="bg-theme/10 text-theme hover:bg-theme/30 dark:bg-theme/30 dark:text-white"
										onClick={() =>
											openModal({
												id: '1',
												roomNo: '101',
												roomType: 'Standard',
												capacity: 4,
												description:
													'Standard room with 4 beds',
											})
										}
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

export default Rooms;
