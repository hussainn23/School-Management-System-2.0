'use client';
import * as React from 'react';
import {
    BarChart3,
    BookOpen,
    Building2,
    GraduationCap,
    Home,
    LayoutDashboard,
    School2,
    Settings,
    Users,
} from 'lucide-react';

import { Button } from '../src/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../src/components/ui/card';
import { Progress } from '../src/components/ui/progress';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from '../src/components/ui/sidebar';

const navigation = [
    { name: 'Dashboard', href: '#', icon: LayoutDashboard, current: true },
    { name: 'Admin', href: '#', icon: Users, current: false },
    { name: 'Admissions', href: '#', icon: School2, current: false },
    { name: 'Academics', href: '#', icon: BookOpen, current: false },
    { name: 'Accounts Office', href: '#', icon: Building2, current: false },
    {
        name: 'Exams Department',
        href: '#',
        icon: GraduationCap,
        current: false,
    },
    { name: 'Hostel Management', href: '#', icon: Home, current: false },
];

const stats = [
    { name: 'Total Students', value: '1,290' },
    { name: 'Suspended', value: '1,256' },
    { name: 'Struck off', value: '1,256' },
    { name: 'Pending', value: '1,256' },
];

const attendance = [
    { name: 'Present', value: '1,256' },
    { name: 'Absent', value: '1,256' },
    { name: 'On Leave', value: '1,256' },
];

const grades = [
    { name: '10th', value: 80 },
    { name: '9th', value: 80 },
    { name: '8th', value: 80 },
    { name: '6th', value: 40 },
    { name: '5th', value: 40 },
    { name: '4th', value: 40 },
    { name: '3rd', value: 40 },
    { name: '2nd', value: 40 },
    { name: '1st', value: 40 },
];

function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex h-14 items-center px-3">
                    <a
                        className="flex items-center gap-2 font-semibold"
                        href="#"
                    >
                        <School2 className="h-6 w-6" />
                        <span>Smart School</span>
                    </a>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {navigation.map((item) => (
                        <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton asChild isActive={item.current}>
                                <a href={item.href}>
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {item.name}
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

function DashboardContent() {
    return (
        <div className="container mx-auto p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>

            <div className="grid gap-6">
                {/* Stats */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <Card key={stat.name}>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.name}
                                </CardTitle>
                                <BarChart3 className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {stat.value}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Attendance */}
                <Card>
                    <CardHeader>
                        <CardTitle>Attendance</CardTitle>
                        <CardDescription>
                            Daily attendance overview
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                            {attendance.map((item) => (
                                <div key={item.name} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <div>{item.name}</div>
                                        <div className="font-medium">
                                            {item.value}
                                        </div>
                                    </div>
                                    <Progress value={75} />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Grade Performance */}
                <Card>
                    <CardHeader>
                        <CardTitle>Exams Total Percentage</CardTitle>
                        <CardDescription>Performance by grade</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {grades.map((grade) => (
                                <div key={grade.name} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <div>{grade.name}</div>
                                        <div className="font-medium">
                                            {grade.value}%
                                        </div>
                                    </div>
                                    <Progress value={grade.value} />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default function Component() {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen">
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-14 items-center border-b px-4">
                        <SidebarTrigger />
                    </header>
                    <main className="flex-1">
                        <DashboardContent />
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
