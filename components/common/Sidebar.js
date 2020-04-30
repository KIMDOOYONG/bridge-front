import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(239, 239, 239);
  width: 150px;
  min-width: 150px;
  padding: 15px;
`

const StyledA = styled.a`
  color: black;
  font-size: 1em;
  font-weight: ${(props) => (props.selected ? '600' : '0')};
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.7;
      pointer-events: none;
    `}

  & + & {
    margin-top: 10px;
  }
`

const subMenu = {
  business: [
    {
      key: 1,
      label: '営業状況',
      href: '/business/situation',
    },
    {
      key: 2,
      label: '要員情報',
      href: '/business/employees',
    },
    {
      key: 3,
      label: '提案',
      href: '/business/suggestion',
    },
  ],
}

const Sidebar = () => {
  const router = useRouter()
  const pathname = router.pathname
  const isHome = pathname !== '/'
  const query = router.query

  const subMenuKey = pathname.slice(1, pathname.lastIndexOf('/'))
  // console.log(router)
  // console.log(subMenu[subMenuKey])

  return (
    <>
      {isHome && (
        <SidebarWrapper>
          {subMenu[subMenuKey].map((menu) => (
            <Link href={menu.href} key={menu.key}>
              <StyledA
                key={menu.key}
                selected={pathname === menu.href}
                disabled={pathname === menu.href}
              >
                {menu.label}
              </StyledA>
            </Link>
          ))}
        </SidebarWrapper>
      )}
    </>
  )
}

export default Sidebar
