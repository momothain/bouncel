export default function GridTwGen() {
    return <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div >1</div>
        <div className="col-start-2 row-start-2">2</div>
        <div className="col-start-3 row-start-2">3</div>
    </div>
}