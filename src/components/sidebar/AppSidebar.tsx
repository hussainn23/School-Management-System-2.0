import * as React from 'react';
import {
  LayoutDashboard,
  Users,
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
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: 'Admin',
      url: '/admin',
      icon: Users,
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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center p-4">
          <img
            src="/main-logo.svg"
            alt="Logo"
            className="w-40 h-auto group-data-[collapsible=icon]:w-8 transition-all duration-300 ease-in-out"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavBottom user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
