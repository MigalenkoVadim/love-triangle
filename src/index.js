/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift('0');
  var triangles = 0;
    for (var i = 1; i < preferences.length; i++) {
      for (var j = i + 1; j < preferences.length; j++) {
        for (var k = i + 1; k < preferences. length; k++) {
          if ( preferences[i] == j && preferences[j] == k && preferences[k] == i && i !== k && k !== j && i !== j)
            triangles++
        }
      }
    }
    return triangles;
};
