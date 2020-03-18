import React, { Component } from 'react'
//import Modal from './Modal'
import Modal from '../modals/Modal'
// import { Modal } from 'materialize-css';

const Style = {
    display: 'flex',
    alignItems: 'center',
    flex: 1

}

const Value = {
    fontSize: 24
}

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : this.props.logo.textColor,
            fontSize : this.props.logo.fontSize,
            editModalShow: false,
            text: this.props.logo.text,
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            borderThickness: this.props.logo.borderThickness,
            borderRadius: this.props.logo.borderRadius,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin
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

    handleBackgroundColorChange = (event) => {
        console.log("handleBackGroundColorChange to " + event.target.value)
        this.setState({backgroundColor: event.target.value}, this.completeUserEditing)

    }

    handleBorderColorChange = (event) => {
        console.log("handleBorderColor to " + event.target.value)
        this.setState({borderColor: event.target.value}, this.completeUserEditing)
    }

    handleBorderThicknessChange = (event) => {
        this.setState({borderThickness: event.target.value}, this.completeUserEditing)
    }

    handleBorderRadiusChange = (event) => {
        this.setState({borderRadius: event.target.value}, this.completeUserEditing)
    }

    handlePaddingChange = (event) => {
        this.setState({padding: event.target.value}, this.completeUserEditing)
    }

    handleMarginChange = (event) => {
        this.setState({margin: event.target.value}, this.completeUserEditing)
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
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, this.state.fontSize, 
            this.state.backgroundColor, this.state.borderColor, this.state.borderThickness, this.state.borderRadius, this.state.padding, this.state.margin);
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
                        <div className="row" style={Style}>
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div> 
                            <div style={Value}>{this.props.logo.fontSize}</div>
                        </div>

                        <div className="row">
                        <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color" 
                                    onChange={this.handleBackgroundColorChange}
                                    value={this.props.logo.backgroundColor} />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    onChange={this.handleBorderColorChange}
                                    value={this.props.logo.borderColor} />
                            </div>
                        </div>

                        <div className="row" style = {Style}>
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="144"
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderThickness} />
                            </div>
                            <div style={Value}>{this.props.logo.borderThickness}</div>
                        </div>

                        <div className="row" style={Style}>
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="144"
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                            <div style={Value}>{this.props.logo.borderRadius}</div>

                        </div>

                        <div className="row" style={Style}>
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="144"
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                            <div style={Value}>{this.props.logo.padding}</div>

                        </div>

                        <div className="row" style={Style}>
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="144"
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                            <div style={Value}>{this.props.logo.margin}</div>

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