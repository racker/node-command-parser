/**
 *  Copyright 2011 Rackspace
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

/**
 * Same as the inArray but return the index instead of true if the item is found in the array.
 *
 * @param  {Object} needle Item to search for.
 * @param  {Array} haystack Array to search in for the item.
 * @param  {Boolean} strict true to use the strict comparison (order of the item in the array matters).
 * @param {Function} compareFunction Optional compare function which is called with the current array
 *                                    item as the first argument and the needle as the second one and
 *                                    should return true if the current item matches the needle.
 *
 * @return {Number|Boolean} item index if the needle is located in the array, false otherwise.
 */
function arrayFind(needle, haystack, strict, compareFunction) {
  var compare = compareFunction || null;

  function compareStrict(item1, item2) {
      return (item1 === item2);
  }

  function compareLoose(item1, item2) {
      return (item1 === item2);
  }

  if (!compareFunction) {
    if (strict === true) {
      compare = compareStrict;
    }
    else {
      compare = compareLoose;
    }
  }

  for (var i = 0; i < haystack.length; i++) {
    if (compare(haystack[i], needle)) {
      return i;
    }
  }

  return false;
}

/**
 * Check if a haystack array contains a needle.
 *
 * @param  {Object} needle Object to search for.
 * @param  {Array} haystack Array to search.
 * @param  {Boolean} strict true to use the strict comparison.
 * @param {Function} compareFunction Optional compare function which is called with the current array
 *                                    item as the first argument and the needle as the second one and
 *                                    should return true if the current item matches the needle.
 *
 * @return {Boolean} true if the needle is located in the array, false otherwise.
 */
function inArray(needle, haystack, strict, compareFunction) {
  return (arrayFind(needle, haystack, strict, compareFunction) !== false);
}

/**
 * Return list of items which are in array1 but not in array2.
 *
 * @param  {Array} array1 Array to find items in.
 * @param  {Array} array2 Array to test against.
 *
 * @return {Array} List of items which are in array1 but not in array2.
 */
function arrayDifference(array1, array2) {
  var difference = [];

  for (var i = 0; i < array1.length; i++) {
    if (!(inArray(array1[i], array2))) {
      difference.push(array1[i]);
    }
  }

  return difference;
}

exports.inArray = inArray;
exports.arrayDifference = arrayDifference;
