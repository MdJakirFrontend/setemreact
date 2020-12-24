import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

//general  pages
import Dashboard from '../pages/Dashboard';
import CompanyReview from '../pages/CompanyReview';
import CreateNewCompanyProfile from '../pages/CreateNewCompanyProfile';
import InviteNewUser from '../pages/InviteNewUser';
import AddNewKeyPlayer from '../pages/AddNewKeyPlayer';
import AllKeyPlayer from '../pages/AllKeyPlayer';
import AllUsers from '../pages/AllUsers';
import Error404 from '../pages/Error404';
import CompanyQuestion from '../pages/CompanyQuestion';
import PostJob from '../pages/PostJob';
import PostJobSuccess from '../pages/PostJobSuccess';
import SelectPaymentMethods from '../pages/SelectPaymentMethods';

// Auth pages
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Reset from '../pages/Reset';
import Verify from '../pages/Verify';
import Forgot from '../pages/Forgot';


export default class Routes extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* general routes */}
                    <ProtectedRoute exact isAuthenticated={true} path='/' component={Dashboard} />
                    <ProtectedRoute exact isAuthenticated={true} path='/create-profile' component={CreateNewCompanyProfile} />
                    <ProtectedRoute exact isAuthenticated={true} path='/company-review' component={CompanyReview} />
                    <ProtectedRoute exact isAuthenticated={true} path='/invite-new-user' component={InviteNewUser} />
                    <ProtectedRoute exact isAuthenticated={true} path='/add-new-key-player' component={AddNewKeyPlayer} />
                    <ProtectedRoute exact isAuthenticated={true} path='/all-key-player' component={AllKeyPlayer} />
                    <ProtectedRoute exact isAuthenticated={true} path='/all-user' component={AllUsers} />
                    <ProtectedRoute exact isAuthenticated={true} path='/post-job' component={PostJob} />
                    <ProtectedRoute exact isAuthenticated={true} path='/company-ques' component={CompanyQuestion} />
                    <ProtectedRoute exact isAuthenticated={true} path='/post-job-success' component={PostJobSuccess} />
                    <ProtectedRoute exact isAuthenticated={true} path='/select-payment-method' component={SelectPaymentMethods} />
                    {/* Auth routes */}
                    <ProtectedRoute exact isAuthenticated={true} path='/signin' component={SignIn} />
                    <ProtectedRoute exact isAuthenticated={true} path='/signup' component={SignUp} />
                    <ProtectedRoute exact isAuthenticated={true} path='/reset' component={Reset} />
                    <ProtectedRoute exact isAuthenticated={true} path='/verify' component={Verify} />
                    <ProtectedRoute exact isAuthenticated={true} path='/forgot' component={Forgot} />
                    {/* Error404 */}
                    <Route exact path="*">
                        <Error404 />
                    </Route>
                </Switch>
            </>
        )
    }
}
