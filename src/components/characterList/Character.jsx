import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Character = ({ characters, selectId, selectedChar}) => {
    return (
        <>
            {
                characters.map(char => (
                    <div key={char.id} className='flex bg-slate-800 rounded-lg p-2'>
                        <div>
                            <img src={char.image} className="w-10 h-10 rounded-md" alt={char.name} />
                        </div>
                        <div className='flex justify-between w-full px-2 items-center'>
                            <div className='flex flex-col'>
                                <span className='text-slate-200 font-bold text-md'>{char.name}</span>
                                <div className="flex gap-x-2 items-center">
                                    <span className={`w-2 h-2 rounded-full ${char.status === 'Alive' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                                    <span className='text-slate-200 text-sm'>{char.status} - {char.species}</span>
                                </div>
                            </div>
                            <button onClick={() => selectId(char.id)} className='cursor-pointer' >
                                {
                                    selectedChar === char.id ?
                                        <EyeSlashIcon className='w-7 h-7 text-red-700 mr-2' /> :
                                        <EyeIcon className='w-7 h-7 text-red-700 mr-2' />
                                }
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Character;