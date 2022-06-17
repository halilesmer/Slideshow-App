import React, { useState } from 'react';

function Slides({ slides }) {
    const [count, setCount] = useState(0)
    console.log('count', slides.length)
    const HandleCountNext = () => {
        if (count > slides.length) {
            setCount(slides.length)
        } else {
            setCount(count + 1)
        }
    }
    const HandleCountPrev = () => {
        if (count === 0) {
            setCount(0)
        } else {
            setCount(count - 1)
        }

    }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button disabled={count === 0} data-testid="button-restart" className="small outlined"
                    onClick={() => setCount(0)}
                >Restart</button>
                <button
                    disabled={count === 0}
                    data-testid="button-prev" className="small"
                    onClick={HandleCountPrev}>Prev
                </button>
                <button
                    disabled={count === slides.length-1}
                    data-testid="button-next" className="small"
                    onClick={HandleCountNext}>Next
                </button>
            </div>

            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[count].title}</h1>
                <p data-testid="text">{slides[count].text}</p>


            </div>
        </div>
    );

}

export default Slides;
