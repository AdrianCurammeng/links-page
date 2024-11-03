import linksJson from './links.json'

function Link({ linkItem }) {
    return(
        <>

            <div className="w-full h-full bg-purple-500
                            m-1 px-4">
                <a className="w-full h-full p-2" href={linkItem.link}>
                    <div className="flex flex-row justify-between">
                        <p>logo</p>
                        {linkItem.name}
                        <p>logo</p>
                    </div>
                </a>
            </div>
        </>
    )
};

export default Link;