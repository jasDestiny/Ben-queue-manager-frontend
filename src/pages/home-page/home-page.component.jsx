import React from "react";
import CardList from "../../components/card-list/card-list.component";
import SearchBox from "../../components/search-box/search-box.component";
import "./home-page.styles.css";

const request = require("../../utility/utility-functions");

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      services: [],
      searchField : ""
    };
  }

  handleChange = ({target,value}) => {
    this.setState({
      searchField : value
    })
  };

  async componentDidMount() {
    const path = "/users/vq/vqcitysearch";
    try {
      const result = await request(path, {
        userid: "",
        city: "",
        authtoken: "",
      });
      console.log(result);
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
        <SearchBox handleChange={this.handleChange} />
        <CardList />
      </div>
    );
  }
}

export default Home;
