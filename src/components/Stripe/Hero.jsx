// Context
import { useStripeContext } from "./stripeContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Media
import phoneImg from "../../media/stripe/phone.svg";
import hero from "../../media/stripe/hero.svg";

const StyledHero = styled.main`
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 65%;
    top: 0;
    left: 0;
    background: url(${hero});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }

  position: relative;
  min-height: 100vh;
  margin-top: -5rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  .hero-center {
    width: 90vw;
    max-width: var(--max-width);
    display: grid;
    align-items: center;

    .hero-info {
      h1 {
        max-width: 500px;
        margin-bottom: 2rem;
      }

      p {
        max-width: 35em;
        line-height: 1.8;
      }

      .btn {
        font-size: 1rem;
        padding: 0.25rem 0.75rem;
        border-radius: var(--radius);
        cursor: pointer;
        transition: var(--transition);

        &:hover {
          background: var(--clr-grey-5);
        }
      }
    }

    .hero-images {
      display: none;
    }
  }

  @media screen and (min-width: 800px) {
    &::before {
      background-size: contain;
      height: 100%;
    }

    .hero-center {
      grid-template-columns: 2fr 1fr;

      .hero-info {
        h1 {
          font-size: 3rem;
        }

        p {
          font-size: 1.25rem;
        }
      }

      .hero-images {
        display: block;
        justify-self: center;

        .phone-img {
          width: 12rem;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .hero-center {
      grid-template-columns: 2fr 1fr;
      align-items: end;
      padding-bottom: 12vh;

      .hero-info {
        h1 {
          max-width: 100%;
          font-size: 5.5rem;
        }
      }

      .hero-images {
        align-self: end;

        .phone-img {
          width: 15rem;
        }
      }
    }
  }

  @media screen and (min-width: 1400px) {
    .hero-center {
      padding-bottom: 20vh;

      .phone-img {
        width: 17rem;
      }
    }
  }
`;

export default function Hero() {
  const { closeSubmenu } = useStripeContext();

  return (
    <StyledHero className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <Link to={"/"}>
            <button className="btn">Back to React Projects</button>
          </Link>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </StyledHero>
  );
}
