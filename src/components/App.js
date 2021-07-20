import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostsList } from './';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              src="https://image.flaticon.com/icons/png/512/1875/1875043.png"
              alt="logo"
              id="logonav"
            />
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://img-premium.flaticon.com/png/512/3473/premium/3473808.png?token=exp=1626777724~hmac=51c50bbe3c8d5f4d84833a1d9294777f"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/png/512/2922/2922468.png"
                    alt="user-dp"
                  />
                  <span>John Does</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/png/512/2922/2922468.png"
                    alt="user-dp"
                  />
                  <span>John Does</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://image.flaticon.com/icons/png/512/2922/2922468.png"
                alt="user-dp"
                id="user-dp"
              />
              <span>John Does</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log in</li>
                <li>Log out</li>
                <li>register</li>
              </ul>
            </div>
          </div>
        </nav>
        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
