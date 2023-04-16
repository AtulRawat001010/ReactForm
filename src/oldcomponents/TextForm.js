import React, {useState} from 'react'
import './TextForm.css'


export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here...');

    const handleUp = () => {
        // console.log('uppercase was clicked ' + text);
        let newText = text.toUpperCase();
        let len = newText.length;
        console.log(len);
        setText(newText);
    }

    const handleLc = () => {
        // console.log('uppercase was clicked ' + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div style={{textAlign:'center', marginTop:'50px'}}>
                <h1>{props.heading}</h1>
                <textarea name="textArea" id="TA1" value={text} cols="100" rows="20" onChange={handleOnChange} />
            </div>

            <button className="btn" onChange={handleUp}>ToConvertInUpperCase</button>
            <button className="btn" onChange={handleLc}>ToConvertInLowerCase</button>
        </>
    )
}
