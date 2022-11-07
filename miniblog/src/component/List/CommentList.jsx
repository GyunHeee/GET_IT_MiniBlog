import React  from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

// 댓글 목록을 보여주기 위한 컴포넌트 (PostList와 거의 동일)

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

function CommentList(props) {
    const {comments} = props;

    return (
        <Wrapper>
            {comments.map((comment, index) => {
                return <CommentListItem key={comment.id} comment={comment} />
            })}
        </Wrapper>
    );
}

export default CommentList;