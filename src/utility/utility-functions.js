const axios = require("axios").default;
const homeRoute = "https://ben-backend.herokuapp.com";

module.exports = async (endpoints, data) => {
  const requestHandler = async (endpoints, data) => {
    const options = {
      method: "POST",
      url: homeRoute + endpoints,
      data: data,
    };

    let result = {};
    await axios
      .request(options)
      .then((response) => {
        result = response.data;
      })
      .catch((error) => {
        console.error(error);
      });

    return result;
  };
  
  
  console.log(data)
  const result = await requestHandler("/users/signup", data);
  //console.log(result)
  return result;
};
