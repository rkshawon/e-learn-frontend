import * as React from "react";

interface RatingProps {
  rate: number;
}

const Rating: React.FC<RatingProps> = ({ rate }) => {
  const stars = Array.from({ length: rate }, (_, index) => (
    <span key={index} className="text-3xl text-yellow-500 mr-1">
      ★
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

export default Rating;
