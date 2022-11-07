import React from "react";
import styled from "styled-components"

// 사용자로부터 텍스트를 입력받을 수 있게 하는 컴포넌트 

// styled-components를 사용해서 textarea태그에 스타일을 입힌 StyledTextArea이라는 컴포넌트 생성
const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) =>
        props.height && 
        `
        height: ${props.height}px;
        `
    }
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;
// props로 전달한 값은 각각 
// height: 높이 설정
// value: 입력된 값을 표시
// onChange: 변경된 값을 상위 컴포넌트로 전달
function TextInput(props){
    const {height, value, onChange} = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;