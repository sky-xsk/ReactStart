import React from 'react';

class Photo extends React.Component {
constructor(props){
    super(props);
    this.toggleLiked = this.toggleLiked.bind(this);
    this.state={liked:false};
    
};

toggleLiked() {
    this.setState({
      liked: !this.state.liked
    });
}

render(){
    var buttonClass = this.state.liked ? 'active' : '';
    return(
        <div>
            <h4>修改样式</h4>
            <button onClick={this.toggleLiked} className={buttonClass}>收藏</button>
            <span>{this.props.caption}</span>
            <Fors />
            <Fors1 />
        </div>
    );
  }
}


class Fors extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>组件嵌套</li>
                    <Fors1 />
                </ul>
            </div>
        ) 
    }
}


class Fors1 extends React.Component{
    render(){
        return(
            <p>嵌套</p>
        )
    }
}
export default Photo;