import { useState } from "react";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import {
  Container,
  Wrapper,
  LeftWrapper,
  RightWrapper,
  ImgLogo,
  ProfileImg,
  Title,
  IconWrapper,
  ProfileWrapper,
  ProfileOptions,
  OptionTitle
} from "./navbarStyle";

const Navbar = () => {
    //when scrolled down, let background color black
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false: true)
        return () => (window.onscroll = null)
    }
  return (
    <Container isScrolled={isScrolled}>
      <Wrapper>
        <LeftWrapper>
          <ImgLogo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix"
          />
          <Title>Homepage</Title>
          <Title>TV Shows</Title>
          <Title>Movies</Title>
          <Title>New &amp; Popular</Title>
          <Title>My List</Title>
          <Title>Watch Again</Title>
        </LeftWrapper>
        <RightWrapper>
          <IconWrapper>
            <Search />
          </IconWrapper>
          <span>KID</span>
          <IconWrapper>
            <Notifications />
          </IconWrapper>
          <ProfileImg
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user"
          />
          <ProfileWrapper>
            <IconWrapper>
              <ArrowDropDown />
            </IconWrapper>
            <ProfileOptions>
                <OptionTitle>Settings</OptionTitle>
                <OptionTitle>Logout</OptionTitle>
            </ProfileOptions>
          </ProfileWrapper>
        </RightWrapper>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
