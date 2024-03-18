import { CellProps } from './types';

export default function Ball({ id, position }: CellProps) {
    return <div>ball id={id} pos={position}</div>
}