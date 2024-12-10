import { useState, useEffect } from 'react';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/ui/input';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useQueryClient, useMutation } from 'react-query';

interface AddStudentToHostelProps {
	isModalOpen: boolean;
	closeModal: () => void;
	studentData?: StudentData | null;
	classes: { id: string; name: string }[];
	sections: { id: string; section_name: string }[];
}

interface StudentData {
	id?: string;
	registrationNumber: string;
	studentName: string;
	fatherName: string;
	classId: string;
	sectionId: string;
	roomNumber: string;
}

const AddStudentToHostelModal = ({
	isModalOpen,
	closeModal,
	studentData,
	classes,
	sections,
}: AddStudentToHostelProps) => {
	const [formData, setFormData] = useState<StudentData>({
		registrationNumber: '',
		studentName: '',
		fatherName: '',
		classId: '',
		sectionId: '',
		roomNumber: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const queryClient = useQueryClient();

	useEffect(() => {
		if (studentData) {
			setFormData(studentData);
		} else {
			setFormData({
				registrationNumber: '',
				studentName: '',
				fatherName: '',
				classId: '',
				sectionId: '',
				roomNumber: '',
			});
		}
	}, [studentData]);

	const addMutation = useMutation(addStudent, {
		onSuccess: () => {
			queryClient.invalidateQueries(['students']);
			toast.success('Student added successfully!');
			closeModal();
		},
		onError: (error) => {
			setError('Error adding student. Please try again later.');
			console.error(error);
			toast.error('Error adding student');
		},
		onSettled: () => {
			setIsSubmitting(false);
		},
	});

	const updateMutation = useMutation(
		(data: StudentData) => updateStudent(data.id!, data),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['students']);
				toast.success('Student updated successfully!');
				closeModal();
			},
			onError: (error) => {
				setError('Error updating student. Please try again later.');
				console.error(error);
				toast.error('Error updating student');
			},
			onSettled: () => {
				setIsSubmitting(false);
			},
		}
	);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		if (studentData) {
			updateMutation.mutate(formData);
		} else {
			addMutation.mutate(formData);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSelectChange = (name: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData((prev) => ({ ...prev, [name]: event.target.value }));
	};

	return (
		<Modal
			title={studentData ? 'Edit Student' : 'Add New Student'}
			isOpen={isModalOpen}
			closeModal={closeModal}
		>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-1">
					<label
						htmlFor="registrationNumber"
						className="text-sm text-muted-foreground"
					>
						Registration Number
					</label>
					<Input
						id="registrationNumber"
						name="registrationNumber"
						placeholder=""
						value={formData.registrationNumber}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label
						htmlFor="classId"
						className="text-sm text-muted-foreground"
					>
						Class
					</label>
					<select
						value={formData.classId}
						onChange={handleSelectChange('classId')}
						className="w-full px-3 py-2 bg-background rounded-md border text-sm"
					>
						{classes.map((cls) => (
							<option key={cls.id} value={cls.id}>
								{cls.name}
							</option>
						))}
					</select>
				</div>

				<div className="flex flex-col gap-1">
					<label
						htmlFor="sectionId"
						className="text-sm text-muted-foreground"
					>
						Section
					</label>
					<select
						value={formData.sectionId}
						onChange={handleSelectChange('sectionId')}
						className="w-full px-3 py-2 bg-background rounded-md border text-sm"
					>
						{sections.map((section) => (
							<option key={section.id} value={section.id}>
								{section.section_name}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-col gap-1">
					<label
						htmlFor="studentName"
						className="text-sm text-muted-foreground"
					>
						Student Name
					</label>
					<Input
						id="studentName"
						name="studentName"
						placeholder=""
						value={formData.studentName}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label
						htmlFor="fatherName"
						className="text-sm text-muted-foreground"
					>
						Father's Name
					</label>
					<Input
						id="fatherName"
						name="fatherName"
						placeholder=""
						value={formData.fatherName}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label
						htmlFor="roomNumber"
						className="text-sm text-muted-foreground"
					>
						Room Number
					</label>
					<Input
						id="roomNumber"
						name="roomNumber"
						placeholder=""
						value={formData.roomNumber}
						onChange={handleInputChange}
						required
					/>
				</div>

				<DialogFooter className="flex justify-between w-full mt-5">
					<Button
						type="button"
						variant="outline"
						onClick={closeModal}
						className="w-full"
						disabled={isSubmitting}
					>
						Cancel
					</Button>
					<Button
						type="submit"
						variant="default"
						className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
						disabled={isSubmitting}
					>
						{isSubmitting
							? 'Processing...'
							: studentData
								? 'Update'
								: 'Add'}
					</Button>
				</DialogFooter>

				{error && <div className="text-red-500 text-sm">{error}</div>}
			</form>
		</Modal>
	);
};

export default AddStudentToHostelModal;

// Placeholder for addStudent and updateStudent functions.  These need to be implemented separately.
const addStudent = async (data: StudentData) => {
	// Implement your addStudent logic here.  This will likely involve a fetch call to your backend API.
	console.log('Adding student:', data);
	//Example using fetch:
	// const response = await fetch('/api/students', {
	//   method: 'POST',
	//   headers: { 'Content-Type': 'application/json' },
	//   body: JSON.stringify(data),
	// });
	// if (!response.ok) {
	//   throw new Error(`HTTP error! status: ${response.status}`);
	// }
	// return response.json();
};

const updateStudent = async (id: string, data: StudentData) => {
	// Implement your updateStudent logic here. This will likely involve a fetch call to your backend API.
	console.log('Updating student:', id, data);
	//Example using fetch:
	// const response = await fetch(`/api/students/${id}`, {
	//   method: 'PUT',
	//   headers: { 'Content-Type': 'application/json' },
	//   body: JSON.stringify(data),
	// });
	// if (!response.ok) {
	//   throw new Error(`HTTP error! status: ${response.status}`);
	// }
	// return response.json();
};
