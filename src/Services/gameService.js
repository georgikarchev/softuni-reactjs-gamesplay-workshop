const baseUrl = 'http://localhost:3030';

export const getAll = () => { //?sortBy=_createdOn%20desc&distinct=category
    return fetch(`${baseUrl}/data/games`)
        .then( res => res.json() );
}