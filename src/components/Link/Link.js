import './Link.css'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InnerLink = styled.a`
color: #61dafb;
`

export default function Link({ url, title }){
    return (
        <InnerLink
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </InnerLink>
    )
}

Link.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
}