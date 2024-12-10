import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addTeacher } from '@/services/teacherService';
import { toast } from 'sonner';
import PersonalInformation from './personal-information';
import ContactDetails from './contact-details';
import QualificationBackground from './qualification-background';
import BankInformation from './bank-information';
import OtherRoles from './other-roles';
import { Stepper } from './Stepper';
import { PageHeader } from '../../../../components/PageHeader';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '../../../../components/ui/breadcrumb';

export const formSchema = z.object({
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
  password: z.string().min(8, 'Minimum password length is 8 characters'),
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

const steps = [
  { title: 'Personal Information', component: PersonalInformation },
  { title: 'Contact Details', component: ContactDetails },
  { title: 'Qualification Background', component: QualificationBackground },
  { title: 'Bank Information', component: BankInformation },
  { title: 'Other Roles', component: OtherRoles },
];

export default function AddTeacher() {
  const queryClient = useQueryClient();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addTeacherMutation = useMutation(addTeacher, {
    onSuccess: () => {
      queryClient.invalidateQueries(['teachers']);
      toast.success('Teacher created successfully!');
      form.reset();
      setCurrentStep(0);
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
      picture: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    addTeacherMutation.mutate(values);
  }

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="container mx-auto pt-4 flex flex-col gap-5">
      <PageHeader
        title="Teacher Management"
        leftContent={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>Admin</BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Teacher Management</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <div className="p-4 bg-white rounded-sm shadow-sm flex flex-col gap-5">
        <Stepper
          steps={steps.map((step) => step.title)}
          currentStep={currentStep}
          onStepClick={handleStepClick}
        />
        <Form {...form}>
          <form>
            <CurrentStepComponent form={form} />
          </form>
        </Form>

        <div className="flex justify-end gap-2">
          {currentStep > 0 && (
            <Button
              variant="outline"
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            >
              Previous
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button
              onClick={() =>
                setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
              }
              variant={'theme'}
            >
              Next
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button
            variant={'theme'}
              onClick={form.handleSubmit(onSubmit)}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving ...' : 'Complete'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
