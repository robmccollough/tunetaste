import cryptoRandomString from 'crypto-random-string';
import qs from 'qs'

//Builds auth url
export function getAuthURL(stateCode){
    // const {AUTH_URI_BASE, CLIENT_ID, REDIRECT_URI} = process.env;
    const params = {
        scopes : 'user-read-private user-top-read',
        response_type: 'token',
        client_id : process.env.CLIENT_ID,
        redirect_uri : process.env.REDIRECT_URI,
        state : stateCode
    }
    let url = process.env.AUTH_URI_BASE + qs.stringify(params, {encodeValuesOnly : true});
    return url
}


//State Code Functions (Requires localStorage object to be passed in through store)

export function setStateCode(store, len = 16, type = 'url-safe'){
    if(!store){
        return false;
    }
    let stateCode = cryptoRandomString({length : len, type : type});
    store.setItem('spotify-state-key', stateCode);
    return stateCode;
}

export function getStateCode(store){
    if(!store){
        return false
    }
    let code = store.getItem('spotify-state-key');
    return code;
}

export function removeStateCode(store){
    if(!store){
        return false;
    }
    store.removeItem('spotify-state-key');
    return true;
}

