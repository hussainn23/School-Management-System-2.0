import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './AddTeacher';

type BankInformationProps = {
	form: UseFormReturn<z.infer<typeof formSchema>>;
};


export default function BankInformation({ form }: BankInformationProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-6">Bank Account Information</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <FormField
          control={form.control}
          name="bank_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bank Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter bank name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="account_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter account name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="account_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter account number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

