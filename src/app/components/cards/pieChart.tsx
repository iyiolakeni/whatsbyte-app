'use client';

import Image from "next/image";

export const PieChart = ({value = 0, max = 0}) => {
    const percentage = (value / max) * 100;
    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="border rounded-xl px-7 py-10">
            <div className="flex justify-between mb-3 items-center">
                <h2 className="text-xl font-bold">Question Analysis</h2>
                <p className="text-xl text-blue-500 font-semibold">{value}/{max}</p>
            </div>
            <p className="text-grey-500 text-xl ">
                <strong>You scored {value} question correct out of {max}.</strong> However it still needs some improvements.
            </p>
            <div className="relative w-48 h-48 mx-auto mt-8">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image src={"/assets/dart.png"} className="h-8 w-8" alt="Skill Test" width={32} height={32} />
                </div>
                <svg className="transform rotate-90 w-full h-full" viewBox="0 0 200 200">
                    <circle
                        className="stroke-[#E5E7EB]"
                        strokeWidth="30"
                        fill="transparent"
                        r={radius}
                        cx="100"
                        cy="100"
                    />
                    <circle
                        className="stroke-[#3B82F6]"
                        strokeWidth="30"
                        strokeLinecap="square"
                        fill="transparent"
                        r={radius}
                        cx="100"
                        cy="100"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (percentage / 100) * circumference}
                    />
                </svg>
            </div>
        </div>
    );
};