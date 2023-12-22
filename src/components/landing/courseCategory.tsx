import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import CategoryCard from "./categoryCard";
import { Button } from "../ui/button";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Frontend Web Development",
    desc: "300 Courses",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Backend Web Development",
    desc: "200 Courses",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Web Security & Performance",
    desc: "240 Courses",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "Full-Stack Web Development",
    desc: "100 Courses",
  },
];

function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <h2 className="my-3 text-blue-gray font-semibold text-4xl">
          Courses Categories
        </h2>
        <p className="text-gray-500 lg:w-6/12">
          A comprehensive selection of courses designed to empower you with the
          skills you need to thrive in the dynamic world of web development.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="relative grid h-full w-full place-items-center overflow-hidden text-center bg-gray-900">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <div className="relative w-full">
            <p className="text-xs font-bold opacity-50 text-white">
              HTML, CSS & Javascript
            </p>
            <h4 className="mt-9 text-white">Web Development Intro</h4>
            <p className="mt-4 mb-14 font-normal opacity-50 text-white">
              Ready to start your web development journey?
            </p>
            <Button className="bg-white hover:bg-gray-200 text-black">
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;
