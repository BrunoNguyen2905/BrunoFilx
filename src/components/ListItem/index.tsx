import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { ListItemProps } from "../../types";
import { ListItemContainer, ItemInfo, IconsGroup, ItemInfoTop,GenreField, AgeLimitField, DescriptionField } from "./listItemStyle";

const ListItem: React.FC<ListItemProps> = ({ indexValue }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/353573691.sd.mp4?s=4a67049e97615f7094fda8b838b1cf62ecf3a086&profile_id=139&oauth2_token_id=57447761";
  return (
    <ListItemContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      indexValue={isHovered ? Number(indexValue * 255 - 50) : 0}
    >
      <img
        src="https://cdn.mos.cms.futurecdn.net/2KmZgbqww87KRVAMMu8TBM.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <ItemInfo>
            <IconsGroup>
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </IconsGroup>
            <ItemInfoTop>
              <span>1 hour 14 mins</span>
              <AgeLimitField>+16</AgeLimitField>
              <span>1999</span>
            </ItemInfoTop>
            <DescriptionField>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              quis reprehenderit amet quidem quia saepe laudantium. Vel dolorum.
            </DescriptionField>
            <GenreField>Action</GenreField>
          </ItemInfo>
        </>
      )}
    </ListItemContainer>
  );
};

export default ListItem;
