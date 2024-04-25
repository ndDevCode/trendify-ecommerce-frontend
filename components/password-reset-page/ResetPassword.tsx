import React from "react";
import Image from "next/image";

import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import icon from "@/app/icon.png";
import { PASSWORD_REGEX } from "@/lib/validationRegex";

interface Inputs {
  newPassword: string;
  confirmPassword: string;
}

function ResetPassword({ token }: { token: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex min-h-dvh flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-24 w-auto rounded-full shadow-2xl"
          src={icon}
          alt="Trendify Ecommerce"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset your password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register("newPassword", {
                    pattern: {
                      value: PASSWORD_REGEX,
                      message: `Password criteria:\
                      -> Character limit (8-30)\n
                      -> Must contain at least one lowercase letter (a-z)\n
                      -> Must contain at least one uppercase letter (A-Z)\n
                      -> Must contain at least one digit (0-9)\n
                      -> Must contain at least one special character (@#\$%^&+=)\n
                      -> No whitespace characters allowed`,
                    },
                    required: "Password is required.",
                  })}
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  errors={errors}
                  name="newPassword"
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
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register("confirmPassword", {
                    pattern: {
                      value: PASSWORD_REGEX,
                      message: `Password criteria:\
                    -> Character limit (8-30)\n
                    -> Must contain at least one lowercase letter (a-z)\n
                    -> Must contain at least one uppercase letter (A-Z)\n
                    -> Must contain at least one digit (0-9)\n
                    -> Must contain at least one special character (@#\$%^&+=)\n
                    -> No whitespace characters allowed`,
                    },
                    required: "Password is required.",
                  })}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  errors={errors}
                  name="confirmPassword"
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
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
