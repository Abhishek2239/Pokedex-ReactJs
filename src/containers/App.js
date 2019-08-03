import React, { useState} from 'react'
import './App.css'
import Pokecards from '../components/Pokecards/Pokecards'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import SideBar from '../components/SideBar/SideBar'

const App = () => {

  //pagination

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(50)
  const [totalPosts, setTotalPosts] = useState(809)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const settingPosts = (posts) => setTotalPosts(posts)
  const resetCurrentPage = () => setCurrentPage(1)

  //toggle sideDrawer

  const [toggleStatus, setToggleStatus] = useState(false)

  //search input

  const [searchItem, searchInputHandler] = useState('')

  //showgen and showtype

  const [showType, setShowTypeStatus] = useState(false)
  const [showGen, setShowGenStatus] = useState(false)

  const [gen, setGen] = useState()
  const [type, setType] = useState()

  return (
    <div className="App">

      <Header setToggleStatus={setToggleStatus} toggleStatus={toggleStatus} searchItem={searchItem} searchInputHandler={searchInputHandler}
            setShowTypeStatus ={setShowTypeStatus} setShowGenStatus={setShowGenStatus} 
            setCurrentPage={setCurrentPage}/>

      <SideDrawer toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}
        showType={showType} setShowTypeStatus={setShowTypeStatus}
        showGen={showGen} setShowGenStatus={setShowGenStatus}
        setGen={setGen} setType={setType}
        setCurrentPage={setCurrentPage}
        searchInputHandler={searchInputHandler}
      />

      <Pokecards start={indexOfFirstPost} end={indexOfLastPost} setNoOfPosts={settingPosts} resetCurrentPage={resetCurrentPage}
        searchItem={searchItem} 
        gen={gen} showGen={showGen}
        type={type} showType={showType}>

          <SideBar setShowTypeStatus={setShowTypeStatus} setShowGenStatus={setShowGenStatus}
            setGen={setGen} setType={setType} 
            searchInputHandler={searchInputHandler}
            setCurrentPage={setCurrentPage}/>

      </Pokecards>

      <Footer postsPerPage={postsPerPage} totalPosts={totalPosts} setCurrentPage={setCurrentPage} />

    </div>
  )

}

export default App



