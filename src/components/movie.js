import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({id, medium_cover_image, title, summary, genres}){
    return   <div>
    <li
    ><h2>
      {/* <Link to={'/movie/${id}'}>{title}</Link>    작은따옴표 대신 백틱 사용하기*/ } 
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2> 
   </li>
    <img src={medium_cover_image} alt={title} />
    <p>{summary.length >235 ? `${summary.slice(0, 235)}...`: summary}</p>
    <ul>
      {genres.map((g)=>(
    <li key={g}>{g}</li>
    ))}
    </ul>
    
    
  </div>;
}

Movie.propTypes={
  id:PropTypes.number.isRequired,   
    medium_cover_image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;  