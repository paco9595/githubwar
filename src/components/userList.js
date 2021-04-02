import React from "react";
import styled from "styled-components";
import { Item } from "./items";

const List = styled.div`
    height: 100%;
    width: 240px;
    max-height: 230px;
    overflow-y: scroll;
    margin-top: 5px;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {
        background-color: #10161a33;
        outline: 1px solid slategrey;
        border-radius: 10px;
    }
`;

export const UserList = ({ list = [], click }) => {
    return (
        <List>
            {list.map((item, key) => (
                <Item key={key} item={item} click={click} />
            ))}
        </List>
    );
};
