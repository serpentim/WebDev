import React, { Component } from 'react'
import { BrowserRouter } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/users">Users</a></li>
                    </ul>
                </nav>
            

            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/users' element={<Users />} />
                </Routes>
            </Router>

            </div>
        )
    }
}