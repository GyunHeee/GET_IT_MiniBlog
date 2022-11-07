import React from "react";
import styled from "styled-components";

//글의 제목한 표시해주는 컴포넌트

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;

    :hover {
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;    
`;

function PostListItem(props) {
    const {post, onClick} = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    ); // TitleText를 이용해서 props로 받은 post객체의 title문자열을 표시해줍니다!
}

export default PostListItem;