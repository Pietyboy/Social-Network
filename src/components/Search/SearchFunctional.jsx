import React from "react";
import { Wrapper, ResultsContainer, SearchContainer, SearchButton, SearchBar } from './Search.styles';
import Paginator from "../Common/Paginator/Paginator";
import User from "../Users/User";

let SearchFunctional = ({users, getId, followingInProgress, unfollow, follow, currentPage, setPage, onPageChanged, totalUsersCount, pageSize, pagesItemSize}) => {


    return (
        <Wrapper>
            <SearchContainer>
                <SearchBar />
                <SearchButton />
            </SearchContainer>
            <ResultsContainer>
                {
                    users.map(user => <User user={user} getId={getId} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow}/>)
                }
            </ResultsContainer>
            <Paginator currentPage={currentPage} setCurrentPage={setPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} pagesItemSize={pagesItemSize}/>
        </Wrapper >
    )
}

export default SearchFunctional;