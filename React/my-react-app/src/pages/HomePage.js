import React from 'react';

const HomePage = ()=>{
    return (
        <>
            <h1>Hello, Welcome to Home Page</h1>
            <p>
            This paragraph contains a lot of lines
            in the source code, but the browser 
            ignores it.
            </p>

            <p>
            This paragraph contains a lot of spaces
            in the source code, but the browser 
            ignores it.
            </p>

            <p>
            The number of lines in a paragraph depends on the size of the browser window. If you resize the browser window, the number of lines in this paragraph will change.
            </p>
        </>
        
    )
};

export default HomePage;