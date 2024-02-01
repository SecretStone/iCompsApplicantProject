import PageChangeDropdown from "../../components/Solution/PageChangeDropdown";
import React from "react";
import Header from "../../components/Solution/Header";
import Styles from "../../App.module.css";

export default function () {

    return (
        <div className={Styles.outerContainer}>
            <Header></Header>
            <h2>Error 404: Page not found</h2>
        </div>
    )
}