import linksJson from './links.json'

function Link({ linkItem }) {
    return(
        <a href={linkItem.link}>{linkItem.name}</a>
    )
};

export default Link;