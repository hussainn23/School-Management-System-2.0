import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form';
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
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './AddPendingEnrollment';

type QualificationBackgroundProps = {
	form: UseFormReturn<z.infer<typeof formSchema>>;
};

export default function EnrollmentInformation({
	form,
}: QualificationBackgroundProps) {
	return (
		<div className="space-y-6">
			<h3 className="text-lg font-semibold">Enrollment Information</h3>
			<div className="grid md:grid-cols-2 gap-6">
				<FormField
					control={form.control}
					name="grade"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Grade </FormLabel>
							<FormControl>
								<Input placeholder="" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="medium"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Medium</FormLabel>
							<FormControl>
								<Input placeholder="" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="program"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Program</FormLabel>
							<FormControl>
								<Select {...field}>
									<SelectTrigger className="w-[480px]">
										<SelectValue placeholder="Select a fruit" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Fruits</SelectLabel>
											<SelectItem value="apple">
												Apple
											</SelectItem>
											<SelectItem value="banana">
												Banana
											</SelectItem>
											<SelectItem value="blueberry">
												Blueberry
											</SelectItem>
											<SelectItem value="grapes">
												Grapes
											</SelectItem>
											<SelectItem value="pineapple">
												Pineapple
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
			<h3 className="text-lg font-semibold">Guardian Information</h3>
			<div className="grid md:grid-cols-2 gap-6">
				<FormField
					control={form.control}
					name="guardian_name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Guardian Name</FormLabel>
							<FormControl>
								<Input placeholder="" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="guardian_phone_no"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Guardian Phone no.</FormLabel>
							<FormControl>
								<Input placeholder="" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="guardian_email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Guardian Email</FormLabel>
							<FormControl>
								<Input placeholder="" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
}
