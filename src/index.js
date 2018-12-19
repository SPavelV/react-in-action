import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import * as serviceWorker from './serviceWorker';

const node = document.getElementById('root');

class Post extends Component {
  render() {
    return React.createElement(
      'div',
      {
        className: "post"
      },
      React.createElement(
        'h2',
        {
          className: 'postAuthor',
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'postBody'
          },
          this.props.content
        ),
        this.props.children
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends Component {
  render() {
    return React.createElement(
      'div',
      {
        className: 'comment'
      },
      React.createElement(
        'h2',
        {
          className: 'commentAuthor'
        },
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'commentContent'
          },
          this.props.content
        )
      )
    )
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

const App = React.createElement(
  Post,
  {
    id: 1,
    content: ' said: This is a post!',
    user: 'Dan'
  },
  React.createElement(Comment, {
    id: 2,
    user: 'bob',
    content: ' commented: wow! how cool!'
  })
);

render(App, node);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
