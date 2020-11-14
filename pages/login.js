import Head from 'next/head'
import React from 'react'
import qs from 'qs'
import {setStateCode} from '../lib/auth'

export default class Login extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      url : null
    }
  }

  //set state code on mount, then use to build url
  async componentDidMount(){
    
    let code = setStateCode(window.localStorage);
    let url = await fetch('/api/auth', 
    {method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({stateCode : code})
    })
    .then(r => r.json())
    .then(r => r.url)


    this.setState({
      url : url
    })
  }
  
  render(){
    return (
      <div className="container">
        <Head>
          <title>Tunetaste</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main>
          <a href={this.state.url}>Authorize</a>
        </main>

      </div>
    )
  }
  
}


