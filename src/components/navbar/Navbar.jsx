import { HeartIcon } from '@heroicons/react/24/outline';
import Searchbar from './Searchbar';

const Navbar = ({ setSearchInput, searchInput, favoriteNumber }) => {
    return (
        <nav className="flex justify-between p-2 m-2 rounded-lg bg-slate-700">
            <span className='text-white'>Logo</span>
            <div className='w-2/3 g:w-1/2 flex justify-center'>
                <Searchbar searchInput={searchInput} setSearchInput={setSearchInput} />
            </div>
            <span className={`flex`}>
                <HeartIcon className='w-7 h-7 text-red-500 cursor-pointer' />
                <span className='absolute top-3 right-3 h-4 w-4 text-center text-xs bg-red rounded-full bg-red-500 text-red-100 font-bold'>{favoriteNumber.length}</span>
            </span>
        </nav>
    );
};

export default Navbar;