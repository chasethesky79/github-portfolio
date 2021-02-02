import './Link.css'
import PropTypes from 'prop-types';

export default function Link({ url, title }){
    return (
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
    )
}

Link.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
}