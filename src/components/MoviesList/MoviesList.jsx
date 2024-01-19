import { Link, useLocation } from "react-router-dom";
import { LiStyle, UlStyle, WrapCardStyle, } from "./MoviesList.styled";

const MoviesList = ({ films }) => {
    const location = useLocation();
    return <UlStyle>
        {films.map(({ id, title, poster_path }) =>
            <Link to={`/movies/${id}`}  state={{ from: location }} >
                <LiStyle key={id}>
                    <img src={poster_path ?
                        `http://image.tmdb.org/t/p/w154${poster_path}` :
                        'https://static.vecteezy.com/system/resources/thumbnails/016/808/173/small/camera-not-allowed-no-photography-image-not-available-concept-icon-in-line-style-design-isolated-on-white-background-editable-stroke-vector.jpg'}
                        alt={title} width="154" height="231" />
                    <WrapCardStyle>
                        <h3>{title}</h3>
                    </WrapCardStyle>
                </LiStyle>
            </Link>
        )}
    </UlStyle>
};


export default MoviesList;