const BASE_URL = "https://api.github.com/";

export const searchUser = (user) => {
    return fetch(
        `${BASE_URL}search/users?q="${user}"&per_page=10`
    ).then((res) => res.json());
};

export const getRepositorys = (user) => {
    return fetch(`${BASE_URL}users/${user}/repos`).then((res) => res.json());
};
