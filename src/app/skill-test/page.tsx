import Image from "next/image";
import { Syllabus } from "../components/cards/syllabus";
import { PieChart } from "../components/cards/pieChart";
import { Chart } from "../components/cards/lineChart";
import { ChartData } from "../components/interface";

export default function SkillTest() {
    const rank: number = 2;
    const percentile: number = 90;
    const score: number = 10;

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
<div className="space-y-8">
      <div className="flex justify-between  border rounded-xl w-full p-5">
        <div className="flex gap-4">
        <Image src={"/assets/html.png"} className="h-30 w-30" alt="Skill Test" width={50} height={50} />
        <div className="space-y-2">
            <h2 className="text-lg font-bold">Hyper Text Markup Language</h2>
            <p className="text-xl text-gray-500">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
        </div>
        <button className="bg-blue-900 shadow hover:bg-blue-700 text-white font-bold rounded-xl px-6 h-12">Update</button>
      </div>
      <div className="container border rounded-xl p-5 w-max">
        <h2 className="text-lg font-bold">Quick Statistics</h2>
        <div className="flex gap-7">
            <div className="flex items-center gap-7 border-r">
                <Image className="rounded-full p-5 h-20 w-20 bg-gray-100" src={"/assets/rank.png"} alt="Skill Test" width={50} height={50} />
                <div className="container mr-7">
                <p className="text-2xl font-bold">{rank}</p>
                <p className="text-xl text-gray-500 uppercase">Your rank</p>
                </div>
            </div>
            <div className="flex items-center gap-7">
                <Image className="rounded-full p-5 h-20 w-20 bg-gray-100" src={"/assets/clipboard.png"} alt="Skill Test" width={20} height={20} />
                <div className="container mr-7">
                <p className="text-2xl font-bold">{percentile} %</p>
                <p className="text-xl text-gray-500 uppercase">Percentile</p>
                </div>
            </div>
            <div className="flex items-center gap-7">
                <Image className="rounded-full p-5 h-20 w-20 bg-gray-100" src={"/assets/approve.png"} alt="Skill Test" width={50} height={50} />
                <div className="container mr-7">
                <p className="text-2xl font-bold">{score} / 15</p>
                <p className="text-xl text-gray-500 uppercase">Correct Answers</p>
                </div>
            </div>
        </div>
      </div>
      <Chart data={data} />
</div>
<div className="space-y-8 container">
      <Syllabus />
      <PieChart value={10} max={15} />
</div>
</div>

    </div>
  );
} 