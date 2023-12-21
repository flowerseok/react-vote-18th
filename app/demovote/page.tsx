import React from 'react';
import VoteItem from '@/components/vote/VoteItem';
import HoveringButton from '@/components/common/HoveringButton';
const Page = () => {
  const voteItems = [
    { team: "SNIFF", description: "송지석" },
    { team: "SNIFF", description: "오대균" },
    { team: "SNIFF", description: "송지석" },
    { team: "SNIFF", description: "오대균" },
    { team: "SNIFF", description: "송지석" },
 
  ];

  return (
    <div p-8>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">데모데이 투표</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {voteItems.map((item, index) => (
          <VoteItem key={index} team={item.team} name={item.description} />
        ))}
      </div>
    </div>
    <div className="mt-8 flex justify-center">
        <HoveringButton buttonStyle="w-[100px] h-[60px] mt-4 md:w-[200px]">
          투표하기
        </HoveringButton>
    </div>
    </div>
  );
};

export default Page;
