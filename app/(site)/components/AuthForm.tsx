'use client';

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/inputs/Button";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    setVariant((prevVariant) => 
      prevVariant === 'LOGIN' ? 'REGISTER' : 'LOGIN'
    );
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    // Thêm logic xử lý đăng nhập/đăng ký tại đây.
  };

  const socialAction = (provider: string) => {
    setIsLoading(true);
    console.log(`Logging in with ${provider}`);
    // Thêm logic xử lý OAuth tại đây (GitHub, Google, v.v.).
  };

  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-gray-100
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div className="w-full max-w-md space-y-8 bg-white p-8 shadow-md rounded-lg">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img
            src="/images/logo.png" 
            alt="Logo"
            className="h-10 w-30"
          />
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type="submit"
              className="bg-blue-500 text-white"
            >
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          {/* Social Buttons */}
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => socialAction('github')}
              disabled={isLoading}
              className="
                flex 
                w-full 
                items-center 
                justify-center 
                rounded-md 
                border 
                border-gray-300 
                bg-white 
                px-4 
                py-2 
                text-gray-700 
                shadow-sm 
                hover:bg-gray-100 
                focus:outline-none 
                focus:ring-2 
                focus:ring-offset-2 
                focus:ring-gray-300
              "
            >
              <FaGithub className="h-5 w-5 mr-2" />
              GitHub
            </button>
            <button
              type="button"
              onClick={() => socialAction('google')}
              disabled={isLoading}
              className="
                flex 
                w-full 
                items-center 
                justify-center 
                rounded-md 
                border 
                border-gray-300 
                bg-white 
                px-4 
                py-2 
                text-gray-700 
                shadow-sm 
                hover:bg-gray-100 
                focus:outline-none 
                focus:ring-2 
                focus:ring-offset-2 
                focus:ring-gray-300
              "
            >
              <FaGoogle className="h-5 w-5 mr-2" />
              Google
            </button>
          </div>
        </div>

        <div className="flex justify-center text-sm mt-6 text-gray-500">
          {variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'}
          <span
            onClick={toggleVariant}
            className="ml-1 cursor-pointer text-blue-500 hover:underline"
          >
            {variant === 'LOGIN' ? 'Create an account' : 'Sign in'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
