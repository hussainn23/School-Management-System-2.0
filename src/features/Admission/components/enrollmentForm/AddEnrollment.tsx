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
import GuardianInformation from './guardian-information';
import OtherInfo from './other-info';
import { Stepper } from './Stepper';
import { PageHeader } from '@/components/PageHeader';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
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
    nationality: z.string(),
    native_language: z.string(),
    admission_date: z.string(),
    siblings: z.boolean()
});

const steps = [
	{ title: 'Personal Information', component: PersonalInformation },
	{ title: 'Contact Details', component: ContactDetails },
	{ title: 'Academic Background', component: AcademicBackground },
	{ title: 'Enrollment Information', component: EnrollmentInformation },
	{ title: 'Guardian Details', component: GuardianInformation },
	{ title: 'Others', component: OtherInfo },
];

export default function AddEnrollment() {
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
			nationality: '',
			native_language: '',
			admission_date: '',
			siblings: false,
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
				title="Enrollment Form"
				leftContent={
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>Admission</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>Enrollment Form</BreadcrumbItem>
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
