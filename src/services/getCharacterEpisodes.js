import http from "./httpServices";

export default function getCharacterEpisodes (episodeId){
    return http.get(`/api/episode/${episodeId}`)
}