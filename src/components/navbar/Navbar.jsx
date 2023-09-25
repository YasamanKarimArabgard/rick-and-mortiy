import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Searchbar from './Searchbar';
import Modal from '../Modal/Modal';
import { MyChar } from '../characterList/Character';

const Navbar = ({ setSearchInput, searchInput, favoriteItem, handleDeleteFav }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const onOpen = () => {
        setModalOpen((prevState) => !prevState);
    }

    return (
        <nav className="flex justify-between p-2 m-2 rounded-lg bg-slate-700">
            <span className='text-white'>Logo</span>
            <div className='w-2/3 g:w-1/2 flex justify-center'>
                <Searchbar searchInput={searchInput} setSearchInput={setSearchInput} />
            </div>
            <>
                <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} favoriteItem={favoriteItem}>
                    {
                        favoriteItem.length === 0 ?
                            <div className='h-20 m-auto flex justify-center items-center'>
                                <p className='text-slate-300'>select a favourite item.</p>
                            </div> :
                            favoriteItem.map(fav => (
                                <MyChar char={fav} key={fav.id}>
                                    <button onClick={(e) => handleDeleteFav(fav.id, e)}>
                                        <TrashIcon className='w-6 h-6 text-red-600' />
                                    </button>
                                </MyChar>
                            ))
                    }
                </Modal>
                <span className={`flex`}>
                    <HeartIcon onClick={() => onOpen()} className='w-7 h-7 text-red-500 cursor-pointer' />
                    <span className='absolute top-3 right-3 h-4 w-4 text-center text-xs bg-red rounded-full bg-red-500 text-red-100 font-bold'>{favoriteItem.length}</span>
                </span>
            </>
        </nav>
    );
};

export default Navbar;