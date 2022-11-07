import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

// PostListItem컴포넌트들을 목록으로 보여주기 위한 컴포넌트

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PostList(props){
    const {posts, onClickItem} = props;

    // map() 함수를 이용하여 각 post객체에 대해 PostListItem컴포넌트를 만들어서 랜더링함
    return (
        <Wrapper>
            {posts.map((post,index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;