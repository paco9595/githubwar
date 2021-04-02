import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 10px 10px;
    display: flex;
    &:hover {
        background-color: #a4a1a0;
    }
`;
const Avatar = styled.img`
    width: 25px;
    height: 25px;
`;

const Username = styled.div`
    margin-left: 10px;
`;

export const Item = ({ click, item }) => {
    return (
        <Container onClick={() => click(item)}>
            <Avatar src={item.avatar_url} />
            <Username>{item.login}</Username>
        </Container>
    );
};
