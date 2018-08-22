import React, { Component } from 'react';
import Madlib_form from './madlib_form';

import Header from './header';

export default class Home extends Component {
  render() {
    return (
      <div className='backgroundSkew'>
        <div className="madlib-heading">
            <h1>Bottega Mad Libs</h1>  
            <div className="madlib-subheading">
              Fill out the fields below and click the generate button<br/>to see the Mad Lib story.
            </div>
            <Madlib_form />
            <Header />
        </div>
      </div>
    );
  }
}