import React from 'react'

function About() {
    return (
        // 因為component一定要包在一個dom元素裡面，如果你想要用一個假的元素包它，可用React.Fragment
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
        </React.Fragment>
    )
}

export default About;