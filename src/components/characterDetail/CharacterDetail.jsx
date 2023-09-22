import { useEffect, useState } from "react";
import Character from "../characterList/Character";
import getSingleCharacter from '../../services/getSingleCharacter';
import getCharacterEpisodes from "../../services/getCharacterEpisodes";
import { MapPinIcon } from "@heroicons/react/24/outline";

const CharacterDetail = ({ selectedChar, handleAddFavorite, isAddedFavorite }) => {

    const [character, setCharacter] = useState([]);
    const [characterLocation, setCharacterLocation] = useState('');
    const [charLoading, setCharLoading] = useState(false);
    const [episodes, setEpisodes] = useState([]);

    // console.log(episodes);

    useEffect(() => {
        async function fetchSingleChar() {
            try {
                setCharLoading(true);

                const { data } = await getSingleCharacter(selectedChar);
                setCharacter(data);
                setCharacterLocation(data.location);

                const episodesId = data.episode.map(e => e.split('/').at(-1))
                const { data: episodesData } = await getCharacterEpisodes(episodesId);
                setEpisodes([episodesData].flat());

                setCharLoading(false)
            }
            catch (err) {
                console.log(err.response.data.error);
            }
        }
        fetchSingleChar();
    }, [selectedChar])


    if (!Character || !selectedChar) {
        return (
            <p className="text-slate-500 m-auto">Select a character</p>
        )
    }

    if (charLoading) {
        return (
            <p className="text-orange-500 mx-auto">character is loading....</p>
        )
    }
    return (
        <div className="w-full md:w-3/5 character_detail flex-1 px-2 h-fit mb-2" key={character.id}>
            <div className="flex gap-x-2 rounded-lg overflow-hidden bg-slate-800 max-h-36 md:h-auto md:max-h-none h-full w-full mb-2">
                <img className="character_detail-img w-1/3 h-full" src={character.image} />
                <div className="character-detail-info flex flex-col justify-between">
                    <div className="flex flex-col text-md text-slate-200">
                        <span className="font-bold text-xl text-slate-200">{character.name}</span>
                        <div className="flex gap-x-2 items-center">
                            <span className={`w-2 h-2 rounded-full ${character.status == 'Alive' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                            <span className="text-sm md:text-md">{character.status}</span> - <span className="text-sm md:text-md">{character.species}</span>
                        </div>
                    </div>
                    <div className="episode_loaction_container flex flex-col">
                        <span className="text-slate-500 text-sm md:text-lg font-bold">Last known location :</span>
                        <div className="flex items-center gap-x-1">
                            <MapPinIcon className="w-4 h-4 text-slate-300" />
                            <span className="episode_location-name text-slate-300 text-xs md:text-lg">{characterLocation.name}</span>
                        </div>
                    </div>
                    {
                        isAddedFavorite ? <p className="text-red-300 text-sm md:text-sm">This item alredy added to list.</p> :
                            <button
                                onClick={() => handleAddFavorite(character)}
                                className="text-sm md:text-lg md:py-1 md:px-2 bg-slate-500 rounded-xl mb-2 text-slate-300 hover:bg-red-300">add favorite</button>
                    }
                </div>
            </div>
            <div className="episodes_container rounded-lg overflow-hidden bg-slate-800 h-fit max-h-52 md:h-auto md:max-h-none">
                <div className="flex flex-col gap-x-2 h-full p-1">
                    <h4 className="text-slate-500 font-bold text-xl mb-1">List of episodes : </h4>
                    <div className="episodes_list flex flex-col h-full">
                        {
                            episodes.slice(0, 6).map((epi, index) => (
                                <div className="flex items-center justify-between gap-y-2 mb-1">
                                    <div className="flex flex-row gap-x-2">
                                        <span className="ep-count text-slate-300 text-xs md:text-lg">{String(index + 1).padStart(2, '0')}</span>
                                        <span className="ep-episode text-slate-300 text-xs md:text-lg">{epi.episode}:</span>
                                        <span className="ep-name text-slate-300 text-xs md:text-lg font-bold overflow-hidden truncate">{epi.name}</span>
                                    </div>
                                    <span className="ep-date bg-slate-600 rounded-lg text-slate-400 px-1 text-xs overflow-hidden truncate">{epi.air_date}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;