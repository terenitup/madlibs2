import React, { Component } from 'react';
import Madlib_form from './madlib_form';

import Header from './header';
import Card from './card';
import Input from './input';

export default class Home extends Component {
  render() {
    return (
      <div className='backgroundSkew'>
        <div className="home">
            {/* <h1>Bottega Mad Libs</h1>  
            <div className="madlib-subheading">
              Fill out the fields below and click the generate button<br/>to see the Mad Lib story.
            </div>
            <Madlib_form /> */}
            {Header()}
            <Card />
        </div>
      </div>
    );
  }
}