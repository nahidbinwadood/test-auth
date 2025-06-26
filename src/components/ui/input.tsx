import { cn } from '@/app/lib/utils';
import { Eye, EyeClosed } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  type: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  type,
  placeholder,
  className = '',
  id,
  ...props
}) => {
  const inputId = id;

  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          `w-full relative px-3 py-2 border rounded-lg  text-black shadow-sm placeholder-gray-400
            outline-none text-base shadow-x transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
           focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:ring-[1px]
          ${error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'}`,
          className
        )}
      >
        <input
          placeholder={placeholder}
          type={showPass ? 'text' : type}
          className="w-full focus:outline-none"
          id={inputId}
          {...props}
        />

        {/* show /hide icon */}
        {type == 'password' && (
          <button
            onClick={() => setShowPass((prev) => !prev)}
            type="button"
            className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer outline-none  "
          >
            {showPass ? (
              <Eye className="size-5" />
            ) : (
              <EyeClosed className="size-5" />
            )}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};
