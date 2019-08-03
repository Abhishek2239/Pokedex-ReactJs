import React from 'react'

const SideBar = ({setShowTypeStatus,setShowGenStatus,setGen,setType,searchInputHandler,setCurrentPage}) => {

    const pillsAr = ['Grass', 'Fire', 'Water', 'Poison', 'Flying', 'Ground', 'Bug', 'Ghost', 'Normal',
        'Electric', 'Fairy', 'Fighting', 'Psychic', 'Rock', 'Steel', 'Ice', 'Dragon', 'Dark']

    const gensAr = [{ name: 'I', num: 1 }, { name: 'II', num: 2 }, { name: 'III', num: 3 }, { name: 'IV', num: 4 }, { name: 'V', num: 5 },
    { name: 'VI', num: 6 }, { name: 'VII', num: 7 }, { name: 'All', num: '' }]
    return (
        <aside className='sidebar'>
            <h3 className="sideHeading">Pokemon Generations</h3>

            <div className="generations">
                {gensAr.map((item) =>
                    <li className="gens"
                        key={Math.random()}
                        onClick={() => {
                            setCurrentPage(1)
                            setShowTypeStatus(false)
                            searchInputHandler('')
                            setShowGenStatus(true)
                            setGen(item.num)
                        }}>
                        {item.name}
                    </li>)}
            </div>

            <h3 className="sideHeading">Types</h3>

            <div className="types">
                {pillsAr.map((item) =>
                    <li key={Math.random()}
                        className={`pills pill${item}`}
                        onClick={() => {
                            setCurrentPage(1)
                            setShowGenStatus(false)
                            setShowTypeStatus(true)
                            setType(item)
                            searchInputHandler('')
                        }}>
                        {item}
                    </li>)}
            </div>

        </aside>
    )
}

export default SideBar


