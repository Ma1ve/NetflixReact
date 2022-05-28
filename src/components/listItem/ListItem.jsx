import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import { useState } from 'react';
import './listItem.scss';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4';

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 325 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src="https://www.ixbt.com/img/n1/news/2022/3/3/netflix_large.jpg" alt="" />

      {isHovered && (
        <div>
          <video src={trailer} autoPlay={true} loop muted />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempore
              repudiandae molestiae deserunt maxime vitae nobis fugiat quasi quia corporis.
            </div>
            <div className="genre">Action</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
