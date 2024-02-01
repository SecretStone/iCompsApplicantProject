import React, {ChangeEvent, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from '../../App.module.css'
interface Props {
    asksForInput: string;
    Input: (item: string) => void;
    submit_text: string;
}

function App({asksForInput, Input, submit_text}: Props) {
    const [inputText, setInputText] = useState('');


    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {

        const text = event.currentTarget.value

        if(/^\d*$/.test(text)) {
            setInputText(text);
        }
    };

    const handleSubmit = () => {
        Input(inputText)
    };

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <label htmlFor="forumInput" className="form-label">{asksForInput+ ':'}</label>
                <textarea
                    className="form-control"
                    id ={"formInput"}
                    value={inputText}
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <button className={"btn " + Style.inputButton} onClick={handleSubmit}>
                {submit_text}
            </button>
        </div>
    );
}

export default App;