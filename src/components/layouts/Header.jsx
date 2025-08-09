import React from "react";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] text-white py-8">
        <Container>
          <Flex className={"justify-between"}>
            <Image imgSrc={Logo} />
            <div className="">
              <ul className="flex items-center text-[16px] font-medium gap-x-10 font-montserrat leading-[26px]">
                <li>Home </li>
                <li>Pages</li>
                <li>Support</li>
                <li>Contact</li>
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
