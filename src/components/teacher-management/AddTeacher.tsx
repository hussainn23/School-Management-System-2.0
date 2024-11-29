import { ArrowLeft, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addTeacher } from '@/services/teacherService';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  username: z.string().min(2, 'Username must be at least 2 characters'),
  cnic: z.string().min(13, 'CNIC must be 13 characters'),
  dob: z.string(),
  gender: z.string(),
  teacher_reg_id: z.string(),
  maritial_status: z.string(),
  address: z.string(),
  city: z.string(),
  province: z.string(),
  postal_code: z.string(),
  country: z.string(),
  home_phone: z.string(),
  phone: z.string(),
  email: z.string().email(),
  password: z.string().min(8,'Minimum password length is 8 characters'),
  password_confirmation: z.string(),
  emergency_phone: z.string(),
  degree: z.string(),
  experience: z.string(),
  prev_employee_detail: z.string(),
  bank_name: z.string(),
  account_name: z.string(),
  account_number: z.string(),
  role: z.string(),
  picture: z.any().optional(),
});


const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export default function AddTeacher() {

  const queryClient = useQueryClient()
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSubmitting,setIsSubmitting] = useState(false)


  const addTeacherMutation = useMutation(addTeacher, {
    onSuccess: () => {
      queryClient.invalidateQueries(['teachers']);
      toast.success('Teacher created successfully!');
      form.reset();
    },
    onError: () => {
      toast.error('Error creating teacher');
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });



  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      username: '',
      cnic: '',
      dob: '',
      gender: '',
      teacher_reg_id: '',
      maritial_status: '',
      address: '',
      city: '',
      province: '',
      postal_code: '',
      country: '',
      home_phone: '',
      phone: '',
      email: '',
      password: '',
      password_confirmation: '',
      emergency_phone: '',
      degree: '',
      experience: '',
      prev_employee_detail: '',
      bank_name: '',
      account_name: '',
      account_number: '',
      role: '',
      picture: undefined
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    addTeacherMutation.mutate(values);
  }

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
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            to="/admin/teacher-management"
            className="bg-white shadow-md rounded-md"
          >
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">Add Teacher</h1>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="text-destructive hover:text-destructive"
          >
            Discard
          </Button>
          <Button onClick={form.handleSubmit(onSubmit)} disabled={isSubmitting}>{ isSubmitting ? 'Saving ...'  : 'Save'}</Button>
        </div>
      </div>

      <Form {...form}>
        <form className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-6">
                Personal Information
              </h2>
              <div className="grid md:grid-cols-[2fr_1fr] gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
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
                  </div>
                  <div className="space-y-6">
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
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
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
                      name="maritial_status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Marital Status</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
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
                </div>

                {/* Teacher Picture Upload */}
                <div className="flex flex-col ">
                  <FormLabel className="mb-2">Teacher Picture</FormLabel>
                  <div className="w-full aspect-[2/1.5] relative">
                    <input
                      type="file"
                      id="picture"
                      className="hidden"
                      accept="image/png,image/jpeg,image/jpg"
                      onChange={handleImageUpload}
                    />
                    <label
                      htmlFor="picture"
                      className={` p-5 flex flex-col items-center justify-center rounded-lg border border-slate-200 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors ${
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
                            <span className="text-xs">
                              PNG or JPG (MAX. 800x400px)
                            </span>
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-6">Contact Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Home Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter home address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="province"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State/Province</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter state/province" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="postal_code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Postal Code</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter postal code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="home_phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Home Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter home phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter mobile phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="emergency_phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter emergency contact"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                        type='password'
                          placeholder="Enter teacher account password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password_confirmation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password Confirmation</FormLabel>
                      <FormControl>
                        <Input
                        type='password'
                          placeholder="Confirm Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Qualification Background */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-6">
                Qualification Background
              </h2>
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
                        <Input
                          placeholder="Enter years of experience"
                          {...field}
                        />
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
                        <Textarea
                          placeholder="Enter previous employment details"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Bank Account Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-6">
                Bank Account Information
              </h2>
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
            </CardContent>
          </Card>

          {/* Role in System */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-6">Role in System</h2>
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="seniorTeacher">
                          Senior Teacher
                        </SelectItem>
                        <SelectItem value="headTeacher">
                          Head Teacher
                        </SelectItem>
                        <SelectItem value="administrator">
                          Administrator
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}
