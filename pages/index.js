import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

// const BackgroundImage = styled.div `
//   background-image: url(${db.bg});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover; 
//   color: ${({ theme }) => theme.colors.secondary};
//   flex: 1;
// `;

export const QuizContainer = styled.div `
  margin: auto 10%;
  max-width: 350px;
  padding-top: 45px;
  width: 100%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={ db.bg }>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Título</h1>
          </Widget.Header>
          <Widget.Content>

            <p>Descriçāo para o widget!</p>
          </Widget.Content>
        </Widget>
        
        <Widget>
          <Widget.Content>
            <h2>Quiz da Galera :)</h2>
            <p>Descriçāo para o Quiz!</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://www.meubank.com"/>
    </QuizBackground>
  )
}
