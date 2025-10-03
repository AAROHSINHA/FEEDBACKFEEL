export const NumberStat = ({
  title,
  value,
}: {
  title: string;
  value: number;
}) => {
  return (
    <div className="flex items-center justify-between text-gray-600 text-sm">
      <span>{title}</span>
      <span className="font-medium text-gray-100">{value}</span>
    </div>
  );
};
