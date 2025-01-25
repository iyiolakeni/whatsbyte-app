import { SyllabusItem } from "../interface";


export function Syllabus() {
  const syllabusItems: SyllabusItem[] = [
    { title: "HTML Tools, Forms, History", progress: 80, color: "bg-blue-500", textColor: "text-blue-500" },
    { title: "Tags & References in HTML", progress: 60, color: "bg-orange-500", textColor: "text-orange-500" },
    { title: "Tables & References in HTML", progress: 24, color: "bg-red-500", textColor: "text-red-500" },
    { title: "Tables & CSS Basics", progress: 96, color: "bg-green-500" }
  ];

  return (
    <div className="space-y-11 container border rounded-xl px-7 py-10">
        <h2 className="text-2xl font-bold">Syllabus Wise Analysis</h2>
      {syllabusItems.map((menu, index) => {
        const clampedProgress = Math.min(100, Math.max(0, menu.progress));
        
        return (
          <div key={index} className="container">
            <p className="text-2xl font-semi-bold text-gray-500 mb-4">{menu.title}</p>
            <div className="flex gap-9 justify-center items-center">
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div 
                  className={`h-4 rounded-full transition-all duration-500 ease-in-out ${menu.color}`}
                  style={{ width: `${clampedProgress}%`}}
                >
                </div>
              </div>
              <p className={`${menu.textColor} font-bold text-2xl`}>
                {clampedProgress}%
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}