import React from 'react';

function GameGrid({ size = 9 }) {
    const cells = Array.from({ length: size * size });

    // Tailwind doesn't support vmin directly in the class names, so we have to use inline styles for that.
    const cellStyle = {
        width: `calc(80vmin / ${size})`, // Calculate the width as a fraction of 80vmin based on the number of cells.
        height: `calc(80vmin / ${size})`, // Ensure the height matches the width to maintain a square aspect ratio.
    };

    return (
        <div className={`aspect-square grid grid-cols-${size} gap-1 w-4/5 max-w-screen-sm mx-auto`}>
            {cells.map((_, index) => (
                <div key={index} className="aspect-square bg-gray-300" style={cellStyle} />
            ))}
        </div>
    );
}

export default GameGrid;
