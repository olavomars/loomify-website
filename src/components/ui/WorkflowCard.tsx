import React from 'react';

export default function WorkflowCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className='w-full max-w-[400px] h-52 border-primary border-2 rounded-3xl flex items-center'>
        <div className='p-8'>
          <h4 className='text-2xl font-bold text-primary mb-3'>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
