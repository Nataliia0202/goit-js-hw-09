!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),c=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]');function d(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3&&t({position:e,delay:n}),o({position:e,delay:n})}),n)}))}document.querySelector('button[type="submit"]').addEventListener("click",(function(n){n.preventDefault();var t=Number(c.value),o=Number(a.value);for(i=0;i<l.value;i+=1)d(1+i,t+i*o).then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("💹 Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.failure("⛔ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.4fb58800.js.map
