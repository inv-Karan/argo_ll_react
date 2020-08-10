import React, { Component } from "react";
import { connect } from 'react-redux';
import { getNews, editNews, newNews, removeNews } from '../../ActionCreators/newsAction'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "news_type": "abc",
        "title": "abc",
        "description": "demo",
        "datetime": "2020-08-04 11:34:21",
        "isActive": "1"
    };

  };

  componentDidMount() {
    this.props.getNews(5)
  };

  handleShowNews = () => {
    // const obj = this.state;
    debugger
    this.props.getNews(5)
  };

  handleUpdateNews = () => {
    const obj = this.state;
    debugger
    this.props.editNews(5, obj)
  };

  handleNewNews = () => {
    const obj = this.state;
    debugger
    this.props.newNews(obj)
  };

  handleDeleteNews = () => {
    const obj = this.state;
    debugger
    this.props.removeNews(obj)
  };

  render() {
    console.log(this.props.news)
    return (
      <div>
        dsfdsfs
        <button onClick={() => {
          this.handleShowNews()
        }}>Display news</button>
        <button onClick={() => {
          this.handleUpdateNews()
        }}>Update news</button>
        <button onClick={() => {
          this.handleNewNews()
        }}>New news</button>
        <button onClick={() => {
          this.handleDeleteNews()
        }}>Delete news</button>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    news: state.newsReducers.news
  };
};

const mapDispatchToProps = {
  getNews,
  editNews,
  newNews,
  removeNews
};

export default connect(mapStateToProps, mapDispatchToProps)(News);

