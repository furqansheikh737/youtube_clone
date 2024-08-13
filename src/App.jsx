import React from 'react'
import {AppContext} from './context/contextApi'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Feed, Navbar, SearchResult, VideoDetails} from "./components/index"
const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
         <Navbar />
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
            <Route path='/video/:id' element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App