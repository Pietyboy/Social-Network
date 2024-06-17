import React from "react";
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, getUserId, toggleIsFollowing, requestUsers, followSuccess, unfollowSuccess } from "../../redux/searchReducer";
import SearchFunctional from './SearchFunctional'
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getPagesItemSize } from "../../redux/users-selectors";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class SearchContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    
    // }

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    getId = (id) => {
        this.props.getUserId(id);
    }

    setPage = (page) => {
        this.props.setCurrentPage(page);
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <SearchFunctional
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                setPage={this.props.setPage}
                pageSize={this.props.pageSize}
                users={this.props.users}
                followSuccess={this.props.followSuccess}
                unfollowSuccess={this.props.unfollowSuccess}
                onPageChanged={this.onPageChanged}
                getId={this.getId}
                followingInProgress={this.props.followingInProgress}
                toggleIsFollowing={this.props.toggleIsFollowing}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pagesItemSize={this.props.pagesItemSize}
            />
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        pagesItemSize: getPagesItemSize(state)
    }
}

export default compose(
    connect(mapStateToProps, { followSuccess, unfollowSuccess, setCurrentPage, toggleIsFollowing, getUserId, requestUsers, follow, unfollow }),
    //withAuthRedirect
)(SearchContainer); 