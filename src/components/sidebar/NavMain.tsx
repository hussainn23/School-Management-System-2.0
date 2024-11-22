
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, type LucideIcon } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

export function NavMain({ items }: { items: NavItem[] }) {
  const location = useLocation();
  const [openMenus, setOpenMenus] = React.useState<string[]>([]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const isSubmenuActive = (item: NavItem) => {
    if (!item.items) return false;
    return item.items.some((subItem) => isActive(subItem.url));
  };

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  React.useEffect(() => {
    items.forEach((item) => {
      if (
        item.items &&
        isSubmenuActive(item) &&
        !openMenus.includes(item.title)
      ) {
        setOpenMenus((prev) => [...prev, item.title]);
      }
    });
  }, [location.pathname, items, openMenus]);

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            open={openMenus.includes(item.title)}
            onOpenChange={() => toggleMenu(item.title)}
          >
            <SidebarMenuItem className="py-1 group-data-[collapsible=icon]:pr-3">
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  asChild={!item.items}
                  isActive={isActive(item.url) || isSubmenuActive(item)}
                  className={`w-full ${
                    isActive(item.url) || isSubmenuActive(item)
                      ? 'bg-sidebar-accent text-sidebar-accent-fg'
                      : ''
                  } `}
                >
                  {item.items ? (
                    <div className="flex items-center w-full justify-start group-data-[collapsible=icon]:justify-center">
                      {item.icon && (
                        <item.icon className=" h-5 w-5 min-w-[1.25rem] group-data-[collapsible=icon]:mr-0 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6" />
                      )}
                      <span className="ml-5 group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                      <ChevronRight className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[collapsible=icon]:hidden" />
                    </div>
                  ) : (
                    <Link
                      to={item.url}
                      className="flex items-center w-full group-data-[collapsible=icon]:justify-center"
                    >
                      {item.icon && (
                        <item.icon className="h-5 w-5 min-w-[1.25rem] group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6" />
                      )}
                      <span className="ml-3 group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </Link>
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {item.items && (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActive(subItem.url)}
                          className={
                            isActive(subItem.url)
                              ? 'bg-sidebar-accent text-sidebar-accent-fg'
                              : ''
                          }
                        >
                          <Link
                            to={subItem.url}
                            className="flex items-center w-full"
                          >
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
