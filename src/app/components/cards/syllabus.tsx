import Image from "next/image";
import { Card as CardInterface, SyllabusItem } from "../interface";


export function Syllabus() {
  const syllabusItems: SyllabusItem[] = [
    { title: "HTML Tools, Forms, History", progress: 80, color: "bg-blue-500", textColor: "text-blue-500" },
    { title: "Tags & References in HTML", progress: 60, color: "bg-orange-500", textColor: "text-orange-500" },
    { title: "Tables & References in HTML", progress: 24, color: "bg-red-500", textColor: "text-red-500" },
    { title: "Tables & CSS Basics", progress: 96, color: "bg-green-500", textColor: "text-green-500" },
  ];

  return (
    <div className="space-y-11 md:space-y-5 container border rounded-xl px-7 py-10">
        <h2 className="text-2xl md:text-lg font-bold">Syllabus Wise Analysis</h2>
      {syllabusItems.map((menu, index) => {
        const clampedProgress = Math.min(100, Math.max(0, menu.progress));
        
        return (
          <div key={index} className="container">
            <p className="text-2xl md:text-lg font-semi-bold text-gray-500 mb-4">{menu.title}</p>
            <div className="flex gap-9 justify-center items-center">
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div 
                  className={`h-4 rounded-full transition-all duration-500 ease-in-out ${menu.color}`}
                  style={{ width: `${clampedProgress}%`}}
                >
                </div>
              </div>
              <p className={`${menu.textColor} font-bold text-2xl md:text-lg`}>
                {clampedProgress}%
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const Card = ({ icon, value, label, isLastItem }: CardInterface) => (
  <div className={`flex items-center gap-3 md:gap-3 p-4 ${!isLastItem ? 'border-b md:border-b-0 md:border-r' : ''}`}>
    <Image 
      className="rounded-full p-5 md:p-3 h-16 w-16 md:h-10 md:w-10 bg-gray-100" 
      src={icon} 
      alt={label}
      width={50} 
      height={50}
      priority
    />
    <div className="flex-1 mr-3 md:mr-3">
      <p className="text-xl md:text-md font-bold">{value}</p>
      <p className="text-lg md:text-sm text-gray-500 uppercase">{label}</p>
    </div>
  </div>
);