import styled from "@emotion/styled"
import Image from "next/image"
import imageStart from "@/assets/imageStart.svg"
import videoStart from "@/assets/videoStart.svg"
import { useRouter } from "next/navigation"

interface Props{
    type: "IMAGE" | "VIDEO"
}

const ReadingDreamItem = ({type}: Props) => {
    const router = useRouter()

    const onClick = (type: "IMAGE" | "VIDEO") => {
        router.push(type)
    }

    return <Wrapper onClick={() => onClick(type)}>
        <Image src={type === 'IMAGE' ? imageStart : videoStart} alt=""/>
        <Title>
            {type === 'IMAGE' ? "이미지" : "영상"}으로 해명 받기
        </Title>
        <Description>
            적어주신 꿈을 기반으로 {type === 'IMAGE' ? "사진" : "영상"}으로 꿈을 표현해요
        </Description>
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 10px;
    border-radius: 16px;
    border: 1px solid ${({theme}) => theme.color.grey[30]};
    background: ${({theme}) => theme.color.grey[20]};
`

const Title = styled.h1`
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 28px;
color: ${({theme}) => theme.color.grey[100]}
`

const Description = styled.p`
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;
color: ${({theme}) => theme.color.grey[70]}
`

export default ReadingDreamItem