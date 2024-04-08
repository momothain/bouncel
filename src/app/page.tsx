"use client";
// import Obj from '@/components/Obj';
import { useTheme } from "@/components/providers/ThemeProvider";

import Grid from "@/components/Grid";
import { BouncelType } from "@/types/types";
import { ElementState, GridProps } from "@/types/element-types";

const DEBUG = true;
const rows = 3;
const cols = 5;
const initEltStates: ElementState[] = [
    {
        pos: [1, 2],
        type: BouncelType.BALL,
        props: { id: "BALL" },
    },
];

export default function Home() {
    const gridProps: GridProps = {
        rows: rows,
        cols: cols,
        initEltStates: initEltStates,
    };

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`${theme} flex flex-col`}>
            {/* header */}
            <div
                className={`flex flex-col items-center justify-center
             mx-auto`}
            >
                <h1>bouncel</h1>
                <div className="flex flex-row items-center space-x-4 mb-4">
                    <h2>
                        size: {rows}x{cols}
                    </h2>
                    <h2>system: ..</h2>
                    <button
                        onClick={toggleTheme}
                        className="btn btn-sepia mb-4 padding-2"
                    >
                        Toggle Theme
                    </button>
                </div>
            </div>

            {/*  */}
            <div
                className="flex flex-col"
                style={{
                    width: "100vw",
                    height: `calc(100vw * ${rows} / ${cols})`,
                    margin: "auto",
                }}
            >
                <Grid {...gridProps} />
            </div>
        </div>
    );
}
