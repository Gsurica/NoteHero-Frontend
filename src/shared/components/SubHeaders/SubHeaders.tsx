import React from 'react'

interface SubHeadersProps {
  title: string;
  phrase: string
}

export const SubHeaders: React.FC<SubHeadersProps> = ({ title, phrase }) => {
  return (
    <div className="flex items-center justify-center flex-col mt-4">
      <h1 className="text-2xl bg-orange-300 p-2">{ title }</h1>
      <p>{ phrase }</p>
    </div>
  )
}

// Note Hero!
// Your friend to your hours!
