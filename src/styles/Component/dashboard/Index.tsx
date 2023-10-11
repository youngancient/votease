import { CandidateVariant, TACVariant } from "@/animations/animation";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const ElectionStyles = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .second {
    display: grid;
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr));
    margin-top: 1.5rem;
  }
  h1 {
    text-align: center;
  }
  .box {
    width: 150px;
    height: 150px;
    padding: 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d434fe;
    font-weight: 600;
    border-radius: 0.5rem;
  }
  @media (max-width: 998px) {
    padding-bottom: 3rem;
  }
  @media (max-width: 500px) {
    padding: 1rem 1.5rem;
    padding-bottom: 3rem;
  }
  @media (min-width: 998px) {
    gap: 4rem;
    .second {
      grid-gap: 3rem;
    }
  }
`;

export const VotingBoothStyle = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .list{
    display: grid;
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    margin-top: 1.5rem;
  }
  .btn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }
  @media (max-width: 998px) {
    padding-bottom: 3rem;
    .list{
      column-gap: 0.75rem;
    }
  }
  @media (max-width: 500px) {
    padding: 1rem 1.5rem;
    padding-bottom: 3rem;
    .list{
      // column-gap: 0.5rem;
      display: flex;
      flex-direction: column;
    }
    .btn button{
      width: 100%;
    }
  }
  @media (min-width: 998px) {
    gap: 4rem;
    .list {
      grid-gap: 3rem;
      grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
      img
    }
  }
  
`;

export const RadioStyles = styled.div`
  .circle {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid #fff;
  }
`;

interface IClicked {
  $isSelected: boolean;
}
export const PartyCandidate = styled(motion.div).attrs<IClicked>(() => ({
  initial: "initial",
  whileInView: "final",
  variants: CandidateVariant,
}))`
.party{
  position: absolute;
  right: 0.5rem;
  bottom: 0rem;
  color: #d434fe;
  font-weight: 700;
  font-size: 1.2rem;
  background: #140D60;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 0.25rem;
}
a{
  width: fit-content;
}
.img{
  position: relative;
  img{
    width: 100%;
  }
}
display: flex
flex-direction: column;
background: #140D60;
cursor: pointer;
border-radius: 0.5rem;
.img img{
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
outline: 2px solid transparent; /* Set a transparent outline */
transition: outline 0.3s;
&:hover{
  outline: 2px solid #d434fe; 
}
.below{
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  gap: 1rem;
}
.xx{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 .name{
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
 }
 .name:hover{
  text-decoration: underline;
 }
  ${(props) =>
    props.$isSelected &&
    css`
      outline: 2px solid #d434fe;
    `}
    
`;

export const TACStyles = styled(motion.div).attrs(()=>({
  initial : "initial",
  animate : "final",
  exit : "exit",
  variants : TACVariant
}))`
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
  .notelist {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .sec {
    margin-top: 1rem;
  }
  .buttons {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    justify-content: right;
    button {
      background: linear-gradient(270deg, #903aff 0%, #fe34b9 100%);
      height: 50px;
      width: 150px;
      color: #fff;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .cancel{
      background: red;
    }
  }
  .inner {
    border: 2px solid #d434fe;
    padding: 1rem;
    ul {
      list-style: inside;
      list-style-position: inside;
      li {
        padding-left: 0.5rem;
      }
    }
  }
  @media (max-width: 998px) {
    .inner {
      width: 70%;
      padding: 1.5rem;
    }
  }
  @media (max-width: 500px) {
    .inner {
      width: 90%;
      padding: 1rem;
    }
    .buttons{
      justify-content: space-between;
    }
  }
  @media (min-width: 998px) {
    .inner {
      width: 50%;
      padding: 1.8rem;
      padding-bottom: 2rem;
    }
  }
`;


export const HasVotedStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5rem;
  height: 60vh;
`