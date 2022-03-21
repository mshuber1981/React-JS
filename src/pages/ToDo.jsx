import { useState, useEffect } from "react";
import styled from "styled-components";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import List from "../components/Todo/List";
import Alert from "../components/Todo/Alert";

const StyledToDo = styled.main`
  .section-center {
    border-radius: var(--radius);
    transition: var(--transition);
    margin: 5rem 0;
    padding: 2rem;
    max-width: 900px;
    min-height: 450px;
    background: ${(props) =>
      props.theme.name === "light" ? "var(--clr-grey-9)" : "var(--clr-grey-1)"};
    color: ${(props) =>
      props.theme.name === "light"
        ? "var(--clr-grey-1)"
        : "var(--clr-grey-10)"};
    box-shadow: ${(props) =>
      props.theme.name === "light"
        ? "var(--light-shadow)"
        : "var(--lw-shadow)"};

    .form {
      .alert {
        margin-bottom: 1rem;
        height: 1.25rem;
        display: grid;
        align-items: center;
        text-align: center;
        font-size: 0.7rem;
        border-radius: 0.25rem;
        letter-spacing: var(--spacing);
        text-transform: capitalize;
      }

      .alert-danger {
        color: #721c24;
        background: #f8d7da;
      }
      .alert-success {
        color: #155724;
        background: #d4edda;
      }

      h3 {
        margin-bottom: 1.5rem;
        text-align: center;
      }

      .form-control {
        display: flex;
        justify-content: center;

        .input {
          padding: 0.25rem;
          padding-left: 1rem;
          background: var(--clr-grey-10);
          border-top-left-radius: var(--radius);
          border-bottom-left-radius: var(--radius);
          border-color: transparent;
          font-size: 1rem;
          flex: 1 0 auto;
          color: var(--clr-grey-5);
        }

        .submit-btn {
          background: var(--clr-primary-8);
          border-color: transparent;
          flex: 0 0 5rem;
          display: grid;
          align-items: center;
          padding: 0.25rem;
          text-transform: capitalize;
          letter-spacing: 2px;
          border-top-right-radius: var(--radius);
          border-bottom-right-radius: var(--radius);
          cursor: pointer;
          content: var(--clr-primary-5);
          transition: var(--transition);
          font-size: 0.85rem;

          &:hover {
            background: var(--clr-primary-5);
            color: var(--clr-white);
          }
        }
      }
    }

    .container {
      margin-top: 2rem;

      .clear-btn {
        text-transform: capitalize;
        width: 10rem;
        height: 1.5rem;
        display: grid;
        align-items: center;
        background: transparent;
        border-color: transparent;
        color: var(--clr-red-light);
        margin: 0 auto;
        font-size: 0.85rem;
        letter-spacing: var(--spacing);
        cursor: pointer;
        transition: var(--transition);
        margin-top: 1.25rem;

        &:hover {
          color: var(--clr-red-dark);
        }
      }
    }
  }
`;

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

export default function ToDo() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <NavBar />
      <SideBar />
      <StyledToDo>
        <section className="section-center">
          <form className="form" onSubmit={handleSubmit}>
            {alert.show && (
              <Alert {...alert} removeAlert={showAlert} list={list} />
            )}
            <h3>To Do</h3>
            <div className="form-control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit" className="submit-btn">
                {isEditing ? "edit" : "submit"}
              </button>
            </div>
          </form>
          {list.length > 0 && (
            <div className="container">
              <List items={list} removeItem={removeItem} editItem={editItem} />
              <button className="clear-btn" onClick={clearList}>
                clear items
              </button>
            </div>
          )}
        </section>
      </StyledToDo>
    </>
  );
}
