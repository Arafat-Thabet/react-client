

//import axios from 'axios';
const axios = require('axios');
if(typeof DoRequest != 'function'){
    /**
     * do requset 
     * @param string url 
     * @param object data 
     * @param string method 
     * @param object headers 
     * @returns object
     */
 async function DoRequest(url,data={},method="GET",headers={'Content-Type': 'application/json'}) {
    const response = await  fetch(url,{
        method: method,
        headers:headers,
        body: JSON.stringify(data)
    });
    return response.json();
}
}
//if(typeof PostData != 'function'){
     /**
     * do post requset 
     * @param string url 
     * @param object data 
     * @param string method 
     * @param object headers 
     * @returns object
     */
  function  PostData(url,data={},headers={'Content-Type': 'application/json',})  {
   
    defaultHeader={'Content-Type': 'application/json'}
    if(headers.hasOwnProperty('Content-Type')!=true){
        headers=defaultHeader;
    }
    
   // headers = JSON.parse(headersData);
//var headers=headers.concat(headers,headersData)

//Object.defineProperty(headers,"Origin",{value:"http://newtest.smart-hr.top"} );
//Object.defineProperty(headers,"hostname",{value:"https://newtest.smart-hr.top"} );
//Object.defineProperty(headers,"access-control-request-headers",{value:"Content-Type"} );
//Object.defineProperty(headers,"access-control-request-method",{value:"OPTIONS"} );
//redirect: 'manual', // manual, *follow, error
//Object.defineProperty(headers,"Access-Control-Allow-Origin",{value:"*"} );



  const options = {
    method: 'POST',
    headers:headers,
    data:JSON.stringify(data),
    url,
  };
  return axios(options);
  console.log("response=",response);

      /*const response =  fetch(url,{
        method: "POST",
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        referrerPolicy: 'no-referrer',
     
        headers:headers,
        body: JSON.stringify(data)
    });
    return response;*/
}
//}
//if(typeof GetData !="function"){
       /**
     * do get requset 
     * @param string url 
     * @param object data 
     * @param string method 
     * @param object headers 
     * @returns object
     */
 const  GetData=(url,data={},headers={'Content-Type': 'application/json'}) => {
   
    defaultHeader={'Content-Type': 'application/json'}
    if(headers.hasOwnProperty('Content-Type')!=true){
        headers.putAll(defaultHeader);
    }
      const response =  fetch(url,{
        method: "GET",
        headers:headers,
        body: JSON.stringify(data)
    });
    return response.json();
}
//}
module.exports = {
    PostData,
    GetData
  }