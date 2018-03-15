/* util/util.js */
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
this.Util = (function() {
var Util = {};

Util.find = function(list, f) {
  return list.filter(f)[0]
};

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
Util.deepCopy = function deepCopy(obj, cache/* = []*/) {
  cache = (typeof cache === 'undefiend') ? [] : cache;

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, function(c) { return c.original === obj; })
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  })

  Object.keys(obj).forEach(function(key) {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy;
};

/**
 * forEach for object
 */
Util.forEachValue = function(obj, fn) {
  Object.keys(obj).forEach(function(key) { return fn(obj[key], key); })
};

Util.isObject = function(obj) {
  return obj !== null && typeof obj === 'object'
};

Util.isPromise = function(val) {
  return val && typeof val.then === 'function'
};

Util.assert = function(condition, msg) {
  if (!condition) throw new Error('[vuex] ' + msg)
};
//
return Util;
})();
