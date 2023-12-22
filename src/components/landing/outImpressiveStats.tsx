import {
  DocumentTextIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";
import StatsCard from "./statsCard";

const STATS = [
  {
    icon: DocumentTextIcon,
    count: "10,200+",
    title: "Students",
  },
  {
    icon: PlayCircleIcon,
    count: "50+",
    title: "Instructors",
  },
  {
    icon: PencilSquareIcon,
    count: "10+",
    title: "Courses",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Support",
  },
];

function OutImpressiveStats() {
  return (
    <section className="px-8 pt-60">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <h2 className="text-blue-gray mb-2 text-4xl font-semibold">
            Explore Our Impressive Stats
          </h2>
          <p className="mx-auto mb-24 w-full text-gray-500 lg:w-5/12">
            We take pride in our commitment to excellence and our dedication to
            your success.
          </p>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OutImpressiveStats;
