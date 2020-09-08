import axios from 'axios'

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
const p ="https://api.allorigins.win/raw?url="
const url = "https://covid-19india-api.herokuapp.com/v2.0/country_data"
const totalUrl ="https://api.covid19india.org/data.json"
const stateUrl = "https://covid-19india-api.herokuapp.com/v2.0/state_data"
const helpContact ='https://covid-19india-api.herokuapp.com/v2.0/helpline_numbers'

export const indiaTotalData = async()=>{
    try{
    const results = await axios.get(p+url)
    return {results};

}catch (error){
    return error;
}
}


export const indiaStateData = async()=>{
    try{
    const result = await axios.get(totalUrl)
    return {result};

}catch (error){
    return error;
}
}

export const contactData = async()=>{
    try{
    const contact = await axios.get(p+helpContact)
    return {contact};

}catch (error){
    return error;
}
}


export const stateData = async()=>{
    try{
    const state = await axios.get(p+stateUrl)
    return {state};

}catch (error){
    return error;
}
}


