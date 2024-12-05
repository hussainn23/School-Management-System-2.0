import { useState } from 'react';
import { Input } from '../src/components/ui/input';
import { Button } from '../src/components/ui/button';
import { Checkbox } from '../src/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { useAuthStore } from '@/store/authStore';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {isAuthenticated} = useAuthStore()
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    login(
      { email, password },
      {
        onSuccess: () => {
          navigate('/');
        },
      }
    );

    error && 
        toast.error(error?.message || "An unknown error occured")

        
        
    };
    isAuthenticated && navigate('/')

  return (
    <div className="flex min-h-screen justify-center items-center bg-[url('/loginBackground.svg')] bg-cover bg-center">
      <div className="flex flex-row justify-between lg:min-w-[1280px] shadow-xl shadow-muted-foreground dark:shadow-gray-900">
        <div className="hidden lg:block lg:w-1/2 bg-theme relative overflow-hidden rounded-sm">
          <img
            src="/login-wrapper-bg.svg"
            alt="Main Wrapper image"
            className="w-full h-full opacity-30"
          />
          <img
            src="/login-image-logo.svg"
            alt="Login image logo"
            className="absolute top-5 right-5"
          />
          <div className="flex flex-col gap-5 bg-[#8976FF] absolute top-[14%] left-[20%] w-[55%]  p-7 shadow-sm">
            <img src="/login-top-image.svg" alt="" />
            <p className="font-semibold text-white text-center text-lg">
              “Empowering education through seamless management—your journey to
              smarter school operations starts here.”
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full flex items-center justify-center p-8 lg:w-1/2 bg-white dark:bg-gray-800 rounded-sm">
          <div className="w-[70%] space-y-8 mx-auto">
            <div className="flex flex-col items-center">
              <img src="/logo.svg" alt="Smart School" className="h-12 mb-6" />
              <h1 className="text-2xl font-semibold">Sign In</h1>
              <p className="text-sm text-muted-foreground">
                Welcome back Jhon!
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  name='email'
                  placeholder="Enter email"
                  className="h-12 dark:bg-gray-700"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-sm text-[#FF8A65] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    className="h-12 pr-10 dark:bg-gray-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                        <div className='bg-theme/20 dark:bg-theme/30 p-2 text-theme dark:text-white rounded-sm hover:bg-theme/10'>
                            <EyeOff className="h-5 w-5" />
                        </div>
                    ) : (
                        <div className='bg-theme/20 dark:bg-theme/30 p-2 text-theme dark:text-white rounded-sm hover:bg-theme/10'>
                            <Eye className="h-5 w-5" />
                        </div>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground"
                >
                  Remember password?
                </label>
              </div>

              <Button type='submit' className="w-full h-12 bg-theme hover:bg-theme/90 text-white" disabled={isLoading}>
                {isLoading ? 'Signing in ....' :  'Sign In'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
