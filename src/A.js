import React, { Component } from 'react';

// const connect = (mapStateFormStore)=>(WrappedComponent)=>{
//     class InnerComponent extends components{
//         static contextTypes = {
//             store:T.object
//         }

//         store={
//             others:{}
//         }

//         componentDidMount(){
//             const {store} = this.context
//             this.unSubscribe = store.subscribe(()=>{
//                 this.setState({others:mapStateFormStore(store.getState())})
//             })
//         }

//         componentWillUnmount(){
//             this.unSubscribe()
//         }

//         render(){
//             const {others} = this.setState
//             const props={
//                 ...this.props,
//                 ...others
//             }
//         }
//     }
//     return <WrappedComponent {...props} />
// }

// class MyContainer extends Component{

// }
// export default connect(() => ({}))(MyContainer)  


class MessageView extends Component{
    render(){
        return(
            <div className='containter'>
                <div className="form">
                    <span className="label">Form:</span>
                    <span className="value">Join Doe</span>
                </div>
            </div>
        )
    }
}

export default MessageView;