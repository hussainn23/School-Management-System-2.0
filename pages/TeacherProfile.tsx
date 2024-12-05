import { PageHeader } from '@/components/common/PageHeader';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

export default function TeacherProfile() {
	return (
		<div className="p-4 sm:p-6">
			<PageHeader
				title="Teacher Management"
				leftContent={
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>Admin</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>Teacher Management</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>Add Teacher</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				}
			/>
			<div className="grid grid-cols-2 gap-7 bg-white dark:bg-gray-800 p-6 rounded-sm shadow-sm">
				{/* Header Section */}
				<div className=" flex flex-col">
					<div className="relative mb-8">
						<div className="h-48 w-full rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 bg-cover bg-center bg-no-repeat" />
						<div className="absolute -bottom-8 left-8 rounded-full bg-white p-5 text-4xl font-semibold text-violet-600 h-16 w-16 flex justify-center items-center shadow-sm">
							J
						</div>
					</div>
					<div className="flex flex-col border-b py-2">
						<h1 className="text-2xl font-bold">John</h1>
						<p className="mt-2 text-gray-500 dark:text-white">
							Status will be shown here
						</p>
						<div className="mt-1 flex items-center gap-2 text-sm text-gray-500 dark:text-white">
							<span>Sargodha</span>
							<span>•</span>
							<span>Pakistan</span>
						</div>
					</div>

					<div className="mt-5">
						{/* Left Column */}
						<div className="space-y-4">
							{/* Personal Info */}
							<section className="pb-2 border-b">
								<h2 className="mb-4 text-xl font-semibold">
									Personal Info
								</h2>
								<div className="space-y-4">
									<div className="text-sm">
										<span className=" text-gray-500 dark:text-white">
											Name :
										</span>
										<span className="ml-2 ">
											Leo Phillips
										</span>
									</div>
									<div className="text-sm">
										<span className=" text-gray-500 dark:text-white">
											Email :
										</span>
										<span className="ml-2">
											your.email@example.com
										</span>
									</div>
									<div className="text-sm">
										<span className=" text-gray-500 dark:text-white">
											Phone :
										</span>
										<span className="ml-2">
											+1 (555) 123-4567
										</span>
									</div>
									<div className="text-sm">
										<span className=" text-gray-500 dark:text-white">
											Designation :
										</span>
										<span className="ml-2">--</span>
									</div>
									<div className="text-sm">
										<span className=" text-gray-500 dark:text-white">
											Experience :
										</span>
										<span className="ml-2">12 Years</span>
									</div>
								</div>
							</section>

							{/* Contact Information */}
							<section className="pb-2 border-b">
								<h2 className="mb-4 text-xl font-semibold">
									Contact Information
								</h2>
								<div className="space-y-4">
									<div className="flex items-center gap-3 text-sm">
										<Mail className="h-4 w-4 text-gray-400" />
										<span>your.email@example.com</span>
									</div>
									<div className="flex items-center gap-3 text-sm">
										<Phone className="h-4 w-4 text-gray-400" />
										<span>+1 (555) 123-4567</span>
									</div>
									<div className="flex items-center gap-3 text-sm">
										<Globe className="h-4 w-4 text-gray-400" />
										<span>www.your.website.com</span>
									</div>
									<div className="flex items-center gap-3 text-sm">
										<MapPin className="h-4 w-4 text-gray-400" />
										<span>City, Country</span>
									</div>
								</div>
							</section>

							{/* Bank Details */}
							<section className="pb-2 border-b">
								<h2 className="mb-4 text-xl font-semibold">
									Bank Details
								</h2>
								<div className="space-y-4">
									<div className="text-sm">
										<span className=" text-gray-500 dark:text-white">
											Account Name :
										</span>
										<span className="ml-2">daskhdkja</span>
									</div>
									<div className="text-sm">
										<span className=" text-gray-500 dark:text-white">
											Number :
										</span>
										<span className="ml-2">3298e73</span>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>

				{/* Profile Content */}
				<div>
					{/* Right Column */}
					<div>
						{/* Experience */}
						<section className="pb-10 border-b">
							<h2 className="mb-4 text-xl font-semibold">
								Experience
							</h2>
							<div className="relative space-y-8 before:absolute before:left-[17px] before:h-full before:w-0.5 before:bg-gray-200">
								<div className="relative pl-12">
									<div className="absolute left-1.5 top-1 h-6 w-6 rounded-full bg-theme border-4 dark:border-white" />
									<div className="flex items-center justify-between">
										<div>
											<h3 className="font-semibold">
												Teacher
											</h3>
											<p className="text-sm text-gray-500 dark:text-white">
												Mission Grammar School
											</p>
										</div>
										<span className="rounded bg-violet-100 px-3 py-1 text-sm text-violet-600">
											2019-2021
										</span>
									</div>
									<p className="mt-2 text-sm text-gray-500 dark:text-white">
										Lorem Ipsum has been the industry's
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type ...
									</p>
								</div>

								<div className="relative pl-12">
									<div className="absolute left-1.5 top-1 h-6 w-6 rounded-full bg-orange-400 border-4 dark:border-white" />
									<div className="flex items-center justify-between">
										<div>
											<h3 className="font-semibold">
												Teacher
											</h3>
											<p className="text-sm text-gray-500 dark:text-white">
												Mission Grammar School
											</p>
										</div>
										<span className="rounded bg-orange-100 px-3 py-1 text-sm text-orange-600">
											2022-2023
										</span>
									</div>
									<p className="mt-2 text-sm text-gray-500 dark:text-white">
										Lorem Ipsum has been the industry's
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type ...
									</p>
								</div>

								<div className="relative pl-12">
									<div className="absolute left-1.5 top-1 h-6 w-6 rounded-full bg-green-400 border-4 dark:border-white" />
									<div className="flex items-center justify-between">
										<div>
											<h3 className="font-semibold">
												Teacher
											</h3>
											<p className="text-sm text-gray-500 dark:text-white">
												Mission Grammar School
											</p>
										</div>
										<span className="rounded bg-green-100 px-3 py-1 text-sm text-green-600">
											2023-2024
										</span>
									</div>
									<p className="mt-2 text-sm text-gray-500 dark:text-white">
										Lorem Ipsum has been the industry's
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type ...
									</p>
								</div>
							</div>
						</section>

						{/* Education */}
						<section className="mt-3 pb-2 border-b">
							<h2 className="mb-4 text-xl font-semibold">
								Education:
							</h2>
							<div className="space-y-4">
								<div className="flex items-center justify-between rounded-lg bg-gray-50 dark:bg-gray-500 p-4">
									<div>
										<h3 className="font-semibold">
											Matriculation
										</h3>
										<p className="text-sm text-gray-500 dark:text-white">
											BISE SARGODHA
										</p>
									</div>
									<span className="rounded bg-violet-100 px-3 py-1 text-sm text-violet-600">
										2019-2021
									</span>
								</div>

								<div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-500">
									<div>
										<h3 className="font-semibold">
											Teacher
										</h3>
										<p className="text-sm text-gray-500 dark:text-white">
											BISE SARGODHA
										</p>
									</div>
									<span className="rounded bg-orange-100 px-3 py-1 text-sm text-orange-600">
										2022-2023
									</span>
								</div>

								<div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-500">
									<div>
										<h3 className="font-semibold">
											Graduation
										</h3>
										<p className="text-sm text-gray-500 dark:text-white">
											UOS
										</p>
									</div>
									<span className="rounded bg-green-100 px-3 py-1 text-sm text-green-600">
										2023-2024
									</span>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
