import Link from 'next/link'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  background: palevioletred;
  padding: 1rem;
  justify-content: space-between;
  /* min-width: 1024px; */

  /* position: fixed;
  width: 100%;
  height: 30px; */

  a {
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
  }
`

const Header = () => (
  <HeaderWrapper>
    <Link href="/">
      <a>
        <img src="/bridge_logo.png" alt="ロゴ" width="150" />
      </a>
    </Link>
    <Link href="/employee">
      <a>社員管理</a>
    </Link>
    <Link href="/business/situation">
      <a>営業管理</a>
    </Link>
    <Link href="/login">
      <a>ログイン</a>
    </Link>
  </HeaderWrapper>
)

export default Header
