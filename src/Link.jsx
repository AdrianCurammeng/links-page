import linksJson from './links.json'

function Link({ linkItem }) {
    return(
        <>
            <div className="w-full h-20 bg-green-500 my-2">
                <a className="flex flex-row justify-between h-full w-full p-6" href={linkItem.link} target="_blank">
                    <p>Icon</p>
                    <p>{linkItem.name}</p>
                    <p>Icon</p>
                </a>
            </div>
        </>
    )
};

export default Link;