import React from "react";
import { Wrapper, PageButton, NavButton } from './Paginator.styled';
import { useState } from "react";
import arrowLeft from '../../../image/arrowLeft.svg'
import arrowRight from '../../../image/arrowRight.svg'


let Paginator = ({ totalItemsCount, pageSize, pagesItemSize, onPageChanged, currentPage, setCurrentPage }) => {

    let [currentPageSerias, setPageSeries] = useState(0);

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 0; i < pagesCount;) {
        let pageItems = [];
        for (let j = 0; j < pagesItemSize; j++, i++) {
            if (pagesCount > i)
                pageItems.push(i + 1);
        }
        pages.push(pageItems);
    }

    const onClickNext = () => {
        setPageSeries(currentPageSerias + 1);
    }

    const onClickPrev = () => {
        setPageSeries(currentPageSerias - 1);
    }

    return (
        <Wrapper>
            {currentPageSerias > 0 ?
                <NavButton onClick={onClickPrev}><img src={arrowLeft} /></NavButton> : ' '
            }
            {pages.at(currentPageSerias).map(x => x === currentPage ?
                <PageButton style={{ opacity: 1 }} onClick={() => onPageChanged(x)}>{x}</PageButton> :
                <PageButton style={{}} onClick={() => onPageChanged(x)}>{x}</PageButton>)}
            {(currentPageSerias + 1) * pagesItemSize > pagesCount ? '' :
                <NavButton onClick={onClickNext}><img src={arrowRight} /></NavButton>
            }
        </Wrapper>
    )
}

export default Paginator;