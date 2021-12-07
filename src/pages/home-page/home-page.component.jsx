import React from "react";
import CardList from "../../components/card-list/card-list.component";
import SearchBox from "../../components/search-box/search-box.component";
import "./home-page.styles.css";


const request = require("../../utility/utility-functions");

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [],
    };
  }

  async componentDidMount() {
    const path = "/users/vq/allcities";

    const data = JSON.parse(localStorage.getItem("userAuthData"))

    try {
      const result = await request(path, {
        userid: data.userid,
        city: "",
        authtoken: data.authtoken,
      });
      this.setState({
        services: result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <CardList services = {this.state.services} searchInput = {this.props.searchInput} />
      </div>
    );
  }
}

export default Home;
