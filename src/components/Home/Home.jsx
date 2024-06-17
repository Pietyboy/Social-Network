import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrapper, Header, NovigationButton, Content } from './Home.styles';
// Buttons
import arrowLeft from '../../image/arrowLeft.svg';
import arrowRight from '../../image/arrowRight.svg';
// Components
import Preloader from "../Common/Preloader/Preloader";
import { withSuspense } from "../../hoc/withSuspense";
import NewRealises from '../NewRealises/NewRealises';
const ProfileContainer = React.lazy(() => import("../Profile/ProfileContainer"));
const Messenger = React.lazy(() => import("../Messenger/Messenger"));
const SearchContainer = React.lazy(() => import("../Search/SearchContainer"));
const LoginPage = React.lazy(() => import("../Login/LoginPage"));


const Home = (props) => {
    return (
        <Wrapper>
            <Header>
                <NovigationButton className="navLeftButton"><img src={arrowLeft} /></NovigationButton>
                <NovigationButton className="navLeftButton"><img src={arrowRight} /></NovigationButton>
            </Header>
            <Content>
                <Routes>
                    <Route path="/" element={ <NewRealises />}/>
                    <Route path="/search" element={ withSuspense(SearchContainer)} />
                    <Route path="/profile/:userId?" element={ withSuspense(ProfileContainer)} />
                    <Route path="/messenger" element={ withSuspense(Messenger)} />
                    <Route path="/login" element={withSuspense(LoginPage)} />
                </Routes>
            </Content>
        </Wrapper>
    );
}

export default Home;