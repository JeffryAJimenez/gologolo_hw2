import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderStyle: "solid",
                borderWidth:  this.props.logo.borderThickness + "pt",
                borderRadius: this.props.logo.borderRadius + "pt",
                padding: this.props.logo.padding + "pt",
                margin: this.props.logo.margin + "pt"

            }
        }
        return (
            <div className="col s8"
                style={ styles.container }>
                {this.props.logo.text}
            </div>
        )
    }
}

export default TextEditWorkspace