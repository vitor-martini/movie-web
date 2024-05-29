import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Container } from "./styles";

export function Stars({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      stars.push(<FaStar key={i} />);
      rating -= 1;
    } else if (rating === 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
      rating -= 0.5;
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }


  return (
    <Container>
      {stars}
    </Container>
  );
}
