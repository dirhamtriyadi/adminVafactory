import Swal from "sweetalert2";
import {
  React,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Avatar,
  getItem
} from "../helpers";

class DropdownProfile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  logout(){
    Swal.fire({
      title: "Konfirmasi Keluar !!",
      text: "Apakah anda ingin keluar ?",
      icon: "info",
      position: "top-center",
      cancelButtonText: "Tidak",
      showCancelButton: true,
      confirmButtonText: "OK",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
        localStorage.clear();
      }
    })
  }
  render() {
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className="dropdown navbar-user"
        tag="li"
      >
        <DropdownToggle tag="a">
          <Avatar name={getItem('userdata').name}size="30" color="#00743C" round="20px" />
          <span
            className="d-none d-md-inline"
            style={{ cursor: "pointer" }}
          ></span>{" "}
          <b className="caret"></b>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu dropdown-menu-right" tag="ul">
          <DropdownItem onClick={()=>window.location.href="/profile"}>Profile</DropdownItem>
          <DropdownItem onClick={()=>this.logout()}>Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownProfile;
