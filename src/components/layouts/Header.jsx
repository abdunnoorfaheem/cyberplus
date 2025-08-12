import React from "react";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] text-white py-8">
        <Container>
          <Flex className={"justify-between"}>
            <Image imgSrc={Logo} />
            <div className="">
              <ul className="flex items-center text-[16px] font-medium gap-x-10 font-montserrat leading-[26px]">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/pages"}>Pages</Link></li>
                <li><Link to={"/support"}>Support</Link></li>
                <li><Link to={"contact"}>Contact</Link></li>
              </ul>
            </div>
            <Button>Get started free</Button>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
