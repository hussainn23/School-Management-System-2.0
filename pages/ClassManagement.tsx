import Table from '../src/components/common/Table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../src/components/ui/dropdown-menu';
import {Button} from "../src/components/ui/button"
import { MoreHorizontal, Plus, Printer } from 'lucide-react';
import { Modal } from '../src/components/common/Modal';
import { useState } from 'react';
import { Input } from '../src/components/ui/input';
import { Textarea } from '../src/components/ui/textarea';


const ClassManagement = () => {

    const [isModalOpen,setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const data = [
        {
            createdAt: '05-12-2024',
            classname: '9th ',
            description: 'lorem ipsum dolor sit apum',
        },
        {
            createdAt: '04-12-3000',
            classname: '10th ',
            description: 'lorem ipsum dolor sit apum',
        },
    ];

    const columns = [
        { key: 'createdAt', header: 'Created At' },
        { key: 'classname', header: 'Class Name', sortable: true },
        { key: 'description', header: 'Description', sortable: true },
        {
            key: 'actions',
            header: 'Actions',
            render: (item) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => console.log('Edit', item)}
                        >
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => console.log('Delete', item)}
                        >
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];


    return (
        <div className="p-4 sm:p-6">
            <div className="flex justify-between items-center mb-3">
                <h2 className="font-semibold text-xl sm:text-2xl mb-3">
                    Class Management
                </h2>
                <div className="flex justify-center items-center gap-2">
                    <Button className="flex justify-center items-center gap-1">
                        <Printer />
                        Print
                    </Button>
                    <Button
                        className="flex justify-center items-center gap-1"
                        onClick={openModal}
                    >
                        <Plus />
                        Add Class
                    </Button>
                </div>
            </div>

            <Modal
                title="Add New Class"
                isOpen={isModalOpen}
                closeModal={closeModal}
                doSomething={() => {console.log('Modal action!'); closeModal()}}
            >
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="classname"
                            className="text-sm text-muted-foreground"
                        >
                            Class Name
                        </label>
                        <Input
                            name="classname"
                            placeholder="Classname e.g: 9th,10th"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="description"
                            className="text-sm text-muted-foreground"
                        >
                            Description
                        </label>
                        <Textarea name="description" placeholder="Description" />
                    </div>
                </form>
            </Modal>

            <Table data={data} columns={columns} itemsPerPage={20} />
        </div>
    );
};

export default ClassManagement;
