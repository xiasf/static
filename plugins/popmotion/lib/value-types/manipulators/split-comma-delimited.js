'use strict';

var isString = require('../../inc/utils').isString;

module.exports = function (value) {
  return isString(value) ? value.split(/,\s*/) : [value];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtY29tbWEtZGVsaW1pdGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxDQUFDOztBQUVyRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUEsS0FBSztTQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0NBQUEsQ0FBQyIsImZpbGUiOiJzcGxpdC1jb21tYS1kZWxpbWl0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmlzU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTsiXX0=