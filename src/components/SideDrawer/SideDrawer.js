import React from 'react'
import './SideDrawer.css'


const SideDrawer = ({ toggleStatus, setToggleStatus,
    setShowGenStatus, setGen, setShowTypeStatus, setType,setCurrentPage ,searchInputHandler}) => {

    const pills = ['Grass', 'Fire', 'Water', 'Poison', 'Flying', 'Ground', 'Bug', 'Ghost', 'Normal',
        'Electric', 'Fairy', 'Fighting', 'Psychic', 'Rock', 'Steel', 'Ice', 'Dragon', 'Dark']

    const gens = [{ name: 'I', num: 1 }, { name: 'II', num: 2 }, { name: 'III', num: 3 },
        { name: 'IV', num: 4 }, { name: 'V', num: 5 }, { name: 'VI', num: 6 }, { name: 'VII', num: 7 }, { name: 'All', num: '' }]

    return (
        <aside className={toggleStatus?'sideDrawer open':'sideDrawer'}>
            <h3 className="sideDrawer-Heading">Pokemon Generations</h3>

            <div className="sideDrawer-generations">
                {gens.map((item) => <li className="side-gens"
                    key={Math.random()}
                    onClick={() => {
                        setCurrentPage(1)
                        setToggleStatus(false)
                        setShowTypeStatus(false)
                        setShowGenStatus(true)
                        setGen(item.num)
                        searchInputHandler('')
                    }}>
                    {item.name}
                </li>)}
            </div>

            <h3 className="sideDrawer-Heading">Types</h3>

            <div className="sideDrawer-types">
                {pills.map((item) => <li key={item}
                    className={'side-pills pill' + item}
                    onClick={() => {
                        setCurrentPage(1)
                        setToggleStatus(false)
                        setShowGenStatus(false)
                        setShowTypeStatus(true)
                        setType(item)
                        searchInputHandler('')
                    }}>
                    {item}
                </li>)}
            </div>

        </aside>
    );
}

export default SideDrawer