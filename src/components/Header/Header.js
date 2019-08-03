import React from 'react'
import Toggle from '../SideDrawer/Toggle'

const Header = ({ setToggleStatus, toggleStatus, searchItem, searchInputHandler, setShowGenStatus, setShowTypeStatus ,setCurrentPage}) => {

    return (
        <div className=''>
            <Toggle setToggleStatus={setToggleStatus} toggleStatus={toggleStatus} />
            <h1 className='header'>Welcome to the National Pokedex</h1>

            <div className='searchbarDiv'>
                <input className="searchbar"
                    value={searchItem}
                    onChange={(event) =>{
                        searchInputHandler(event.target.value)
                        setCurrentPage(1)
                        setShowGenStatus(false)
                        setShowTypeStatus(false)}
                    }
                    type="text" placeholder="Search"
                />
            </div>
        </div>
    );
}

export default Header