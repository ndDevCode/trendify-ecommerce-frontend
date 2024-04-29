"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import icon from "@/app/icon.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Swal from "sweetalert2";

import { cn } from "@/lib/utils";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/lib/validationRegex";
import { Inter } from "@/lib/fonts";

import { registerCustomer } from "@/lib/services/authService";
import { Customer } from "@/types/userTypes";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
};

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
      return;
    }

    const customer: Customer = {
      id: null,
      firstName: formData.firstname,
      lastName: formData.lastname,
      email: formData.email,
      password: formData.newPassword,
      role: ["CUSTOMER"],
      isActive: true,
    };

    const { data } = await registerCustomer(customer);
    if (data.isSuccess) {
      Swal.fire({
        title: "Success!",
        text: data.message + "\nPlease login.",
        icon: "success",
        confirmButtonText: "Cool",
        didClose: () => {
          signIn();
        },
      });
      return;
    }

    Swal.fire({
      title: "Error Occured!",
      text: data.message,
      icon: "error",
      confirmButtonText: "Hmm",
    });
  };

  return (
    <>
      <div className="flex min-h-dvh flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-24 w-auto rounded-full shadow-2xl"
            src={icon}
            alt="Trendify Ecommerce"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 trackiauth-utilng-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  {...register("firstname", {
                    required: "First Name is required.",
                  })}
                  id="firstname"
                  name="firstname"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  errors={errors}
                  name="firstname"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p className="text-red-400 text-sm mt-1" key={type}>
                            {message}
                          </p>
                        ))
                      : null;
                  }}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  {...register("lastname", {
                    required: "Last Name is required.",
                  })}
                  id="lastname"
                  name="lastname"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  errors={errors}
                  name="lastname"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p className="text-red-400 text-sm mt-1" key={type}>
                            {message}
                          </p>
                        ))
                      : null;
                  }}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email", {
                    pattern: {
                      value: EMAIL_REGEX,
                      message: "This Email is Invalid.",
                    },
                    required: "Email is required.",
                  })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p className="text-red-400 text-sm mt-1" key={type}>
                            {message}
                          </p>
                        ))
                      : null;
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register("newPassword", {
                    required: "New Password is required.",
                    pattern: {
                      value: PASSWORD_REGEX,
                      message: `Password criteria:\n-> Character limit (8-30)\n-> Must contain at least one lowercase letter (a-z)\n-> Must contain at least one uppercase letter (A-Z)\n-> Must contain at least one digit (0-9)\n-> Must contain at least one special character (@#\$%^&+=)\n-> No whitespace characters allowed`,
                    },
                  })}
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  errors={errors}
                  name="newPassword"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <pre
                            className={cn(
                              Inter.className,
                              "text-red-400 text-sm mt-1"
                            )}
                            key={type}
                          >
                            {message}
                          </pre>
                        ))
                      : null;
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register("confirmPassword", {
                    required: "Confirm Password is required.",
                    pattern: {
                      value: PASSWORD_REGEX,
                      message: `Password criteria:\n-> Character limit (8-30)\n-> Must contain at least one lowercase letter (a-z)\n-> Must contain at least one uppercase letter (A-Z)\n-> Must contain at least one digit (0-9)\n-> Must contain at least one special character (@#\$%^&+=)\n-> No whitespace characters allowed`,
                    },
                  })}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  errors={errors}
                  name="confirmPassword"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <pre
                            className={cn(
                              Inter.className,
                              "text-red-400 text-sm mt-1"
                            )}
                            key={type}
                          >
                            {message}
                          </pre>
                        ))
                      : null;
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already signed up?{" "}
            <Link
              href="/sign-in"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
