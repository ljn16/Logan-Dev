import { useState } from 'react';
// import { useRouter } from 'next/router';

const SideNav = ({isScrolled}) => {
    const [isOpen, setIsOpen] = useState(false);

    // const router = useRouter();

    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = () => {
        alert('Integration coming soon!');
    };

    return (
        <div className="h-full">
            <button onClick={toggleSideNav} className={`hover:opacity-80 p-1 bg-gray-800 dark:bg-gray-200 dark:bg-opacity-20 text-xs bg-opacity-20 ${!isScrolled ? 'h-11 w-11' : 'h-8 w-8'} ${isOpen ? 'border border-white' : ''}`}>
                {isOpen ? 'x' : '☰'}
            </button>

            <div className={`side-nav fixed right-0 md:h-[100vh] w-[100vw] md:w-1/6 rounded-l md:bg-[linear-gradient(to_right,_rgba(105,105,105,0.3)_10%,_rgba(169,169,169,1)_100%)] text-white transition-transform transform ${isScrolled ? 'top-8' : 'top-11'} ${isOpen ? 'bg-[linear-gradient(to_top,_rgba(105,105,105,0.8)_10%,_rgba(169,169,169,1)_100%)] md:translate-x-0' : 'h-0 overflow-hidden md:translate-x-full'}`}>
                <ul className="p-4 space-y-4">
                    <li><a href="#" onClick={handleClick} className="block p-2 hover:bg-gray-700 rounded">Gia API - predict data</a></li>
                    {/* <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">Use Gia</a></li> */}
                </ul>
            </div>
        </div>
    );
};

export default SideNav;