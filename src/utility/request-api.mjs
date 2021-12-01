import fetch from "node-fetch"

const requestAPI = async (endpoint,data) => {
    const url = 'http://3.109.185.118:4040' + endpoint
    const requestOptions = {
        method : 'POST',
        headers : {'Content-Type':'application/json'},
        body : JSON.stringify(data)
    }

    const response = await fetch(url,requestOptions)
    const result = await response.json();
    console.log(result)
    return result
}
requestAPI("/users/signup",{email:"ahah@gmail.com",password:"fafaa",city:"akhkak",usertype:"user"})
//export default requestAPI;