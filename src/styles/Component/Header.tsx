import styled from "styled-components";

export const HeaderStyles = styled.header`
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  padding: 2rem;
  @media (max-width: 998px) {
    .d-links {
      display: none;
    }
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    padding: 1rem 1.5rem;
  }
  @media (min-width: 998px) {
    .d-links {
      width: 60%;
      justify-content: space-between;
      display: flex;
      align-items: center;
      .x {
        display: flex;
        gap: 2rem;
      }
    }
    .tiles {
      display: none;
    }
    .logo {
      width: 40%;
    }
  }
`;

export const LogoStyles = styled.h3`
  font-size: 2rem;
  strong {
    color: #d434fe;
  }
  @media (max-width: 998px) {
    font-size: 1.8rem;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const LogoOnly = styled.div`
  padding-left: 4rem;
  padding-top: 2rem;
  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-top: 2rem;
  }
`;

export const ForX = styled.div`
  border-radius: 1.4375rem;
  border: 1px solid #903aff;
  width: 1.4375rem;
  height: 1.4375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const MobileSlideIn = styled.div`
  background: rgba(21, 14, 40, 0.53);
  height: 100vh;
  position: fixed;
  z-index: 20;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  width: 100vw;
  .main {
    border-radius: 0.5rem;
    border: 0.5px solid rgba(255, 255, 255, 0.04);
    background: #150e28;
    padding: 2.12rem;
    .mobile-links,
    .second {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .second {
      gap: 3rem;
      margin-top: 4rem;
      padding-bottom: 4rem;
    }
    .cancel {
      display: flex;
      justify-content: right;
    }
  }
  .nothing {
    flex-grow: 1;
  }
  @media (min-width: 767px) {
    display: none;
  }
`;
