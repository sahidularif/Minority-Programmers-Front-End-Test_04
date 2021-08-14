import React from 'react'
import Topbar from './Topbar'
import UserPage from './UserPage'

const Home = () => {
    return (
        <>
            <section id="user">
                <Topbar />
            </section>
            <UserPage />
        </>
    )
}

export default Home