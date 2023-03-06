/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const land = '1'
    let islands = 0
    let r=0, c=0
    while ( r < grid.length ) {
        while ( c < grid[r].length) {
            if ( grid[r][c] && grid[r][c] === land ) {
                islands++ 
                let queue = [[r,c]]
                while (queue.length) {
                    let [r,c] = queue.pop()
                    grid[r][c] = 0
                    if ( r > 0 && grid[r-1][c] === land ) { 
                        queue.push([r-1,c]) 
                    }
                    if ( r < grid.length-1 && grid[r+1][c] === land ) { 
                        queue.push([r+1,c]) 
                    }
                    if ( c > 0 && grid[r][c-1] === land ) { 
                        queue.push([r,c-1]) 
                    }
                    if ( c < grid[r].length-1 &&  grid[r][c+1] === land ) { 
                        queue.push([r,c+1]) 
                    }
                }
            }
            c++
        }
        c=0
        r++
    }
    return islands
};
