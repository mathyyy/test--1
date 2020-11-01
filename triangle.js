const arr = ['44', '555', '6666', '45637', '00'];
function longestString (array) {
  if (array.length == 0){
    return null;
  }
  let maxName = array[0];
  for (let i = 0; i < array.length; i++) {
   if (maxName.length < array[i].length) {
  maxName = array[i];
  }
  }
  return maxName;
  }
  console.log(longestString(arr));
