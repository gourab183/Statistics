import React, { useState, useEffect } from 'react';
import style from './commonStyle.css';

const THead = (props) => {

    return (
        <thead className={style.tableHead}>
            <tr>
                {
                    props.columns.map((column, index) => {
                        return (<th className={style.textCenter} scope="col" key={index}>{column}</th>)
                    })
                }
            </tr>
        </thead>
    )
}

export default THead;