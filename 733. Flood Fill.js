/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let start = image[sr][sc]
    if (start === color) { return image }
    let queue = [[sr,sc]]
    while (queue.length) {
        let [r,c] = queue.shift()
        image[r][c] = color
        if ( r > 0 && image[r-1][c] === start ) { 
            queue.push([r-1,c]) }
        if ( r < image.length-1 && image[r+1][c] === start ) { 
            queue.push([r+1,c]) }
        if ( c > 0 && image[r][c-1] === start ) { 
            queue.push([r,c-1]) }
        if ( c < image[r].length-1 &&  image[r][c+1] === start ) { 
            queue.push([r,c+1]) }
    }
    return image
};
