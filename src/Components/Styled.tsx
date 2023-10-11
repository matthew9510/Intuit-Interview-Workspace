import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

// export const Logo = styled.img`
//   width: 100%;
//   height: auto;
//   max-width: 60vw;
//`

export const Header = styled.div`
  max-width: 100%;
  margin-top: 10px;
  width: 100%;
`

export const NavBar = styled.div`
  max-width: 100%;
  display: flex;
    justify-content: flex-start; /* Align items to the left */
    align-items: center;
    background-color: #fff; /* Set your desired background color */
    padding: 1% 1%; /* Adjust padding as needed */
`

export const NavBarImage = styled.img`
  max-width: 10%;
    height: auto;
    margin-right: 1%; /* Add some spacing between the images */
`
export const NavBarMintImage = styled.img`
  max-width: 5%;
    height: auto;
  margin-right: 1%; /* Add some spacing between the images */
`
export const MainContent = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
  padding: 10px 20px; /* Adjust padding as needed */
`

export const Greeting = styled.h1`
  color: rgb(53,100,251); 
  font-size: 3vw;
  max-font-size: 20px;
`

export const TalkingPointsWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
`

export  const TalkingPointsHeading = styled.h2`
  font-size: 2vw;
  max-font-size: 10px;
  margin-bottom: 1%;
`
export  const TalkingPointsUl = styled.ul`
  padding-left: 2%`

export  const TalkingPoint = styled.li`
  font-size: 2vw;
`

export const Foot = styled.div`
  background-color: rgb(53,100,251);
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size:2vw; 
`

export const CountryListWrapper = styled.div`
  height: 80vh
`

export const StyledCountryList = styled.ul`
  overflow-y: auto;
  height: 100%;
  list-style-type: none;
`

export const StyledCountryListItem = styled.li`
  margin: 10px;
  border: 1px solid black;
`