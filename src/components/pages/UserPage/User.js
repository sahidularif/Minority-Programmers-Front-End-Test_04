import React from 'react'
import Topbar from './Topbar'
import UserPage from './UserPage'
const User = () => {
    return (
        <>
            <section id="user">
                <Topbar />
            </section>
            <UserPage />
        </>
    )
}

export default User