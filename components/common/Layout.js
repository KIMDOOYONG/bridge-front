import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 100%;

  @media (max-width: 768px) {
    width: 768px;
  }
`

const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`

const Layout = ({ children }) => {
  return (
    <MainWrapper>
      <Header />
      <SubWrapper>
        <Sidebar />
        {children}
      </SubWrapper>
    </MainWrapper>
  )
}
export default Layout
