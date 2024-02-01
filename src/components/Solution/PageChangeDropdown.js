import React, {useState} from 'react';
import DropdownGroup from "../../components/Solution/DropdownGroup";
import {color, items_dropdown} from "../../assets/Constants";
import {useHistory} from "react-router-dom";
import routes from "../../routes";

function getCurrentPage() {
    const SOLUTIONS = 'solutions'
    let Page = window.location.pathname
    switch (Page) {
        case `/${SOLUTIONS}/homepage`:
            Page = items_dropdown[0]
            break
        case `/${SOLUTIONS}/arrayInverter`:
            Page = items_dropdown[1]
            break
        case `/${SOLUTIONS}/numberBases`:
            Page = items_dropdown[4]
            break
        case `/${SOLUTIONS}/stringInverter`:
            Page = items_dropdown[3]
            break
        case `/${SOLUTIONS}/daysToAge`:
            Page = items_dropdown[2]
            break
        case `/${SOLUTIONS}/ceasarChiffre`:
            Page = items_dropdown[5]
            break
        case `/${SOLUTIONS}/noPage`:
            Page = 'No Page Found'
            break
    }
    return Page
}


export default function PageChangeDropdown() {
    const currentPage = getCurrentPage()
    const history = useHistory();

    const getReturnArray = () => {
        const local_items_dropdwn = [...items_dropdown];
        const index = local_items_dropdwn.indexOf(getCurrentPage())
        local_items_dropdwn.splice(index, 1)
        return local_items_dropdwn
    }

    const handleDropdown = (item) => {
        navigateToPage(item);
    };

    const handleNewItems = () => {
        return getReturnArray()
    }


    const navigateToPage = (item) => {
        switch (item) {
            case 'Home page':
                history.push(routes.Solutions.homepage);
                break;
            case 'Reverse array':
                history.push(routes.Solutions.arrayInverter);
                break;
            case 'Day calculator':
                history.push(routes.Solutions.daysToAge);
                break;
            case 'Reverse string':
                history.push(routes.Solutions.stringInverter);
                break;
            case 'Binary calculator':
                history.push(routes.Solutions.numberBases);
                break;
            case 'caesar cipher':
                history.push(routes.Solutions.ceasarChiffre);
                break;
            case 'Task Page':
                history.push(routes.Home)
                break;
            default:
                history.push(routes.Solutions.noPage)
                break;
        }
    };

    return (
        <>
            <DropdownGroup color={color} onSelectItem={handleDropdown} current_page={currentPage} items={handleNewItems()}/>
        </>
    );
}
