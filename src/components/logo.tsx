"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <rect width="40" height="40" rx="8" fill="url(#gradient)" />
        <path
          d="M20 8C14.48 8 10 12.48 10 18C10 25 20 32 20 32C20 32 30 25 30 18C30 12.48 25.52 8 20 8ZM20 21C18.34 21 17 19.66 17 18C17 16.34 18.34 15 20 15C21.66 15 23 16.34 23 18C23 19.66 21.66 21 20 21Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0ea5e9" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 dark:from-blue-400 dark:to-blue-600">
        AASTU Map
      </span>
    </div>
  );
} 