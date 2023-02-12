import React, { useCallback, useEffect, useRef } from "react";


const MineSweeper: React.FC = ()=>{
    const mineArray : number[][]= [[0,0],[1,1],[2,2],[3,3], [4,4], [5,5], [6,6], [7,7], [8,8], [9,9]]
    let gameBoardDict = useRef({});

    const populateGameBoard = useCallback((rows: number, cols: number)=>{ 
        let dict = {} 
        for(let row = 0; row < rows; row++ ){
            for(let col = 0; col < cols; col++){
                dict[`${row}, ${col}`] = 0 
            }
        }
        return {}
    }, [])

    useEffect(()=>{
        gameBoardDict.current = populateGameBoard(10, 10)
    }, [populateGameBoard])

    return (
        <div>
            
        </div>
    )
}

export default MineSweeper;