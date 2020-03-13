import React, { Component } from 'react'
//import Modal from './Modal'
import Modal from '../modals/Modal'
import ModalMaterialize from '../modals/ModalMaterialize'
// import { Modal } from 'materialize-css';

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : "#FF0000",
            fontSize : 24,
            editModalShow: false,
            text: this.props.logo.text
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    /**
     * Do handler
     */
    handleDo = () => {
        this.props.doCallback();     
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handleEditText = (event) => {
        console.log("handleEditText")
        this.setState({editModalShow: true})
    }

    handleChangeText = (newName) => {
        this.setState({text: newName}, this.completeUserEditing)
    }

    closeModalHandler = () =>{
        console.log("closeModalHandler")
        this.setState({editModalShow: false})
    }


    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, this.state.fontSize);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let redoDisabled = !this.props.canRedo();
        let undoClass = "waves-effect waves-light btn-small";
        let redoClass = "waves-effect waves-light btn-small"
        let editClass = "waves-effect waves-light btn-small"
        if (undoDisabled || this.state.editModalShow)
            undoClass += " disabled";
        if(redoDisabled || this.state.editModalShow)
            redoClass += " disabled";
        if(this.state.editModalShow)
            editClass += " disabled";
        return (
            <React.Fragment>
            <div className="card-panel col s4">

                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <button className= {editClass} onClick={this.handleEditText}>&#9998;</button>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleDo}>Redo</button> 
                            
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />

                            </div>
                        
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                           
        
                                
                    
                        </div>
                    </div>
                </div>
            </div>
            
            <Modal 
            show={this.state.editModalShow} 
            closeModalCallback={this.closeModalHandler} 
            logo={this.props.logo.text}
            changeTextCallback={this.handleChangeText}
            bodyText = ' '
            />
                              
            </React.Fragment>
        
            
        )
    }
}

export default TextEditSidebar