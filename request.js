!function(n){var e={};function t(c){if(e[c])return e[c].exports;var B=e[c]={i:c,l:!1,exports:{}};return n[c].call(B.exports,B,B.exports,t),B.l=!0,B.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var B in n)t.d(c,B,function(e){return n[e]}.bind(null,B));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/home/kiwitech/blockchain/metamask-test-dapp/dist",t(t.s=164)}({164:function(module,exports){eval("/**\n * Get the `main` section of the page, ensuring that it is the only\n * one present.\n */\nfunction getMainElement() {\n  const mainElements = document.getElementsByTagName('main');\n\n  if (mainElements.length === 0) {\n    throw new Error('Main element not found');\n  } else if (mainElements.length > 1) {\n    throw new Error('Multiple main elements found');\n  }\n  return mainElements[0];\n}\n\n/**\n * Get request data from the query string.\n *\n * @returns {object} The request data.\n */\nfunction getRequestData() {\n  const queryString = window.location.search;\n\n  if (queryString.length === 0) {\n    throw new Error('Request invalid: query string empty');\n  }\n\n  const searchParams = new URLSearchParams(queryString);\n  const method = searchParams.get('method');\n\n  if (method === null) {\n    throw new Error('Request invalid: method not provided in query string');\n  }\n\n  const rawParams = searchParams.get('params');\n\n  let params;\n  if (rawParams !== null) {\n    try {\n      params = JSON.parse(rawParams);\n    } catch (error) {\n      throw new Error('Request invalid: failed to parse params', {\n        cause: error,\n      });\n    }\n\n    if (params === null) {\n      throw new Error(`Request invalid: params parsed as null`);\n    } else if (typeof params !== 'object') {\n      throw new Error(\n        `Request invalid: params parsed as type '${typeof params}'`,\n      );\n    }\n  }\n\n  const request = { method };\n  if (params) {\n    request.params = params;\n  }\n  return request;\n}\n\n/**\n * Run the request encoded in the query parameters.\n */\nasync function main() {\n  const mainElement = getMainElement();\n\n  /**\n   * Log a message, and set it on the page.\n   *\n   * @param {string} message - The message to log and set on the page.\n   */\n  function logAndSet(message) {\n    console.log(message);\n    mainElement.innerText = message;\n  }\n\n  try {\n    if (!window.ethereum) {\n      throw new Error('Provider not found');\n    }\n\n    const requestData = getRequestData();\n\n    logAndSet(`Sending request: ${JSON.stringify(requestData)}`);\n\n    const result = await window.ethereum.request(requestData);\n\n    logAndSet(`Response: ${JSON.stringify(result)}`);\n  } catch (error) {\n    mainElement.innerText = error.message || 'Unknown error';\n    throw error;\n  }\n}\n\nmain().catch(console.error);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVxdWVzdC5qcz8yYWRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtDQUFrQyw0QkFBNEI7O0FBRTlEOztBQUVBLDJCQUEyQix1QkFBdUI7QUFDbEQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2V0IHRoZSBgbWFpbmAgc2VjdGlvbiBvZiB0aGUgcGFnZSwgZW5zdXJpbmcgdGhhdCBpdCBpcyB0aGUgb25seVxuICogb25lIHByZXNlbnQuXG4gKi9cbmZ1bmN0aW9uIGdldE1haW5FbGVtZW50KCkge1xuICBjb25zdCBtYWluRWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpO1xuXG4gIGlmIChtYWluRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNYWluIGVsZW1lbnQgbm90IGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAobWFpbkVsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ011bHRpcGxlIG1haW4gZWxlbWVudHMgZm91bmQnKTtcbiAgfVxuICByZXR1cm4gbWFpbkVsZW1lbnRzWzBdO1xufVxuXG4vKipcbiAqIEdldCByZXF1ZXN0IGRhdGEgZnJvbSB0aGUgcXVlcnkgc3RyaW5nLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9IFRoZSByZXF1ZXN0IGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldFJlcXVlc3REYXRhKCkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG5cbiAgaWYgKHF1ZXJ5U3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBpbnZhbGlkOiBxdWVyeSBzdHJpbmcgZW1wdHknKTtcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICBjb25zdCBtZXRob2QgPSBzZWFyY2hQYXJhbXMuZ2V0KCdtZXRob2QnKTtcblxuICBpZiAobWV0aG9kID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IGludmFsaWQ6IG1ldGhvZCBub3QgcHJvdmlkZWQgaW4gcXVlcnkgc3RyaW5nJyk7XG4gIH1cblxuICBjb25zdCByYXdQYXJhbXMgPSBzZWFyY2hQYXJhbXMuZ2V0KCdwYXJhbXMnKTtcblxuICBsZXQgcGFyYW1zO1xuICBpZiAocmF3UGFyYW1zICE9PSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHBhcmFtcyA9IEpTT04ucGFyc2UocmF3UGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IGludmFsaWQ6IGZhaWxlZCB0byBwYXJzZSBwYXJhbXMnLCB7XG4gICAgICAgIGNhdXNlOiBlcnJvcixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWVzdCBpbnZhbGlkOiBwYXJhbXMgcGFyc2VkIGFzIG51bGxgKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBSZXF1ZXN0IGludmFsaWQ6IHBhcmFtcyBwYXJzZWQgYXMgdHlwZSAnJHt0eXBlb2YgcGFyYW1zfSdgLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXF1ZXN0ID0geyBtZXRob2QgfTtcbiAgaWYgKHBhcmFtcykge1xuICAgIHJlcXVlc3QucGFyYW1zID0gcGFyYW1zO1xuICB9XG4gIHJldHVybiByZXF1ZXN0O1xufVxuXG4vKipcbiAqIFJ1biB0aGUgcmVxdWVzdCBlbmNvZGVkIGluIHRoZSBxdWVyeSBwYXJhbWV0ZXJzLlxuICovXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBtYWluRWxlbWVudCA9IGdldE1haW5FbGVtZW50KCk7XG5cbiAgLyoqXG4gICAqIExvZyBhIG1lc3NhZ2UsIGFuZCBzZXQgaXQgb24gdGhlIHBhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gbG9nIGFuZCBzZXQgb24gdGhlIHBhZ2UuXG4gICAqL1xuICBmdW5jdGlvbiBsb2dBbmRTZXQobWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIG1haW5FbGVtZW50LmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIH1cblxuICB0cnkge1xuICAgIGlmICghd2luZG93LmV0aGVyZXVtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3ZpZGVyIG5vdCBmb3VuZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3REYXRhID0gZ2V0UmVxdWVzdERhdGEoKTtcblxuICAgIGxvZ0FuZFNldChgU2VuZGluZyByZXF1ZXN0OiAke0pTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKX1gKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHJlcXVlc3REYXRhKTtcblxuICAgIGxvZ0FuZFNldChgUmVzcG9uc2U6ICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0KX1gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBtYWluRWxlbWVudC5pbm5lclRleHQgPSBlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJztcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tYWluKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///164\n")}});