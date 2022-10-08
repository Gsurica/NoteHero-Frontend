import React from 'react';

interface TitleProps {
  title: string;
  phrase: string;
}

export const Title: React.FC<TitleProps> = ({ title, phrase }) => {
  return (
    <div className="flex items-center justify-center flex-col bg-slate-200">
      <h1>{ title }</h1>
      <div>
        <p>{ phrase }</p>
      </div>
    </div>
  )
}
