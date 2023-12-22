import Image from "next/image";
import React from "react";

function TESTIMONIAL() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <div className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
          <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
            <Image
              width={768}
              height={768}
              src="/image/blogs/blog6.svg"
              alt="testimonial image"
              className="w-full h-full scale-110 object-cover"
            />
          </div>
          <div className="col-span-2 w-full">
            <h6 className="text-blue mb-4">ONLINE COURSE</h6>
            <h3 className="text-blue-gray mb-4 font-bold">
              Full-Stack Web Development
            </h3>
            <p className="mb-1 w-full text-gray-500 font-normal">
              Become a versatile developer by combining frontend and backend
              skills. Build complete web applications from start to finish.
            </p>
            <div className="grid mb-4">
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 bg-gray-500 rounded-full" />
                <p className="w-full text-gray-500 font-normal">
                  International course collection in 10 languages
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 bg-gray-500 rounded-full" />
                <p className="w-full text-gray-500 font-normal">
                  Certified include
                </p>
              </div>
            </div>
            <div className="flex items-center mt-8 gap-4">
              {/* <img
                src="/image/avatar3.jpg"
                alt="spotify"
                className="h-10 w-10 rounded-full"
              /> */}
              {/* <Avatar
                  variant="circular"
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  size="md"
                /> */}
              <Image
                width={768}
                height={768}
                src="/image/avatar3.jpg"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
              <div>
                <h6 className="text-blue-gray mb-0.5">Otto Gonzalez</h6>
                <p className="text-gray-500 font-normal">
                  Senior Designer @company.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TESTIMONIAL;
