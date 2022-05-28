import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './featured.scss';

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">comedy</option>
            <option value="crime">Crime</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://whiggles.landofwhimsy.com/hdcaptures/kbv111.jpg" alt="Bg" />
      <div className="info">
        <div className="info__title">KILL BILL</div>
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci doloribus culpa
          consequuntur sapiente sit eligendi explicabo itaque quasi. Dignissimos alias ratione
          maxime reprehenderit porro dolores impedit dicta repellendus vitae.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
