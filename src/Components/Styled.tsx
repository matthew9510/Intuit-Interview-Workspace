import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 60vw;
`

export const Header = styled.div`
  margin-top: 10px;
`
export const MainContent = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`

export const Greeting = styled.h1`
  color: rgb(53,100,251); 
`

export const TalkingPointsWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Foot = styled.div`
  background-color: rgb(53,100,251);
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 1.5em
`