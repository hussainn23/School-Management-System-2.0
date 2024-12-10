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
import AcademicBackground from './academic-background';
import StudentPortal from './student-portal';
import OtherInfo from './other-info';
import { Stepper } from './Stepper';
import { PageHeader } from '../../../../components/PageHeader';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '../../../../components/ui/breadcrumb';
import EnrollmentInformation from './enrollment-information';

export const formSchema = z.object({
    first_name: z.string().min(2,'First name is required') ,
    last_name: z.string().min(2,'First name is required') ,
	dob: z.string(),
	gender: z.string(),
	bform: z.string().min(13, 'CNIC must be 13 characters'),
	address_line_1: z.string(),
	address_line_2: z.string(),
	city: z.string(),
	province: z.string(),
	postal_code: z.string(),
	country: z.string(),
	phone: z.string(),
	mobile: z.string(),
	email: z.string().email(),
	emergency_phone: z.string(),
    prev_school_name: z.string(),
    prev_school_address: z.string(),
    prev_school_gradelevel: z.string(),
    reason_for_leaving: z.string(),
	grade: z.string(),
    medium: z.string(),
    program: z.string(),
    guardian_name: z.string(),
    guardian_phone_no: z.string(),
    guardian_email: z.string(),
    enrollment_no: z.string(),
    username: z.string(),
    password: z.string(),
    admission_number: z.string(),
    nationality: z.string(),
    native_language: z.string(),
    siblings: z.boolean(),
    admission_status: z.string(),
    admission_date: z.string(),
    extracurricular_activity: z.string(),
    hostel_info: z.string(),
    warden_info: z.string(),
    accommodation_request: z.string(),
    check_dates: z.string(),
    learning_issues: z.string().optional(),
    support_password: z.string(),
    special_needs: z.string(),
    blood_group: z.string(),
    health_issues: z.string(),
    medical_history: z.string(),
    medical_condition: z.string(),
    image_section: z.string()
});

const steps = [
	{ title: 'Personal Information', component: PersonalInformation },
	{ title: 'Contact Details', component: ContactDetails },
	{ title: 'Academic Background', component: AcademicBackground },
	{ title: 'Enrollment Information', component: EnrollmentInformation },
	{ title: 'Student Portal', component: StudentPortal },
	{ title: 'Others', component: OtherInfo },
];

export default function AddPendingEnrollment() {
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
			first_name: '',
			last_name: '',
			dob: '',
			gender: '',
			bform: '',
			address_line_1: '',
			address_line_2: '',
			city: '',
			province: '',
			postal_code: '',
			country: '',
			phone: '',
			mobile: '',
			email: '',
			emergency_phone: '',
			prev_school_name: '',
			prev_school_address: '',
			prev_school_gradelevel: '',
			reason_for_leaving: '',
			grade: '',
			medium: '',
			program: '',
			guardian_name: '',
			guardian_phone_no: '',
			guardian_email: '',
			enrollment_no: '',
			username: '',
			password: '',
			admission_number: '',
			nationality: '',
			native_language: '',
			siblings: false,
			admission_status: '',
			admission_date: '',
			extracurricular_activity: '',
			hostel_info: '',
			warden_info: '',
			accommodation_request: '',
			check_dates: '',
			learning_issues: '',
			support_password: '',
			special_needs: '',
			blood_group: '',
			health_issues: '',
			medical_history: '',
			medical_condition: '',
			image_section: '',
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
				title="Registration Form 2"
				leftContent={
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>Admission</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>Pending Students</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>New</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				}
			/>

			<div className="p-4 bg-white rounded-sm shadow-sm flex flex-col gap-5 min-h-[60svh]">
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

				<div className="flex justify-end gap-2 mt-auto">
					{currentStep > 0 && (
						<Button
							variant="outline"
							onClick={() =>
								setCurrentStep((prev) => Math.max(0, prev - 1))
							}
						>
							Previous
						</Button>
					)}
					{currentStep < steps.length - 1 && (
						<Button
							onClick={() =>
								setCurrentStep((prev) =>
									Math.min(steps.length - 1, prev + 1)
								)
							}
						>
							Next
						</Button>
					)}
					{currentStep === steps.length - 1 && (
						<Button
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
