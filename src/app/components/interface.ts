export interface SyllabusItem {
    title: string;
    progress: number;
    color: string;
    textColor?:string;
  }

  export interface ChartData {
    name: string,
          uv: number,
          pv: number,
          amt: number,
  }

  export interface ChartDataProps{
    data: ChartData[];
  }