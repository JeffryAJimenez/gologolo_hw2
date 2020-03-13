import React, {Component} from 'react'
import {Modal, Button} from 'react-materialize'


class Materialize_Dialog extends Component{

    render(){

        return(
            <Modal header = "EL DIABLO" trigger={<Button>Click Me</Button>}>

                Me duele la cabeza
               
            </Modal>
            
   

        );
    }

}
export default Materialize_Dialog