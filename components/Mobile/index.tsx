import * as Styled from './styles';

const Mobile = () => {
  return (
    <Styled.MainWrapper>
      <Styled.heroContainer>
        <Styled.oMobile>
          <h1>Othent Mobile</h1>
          {/* <p>Othent mobile is currently exclusively supported on the app store and chrome store</p> */}

          <div className='imgContainer'>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img src='/downloadOnAppStore.png' />
            </a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img src='/chromeWebStore.png' />
            </a>
          </div>
        </Styled.oMobile>
      </Styled.heroContainer>
    </Styled.MainWrapper>
  );
};

export default Mobile;
