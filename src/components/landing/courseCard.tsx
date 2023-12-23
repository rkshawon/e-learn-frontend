"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
}

function CourseCard({ img, tag, title, desc, label }: CourseCardProps) {
  const router = useRouter();
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow hover:shadow-md transition duration-300 ease-in-out">
      <div className="h-64 overflow-hidden">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1]"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <p className="text-blue mb-2 font-normal text-gray-500">{tag}</p>
        </div>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <h5 className="mb-2 normal-case">{title}</h5>
        </a>
        <p className="mb-6 font-normal text-gray-500">{desc}</p>
        <Button onClick={() => router.push("/courses/1")}>{label}</Button>
      </div>
    </div>
  );
}

export default CourseCard;
