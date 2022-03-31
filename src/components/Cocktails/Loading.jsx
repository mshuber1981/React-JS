import styled, { keyframes } from "styled-components";

// Animations
const load1 = keyframes`
     0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

const StyledLoading = styled.div`
  &,
  &:before,
  &:after {
    background: transparent;
    animation: ${load1} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  color: var(--clr-primary-5);
  text-indent: -9999em;
  margin: 88px auto;
  margin-top: 20rem;
  position: relative;
  font-size: 3rem;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    content: "";
  }

  &:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    left: 1.5em;
  }
`;

export default function Loading() {
  return <StyledLoading />;
}
