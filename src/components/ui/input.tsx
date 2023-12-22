import * as React from "react";
import { cn } from "@/lib/utils";
import { IoIosSearch } from "react-icons/io";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "search";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <div className="relative flex-grow">
        {" "}
        {/* Add flex-grow class to ensure full width */}
        {variant === "search" && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {/* Adjust the width of the search icon container */}
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-5.2-5.2"
              />
              <circle cx="10" cy="10" r="8" />
            </svg>
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            {
              "file:border-0 file:bg-transparent file:text-sm file:font-medium":
                variant === "search",
              "pl-10 rounded-2xl": variant === "search",
            },
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
