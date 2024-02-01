import React, {ChangeEvent, useState} from "react";
import Style from "../../App.module.css";

interface Props {
    asksForInput: string;
    asksForIndex: string;
    InputArr: (item: string[]) => void;
    submit_text: string;
}


function CaesarCipherInput({asksForInput, InputArr, submit_text, asksForIndex}: Props) {
    const [inputText, setTextInputText] = useState('');
    const [inputIndex, setInputIndex] = useState('');

    const handleIndexInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;

        if (text.length === 1) {
            if (/^[-\d]$/.test(text)) {
                setInputIndex(text);
            }
        } else {
            if (/^-\d*$|^\d*$/.test(text)) {
                setInputIndex(text);
            }
        }
    }



    const handleTextInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value
        setTextInputText(text);
    };

    const handleSubmit = () => {
        let returnArr = []
        returnArr[0] = inputText
        returnArr[1] = inputIndex
        InputArr(returnArr)
    };




    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col">
                    <label htmlFor="forumInput" className="form-label">{asksForInput + ':'}</label>
                    <textarea
                        className="form-control"
                        id={"formInput"}
                        value={inputText}
                        onChange={handleTextInputChange}
                    ></textarea>
                </div>
                <div className={"col " + Style.caesarChipherIndexInputContainer}>
                    <label htmlFor="forumInput" className="form-label">{asksForIndex + ':'}</label>
                    <textarea
                        className="form-control"
                        id={"formInput"}
                        value={inputIndex}
                        onChange={handleIndexInputChange}
                    ></textarea>
                </div>
            </div>
            <button className={"btn " + Style.inputButton} onClick={handleSubmit}>
                {submit_text}
            </button>
        </div>
    )
}

export default CaesarCipherInput