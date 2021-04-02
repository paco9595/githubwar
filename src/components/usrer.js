import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { searchUser } from "./../services.js";
import { UserList } from "./userList";
import { UserSelected } from "./userSelected";

const Search = styled.input`
    font-size: 18px;
    padding: 10px;
    margin-right: 20px;
    background: #3e4845;
    color: #fff;
    border: none;
    border-radius: 3px;
    ::placeholder {
        color: palevioletred;
    }
`;

export const User = () => {
    const InputRef = useRef(null);
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (query === "") return;
            searchUser(query).then((response) => {
                setUsers(response.items);
            });
        }, 500);
        return () => clearTimeout(timeOutId);
    }, [query]);
    useEffect(() => {
        if (!selectedUser.id) {
            InputRef.current.select();
        }
    }, [selectedUser]);
    const clickUser = (i) => {
        setSelectedUser(i);
        setQuery(i.login)
    };

    const removeSelectedUser = () => {
        setSelectedUser({});
        InputRef.current.select();
    };
    return (
        <div>
            <Search
                value={query}
                ref={InputRef}
                disabled={selectedUser.id}
                onChange={(event) => setQuery(event.target.value)}
            />
            {users.length && !selectedUser.login ? (
                <UserList list={users} click={clickUser} />
            ) : null}
            {selectedUser.login && (
                <UserSelected
                    selected={selectedUser}
                    remove={removeSelectedUser}
                />
            )}
        </div>
    );
};
