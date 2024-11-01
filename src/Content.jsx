import Link from './Link.jsx'
import data from './links.json'

function Content() {
    return(
        <>
            {data.links.map((item, key) => (
                <Link linkItem={item}></Link>
            ))}
        </>
    );
}

export default Content