import styled from "styled-components";

export const Header = styled.header`
  background-color: #212529;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    width: 1200px;

    ul {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-around;

      li {
        font-size: 20px;
        display: flex;
        gap: 10px;
        align-items: center;

        svg {
          width: 24px;
          fill: white;
        }

        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
`;