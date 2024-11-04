import Header from './Header.jsx'
import Link from './Link.jsx'
import data from './links.json'

function Content() {
    return(
        <>
            <div className="flex justify-center items-center h-screen py-4 px-4 bg-red-500">
                <div className="flex flex-col items-center 
                                h-fit  w-full max-w-3xl py-8  bg-blue-300">
                    <Header/>
                    {data.links.map((item, key) => (
                        <Link linkItem={item}></Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Content