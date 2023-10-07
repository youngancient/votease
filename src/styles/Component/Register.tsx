import styled from "styled-components";

export const RegisterpageStyles = styled.div`
  display: flex;
  align-items: center;
  .second {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .text p {
    margin-top: 0.5rem;
  }
  h1 {
    color: #d434fe;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .form-ele {
    display: flex;
    width: fit-content;
    flex-direction: column;
    gap: 0.75rem;
  }
  .form-ele input {
    border-radius: 0.25rem;
    padding: 0.5rem;
    height: 50px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  /* Hide the number input buttons for Webkit browsers (Chrome, Safari) */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none; /* Remove the default appearance */
    appearance: none; /* Remove the default appearance (for Firefox) */
    margin: 0; /* Remove any default margin */
  }

  /* Hide the number input buttons for Firefox */
  input[type="number"] {
    -moz-appearance: textfield; /* Restore the input to a text input appearance (for Firefox) */
  }
  input[type="password"] {
    font-size: 1.5rem;
  }
  input::placeholder {
    color: rgba(255, 255, 255, 0.25);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .btn button {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    // border-radius: 1.25rem;
    background: linear-gradient(270deg, #903aff 0%, #fe34b9 100%);
    height: 50px;
    width: 200px;
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .form-ele .label {
    color: #fff;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .error {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #dc143c;
    margin-top: 0.5rem;
  }
  @media (max-width: 998px) {
    flex-direction: column;
    justify-content: center;
    .img img {
      width: 345px;
      height: 497px;
    }
    padding-bottom: 3rem;
    .form-ele input {
      width: 300px;
    }
    h1 {
      font-size: 2.5rem;
    }
    .btn button {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    .btn button {
      width: 100%;
    }
  }
  @media (min-width: 998px) {
    padding: 2rem 0 3rem 0rem;
    .second,
    .img {
      width: 50%;
    }
    gap: 4rem;
    .form-ele input {
      width: 300px;
      height: 50px;
      flex-shrink: 0;
    }
    .btn button {
      width: 300px;
    }
    h1 {
      font-size: 3rem;
    }
  }
`;

export const PageLinkStyle = styled.p`
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  strong {
    color: #d434fe;
    text-decoration: underline;
  }
`;

export const LoginPageStyles = styled(RegisterpageStyles)`
  flex-direction: row-reverse;
  gap: 0;
  .second {
    display: flex;
    align-items: center;
  }
  .xxx {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .input {
    position: relative;
  }
  @media (max-width: 998px) {
    flex-direction: column;
  }
  @media (min-width: 998px) {
  }
`;

export const HidePwdStyles = styled.div`
  position: absolute;
  right: 0.25rem;
  top: 0.85rem;
  cursor: pointer;
  svg {
    scale: 0.75;
  }
`;

export const CheckEmailStyles = styled.div`
  position: fixed;
  z-index: 5;
  background: rgba(21, 14, 40, 0.93);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .inner {
    border-radius: 5px;
    border: 1px solid #d434fe;
    background: rgba(255, 255, 255, 0.01);
    padding: 2rem;
    .btn{
      button{
        width: 100%;
      }
      margin-top: 2rem;
    }
  }
  @media (max-width: 500px){
    padding: 1rem;
    .inner {
      padding: 1rem;
      padding-bottom: 2rem;
    }
  }
  @media (min-width: 998px) {
    .inner{
      width: 40%;
      padding: 2rem;
      padding-bottom: 4rem;
    }
  }
`;
