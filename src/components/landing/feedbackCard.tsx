import Image from "next/image";
import React from "react";
import Rating from "../ui/rating";

interface FeedbackCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function FeedbackCard({
  img,
  feedback,
  client,
  title,
}: FeedbackCardProps) {
  return (
    <div className=" p-4 rounded-lg items-start text-left">
      <div className="mb-2">
        {/* <Avatar src={img} className="mb-2" alt={client} size="xl" /> */}
        <Image
          src={img}
          className="mb-2"
          alt={client}
          height={100}
          width={100}
        />
      </div>
      <h6 className="text-blue-gray">{client}</h6>
      <p className="text-blue-gray mt-1 mb-5 block font-normal">{title}</p>
      <p className="mb-4 font-normal text-gray-500">&quot;{feedback}&quot;</p>
      {/* Assuming the Rating component is not provided */}
      <div className="flex items-center">
        <Rating rate={4} />
      </div>
    </div>
  );
}

export default FeedbackCard;
