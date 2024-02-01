import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    asksForInput: string;
    Output: string;
}

function App({ asksForInput, Output }: Props) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleTextAreaClick = () => {
        if (textareaRef.current) {
            textareaRef.current.select();
        }
    };

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <label htmlFor="forumInput" className="form-label">
                    {asksForInput + ':'}
                </label>
                <textarea
                    placeholder={Output}
                    className="form-control"
                    id="formInput"
                    value={Output}
                    readOnly
                    onClick={handleTextAreaClick}
                    ref={textareaRef}
                ></textarea>
            </div>
        </div>
    );
}

export default App;
