import React, {useState} from "react";
import InputFileGroup from "../../components/Solution/InputFileGroup";
import OutputFileGroup from "../../components/Solution/OutputFileGroup";
import Header from "../../components/Solution/Header";
import Styles from "../../App.module.css";

export default function ReverseArrayPage() {

    const [reversedText, setReversedText] = useState("");

    const handleInput = (inputStr: string) => {
        const strArray = inputStr.split(' ')
        let start = 0;
        let ende = strArray.length -1;
        while (start < ende) {
            let tmp = strArray[start]
            strArray[start] = strArray[ende]
            strArray[ende] = tmp
            start++;
            ende--;
        }
        const reversedText = strArray.join(' ')
        setReversedText(reversedText)

    }

    return (
        <div className={Styles.outerContainer}>
            <Header></Header>
            <InputFileGroup asksForInput={'Array'} Input={handleInput} submit_text={'Invertieren'}></InputFileGroup>
            <OutputFileGroup asksForInput={'Invertierter Array'} Output={reversedText}></OutputFileGroup>

        </div>
    );

}