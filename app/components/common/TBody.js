import React, { useState, useEffect } from 'react';
import style from './commonStyle.css';

const TBody = (props) => {

    function handleUpVote(event) {
        if (event.type === 'click' || (event.type === 'keyup' && event.keyCode === 13)) {
            props.handleUpVote(event.target.dataset.objectid);
        }
    }

    function handleHide(event) {
        if (event.type === 'click' || (event.type === 'keyup' && event.keyCode === 13)) {
            props.handleHide(event.target.dataset.objectid);
        }
    }

    return (
        <tbody className={style.textCenter}>
            {
                props.data.map((info, index) => {
                    return (
                        <tr key={info.objectID}>
                            <td>{info.num_comments === null ? 0 : info.num_comments}</td>
                            <td>{info.points === null ? 0 : info.points}</td>
                            <td><span
                                className="glyphicon glyphicon-chevron-up"
                                aria-hidden="true"
                                data-objectId={info.objectID}
                                onKeyUp={handleUpVote}
                                onClick={handleUpVote}
                                tabIndex="0"
                            ></span></td>
                            <td>
                                <span>{info.title}</span>
                                <span>[<a
                                    onClick={handleHide}
                                    onKeyUp={handleHide}
                                    data-objectId={info.objectID}
                                    tabIndex="0">Hide</a>]</span>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default TBody;