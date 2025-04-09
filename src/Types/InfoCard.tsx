import React from 'react';

export interface InfoCardProps<T> {
  data: T;
  onClick: (data: T) => void;
  render: (data: T) => React.ReactNode;
}

export function InfoCard<T>({ data, onClick, render }: InfoCardProps<T>) {
  return (
    <div
      style={{
        border: '1px solid gray',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        cursor: 'pointer',
      }}
      onClick={() => onClick(data)}
    >
      {render(data)}
    </div>
  );
}
