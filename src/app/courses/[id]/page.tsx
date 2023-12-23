"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/landing/courseCard";

const COURSES = [
  {
    img: "/image/blogs/blog4.svg",
    tag: "Beginner • 25 Classes • 200 Students",
    title: "Unlock the Web Foundation",
    label: "FROM $99",
    desc: "Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
  },
  {
    img: "/image/blogs/blog3.svg",
    tag: "Medium • 10 Classes • 150 Students",
    title: "Craft Websites That Adapt",
    label: "FROM $199",
    desc: "Our Responsive Design course teaches you the art of creating websites that seamlessly adapt to different devices and screen sizes.",
  },
  {
    img: "/image/blogs/blog2.svg",
    tag: "Medium • 23 Classes • 590 Students",
    title: "Master the Power of React",
    label: "FROM $499",
    desc: "Take your frontend development to the next level with our React Development course. Learn how to build interactive, dynamic web applications.",
  },
  {
    img: "/image/blogs/blog5.svg",
    tag: "Beginner • 35 Classes • 400 Students",
    title: "Frontend Essentials Course",
    label: "FROM $49",
    desc: "For aspiring web developers, the Frontend Essentials course is a must. Dive into the core technologies - HTML, CSS, and JavaScript.",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Medium • 10 Classes • 150 Students",
    title: "Streamline Your CSS Workflow",
    label: "FROM $99",
    desc: "Our Tailwind CSS Introduction course teaches you how to use this utility-first CSS framework to streamline your workflow, saving you time.",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "Medium • 33 Classes • 690 Students",
    title: "Master Backend Development",
    label: "FROM $299",
    desc: "Dream of becoming a backend developer? Our intensive one-month Node.js course is your fast track to achieving that goal.",
  },
];

const CourseDetailsPage = () => {
  const router = useRouter();

  // Sample course data
  const data = {
    img: "/image/blogs/blog4.svg",
    tag: "Beginner • 25 Classes • 200 Students",
    title: "Unlock the Web Foundation",
    label: "FROM $99",
    desc: "A practical programming course to dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
  };

  return (
    <div className="container mx-auto py-8">
      {/* Back button */}
      {/* <div className="mb-4">
        <Link href="/courses">
          <p className="text-primary hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm10.25.75a.75.75 0 0 0 0-1.5H6.56l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L6.56 8.75h4.69Z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        </Link>
      </div> */}

      {/* Course details */}
      <div className="flex flex-col lg:flex-row">
        {/* Left: Course Image */}
        <div className="lg:w-4/12">
          <Image
            src={data.img}
            alt={data.title}
            width={568}
            height={568}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right: Course Details */}
        <div className="lg:w-1/2 lg:pl-8">
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          <p className="text-gray-600 mb-4">{data.tag}</p>
          <p className="text-xl font-semibold text-primary">{data.label}</p>

          <p className="text-gray-800 my-4">{data.desc}</p>

          <Button>Enroll Now</Button>
          {/* Add more details or sections here if needed */}
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-xl font-semibold">Description</h1>
        <div className="container mx-auto py-8">
          <p className=" mb-4">
            If youre an office worker, student, administrator, or just want to
            become more productive with your computer, programming will allow
            you to write code that can automate tedious tasks. This course
            follows the popular (and free!) book, Automate the Boring Stuff with
            Python.
          </p>

          <p className=" mb-4">
            Automate the Boring Stuff with Python was written for people who
            want to get up to speed writing small programs that do practical
            tasks as soon as possible. You dont need to know sorting algorithms
            or object-oriented programming, so this course skips all the
            computer science and concentrates on writing code that gets stuff
            done.
          </p>

          <p className=" mb-4">
            This course is for complete beginners and covers the popular Python
            programming language. Youll learn basic concepts as well as:
          </p>

          <ul className="list-disc pl-6">
            <li>Web scraping</li>
            <li>Parsing PDFs and Excel spreadsheets</li>
            <li>Automating the keyboard and mouse</li>
            <li>Sending emails and texts</li>
            <li>And several other practical topics</li>
          </ul>

          <p className=" mt-4">
            By the end of this course, youll be able to write code that not only
            dramatically increases your productivity but also be able to list
            this fun and creative skill on your resume.
          </p>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <h2 className="text-xl font-bold mb-4">Requirements</h2>

        <ul className="list-disc pl-6">
          <li className=" mb-2">No programming experience is required.</li>
          <li className=" mb-2">
            Aspiring software engineers who want to add skills to their
            programming toolbelt.
          </li>
          <li className=" mb-2">
            Downloading and installing Python is covered at the start of the
            course.
          </li>
        </ul>
      </div>
      <div className="container mx-auto my-8">
        <h2 className="text-xl font-bold mb-4">Who this course is for:</h2>

        <ul className="list-disc pl-6">
          <li className=" mb-2">
            Office workers, students, small/home business workers, and
            administrators who want to improve their productivity.
          </li>
          <li className=" mb-2">
            Aspiring software engineers who want to add skills to their
            programming toolbelt.
          </li>
          <li className=" mb-2">
            Computer users who have heard the learn to code message but want
            practical reasons to learn programming.
          </li>
          <li className=" mb-2">
            Experienced Python software engineers can skip the first half of the
            course but may find the later parts that cover various third-party
            modules helpful.
          </li>
          <li className=" mb-2">
            While this course doesnt cover specific devops tools, it would be
            useful for QA, devops, and admins who want to learn scripting in
            Python.
          </li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold mb-4">Latest course</h1>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </div>
  );
};

export default CourseDetailsPage;
