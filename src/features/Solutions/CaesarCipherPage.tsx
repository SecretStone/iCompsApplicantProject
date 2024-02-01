import OutputFileGroup from "../../components/Solution/OutputFileGroup";
import React, {useState} from "react";
import Header from "../../components/Solution/Header";
import Styles from "../../App.module.css";
import CaesarCipherInput from "../../components/Solution/CaesarCipherInput";


export default function CaesarCipherPage() {

    const [outputText, setOutputText] = useState("")

    const handleInput = (inputstr: string[]) => {
        const text = inputstr[0]
        let shift = 0
        if (inputstr[1] != '') {
            shift = Number(inputstr[1])
        }

        while (shift < 0) {
            shift = 26 + shift
        }

        while (shift > 26) {
            shift = shift - 26
        }

        const textStr: any = text
        let newArr: any[] = [];
        for (let i in textStr) {
            // @ts-ignore
            newArr[i] = textStr.charCodeAt(i)
        }
        for (let j in newArr) {
            if (65 <= newArr[j] && newArr[j] <= 90) {
                if (newArr[j] + shift > 90) {
                    let tmp = newArr[j] + shift - 90
                    newArr[j] = tmp + 64
                } else {
                    newArr[j] = newArr[j] + shift
                }
            } else if (97 <= newArr[j] && newArr[j] <= 122) {
                if (newArr[j] + shift > 122) {
                    let tmp = newArr[j] + shift - 122
                    newArr[j] = tmp + 96
                } else {
                    newArr[j] = newArr[j] + shift
                }
            } else {
                // anderes zeichen
            }
        }
        for (let k in newArr) {
            newArr[k] = String.fromCharCode(newArr[k])
        }
        const output = newArr.join('')
        setOutputText(output)
    }

    return(
        <div className={Styles.outerContainer}>
            <Header></Header>
            <CaesarCipherInput InputArr={handleInput} submit_text={'Verschieben'} asksForInput={'Text'} asksForIndex={'Verschiebung'}></CaesarCipherInput>
            <OutputFileGroup asksForInput={'Umgerechnete Einheiten'} Output={outputText}></OutputFileGroup>
        </div>
    )
}