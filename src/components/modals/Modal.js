import React from 'react'
import Button from 'react-materialize/lib/Button';


const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
    zIndex: 1
    
}

const modalStyle ={
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 400,
    minHeight: 200,
    margin: '0 auto',
    padding: 30,
    position: 'relative'

}

const footerStyle = {
    position: 'absolute',
    bottom: 10
}
const headerStyle = {
    position: 'absolute',
    top: 5
}

const bodyStyle = {
    position: 'absolute',
    top: 50
}

const textBarStyle = {
    position: 'absolute',
    top: 80
}

class Modal extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            text: this.props.logo,
            bodyText: this.props.bodyText
        }
    }

    onClose= () => {
        this.props.closeModalCallback()
    }

    onContinue = () => {

        var newtext = this.state.text
        var i = newtext.length;

        while(i--){
            if(newtext.charAt(i) != ' '){
                this.props.changeTextCallback(this.state.text)
                this.onClose()
             return
            }   
        }

        this.setState({bodyText: 'Logo cannot be blank :('})

        
    }

    handleChange = (event) =>{
       
     this.setState({text: event.target.value})
            

        
    }
    
    
    render () {
        
    
        if(!this.props.show) return null ;


        return (
            
            <div style={backdropStyle}>
                <div style={modalStyle}>
                    <div style={headerStyle}>
                        <h4>Change Logo</h4>
                    </div>
                    <div style={bodyStyle}>
                        <p>{this.state.bodyText}</p>
                    </div>
                    <div style={textBarStyle}>
                        <input type='text'
                         onChange={this.handleChange}
                         placeholder={this.props.logo}>

                         </input>
                    </div>
                    <div style={footerStyle}>
                         <Button onClick={this.onClose}>Cancel</Button>
                         <Button onClick={this.onContinue}>Continue</Button>
                    </div>
                    
                </div>
            </div>
            
           
        )
      }

      
}

export default Modal