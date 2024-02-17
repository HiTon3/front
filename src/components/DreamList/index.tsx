import styled from "@emotion/styled"
import { useState } from "react"
import DreamTab from "./DreamTab";
import Image from "next/image";
import setting from "@/assets/settings.svg"

export type FormType = '길몽' | '악몽' | '예지몽' | '일반';
interface Props{
    type: "QUEST" | "HISTORY"
}

const DreamList = ({type}:Props) => {
    const [tabState, setTabState] = useState<'길몽' | '악몽' | '예지몽' | '일반'>("길몽")

    return <Wrapper>
        {type === 'HISTORY' && <Image style={{
            marginBottom: 56
        }} src={setting} alt="" />}
        <p>탐색</p>
        <DreamTab setTabState={setTabState} tabState={tabState} />
        <DreamContainer>
            <DreamContent/>
            <DreamContent/>
            <DreamContent/>
        </DreamContainer>
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    justify-content: center;
    align-items: center;

    > p{
        margin-bottom: 22px;
        color: ${({theme}) => theme.color.grey[100]}
    }
`

const DreamContainer = styled.div`
    width: 328px;
    gap: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
align-content: flex-start;
`

const DreamContent = styled.div`
    width: 158px;
    height: 158px;
    border-radius: 12px;
    background: ${({theme}) => theme.color.grey[100]}
`

export default DreamList