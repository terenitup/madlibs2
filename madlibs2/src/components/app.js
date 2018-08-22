import React, { Component } from 'react';
import Madlib_form from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div className='backgroundSkew'>
        <div className="madlib-heading">
            <h1>Bottega Mad Libs</h1>  
            <div className="madlib-subheading">
              Fill out the fields below and click the generate button<br/>to see the Mad Lib story.
            </div>
            <Madlib_form />
        </div>
      </div>
    );
  }
}