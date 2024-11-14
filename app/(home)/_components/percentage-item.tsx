import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  value: number;
}

const PercentageItem = ({ icon, title, value }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      {/* Icone */}
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-white bg-opacity-[10%] p-2">{icon}</div>
        <p className="text-sm font-semibold text-muted-foreground">{title}</p>
      </div>
      <p className="text-sm font-bold text-white">{value}%</p>
    </div>
  );
};

export default PercentageItem;
