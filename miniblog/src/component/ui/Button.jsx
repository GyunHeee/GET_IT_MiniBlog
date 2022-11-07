import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;

}

// props로 받은 title이 버튼에 표시되도록 (버튼의 제목)
// props로 받은 onClick도 속성으로 넣어줌 (클릭여부)

export default Button;


