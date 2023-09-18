import http from "./httpServices";

export default function getSingleCharacter(id) {
    return http.get(`/api/character/${id}`)
}