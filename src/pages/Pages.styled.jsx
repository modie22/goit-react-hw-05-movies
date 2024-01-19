import styled from 'styled-components';
import {Link} from "react-router-dom";

export const SectionStyle = styled.section`
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`

export const StyledLink = styled(Link)`
  color: red;
  font-weight: 700;
  padding: 6px;
  border: 1px solid red;
width: 100px;
  &.active {
    color: orange;
  }
`;

export const WrapStyle = styled.div`
display: flex;
gap: 20px;
`;

export const CardStyle = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 400px;
`;

export const AddListStyle = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
font-weight: 500;
text-decoration: underline;
`;


//PageNotFound
export const NotFoundDivStyle = styled.div`
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`
export const NotFoundTitle = styled.h2`
  font-size: 3rem;
`;

export const NotFoundDescr = styled.p`
  max-width: 700px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.5;
`;

export const NotFoundHomeBackLink = styled(Link)`
  padding: 12px 32px;
  font-size: 1.5rem;
  color: white;
  border-radius: 3px;
  background-color: black;

`;
