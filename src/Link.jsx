import linksJson from './links.json'

function Link({ linkItem }) {
    let logo_src = `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${linkItem.icon}.svg`;
    let render_logo = linkItem.icon === "" ? false : true;  // checks if a simple-logo icon is rendered
    return(
        <>
            <div className="w-full h-20 bg-green-500 my-2 rounded-3xl">
                <a className="flex flex-row justify-between h-full w-full p-6" href={linkItem.link} target="_blank">
                    {render_logo ? <img height="32" width="32" src={logo_src} /> 
                                 : <img height="32" width="32" src="../imgs/link.svg"/>}
                    <p className="font-consolas text-xl">{linkItem.name}</p>
                    <p>Icon</p>
                </a>
            </div>
        </>
    )
};

export default Link;