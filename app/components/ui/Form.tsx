"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        {label && (
          <label className="mb-2 text-sm font-medium text-gray-700 font-inter">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={twMerge(
            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-inter",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500 font-inter">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        {label && (
          <label className="mb-2 text-sm font-medium text-gray-700 font-inter">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={twMerge(
            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-inter min-h-[100px]",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500 font-inter">{error}</p>
        )}
      </div>
    );
  }
);
TextArea.displayName = "TextArea";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        {label && (
          <label className="mb-2 text-sm font-medium text-gray-700 font-inter">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={twMerge(
            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-inter",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-500 font-inter">{error}</p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

interface FileInputProps extends Omit<InputProps, "type"> {
  onFileChange?: (files: FileList) => void;
  accept?: string;
  multiple?: boolean;
}

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ label, error, onFileChange, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        {label && (
          <label className="mb-2 text-sm font-medium text-gray-700 font-inter">
            {label}
          </label>
        )}
        <div
          className={twMerge(
            "w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-gray-50",
            error && "border-red-500 hover:border-red-600",
            className
          )}
        >
          <input
            ref={ref}
            type="file"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && onFileChange) {
                onFileChange(e.target.files);
              }
            }}
            {...props}
          />
          <div className="flex flex-col items-center">
            <svg
              className="w-8 h-8 text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <p className="text-sm text-gray-600 font-inter">
              Cliquez ou glissez-déposez vos fichiers ici
            </p>
          </div>
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500 font-inter">{error}</p>
        )}
      </div>
    );
  }
);
FileInput.displayName = "FileInput";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", isLoading, className, children, ...props }, ref) => {
    const baseStyles = "px-6 py-3 rounded-full font-inter transition-all";
    const variants = {
      primary: "bg-black text-white hover:bg-gray-800",
      secondary: "bg-white text-black hover:bg-gray-100",
      outline:
        "border-2 border-black text-black hover:bg-black hover:text-white",
    };

    return (
      <button
        ref={ref}
        className={twMerge(
          baseStyles,
          variants[variant],
          isLoading && "opacity-50 cursor-not-allowed",
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
