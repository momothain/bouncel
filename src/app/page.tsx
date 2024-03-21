//app/page.tsx
"use client"
import Grid from '@/components/Grid'
import { GridState, ObjType } from '@/components/types'


export default function Home() {
  const initGrid: GridState = [{
    props: {
      id: 1,
      position: [1, 2],
    },
    type: ObjType.BALL,
  }]
  return (<div>
    <div>
      <h1>bouncel</h1>
      <h2>size: ..</h2>
      <h2>system: ..</h2>
    </div>
    <Grid rows={3} cols={5} initGrid={initGrid}>
    </Grid>
    <p>current score: ..</p>
  </div >)
}