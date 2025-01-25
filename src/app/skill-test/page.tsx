'use client';

import Image from "next/image";
import { Card, Syllabus } from "../components/cards/syllabus";
import { PieChart } from "../components/cards/pieChart";
import { Chart } from "../components/cards/lineChart";
import { ChartData } from "../components/interface";
import { useState } from "react";
import { Modal } from "../components/cards/modal";

export default function SkillTest() {
  const [openModal, setOpenModal] = useState(false);
    const [rank, setRank] = useState(2);
    const [percentile, setPercentile] = useState(90);
    const [score, setScore] = useState(10);

    const updateDetails = ( currentRank: number, currentPercentile: number, currentScore: number ) => {
      setRank(currentRank);
      setPercentile(currentPercentile);
      setScore(currentScore);
    }

    const card = [
      { icon: '/assets/rank.png', value: rank, label: 'Your rank' },
      { icon: '/assets/clipboard.png', value: `${percentile} %`, label: 'Percentile' },
      { icon: '/assets/approve.png', value: `${score} / 15`, label: 'Correct Answers' }
    ];

    const data: ChartData[] =  [
      { x: 0, y: 0 },
      { x: 25, y: 25 },
      { x: 50, y: 50 },
      { x: 75, y: 25 },
      { x: 100, y: 10 }
  ];
    

  return (
    <div className="p-4">
      <h1 className="text-xl mb-8 text-gray-500">Skill Test</h1>
      
<div className="flex flex-col lg:flex-row gap-10">
<div className="xl:space-y-12 space-y-14 md:space-y-8 sm:space-y-4 2xl:space-y-10 w-full lg:w-3/5">
      <div className="flex justify-between  border rounded-xl w-full p-5">
        <div className="flex gap-3 justify-center items-center">
        <Image src={"/assets/html.png"} className="h-30 w-30 md:h-10 md:w-10" alt="Skill Test" width={40} height={40} />
        <div className="space-y-2">
            <h2 className="text-lg font-bold">Hyper Text Markup Language</h2>
            <p className="text-xl md:text-sm text-gray-500">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
        </div>
        <button className="bg-blue-900 shadow hover:bg-blue-700 text-white font-bold rounded-xl px-6 h-12" onClick={() => setOpenModal(true)}>Update</button>
      </div>
      <div className="container border rounded-xl p-3 w-full">
        <h2 className="text-lg font-bold">Quick Statistics</h2>
        <div className="grid grid-cols-3 md:grid-col-3 w-full">
  {card.map((stat, index) => (
    <Card
      key={stat.label}
      icon={stat.icon}
      value={stat.value}
      label={stat.label}
      isLastItem={index === card.length - 1}
    />
  ))}
        </div>
      </div>
      <Chart data={data} percentile={percentile} />
</div>
<div className="space-y-8 w-full lg:w-2/5">
      <Syllabus />
      <PieChart value={score} max={15} />
</div>
</div>

<Modal
isOpen={openModal}
onClose={() => setOpenModal(false)}
currentRank={rank}
currentPercentile={percentile}
currentScore={score}
onUpdate={updateDetails}
/>

    </div>
  );
} 