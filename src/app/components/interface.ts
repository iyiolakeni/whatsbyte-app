export interface SyllabusItem {
    title: string;
    progress: number;
    color: string;
    textColor?:string;
  }

  export interface ChartData {
    x: number,
    y: number,
  }

  export interface ChartDataProps{
    data: ChartData[];
    percentile: number;
  }

  export interface Card {
    icon: string;
    value: number | string;
    label: string;
    isLastItem?: boolean;
  }
  export interface ModalDetails{
    isOpen: boolean;
    onClose: () => void;
    currentRank: number;
    currentPercentile: number;
    currentScore: number;
    onUpdate: (currenRank: number, currentPercentile: number, currentScore: number) => void;
  }