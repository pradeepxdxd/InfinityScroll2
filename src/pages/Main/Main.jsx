import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Post from '../Post/Post'
import People from '../People/People'
import SocialMedia from '../SocialMedia/SocialMedia'

export default function Main() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Post />} />
                    <Route path='/people' element={<People />} />
                    <Route path='/social-media' element={<SocialMedia />} />
                </Routes>
            </Router>
        </>
    )
}
