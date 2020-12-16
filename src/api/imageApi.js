const ENDPOINT = "https://api.scryfall.com/cards/random"

export function getImage() {
    return fetch(ENDPOINT)
        .then(res => res.json())
        .catch(err => console.log(err))
}