import {
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Button } from '../ui/button';

export function NavBottom() {

  return (
    <SidebarMenu>
      <SidebarMenuItem className="mb-5 px-3">
        <div className="px-5 pt-16 pb-3 bg-gray-100 dark:bg-gray-800 rounded-md flex flex-col gap-4 justify-center items-center relative">
          <span className="text-center text-sm font-medium my-2">
            Stay organized and manage tasks effortlessly with our smart CRM!
          </span>
          <Button size={'sm'} className="bg-theme hover:bg-theme/80 dark:text-white">Get Access</Button>
          <div className="absolute -top-10 left-12 p-4 bg-white rounded-full border-[10px] border-gray-100 dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center">
            <img src="/bottom-nav-image.svg" alt="" className='w-16 h-16' />
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
