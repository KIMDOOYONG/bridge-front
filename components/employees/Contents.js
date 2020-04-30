import Link from 'next/link'
import styled from 'styled-components'
import Button from '../common/Button'
import { Fragment } from 'react'
import Title from '../common/Title'

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  padding: 20px;
  /* align-self: stretch; */
`

const TableWrapper = styled.div`
  ul {
    list-style: none;
    display: table;
    margin: 0;
    padding: 0;
    border-bottom: 1px dotted #ccc;

    :first-child {
      border-top: 2px solid #ccc;
    }

    :last-child {
      border-bottom: 2px solid #ccc;
    }
  }
  li {
    display: table-cell;
    text-align: left;
    padding: 10px;

    &:nth-child(odd) {
      width: 100px;
      background-color: rgb(239, 239, 239);
    }

    &:nth-child(even) {
      width: 700px;
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  button + button {
    margin-left: 50px;
  }
`

const Contents = ({ employees }) => {
  return (
    <ContentsWrapper>
      <Title>要員情報</Title>
      {employees.map((e, index) => (
        <Fragment key={index}>
          <h3>{e.name}</h3>
          <TableWrapper key={index}>
            <ul>
              <li>年齢</li>
              <li>{e.age}歳</li>
            </ul>
            <ul>
              <li>国籍</li>
              <li>{e.nationality}</li>
            </ul>
            <ul>
              <li>実務経験</li>
              <li>{e.years}</li>
            </ul>
            <ul>
              <li>経験技術</li>
              <li>{e.skill}</li>
            </ul>
            <ul>
              <li>作業経験</li>
              <li>{e.experience}</li>
            </ul>

            {/* 管理者（営業）権限のみ表示 */}
            {/* <ul>
            <li></li>
            <li></li>
          </ul> */}
          </TableWrapper>
          <ButtonWrapper>
            <Button
              large
              primary
              onClick={() => {
                console.log(`${e.name}を提案する`)
              }}
            >
              提案する
            </Button>
            <Button
              large
              onClick={() => {
                console.log(`${e.name}の履歴をみる`)
              }}
            >
              経歴の詳細をみる
            </Button>
          </ButtonWrapper>
        </Fragment>
      ))}
    </ContentsWrapper>
  )
}

export default Contents
