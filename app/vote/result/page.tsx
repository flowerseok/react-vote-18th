import React from 'react';
import VoteResultItem from '@/components/vote/VoteResult';
import HoveringButton from '@/components/common/HoveringButton';

const VoteResultsPage = () => {
  const voteResults = [
    { number: "1", name: "송지석", teamname: "SNIFF", votes: "3" },
    { number: "2", name: "오대균", teamname: "SNIFF", votes: "3" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold text-[#1E40AF] mb-8">파트장 투표결과</h1>
      <div className="grid grid-cols-2 gap-4">
        {voteResults.map((result, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <VoteResultItem
              number={result.number}
              name={result.name}
              teamname={result.teamname}
              votes={result.votes}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <HoveringButton buttonStyle="w-[100px] h-[60px] mt-4 md:w-[200px]">
          돌아가기
        </HoveringButton>
      </div>
    </div>
  );
}

export default VoteResultsPage;
