import React, {useState} from "react";
import OutputFileGroup from "../../components/Solution/OutputFileGroup";
import NumberInputFileGroup from "../../components/Solution/NumberInputFileGroup";
import Header from "../../components/Solution/Header";
import Styles from "../../App.module.css";

export default function DayCalculatorPage() {

    let [output, setOutput] = useState('');


    const handleInput = (inputStr: string) => {
        let days = Number(inputStr)
        let years = 0, weeks = 0
        let day_str = '', year_str = '', week_str = '', rest_str = ''

        if (days === 1) {
            day_str = days+' Tag ist: '
        } else {
            day_str = days+' Tage sind: '
        }

        while (days > 365) {
            years++;
            days = days - 365
        }

        while (days > 7) {
            weeks++;
            days = days -7
        }

        if (years === 1) {
            year_str = ' Jahr '
        } else {
            year_str = ' Jahre '
        }

        if (weeks === 1) {
            week_str = ' Woche und '
        } else {
            week_str = ' Wochen und '
        }

        if (days === 1) {
            rest_str = ' restlicher Tag'
        } else {
            rest_str = ' restliche Tage'
        }
        let output = day_str + years + year_str + weeks + week_str + days + rest_str
        setOutput(output)
    }


    return (
        <div className={Styles.outerContainer}>
            <Header></Header>
            <NumberInputFileGroup asksForInput={'Tage'} Input={handleInput} submit_text={'Umrechnen'}></NumberInputFileGroup>
            <OutputFileGroup asksForInput={'Headline'} Output={output}></OutputFileGroup>

        </div>
    );

}