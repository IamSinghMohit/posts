import {BsStar,BsStarFill,BsStarHalf} from "react-icons/bs";

export default function Rating({ value, className }) {
  const roundedValue = (Math.round(value * 2) / 2); 
  const filledStars = Array(Math.floor(roundedValue)).fill(<BsStarFill/>); // create array of filled stars
  const hasHalfStar = roundedValue % 1 !== 0; // check if the rounded value has a half star
  const unfilledStars = Array(Math.floor(5 - roundedValue)).fill(<BsStar/> ); // create array of unfilled stars

  return (
    <div className={className}>
      {filledStars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      {hasHalfStar && <BsStarHalf/>}{/* render the half star */}
      {unfilledStars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}
