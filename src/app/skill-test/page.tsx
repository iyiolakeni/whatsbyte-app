'use client';

import Image from "next/image";
import { Card, Syllabus } from "../components/cards/syllabus";
import { PieChart } from "../components/cards/pieChart";
import { Chart } from "../components/cards/lineChart";
import { ChartData } from "../components/interface";
import { useState } from "react";
import { Modal } from "../components/cards/modal";

export default function SkillTest() {
  const [openModal, setOpenModal] = useState(true);
    // const rank: number = 2;
    // const percentile: number = 90;
    // const score: number = 10;
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

    const data: ChartData[] = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

  return (
    <div className="p-4">
      <h1 className="text-xl mb-8 text-gray-500">Skill Test</h1>
      
<div className="flex gap-10">
<div className="space-y-8 w-3/5">
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
        <div className="flex flex-col md:flex-row w-full">
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
<div className="space-y-8 w-2/5">
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