import { Button } from '@/components/ui/button';
import {
	Download,
	PlusCircle,
	Trash2,
	ChevronLeft,
	ChevronRight,
	PencilLine,
} from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { TableHeader as TableTopHeader } from '@/components/TableHeader';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@/components/ui/table';

const dummyData = [
	{
		id: '1',
		regNo: 'T001',
		name: 'John Doe',
		fatherName: 'Michael Doe',
		class: '10',
		section: 'A',
		transportStatus: 'Active',
		dateAdded: '2023-01-15',
	},
	{
		id: '2',
		regNo: 'T002',
		name: 'Jane Smith',
		fatherName: 'Robert Smith',
		class: '9',
		section: 'B',
		transportStatus: 'Inactive',
		dateAdded: '2023-02-20',
	},
	{
		id: '3',
		regNo: 'T003',
		name: 'Alice Johnson',
		fatherName: 'David Johnson',
		class: '11',
		section: 'C',
		transportStatus: 'Active',
		dateAdded: '2023-03-10',
	},
];

const TransportManagement = () => {
	return (
		<div className="p-4 sm:p-6">
			<PageHeader
				title="Transport Management"
				rightButtons={
					<div className="flex justify-center items-center gap-2">
						<Button variant="outline">
							<Download className="mr-2 h-4 w-4" />
							Export & Print
						</Button>
						<Button variant={'theme'}>
							<PlusCircle className="mr-2 h-4 w-4" />
							Add Transport
						</Button>
					</div>
				}
				leftContent={
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>Admin</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								Transport Management
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				}
			/>

			<div className="w-full bg-white dark:bg-gray-800 shadow-sm p-3 rounded-md max-h-svh">
				<TableTopHeader
					title="All Transports"
					onSearch={() => {}}
					onSort={() => {}}
				/>
				<div className="w-full">
					<Table>
						<TableRow>
							<TableHead className="w-12">
								<input type="checkbox" />
							</TableHead>
							<TableHead>Sr</TableHead>
							<TableHead>Reg No</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Father Name</TableHead>
							<TableHead>Class</TableHead>
							<TableHead>Section</TableHead>
							<TableHead>Transport Status</TableHead>
							<TableHead>Date Added</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
						<TableBody>
							{dummyData.map((row, index) => (
								<TableRow key={row.id}>
									<TableCell>
										<input type="checkbox" />
									</TableCell>
									<TableCell>{index + 1}</TableCell>
									<TableCell>{row.regNo}</TableCell>
									<TableCell>{row.name}</TableCell>
									<TableCell>{row.fatherName}</TableCell>
									<TableCell>{row.class}</TableCell>
									<TableCell>{row.section}</TableCell>
									<TableCell>{row.transportStatus}</TableCell>
									<TableCell>{row.dateAdded}</TableCell>
									<TableCell className="flex justify-start items-center gap-2">
										<Button
											size={'sm'}
											className="bg-theme/10 text-theme hover:bg-theme/30 dark:bg-theme/30 dark:text-white"
										>
											<PencilLine size={30} />
										</Button>
										<Button
											size={'sm'}
											className="bg-red-200 text-red-600 hover:bg-red-300 dark:bg-red-400 dark:text-red-700"
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
							Showing {dummyData.length} of {dummyData.length}{' '}
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

export default TransportManagement;
