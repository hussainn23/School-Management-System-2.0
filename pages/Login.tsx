import React from 'react'
import { Input } from "../src/components/ui/input"
import { Button } from "../src/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../src/components/ui/card"
import { Mail, KeyRound } from 'lucide-react';



function Login() {
    return (
        <div className='w-full h-screen bg-[#1A55A5] flex justify-center items-center bg-[url("../src/assets/bgLogin.svg")] bg-no-repeat bg-center '>
            <Card className='sm:h-[400px] md:h-[430px] xl:h-[500px] sm:w-[260px] md:w-[350px] xl:w-[450px] w-[556px] sm:px-[4px] md:px-[7px] xl:px-[15px] px-[24px] sm:py-[4px] md:py-[7px] xl:py-[15px] py-[40px]'>
                <CardHeader className='flex flex-col w-full items-center'>
                    <img className='sm:mb-[5px] md:mb-[10px] xl:mb-[15px] mb-[30px] sm:w-[80px] md:w-[80px] xl:w-[110px] w-[143px] sm:h-[70px] md:h-[80px] xl:h-[100px] h-[120px]' src="../src/assets/logo.svg" alt="" />
                    <CardTitle className='sm:text-[15px] md:text-[20px] xl:text-[25px] text-[32px]'>Welcome!</CardTitle>
                    <CardDescription className='sm:text-[12px] md:text-[14px] xl:text-[17px] text-[20px]'>Sign in to continue.</CardDescription>
                </CardHeader>

                <CardContent>
                    {/* Email or USername */}
                    <p className='sm:text-[11px] md:text-[12px] xl:text-[14px] mb-[6px]'>Email or Username</p>
                    <div className="relative">
                        <Mail className="sm:w-[13px] md:w-[15px] xl:w-[18px] absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-[20px] h-[20px]" />
                        <Input
                            type="email"
                            placeholder="e.g. abc@gmail.com"
                            className="py-[14px] pl-10 md:text-[12px] sm:text-[10px] xl:text-[15px]"
                        />
                    </div>

                    {/* Password */}
                    <p className='sm:text-[11px] md:text-[12px] xl:text-[14px] mb-[6px] mt-[10px]'>Password</p>
                    <div className="relative">
                        <KeyRound className="sm:w-[13px] md:w-[15px] xl:w-[18px] absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-[20px] h-[20px]" />
                        <Input
                            type="password"
                            placeholder="********"
                            className="py-[14px] pl-10 md:text-[12px] xl:text-[15px]"
                        />
                    </div>
                </CardContent>


                <CardFooter>
                    <Button className='w-full'>Sign in</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login
