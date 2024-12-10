import { useState, useEffect } from 'react';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface RoomData {
	id?: string;
	roomNo: string;
	roomType: string;
	capacity: number;
	description: string;
}

interface RoomFormModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
	roomData?: RoomData | null;
}

const RoomFormModal = ({
	isModalOpen,
	closeModal,
	roomData,
}: RoomFormModalProps) => {
	const [formData, setFormData] = useState<RoomData>({
		roomNo: '',
		roomType: '',
		capacity: 0,
		description: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (roomData) {
			setFormData(roomData);
		} else {
			setFormData({
				roomNo: '',
				roomType: '',
				capacity: 0,
				description: '',
			});
		}
	}, [roomData]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		try {
			// Implement your room addition/update logic here
			console.log('Submitting room data:', formData);
			toast.success(
				`Room ${formData.roomNo} ${roomData ? 'updated' : 'added'} successfully!`
			);
			closeModal();
		} catch (error) {
			setError('An error occurred. Please try again.');
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSelectChange = (name: string) => (value: string) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Modal
			title={roomData ? 'Edit Room' : 'Add New Room'}
			isOpen={isModalOpen}
			closeModal={closeModal}
		>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-1">
					<label
						htmlFor="roomNo"
						className="text-sm text-muted-foreground"
					>
						Room No
					</label>
					<Input
						id="roomNo"
						name="roomNo"
						placeholder="Room Number"
						value={formData.roomNo}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label
						htmlFor="roomType"
						className="text-sm text-muted-foreground"
					>
						Room Type
					</label>
					<Select
						value={formData.roomType}
						onValueChange={handleSelectChange('roomType')}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select room type" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="Standard">
									Standard
								</SelectItem>
								<SelectItem value="Deluxe">Deluxe</SelectItem>
								<SelectItem value="Suite">Suite</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col gap-1">
					<label
						htmlFor="capacity"
						className="text-sm text-muted-foreground"
					>
						Room Capacity
					</label>
					<Input
						id="capacity"
						name="capacity"
						type="number"
						placeholder="Room Capacity"
						value={formData.capacity}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label
						htmlFor="description"
						className="text-sm text-muted-foreground"
					>
						Room Description
					</label>
					<Textarea
						id="description"
						name="description"
						placeholder="Room description..."
						value={formData.description}
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
							: roomData
								? 'Update'
								: 'Add'}
					</Button>
				</DialogFooter>

				{error && <div className="text-red-500 text-sm">{error}</div>}
			</form>
		</Modal>
	);
};

export default RoomFormModal;
