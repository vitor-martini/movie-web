import { useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Container } from "./styles";

export function Stars({ rating: initialRating, interactive = false }) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    if (!interactive) {
      return;
    }

    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    if (!interactive) {
      return;
    }

    setHoverRating(0);
  };

  const handleClick = (index) => {
    if (!interactive) {
      return;
    }
    
    if (rating === index) {
      setRating(0); 
    } else {
      setRating(index);
    }
  };

  const renderStars = () => {
    const stars = [];
    const activeRating = hoverRating || rating;

    for (let i = 1; i <= 5; i++) {
      if (activeRating >= i) {
        stars.push(
          <FaStar
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(i)}
          />
        );
      } else if (activeRating >= i - 0.5) {
        stars.push(
          <FaStarHalfAlt
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(i)}
          />
        );
      } else {
        stars.push(
          <FaRegStar
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(i)}
          />
        );
      }
    }

    return stars;
  };

  return (
    <Container>
      {renderStars()}
    </Container>
  );
}
