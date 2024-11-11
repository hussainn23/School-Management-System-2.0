import {
    ArrowRight,
    Calculator,
    Flag,
    Users2,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';

const grades = [
    { name: '10th', value: 80, color: 'bg-emerald-500' },
    { name: '9th', value: 80, color: 'bg-emerald-500' },
    { name: '8th', value: 80, color: 'bg-emerald-500' },
    { name: '6th', value: 40, color: 'bg-orange-400' },
    { name: '5th', value: 40, color: 'bg-orange-400' },
    { name: '4th', value: 40, color: 'bg-orange-400' },
    { name: '3rd', value: 40, color: 'bg-orange-400' },
    { name: '2nd', value: 40, color: 'bg-red-500' },
    { name: '1st', value: 40, color: 'bg-red-500' },
];

export const DashboardContent = () => {
    return (
        <div className="p-6">
            <h2 className="text-gray-600 font-semibold text-2xl mb-3">
                Dashboard
            </h2>
            <div className="grid gap-6 md:grid-cols-12">
                <div className="space-y-6 md:col-span-8">
                    <div className="grid gap-6 md:grid-cols-1">
                        <Card className="shadow-md rounded-lg">
                            <CardContent className="flex flex-col gap-5 p-6">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-lg bg-orange-50 p-7">
                                        <Users2 className="h-10 w-10 text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-gray-600">
                                            Total Students
                                        </p>
                                        <h3 className="text-4xl font-bold text-gray-600">
                                            1,290
                                        </h3>
                                    </div>
                                    <ArrowRight className="ml-auto h-16 w-16 text-orange-500 opacity-90" />
                                </div>

                                <MainCardComponent
                                    title="Status"
                                    first="Suspended"
                                    firstData={1256}
                                    second="Struck off"
                                    secondData={1256}
                                    third="Pending"
                                    thirdData={1256}
                                />

                                <MainCardComponent
                                    title="Attendance"
                                    first="Present"
                                    firstData={1256}
                                    second="Absent"
                                    secondData={1256}
                                    third="On Leave"
                                    thirdData={1256}
                                />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Bottom Stats */}
                    <div className="grid gap-6 md:grid-cols-3">
                        <Card className="md:col-span-2">
                            <CardContent className="p-6 shadow-md rounded-lg">
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-lg bg-blue-50 p-5">
                                            <Calculator className="h-10 w-10 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-muted-foreground">
                                                Accounts (Total Fee)
                                            </p>
                                            <h3 className="text-2xl font-thin">
                                                Rs. 12930.00/-
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="mb-2 flex justify-between text-sm">
                                                <span className="text-muted-foreground font-semibold">
                                                    Received Amount
                                                </span>
                                                <span className='font-semibold text-muted-foreground'>Rs. 124.00</span>
                                            </div>
                                            <Progress
                                                value={33}
                                                className="h-3 bg-gray-100"
                                                bgColor="bg-orange-500"
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 flex justify-between text-sm">
                                                <span className="text-muted-foreground font-semibold">
                                                    Pending Amount
                                                </span>
                                                <span className='font-semibold text-muted-foreground'>Rs. 12134.00</span>
                                            </div>
                                            <Progress
                                                value={66}
                                                className="h-3 bg-gray-100"
                                                bgColor="bg-violet-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="rounded-lg bg-emerald-50 p-3">
                                    <Users2 className="h-6 w-6 text-emerald-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">
                                        Total Teachers
                                    </p>
                                    <h3 className="text-2xl font-bold">90</h3>
                                </div>
                                <ArrowRight className="ml-auto h-5 w-5 text-emerald-500" />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Right Section - Grade Performance */}
                <Card className="md:col-span-4">
                    <CardHeader>
                        <CardTitle>Exams Total Percentage</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {grades.map((grade) => (
                                <div key={grade.name} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium">
                                            {grade.name}
                                        </span>
                                        <span className="text-muted-foreground">
                                            {grade.value}%
                                        </span>
                                    </div>
                                    <Progress
                                        value={grade.value}
                                        className="h-2"
                                        bgColor={grade.color}
                                    />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}


const MainCardComponent = ({
    title,
    first,
    firstData,
    second,
    secondData,
    third,
    thirdData,
}: {
    title: string;
    first: string;
    firstData: number;
    second: string;
    secondData: number;
    third: string;
    thirdData: number;
}) => {
    return (
        <>
            <div className="w-full bg-gray-100 p-2">
                <span className="font-bold text-lg">{title}</span>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1">
                <div className="flex justify-center items-center flex-col p-5 shadow-md gap-y-3 rounded-md">
                    <span className="text-gray-600 font-semibold">{first}</span>
                    <span className="text-2xl">{firstData}</span>
                </div>
                <div className="flex justify-center items-center flex-col p-5 shadow-md gap-y-3 rounded-md">
                    <span className="text-gray-600 font-semibold">
                        {second}
                    </span>
                    <span className="text-2xl">{secondData}</span>
                </div>
                <div className="flex justify-center items-center flex-col p-5 shadow-md gap-y-3 rounded-md">
                    <span className="text-gray-600 font-semibold">{third}</span>
                    <span className="text-2xl">{thirdData}</span>
                </div>
            </div>
        </>
    );
};
