import React from 'react';

//简单的点赞功能
class Likes extends React.Component{
    constructor(){
        super()
        this.state = {isLiked:false}
    }

    handleClickOnLikeButton(){
        this.setState({
            isLiked:!this.state.isLiked
        })
        if(this.props.onClick){
            this.props.onClick()
        }
    }

    render(){
        //1.

        // const likeText = this.props.likeText || 'no'
        // const unlikeText = this.props.unlikeText || 'yes'
        // return (
        //     <button onClick={this.handleClickOnLikeButton.bind(this)}>
        //         {this.state.isLiked ? likeText : unlikeText}
        //     </button>
        // )

        //2.
        const wordings = this.props.wordings || {
            likeText:'no',
            unlikeText:'yes'
        }
        return (
            <div>
                <button onClick={this.handleClickOnLikeButton.bind(this)}>
                     {this.state.isLiked ? wordings.likeText : wordings.unlikeText}
                 </button>
            </div>
          
        )
    }
}

export default Likes;