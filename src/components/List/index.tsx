import { useRef, useState } from "react";
// import { ListProps } from '../../types'
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../ListItem";
import {
  ListContainer,
  ListTitle,
  ListItemContainer,
  ListWrapper,
} from "./listStyle";
const List: React.FC = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, seSliderNumber] = useState(0);
  const listRef = useRef<HTMLDivElement>(null)!;

  const handleClick = (direction: String): void => {
    //getBoundingClientRect to get x, y axis, right, left, top, bottom, width, height
    setIsMoved(true);
    let distance = Math.floor(listRef.current!.getBoundingClientRect().x - 50); //find the exact position of x (slider) from the left (width of 1 listItem is 225px + 5px (margin right))
    if (String(direction) === "left" && Number(slideNumber) > 0) {
      seSliderNumber(slideNumber - 1);
      listRef.current!.style.transform = `translateX(${230 + distance}px)`;
    }
    if (String(direction) === "right" && Number(slideNumber) < 5) {
      seSliderNumber(slideNumber + 1);
      listRef.current!.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log("distance and sliderNumber", distance, slideNumber);
    console.log("11", listRef.current!.getBoundingClientRect());
  };
  return (
    <ListContainer>
      <ListTitle>Continue to watch</ListTitle>
      <ListWrapper isMoved={isMoved}>
        <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} />
        <ListItemContainer ref={listRef}>
          <ListItem indexValue={0} />
          <ListItem indexValue={1} />
          <ListItem indexValue={2} />
          <ListItem indexValue={3} />
          <ListItem indexValue={4} />
          <ListItem indexValue={5} />
          <ListItem indexValue={6} />
          <ListItem indexValue={7} />
          <ListItem indexValue={8} />
          <ListItem indexValue={9} />
        </ListItemContainer>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
      </ListWrapper>
    </ListContainer>
  );
};

export default List;
