import { useState } from "react";
import styled from "styled-components";
import { InnerButton } from "../styledComponents";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { reviews } from "../../data";

const StyledReview = styled.article`
  margin-top: 1rem;
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
  border: 0.15rem solid var(--clr-primary-5);
  transition: var(--transition);
  background: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-1)" : "var(--clr-grey-10)"};
  color: ${(props) =>
    props.theme.name === "light" ? "var(--clr-grey-10)" : "var(--clr-grey-1)"};
  box-shadow: ${(props) =>
    props.theme.name === "light" ? "var(--light-shadow)" : "var(--lw-shadow)"};

  .img-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;

    .person-img {
      width: 100%;
      display: block;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      position: relative;
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: var(--clr-primary-5);
      position: absolute;
      top: -0.25rem;
      right: -0.5rem;
      border-radius: 50%;
    }
  }

  .author {
    margin-bottom: 0.25rem;
  }
  .job {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: var(--clr-primary-5);
    font-size: 0.85rem;
  }
  .info {
    margin-bottom: 0.75rem;
    color: ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-10)"
        : "var(--clr-grey-1)"};
  }

  .prev-btn,
  .next-btn {
    color: var(--clr-primary-7);
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
  }

  .prev-btn:hover,
  .next-btn:hover {
    color: var(--clr-primary-5);
  }

  .random-btn {
    margin-top: 0.5rem;
  }
`;

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  function checkNumber(number) {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }

    return number;
  }

  function nextPerson() {
    setIndex(function (index) {
      let newIndex = index + 1;

      return checkNumber(newIndex);
    });
  }

  function prevPerson() {
    setIndex(function (index) {
      let newIndex = index - 1;

      return checkNumber(newIndex);
    });
  }

  function randomPerson() {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber));
  }

  return (
    <StyledReview>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <InnerButton className="random-btn" onClick={randomPerson}>
        surprise me
      </InnerButton>
    </StyledReview>
  );
}
