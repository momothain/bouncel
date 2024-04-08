import { ElementProps } from "@/types/element-types";

export default function Ball({ id }: ElementProps) {
    const tw = `
        w-full h-full                 /* Height and width of parent */
        bg-yellow-400                 /* Gold background color */
        rounded-full                  /* Makes the div a circle */
        shadow-lg                     /* Apply shadow for depth */
        flex items-center justify-center /* Center the text inside the ball */
        text-white font-bold          /* Style for the text inside the ball */
    `;

    return <div id={id} className={tw}></div>;
}
