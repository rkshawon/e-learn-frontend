import Image from "next/image";

interface CategoryCardProps {
  img: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

function CategoryCard({ img, title, desc, icon: Icon }: CategoryCardProps) {
  return (
    <div className="relative grid min-h-[12rem] w-full overflow-hidden">
      <Image
        width={768}
        height={768}
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 h-full w-full bg-black/70" />
      <div className="relative flex flex-col justify-between p-4 text-white">
        <Icon className="h-8 w-8" />
        <div>
          <h5 className="mb-1">{title}</h5>
          <p className="text-xs font-bold opacity-50">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
