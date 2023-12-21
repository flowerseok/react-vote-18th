import React from 'react';

interface VoteItemProps {
  team: string;
  name: string;
}

const VoteItem = ({ team, name }: VoteItemProps) => {
  return (
    <div className="bg-white border-2 border-[#3B82F6] text-[#1E40AF] p-4 rounded-lg flex flex-col justify-center items-center mx-auto">
      <div>{team}</div>
      <div>{name}</div>
    </div>
  );
};

export default VoteItem;
