import * as Styled from './styles';
import placesEntries from './placesEntries';


const Places = () => {

  
  return (
    <Styled.MainWrapper>
      <Styled.heroContainer>
      
      
        <Styled.Subsection>
          {placesEntries.map(blogPost => (

            <Styled.SubsectionBlog href={blogPost.url} target='_blank'>
              <img src={blogPost.favicon} alt={blogPost.title} />
              <Styled.SubBlogContent>
                <h2>{blogPost.title}</h2>
                <p>{blogPost.price}</p>
                <p>{blogPost.teaserContent}</p>
              </Styled.SubBlogContent>
            </Styled.SubsectionBlog>

          ))}
        </Styled.Subsection>




      </Styled.heroContainer>
    </Styled.MainWrapper>
  );
};


export default Places;