"use client";
import Ball from '@/components/Ball';
import Grid from '@/components/Grid';
// import Obj from '@/components/Obj';
import { useTheme } from '@/components/providers/ThemeProvider';
import { ObjType } from '@/components/Grid';
import { EltState } from "@/components/Grid";


export default function Home() {
    const DEBUG = true
    const rows = 3;
    const cols = 5;
    const initGrid: EltState[] = [{
        id: '1',
        position: [1, 2],
        type: ObjType.BALL,
    }];

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`light flex flex-col`}>
            <div className={`flex flex-col items-center justify-center
             mx-auto`}>
                <h1>bouncel</h1>
                <div className="flex flex-row items-center space-x-4 mb-4">
                    <h2>size: {rows}x{cols}</h2>
                    <h2>system: ..</h2>
                    <button onClick={toggleTheme} className="btn btn-sepia mb-4 padding-2">
                        Toggle Theme
                    </button>
                </div>
            </div>

            {/*  */}
            <div className="w-full flex justify-center">
                <Grid rows={rows} cols={cols} initGrid={initGrid} />
            </div>

            {/*  */}
            {DEBUG
                ? (<div className="w-full flex justify-center">
                    <Ball id={initGrid[0].id} position={initGrid[0].position} ></Ball>
                </div>
                )
                : null
            }
        </div>
    );
}
