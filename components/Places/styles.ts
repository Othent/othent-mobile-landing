import styled from 'styled-components';
import Button from '../Button'
import { FeatureHeaderText, FeaturesContainer } from '../common';



export const MainWrapper = styled(FeaturesContainer)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  background-size: 40% 85%, 110% 80%;
  background-repeat: no-repeat, no-repeat;
  background-position: -15% 160%, -380% 80%;
  background-image: url('/bkg-squares.svg'), url('bkg-circles.svg');
  margin-top: 0;
`;
export const heroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 2rem;
  padding-left: 2rem;
`;







// sub section blogs
export const Subsection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); 
  grid-gap: 20px;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr); 
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr); 
  }
`;
export const SubsectionBlog = styled.a`
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  h2 {
    font-size: 1rem;
  }
  img {
    border-radius: 8px;
    max-width: 100%;
  }
  p {
    font-size: 0.8rem;
  }
`;
export const SubBlogContent = styled.div `
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem;
  background-color: white;
  gap: 0.5rem;
  .header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    font-size: 0.5rem;
  } 
  .category {
    background: #2375ef;
    color: white;
    padding: 5px;
    font-size: 0.5rem;
  }
`;
export const SubBlogButton = styled(Button)`
  font-size: 0.8rem;
  width: fit-content;
  background: white;
`;










// [id]
export const BookWrapper = styled.div `
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

export const BookingPanel = styled.div `
  width: 90%;
  height: 90vh;
  background-color: white;
  gap: 25px;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`

export const ReviewPlace = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
    border-radius: 8px;
  }
`


export const Book = styled.div `
  background-color: yellow;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`




export const ProgressCircles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Circle = styled.div<{ completed: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ completed }) => completed ? '#FF385C' : 'gray'};
  margin: 0 5px;
`;