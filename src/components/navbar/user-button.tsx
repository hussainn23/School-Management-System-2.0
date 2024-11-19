import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';

export const UserButton = () => {
    return (
      <div className="border-l pl-2 mt-2">
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="flex flex-col justify-center items-center gap-2"
          >
            <img
              src="https://github.com/shadcn.png"
              alt="User image"
              className="w-20 rounded-full"
            />
            <h3 className="text-gray-600">Erick Brown</h3>
            <Link to={'#'} className="text-sm text-blue-600 hover:text-blue-700">
              View/Edit Profile
            </Link>
            <div className='flex justify-between items-center gap-2'>
                <Button variant={'outline'}>
                    Login History 
                </Button>
                <Button variant={'outline'}>
                    <LogOut className='text-red-500' />
                    Logout  
                </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
}