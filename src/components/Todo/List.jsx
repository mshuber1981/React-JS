import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";

const StyledList = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  transition: var(--transition);
  border-radius: var(--radius);
  text-transform: capitalize;

  .title {
    margin-bottom: 0;
    letter-spacing: 2px;
    transition: var(--transition);
    max-width: 75%;
    overflow-wrap: break-word;
  }

  .edit-btn,
  .delete-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 1.25rem;
    margin: 0 0.25rem;
    transition: var(--transition);
  }

  .edit-btn {
    color: var(--clr-green-light);

    &:hover {
      color: var(--clr-green-dark);
    }
  }

  .delete-btn {
    color: var(--clr-red-light);

    &:hover {
      color: var(--clr-red-dark);
    }
  }

  &:hover {
    color: var(--clr-grey-5);
    background: var(--clr-grey-10);

    .title {
      color: var(--clr-grey-5);
    }
  }
`;

export default function List({ items, removeItem, editItem }) {
  return (
    <>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <StyledList key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </StyledList>
        );
      })}
    </>
  );
}
