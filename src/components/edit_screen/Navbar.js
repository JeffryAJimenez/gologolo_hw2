import React from 'react'
import Modal from '../modals/YesNoModal'

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
    this.state = {
      show: false
    }
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  handleDeleteLogo = () => {
    console.log("handle delete logo")
    this.props.deleteLogoCallback(this.props.logo.key)
  }

  handleCloseDeleteModal = () => {

    this.setState ({show: false})

  }

  handleOpenDeleteModal = () => {
    this.setState({show: true})

  }

  render() {
    return (
      <React.Fragment>
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li 
            style={ {cursor: "pointer"} }
            onClick={this.handleOpenDeleteModal}
            >&#128465;</li>
          </ul>
        </div>

        
        
      </nav>

      <Modal
          closeModalCallback={this.handleCloseDeleteModal}
          yesModalCallback = {this.handleDeleteLogo}
          show = {this.state.show}
          bodyText= "Are you sure you want to delete this logo?"

        />
        
      </React.Fragment>
    )
  };
}

export default Navbar;