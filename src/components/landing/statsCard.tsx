interface StatsCardProps {
  icon: React.ElementType;
  count: string;
  title: string;
}

function StatsCard({ icon: Icon, count, title }: StatsCardProps) {
  return (
    <div className="bg-white rounded-md p-6 flex flex-col justify-center items-center">
      <Icon className="h-7 w-7 text-gray-900" />
      <h1 className="text-blue-gray mb-2 mt-4 text-5xl font-semibold">
        {count}
      </h1>
      <h6 className="mb-2 font-normal text-blue-gray-500">{title}</h6>
    </div>
  );
}

export default StatsCard;
