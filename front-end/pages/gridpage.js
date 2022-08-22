import React, { useEffect, useState } from "react";
// import "./styles.css";
import Grid from "./components/grid";
import NFTMetadata from "../data/sampleNFTData.json"
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export default function App() {

  const gridItem1 = {
    margin: "2px",
    border: "1px solid darkgrey",
    height: "20px",
    width: "20px",
    // Red X
    cursor: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='red' viewBox='0 0 512 512'%3e%3cg transform='rotate(45 256 256)'%3e%3crect id='r' x='16' y='216' width='480' height='80' rx='14'/%3e%3cuse href='%23r' transform='rotate(90 256 256)'/%3e%3c/g%3e%3c/svg%3e") 16 16, pointer`
    // cursor: `${<Lottie animationData={cursor1} loop={true} />}`
  };
  
  const gridBase = {
    cells: 1000,
    rows: 1000
  };

  const [grid, setGrid] = useState(gridBase);
  const [inputCells, setCells] = useState(grid.cells);
  const [inputRows, setRows] = useState(grid.rows);

  const handleGridSize = () => {
    const res = {
      cells: parseInt(inputCells),
      rows: parseInt(inputRows)
    };
    setGrid({ ...res });
  };

  return (
    <div >
      <Grid
        grid={grid}
        handleGridSize={handleGridSize}
        // inputCells={inputCells}
        // inputRows={inputRows}
        setCells={setCells}
        setRows={setRows}

      >
        {[...Array(100)].map((_, index) => (
            <>
            <Tooltip 
              title="Testing"
              // followCursor
              // @ts-ignore
              onMouseMove={e => setPosition({ x: e.pageX, y: e.pageY })}
              PopperProps={{
                anchorEl: {
                  clientHeight: 0,
                  clientWidth: 0,
                  getBoundingClientRect: () => ({
                     // @ts-ignore
                    top: position.y * 1.1,
                    // @ts-ignore
                    left: position.x * 1.28,
                    // @ts-ignore
                    right: position.x * 2,
                    // @ts-ignore
                    bottom: position.y,
                    width: 0,
                    height: 0,
                  })
                }
              }}
            >
              <Box key={index} sx={gridItem1}/>
            </Tooltip>
            {/* <Box key={index} sx={gridItem2}/> */}
            </>
          ))}
      </Grid>

    </div>
  );
}
