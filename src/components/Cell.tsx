export default function Cell() {
    // Set the size of each cell using width and height TailwindCSS classes
    const cellStyle = 'border-10 border-gray-400'; // Adjust the size as needed

    return (
        <div className={cellStyle}>
            {/* Content of the cell */}
        </div>
    );
};
