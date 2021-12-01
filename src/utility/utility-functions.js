var axios = require("axios").default;
var homeRoute = "https://ben-backend.herokuapp.com";

module.exports = async (endpoints, data) => {
  const requestHandler = async (endpoints, data) => {
    var options = {
      method: "POST",
      url: homeRoute + endpoints,
      data: data,
    };

    let z;
    await axios
      .request(options)
      .then((response) => {
        z = response.data;
      })
      .catch((error) => {
        console.error(error);
      });

    return z;
  };
  console.log(endpoints,data)
  const result = await requestHandler(endpoints, data);

  console.log(result)
};

