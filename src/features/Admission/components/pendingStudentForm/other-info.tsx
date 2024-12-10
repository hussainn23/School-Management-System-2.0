import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './AddPendingEnrollment';
import { Input } from '../../../../components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

type OtherRolesProps = {
	form: UseFormReturn<z.infer<typeof formSchema>>;
};

export default function OtherInfo({ form }: OtherRolesProps) {
	return (
		<div className="space-y-8">
			<h3 className="text-lg font-semibold">
				Additional attributes for admission
			</h3>
			<div className="grid md:grid-cols-2 gap-6">
				<FormField
					control={form.control}
					name="admission_number"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Admission Number</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="nationality"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nationality</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="native_language"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Native Language</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
			<div>
				<FormField
					control={form.control}
					name="siblings"
					render={({ field }) => (
						<FormItem className="flex items-center gap-3">
							<FormControl>
								<Input
									type="checkbox"
									checked={field.value}
									className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-2"
								/>
							</FormControl>
							<FormLabel>Siblings in School?</FormLabel>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
			<div className="grid md:grid-cols-2 gap-6">
				<FormField
					control={form.control}
					name="admission_status"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Admission Status</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select status" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="pending">
										Pending
									</SelectItem>
									<SelectItem value="approved">
										Approved
									</SelectItem>
									<SelectItem value="rejected">
										Rejected
									</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="admission_date"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Admission Date</FormLabel>
							<FormControl>
								<Input type="date" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
			<h3 className="text-lg font-semibold">
				Extracurricular Activities
			</h3>
			<div className="grid md:grid-cols-2 gap-6">
				<FormField
					control={form.control}
					name="extracurricular_activity"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Extracurricular Activities</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="hostel_info"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Hostel Room Name/Number</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="warden_info"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Warden's Name/Contact</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="accommodation_request"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Special Accommodation Requests
							</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="check_dates"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Check-in/Check-out Dates</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>

			<div className="space-y-4">
				<h3 className="text-lg font-semibold">
					Special Education Needs (optional)
				</h3>
				<div className="grid md:grid-cols-2 gap-6">
					<FormField
						control={form.control}
						name="learning_issues"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Learning Issues</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="support_password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Support Password</FormLabel>
								<FormControl>
									<Input type="password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="special_needs"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Special Needs</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
			</div>

			<div className="space-y-4">
				<h3 className="text-lg font-semibold">
					Health and Medical Information
				</h3>
				<div className="grid md:grid-cols-2 gap-6">
					<FormField
						control={form.control}
						name="blood_group"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Blood Group</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select blood group" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="A+">A+</SelectItem>
										<SelectItem value="A-">A-</SelectItem>
										<SelectItem value="B+">B+</SelectItem>
										<SelectItem value="B-">B-</SelectItem>
										<SelectItem value="AB+">AB+</SelectItem>
										<SelectItem value="AB-">AB-</SelectItem>
										<SelectItem value="O+">O+</SelectItem>
										<SelectItem value="O-">O-</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="health_issues"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Health Issues</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="medical_history"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Medical History</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="medical_condition"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Medical Conditions</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
			</div>

			<div className="space-y-4">
				<h3 className="text-lg font-semibold">Image Section</h3>
				<FormField
					control={form.control}
					name="image_section"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Upload Image</FormLabel>
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
}
