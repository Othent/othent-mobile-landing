import styled from 'styled-components';
import Button from '../Button'
import { FeatureHeaderText, FeaturesContainer } from '../common';



export const MainWrapper = styled(FeaturesContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  flex-direction: column;
  background-size: 40% 85%, 110% 80%;
  background-repeat: no-repeat, no-repeat;
  background-position: -15% 160%, -380% 80%;
  margin-top: 0;
`;
export const heroContainer = styled.div`
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  h1 {
    width: 100%;
    font-size: 5em;
    color: #FF385C;
  }
  p {
    padding-top: 25px;
  }

`;







