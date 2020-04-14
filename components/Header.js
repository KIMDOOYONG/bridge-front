import Link from 'next/link'
import styled from 'styled-components'

const Box = styled.div`
  background: gray;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  /* border-color: black white black white;
  border-style: solid solid solid solid;
  border-width: 1px 0px 1px 0px; */

  a {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & + button {
    margin-left: 1rem;
  } */
`

const Header = () => (
  <Box>
    <Link href="/">
      <a>
        <img src="/bridge_logo.png" alt="ロゴ" width="150" />
      </a>
    </Link>
    <Link href="/employee">
      <a>社員管理</a>
    </Link>
    <Link href="/business">
      <a>営業管理</a>
    </Link>
    <Button>ログイン</Button>
  </Box>
)

export default Header
