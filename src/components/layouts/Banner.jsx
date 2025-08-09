import React from 'react';
import Container from '../Container';
import Image from '../Image';
import BannerImg from '/src/assets/banner.png';
import BannerPart from '/src/assets/bannerPart.png';
import Heading from '../Heading';
import Flex from '../Flex';
import Button from '../Button';

const Banner = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] text-white py-[119px]">
        <Container>
            <Image imgSrc={BannerImg}/>
               <Flex className={"justify-between mt-[100px]"}>
                    <div className="mt-24">
                        <Image imgSrc={BannerPart}/>
                    </div>
                    <div className="">
                         <Heading  text={"Events and Updates"} tagName={"h3"} className={"w-[272px] text-[36px] font-medium font-montserrat uppercase text-right ml-[70px]"}/>
                         <Heading text={"Explore the high-tech, low-life world where the lines between humanity and machinery blur."} tagName={"p"} className={"w-[341px] text-[18px] font-medium font-montserrat leading-[32px] text-[#DDDDDD] text-right mt-[44px] mb-[58px]"}/>
                          <Button className={"ml-[200px]"}>Read More</Button>
                    </div>
                </Flex>
           
        </Container>
      </div>
    </>
  )
}

export default Banner
