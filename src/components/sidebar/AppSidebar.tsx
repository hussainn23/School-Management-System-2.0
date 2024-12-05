import * as React from 'react';
import {
  LayoutDashboard,
  School2,
  BookOpen,
  Building2,
  GraduationCap,
  Home,
} from 'lucide-react';

import { NavMain } from './NavMain';
import { NavBottom } from './NavBottom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { useTheme } from 'next-themes';

const data = {
  user: {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/avatars/john-doe.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Admin',
      url: '/admin',
      icon: LayoutDashboard,
      items: [
        { title: 'Class Management', url: '/admin/class-management' },
        { title: 'Section Management', url: '/admin/section-management' },
        { title: 'Teacher Management', url: '/admin/teacher-management' },
        { title: 'Subject Management', url: '/admin/subject-management' },
        { title: 'Transport Management', url: '/admin/transport-management' },
        { title: 'Attendance', url: '/admin/attendance' },
        { title: 'Student Report', url: '/admin/student-report' },
      ],
    },
    {
      title: 'Admissions',
      url: '/admissions',
      icon: School2,
    },
    {
      title: 'Academics',
      url: '/academics',
      icon: BookOpen,
    },
    {
      title: 'Accounts Office',
      url: '/accounts',
      icon: Building2,
    },
    {
      title: 'Exams Department',
      url: '/exams',
      icon: GraduationCap,
    },
    {
      title: 'Hostel Management',
      url: '/hostel',
      icon: Home,
    },
    {
      title: 'Transport Management',
      url: '/transport',
      icon: Home,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const {theme} = useTheme()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mb-2 border-b group-data-[collapsible=icon]:border-0">
        <div className="flex items-center justify-center w-full">
          <img
            src={theme === 'dark' ? '/login-image-logo.svg' : "/main-logo.svg"}
            alt="Logo"
            className="w-40 h-auto group-data-[collapsible=icon]:hidden transition-all duration-300 ease-in-out p-3"
          />
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-full h-full group-data-[collapsible=icon]:block hidden transition-all duration-300 ease-in-out p-1"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <NavBottom />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
