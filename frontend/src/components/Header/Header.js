import React from 'react';

function Header({ title }) {
    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm z-50">

                <div className="flex items-center justify-center h-14 ">
                        <h1 className="text-xl font-semibold text-gray-800 whitespace-nowrap">
                            {title}
                        </h1>
                </div>
        </header>
    );
}

export default Header;