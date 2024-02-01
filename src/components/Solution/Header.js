import React, {useState} from "react";
import logo from '../../assets/Blue Business Architecture Design Logo - Logos.png'
import reverseArrayCard from '../../assets/reverseArrayCard.png'
import binaryCalculatorCard from '../../assets/BinaryCalculatorCard.png'
import caesarChiffreCard from '../../assets/caesarCipherCard.png'
import dayCalculator from '../../assets/DayCalculatorCard.png'
import reverseStringCard from '../../assets/ReverseStringCard.png'
import infoIconBlue from '../../assets/info-icon-blue.png'

import Styles from '../../App.module.css';
import PageChangeDropdown from "./PageChangeDropdown";
import routes from "../../routes";
import icompsLogo from '../../logo.png'
import infoIconWhite from '../../assets/info-icon.png'
import CardComponent from "./CardComponent";
import {items_dropdown} from "../../assets/Constants";


function getCurrentPage() {
    const SOLUTIONS = 'solutions'
    let page = window.location.pathname
    switch (page) {
        case `/${SOLUTIONS}/homepage`:
            page = items_dropdown[0]
            break
        case `/${SOLUTIONS}/arrayInverter`:
            page = items_dropdown[1]
            break
        case `/${SOLUTIONS}/numberBases`:
            page = items_dropdown[4]
            break
        case `/${SOLUTIONS}/stringInverter`:
            page = items_dropdown[3]
            break
        case `/${SOLUTIONS}/daysToAge`:
            page = items_dropdown[2]
            break
        case `/${SOLUTIONS}/ceasarChiffre`:
            page = items_dropdown[5]
            break
        default :
            page = 'No Page Found'
            break
    }
    return page
}


const Header = () => {


    const infoCardBuilder = () => {
        let outputArray = ['', '', '']
        const currentPage = getCurrentPage()
        outputArray[2] = currentPage
        switch (currentPage) {
            case 'Home page':
                outputArray[0] = "Willkommen auf der Homepage der Lösungen des iComps bewerber Projektes! Von hieraus kann zu allen Lösungen Navigiert werden"
                outputArray[1] = "..."
                break
            case 'Reverse array':
                outputArray[0] = "Gib einen Text ein um in diesem die Wörter umzudrehen! Hierzu wird dein Text in einen Array umgewandelt dann umgedreht und am Ende wieder in einen Text umgewandelt."
                outputArray[1] = reverseArrayCard
                break
            case 'Day calculator':
                outputArray[0] = "Gib eine Anzahl an Tagen ein, welche du in sinnvolle Zeiteinheiten umwandeln möchtest!"
                outputArray[1] = dayCalculator
                break
            case 'Reverse string':
                outputArray[0] = "Gib einen Text ein um in diesem Jeden Buchstaben von vorne nach Hinten zu Spiegeln!"
                outputArray[1] = reverseStringCard
                break
            case 'Binary calculator':
                outputArray[0] = "Gib eine Binärzahl ein um diese in eine Dezimal-, Oktal- und Hexadezimalzahl umzuwandeln! Achtung Binärzahlen bestehen nur aus 1en und 0en!"
                outputArray[1] = binaryCalculatorCard
                break
            case 'caesar cipher':
                outputArray[0] = 'Gib einen Text ein welchen du nach dem cäsar Chiffre prinzip umwandeln möchtest! Schreibe dazu Den Text und dann ein Leerzeichen mit Doppelpunkt gefolgt von der Verschiebung welche du verwenden Möchtest! (also zum Beispiel: " :5"). Auch negative verschiebung ist Möglich!'
                outputArray[1] = caesarChiffreCard
                break
            default:
                outputArray[0] = 'No Information found! This is an Error that should not appear'
        }
        return outputArray;
    }

    const [cardComponentVisible, setCardComponentVisible] = useState(false);


    const handleInfoClick = () => {
        if (!cardComponentVisible) {
            setCardComponentVisible(true)
        } else {
            setCardComponentVisible(false)
        }
    }

    return (
        <div className={Styles.headerContainer}>
            <a href={routes.Solutions.homepage}><img className={Styles.ownLogo} src={logo} alt='Not Found'/></a>
            <PageChangeDropdown></PageChangeDropdown>
            <a href={'https://icomps.de/'}>
                <img className={Styles.iCompsLogo} src={icompsLogo} alt='Not Found'/>
            </a>
            <script src="https://scripts.sirv.com/sirvjs/v3/sirv.js"></script>
            <a onClick={handleInfoClick} className='infoIcon'>
                <img src={infoIconWhite} className='Sirv image-main' alt='Not Found'/>
                <img src={infoIconBlue} className={'Sirv image-hover ' + Styles.imagesize} alt='Not Found'/>
            </a>
            {cardComponentVisible && <CardComponent card_text={infoCardBuilder()[0]} image_src={infoCardBuilder()[1]}
                                                    titel={infoCardBuilder()[2]}></CardComponent>}
        </div>
    )
}

export default Header