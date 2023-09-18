import Character from "./Character";

const CharacterList = ({ characters, selectId, selectedChar}) => {
    return (
        <section className='w-full md:w-2/5 flex flex-col gap-y-2 px-2 overflow-y-scroll h-full'>
            <Character
                characters={characters}
                selectId={selectId}
                selectedChar={selectedChar}
            />
        </section>
    );
};

export default CharacterList;