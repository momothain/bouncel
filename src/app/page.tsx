//app/page.tsx
"use client"
import Grid from '@/components/Grid'
import { GridState, CellType } from '@/components/types'


export default function Home() {
  const initGrid: GridState = [{
    props: {
      id: 1,
      position: [3, 3],
    },
    type: CellType.BALL,
  }]
  return (<div>
    <Grid rows={4} cols={4} initGrid={initGrid} >

    </Grid>

  </div>)
}