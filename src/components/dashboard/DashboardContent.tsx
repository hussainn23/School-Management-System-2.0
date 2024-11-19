import { ArrowRight, Calculator, Flag, ListChecks, Users2 } from 'lucide-react';

import { Card, CardContent, CardHeader } from '../ui/card';
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
    <div className="p-4 sm:p-6">
      <h2 className="font-semibold text-xl sm:text-2xl mb-3">Dashboard</h2>
      <div className="grid gap-6 grid-cols-12">
        <div className="space-y-6 lg:col-span-8 col-span-12">
          <div className="grid gap-6 md:grid-cols-1">
            <Card className="shadow-md rounded-3xl">
              <CardContent className="flex flex-col gap-5 px-4 sm:px-6 py-6 sm:py-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-orange-50 p-5 sm:p-7">
                    <Users2 className="h-8 w-8 sm:h-10 sm:w-10 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-md sm:text-lg font-semibold text-gray-600">
                      Total Students
                    </p>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-600">
                      1,290
                    </h3>
                  </div>
                  <ArrowRight className="ml-auto h-12 w-12 sm:h-16 sm:w-16 text-orange-500 opacity-90" />
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
          <div className="grid gap-6 md:grid-cols-4">
            <Card className="md:col-span-2 p-4 sm:p-6 shadow-md rounded-3xl border-none bg-white">
              <CardContent>
                <div className="flex flex-col gap-6 sm:gap-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-blue-50 p-4 sm:p-5">
                        <Calculator className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">
                          Accounts (Total Fee)
                        </p>
                        <h3 className="text-xl sm:text-2xl font-normal text-gray-800">
                          Rs. 12930.00/-
                        </h3>
                      </div>
                    </div>
                    <ArrowRight className="ml-auto h-12 w-12 sm:h-16 sm:w-16 text-blue-500 opacity-90" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-muted-foreground font-semibold">
                          Received Amount
                        </span>
                        <span className="font-semibold text-muted-foreground">
                          Rs. 124.00
                        </span>
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
                        <span className="font-semibold text-muted-foreground">
                          Rs. 12134.00
                        </span>
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
            <div className="md:col-span-2 flex flex-col justify-between gap-4">
              <Card className="shadow-md rounded-3xl">
                <CardContent className="flex items-center gap-4 sm:gap-5 p-4 sm:p-6">
                  <div className="rounded-lg bg-emerald-50 p-4 sm:p-5">
                    <Users2 className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-md sm:text-lg font-medium text-gray-600">
                      Total Teachers
                    </p>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-700">
                      90
                    </h3>
                  </div>
                  <ArrowRight className="ml-auto h-12 w-12 sm:h-16 sm:w-16 text-emerald-500" />
                </CardContent>
              </Card>
              <Card className="shadow-md rounded-3xl">
                <CardContent className="flex items-center gap-4 sm:gap-5 p-4 sm:p-6">
                  <div className="rounded-lg bg-red-100 p-4 sm:p-5">
                    <Flag className="h-8 w-8 sm:h-10 sm:w-10 text-red-500" />
                  </div>
                  <div>
                    <p className="text-md sm:text-lg font-medium text-gray-600">
                      Upcoming Events
                    </p>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-700">
                      30
                    </h3>
                  </div>
                  <ArrowRight className="ml-auto h-12 w-12 sm:h-16 sm:w-16 text-red-500" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Right Section - Grade Performance */}
        <Card className="lg:col-span-4 col-span-12 rounded-3xl shadow-md">
          <CardHeader className="flex flex-row gap-4 sm:gap-5 p-4 sm:p-6">
            <div className="rounded-lg bg-green-100 p-4 sm:p-5">
              <ListChecks className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" />
            </div>
            <div>
              <p className="text-md sm:text-lg font-semibold text-gray-600">
                Exams Total Percentage
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-700">
                80%
              </h3>
            </div>
            <ArrowRight className="ml-auto h-12 w-12 sm:h-16 sm:w-16 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-6 sm:space-y-8">
              {grades.map((grade) => (
                <div key={grade.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-[14px] sm:text-[16px] text-gray-700">
                      {grade.name}
                    </span>
                    <span className="text-gray-800 font-semibold">
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
};

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
          <span className="text-gray-600 font-semibold">{second}</span>
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
