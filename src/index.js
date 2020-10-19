// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) return [];
    return matrix.map(function(elem, index) {
        if (index % 2 !== 0) return elem.reverse();
        else return elem;
    }).flat()
}