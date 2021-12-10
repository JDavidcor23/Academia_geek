import React, { Component } from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Estudiantes from '../components/Estudiantes'
import Navbar from '../components/Navbar'

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/Estudiantes" element={<Estudiantes/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}