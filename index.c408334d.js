!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,i="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,f=i||l||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,g=function(){return f.Date.now()};function b(e){var o=void 0===e?"undefined":n(t)(e);return!!e&&("object"==o||"function"==o)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":n(t)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=b(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=c.test(e);return l||a.test(e)?u(e.slice(2),l?2:8):r.test(e)?NaN:+e}var y="https://restcountries.com/v3.1/name/",m="fields=name,capital,population,flags,languages",h=document.querySelector("#search-box"),j=document.querySelector(".country-info");document.querySelector(".country-list");console.log(j),console.log(h),h.addEventListener("input",(function(e){console.dir(e.currentTarget);var n=e.currentTarget.value;console.log(n),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ukraine";return console.log(e),fetch("".concat(y).concat(e,"?").concat(m)).then((function(e){if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){return console.error(e)}))}(n).then((function(e){return n=e.map((function(e){var n=e.name,t=e.capital,o=e.population,r=e.flags,c=e.languages;return'<img src="'.concat(r.svg,'" alt=""><h1>').concat(n.official,"</h1 >\n      <p><span>Capital:</span>").concat(t,"</p>\n      <p><span>Population:</span>").concat(o,"</p>\n      <p><span>Languages:</span>").concat(Object.values(c),"</p>")})).join(),void(j.innerHTML=n);var n}))}))}();
//# sourceMappingURL=index.c408334d.js.map