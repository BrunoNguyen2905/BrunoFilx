// import styled from 'styled-components/macro'
import styled from "styled-components";
import { isScrolledProps } from "../../types";

export const Container = styled.div<isScrolledProps>`
  position: fixed;
  top: 0;
  color: white;
  font-size: 14px;
  width: 100%;
  z-index: 999;
  background: ${(props) => props.isScrolled ? '#0b0b0b': 'linear-gradient(to top, transparent 0%, rgb(0,0,0,0.3) 50%)'};
`;

export const Wrapper = styled.div`
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgLogo = styled.img`
  height: 25px;
  margin-right: 40px;
`;

export const ProfileImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  object-fit: cover;
  cursor: pointer;
`;

export const Title = styled.span`
  margin-right: 20px;
  cursor: pointer;
`;
export const IconWrapper = styled.div`
  margin: 0px 15px;
  cursor: pointer;
`;
export const ProfileOptions = styled.div`
  display: none;
  background-color: #0b0b0b;
  border-radius: 5px;
`;

export const ProfileWrapper = styled.div`
  &:hover ${ProfileOptions} {
    display: flex;
    flex-direction: column;
    position: absolute;
  }
`;
export const OptionTitle = styled.span`
  padding: 10px;
  cursor: pointer;
`;

