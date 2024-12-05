import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './AddTeacher';

type OtherRolesProps = {
	form: UseFormReturn<z.infer<typeof formSchema>>;
};

export default function OtherRoles({ form }: OtherRolesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-6">Role in System</h2>
      <FormField
        control={form.control}
        name="role"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select Role</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="seniorTeacher">Senior Teacher</SelectItem>
                <SelectItem value="headTeacher">Head Teacher</SelectItem>
                <SelectItem value="administrator">Administrator</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

