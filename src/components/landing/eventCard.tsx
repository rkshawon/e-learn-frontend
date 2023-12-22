import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface EventCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
}

function EventCard({ img, title, desc, buttonLabel }: EventCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow hover:shadow-md transition duration-300 ease-in-out">
      <div className="h-48 overflow-hidden">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="text-xl font-bold mb-2">{title}</h5>
        </a>
        <p className="mb-6 text-gray-500">{desc}</p>
        <Button variant="secondary">{buttonLabel}</Button>
      </div>
    </div>
  );
}

export default EventCard;
