import React from 'react'

interface ButtonProps {
  name: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?(): void;
  redirect?: string;
}

export const Button: React.FC<ButtonProps> = ({ name, className, type, onClick }) => {
  return (
    <button onClick={onClick} type={ type } className={`${className} bg-orange-300 p-2 rounded-lg hover:bg-slate-600 transition-all hover:text-white`}>
      { name }
    </button>
  )
}
