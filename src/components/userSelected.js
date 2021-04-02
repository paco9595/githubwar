import React, { useEffect, useState } from "react";
import styled from "styled-components";
import closeUrlIcon from "./../icons/times-solid.svg";
import { getRepositorys } from "./../services";

const Card = styled.div`
    display: flex;
    justify-content: center;
    border: black 2px solid;
    border-radius: 10px;
    margin-right: 20px;
    margin-top: 20px;
    padding: 20px;
    box-shadow: 10px 10px 51px -19px rgb(0 0 0 / 75%);
    position: relative;
`;
const UserContainer = styled.div`
    text-align: center;
`;
const Img = styled.img`
    width: 100px;
    height: 100px;
    text-align: center;
`;
const Username = styled.div`
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    font-family: "ninjaFont";
`;
const CloseIcon = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    right: 10px;
`;

export const UserSelected = ({ selected, remove }) => {
    const [repositorys, setRepositorys] = useState([]);
    const [forks, setForks] = useState(0);
    const [stargazers, setStargazers] = useState(0);
    useEffect(() => {
        if (selected.login) {
            getRepositorys(selected.login).then((data) => {
                const repos = data.filter((i) => !i.fork);
                let forks_count = 0;
                let stargazers_count = 0;
                setRepositorys(repos);
                repos.map((i) => {
                    forks_count += i.forks_count;
                    stargazers_count += i.stargazers_count;
                    return 0;
                });
                setStargazers(stargazers_count);
                setForks(forks_count);
            });
        }
    }, [selected]);
    return (
        <Card>
            <CloseIcon src={closeUrlIcon} onClick={remove} />
            <UserContainer>
                <Img src={selected.avatar_url} />
                <Username>{selected.login}</Username>
                <div>
                    <div>Repos: {repositorys.length}</div>
                    <div>Forks: {forks}</div>
                    <div>Stars: {stargazers}</div>
                </div>
            </UserContainer>
        </Card>
    );
};
