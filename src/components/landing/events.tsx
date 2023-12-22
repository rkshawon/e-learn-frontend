import React from "react";
import EventCard from "./eventCard";

const EVENTS = [
  {
    img: "/image/blogs/blog-1.svg",
    title: "Future of Web Development: Trends and Innovations",
    desc: "Discover the latest trends and innovations shaping the future of web development.",
    buttonLabel: "register for free",
  },
  {
    img: "/image/blogs/blog2.svg",
    title: "WebDev Pro Code-a-Thon: Build a Responsive Website",
    desc: "Participants will have 48 hours to create a responsive website from scratch using HTML, CSS, and JavaScript.",
    buttonLabel: "register for free",
  },
  {
    img: "/image/blogs/blog3.svg",
    title: "Ask the Experts: Frontend Web Development",
    desc: "Join our live Q&A session with our experienced instructors. Get answers to your queries, insights into best practices.",
    buttonLabel: "get ticket",
  },
  {
    img: "/image/blogs/blog4.svg",
    title: "Web Accessibility: Building Inclusive Websites",
    desc: "Industry experts will discuss the importance of inclusive design and share strategies for creating websites.",
    buttonLabel: "get ticket",
  },
];

function Events() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="text-blue-gray text-4xl font-semibold mb-4">
          Upcoming Events
        </h2>
        <p className="mx-auto w-full px-4 font-normal text-gray-500 lg:w-6/12">
          Join our web development events designed to share insights, trends,
          and real-world experiences.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {EVENTS.map((props, idx) => (
          <EventCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Events;
