import { useState, useEffect } from "react";
import styled from "styled-components";
// Data
import { reviews } from "../data";
// Icons
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const StyledSlider = styled.main`
  .title {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;

      span {
        font-size: 0.85em;
        color: var(--clr-primary-5);
        margin-right: 1rem;
        font-weight: 700;
      }
    }
  }

  .section-center {
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;

    .activeSlide {
      opacity: 1;
      transform: translateX(0);
    }

    .lastSlide {
      transform: translateX(-100%);
    }

    .nextSlide {
      transform: translateX(100%);
    }

    article {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: var(--transition);

      .person-img {
        border-radius: 50%;
        margin-bottom: 1rem;
        margin-left: auto;
        margin-right: auto;
        width: 150px;
        height: 150px;
        object-fit: cover;
        border: 2px solid
          ${(props) =>
            props.theme.name === "light"
              ? "var(--clr-grey-1)"
              : "var(--clr-grey-10)"};
      }

      h4 {
        text-transform: uppercase;
        color: var(--clr-primary-5);
        margin-bottom: 0.25rem;
      }

      .title {
        text-transform: capitalize;
        margin-bottom: 0.75rem;
      }

      .text {
        max-width: 35em;
        margin: 0 auto;
        margin-top: 2rem;
        line-height: 2;
        color: var(--clr-grey-5);
      }

      .icon {
        font-size: 3rem;
        margin-top: 1rem;
        color: var(--clr-primary-5);
      }
    }

    .prev,
    .next {
      position: absolute;
      top: 200px;
      transform: translateY(-50%);
      background: ${(props) =>
        props.theme.name === "light"
          ? "var(--clr-grey-1)"
          : "var(--clr-grey-9)"};
      color: ${(props) =>
        props.theme.name === "light"
          ? "var(--clr-grey-10)"
          : "var(--clr-grey-1)"};
      width: 1.25rem;
      height: 1.25rem;
      display: grid;
      place-items: center;
      border-color: transparent;
      font-size: 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }

    .prev:hover,
    .next:hover {
      background: var(--clr-primary-5);
    }

    .prev {
      left: 0;
    }

    .next {
      right: 0;
    }
  }

  @media (min-width: 800px) {
    .text {
      max-width: 45em;
    }
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }
`;

export default function Slider() {
  const [index, setIndex] = useState(0);

  function nextSlide() {
    setIndex(function (oldIndex) {
      let index = oldIndex + 1;
      if (index > reviews.length - 1) {
        index = 0;
      }
      return index;
    });
  }

  function prevSlide() {
    setIndex(function (oldIndex) {
      let index = oldIndex - 1;
      if (index < 0) {
        index = reviews.length - 1;
      }
      return index;
    });
  }

  useEffect(
    function () {
      let slider = setInterval(function () {
        setIndex(function (oldIndex) {
          let index = oldIndex + 1;
          if (index > reviews.length - 1) {
            index = 0;
          }
          return index;
        });
      }, 5000);
      return () => clearInterval(slider);
    },
    [index]
  );

  return (
    <>
      <NavBar />
      <SideBar />
      <StyledSlider>
        <section className="section">
          <div className="title">
            <h2>
              <span>/</span>Slider
            </h2>
          </div>
          <div className="section-center">
            {reviews.map((person, personIndex) => {
              const { id, image, name, job, text } = person;

              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === reviews.length - 1)
              ) {
                position = "lastSlide";
              }

              return (
                <article className={position} key={id}>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{job}</p>
                  <p className="text">{text}</p>
                  <FaQuoteRight className="icon" />
                </article>
              );
            })}
            <button className="prev" onClick={prevSlide}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={nextSlide}>
              <FiChevronRight />
            </button>
          </div>
        </section>
      </StyledSlider>
    </>
  );
}
