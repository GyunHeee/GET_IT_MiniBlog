import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

// Post(글)를 작성하는 페이지를 위한 컴포넌트

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

// PostWritePage 컴포넌트의 state
//1) 글의 제목을 위한 state
//2) 글의 내용을 위한 state
function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // state 사용

    return (
        <Wrapper>
            <Container>
                <TextInput 
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value); //SetTitle
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) =>{
                        setContent(event.target.value);
                    }}
                />

                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;