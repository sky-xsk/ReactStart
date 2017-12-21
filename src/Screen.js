import './App.css';

import React from 'react';

class Screen extends React.Component {
    static defaultProps = {
      showContent:"无内容"
    }
    render () {
      const showContent = this.props.showContent;
      return (
        <div className='screen'>
          {showContent}
        </div>
      )
    }
  }
export default Screen;