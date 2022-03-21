import { useState, useEffect } from "react";
import styled from "styled-components";
// Icons
import { FaAngleDoubleRight } from "react-icons/fa";
// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Loading, Title } from "../components/styledComponents";

// const url = "https://course-api.com/react-tabs-project";
const url = "https://mshuber1981.github.io/React-JS/tabs.json";

const StyledTabs = styled.main`
  text-align: center;
  .jobs-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
    text-align: left;
    margin-top: 4rem;

    .btn-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 4rem;
      flex-wrap: wrap;

      .job-btn {
        background: transparent;
        border-color: transparent;
        text-transform: capitalize;
        font-size: 1.25rem;
        letter-spacing: var(--spacing);
        margin: 0.5rem 0.5rem;
        transition: var(--transition);
        cursor: pointer;
        padding: 0.25rem 0;
        line-height: 1;
        outline-color: ${(props) =>
          props.theme.name === "light"
            ? "var(--clr-grey-1)"
            : "var(--clr-grey-10)"};
        color: ${(props) =>
          props.theme.name === "light"
            ? "var(--clr-grey-1)"
            : "var(--clr-grey-10)"};

        &:hover {
          color: var(--clr-primary-5);
          box-shadow: 0 2px var(--clr-primary-5);
        }
      }

      .active-btn {
        color: var(--clr-primary-5);
        box-shadow: 0 2px var(--clr-primary-5);
      }
    }
  }

  .job-info {
    h3 {
      font-weight: 400;
    }

    h4 {
      text-transform: uppercase;
      color: var(--clr-grey-5);
      background: var(--clr-grey-9);
      display: inline-block;
      padding: 0.375rem 0.75rem;
      border-radius: var(--radius);
    }

    .job-date {
      letter-spacing: var(--spacing);
    }

    .job-desc {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
      margin-bottom: 1.25rem;

      p {
        margin-bottom: 0;
        color: ${(props) =>
          props.theme.name === "light"
            ? "var(--clr-grey-1)"
            : "var(--clr-grey-10)"};
      }
      .job-icon {
        color: var(--clr-primary-5);
      }
    }
  }

  @media screen and (min-width: 992px) {
    .jobs-center {
      width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;

      .btn-container {
        flex-direction: column;
        justify-content: flex-start;

        .job-btn {
          margin-bottom: 1rem;

          &:hover {
            box-shadow: -2px 0 var(--clr-primary-5);
          }
        }

        .active-btn {
          box-shadow: -2px 0 var(--clr-primary-5);
        }
      }
    }
  }
`;

export default function Tabs() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async function () {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(url).then(function (res) {
        if (!res.ok) {
          throw Error(res.status);
        }
        return res;
      });
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);
    } catch (error) {
      const errorMessage = `Error: ${error.message}`;
      setError(errorMessage);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => fetchJobs(), []);

  if (loading) {
    return (
      <>
        <NavBar />
        <SideBar />
        <main>
          <Loading />
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar />
        <SideBar />
        <StyledTabs>
          <h2>{error}</h2>
          <p>Check fetch url: {url}</p>
        </StyledTabs>
      </>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <>
      <NavBar />
      <SideBar />
      <StyledTabs>
        <section className="section">
          <Title>
            <h2>Tabs</h2>
            <div className="underline"></div>
          </Title>
          <div className="jobs-center">
            {/* btn container */}
            <div className="btn-container">
              {jobs.map((item, index) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => setValue(index)}
                    className={`job-btn ${index === value && "active-btn"}`}
                  >
                    {item.company}
                  </button>
                );
              })}
            </div>
            {/* job info */}
            <article className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{duty}</p>
                  </div>
                );
              })}
            </article>
          </div>
        </section>
      </StyledTabs>
    </>
  );
}
