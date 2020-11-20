import React from "react";
import Link from "next/link";
import SvgLoader from "bv-react-svgloader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSearch,
  faPhone,
  faHome,
  faBars,
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
  DropdownItem,
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand>
            <Link href="/">
              <a>
                <SvgLoader src="/static/svgs/images/logo.svg" />
              </a>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <FontAwesomeIcon icon={faHome} size="md" color="#fff" />
                  <div style={{ width: "20px" }} />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contact">
                  <button
                    className="btn btn-primary m-0 py-1"
                    style={{ fontSize: "12px" }}
                  >
                    CONTACT US
                  </button>
                  <div style={{ width: "20px" }} />
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <FontAwesomeIcon
                    icon={faBars}
                    size="lg"
                    style={{ fontSize: "20px" }}
                  />
                  <div style={{ width: "20px" }} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/solutions">
                      <a>Solutions</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/functions">
                      <a>Functions</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/sectors">
                      <a>Sectors</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link href="/partners">
                      <a>Partners</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/insight">
                      <a>Insight</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/events">
                      <a>Events</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/organisational-consulting">
                      <a>Organisational Consulting</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/featured-vacancies">
                      <a>Featured Vacancies</a>
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
