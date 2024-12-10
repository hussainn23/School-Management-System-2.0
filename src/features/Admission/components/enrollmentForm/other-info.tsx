import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';

import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './AddEnrollment';
import { Input } from '@/components/ui/input';

type OtherRolesProps = {
	form: UseFormReturn<z.infer<typeof formSchema>>;
};

export default function OtherInfo({ form }: OtherRolesProps) {
	return (
		<div className="space-y-6">
			<div className="grid md:grid-cols-2 gap-6">
				<FormField
					control={form.control}
					name="enrollment_no"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Enrollment No</FormLabel>
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
				<FormField
					control={form.control}
					name="siblings"
					render={({ field }) => (
						<FormItem className="flex items-center gap-3">
							<FormControl>
								<Input
									type="checkbox"
									checked={field.value}
									className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-2"
								/>
							</FormControl>
							<FormLabel>Siblings in School</FormLabel>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
}
