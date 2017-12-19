import React from 'react';

class SeitchButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open:this.props.open
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.setState({open:!this.state.open})
    }

    render(){
        let open = this.state.open;
        let className = open ? 'switch-button open' : 'btn-switch';
        return (
            <label className={className} onClick={this.handleClick}>
                <input type='checkbox' checked={open} /> 男
            </label>
        )

    }

}
SeitchButton.propTypes={

};
SeitchButton.defaultProps ={
    open:false
};

export default SeitchButton;