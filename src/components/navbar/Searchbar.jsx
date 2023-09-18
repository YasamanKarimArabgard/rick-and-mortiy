const Searchbar = ({setSearchInput, searchInput}) => {
    return (
        <div className="w-full flex justify-center">
            <input
                className="w-full lg:w-1/2 bg-slate-600 text-white text-md rounded-md p-1 outline-none focus:outline-white "
                placeholder="search..."
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
    );
};

export default Searchbar;