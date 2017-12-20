import React from 'react';

//高阶组件

// const formTheme=(prop)=>({theme})=>theme[prop];

// const backgroundColor = formTheme('bgColor');

// const textColor = formTheme('textColor');

// const Button = style.button`background-color:${backgroundColor}
//             color:${textColor}`;

// <Button theme={theme.primary}>Submit</Button>

//高阶组件
// const HeroList=({heroes})=>(
//     <ul>
//         {
//             map((hero)=>(
//                 <li key={hero}>{hero}</li>
//             ),heroes)
//         }
//     </ul>
// )

//原生写法抽象类
// class LikeButton{
//     constructor(){
//         this.state={isLiked:false}
//     }
//     setState(state){
//         const oldEl = this.el;
//         this.state = state;
//         this.el = this.render();
//         if(this.onStateChange){
//             this.onStateChange(oldEl,this.el);
//         }
//     }
    
//     changeLikeText(){
//         this.setState({
//             isLiked : !this.state.isLiked
//         })
//     }
    
//     render(){
//         this.el = createDOMFormString(`
//         <button class='like-button'>
//             <span class='like-text'>${this.state.isLiked ? 'yes':'no'}</span>
//             <span>👍</span>
//         </button>`)
//         this.el.addEventLister('click',this.changeLikeText.bind(this),false)
//         return this.el
//     }

// }

// //使用此类
// const likeButton = new LikeButton();
// wrapper.appendChild(likeButton.render());
// likeButton.onStateChange = (oldEl,newEl)=>{
//     wrapper.insertBefore(newEl,oldEl)
//     wrapper.removeChild(oldEl);
// }


//完整的点赞功能 组件化的思想
class Component{
    setState(state){
        const oldEl = this.el;
        this.state = state;
        this.el = this._renderDOM();
        if(this.onStateChange){
            this.onStateChange(oldEl,this.el)
        }
    }
    _renderDOM(){
        this.el = createDOMFromString(this._renderDOM())
        if(this.onClick){
            this.el.addEventListener('click',this.onClick.bind(this),false)
        }
        return this.el;
    }
}

const mount = (component,wrapper)=>{
    wrapper.appendChild(component._renderDOM())
    component.onStateChange=(oldEl,newEl)=>{
        wrapper.insertBefore(newEl,oldEl)
        wrapper.removeChild(oldEl);
    }
}


class LikeButton extends Component {
    constructor (props) {
        super(props)
        this.state = { isLiked: false }
    }

    onClick () {
      this.setState({
        isLiked: !this.state.isLiked
      })
    }

    render () {
      return `
        <button class='like-btn' style="background-color: ${this.props.bgColor}">
            <span class='like-text'>
                ${this.state.isLiked ? '取消' : '点赞'}
            </span>
            <span>👍</span>
        </button>
      `
    }
  }

  mount(new LikeButton({ bgColor: 'red' }), wrapper);