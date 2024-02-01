import OutputFileGroup from "../../components/Solution/OutputFileGroup";
import React, {useState} from "react";
import NumberInputFileGroup from "../../components/Solution/NumberInputFileGroup";
import Header from "../../components/Solution/Header";
import Styles from '../../App.module.css';

function ArrayInvertieren(arr: []) {
    let start = 0;
    let ende = arr.length -1;
    while (start < ende) {
        let tmp = arr[start]
        arr[start] = arr[ende]
        arr[ende] = tmp
        start++;
        ende--;
    }
    return arr
}

function multiplyer(stelle: number) {
    let multiplyer = 1
    let tmp = 0
    while (tmp < stelle) {
        multiplyer = multiplyer * 2
        tmp ++;
    }
    return multiplyer
}
export default function BinaryCalculatorPage() {

    const [outputText, setOutputText] = useState("")

    const handleInput = (binarStr: any) => {
        // @ts-ignore
        let binaerarray = [];
        for (let i in binarStr) {
            // @ts-ignore
            binaerarray[i] = Number(binarStr[i])
        }
        // @ts-ignore
        binaerarray = ArrayInvertieren(binaerarray)
        let dezimal = 0
        // @ts-ignore
        for (let i:number in binaerarray) {
            // @ts-ignore
            dezimal = dezimal + multiplyer(i) * binaerarray[i]
        }
        const output = 'In dezimal: '+dezimal+ ' In Oktal: '+ dezimal.toString(8)+ ' in Hexadezimal: '+ dezimal.toString(16)
        setOutputText(output)
    }

    return(
        <div className={Styles.outerContainer}>
            <Header></Header>
            <NumberInputFileGroup asksForInput={'Binärzahl'} Input={handleInput} submit_text={'Umrechnen'}></NumberInputFileGroup>
            <OutputFileGroup asksForInput={'Umgerechnete Einheiten'} Output={outputText}></OutputFileGroup>
        </div>
    )
}