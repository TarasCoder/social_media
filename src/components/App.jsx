import React from 'react'
import '../styles.css'

function App(){
    return(
        <div className="app-wrapper">
            <header className="header">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uGm6s7ajVFIea-NkqC7VAt0xCJfMR0UwqA&usqp=CAU" alt="logo"></img>
            </header>
            <nav className="nav">
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;