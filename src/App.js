import "./styles.css";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataList: [],
      finalList: [],
      currIndex: 1
    };
  }

  handleleft = () => {
    if (this.state.currIndex == 1) {
      this.setState({
        currIndex: 6
      });
    } else {
      this.setState({
        currIndex: this.state.currIndex - 1
      });
    }
  };

  handleright = () => {
    if (this.state.currIndex == 6) {
      this.setState({
        currIndex: 1
      });
    } else {
      this.setState({
        currIndex: this.state.currIndex + 1
      });
    }
  };

  componentDidMount() {
    let temp = [];
    let url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          dataList: json,
          currIndex: 1
        });
      });
  }
  render() {
    let result = this.state.dataList.map((res) => {
      if (this.state.currIndex === res.id) {
        return (
          <div className="caraousel-image" key={res.id}>
            <img src={res.thumbnailUrl} alt={res.title} />
          </div>
        );
      } else {
        return <div></div>;
      }
    });
    return (
      <div className="App">
        <div className="caraousel-container">
          <div className="move-left">
            <input type="button" onClick={this.handleleft} value="<" />
          </div>
          {result}
          <div className="move-right">
            <input type="button" onClick={this.handleright} value=">" />
          </div>
        </div>
      </div>
    );
  }
}
