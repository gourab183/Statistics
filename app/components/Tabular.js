import React, { useState, useEffect } from 'react';
import THead from '../components/common/THead';
import TBody from '../components/common/TBody';
import style from '../components/styles/App.css';

const Tabular = (props) => {

    const { columns, data, pageNo, nbPage } = props;

    function handleUpVote(id) {
        props.handleUpVote(id)
    }

    function handlePrev(e) {
        e.preventDefault();
        if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)) {
            props.handlePrev();
        }
    }

    function handleNext(e) {
        e.preventDefault();
        if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)) {
            props.handleNext();
        }
    }

    function handleHide(id) {
        props.handleHide(id);
    }

    return (
        <div>
            <table className="table table-striped">
                <THead columns={columns} />
                <TBody data={data}
                    handleUpVote={handleUpVote}
                    handleHide={handleHide} />
            </table>
            <div className={style.pagination}>
                <a
                    onKeyUp={pageNo === 1 ? () => { return false } : handlePrev}
                    onClick={pageNo === 1 ? () => { return false } : handlePrev}
                    className={pageNo === 1 ? `${style.disabledLink} prevPage` : `${style.activeLink} prevPage`}
                    tabIndex={pageNo === 1 ? "-1" : "0"}>Prev
                    </a>
                <span className={`sep ${style.separator}`}>|</span>
                <a
                    onKeyUp={pageNo === nbPage ? () => { return false } : handleNext}
                    onClick={pageNo === nbPage ? () => { return false } : handleNext}
                    className={pageNo === nbPage ? `${style.disabledLink} nextPage` : `${style.activeLink} nextPage`}
                    tabIndex={pageNo === nbPage ? "-1" : "0"}>Next
                    </a>
            </div>
        </div>
    )
}

export default Tabular;

