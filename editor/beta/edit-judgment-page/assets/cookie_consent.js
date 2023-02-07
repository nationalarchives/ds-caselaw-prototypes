/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ds_caselaw_editor_ui/static/js/cookie_consent/src/api/dsCookieConsentBannerAPI.js":
/*!*******************************************************************************************!*\
  !*** ./ds_caselaw_editor_ui/static/js/cookie_consent/src/api/dsCookieConsentBannerAPI.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./ds_caselaw_editor_ui/static/js/cookie_consent/src/data.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // DS COOKIE CONSENT BANNER API

var dsCookieConsentBannerAPI = function () {
  // Delete cookie
  function deleteCookie() {
    var cookies = document.cookie.split(";");

    for (var _len = arguments.length, cname = new Array(_len), _key = 0; _key < _len; _key++) {
      cname[_key] = arguments[_key];
    }

    var _loop = function _loop(i) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      cname.forEach(function (c) {
        if (name.trim() === c) {
          document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=\"");
          /* The below line fixes discovery only deleting cookies on discovery.nationalarchives.gov.uk instead of just .nationalarchives.gov.uk */

          document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=.nationalarchives.gov.uk");
          /*below line is to delete the google analytics cookies. they are set with the domain*/

          document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=").concat(location.hostname.replace(/^www\./i, ""));
        }
      });
    };

    for (var i = 0; i < cookies.length; i++) {
      _loop(i);
    }
  } // Set cookie


  function setCookie(name, value, options) {
    options = _objectSpread({
      path: "/",
      domain: "",
      // once deployed to a TNA domain this should be "nationalarchives.gov.uk"
      secure: true
    }, options);

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (var optionKey in options) {
      updatedCookie += "; " + optionKey;
      var optionValue = options[optionKey];

      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  } // Check if cookie exists


  function checkCookie(name) {
    return -1 !== document.cookie.indexOf(name);
  } // Create link element inside the banner


  function createLink(text, url, id, className) {
    var getInnerElem = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].buttonPreferences.id);
    var createUrl = document.createElement("a");
    var linkText = document.createTextNode(text);

    if (getInnerElem) {
      var parentElement = getInnerElem.parentNode;
      createUrl.appendChild(linkText);
      createUrl.href = url;
      createUrl.className = className;
      createUrl.id = id;
      parentElement.insertBefore(createUrl, getInnerElem);
    }
  } // Get cookie value
  // If cookies_policy get its value, decode it, parse it and return an object
  // For any other cookies return its value as a string


  function getCookieValue(cname) {
    var cookies = document.cookie.split(";");
    var cookieValue = "";

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var equalSignPos = cookie.indexOf("=");
      cookieValue = cookie.slice(equalSignPos + 1);
      var cookieName = equalSignPos > -1 ? cookie.substr(0, equalSignPos).trim() : cookie;

      if (cookieName === cname) {
        cookieValue = decodeURIComponent(cookieValue);
        var parseCookieValue = JSON.parse(cookieValue);
        return parseCookieValue;
      }
    }

    return cookieValue;
  } // Create link element inside the banner


  function createButton(text, id, className) {
    var getInnerElem = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].buttonPreferences.id);
    var createBtn = document.createElement("button");
    var linkText = document.createTextNode(text);

    if (getInnerElem) {
      var parentElement = getInnerElem.parentNode;
      createBtn.appendChild(linkText);
      createBtn.className = className;
      createBtn.id = id;
      parentElement.insertBefore(createBtn, getInnerElem);
    }
  } // Revealing public API


  return {
    createButton: createButton,
    createLink: createLink,
    setCookie: setCookie,
    checkCookie: checkCookie,
    deleteCookie: deleteCookie,
    getCookieValue: getCookieValue
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dsCookieConsentBannerAPI);

/***/ }),

/***/ "./ds_caselaw_editor_ui/static/js/cookie_consent/src/data.js":
/*!*******************************************************************!*\
  !*** ./ds_caselaw_editor_ui/static/js/cookie_consent/src/data.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Typed data
var Data = {
  buttonAccept: {
    text: "Accept cookies",
    url: "#",
    id: "accept_optional_cookies",
    "class": "button"
  },
  buttonReject: {
    text: "Reject cookies",
    url: "#",
    id: "reject_optional_cookies",
    "class": "button"
  },
  hideThisMessage: {
    text: "Close this message",
    url: "#",
    id: "hide_this_message",
    "class": "button"
  },
  buttonPreferences: {
    id: "#btn_preferences"
  },
  bannerParagraph: {
    id: ".cookie-p"
  },
  bannerHeadline: {
    id: ".cookie_head"
  },
  bannerWrapper: {
    id: "#ds-cookie-consent-banner"
  },
  cookies: {
    cookieOne: "dontShowCookieNotice",
    cookieTwo: "cookies_policy",
    gaCookies: ["_ga", "_gid", "_gat_UA-2827241-22", "_gat_UA-2827241-1", "_ga_2CP7QT8TDG"],
    settings: ["dontAutoStartResultsTour"]
  },
  formWrapper: {
    id: "#ds-cookie-consent-form"
  },
  acceptMessageAfterInteraction: {
    text: "You have accepted optional cookies. You can change your cookie settings on the <a href='https://www.nationalarchives.gov.uk/legal/cookies/'>Cookies page</a>.",
    ariaLabel: "Cookie consent confirmation message"
  },
  rejectMessageAfterInteraction: {
    text: "You have rejected optional cookies. You can change your cookie settings on the <a href='https://www.nationalarchives.gov.uk/legal/cookies/'>Cookies page</a>.",
    ariaLabel: "Cookie consent confirmation message"
  },
  oldCookieBannerWrapper: {
    "class": ".cookieNotice"
  },
  cookiesToRemove: {
    one: "_ga",
    two: "_gid",
    three: "_gat_UA-2827241-1",
    four: "_gat_UA-2827241-22",
    five: "_ga_2CP7QT8TDG"
  },
  DOM: {
    on: ".jsON",
    off: ".jsOFF"
  },
  form: {
    analytics: {
      measure: "#measure_website_use",
      doNotMeasure: "#donot_measure_website_use"
    },
    settings: {
      rememberSettings: "#remember_your_settings",
      doNotRememberSettings: "#donot_remember_your_settings"
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************************************************!*\
  !*** ./ds_caselaw_editor_ui/static/js/cookie_consent/src/ds-cookie-consent.js ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./ds_caselaw_editor_ui/static/js/cookie_consent/src/data.js");
/* harmony import */ var _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/dsCookieConsentBannerAPI */ "./ds_caselaw_editor_ui/static/js/cookie_consent/src/api/dsCookieConsentBannerAPI.js");


var getBannerElement = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].bannerWrapper.id);
var getCookieForm = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].formWrapper.id);
var getCookieObject = _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getCookieValue(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.cookieTwo);
var measureRadioInput = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].form.analytics.measure);
var doNotMeasureRadioInput = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].form.analytics.doNotMeasure);
var settingsRadioInput = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].form.settings.rememberSettings);
var doNotRememberSettingsRadioInput = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].form.settings.doNotRememberSettings); // Polyfill the remove() method IE9 and higher
// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("remove")) {
      return;
    }

    Object.defineProperty(item, "remove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // Treat DOM elements while the page is loading


(function () {
  // If the cookie dontShowCookieNotice exists
  // Hide the banner if visible
  if (_api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].checkCookie(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.cookieOne)) {
    if (getBannerElement) {
      getBannerElement.remove();
    }
  }

  if (getCookieForm) {
    // Update the state on the form radio elements
    // based on the cookie_policy value
    if (!_api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].checkCookie(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.cookieTwo)) {
      // Hide the banner if visible
      if (getBannerElement) {
        getBannerElement.remove();
      }

      doNotMeasureRadioInput.checked = true;
      doNotRememberSettingsRadioInput.checked = true;
    }

    if (getBannerElement) {
      getBannerElement.remove();
    }
  }
})(); // Create/delete cookies on page load


(function () {
  document.addEventListener("DOMContentLoaded", function () {
    if (!_api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].checkCookie(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.cookieTwo)) {
      var cookieValue = {
        usage: false,
        settings: false,
        essential: true
      };
      _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].setCookie(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.cookieTwo, JSON.stringify(cookieValue), {
        "max-age": 90 * 24 * 60 * 60
      }); // Delete GA cookies if cookies_policy cookie value is set to false

      _data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.gaCookies.forEach(function (cookie) {
        _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].deleteCookie(cookie);
      });
    } else {
      if (getCookieObject.hasOwnProperty("usage") && getCookieObject.usage === false) {
        _data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.gaCookies.forEach(function (cookie) {
          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].deleteCookie(cookie);
        });
      }

      if (getCookieObject.hasOwnProperty("settings") && getCookieObject.settings === false) {
        _data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.settings.forEach(function (cookie) {
          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].deleteCookie(cookie);
        });
      } // If Cookie Settings page
      // handle form state based on cookie_policy value / settings


      if (getCookieForm) {
        // Update the state on the form radio elements
        // based on the cookie_policy value
        if (getCookieObject.hasOwnProperty("usage") && getCookieObject.usage === true && !measureRadioInput.checked) {
          measureRadioInput.checked = true;
        } else {
          doNotMeasureRadioInput.checked = true;
        } // Remove the functional cookies if the user hasn't consent


        if (getCookieObject.hasOwnProperty("settings") && getCookieObject.settings === true && !settingsRadioInput.checked) {
          settingsRadioInput.checked = true;
        } else {
          doNotRememberSettingsRadioInput.checked = true;
        }
      }
    }
  });
})(); // Banner DOM implementation


(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var oldCookieNotice = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].oldCookieBannerWrapper["class"]);
    var jsON = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].DOM.on);
    var jsOFF = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].DOM.off); // Display form elements if JS is enable

    if (jsON) {
      jsON.style.display = "block";
    } // Hide JS is not enabled message if JS is enabled


    if (jsOFF) {
      jsOFF.style.display = "none";
    } // Hide the old yellow Cookie banner for the MVP


    if (oldCookieNotice) {
      oldCookieNotice.remove();
    } // Check if cookie banner exists


    if (getBannerElement) {
      // Create Accept Optional Cookies
      _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].createButton(_data__WEBPACK_IMPORTED_MODULE_0__["default"].buttonAccept.text, _data__WEBPACK_IMPORTED_MODULE_0__["default"].buttonAccept.id, _data__WEBPACK_IMPORTED_MODULE_0__["default"].buttonAccept["class"]); // Create Reject Optional Cookies

      _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].createButton(_data__WEBPACK_IMPORTED_MODULE_0__["default"].buttonReject.text, _data__WEBPACK_IMPORTED_MODULE_0__["default"].buttonReject.id, _data__WEBPACK_IMPORTED_MODULE_0__["default"].buttonReject["class"]); // Select the buttons
      // !important - Do not move these above the DOM implementation

      var btnAccept = document.querySelector("#".concat(_data__WEBPACK_IMPORTED_MODULE_0__["default"].buttonAccept.id));
      var btnReject = document.querySelector("#".concat(_data__WEBPACK_IMPORTED_MODULE_0__["default"].buttonReject.id));
      var btnPreference = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].buttonPreferences.id);
      var bannerParagraph = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].bannerParagraph.id);
      var cookieHead = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__["default"].bannerHeadline.id);
      var getBannerElementContainer = getBannerElement.querySelector(".container"); // Check if the button Accept Optional Cookies exists

      if (btnAccept) {
        // Binding to document (event delegation)
        btnAccept.addEventListener("click", function (e) {
          e.preventDefault(); // Create dontShowCookieNotice cookie

          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].setCookie(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.cookieOne, "true", {
            "max-age": 90 * 24 * 60 * 60
          }); // Create/Update cookies_policy cookie

          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].setCookie(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.cookieTwo, '{"usage":true,"settings":true,"essential":true}', {
            "max-age": 90 * 24 * 60 * 60
          });
          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].createButton(_data__WEBPACK_IMPORTED_MODULE_0__["default"].hideThisMessage.text, _data__WEBPACK_IMPORTED_MODULE_0__["default"].hideThisMessage.id, _data__WEBPACK_IMPORTED_MODULE_0__["default"].hideThisMessage["class"]);

          if (btnAccept) {
            btnAccept.remove();
          }

          if (btnReject) {
            btnReject.remove();
          }

          if (btnPreference) {
            btnPreference.remove();
          }

          if (cookieHead) {
            cookieHead.remove();
          }

          if (bannerParagraph) {
            bannerParagraph.innerHTML = _data__WEBPACK_IMPORTED_MODULE_0__["default"].acceptMessageAfterInteraction.text;
            getBannerElementContainer.setAttribute("aria-label", _data__WEBPACK_IMPORTED_MODULE_0__["default"].acceptMessageAfterInteraction.ariaLabel);
          } // Get the Close This Message DOM element


          var hideThisMessage = document.querySelector("#".concat(_data__WEBPACK_IMPORTED_MODULE_0__["default"].hideThisMessage.id)); // If Close This Message DOM exists, hide banner

          if (hideThisMessage) {
            hideThisMessage.addEventListener("click", function (e) {
              e.preventDefault(); // Hide the banner after Reject btn was clicked

              if (_api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].checkCookie(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.cookieOne)) {
                if (getBannerElement) {
                  getBannerElement.remove();
                }
              }
            });
            bannerParagraph.focus();
          } // Add GA script and set the cookies at the client side


          var DOMhead = document.head;
          var gaScript = document.createElement("script");
          gaScript.id = "frontEndGA";
          gaScript.src = "/static/js/dist/gtm_script.js";
          DOMhead.appendChild(gaScript);
        });
      } // Check if the button Reject Optional Cookies exists


      if (btnReject) {
        // Binding to document (event delegation)
        btnReject.addEventListener("click", function (e) {
          e.preventDefault(); // Create dontShowCookieNotice cookie

          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].setCookie(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.cookieOne, "true", {
            "max-age": 90 * 24 * 60 * 60
          }); // Create/Update cookies_policy cookie

          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].setCookie(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.cookieTwo, '{"usage":false,"settings":false,"essential":true}', {
            "max-age": 90 * 24 * 60 * 60
          });
          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].createButton(_data__WEBPACK_IMPORTED_MODULE_0__["default"].hideThisMessage.text, _data__WEBPACK_IMPORTED_MODULE_0__["default"].hideThisMessage.id, _data__WEBPACK_IMPORTED_MODULE_0__["default"].hideThisMessage["class"]);

          if (btnAccept) {
            btnAccept.remove();
          }

          if (btnReject) {
            btnReject.remove();
          }

          if (btnPreference) {
            btnPreference.remove();
          }

          if (cookieHead) {
            cookieHead.remove();
          }

          if (bannerParagraph) {
            bannerParagraph.innerHTML = _data__WEBPACK_IMPORTED_MODULE_0__["default"].rejectMessageAfterInteraction.text;
            getBannerElementContainer.setAttribute("aria-label", _data__WEBPACK_IMPORTED_MODULE_0__["default"].rejectMessageAfterInteraction.ariaLabel);
          } // Get the Close This Message DOM element


          var hideThisMessage = document.querySelector("#".concat(_data__WEBPACK_IMPORTED_MODULE_0__["default"].hideThisMessage.id)); // If Close This Message DOM exists, hide banner

          if (hideThisMessage) {
            hideThisMessage.addEventListener("click", function (e) {
              e.preventDefault(); // Hide the banner after Reject btn was clicked

              if (_api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].checkCookie(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookies.cookieOne)) {
                if (getBannerElement) {
                  getBannerElement.remove();
                }
              }
            });
            bannerParagraph.focus();
          }

          var cookiesToUnset = [_data__WEBPACK_IMPORTED_MODULE_0__["default"].cookiesToRemove.one, _data__WEBPACK_IMPORTED_MODULE_0__["default"].cookiesToRemove.two, _data__WEBPACK_IMPORTED_MODULE_0__["default"].cookiesToRemove.three, _data__WEBPACK_IMPORTED_MODULE_0__["default"].cookiesToRemove.four, _data__WEBPACK_IMPORTED_MODULE_0__["default"].cookiesToRemove.five]; // Unset GA cookies if available

          for (var _i = 0, _cookiesToUnset = cookiesToUnset; _i < _cookiesToUnset.length; _i++) {
            var cookie = _cookiesToUnset[_i];

            if (_api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].checkCookie(cookie)) {
              _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__["default"].deleteCookie(cookie);
            }
          }
        });
      }
    }
  });
})();
})();

/******/ })()
;