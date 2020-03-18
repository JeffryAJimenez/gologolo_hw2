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
    position: 'relative',
    zIndex: 1

}

const footerStyle = {
    position: 'absolute',
    bottom: 10,
    zIndex: 1
}
const headerStyle = {
    position: 'absolute',
    top: 5,
    zIndex: 1
}

const bodyStyle = {
    position: 'absolute',
    top: 80,
    zIndex: 1
}


class YesNoModal extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            bodyText: this.props.bodyText
        }
    }

    onNo= () => {
        this.props.closeModalCallback()
    }

    onYes = () => {

        this.props.yesModalCallback()
        this.onNo()
        
    }

    
    
    render () {
        
    
        if(!this.props.show) return null ;


        return (
            
            <div style={backdropStyle}>
                <div style={modalStyle}>
                    <div style={headerStyle}>
                        <h4>goLogoLo</h4>
                    </div>
                    <div style={bodyStyle}>
                        <p>{this.state.bodyText}</p>
                    </div>
                    
                    <div style={footerStyle}>
                         <Button onClick={this.onNo}>NO</Button>
                         <Button onClick={this.onYes}>YES</Button>
                    </div>
                    
                </div>
                
            </div>
            
            
           
        )
      }

      
}

export default YesNoModal