import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as Styled from './styles';
import placesEntries from './placesEntries';

const BlogPostPage = () => {
  const router = useRouter();
  const url = router.query.id;
  const place = placesEntries.find((entry) => entry.url === url);

  const [currentStep, setCurrentStep] = useState(0);
  const [stepsCompleted, setStepsCompleted] = useState({
    details: false,
    dates: false,
    pay: false,
  });


  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };


  const markStepComplete = (step) => {
    setStepsCompleted((prevSteps) => ({ ...prevSteps, [step]: true }));
  };

  return (
    <Styled.BookWrapper>
      {place ? (
        <Styled.BookingPanel>
          <Styled.ReviewPlace>
            <img src={place.favicon} />
            <h2>{place.title}</h2>
            <p>{place.price}</p>
            <p>{place.teaserContent}</p>
          </Styled.ReviewPlace>

          <Styled.Book>
            {currentStep === 0 && (
              <div>
                <button onClick={() => {
                  markStepComplete('details');
                  nextStep();
                }}>
                  Details
                </button>
              </div>
            )}

            {currentStep === 1 && (
              <div>
                <button onClick={() => {
                  markStepComplete('dates');
                  nextStep();
                }}>
                  Dates
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <button onClick={() => {
                  markStepComplete('pay');
                  nextStep();
                }}>
                  Pay
                </button>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <button onClick={() => {
                  markStepComplete('done');
                  nextStep();
                }}>
                  Continue browsing
                </button>
              </div>
            )}


            <Styled.ProgressCircles>
                <Styled.Circle completed={stepsCompleted.details} />
                <Styled.Circle completed={stepsCompleted.dates} />
                <Styled.Circle completed={stepsCompleted.pay} />
            </Styled.ProgressCircles>
          </Styled.Book>

        </Styled.BookingPanel>
      ) : (
        <p>Blog post not found.</p>
      )}
    </Styled.BookWrapper>
  );
};

export default BlogPostPage;

