import React, { useState } from 'react';
import style from './Pagination.module.css';
import cn from 'classnames';

let Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        <div className={style.pagination}>
            {
                portionNumber > 1
                && <button className="btn" onClick={ () => setPortionNumber(portionNumber - 1) }>Prev</button>
            }
            <div className={style.pagesContainer}>
                {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(
                    page => <span key={page} className={ cn({
                        [style.selectedPage] : props.currentPage === page
                        })
                    } onClick={ () => props.onPageChange(page) }>{page}</span>
                )}
            </div>
            {
                portionCount > portionNumber
                && <button className="btn" onClick={ () => setPortionNumber(portionNumber + 1) }>Next</button>
            }
        </div>
    )
}

export default Pagination;