"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

interface PopupWidgetProps {
  open: boolean;
  onClose: () => void;
}

export function PopupWidget({ open, onClose }: PopupWidgetProps) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  // Watch the "name" field to include it in the subject
  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  const onSubmit = async (data: any, e: any) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  // If not open, return nothing
  if (!open) return null;

  return (
    <>
      {/* Dark semi-transparent backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/25"
        onClick={onClose}
        role="presentation"
      />

      {/* Centered modal container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* The popup panel itself */}
        <div className="w-full max-w-md p-6 overflow-hidden text-left align-middle bg-white shadow-xl rounded-2xl dark:bg-gray-900 relative">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
            Join the Waitlist
          </h3>

          <div className="mt-4">
            {/* If not submitted yet */}
            {!isSubmitSuccessful && (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input
                  type="hidden"
                  value="af19331a-c42e-47ad-a8c9-688322faf406"
                  {...register("apikey")}
                />
                <input
                  type="hidden"
                  value={`${userName} sent a message from landing page`}
                  {...register("subject")}
                />
                <input
                  type="hidden"
                  value="CoffeeChat Landing Page"
                  {...register("from_name")}
                />
                <input
                  type="checkbox"
                  className="hidden"
                  style={{ display: "none" }}
                  {...register("botcheck")}
                />

                {/* Name Field */}
                <div className="mb-4">
                  <label
                    htmlFor="full_name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    placeholder="John Doe"
                    {...register("name", {
                      required: "Full name is required",
                      maxLength: 80,
                    })}
                    className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 
                      bg-white border rounded-md focus:outline-none focus:ring
                      ${
                        errors.name
                          ? "border-red-600 focus:border-red-600 ring-red-100"
                          : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                      }`}
                  />
                  {errors.name && (
                    <div className="mt-1 text-sm text-red-400">
                      {errors.name.message as string}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    {...register("email", {
                      required: "Enter your email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                    className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 
                      bg-white border rounded-md focus:outline-none focus:ring
                      ${
                        errors.email
                          ? "border-red-600 focus:border-red-600 ring-red-100"
                          : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                      }`}
                  />
                  {errors.email && (
                    <div className="mt-1 text-sm text-red-400">
                      {errors.email.message as string}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="mb-3">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    {isSubmitting ? (
                      <svg
                        className="w-5 h-5 mx-auto text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 
                            5.373 0 12h4zm2 5.291A7.962 7.962 0 
                            014 12H0c0 3.042 1.135 5.824 3 
                            7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>

                <p className="text-xs text-center text-gray-400" id="result">
                  <span>
                    Powered by{" "}
                    <a
                      href="https://Web3Forms.com"
                      className="text-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web3Forms
                    </a>
                  </span>
                </p>
              </form>
            )}

            {/* If submitted & success */}
            {isSubmitSuccessful && isSuccess && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg
                  width="60"
                  height="60"
                  className="text-green-400"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50..."
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="py-5 text-xl text-sky-500">
                  You're on!
                </h3>
                <p className="text-gray-700 dark:text-gray-200">{Message}</p>
                <button
                  className="mt-6 text-sky-600 focus:outline-none"
                  onClick={() => {
                    reset();
                    onClose();
                  }}
                >
                  Go back
                </button>
              </div>
            )}

            {/* If submitted & not success */}
            {isSubmitSuccessful && !isSuccess && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 97 97"
                  className="text-red-400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9995 69C43.6205 53.379 52.3786 44.621 
                      67.9995 29M26.8077 29L67.9995 69M48.2189 95..."
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="py-5 text-xl text-red-400">
                  Oops, Something went wrong!
                </h3>
                <p className="text-gray-700 dark:text-gray-200">{Message}</p>
                <button
                  className="mt-6 text-indigo-600 focus:outline-none"
                  onClick={() => {
                    reset();
                    onClose();
                  }}
                >
                  Go back
                </button>
              </div>
            )}
          </div>

          {/* Close Button */}
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium
                         text-blue-900 dark:text-blue-100 bg-blue-100 
                         dark:bg-blue-800 border border-transparent rounded-md
                         hover:bg-blue-200 dark:hover:bg-blue-700
                         focus:outline-none focus-visible:ring-2
                         focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}