import CourseCard from "@/components/landing/courseCard";
import React from "react";
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
function page() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
      {COURSES.map((props, idx) => (
        <CourseCard key={idx} {...props} />
      ))}
    </div>
  );
}

export default page;
