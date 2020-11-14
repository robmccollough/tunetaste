import Head from 'next/head';
import Router from 'next/Router';
import qs from 'qs';
import {getStateCode} from '../lib/auth'
import React from 'react'

/* This component is used to parse the query string and determine wether the user has been authenticated, 
to extract the access token and verify the state. If the access code is present and the state verified, a request is made 
to the /me endpoint. Only when this returns a 200 code is the user linked to the home page.
*/

export default class Home extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            access_token : null,
            storedStateCode : null,
            returnedStateCode: null,
            stateMatch : false,
            error : null
        }
    }

    componentDidMount(){
        //Parse query string for returned params
        const qp = qs.parse(window.location.hash)
        const storedStateCode = getStateCode(window.localStorage)

        
        let access_token = qp['#access_token']

        if(access_token){
            //Remove unsightly query params

            Router.replace('/')

            this.setState({
                access_token : access_token,
                returnedStateCode : qp.state,
                storedStateCode: storedStateCode,
                stateMatch : qp.state == storedStateCode,
                error: qp.error
            })
        }else{
            Router.push('/login')
        }


        
    }

    render(){
        const {access_token, stateMatch, error} = this.state;

        return (
            <div>
                <span>Token : {access_token}</span>
                <span>Match : {stateMatch.toString()}</span>
            </div>
            ) 
    }


}