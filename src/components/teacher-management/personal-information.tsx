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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './AddTeacher';

type PersonalInformationProps = {
	form: UseFormReturn<z.infer<typeof formSchema>>;
};


const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export default function PersonalInformation({ form }: PersonalInformationProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert('File size should be less than 5MB');
        return;
      }
      if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
        alert('File type should be JPEG/JPG or PNG');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        form.setValue('picture', file);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setPreviewImage(null);
    form.setValue('picture', undefined);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter teacher name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username for teacher" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cnic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CNIC Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter CNIC number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="teacher_reg_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teacher ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter teacher ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maritial_status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marital Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="married">Married</SelectItem>
                  <SelectItem value="divorced">Divorced</SelectItem>
                  <SelectItem value="widowed">Widowed</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-col mt-6">
        <FormLabel className="mb-2">Teacher Picture</FormLabel>
        <div className="max-w-sm  relative">
          <input
            type="file"
            id="picture"
            className="hidden"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="picture"
            className={`p-5 flex flex-col items-center justify-center rounded-lg border border-slate-200 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors ${
              previewImage ? 'border-0' : 'border-muted-foreground/25'
            }`}
          >
            {previewImage ? (
              <div className="relative w-full h-full">
                <img
                  src={previewImage}
                  alt="Teacher"
                  className="w-40 h-40 object-cover rounded-lg"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={(e) => {
                    e.preventDefault();
                    removeImage();
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <>
                <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground text-center">
                  Click to Upload or drag and drop
                  <br />
                  <span className="text-xs">PNG or JPG (MAX. 800x400px)</span>
                </p>
              </>
            )}
          </label>
        </div>
      </div>
    </div>
  );
}
