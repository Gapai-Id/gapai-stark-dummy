'use client'

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputFieldProps {
  label: string;
  type?: 'text' | 'tel' | 'password' | 'email';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  className?: string;
}

export function InputField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  helperText,
  disabled = false,
  className = ''
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={className}>
      <label className="block text-[13px] font-medium leading-[18px] text-[var(--text-primary)] mb-1.5">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full h-[52px] px-4 bg-white border-[1.5px] rounded-[10px] text-[14px] leading-[22px] transition-colors ${
            error
              ? 'border-[var(--semantic-error-500)] focus:border-[var(--semantic-error-500)]'
              : 'border-[var(--border-default)] focus:border-[var(--border-brand)]'
          } focus:outline-none disabled:opacity-50 placeholder:text-[var(--text-muted)]`}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-[12px] leading-[18px] text-[var(--text-error)] mt-1">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p className="text-[12px] leading-[18px] text-[var(--text-muted)] mt-1">
          {helperText}
        </p>
      )}
    </div>
  );
}
