import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './AddTeacher';

type QualificationBackgroundProps = {
	form: UseFormReturn<z.infer<typeof formSchema>>;
};

export default function QualificationBackground({ form }: QualificationBackgroundProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-6">Qualification Background</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="degree"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Degree Program</FormLabel>
              <FormControl>
                <Input placeholder="Enter degree program" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience</FormLabel>
              <FormControl>
                <Input placeholder="Enter years of experience" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prev_employee_detail"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Previous Employment Details</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter previous employment details" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

