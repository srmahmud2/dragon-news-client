import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../../../assets/bg.png";
const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="mb-2 w-100" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button className="w-100" variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
