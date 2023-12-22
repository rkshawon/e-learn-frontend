import CoursesCategories from "@/components/landing/courseCategory";
import Events from "@/components/landing/events";
import ExploreCourses from "@/components/landing/exploreCourses";
import Hero from "@/components/landing/hero";
import OutImpressiveStats from "@/components/landing/outImpressiveStats";
import StudentsFeedback from "@/components/landing/studentFeedback";
import TESTIMONIAL from "@/components/landing/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <OutImpressiveStats />
      <CoursesCategories />
      <ExploreCourses />
      <Events />
      <StudentsFeedback />
      {/* <TrustedCompany /> */}
    </>
  );
}
