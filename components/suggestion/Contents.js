import styled from 'styled-components'
import { useRouter } from 'next/router'
import Title from '../common/Title'
import Input from '../common/Input'
import Button from '../common/Button'
import Select from '../common/Select'
import { options as statusOptions } from '../../constants/status'

const ContentsWrapper = styled.div`
  flex: 1;
  min-width: 800px;
  padding: 20px;
`

const InputWrapper = styled.div`
  padding: 20px;
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

const Contents = ({ list }) => {
  const router = useRouter()

  return (
    <ContentsWrapper>
      <Title>提案</Title>
      <InputWrapper>
        <Input vertical large>
          名前
        </Input>
        <Input vertical large>
          年
        </Input>
        <Input vertical large>
          月
        </Input>
        <Input vertical large>
          会社
        </Input>
        <Input vertical large>
          単価
        </Input>
        <Select large options={statusOptions}>
          ステータス
        </Select>
      </InputWrapper>
      <ButtonWrapper>
        <Button
          large
          primary
          onClick={() => {
            console.log(`提案する`)
          }}
        >
          提案する
        </Button>
        <Button
          large
          onClick={() => {
            console.log(`戻る`)
            router.back()
          }}
        >
          戻る
        </Button>
      </ButtonWrapper>
    </ContentsWrapper>
  )
}

export default Contents
