import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e React Avancado escrito ao lado"
    />
    <S.Title>react avancado</S.Title>
    <S.Description>
      Typescript, ReactJs, NextJs e Styled Components
    </S.Description>
    <S.Illustraction
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com codigo"
    />
  </S.Wrapper>
)

export default Main
