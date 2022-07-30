import styled from "styled-components";
//what the box for the items will look like
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 4px solid grey;
  border-radius: 10px;
  height: 100%;

  img {
    max-height: 250px;
    max-width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
  .cta_button {
    background: black;
    color: white;
  }
`;