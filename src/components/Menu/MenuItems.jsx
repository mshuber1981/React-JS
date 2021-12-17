import styled from "styled-components";

const StyledMenuItems = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;

  .menu-item {
    display: grid;
    gap: 1rem 2rem;
    max-width: 25rem;

    .photo {
      object-fit: cover;
      height: 200px;
      width: 100%;
      border: 0.25rem solid var(--clr-gold);
      border-radius: var(--radius);
      display: block;
    }

    header {
      display: flex;
      justify-content: space-between;
      border-bottom: 0.5px dotted var(--clr-grey-5);

      h4 {
        margin-bottom: 0.5rem;
      }
      .price {
        color: var(--clr-gold);
      }
    }

    .item-text {
      margin-bottom: 0;
      padding-top: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    .menu-item {
      grid-template-columns: 225px 1fr;
      gap: 0 1.25rem;
      max-width: 40rem;

      .photo {
        height: 175px;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;

    .photo {
      height: 150px;
    }
  }
`;

export default function MenuItems({ items }) {
  return (
    <StyledMenuItems>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div>
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </StyledMenuItems>
  );
}
