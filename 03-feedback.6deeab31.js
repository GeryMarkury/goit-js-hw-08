!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var n=r("1WSnx"),o=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),i=document.querySelector('textarea[name="message"]'),u="feedback-form-state",f=(0,n.throttle)((function(){var e={email:l.value,message:i.value};localStorage.setItem(u,JSON.stringify(e))}),500);!function(){var e=localStorage.getItem(u);if(e){var t=JSON.parse(e),a=t.email,r=t.message;l.value=a,i.value=r}}(),o.addEventListener("input",(function(e){e.target!==l&&e.target!==i||f()})),o.addEventListener("submit",(function(e){e.preventDefault();var t={email:l.value,message:i.value};console.log(t),localStorage.removeItem(u),l.value="",i.value=""}))}();
//# sourceMappingURL=03-feedback.6deeab31.js.map
