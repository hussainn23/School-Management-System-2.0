import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './AddEnrollment';

type QualificationBackgroundProps = {
	form: UseFormReturn<z.infer<typeof formSchema>>;
};

export default function AcademicBackground({ form }: QualificationBackgroundProps) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="prev_school_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous School Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prev_school_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous School Address</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prev_school_gradelevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous Grade Level</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reason_for_leaving"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason for Leaving Previous School</FormLabel>
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

