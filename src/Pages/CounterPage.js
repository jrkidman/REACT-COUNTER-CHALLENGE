import React from 'react'
import { useState } from 'react';

//what components do i need here?
//  a header with a logo and a menu
//  an adder section for the + and - and the number to display
//  the display section for the stars

const Counter = () => {
    const [count, setCount] = useState(0);

    const RemoveStar = () => {
        if (count > 0) { setCount(count - 1) };
    }
    const AddStar = () => {
        if (count < 5) { setCount(count + 1) };
    }

    const StarDisplay = () => {
        let numberOfStars = "";
        for (let i = 0; i <= count.length; i++) {
            numberOfStars = numberOfStars + "🌟";
        }
        return <p>{numberOfStars}</p>;
    };



    return (
        <div id="app-container">

            {/* header with logo and menu */}
            <header>
                <div id="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/1365/1365481.png"
                        height="50px"
                        width="50px"
                        alt="logo" />
                </div>
                <div class="menu">MENU</div>
            </header>


            {/* main adder section with buttons and number */}
            <div id="adder">
                {/* button to remove stars */}
                <button id="remove"
                    onClick={RemoveStar}>-</button>

                {/* number */}
                <div id="number-of-stars">
                    <h1>{count}</h1>
                </div>

                {/* button to add stars */}
                <button id="add"
                    onClick={AddStar}
                >+</button>
            </div>


            {/* // will need to map the stars state variable array and display them */}
            <div id="stars-display">
                {StarDisplay}
            </div>




        </div>
    )
}

export default Counter;

