import React from "react";
import Link from "next/link";
import SvgLoader from "bv-react-svgloader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSearch,
  faPhone,
  faHome,
  faBars
} from "@fortawesome/fontawesome-free-solid";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          expand="md"
          style={{
            backgroundColor: "rgba(0,0,0,0.2)"
          }}
        >
          <NavbarBrand>
            <Link href="/consulting-network">
              <a>
                <SvgLoader src="/static/svgs/images/yellowmount.svg" />
              </a>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">
                  <FontAwesomeIcon icon={faHome} size="md" color="#fff" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <FontAwesomeIcon icon={faSearch} size="md" color="#fff" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <FontAwesomeIcon icon={faEnvelope} size="md" color="#fff" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <FontAwesomeIcon icon={faPhone} size="md" color="#fff" />
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <FontAwesomeIcon icon={faBars} size="lg" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link href="/executive-search">
                      <a>Executive Search</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/executive-assessment">
                      <a>Executive Assessment</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/executive-coaching">
                      <a>Executive Coaching</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/strategic-consulting">
                      <a>Strategic Consulting</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/insights">
                      <a>Insight</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/locations">
                      <a>Locations</a>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx>
          {`
            a,
            a:hover,
            a:active,
            a:visited {
              text-decoration: none;
              color: #000;
            }
          `}
        </style>
      </div>
    );
  }
}
