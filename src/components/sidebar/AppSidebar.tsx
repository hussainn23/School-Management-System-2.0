import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/svg/logo.svg"
import {
    BookOpen,
    Building2,
    ChevronDown,
    GraduationCap,
    Home,
    LayoutDashboard,
    School2,
    Users,
} from 'lucide-react';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '../ui/collapsible';
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '../ui/sidebar';
import { Link } from 'react-router-dom';

const navigation = [
    {
        name: 'Dashboard',
        href: '/',
        icon: LayoutDashboard,
    },
    {
        name: 'Admin',
        href: '/admin',
        icon: Users,
        submenu: [
            { name: 'Class Management', href: '/admin/class-management' },
            { name: 'Section Management', href: '/admin/section-management' },
            { name: 'Teacher Management', href: '/admin/teacher' },
            { name: 'Transport Management', href: '/admin/transport' },
            { name: 'Attendance', href: '/admin/attendance' },
            { name: 'Student Report', href: '/admin/student-report' },
        ],
    },
    {
        name: 'Admissions',
        href: '/admissions',
        icon: School2,
    },
    {
        name: 'Academics',
        href: '/academics',
        icon: BookOpen,
    },
    {
        name: 'Accounts Office',
        href: '/accounts',
        icon: Building2,
    },
    {
        name: 'Exams Department',
        href: '/exams',
        icon: GraduationCap,
    },
    {
        name: 'Hostel Management',
        href: '/hostel',
        icon: Home,
    },
    {
        name: 'Transport Management',
        href: '/transport',
        icon: Home,
    },
];

export function AppSidebar() {
    const location = useLocation();
    const [openMenus, setOpenMenus] = React.useState<string[]>([]);

    const isActive = (href: string) => {
        if (href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(href);
    };

    const isSubmenuActive = (item: any) => {
        if (!item.submenu) return false;
        return item.submenu.some((subItem: any) => isActive(subItem.href));
    };

    const toggleMenu = (name: string) => {
        setOpenMenus((prev) =>
            prev.includes(name)
                ? prev.filter((item) => item !== name)
                : [...prev, name]
        );
    };

    React.useEffect(() => {
        navigation.forEach((item) => {
            if (
                item.submenu &&
                isSubmenuActive(item) &&
                !openMenus.includes(item.name)
            ) {
                setOpenMenus((prev) => [...prev, item.name]);
            }
        });
    }, [location.pathname]);

    return (
        <Sidebar className='bg-white'>
            <SidebarHeader className='bg-white'>
                <div className="flex items-center p-3">
                    <Link
                        to="/"
                        className="flex items-center gap-2 font-semibold justify-center m-auto"
                    >
                        <img src={logo} alt="Logo" className="w-28" />
                    </Link>
                </div>
            </SidebarHeader>
            <SidebarContent className='bg-white'>
                <SidebarMenu className='px-2'>
                    {navigation.map((item) => {
                        if (!item.submenu) {
                            return (
                                <SidebarMenuItem
                                    key={item.name}
                                    className="p-2"
                                >
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive(item.href)}
                                        className={`bg-white text-sm`}
                                    >
                                        <NavLink
                                            to={item.href}
                                            className='p-2 font-medium'
                                        >
                                            <item.icon className="mr-2 h-4 w-4" />
                                            {item.name}
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            );
                        }

                        return (
                            <Collapsible
                                key={item.name}
                                open={openMenus.includes(item.name)}
                                onOpenChange={() => toggleMenu(item.name)}
                                className="w-[223px] mx-auto"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            className="w-full justify-between"
                                            isActive={
                                                isActive(item.href) ||
                                                isSubmenuActive(item)
                                            }
                                        >
                                            <div className="flex items-center font-medium">
                                                <item.icon className="mr-2 h-4 w-4" />
                                                {item.name}
                                            </div>
                                            <ChevronDown
                                                className={`ml-auto h-4 w-4 shrink-0 transition-transform duration-200 ${
                                                    openMenus.includes(
                                                        item.name
                                                    )
                                                        ? 'rotate-180'
                                                        : ''
                                                }`}
                                                aria-hidden="true"
                                            />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub className='mt-1'>
                                            {item.submenu.map((subItem) => (
                                                <SidebarMenuSubItem
                                                    key={subItem.name}
                                                >
                                                    <SidebarMenuSubButton
                                                        asChild
                                                        isActive={isActive(
                                                            subItem.href
                                                        )}
                                                    >
                                                        <Link to={subItem.href} className='text-xs'>
                                                            {subItem.name}
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        );
                    })}
                </SidebarMenu>
            </SidebarContent>
            
        </Sidebar>
    );
}
