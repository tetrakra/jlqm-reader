
/**
 * Extracts relevant text from jlqm file
 * @param {string} jlqm
 * @param {number} fileCount
 * @return {Array}
 */
module.exports = function(jlqm, fileCount) {
  //this reads a string right now, could change to fileList?
  var obj = {};
  var output;
  console.log('jlqm module found a ...', typeof jlqm);
  if(typeof jlqm === "string"){
    // output = jlqm.substring(startPos,endPos).split('\n');
    obj = JSON.parse(jlqm);
    output = obj.MemoObjectList[(fileCount || 0)].DescRaw;
    console.log('jlqm reader sending ...', output);
    return output;
  }else{
    output = "Error, no string";
    return output;
  }


  //make sure this wont be a repeat of last week
};
