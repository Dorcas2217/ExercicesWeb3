
const Search = ({toSearch, handleToSearch}) =>{
    return(
        <>
            <div>
                filter shown with <input type="text" value={toSearch} onChange={handleToSearch} />
            </div>
        </>
    )
}

export default Search