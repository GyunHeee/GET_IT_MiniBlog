import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../List/PostList";
import Button from "../ui/Button";
import data from '../../data.json';

// 앞에서 만들어뒀던 컴포넌트들 중 PostList, Button 컴포넌트와 data.json파일을 import해줍니다. 

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

function MainPage(props) {
    const {} = props;

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Button 
                    title = "글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}
    //Button 컴포넌트를 클릭하면 Post를 자것ㅇ할 수 있는 페이지(/post-write)로 이동할 수 있도록!
    // PostList각 컴포넌트를 이용해서 글 목록 표시!
    // 목록을 클릭하면 각 post의 상세 페이지로 이동할 수 있도록!

export default MainPage;
// 전체적으로 만ㄷ르어둔 컴포넌트를 모아놓은 느낌이고
// 이게 바로 컴포넌트 기반으로 개발하는 리액트의 장점