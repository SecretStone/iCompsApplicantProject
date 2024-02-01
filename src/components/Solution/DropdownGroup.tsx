import React, {useRef, useEffect} from 'react';
import {createPopper} from '@popperjs/core'; // Import Popper.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Styles from '../../App.module.css';


interface Props {
    items: string[];
    color: string;
    current_page: string;
    onSelectItem: (item: string) => void;
}

function DropdownGroup({items, color, onSelectItem, current_page}: Props) {
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (dropdownRef.current) {
            createPopper(dropdownRef.current, dropdownRef.current, {
                placement: 'bottom-start',
            });
        }
    }, []);

    return (
        <div>
            <div className={Styles.dropdown} ref={dropdownRef}>
                <button
                    className={`btn btn-${color} dropdown-toggle ` + Styles.dropdownButtonStyle}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    {current_page}
                </button>
                <div className={"dropdown-menu " + Styles.dropdownItemsStyle}>
                    {items.map((item) => (
                        <button
                            className={"dropdown-item " + Styles.dropdownListStyle}
                            type="button"
                            key={item}
                            onClick={() => {
                                onSelectItem(item);
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DropdownGroup;
