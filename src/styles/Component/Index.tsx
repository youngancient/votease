import styled from "styled-components";

export const MainPageStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  .btn button {
    border-radius: 10px;
    background: linear-gradient(270deg, #903aff 0%, #fe34b9 100%);
    height: 50px;
    width: 200px;
    color: #fff;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .flag {
    position: relative;
  }
  h1 {
    color: #fff;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  strong {
    color: #d434fe;
  }
  .h1 {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .btn {
    margin-top: 1.5rem;
  }
  @media (max-width: 998px) {
    flex-direction: column;
    justify-content: center;
    .text {
      text-align: center;
    }
    .flag img {
      width: 100%;
      height: 497px;
    }
    h1 {
      font-size: 2.5rem;
    }
    .abs{
        left: 37%;
    }
    padding-bottom: 3rem;
  }
  @media (max-width: 500px) {
    gap: 3rem;
    h1 {
      font-size: 2rem;
    }
    .flag img {
      width: 100%;
      height: 497px;
    }
  }
  @media (min-width: 998px) {
    padding: 2rem 0 3rem 0rem;
    gap: 4rem;
    h1 {
      font-size: 3rem;
    }
    .flag,.text{
        width: 50%;
    }
    .flag img{
        width: 100%;
    }
  }
`;

