import React, {useState} from "react";
import InputFileGroup from "../../components/Solution/InputFileGroup";
import OutputFileGroup from "../../components/Solution/OutputFileGroup";
import Header from "../../components/Solution/Header";
import Styles from "../../App.module.css";


// @ts-ignore
function reverseStr(str: string){
    if (str === "") {
        return ""
    } else {
        return reverseStr(str.substr(1)) + str[0]
    }
}

export default function StringInverterPage() {

    const [invertedString, setInvertedString] = useState("")

    const handleInput = (inputStr: string) => {
        const output = reverseStr(inputStr)
        setInvertedString(output)
    }

    return(
        <div className={Styles.outerContainer}>
            <Header></Header>
            <InputFileGroup asksForInput={'String'} Input={handleInput} submit_text={'Invertieren'}></InputFileGroup>
            <OutputFileGroup asksForInput={'Umgedrehter String'} Output={invertedString}></OutputFileGroup>
        </div>
    )
}