import styled, { css } from 'styled-components'
import Title from '../common/Title'
import Input from '../common/Input'
import Button from '../common/Button'

const ContentsWrapper = styled.div`
  flex: 1;
  min-width: 800px;
  padding: 20px;
`

const TableWrapper = styled.div`
  margin: 20px;

  ul {
    list-style: none;
    display: table;
    margin: 0;
    padding: 5px;

    text-align: center;

    &:nth-child(odd) {
      background-color: whitesmoke;
    }
    &:last-child {
      border-radius: 0px 0px 15px 15px;
    }
    &:hover {
      background-color: snow;
    }

    &:first-child {
      color: white;
      text-align: center;
      background-color: skyblue;

      border-radius: 15px 15px 0px 0px;
    }
  }

  li {
    display: table-cell;
    padding: 5px;

    &:nth-child(1) {
      width: 90px;
    }
    &:nth-child(2) {
      width: 90px;
    }
    &:nth-child(3) {
      width: 60px;
    }
    &:nth-child(4) {
      width: 150px;
    }
    &:nth-child(5) {
      width: 120px;
    }
    &:nth-child(6) {
      width: 90px;
    }
    &:nth-child(7) {
      width: 80px;
    }
    &:nth-child(8) {
      width: 80px;
    }
  }
`

const StyledStatus = styled.div`
  border-radius: 30px;
  font-size: 0.85rem;

  background-color: red;
  color: white;
`

const SearchContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Img = styled.img`
  width: 30px;
  cursor: pointer;

  /* &:hover {
    background-color: gray;
  } */
`

const Contents = ({ list }) => {
  return (
    <ContentsWrapper>
      <Title>営業状況</Title>
      <SearchContainer>
        <Input vertical>名前</Input>
        <Input vertical>年</Input>
        <Input vertical>月</Input>
        <Input vertical>会社</Input>
        <Input vertical>ステータス</Input>
        <Img className="btn-grad" src="/icons8-search.svg" alt="search" />
      </SearchContainer>
      <TableWrapper>
        <ul>
          <li>名前</li>
          <li>年</li>
          <li>月</li>
          <li>会社</li>
          <li>単価</li>
          <li>ステータス</li>
          <li></li>
          <li></li>
        </ul>
        {list &&
          list.map((item) => (
            <ul key={item.id}>
              <li>{item.name}</li>
              <li>{`${item.year}年`}</li>
              <li>{`${item.month}月`}</li>
              <li>{item.company}</li>
              <li>{item.pay}</li>
              <li>
                <StyledStatus>{getStatus(item.status)}</StyledStatus>
              </li>
              <li>修正</li>
              <li>削除</li>
            </ul>
          ))}
      </TableWrapper>
    </ContentsWrapper>
  )
}

const getStatus = (status) => {
  switch (status) {
    case 1:
      return '営業開始'
    case 2:
      return '提案中'
    case 3:
      return '面接１'
    case 4:
      return '面接２'
    case 7:
      return '確定'
    case 8:
      return '辞退'
    case 9:
      return '見送り'
    default:
      return ''
  }
}

// Contents.getInitialProps = async function () {
//   // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');

//   console.log('Contents init!!!')
//   return {
//     list2: [],
//   }
// }

export default Contents
