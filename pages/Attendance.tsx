import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../src/components/ui/select"
import { Button } from '../src/components/ui/button';
import { Plus, Printer } from 'lucide-react';
import Table from '../src/components/common/Table';
import { Input } from '../src/components/ui/input';


function Attendance() {

    const data = [
        { sr: '1', class: '9th', section: 'A', totoalStudents: '100', leave: '2', present: '95', absent: '3', classTeacher: 'Ali', status: "--" },
        { sr: '2', class: '9th', section: 'B', totoalStudents: '110', leave: '5', present: '100', absent: '5', classTeacher: 'Noumans', status: "--" },
    ];

    const columns = [
        { key: 'sr', header: 'SR #' },
        { key: 'class', header: 'Class', sortable: true },
        { key: 'section', header: 'Section', sortable: true },
        { key: 'totoalStudents', header: 'Total Students', sortable: true },
        {
            key: 'leave',
            header: 'Leave',
            sortable: true,
            render: (item) => <span className="text-orange-400  font-semibold">{item.leave}</span>,
        },
        {
            key: 'present',
            header: 'Present',
            sortable: true,
            render: (item) => <span className="text-green-500 font-semibold">{item.present}</span>,
        },
        {
            key: 'absent',
            header: 'Absent',
            sortable: true,
            render: (item) => <span className="text-red-500 font-semibold">{item.absent}</span>,
        },
        { key: 'classTeacher', header: 'Class Teacher', sortable: true },
        { key: 'status', header: 'Status', sortable: true },
    ];

    return (
        <>

            <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center mb-3">
                    <h2 className="font-semibold text-xl sm:text-2xl mb-3">Attendance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Class" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="A">A</SelectItem>
                                <SelectItem value="B">B</SelectItem>
                                <SelectItem value="C">C</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex flex-col gap-1 w-full">
                            <Input className="w-full block" type="date" name="startingTime" placeholder="Select" />
                        </div>
                    </div>
                </div>


                <div className="bg-white py-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* First Column */}
                    <div className="flex gap-4 px-5">
                        <p className="font-bold">All Classes</p>
                        <div className="flex gap-6 items-center">
                            <div className="flex ml-2">
                                <span className="text-xs text-orange-600 font-bold">TOTAL</span>
                                <span className="text-xs ml-2 font-bold">42</span>
                            </div>
                            <div className="flex ml-2">
                                <span className="text-xs font-bold text-yellow-400">LEAVE</span>
                                <span className="text-xs ml-2 font-bold">10</span>
                            </div>
                            <div className="flex ml-2">
                                <span className="text-xs font-bold text-green-400">PRESENT</span>
                                <span className="text-xs ml-2 font-bold">20</span>
                            </div>
                            <div className="flex ml-2">
                                <span className="text-xs font-bold text-red-600">ABSENT</span>
                                <span className="text-xs ml-2 font-bold">12</span>
                            </div>
                        </div>
                    </div>

                    {/* Second Column (Buttons) */}
                    <div className="flex items-center gap-2 justify-end">
                        <Button>
                            <Plus />
                            Add Subject
                        </Button>
                        <Button>
                            <Printer />
                            Print
                        </Button>
                    </div>
                </div>









                <Table data={data} columns={columns} itemsPerPage={20} />
            </div>

        </>
    )
}

export default Attendance
