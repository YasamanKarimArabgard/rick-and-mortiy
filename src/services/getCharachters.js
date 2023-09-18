import http from "./httpServices";

export default function getCharacters(searchInput, signal) {
    return http.get(`/api/character?name=${searchInput}`, {signal})
}