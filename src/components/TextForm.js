import React, {useState} from 'react';

export default function TextForm(props) {
    const click = ()=> {
        console.log("Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const clickOnLower = ()=> {
        console.log("Clicked for lower");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clickClear = ()=> {
        console.log("Clicked for lower");
        let newText2 = '';
        setText(newText2);
    }
    const handleOnChange = (event)=> {
        console.log("Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
        <div style={{color: props.mode === 'light'?'black':'white'}}>
        <div className="container" >
            <h1>{props.Heading}</h1>
            <div>
                <textarea style={{backgroundColor: props.mode === 'light'?'white':'black', color: props.mode === 'light'?'black':'white'}} value={text} onChange={handleOnChange} name="text" id="text" cols="100" rows="10"></textarea>
            </div>
            <button className="btn" onClick={click}> Change to UpperCase</button>
            <button className="btn" onClick={clickOnLower}> Change to LowerCase</button>
            <button className="btn" onClick={clickClear}> Clear</button>
        </div>
        <div className="container">
            <h1>Text Summary:</h1>
            <p>Numbers of words {text.length>0?text.split(" ").length:0},   Numbers of characters {text.length}. </p>
            <p>Words can read in minute {0.008 * text.split(" ").length}</p>
            <h2>Previews:</h2>
            <p>{text.length>0? text: 'Enter the text above to previews text'}</p>
        </div>
        </div>
        </>

    )
}
