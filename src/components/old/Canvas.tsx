import { GridState } from "../Grid"
import Ball from "../Ball"
import Cell from "../Cell"
import { useEffect, useRef, useState } from "react"
import { drawBg } from "@/canvas-draw/grid"

interface GridProps {
    rows: number
    cols: number
    initGrid: GridState
}
export default function Canvas({ rows, cols, initGrid }: GridProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [canvasSize, setCanvasSize] = useState(0);

    function draw(ctx: CanvasRenderingContext2D, frame: number) {
        drawBg(ctx);
    }

    useEffect(() => {
        // #####################
        // WINDOW SIZE = 80%vmin 
        const updateSize = () => {
            const size = Math.min(window.innerWidth, window.innerHeight) * 0.8;
            setCanvasSize(size);
        };

        window.addEventListener('resize', updateSize);
        updateSize(); // Set initial size

        return () => window.removeEventListener('resize', updateSize);


        // #####################
        // CANVAS DRAWINGS AND ANIMATIONS
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                let frameCount = 0
                let animationFrameId: number

                // DRAW CANVAS
                const render = () => {
                    frameCount++
                    drawBg(ctx)
                    animationFrameId = window.requestAnimationFrame(render)
                }
                render()

                return () => {
                    window.cancelAnimationFrame(animationFrameId)
                }
            }
        }
    }, [draw, canvasSize]); // depencies...

    const tw =
        + `border-4 border-gold-500/80 `
        + `margin-2 margin-sepia-500/50`

    const gridTw =
        " grid-container "
        + ` bg-sky=500-75 `
        + " h-screen w-screen "
        + ` grid grid-cols-${cols} divide-x border-10 border-black-500/80 `
        + ` grid-rows-${rows} divide-y `

    const cellSize = `calc(100vh / ${Math.max(rows, cols)})`; // Making sure the size is based on the larger of rows or cols for a square grid
    const cells = Array.from({ length: rows * cols }, (_, index) => (
        <Cell size={cellSize} key={index} />
    ));

    return (<canvas ref={canvasRef} role="bouncel grid game"
        width={canvasSize}
        height={canvasSize}
        style={{ width: `${canvasSize}px`, height: `${canvasSize}px` }}
    >
        this canvas is the core and foundation of the whole game. if it doesnt render find and assassinate @momothain
    </canvas>)
}