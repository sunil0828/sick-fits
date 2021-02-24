module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

module.exports = _toPrimitive;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var toPrimitive = __webpack_require__(/*! ./toPrimitive */ "../../node_modules/@babel/runtime/helpers/toPrimitive.js");

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var react = __webpack_require__(/*! react */ "react");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var pill = __webpack_require__(/*! @keystone-ui/pill */ "@keystone-ui/pill");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");

function useObjectURL(fileData) {
  let [objectURL, setObjectURL] = react.useState(undefined);
  react.useEffect(() => {
    if (fileData) {
      let url = URL.createObjectURL(fileData);
      setObjectURL(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [fileData]);
  return objectURL;
}

function Field({
  autoFocus,
  field,
  value,
  onChange
}) {
  const inputRef = react.useRef(null);
  const errorMessage = value.kind === 'upload' ? validateImage(value.data) : undefined;
  const imagePathFromUpload = useObjectURL(errorMessage === undefined && value.kind === 'upload' ? value.data.file : undefined);
  const imagePath = value.kind === 'from-server' ? value.data.publicUrlTransformed : imagePathFromUpload; // Generate a random input key when the value changes, to ensure the file input is unmounted and
  // remounted (this is the only way to reset its value and ensure onChange will fire again if
  // the user selects the same file again)

  const inputKey = react.useMemo(() => Math.random(), [value]);
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), value.kind === 'from-server' || value.kind === 'upload' ? core.jsx(core.Stack, {
    gap: "small"
  }, imagePath && errorMessage === undefined && core.jsx(Image, {
    src: imagePath,
    alt: field.path
  }), onChange && core.jsx(core.Stack, {
    across: true,
    gap: "small",
    align: "center"
  }, core.jsx(button.Button, {
    size: "small",
    onClick: () => {
      var _inputRef$current;

      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.click();
    }
  }, "Change image"), value.kind === 'from-server' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange({
        kind: 'remove',
        previous: value
      });
    }
  }, "Remove"), value.kind === 'upload' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange(value.previous);
    }
  }, "Cancel"), errorMessage ? core.jsx(pill.Pill, {
    tone: "negative",
    weight: "light"
  }, errorMessage) : value.kind === 'upload' && core.jsx(pill.Pill, {
    weight: "light",
    tone: "positive"
  }, "Save to upload this image"))) : core.jsx(core.Stack, {
    css: {
      alignItems: 'center'
    },
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    onClick: () => {
      var _inputRef$current2;

      (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.click();
    }
  }, "Upload Image"), value.kind === 'remove' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange === null || onChange === void 0 ? void 0 : onChange(value.previous);
    }
  }, "Undo removal"), value.kind === 'remove' && // NOTE -- UX decision is to not display this, I think it would only be relevant
  // for deleting uploaded images (and we don't support that yet)
  // <Pill weight="light" tone="warning">
  //   Save to remove this image
  // </Pill>
  null), core.jsx("input", {
    css: {
      display: 'none'
    },
    autoComplete: "off",
    autoFocus: autoFocus,
    ref: inputRef,
    key: inputKey,
    name: field.path,
    onChange: ({
      target: {
        validity,
        files
      }
    }) => {
      const file = files === null || files === void 0 ? void 0 : files[0];
      if (!file) return; // bail if the user cancels from the file browser

      onChange === null || onChange === void 0 ? void 0 : onChange({
        kind: 'upload',
        data: {
          file,
          validity
        },
        previous: value
      });
    },
    type: "file",
    disabled: onChange === undefined
  }));
}
function validateImage({
  file,
  validity
}) {
  if (!validity.valid) {
    return 'Something went wrong, please reload and try again.';
  } // check if the file is actually an image


  if (!file.type.includes('image')) {
    return 'Only image files are allowed. Please try again.';
  }
} // ==============================
// Styled Components
// ==============================

const Image = props => {
  const theme = core.useTheme();
  return core.jsx("div", {
    css: {
      backgroundColor: 'white',
      borderRadius: theme.radii.medium,
      border: `1px solid ${theme.colors.border}`,
      flexShrink: 0,
      lineHeight: 0,
      padding: 4,
      position: 'relative',
      textAlign: 'center',
      width: 130 // 120px image + chrome

    }
  }, core.jsx("img", _extends({
    css: {
      height: 'auto',
      maxWidth: '100%'
    }
  }, props)));
};

/* @jsx jsx */
const Cell = ({
  item,
  field
}) => {
  const data = item[field.path];
  if (!data) return null;
  return core.jsx("div", {
    css: {
      alignItems: 'center',
      display: 'flex',
      height: 24,
      lineHeight: 0,
      width: 24
    }
  }, core.jsx("img", {
    alt: data.filename,
    css: {
      maxHeight: '100%',
      maxWidth: '100%'
    },
    src: data.publicUrlTransformed
  }));
};
const CardValue = ({
  item,
  field
}) => {
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), data && core.jsx("img", {
    alt: data.filename,
    src: data.publicUrlTransformed
  }));
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path} {
        id
        filename
        publicUrlTransformed(transformation: { width: "120" crop: "limit" })
      }`,
    defaultValue: {
      kind: 'empty'
    },

    deserialize(item) {
      const value = item[config.path];
      if (!value) return {
        kind: 'empty'
      };
      return {
        kind: 'from-server',
        data: value
      };
    },

    validate(value) {
      return value.kind !== 'upload' || validateImage(value.data) === undefined;
    },

    serialize(value) {
      if (value.kind === 'upload') {
        return {
          [config.path]: value.data.file
        };
      }

      if (value.kind === 'remove') {
        return {
          [config.path]: null
        };
      }

      return {};
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cloudinary.cjs.dev.js */ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.dev.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.dev.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => {
  const {
    fields: fields$1,
    typography
  } = core.useTheme();
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.Checkbox, {
    autoFocus: autoFocus,
    disabled: onChange === undefined,
    onChange: event => {
      onChange === null || onChange === void 0 ? void 0 : onChange(event.target.checked);
    },
    checked: value
  }, core.jsx("span", {
    css: {
      fontWeight: typography.fontWeight.semibold,
      color: fields$1.labelColor
    }
  }, field.label)));
};
const Cell = ({
  item,
  field
}) => {
  const value = !!item[field.path];
  return core.jsx(components.CellContainer, null, core.jsx(fields.Checkbox, {
    disabled: true,
    checked: value,
    size: "small"
  }, core.jsx("span", {
    css: {}
  }, value ? 'True' : 'False')));
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path] + '');
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: false,

    deserialize(item) {
      const value = item[config.path];
      return typeof value === 'boolean' ? value : false;
    },

    serialize(value) {
      return {
        [config.path]: value
      };
    },

    filter: {
      Filter() {
        return null;
      },

      graphql({
        type,
        value
      }) {
        const key = type === 'is' ? `${config.path}` : `${config.path}_${type}`;
        return {
          [key]: value
        };
      },

      Label({
        label
      }) {
        return label.toLowerCase();
      },

      types: {
        is: {
          label: 'is',
          initialValue: true
        },
        not: {
          label: 'is not',
          initialValue: true
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  type: "number",
  onChange: event => {
    onChange(event.target.value.replace(/\D/g, ''));
  },
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'number' ? value + '' : '';
    },
    serialize: value => ({
      [config.path]: value === '' ? null : parseInt(value, 10)
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          type: "number",
          onChange: event => {
            props.onChange(event.target.value.replace(/[^\d,\s]/g, ''));
          },
          value: props.value,
          autoFocus: props.autoFocus
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is' ? config.path : `${config.path}_${type}`;
        const valueWithoutWhitespace = value.replace(/\s/g, '');
        return {
          [key]: ['in', 'not_in'].includes(type) ? valueWithoutWhitespace.split(',').map(i => parseInt(i)) : parseInt(valueWithoutWhitespace)
        };
      },

      Label({
        label,
        value,
        type
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not exactly',
          initialValue: ''
        },
        gt: {
          label: 'Is greater than',
          initialValue: ''
        },
        lt: {
          label: 'Is less than',
          initialValue: ''
        },
        gte: {
          label: 'Is greater than or equal to',
          initialValue: ''
        },
        lte: {
          label: 'Is less than or equal to',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var types_text_views_dist_fields = __webpack_require__(/*! ../../../text/views/dist/fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
__webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',

    deserialize(item) {
      const value = item[config.path];
      return typeof value === 'string' ? value : '';
    },

    serialize(value) {
      return {
        [config.path]: value
      };
    },

    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql({
        type,
        value
      }) {
        switch (type) {
          case 'is':
            {
              return {
                [config.path]: value
              };
            }

          case 'not':
            {
              return {
                [`${config.path}_not`]: value
              };
            }

          case 'in':
            {
              return {
                [`${config.path}_in`]: value.split(',').map(value => value.trim())
              };
            }

          case 'not_in':
            {
              return {
                [`${config.path}_not_in`]: value.split(',').map(value => value.trim())
              };
            }
        }

        return {};
      },

      Label({
        label,
        type,
        value
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = types_text_views_dist_fields.CardValue;
exports.Cell = types_text_views_dist_fields.Cell;
exports.Field = types_text_views_dist_fields.Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var EyeIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeIcon */ "@keystone-ui/icons/icons/EyeIcon");
var EyeOffIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeOffIcon */ "@keystone-ui/icons/icons/EyeOffIcon");
var XIcon = __webpack_require__(/*! @keystone-ui/icons/icons/XIcon */ "@keystone-ui/icons/icons/XIcon");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

const Field = ({
  field,
  value,
  onChange,
  forceValidation,
  autoFocus
}) => {
  const [showInputValue, setShowInputValue] = React.useState(false);
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const shouldShowValidation = forceValidation || touchedFirstInput && touchedSecondInput;
  const validation = shouldShowValidation && value.kind === 'editing' ? value.value === value.confirm ? value.value.length >= field.minLength ? undefined : `The password must be at least ${field.minLength} characters long` : 'The passwords do not match' : undefined;
  const inputType = showInputValue ? 'text' : 'password';
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange === undefined ? value.isSet ? 'Password is set' : 'Password is not set' : value.kind === 'initial' ? core.jsx(button.Button, {
    autoFocus: autoFocus,
    onClick: () => {
      onChange({
        kind: 'editing',
        confirm: '',
        value: '',
        isSet: value.isSet
      });
    }
  }, value.isSet ? 'Change Password' : 'Set Password') : core.jsx(core.Stack, {
    gap: "small"
  }, core.jsx("div", {
    css: {
      display: 'flex'
    }
  }, core.jsx(fields.TextInput, {
    autoFocus: true,
    invalid: validation !== undefined,
    type: inputType,
    value: value.value,
    placeholder: "New Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedFirstInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(fields.TextInput, {
    invalid: validation !== undefined,
    type: inputType,
    value: value.confirm,
    placeholder: "Confirm Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        confirm: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedSecondInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      setShowInputValue(!showInputValue);
    }
  }, core.jsx(core.VisuallyHidden, null, showInputValue ? 'Hide Text' : 'Show Text'), showInputValue ? core.jsx(EyeOffIcon.EyeOffIcon, null) : core.jsx(EyeIcon.EyeIcon, null)), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      onChange({
        kind: 'initial',
        isSet: value.isSet
      });
    }
  }, core.jsx(core.VisuallyHidden, null, "Cancel"), core.jsx(XIcon.XIcon, null))), validation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validation)));
};
const Cell = ({
  item,
  field
}) => {
  return core.jsx(components.CellContainer, null, item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path}_is_set`,
    minLength: config.fieldMeta.minLength,
    defaultValue: {
      kind: 'initial',
      isSet: null
    },

    validate(state) {
      return state.kind === 'initial' || state.value === state.confirm && state.value.length >= config.fieldMeta.minLength;
    },

    deserialize: data => ({
      kind: 'initial',
      isSet: data[`${config.path}_is_set`]
    }),
    serialize: value => {
      if (value.kind === 'initial') return {};
      return {
        [config.path]: value.value
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(segmentedControl.SegmentedControl, {
          selectedIndex: Number(props.value),
          onChange: value => {
            props.onChange(!!value);
          },
          segments: ['Is Not Set', 'Is Set']
        });
      },

      graphql: ({
        type,
        value
      }) => {
        return {
          [`${config.path}_${type}`]: value
        };
      },

      Label({
        value
      }) {
        return value ? 'is set' : 'is not set';
      },

      types: {
        is_set: {
          label: 'Is Set',
          initialValue: true
        }
      }
    }
  };
};

const Spacer = () => {
  const {
    spacing
  } = core.useTheme();
  return core.jsx("div", {
    css: {
      width: spacing.small,
      flexShrink: 0
    }
  });
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js":
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _toPropertyKey = __webpack_require__(/*! @babel/runtime/helpers/toPropertyKey */ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
__webpack_require__(/*! intersection-observer */ "intersection-observer");
var React = __webpack_require__(/*! react */ "react");
var apollo = __webpack_require__(/*! @keystone-next/admin-ui/apollo */ "@keystone-next/admin-ui/apollo");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

function useIntersectionObserver(cb, ref) {
  React.useEffect(() => {
    let observer = new IntersectionObserver(cb, {});
    let node = ref.current;

    if (node !== null) {
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  });
}

const initialItemsToLoad = 10;
const subsequentItemsToLoad = 50;
const idField = '____id____';
const labelField = '____label____';
const RelationshipSelect = ({
  autoFocus,
  controlShouldRenderValue,
  isDisabled,
  isLoading,
  list,
  placeholder,
  state,
  extraSelection = ''
}) => {
  var _data$items;

  const [search, setSearch] = React.useState('');
  const QUERY = apollo.gql`
    query RelationshipSelect($search: String!, $first: Int!, $skip: Int!) {
      items: ${list.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
        ${idField}: id
        ${labelField}: ${list.labelField}
        ${extraSelection}
      }

      meta: ${list.gqlNames.listQueryMetaName}(search: $search) {
        count
      }
    }
  `;
  const {
    data,
    error,
    loading,
    fetchMore
  } = apollo.useQuery(QUERY, {
    fetchPolicy: 'network-only',
    variables: {
      search,
      first: initialItemsToLoad,
      skip: 0
    }
  });
  const count = (data === null || data === void 0 ? void 0 : data.meta.count) || 0;
  const relationshipSelectComponents = React.useMemo(() => ({
    MenuList: (_ref) => {
      let {
        children
      } = _ref,
          props = _objectWithoutProperties(_ref, ["children"]);

      const loadingRef = React.useRef(null);
      const QUERY = apollo.gql`
            query RelationshipSelectMore($search: String!, $first: Int!, $skip: Int!) {
              items: ${list.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
                ${labelField}: ${list.labelField}
                ${idField}: id
                ${extraSelection}
              }
            }
          `;
      useIntersectionObserver(([{
        isIntersecting
      }]) => {
        if (!props.selectProps.isLoading && isIntersecting && props.options.length < count) {
          fetchMore({
            query: QUERY,
            variables: {
              search,
              first: subsequentItemsToLoad,
              skip: props.options.length
            },
            updateQuery: (prev, {
              fetchMoreResult
            }) => {
              if (!fetchMoreResult) return prev;
              return {
                meta: prev.meta,
                items: [...prev.items, ...fetchMoreResult.items]
              };
            }
          });
        }
      }, loadingRef);
      return core.jsx(fields.selectComponents.MenuList, props, children, core.jsx("div", {
        css: {
          textAlign: 'center'
        },
        ref: loadingRef
      }, props.options.length < count && core.jsx("span", {
        css: {
          padding: 8
        }
      }, "Loading...")));
    }
  }), [count, list.gqlNames.listQueryName]); // TODO: better error UI
  // TODO: Handle permission errors
  // (ie; user has permission to read this relationship field, but
  // not the related list, or some items on the list)

  if (error) {
    return core.jsx("span", null, "Error");
  }

  const options = (data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.map((_ref2) => {
    let {
      [idField]: value,
      [labelField]: label
    } = _ref2,
        data = _objectWithoutProperties(_ref2, [idField, labelField].map(_toPropertyKey));

    return {
      value,
      label: label || value,
      data
    };
  })) || [];

  if (state.kind === 'one') {
    return core.jsx(fields.Select // this is necessary because react-select passes a second argument to onInputChange
    // and useState setters log a warning if a second argument is passed
    , {
      onInputChange: val => setSearch(val),
      isLoading: loading || isLoading,
      autoFocus: autoFocus,
      components: relationshipSelectComponents,
      portalMenu: true,
      value: state.value ? {
        value: state.value.id,
        label: state.value.label,
        // @ts-ignore
        data: state.value.data
      } : null,
      options: options,
      onChange: value => {
        state.onChange(value ? {
          id: value.value,
          label: value.label,
          data: value.data
        } : null);
      },
      placeholder: placeholder,
      controlShouldRenderValue: controlShouldRenderValue,
      isClearable: controlShouldRenderValue,
      isDisabled: isDisabled
    });
  }

  return core.jsx(fields.MultiSelect // this is necessary because react-select passes a second argument to onInputChange
  // and useState setters log a warning if a second argument is passed
  , {
    onInputChange: val => setSearch(val),
    isLoading: loading || isLoading,
    autoFocus: autoFocus,
    components: relationshipSelectComponents,
    portalMenu: true,
    value: state.value.map(value => ({
      value: value.id,
      label: value.label,
      data: value.data
    })),
    options: options,
    onChange: value => {
      state.onChange(value.map(x => ({
        id: x.value,
        label: x.label,
        data: x.data
      })));
    },
    placeholder: placeholder,
    controlShouldRenderValue: controlShouldRenderValue,
    isClearable: controlShouldRenderValue,
    isDisabled: isDisabled
  });
};

exports.RelationshipSelect = RelationshipSelect;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var React = __webpack_require__(/*! react */ "react");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var context = __webpack_require__(/*! @keystone-next/admin-ui/context */ "@keystone-next/admin-ui/context");
var router = __webpack_require__(/*! @keystone-next/admin-ui/router */ "@keystone-next/admin-ui/router");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var modals = __webpack_require__(/*! @keystone-ui/modals */ "@keystone-ui/modals");
var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
var tooltip = __webpack_require__(/*! @keystone-ui/tooltip */ "@keystone-ui/tooltip");
var loading = __webpack_require__(/*! @keystone-ui/loading */ "@keystone-ui/loading");
var adminUiUtils = __webpack_require__(/*! @keystone-next/admin-ui-utils */ "@keystone-next/admin-ui-utils");
var apollo = __webpack_require__(/*! @keystone-next/admin-ui/apollo */ "@keystone-next/admin-ui/apollo");
var toast = __webpack_require__(/*! @keystone-ui/toast */ "@keystone-ui/toast");
var isDeepEqual = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
var types_relationship_views_RelationshipSelect_dist_fields = __webpack_require__(/*! ../RelationshipSelect/dist/fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/toPropertyKey */ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
__webpack_require__(/*! intersection-observer */ "intersection-observer");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

function useItemState({
  selectedFields,
  localList,
  id,
  field
}) {
  const {
    data,
    error,
    loading
  } = apollo.useQuery(apollo.gql`query($id: ID!) {
  item: ${localList.key}(where: {id: $id}) {
    id
    relationship: ${field.path} {
      ${selectedFields}
    }
  }
}`, {
    variables: {
      id
    },
    errorPolicy: 'all'
  });
  const {
    itemsArrFromData,
    relationshipGetter
  } = React.useMemo(() => {
    const dataGetter = adminUiUtils.makeDataGetter(data, error === null || error === void 0 ? void 0 : error.graphQLErrors);
    const relationshipGetter = dataGetter.get('item').get('relationship');
    const isMany = Array.isArray(relationshipGetter.data);
    const itemsArrFromData = (isMany ? relationshipGetter.data.map((_, i) => relationshipGetter.get(i)) : [relationshipGetter]).filter(x => {
      var _x$data;

      return ((_x$data = x.data) === null || _x$data === void 0 ? void 0 : _x$data.id) != null;
    });
    return {
      relationshipGetter,
      itemsArrFromData
    };
  }, [data, error]);
  let [{
    items,
    itemsArrFromData: itemsArrFromDataState
  }, setItemsState] = React.useState({
    itemsArrFromData: [],
    items: {}
  });

  if (itemsArrFromDataState !== itemsArrFromData) {
    let newItems = {};
    itemsArrFromData.forEach(item => {
      var _items$item$data$id, _item$errors, _initialItemInState$e;

      const initialItemInState = (_items$item$data$id = items[item.data.id]) === null || _items$item$data$id === void 0 ? void 0 : _items$item$data$id.fromInitialQuery;

      if ((items[item.data.id] && initialItemInState || !items[item.data.id]) && (!initialItemInState || item.data !== initialItemInState.data || ((_item$errors = item.errors) === null || _item$errors === void 0 ? void 0 : _item$errors.length) !== ((_initialItemInState$e = initialItemInState.errors) === null || _initialItemInState$e === void 0 ? void 0 : _initialItemInState$e.length) || (item.errors || []).some((err, i) => {
        var _initialItemInState$e2;

        return err !== ((_initialItemInState$e2 = initialItemInState.errors) === null || _initialItemInState$e2 === void 0 ? void 0 : _initialItemInState$e2[i]);
      }))) {
        newItems[item.data.id] = {
          current: item,
          fromInitialQuery: item
        };
      } else {
        newItems[item.data.id] = items[item.data.id];
      }
    });
    items = newItems;
    setItemsState({
      items: newItems,
      itemsArrFromData
    });
  }

  return {
    items: React.useMemo(() => {
      const itemsToReturn = {};
      Object.keys(items).forEach(id => {
        itemsToReturn[id] = items[id].current;
      });
      return itemsToReturn;
    }, [items]),
    setItems: React.useCallback(items => {
      setItemsState(state => {
        let itemsForState = {};
        Object.keys(items).forEach(id => {
          var _state$items$id;

          if (items[id] === ((_state$items$id = state.items[id]) === null || _state$items$id === void 0 ? void 0 : _state$items$id.current)) {
            itemsForState[id] = state.items[id];
          } else {
            var _state$items$id2;

            itemsForState[id] = {
              current: items[id],
              fromInitialQuery: (_state$items$id2 = state.items[id]) === null || _state$items$id2 === void 0 ? void 0 : _state$items$id2.fromInitialQuery
            };
          }
        });
        return {
          itemsArrFromData: state.itemsArrFromData,
          items: itemsForState
        };
      });
    }, [setItemsState]),
    state: (() => {
      if (loading) {
        return {
          kind: 'loading'
        };
      }

      if (error !== null && error !== void 0 && error.networkError) {
        return {
          kind: 'error',
          message: error.networkError.message
        };
      }

      if (field.many && !relationshipGetter.data) {
        var _relationshipGetter$e;

        return {
          kind: 'error',
          message: ((_relationshipGetter$e = relationshipGetter.errors) === null || _relationshipGetter$e === void 0 ? void 0 : _relationshipGetter$e[0].message) || ''
        };
      }

      return {
        kind: 'loaded'
      };
    })()
  };
}
function useFieldsObj(list, fields) {
  return React.useMemo(() => {
    const editFields = {};
    fields === null || fields === void 0 ? void 0 : fields.forEach(fieldPath => {
      editFields[fieldPath] = list.fields[fieldPath];
    });
    return editFields;
  }, [fields, list.fields]);
}

function InlineEdit({
  fields,
  list,
  selectedFields,
  itemGetter,
  onCancel,
  onSave
}) {
  var _itemGetter$errors;

  const fieldsObj = useFieldsObj(list, fields);
  const [update, {
    loading,
    error
  }] = apollo.useMutation(apollo.gql`mutation ($data: ${list.gqlNames.updateInputName}!, $id: ID!) {
          item: ${list.gqlNames.updateMutationName}(id: $id, data: $data) {
            ${selectedFields}
          }
        }`, {
    errorPolicy: 'all'
  });
  const [state, setValue] = React.useState(() => {
    const value = adminUiUtils.deserializeValue(fieldsObj, itemGetter);
    return {
      value,
      item: itemGetter.data
    };
  });

  if (state.item !== itemGetter.data && (_itemGetter$errors = itemGetter.errors) !== null && _itemGetter$errors !== void 0 && _itemGetter$errors.every(x => {
    var _x$path;

    return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) !== 1;
  })) {
    const value = adminUiUtils.deserializeValue(fieldsObj, itemGetter);
    setValue({
      value,
      item: itemGetter.data
    });
  }

  const {
    changedFields,
    dataForUpdate
  } = adminUiUtils.useChangedFieldsAndDataForUpdate(fieldsObj, itemGetter, state.value);
  const invalidFields = adminUiUtils.useInvalidFields(fieldsObj, state.value);
  const [forceValidation, setForceValidation] = React.useState(false);
  const toasts = toast.useToasts();
  const saveButtonProps = {
    isLoading: loading,
    weight: 'bold',
    size: 'small',
    tone: 'active',
    onClick: () => {
      const newForceValidation = invalidFields.size !== 0;
      setForceValidation(newForceValidation);
      if (newForceValidation) return;
      update({
        variables: {
          data: dataForUpdate,
          id: itemGetter.get('id').data
        }
      }).then(({
        data,
        errors
      }) => {
        // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
        // which are handled seperately and do not indicate a failure to update the item
        const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
          var _x$path2;

          return ((_x$path2 = x.path) === null || _x$path2 === void 0 ? void 0 : _x$path2.length) === 1;
        });

        if (error) {
          toasts.addToast({
            title: 'Failed to update item',
            tone: 'negative',
            message: error.message
          });
        } else {
          toasts.addToast({
            title: data.item[list.labelField] || data.item.id,
            tone: 'positive',
            message: 'Saved successfully'
          });
          onSave(adminUiUtils.makeDataGetter(data, errors).get('item'));
        }
      }).catch(err => {
        toasts.addToast({
          title: 'Failed to update item',
          tone: 'negative',
          message: err.message
        });
      });
    },
    children: 'Save'
  };
  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(components.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
    // which are handled seperately and do not indicate a failure to update the item
    ,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors.filter(x => {
      var _x$path3;

      return ((_x$path3 = x.path) === null || _x$path3 === void 0 ? void 0 : _x$path3.length) === 1;
    })
  }), core.jsx(adminUiUtils.Fields, {
    fieldModes: null,
    fields: fieldsObj,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: React.useCallback(value => {
      setValue(state => ({
        item: state.item,
        value: value(state.value)
      }));
    }, [setValue]),
    value: state.value
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, changedFields.size ? core.jsx(button.Button, saveButtonProps) : core.jsx(tooltip.Tooltip, {
    content: "No fields have been modified so you cannot save changes"
  }, props => core.jsx(button.Button, _extends({}, props, saveButtonProps, {
    // making onClick undefined instead of making the button disabled so the button can be focussed so keyboard users can see the tooltip
    onClick: undefined
  }))), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

/* @jsx jsx */
function InlineCreate({
  list,
  onCancel,
  onCreate,
  fields: fieldPaths,
  selectedFields
}) {
  const toasts = toast.useToasts();
  const fields = useFieldsObj(list, fieldPaths);
  const [createItem, {
    loading,
    error
  }] = apollo.useMutation(apollo.gql`mutation($data: ${list.gqlNames.createInputName}!) {
      item: ${list.gqlNames.createMutationName}(data: $data) {
        ${selectedFields}
    }
  }`);
  const [value, setValue] = React.useState(() => {
    const value = {};
    Object.keys(fields).forEach(fieldPath => {
      value[fieldPath] = {
        kind: 'value',
        value: fields[fieldPath].controller.defaultValue
      };
    });
    return value;
  });
  const invalidFields = adminUiUtils.useInvalidFields(fields, value);
  const [forceValidation, setForceValidation] = React.useState(false);

  const onCreateClick = () => {
    const newForceValidation = invalidFields.size !== 0;
    setForceValidation(newForceValidation);
    if (newForceValidation) return;
    const data = {};
    const allSerializedValues = adminUiUtils.serializeValueToObjByFieldKey(fields, value);
    Object.keys(allSerializedValues).forEach(fieldPath => {
      const {
        controller
      } = fields[fieldPath];
      const serialized = allSerializedValues[fieldPath];

      if (!isDeepEqual__default['default'](serialized, controller.serialize(controller.defaultValue))) {
        Object.assign(data, serialized);
      }
    });
    createItem({
      variables: {
        data
      }
    }).then(({
      data,
      errors
    }) => {
      // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
      // which are handled seperately and do not indicate a failure to update the item
      const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
        var _x$path;

        return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) === 1;
      });

      if (error) {
        toasts.addToast({
          title: 'Failed to create item',
          tone: 'negative',
          message: error.message
        });
      } else {
        toasts.addToast({
          title: data.item[list.labelField] || data.item.id,
          tone: 'positive',
          message: 'Saved successfully'
        });
        onCreate(adminUiUtils.makeDataGetter(data, errors).get('item'));
      }
    }).catch(err => {
      toasts.addToast({
        title: 'Failed to update item',
        tone: 'negative',
        message: err.message
      });
    });
  };

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(components.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors
  }), core.jsx(adminUiUtils.Fields, {
    fieldModes: null,
    fields: fields,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: setValue,
    value: value
  }), core.jsx(core.Stack, {
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    isLoading: loading,
    size: "small",
    tone: "positive",
    weight: "bold",
    onClick: onCreateClick
  }, "Create ", list.singular), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

const CardContainer = (_ref) => {
  let {
    mode = 'view'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["mode"]);

  const {
    tones
  } = core.useTheme();
  const tone = tones[mode === 'edit' ? 'active' : mode === 'create' ? 'positive' : 'passive'];
  return core.jsx(core.Box, _extends({
    paddingLeft: "xlarge",
    css: {
      position: 'relative',
      ':before': {
        content: '" "',
        backgroundColor: tone.border,
        borderRadius: 4,
        width: 4,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1
      }
    }
  }, props));
};

function Cards({
  localList,
  field,
  foreignList,
  id,
  value,
  onChange,
  forceValidation
}) {
  var _field$display$inline;

  let selectedFields = [...new Set([...field.display.cardFields, ...(((_field$display$inline = field.display.inlineEdit) === null || _field$display$inline === void 0 ? void 0 : _field$display$inline.fields) || [])])].map(fieldPath => {
    return foreignList.fields[fieldPath].controller.graphqlSelection;
  }).join('\n');

  if (!field.display.cardFields.includes('id')) {
    selectedFields += '\nid';
  }

  if (!field.display.cardFields.includes(foreignList.labelField) && foreignList.labelField !== 'id') {
    selectedFields += `\n${foreignList.labelField}`;
  }

  const {
    items,
    setItems,
    state: itemsState
  } = useItemState({
    selectedFields,
    localList,
    id,
    field
  });
  const client = apollo.useApolloClient();
  const [isLoadingLazyItems, setIsLoadingLazyItems] = React.useState(false);
  const [showConnectItems, setShowConnectItems] = React.useState(false);
  const [hideConnectItemsLabel, setHideConnectItemsLabel] = React.useState('Cancel');
  const isMountedRef = React.useRef(false);
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  });

  if (itemsState.kind === 'loading') {
    return core.jsx("div", null, core.jsx(loading.LoadingDots, {
      label: `Loading items for ${field.label} field`
    }));
  }

  if (itemsState.kind === 'error') {
    return core.jsx("span", {
      css: {
        color: 'red'
      }
    }, itemsState.message);
  }

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, [...value.currentIds].map(id => {
    const itemGetter = items[id];
    return value.itemsBeingEdited.has(id) && onChange !== undefined ? core.jsx(CardContainer, {
      mode: "edit",
      key: id
    }, core.jsx(InlineEdit, {
      list: foreignList,
      fields: field.display.inlineEdit.fields,
      onSave: newItemGetter => {
        setItems(_objectSpread(_objectSpread({}, items), {}, {
          [id]: newItemGetter
        }));
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      },
      selectedFields: selectedFields,
      itemGetter: itemGetter,
      onCancel: () => {
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      }
    })) : core.jsx(CardContainer, {
      mode: "view",
      key: id
    }, core.jsx(core.Stack, {
      gap: "xlarge"
    }, field.display.cardFields.map(fieldPath => {
      const field = foreignList.fields[fieldPath];
      const itemForField = {};

      for (const graphqlField of adminUiUtils.getRootGraphQLFieldsFromFieldController(field.controller)) {
        const fieldGetter = itemGetter.get(graphqlField);

        if (fieldGetter.errors) {
          const errorMessage = fieldGetter.errors[0].message;
          return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), errorMessage);
        }

        itemForField[graphqlField] = fieldGetter.data;
      }

      return core.jsx(field.views.CardValue, {
        key: fieldPath,
        field: field.controller,
        item: itemForField
      });
    })), core.jsx(core.Stack, {
      across: true,
      gap: "small",
      marginTop: "xlarge"
    }, field.display.inlineEdit && onChange !== undefined && core.jsx(button.Button, {
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited: new Set([...value.itemsBeingEdited, id])
        }));
      },
      tone: "active"
    }, "Edit"), field.display.removeMode === 'disconnect' && onChange !== undefined && core.jsx(tooltip.Tooltip, {
      content: "This item will not be deleted. It will only be removed from this field."
    }, props => core.jsx(button.Button, _extends({
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        const currentIds = new Set(value.currentIds);
        currentIds.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          currentIds
        }));
      }
    }, props, {
      tone: "negative"
    }), "Remove")), field.display.linkToItem && core.jsx(button.Button, {
      size: "small",
      weight: "link",
      tone: "active",
      css: {
        textDecoration: 'none'
      },
      as: router.Link,
      href: `/${foreignList.path}/${id}`
    }, "View ", foreignList.singular, " details")));
  }), onChange === undefined ? null : field.display.inlineConnect && showConnectItems ? core.jsx(CardContainer, {
    mode: "edit"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginY: "medium",
    across: true
  }, core.jsx(types_relationship_views_RelationshipSelect_dist_fields.RelationshipSelect, {
    autoFocus: true,
    controlShouldRenderValue: isLoadingLazyItems,
    isDisabled: onChange === undefined,
    list: foreignList,
    isLoading: isLoadingLazyItems,
    placeholder: `Select a ${foreignList.singular}`,
    state: {
      kind: 'many',

      async onChange(options) {
        // TODO: maybe use the extraSelection prop on RelationshipSelect here
        const itemsToFetchAndConnect = [];
        options.forEach(item => {
          if (!value.currentIds.has(item.id)) {
            itemsToFetchAndConnect.push(item.id);
          }
        });

        if (itemsToFetchAndConnect.length) {
          try {
            const {
              data,
              errors
            } = await client.query({
              query: apollo.gql`query ($ids: [ID!]!) {
                      items: ${foreignList.gqlNames.listQueryName}(where: {id_in:$ids}) {
                        ${selectedFields}
                      }
                    }`,
              variables: {
                ids: itemsToFetchAndConnect
              }
            });

            if (isMountedRef.current) {
              const dataGetters = adminUiUtils.makeDataGetter(data, errors);
              const itemsDataGetter = dataGetters.get('items');

              let newItems = _objectSpread({}, items);

              let newCurrentIds = field.many ? new Set(value.currentIds) : new Set();

              if (Array.isArray(itemsDataGetter.data)) {
                itemsDataGetter.data.forEach((item, i) => {
                  if ((item === null || item === void 0 ? void 0 : item.id) != null) {
                    newCurrentIds.add(item.id);
                    newItems[item.id] = itemsDataGetter.get(i);
                  }
                });
              }

              if (newCurrentIds.size) {
                setItems(newItems);
                onChange(_objectSpread(_objectSpread({}, value), {}, {
                  currentIds: newCurrentIds
                }));
                setHideConnectItemsLabel('Done');
              }
            }
          } finally {
            if (isMountedRef.current) {
              setIsLoadingLazyItems(false);
            }
          }
        }
      },

      value: (() => {
        let options = [];
        Object.keys(items).forEach(id => {
          if (value.currentIds.has(id)) {
            options.push({
              id,
              label: id
            });
          }
        });
        return options;
      })()
    }
  }), core.jsx(button.Button, {
    onClick: () => setShowConnectItems(false)
  }, hideConnectItemsLabel))) : value.itemBeingCreated ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(InlineCreate, {
    selectedFields: selectedFields,
    fields: field.display.inlineCreate.fields,
    list: foreignList,
    onCancel: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false
      }));
    },
    onCreate: itemGetter => {
      const id = itemGetter.data.id;
      setItems(_objectSpread(_objectSpread({}, items), {}, {
        [id]: itemGetter
      }));
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false,
        currentIds: field.many ? new Set([...value.currentIds, id]) : new Set([id])
      }));
    }
  })) : field.display.inlineCreate || field.display.inlineConnect ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginTop: "medium",
    across: true
  }, field.display.inlineCreate && core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    tone: "positive",
    onClick: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: true
      }));
    }
  }, "Create ", foreignList.singular), field.display.inlineConnect && core.jsx(button.Button, {
    size: "small",
    weight: "none",
    tone: "passive",
    onClick: () => {
      setShowConnectItems(true);
      setHideConnectItemsLabel('Cancel');
    }
  }, "Link existing ", foreignList.singular))) : null, forceValidation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, "You must finish creating and editing any related ", foreignList.label.toLowerCase(), " before saving the ", localList.singular.toLowerCase()));
}

function LinkToRelatedItems({
  value,
  list
}) {
  var _value$value;

  const commonProps = {
    size: 'small',
    tone: 'active',
    weight: 'link'
  };

  if (value.kind === 'many') {
    return core.jsx(button.Button, _extends({}, commonProps, {
      as: router.Link // What happens when there are 10,000 ids? The URL would be too
      // big, so we arbitrarily limit it to the first 100
      // TODO: we should be able to filter by this, no?
      ,
      href: `/${list.path}?!id_in="${value.value.slice(0, 100).map(({
        id
      }) => id).join(',')}"`
    }), "View related ", list.plural);
  }

  return core.jsx(button.Button, _extends({}, commonProps, {
    as: router.Link,
    href: `/${list.path}/${(_value$value = value.value) === null || _value$value === void 0 ? void 0 : _value$value.id}`
  }), "View ", list.singular, " details");
}

const RelationshipLinkButton = ({
  href,
  children
}) => core.jsx(button.Button, {
  css: {
    padding: 0,
    height: 'auto'
  },
  weight: "link",
  tone: "active",
  as: router.Link,
  href: href
}, children);

const RelationshipDisplay = ({
  list,
  value
}) => {
  if (value.kind === 'many') {
    if (value.value.length) {
      return core.jsx(core.Inline, {
        gap: "small"
      }, value.value.map(i => core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${i.id}`
      }, i.label)));
    } else {
      return core.jsx("div", null, "(No ", list.plural, ")");
    }
  } else {
    if (value.value) {
      return core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${value.value.id}`
      }, value.value.label);
    } else {
      return core.jsx("div", null, "(No ", list.singular, ")");
    }
  }
};

const Field = ({
  field,
  autoFocus,
  value,
  onChange,
  forceValidation
}) => {
  const keystone = context.useKeystone();
  const foreignList = context.useList(field.refListKey);
  const localList = context.useList(field.listKey);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  if (value.kind === 'cards-view') {
    return core.jsx(core.Stack, {
      as: "fieldset",
      gap: "medium"
    }, core.jsx(fields.FieldLegend, null, field.label), core.jsx(Cards, {
      forceValidation: forceValidation,
      field: field,
      id: value.id,
      value: value,
      onChange: onChange,
      foreignList: foreignList,
      localList: localList
    }));
  }

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), onChange ? core.jsx(React.Fragment, null, core.jsx(core.Stack, {
    gap: "medium"
  }, core.jsx(types_relationship_views_RelationshipSelect_dist_fields.RelationshipSelect, {
    controlShouldRenderValue: true,
    autoFocus: autoFocus,
    isDisabled: onChange === undefined,
    list: foreignList,
    state: value.kind === 'many' ? {
      kind: 'many',
      value: value.value,

      onChange(newItems) {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: newItems
        }));
      }

    } : {
      kind: 'one',
      value: value.value,

      onChange(newVal) {
        if (value.kind === 'one') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: newVal
          }));
        }
      }

    }
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, !field.hideCreate && core.jsx(button.Button, {
    size: "small",
    disabled: isDrawerOpen,
    onClick: () => {
      setIsDrawerOpen(true);
    }
  }, "Create related ", foreignList.singular), keystone.authenticatedItem.state === 'authenticated' && keystone.authenticatedItem.listKey === field.refListKey && core.jsx(button.Button, {
    size: "small",
    isDisabled: onChange === undefined,
    onClick: () => {
      if (keystone.authenticatedItem.state === 'authenticated') {
        const val = {
          label: keystone.authenticatedItem.label,
          id: keystone.authenticatedItem.id
        };

        if (value.kind === 'many') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: [...value.value, val]
          }));
        } else {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: val
          }));
        }
      }
    }
  }, value.kind === 'many' ? 'Add ' : 'Set as ', keystone.authenticatedItem.label), !!(value.kind === 'many' ? value.value.length : value.kind === 'one' && value.value) && core.jsx(LinkToRelatedItems, {
    list: foreignList,
    value: value
  }))), core.jsx(modals.DrawerController, {
    isOpen: isDrawerOpen
  }, core.jsx(components.CreateItemDrawer, {
    listKey: foreignList.key,
    onClose: () => {
      setIsDrawerOpen(false);
    },
    onCreate: val => {
      setIsDrawerOpen(false);

      if (value.kind === 'many') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: [...value.value, val]
        }));
      } else if (value.kind === 'one') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: val
        }));
      }
    }
  }))) : core.jsx(RelationshipDisplay, {
    value: value,
    list: foreignList
  }));
};
const Cell = ({
  field,
  item
}) => {
  const list = context.useList(field.refListKey);
  const data = item[field.path];
  const items = (Array.isArray(data) ? data : [data]).filter(item => item);
  const displayItems = items.length < 5 ? items : items.slice(0, 3);
  const overflow = items.length < 5 ? 0 : items.length - 3;
  const {
    colors
  } = core.useTheme();
  const styles = {
    color: colors.foreground,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  };
  return core.jsx(components.CellContainer, null, displayItems.map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(router.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`,
    css: styles
  }, item.label || item.id))), overflow ? `, and ${overflow} more` : null);
};
const CardValue = ({
  field,
  item
}) => {
  const list = context.useList(field.refListKey);
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), (Array.isArray(data) ? data : [data]).filter(item => item).map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(router.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`
  }, item.label || item.id))));
};
const controller = config => {
  return {
    many: config.fieldMeta.many,
    listKey: config.listKey,
    path: config.path,
    label: config.label,
    display: config.fieldMeta.displayMode === 'cards' ? {
      mode: 'cards',
      cardFields: config.fieldMeta.cardFields,
      inlineCreate: config.fieldMeta.inlineCreate,
      inlineEdit: config.fieldMeta.inlineEdit,
      linkToItem: config.fieldMeta.linkToItem,
      removeMode: config.fieldMeta.removeMode,
      inlineConnect: config.fieldMeta.inlineConnect
    } : {
      mode: 'select',
      refLabelField: config.fieldMeta.refLabelField
    },
    refListKey: config.fieldMeta.refListKey,
    graphqlSelection: config.fieldMeta.displayMode === 'cards' ? // TODO: namespace this stuff at the Keystone level
    `${config.path}__id: id
           ${config.path} {
            id
           }` : `${config.path} {
             id
             label: ${config.fieldMeta.refLabelField}
           }`,
    hideCreate: config.fieldMeta.hideCreate,
    defaultValue: config.fieldMeta.many ? {
      kind: 'many',
      initialValue: [],
      value: []
    } : {
      kind: 'one',
      value: null,
      initialValue: null
    },
    deserialize: data => {
      if (config.fieldMeta.displayMode === 'cards') {
        const initialIds = new Set((Array.isArray(data[config.path]) ? data[config.path] : data[config.path] ? [data[config.path]] : []).map(x => x.id));
        return {
          kind: 'cards-view',
          id: data[`${config.path}__id`],
          itemsBeingEdited: new Set(),
          itemBeingCreated: false,
          initialIds,
          currentIds: initialIds
        };
      }

      if (config.fieldMeta.many) {
        let value = (data[config.path] || []).map(x => ({
          id: x.id,
          label: x.label || x.id
        }));
        return {
          kind: 'many',
          initialValue: value,
          value
        };
      }

      let value = data[config.path];

      if (value) {
        value = {
          id: value.id,
          label: value.label || value.id
        };
      }

      return {
        kind: 'one',
        value,
        initialValue: value
      };
    },

    validate(value) {
      return value.kind !== 'cards-view' || value.itemsBeingEdited.size === 0 && !value.itemBeingCreated;
    },

    serialize: state => {
      if (state.kind === 'many') {
        const newAllIds = new Set(state.value.map(x => x.id));
        const initialIds = new Set(state.initialValue.map(x => x.id));
        let disconnect = state.initialValue.filter(x => !newAllIds.has(x.id)).map(x => ({
          id: x.id
        }));
        let connect = state.value.filter(x => !initialIds.has(x.id)).map(x => ({
          id: x.id
        }));

        if (disconnect.length || connect.length) {
          let output = {};

          if (disconnect.length) {
            output.disconnect = disconnect;
          }

          if (connect.length) {
            output.connect = connect;
          }

          return {
            [config.path]: output
          };
        }
      } else if (state.kind === 'one') {
        var _state$initialValue;

        if (state.initialValue && !state.value) {
          return {
            [config.path]: {
              disconnect: {
                id: state.initialValue.id
              }
            }
          };
        } else if (state.value && state.value.id !== ((_state$initialValue = state.initialValue) === null || _state$initialValue === void 0 ? void 0 : _state$initialValue.id)) {
          return {
            [config.path]: {
              connect: {
                id: state.value.id
              }
            }
          };
        }
      } else if (state.kind === 'cards-view') {
        let disconnect = [...state.initialIds].filter(id => !state.currentIds.has(id)).map(id => ({
          id
        }));
        let connect = [...state.currentIds].filter(id => !state.initialIds.has(id)).map(id => ({
          id
        }));

        if (config.fieldMeta.many) {
          if (disconnect.length || connect.length) {
            return {
              [config.path]: {
                connect: connect.length ? connect : undefined,
                disconnect: disconnect.length ? disconnect : undefined
              }
            };
          }
        } else if (connect.length) {
          return {
            [config.path]: {
              connect: connect[0]
            }
          };
        } else if (disconnect.length) {
          return {
            [config.path]: {
              disconnect: disconnect[0]
            }
          };
        }
      }

      return {};
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), field.displayMode === 'select' ? core.jsx(fields.Select, {
  isClearable: true,
  autoFocus: autoFocus,
  options: field.options,
  isDisabled: onChange === undefined,
  onChange: value => {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  },
  value: value,
  portalMenu: true
}) : core.jsx(segmentedControl.SegmentedControl, {
  segments: field.options.map(x => x.label),
  selectedIndex: value ? field.options.findIndex(x => x.value === value.value) : undefined,
  onChange: index => {
    onChange === null || onChange === void 0 ? void 0 : onChange(field.options[index]);
  }
}));
const Cell = ({
  item,
  field,
  linkTo
}) => {
  var _field$options$find;

  let value = item[field.path] + '';
  const label = (_field$options$find = field.options.find(x => x.value === value)) === null || _field$options$find === void 0 ? void 0 : _field$options$find.label;
  return linkTo ? core.jsx(components.CellLink, linkTo, label) : core.jsx(components.CellContainer, null, label);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  var _field$options$find2;

  const label = (_field$options$find2 = field.options.find(x => x.value === item[field.path])) === null || _field$options$find2 === void 0 ? void 0 : _field$options$find2.label;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), label);
};
const controller = config => {
  const optionsWithStringValues = config.fieldMeta.options.map(x => ({
    label: x.label,
    value: x.value.toString()
  }));
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: null,
    dataType: config.fieldMeta.dataType,
    displayMode: config.fieldMeta.displayMode,
    options: optionsWithStringValues,
    deserialize: data => {
      for (const option of config.fieldMeta.options) {
        if (option.value === data[config.path]) {
          return {
            label: option.label,
            value: option.value.toString()
          };
        }
      }

      return null;
    },
    serialize: value => {
      var _value$value;

      return {
        [config.path]: (_value$value = value === null || value === void 0 ? void 0 : value.value) !== null && _value$value !== void 0 ? _value$value : null
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(fields.MultiSelect, {
          onChange: props.onChange,
          options: optionsWithStringValues,
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value: options
      }) => {
        const inverted = type === 'not_matches';

        if (!options.length) {
          return {
            [`${config.path}${inverted ? '_not' : ''}`]: null
          };
        }

        const isMulti = options.length > 1;
        let key = config.path;

        if (isMulti && inverted) {
          key = `${config.path}_not_in`;
        } else if (isMulti) {
          key = `${config.path}_in`;
        } else if (inverted) {
          key = `${config.path}_not`;
        }

        const value = isMulti ? options.map(x => x.value) : options[0].value;
        return {
          [key]: value
        };
      },

      Label({
        type,
        value
      }) {
        if (!value.length) {
          return type === 'not_matches' ? `is set` : `has no value`;
        }

        if (value.length > 1) {
          const values = value.map(i => i.label).join(', ');
          return type === 'not_matches' ? `is not in [${values}]` : `is in [${values}]`;
        }

        const optionLabel = value[0].label;
        return type === 'not_matches' ? `is not ${optionLabel}` : `is ${optionLabel}`;
      },

      types: {
        matches: {
          label: 'Matches',
          initialValue: []
        },
        not_matches: {
          label: 'Does not match',
          initialValue: []
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? field.displayMode === 'textarea' ? core.jsx(fields.TextArea, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    displayMode: config.fieldMeta.displayMode,
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'string' ? value : '';
    },
    serialize: value => ({
      [config.path]: value
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is_i' ? `${config.path}_i` : `${config.path}_${type}`;
        return {
          [key]: value
        };
      },

      Label({
        label,
        value
      }) {
        return `${label.toLowerCase()}: "${value}"`;
      },

      types: {
        contains_i: {
          label: 'Contains',
          initialValue: ''
        },
        not_contains_i: {
          label: 'Does not contain',
          initialValue: ''
        },
        is_i: {
          label: 'Is exactly',
          initialValue: ''
        },
        not_i: {
          label: 'Is not exactly',
          initialValue: ''
        },
        starts_with_i: {
          label: 'Starts with',
          initialValue: ''
        },
        not_starts_with_i: {
          label: 'Does not start with',
          initialValue: ''
        },
        ends_with_i: {
          label: 'Ends with',
          initialValue: ''
        },
        not_ends_with_i: {
          label: 'Does not end with',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var dateFns = __webpack_require__(/*! date-fns */ "date-fns");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

const getTime = timeValue => {
  if (!timeValue) return [0, 0];
  return timeValue.split(':').map(n => Number(n));
};

function isValidDate(date) {
  if (!date) return false;
  return Boolean(dateFns.parseISO(date).toISOString());
}
function isValidTime(time) {
  if (!time) {
    return false;
  }

  return dateFns.isValid(dateFns.parse(time, 'HH:mm', new Date()));
}
function isValidISO(value) {
  try {
    // toISOString converts our string into zulu time
    // instead of checking for the timestamp to be specifically in zulu time
    // we relax the validation here a little, to just be a valid ISO string.
    return Boolean(dateFns.parseISO(constructTimestamp(value)).toISOString());
  } catch (err) {
    return false;
  }
}
function constructTimestamp({
  dateValue,
  timeValue
}) {
  let formattedDate = new Date(dateValue);
  const [hours, minutes] = getTime(timeValue);
  formattedDate.setHours(hours);
  formattedDate.setMinutes(minutes);
  return dateFns.formatISO(formattedDate);
}
function deconstructTimestamp(value) {
  return {
    dateValue: value,
    timeValue: resolveInitialTimeValue(value)
  };
}
function formatOutput(value) {
  if (!value) return '';
  const date = new Date(value);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
function resolveInitialTimeValue(value, defaultValue) {
  const date = value || defaultValue;
  if (!date) return '';
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

const TimePicker = ({
  autoFocus,
  onBlur,
  disabled,
  onChange,
  format = '24hr',
  value
}) => {
  return core.jsx(fields.TextInput, {
    autoFocus: autoFocus,
    maxLength: format === '24hr' ? 5 : 7,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    placeholder: format === '24hr' ? '00:00' : '00:00am',
    value: value
  });
};

const Field = ({
  field,
  value,
  onChange,
  forceValidation
}) => {
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const showValidation = touchedFirstInput && touchedSecondInput || forceValidation;

  const showDateError = dateValue => {
    if (!dateValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a date value.");
    }

    return !isValidDate(dateValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Incorrect date value");
  };

  const showTimeError = timeValue => {
    if (!timeValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a time value.");
    }

    return !isValidTime(timeValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Time must be in the form HH:mm");
  };

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(core.Stack, null, core.jsx(core.Inline, {
    gap: "small"
  }, core.jsx(core.Stack, null, core.jsx(fields.DatePicker, {
    onUpdate: date => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: date || ''
      }));
    },
    onClear: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: ''
      }));
    },
    onBlur: () => setTouchedFirstInput(true),
    value: value.dateValue
  }), showValidation && showDateError(value.dateValue)), core.jsx(core.Stack, null, core.jsx(TimePicker, {
    onBlur: () => setTouchedSecondInput(true),
    disabled: onChange === undefined,
    format: "24hr",
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      timeValue: event.target.value
    })),
    value: value.timeValue || ''
  }), showValidation && showTimeError(value.timeValue)))) : isValidISO(value) ? formatOutput(constructTimestamp(value)) : '');
};
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path];
  return linkTo ? core.jsx(components.CellLink, linkTo, formatOutput(value)) : core.jsx(components.CellContainer, null, formatOutput(value));
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      dateValue: '',
      timeValue: ''
    },
    deserialize: data => {
      const value = data[config.path];

      if (value) {
        return deconstructTimestamp(value);
      }

      return {
        dateValue: '',
        timeValue: ''
      };
    },
    serialize: ({
      dateValue,
      timeValue
    }) => {
      if (dateValue && timeValue && isValidISO({
        dateValue,
        timeValue
      })) {
        let formattedDate = constructTimestamp({
          dateValue,
          timeValue
        });
        return {
          [config.path]: formattedDate
        };
      }

      return {
        [config.path]: null
      };
    },

    validate({
      dateValue,
      timeValue
    }) {
      if (!dateValue && !timeValue) return true;
      if (!dateValue) return false;
      if (!timeValue) return false;
      return isValidISO({
        dateValue,
        timeValue
      });
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var React = __webpack_require__(/*! react */ "react");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// but I'd like to present it as best as possible.
// ToDo: Better presentation for more types of data

const stringify = data => {
  const omitTypename = (key, value) => key === '__typename' ? undefined : value;

  const dataWithoutTypename = JSON.parse(JSON.stringify(data), omitTypename);
  return JSON.stringify(dataWithoutTypename, null, 2);
};

function PrettyData({
  data
}) {
  if (!data) return null;
  let prettyData = '';
  if (typeof data === 'string') prettyData = data;else if (typeof data === 'number') prettyData = data;else if (typeof data === 'object') {
    prettyData = /*#__PURE__*/React__default['default'].createElement("pre", null, stringify(data));
  } else {
    prettyData = /*#__PURE__*/React__default['default'].createElement("pre", null, stringify(data));
  }
  return /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, prettyData);
}

/* @jsx jsx */
const Field = ({
  field,
  value
}) => value === createViewValue ? null : core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), core.jsx(PrettyData, {
  data: value
}));
const Cell = ({
  item,
  field
}) => {
  return core.jsx(PrettyData, {
    data: item[field.path]
  });
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), core.jsx(PrettyData, {
    data: item[field.path]
  }));
};
const createViewValue = Symbol('create view virtual field value');
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path}${config.fieldMeta.graphQLReturnFragment}`,
    defaultValue: createViewValue,
    deserialize: data => {
      return data[config.path];
    },
    serialize: () => ({})
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/SunilL/Downloads/sick-fits/backend/node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-next/admin-ui/context */ "@keystone-next/admin-ui/context");
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/mongoId/views */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/text/views */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/password/views */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/relationship/views */ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/timestamp/views */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/select/views */ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/integer/views */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/cloudinary/views */ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js");
/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/virtual/views */ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/checkbox/views */ "../../node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_13__);














const adminConfig = {};
const fieldViews = {
  viewd2f1fbb3: _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__,
  view9bec3412: _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__,
  viewec302f1e: _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__,
  viewa0e0055a: _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__,
  view75cf353f: _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__,
  viewd75a593f: _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__,
  view2d1434ec: _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__,
  viewca14820c: _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__,
  viewcb011bb7: _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__,
  viewdc1098a6: _node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_13__
};
const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'query',
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'keystone',
          loc: {
            start: 22,
            end: 30
          }
        },
        arguments: [],
        directives: [],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'adminMeta',
              loc: {
                start: 39,
                end: 48
              }
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'lists',
                  loc: {
                    start: 59,
                    end: 64
                  }
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [{
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'key',
                      loc: {
                        start: 77,
                        end: 80
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 77,
                      end: 80
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'isHidden',
                      loc: {
                        start: 91,
                        end: 99
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 91,
                      end: 99
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'fields',
                      loc: {
                        start: 110,
                        end: 116
                      }
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [{
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'path',
                          loc: {
                            start: 131,
                            end: 135
                          }
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 131,
                          end: 135
                        }
                      }, {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'createView',
                          loc: {
                            start: 148,
                            end: 158
                          }
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'fieldMode',
                              loc: {
                                start: 175,
                                end: 184
                              }
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 175,
                              end: 184
                            }
                          }],
                          loc: {
                            start: 159,
                            end: 198
                          }
                        },
                        loc: {
                          start: 148,
                          end: 198
                        }
                      }],
                      loc: {
                        start: 117,
                        end: 210
                      }
                    },
                    loc: {
                      start: 110,
                      end: 210
                    }
                  }],
                  loc: {
                    start: 65,
                    end: 220
                  }
                },
                loc: {
                  start: 59,
                  end: 220
                }
              }],
              loc: {
                start: 49,
                end: 228
              }
            },
            loc: {
              start: 39,
              end: 228
            }
          }],
          loc: {
            start: 31,
            end: 234
          }
        },
        loc: {
          start: 22,
          end: 234
        }
      }, {
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'authenticatedItem'
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'InlineFragment',
            typeCondition: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User'
              }
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id'
                }
              }, {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name'
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__["Core"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__["KeystoneProvider"], {
    adminConfig: adminConfig,
    adminMetaHash: "1xnq7yr",
    fieldViews: fieldViews,
    lazyMetadataQuery: lazyMetadataQuery
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__["ErrorBoundary"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps))));
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@keystone-next/admin-ui-utils":
/*!************************************************!*\
  !*** external "@keystone-next/admin-ui-utils" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui-utils");

/***/ }),

/***/ "@keystone-next/admin-ui/apollo":
/*!*************************************************!*\
  !*** external "@keystone-next/admin-ui/apollo" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/apollo");

/***/ }),

/***/ "@keystone-next/admin-ui/components":
/*!*****************************************************!*\
  !*** external "@keystone-next/admin-ui/components" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/components");

/***/ }),

/***/ "@keystone-next/admin-ui/context":
/*!**************************************************!*\
  !*** external "@keystone-next/admin-ui/context" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/context");

/***/ }),

/***/ "@keystone-next/admin-ui/router":
/*!*************************************************!*\
  !*** external "@keystone-next/admin-ui/router" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/router");

/***/ }),

/***/ "@keystone-ui/button":
/*!**************************************!*\
  !*** external "@keystone-ui/button" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/button");

/***/ }),

/***/ "@keystone-ui/core":
/*!************************************!*\
  !*** external "@keystone-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/core");

/***/ }),

/***/ "@keystone-ui/fields":
/*!**************************************!*\
  !*** external "@keystone-ui/fields" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/fields");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeIcon":
/*!***************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeIcon" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeOffIcon":
/*!******************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeOffIcon" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeOffIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/XIcon":
/*!*************************************************!*\
  !*** external "@keystone-ui/icons/icons/XIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/XIcon");

/***/ }),

/***/ "@keystone-ui/loading":
/*!***************************************!*\
  !*** external "@keystone-ui/loading" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/loading");

/***/ }),

/***/ "@keystone-ui/modals":
/*!**************************************!*\
  !*** external "@keystone-ui/modals" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/modals");

/***/ }),

/***/ "@keystone-ui/pill":
/*!************************************!*\
  !*** external "@keystone-ui/pill" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/pill");

/***/ }),

/***/ "@keystone-ui/segmented-control":
/*!*************************************************!*\
  !*** external "@keystone-ui/segmented-control" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/segmented-control");

/***/ }),

/***/ "@keystone-ui/toast":
/*!*************************************!*\
  !*** external "@keystone-ui/toast" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/toast");

/***/ }),

/***/ "@keystone-ui/tooltip":
/*!***************************************!*\
  !*** external "@keystone-ui/tooltip" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/tooltip");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "fast-deep-equal":
/*!**********************************!*\
  !*** external "fast-deep-equal" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),

/***/ "intersection-observer":
/*!****************************************!*\
  !*** external "intersection-observer" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2Nsb3VkaW5hcnkvdmlld3MvZGlzdC9jbG91ZGluYXJ5LmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2Nsb3VkaW5hcnkvdmlld3MvZGlzdC9jbG91ZGluYXJ5LmNqcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL2NoZWNrYm94L3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9jaGVja2JveC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9pbnRlZ2VyL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9pbnRlZ2VyL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL21vbmdvSWQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL21vbmdvSWQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvcGFzc3dvcmQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3Bhc3N3b3JkL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cy9SZWxhdGlvbnNoaXBTZWxlY3QvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvcmVsYXRpb25zaGlwL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3NlbGVjdC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvc2VsZWN0L3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RleHQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvU3VuaWxML0Rvd25sb2Fkcy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RleHQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGltZXN0YW1wL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL1N1bmlsTC9Eb3dubG9hZHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90aW1lc3RhbXAvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdmlydHVhbC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9TdW5pbEwvRG93bmxvYWRzL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdmlydHVhbC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS11dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2Fwb2xsb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb250ZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2ZpZWxkc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVJY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZU9mZkljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvWEljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvbG9hZGluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9tb2RhbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvcGlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9zZWdtZW50ZWQtY29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS90b2FzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS90b29sdGlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0LWRlZXAtZXF1YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImFkbWluQ29uZmlnIiwiZmllbGRWaWV3cyIsInZpZXdkMmYxZmJiMyIsInZpZXc5YmVjMzQxMiIsInZpZXdlYzMwMmYxZSIsInZpZXdhMGUwMDU1YSIsInZpZXc3NWNmMzUzZiIsInZpZXdkNzVhNTkzZiIsInZpZXcyZDE0MzRlYyIsInZpZXdjYTE0ODIwYyIsInZpZXdjYjAxMWJiNyIsInZpZXdkYzEwOThhNiIsImxhenlNZXRhZGF0YVF1ZXJ5Iiwia2luZCIsImRlZmluaXRpb25zIiwib3BlcmF0aW9uIiwic2VsZWN0aW9uU2V0Iiwic2VsZWN0aW9ucyIsIm5hbWUiLCJ2YWx1ZSIsImxvYyIsInN0YXJ0IiwiZW5kIiwiYXJndW1lbnRzIiwiZGlyZWN0aXZlcyIsInR5cGVDb25kaXRpb24iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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LDhDOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDI7IiwidmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgPSByZXF1aXJlKFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcblxuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cblxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlXCIpO1xuXG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIHBpbGwgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvcGlsbCcpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9idXR0b24nKTtcblxuZnVuY3Rpb24gdXNlT2JqZWN0VVJMKGZpbGVEYXRhKSB7XG4gIGxldCBbb2JqZWN0VVJMLCBzZXRPYmplY3RVUkxdID0gcmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgcmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZmlsZURhdGEpIHtcbiAgICAgIGxldCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVEYXRhKTtcbiAgICAgIHNldE9iamVjdFVSTCh1cmwpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtmaWxlRGF0YV0pO1xuICByZXR1cm4gb2JqZWN0VVJMO1xufVxuXG5mdW5jdGlvbiBGaWVsZCh7XG4gIGF1dG9Gb2N1cyxcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZVxufSkge1xuICBjb25zdCBpbnB1dFJlZiA9IHJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gdmFsdWUua2luZCA9PT0gJ3VwbG9hZCcgPyB2YWxpZGF0ZUltYWdlKHZhbHVlLmRhdGEpIDogdW5kZWZpbmVkO1xuICBjb25zdCBpbWFnZVBhdGhGcm9tVXBsb2FkID0gdXNlT2JqZWN0VVJMKGVycm9yTWVzc2FnZSA9PT0gdW5kZWZpbmVkICYmIHZhbHVlLmtpbmQgPT09ICd1cGxvYWQnID8gdmFsdWUuZGF0YS5maWxlIDogdW5kZWZpbmVkKTtcbiAgY29uc3QgaW1hZ2VQYXRoID0gdmFsdWUua2luZCA9PT0gJ2Zyb20tc2VydmVyJyA/IHZhbHVlLmRhdGEucHVibGljVXJsVHJhbnNmb3JtZWQgOiBpbWFnZVBhdGhGcm9tVXBsb2FkOyAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBpbnB1dCBrZXkgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcywgdG8gZW5zdXJlIHRoZSBmaWxlIGlucHV0IGlzIHVubW91bnRlZCBhbmRcbiAgLy8gcmVtb3VudGVkICh0aGlzIGlzIHRoZSBvbmx5IHdheSB0byByZXNldCBpdHMgdmFsdWUgYW5kIGVuc3VyZSBvbkNoYW5nZSB3aWxsIGZpcmUgYWdhaW4gaWZcbiAgLy8gdGhlIHVzZXIgc2VsZWN0cyB0aGUgc2FtZSBmaWxlIGFnYWluKVxuXG4gIGNvbnN0IGlucHV0S2V5ID0gcmVhY3QudXNlTWVtbygoKSA9PiBNYXRoLnJhbmRvbSgpLCBbdmFsdWVdKTtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgdmFsdWUua2luZCA9PT0gJ2Zyb20tc2VydmVyJyB8fCB2YWx1ZS5raW5kID09PSAndXBsb2FkJyA/IGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwic21hbGxcIlxuICB9LCBpbWFnZVBhdGggJiYgZXJyb3JNZXNzYWdlID09PSB1bmRlZmluZWQgJiYgY29yZS5qc3goSW1hZ2UsIHtcbiAgICBzcmM6IGltYWdlUGF0aCxcbiAgICBhbHQ6IGZpZWxkLnBhdGhcbiAgfSksIG9uQ2hhbmdlICYmIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBhY3Jvc3M6IHRydWUsXG4gICAgZ2FwOiBcInNtYWxsXCIsXG4gICAgYWxpZ246IFwiY2VudGVyXCJcbiAgfSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICB2YXIgX2lucHV0UmVmJGN1cnJlbnQ7XG5cbiAgICAgIChfaW5wdXRSZWYkY3VycmVudCA9IGlucHV0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9pbnB1dFJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5wdXRSZWYkY3VycmVudC5jbGljaygpO1xuICAgIH1cbiAgfSwgXCJDaGFuZ2UgaW1hZ2VcIiksIHZhbHVlLmtpbmQgPT09ICdmcm9tLXNlcnZlcicgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB0b25lOiBcIm5lZ2F0aXZlXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICBraW5kOiAncmVtb3ZlJyxcbiAgICAgICAgcHJldmlvdXM6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFwiUmVtb3ZlXCIpLCB2YWx1ZS5raW5kID09PSAndXBsb2FkJyAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHRvbmU6IFwibmVnYXRpdmVcIixcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZS5wcmV2aW91cyk7XG4gICAgfVxuICB9LCBcIkNhbmNlbFwiKSwgZXJyb3JNZXNzYWdlID8gY29yZS5qc3gocGlsbC5QaWxsLCB7XG4gICAgdG9uZTogXCJuZWdhdGl2ZVwiLFxuICAgIHdlaWdodDogXCJsaWdodFwiXG4gIH0sIGVycm9yTWVzc2FnZSkgOiB2YWx1ZS5raW5kID09PSAndXBsb2FkJyAmJiBjb3JlLmpzeChwaWxsLlBpbGwsIHtcbiAgICB3ZWlnaHQ6IFwibGlnaHRcIixcbiAgICB0b25lOiBcInBvc2l0aXZlXCJcbiAgfSwgXCJTYXZlIHRvIHVwbG9hZCB0aGlzIGltYWdlXCIpKSkgOiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgY3NzOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgZ2FwOiBcInNtYWxsXCIsXG4gICAgYWNyb3NzOiB0cnVlXG4gIH0sIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgdmFyIF9pbnB1dFJlZiRjdXJyZW50MjtcblxuICAgICAgKF9pbnB1dFJlZiRjdXJyZW50MiA9IGlucHV0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9pbnB1dFJlZiRjdXJyZW50MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2lucHV0UmVmJGN1cnJlbnQyLmNsaWNrKCk7XG4gICAgfVxuICB9LCBcIlVwbG9hZCBJbWFnZVwiKSwgdmFsdWUua2luZCA9PT0gJ3JlbW92ZScgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB0b25lOiBcIm5lZ2F0aXZlXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKHZhbHVlLnByZXZpb3VzKTtcbiAgICB9XG4gIH0sIFwiVW5kbyByZW1vdmFsXCIpLCB2YWx1ZS5raW5kID09PSAncmVtb3ZlJyAmJiAvLyBOT1RFIC0tIFVYIGRlY2lzaW9uIGlzIHRvIG5vdCBkaXNwbGF5IHRoaXMsIEkgdGhpbmsgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAvLyBmb3IgZGVsZXRpbmcgdXBsb2FkZWQgaW1hZ2VzIChhbmQgd2UgZG9uJ3Qgc3VwcG9ydCB0aGF0IHlldClcbiAgLy8gPFBpbGwgd2VpZ2h0PVwibGlnaHRcIiB0b25lPVwid2FybmluZ1wiPlxuICAvLyAgIFNhdmUgdG8gcmVtb3ZlIHRoaXMgaW1hZ2VcbiAgLy8gPC9QaWxsPlxuICBudWxsKSwgY29yZS5qc3goXCJpbnB1dFwiLCB7XG4gICAgY3NzOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9LFxuICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICByZWY6IGlucHV0UmVmLFxuICAgIGtleTogaW5wdXRLZXksXG4gICAgbmFtZTogZmllbGQucGF0aCxcbiAgICBvbkNoYW5nZTogKHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWxpZGl0eSxcbiAgICAgICAgZmlsZXNcbiAgICAgIH1cbiAgICB9KSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZXMgPT09IG51bGwgfHwgZmlsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZpbGVzWzBdO1xuICAgICAgaWYgKCFmaWxlKSByZXR1cm47IC8vIGJhaWwgaWYgdGhlIHVzZXIgY2FuY2VscyBmcm9tIHRoZSBmaWxlIGJyb3dzZXJcblxuICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKHtcbiAgICAgICAga2luZDogJ3VwbG9hZCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBmaWxlLFxuICAgICAgICAgIHZhbGlkaXR5XG4gICAgICAgIH0sXG4gICAgICAgIHByZXZpb3VzOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB0eXBlOiBcImZpbGVcIixcbiAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZFxuICB9KSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUltYWdlKHtcbiAgZmlsZSxcbiAgdmFsaWRpdHlcbn0pIHtcbiAgaWYgKCF2YWxpZGl0eS52YWxpZCkge1xuICAgIHJldHVybiAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSByZWxvYWQgYW5kIHRyeSBhZ2Fpbi4nO1xuICB9IC8vIGNoZWNrIGlmIHRoZSBmaWxlIGlzIGFjdHVhbGx5IGFuIGltYWdlXG5cblxuICBpZiAoIWZpbGUudHlwZS5pbmNsdWRlcygnaW1hZ2UnKSkge1xuICAgIHJldHVybiAnT25seSBpbWFnZSBmaWxlcyBhcmUgYWxsb3dlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nO1xuICB9XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGVkIENvbXBvbmVudHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBJbWFnZSA9IHByb3BzID0+IHtcbiAgY29uc3QgdGhlbWUgPSBjb3JlLnVzZVRoZW1lKCk7XG4gIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgY3NzOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLm1lZGl1bSxcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBsaW5lSGVpZ2h0OiAwLFxuICAgICAgcGFkZGluZzogNCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAxMzAgLy8gMTIwcHggaW1hZ2UgKyBjaHJvbWVcblxuICAgIH1cbiAgfSwgY29yZS5qc3goXCJpbWdcIiwgX2V4dGVuZHMoe1xuICAgIGNzczoge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgfVxuICB9LCBwcm9wcykpKTtcbn07XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBDZWxsID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgY29uc3QgZGF0YSA9IGl0ZW1bZmllbGQucGF0aF07XG4gIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgY3NzOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGhlaWdodDogMjQsXG4gICAgICBsaW5lSGVpZ2h0OiAwLFxuICAgICAgd2lkdGg6IDI0XG4gICAgfVxuICB9LCBjb3JlLmpzeChcImltZ1wiLCB7XG4gICAgYWx0OiBkYXRhLmZpbGVuYW1lLFxuICAgIGNzczoge1xuICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBzcmM6IGRhdGEucHVibGljVXJsVHJhbnNmb3JtZWRcbiAgfSkpO1xufTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBpdGVtW2ZpZWxkLnBhdGhdO1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBkYXRhICYmIGNvcmUuanN4KFwiaW1nXCIsIHtcbiAgICBhbHQ6IGRhdGEuZmlsZW5hbWUsXG4gICAgc3JjOiBkYXRhLnB1YmxpY1VybFRyYW5zZm9ybWVkXG4gIH0pKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGAke2NvbmZpZy5wYXRofSB7XG4gICAgICAgIGlkXG4gICAgICAgIGZpbGVuYW1lXG4gICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkKHRyYW5zZm9ybWF0aW9uOiB7IHdpZHRoOiBcIjEyMFwiIGNyb3A6IFwibGltaXRcIiB9KVxuICAgICAgfWAsXG4gICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICBraW5kOiAnZW1wdHknXG4gICAgfSxcblxuICAgIGRlc2VyaWFsaXplKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gaXRlbVtjb25maWcucGF0aF07XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4ge1xuICAgICAgICBraW5kOiAnZW1wdHknXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogJ2Zyb20tc2VydmVyJyxcbiAgICAgICAgZGF0YTogdmFsdWVcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUua2luZCAhPT0gJ3VwbG9hZCcgfHwgdmFsaWRhdGVJbWFnZSh2YWx1ZS5kYXRhKSA9PT0gdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5raW5kID09PSAndXBsb2FkJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtjb25maWcucGF0aF06IHZhbHVlLmRhdGEuZmlsZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbY29uZmlnLnBhdGhdOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jbG91ZGluYXJ5LmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jbG91ZGluYXJ5LmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcblxuLyogQGpzeCBqc3ggKi9cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgYXV0b0ZvY3VzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZHM6IGZpZWxkcyQxLFxuICAgIHR5cG9ncmFwaHlcbiAgfSA9IGNvcmUudXNlVGhlbWUoKTtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkNoZWNrYm94LCB7XG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gICAgfSxcbiAgICBjaGVja2VkOiB2YWx1ZVxuICB9LCBjb3JlLmpzeChcInNwYW5cIiwge1xuICAgIGNzczoge1xuICAgICAgZm9udFdlaWdodDogdHlwb2dyYXBoeS5mb250V2VpZ2h0LnNlbWlib2xkLFxuICAgICAgY29sb3I6IGZpZWxkcyQxLmxhYmVsQ29sb3JcbiAgICB9XG4gIH0sIGZpZWxkLmxhYmVsKSkpO1xufTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9ICEhaXRlbVtmaWVsZC5wYXRoXTtcbiAgcmV0dXJuIGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkNoZWNrYm94LCB7XG4gICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgY2hlY2tlZDogdmFsdWUsXG4gICAgc2l6ZTogXCJzbWFsbFwiXG4gIH0sIGNvcmUuanN4KFwic3BhblwiLCB7XG4gICAgY3NzOiB7fVxuICB9LCB2YWx1ZSA/ICdUcnVlJyA6ICdGYWxzZScpKSk7XG59O1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgaXRlbVtmaWVsZC5wYXRoXSArICcnKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG5cbiAgICBkZXNlcmlhbGl6ZShpdGVtKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1bY29uZmlnLnBhdGhdO1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nID8gdmFsdWUgOiBmYWxzZTtcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZmlsdGVyOiB7XG4gICAgICBGaWx0ZXIoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcblxuICAgICAgZ3JhcGhxbCh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHR5cGUgPT09ICdpcycgPyBgJHtjb25maWcucGF0aH1gIDogYCR7Y29uZmlnLnBhdGh9XyR7dHlwZX1gO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICBsYWJlbFxuICAgICAgfSkge1xuICAgICAgICByZXR1cm4gbGFiZWwudG9Mb3dlckNhc2UoKTtcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGlzOiB7XG4gICAgICAgICAgbGFiZWw6ICdpcycsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG5vdDoge1xuICAgICAgICAgIGxhYmVsOiAnaXMgbm90JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGF1dG9Gb2N1c1xufSkgPT4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBvbkNoYW5nZSA/IGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gIHR5cGU6IFwibnVtYmVyXCIsXG4gIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuICB9LFxuICB2YWx1ZTogdmFsdWVcbn0pIDogdmFsdWUpO1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goY29tcG9uZW50cy5DZWxsTGluaywgbGlua1RvLCB2YWx1ZSkgOiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIHZhbHVlKTtcbn07XG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bZmllbGQucGF0aF0pO1xufTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXG4gICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbY29uZmlnLnBhdGhdO1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSArICcnIDogJyc7XG4gICAgfSxcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+ICh7XG4gICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZSA9PT0gJycgPyBudWxsIDogcGFyc2VJbnQodmFsdWUsIDEwKVxuICAgIH0pLFxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1teXFxkLFxcc10vZywgJycpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgICBhdXRvRm9jdXM6IHByb3BzLmF1dG9Gb2N1c1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWw6ICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHR5cGUgPT09ICdpcycgPyBjb25maWcucGF0aCA6IGAke2NvbmZpZy5wYXRofV8ke3R5cGV9YDtcbiAgICAgICAgY29uc3QgdmFsdWVXaXRob3V0V2hpdGVzcGFjZSA9IHZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2tleV06IFsnaW4nLCAnbm90X2luJ10uaW5jbHVkZXModHlwZSkgPyB2YWx1ZVdpdGhvdXRXaGl0ZXNwYWNlLnNwbGl0KCcsJykubWFwKGkgPT4gcGFyc2VJbnQoaSkpIDogcGFyc2VJbnQodmFsdWVXaXRob3V0V2hpdGVzcGFjZSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIExhYmVsKHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB0eXBlXG4gICAgICB9KSB7XG4gICAgICAgIGxldCByZW5kZXJlZFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKFsnaW4nLCAnbm90X2luJ10uaW5jbHVkZXModHlwZSkpIHtcbiAgICAgICAgICByZW5kZXJlZFZhbHVlID0gdmFsdWUuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gdmFsdWUudHJpbSgpKS5qb2luKCcsICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2xhYmVsLnRvTG93ZXJDYXNlKCl9OiAke3JlbmRlcmVkVmFsdWV9YDtcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGlzOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBleGFjdGx5JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdDoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgbm90IGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgZ3Q6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGdyZWF0ZXIgdGhhbicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBsdDoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgbGVzcyB0aGFuJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGd0ZToge1xuICAgICAgICAgIGxhYmVsOiAnSXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGx0ZToge1xuICAgICAgICAgIGxhYmVsOiAnSXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGluOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBvbmUgb2YnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2luOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBub3Qgb25lIG9mJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzID0gcmVxdWlyZSgnLi4vLi4vLi4vdGV4dC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGRlZmF1bHRWYWx1ZTogJycsXG5cbiAgICBkZXNlcmlhbGl6ZShpdGVtKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1bY29uZmlnLnBhdGhdO1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6ICcnO1xuICAgIH0sXG5cbiAgICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtjb25maWcucGF0aF06IHZhbHVlXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBmaWx0ZXI6IHtcbiAgICAgIEZpbHRlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWwoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpcyc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ25vdCc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW2Ake2NvbmZpZy5wYXRofV9ub3RgXTogdmFsdWVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ2luJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbYCR7Y29uZmlnLnBhdGh9X2luYF06IHZhbHVlLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IHZhbHVlLnRyaW0oKSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ25vdF9pbic6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW2Ake2NvbmZpZy5wYXRofV9ub3RfaW5gXTogdmFsdWUuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gdmFsdWUudHJpbSgpKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pIHtcbiAgICAgICAgbGV0IHJlbmRlcmVkVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoWydpbicsICdub3RfaW4nXS5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICAgIHJlbmRlcmVkVmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiB2YWx1ZS50cmltKCkpLmpvaW4oJywgJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7bGFiZWwudG9Mb3dlckNhc2UoKX06ICR7cmVuZGVyZWRWYWx1ZX1gO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgaXM6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBub3QnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG9uZSBvZicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3RfaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBvbmUgb2YnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gdHlwZXNfdGV4dF92aWV3c19kaXN0X2ZpZWxkcy5DYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzLkNlbGw7XG5leHBvcnRzLkZpZWxkID0gdHlwZXNfdGV4dF92aWV3c19kaXN0X2ZpZWxkcy5GaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX29iamVjdFNwcmVhZCA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMicpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9idXR0b24nKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG52YXIgRXllSWNvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVJY29uJyk7XG52YXIgRXllT2ZmSWNvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVPZmZJY29uJyk7XG52YXIgWEljb24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvWEljb24nKTtcbnZhciBzZWdtZW50ZWRDb250cm9sID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sJyk7XG5cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgZm9yY2VWYWxpZGF0aW9uLFxuICBhdXRvRm9jdXNcbn0pID0+IHtcbiAgY29uc3QgW3Nob3dJbnB1dFZhbHVlLCBzZXRTaG93SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3VjaGVkRmlyc3RJbnB1dCwgc2V0VG91Y2hlZEZpcnN0SW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG91Y2hlZFNlY29uZElucHV0LCBzZXRUb3VjaGVkU2Vjb25kSW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaG91bGRTaG93VmFsaWRhdGlvbiA9IGZvcmNlVmFsaWRhdGlvbiB8fCB0b3VjaGVkRmlyc3RJbnB1dCAmJiB0b3VjaGVkU2Vjb25kSW5wdXQ7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBzaG91bGRTaG93VmFsaWRhdGlvbiAmJiB2YWx1ZS5raW5kID09PSAnZWRpdGluZycgPyB2YWx1ZS52YWx1ZSA9PT0gdmFsdWUuY29uZmlybSA/IHZhbHVlLnZhbHVlLmxlbmd0aCA+PSBmaWVsZC5taW5MZW5ndGggPyB1bmRlZmluZWQgOiBgVGhlIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgJHtmaWVsZC5taW5MZW5ndGh9IGNoYXJhY3RlcnMgbG9uZ2AgOiAnVGhlIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gnIDogdW5kZWZpbmVkO1xuICBjb25zdCBpbnB1dFR5cGUgPSBzaG93SW5wdXRWYWx1ZSA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIG9uQ2hhbmdlID09PSB1bmRlZmluZWQgPyB2YWx1ZS5pc1NldCA/ICdQYXNzd29yZCBpcyBzZXQnIDogJ1Bhc3N3b3JkIGlzIG5vdCBzZXQnIDogdmFsdWUua2luZCA9PT0gJ2luaXRpYWwnID8gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAga2luZDogJ2VkaXRpbmcnLFxuICAgICAgICBjb25maXJtOiAnJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBpc1NldDogdmFsdWUuaXNTZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgdmFsdWUuaXNTZXQgPyAnQ2hhbmdlIFBhc3N3b3JkJyA6ICdTZXQgUGFzc3dvcmQnKSA6IGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwic21hbGxcIlxuICB9LCBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgY3NzOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9XG4gIH0sIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgaW52YWxpZDogdmFsaWRhdGlvbiAhPT0gdW5kZWZpbmVkLFxuICAgIHR5cGU6IGlucHV0VHlwZSxcbiAgICB2YWx1ZTogdmFsdWUudmFsdWUsXG4gICAgcGxhY2Vob2xkZXI6IFwiTmV3IFBhc3N3b3JkXCIsXG4gICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBvbkJsdXI6ICgpID0+IHtcbiAgICAgIHNldFRvdWNoZWRGaXJzdElucHV0KHRydWUpO1xuICAgIH1cbiAgfSksIGNvcmUuanN4KFNwYWNlciwgbnVsbCksIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICBpbnZhbGlkOiB2YWxpZGF0aW9uICE9PSB1bmRlZmluZWQsXG4gICAgdHlwZTogaW5wdXRUeXBlLFxuICAgIHZhbHVlOiB2YWx1ZS5jb25maXJtLFxuICAgIHBsYWNlaG9sZGVyOiBcIkNvbmZpcm0gUGFzc3dvcmRcIixcbiAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGNvbmZpcm06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSkpO1xuICAgIH0sXG4gICAgb25CbHVyOiAoKSA9PiB7XG4gICAgICBzZXRUb3VjaGVkU2Vjb25kSW5wdXQodHJ1ZSk7XG4gICAgfVxuICB9KSwgY29yZS5qc3goU3BhY2VyLCBudWxsKSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIHNldFNob3dJbnB1dFZhbHVlKCFzaG93SW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9LCBjb3JlLmpzeChjb3JlLlZpc3VhbGx5SGlkZGVuLCBudWxsLCBzaG93SW5wdXRWYWx1ZSA/ICdIaWRlIFRleHQnIDogJ1Nob3cgVGV4dCcpLCBzaG93SW5wdXRWYWx1ZSA/IGNvcmUuanN4KEV5ZU9mZkljb24uRXllT2ZmSWNvbiwgbnVsbCkgOiBjb3JlLmpzeChFeWVJY29uLkV5ZUljb24sIG51bGwpKSwgY29yZS5qc3goU3BhY2VyLCBudWxsKSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAga2luZDogJ2luaXRpYWwnLFxuICAgICAgICBpc1NldDogdmFsdWUuaXNTZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgY29yZS5qc3goY29yZS5WaXN1YWxseUhpZGRlbiwgbnVsbCwgXCJDYW5jZWxcIiksIGNvcmUuanN4KFhJY29uLlhJY29uLCBudWxsKSkpLCB2YWxpZGF0aW9uICYmIGNvcmUuanN4KGNvcmUuVGV4dCwge1xuICAgIGNvbG9yOiBcInJlZDYwMFwiLFxuICAgIHNpemU6IFwic21hbGxcIlxuICB9LCB2YWxpZGF0aW9uKSkpO1xufTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goY29tcG9uZW50cy5DZWxsQ29udGFpbmVyLCBudWxsLCBpdGVtW2Ake2ZpZWxkLnBhdGh9X2lzX3NldGBdID8gJ0lzIHNldCcgOiAnSXMgbm90IHNldCcpO1xufTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bYCR7ZmllbGQucGF0aH1faXNfc2V0YF0gPyAnSXMgc2V0JyA6ICdJcyBub3Qgc2V0Jyk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBgJHtjb25maWcucGF0aH1faXNfc2V0YCxcbiAgICBtaW5MZW5ndGg6IGNvbmZpZy5maWVsZE1ldGEubWluTGVuZ3RoLFxuICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAga2luZDogJ2luaXRpYWwnLFxuICAgICAgaXNTZXQ6IG51bGxcbiAgICB9LFxuXG4gICAgdmFsaWRhdGUoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5raW5kID09PSAnaW5pdGlhbCcgfHwgc3RhdGUudmFsdWUgPT09IHN0YXRlLmNvbmZpcm0gJiYgc3RhdGUudmFsdWUubGVuZ3RoID49IGNvbmZpZy5maWVsZE1ldGEubWluTGVuZ3RoO1xuICAgIH0sXG5cbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiAoe1xuICAgICAga2luZDogJ2luaXRpYWwnLFxuICAgICAgaXNTZXQ6IGRhdGFbYCR7Y29uZmlnLnBhdGh9X2lzX3NldGBdXG4gICAgfSksXG4gICAgc2VyaWFsaXplOiB2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ2luaXRpYWwnKSByZXR1cm4ge307XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZS52YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmpzeChzZWdtZW50ZWRDb250cm9sLlNlZ21lbnRlZENvbnRyb2wsIHtcbiAgICAgICAgICBzZWxlY3RlZEluZGV4OiBOdW1iZXIocHJvcHMudmFsdWUpLFxuICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZSghIXZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlZ21lbnRzOiBbJ0lzIE5vdCBTZXQnLCAnSXMgU2V0J11cbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBncmFwaHFsOiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgJHtjb25maWcucGF0aH1fJHt0eXBlfWBdOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyAnaXMgc2V0JyA6ICdpcyBub3Qgc2V0JztcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGlzX3NldDoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgU2V0JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IFNwYWNlciA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHNwYWNpbmdcbiAgfSA9IGNvcmUudXNlVGhlbWUoKTtcbiAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IHtcbiAgICAgIHdpZHRoOiBzcGFjaW5nLnNtYWxsLFxuICAgICAgZmxleFNocmluazogMFxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIF90b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1Byb3BlcnR5S2V5Jyk7XG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xucmVxdWlyZSgnaW50ZXJzZWN0aW9uLW9ic2VydmVyJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGFwb2xsbyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2Fwb2xsbycpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcblxuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2IsIHJlZikge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYiwge30pO1xuICAgIGxldCBub2RlID0gcmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlKTtcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUobm9kZSk7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgaW5pdGlhbEl0ZW1zVG9Mb2FkID0gMTA7XG5jb25zdCBzdWJzZXF1ZW50SXRlbXNUb0xvYWQgPSA1MDtcbmNvbnN0IGlkRmllbGQgPSAnX19fX2lkX19fXyc7XG5jb25zdCBsYWJlbEZpZWxkID0gJ19fX19sYWJlbF9fX18nO1xuY29uc3QgUmVsYXRpb25zaGlwU2VsZWN0ID0gKHtcbiAgYXV0b0ZvY3VzLFxuICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXG4gIGlzRGlzYWJsZWQsXG4gIGlzTG9hZGluZyxcbiAgbGlzdCxcbiAgcGxhY2Vob2xkZXIsXG4gIHN0YXRlLFxuICBleHRyYVNlbGVjdGlvbiA9ICcnXG59KSA9PiB7XG4gIHZhciBfZGF0YSRpdGVtcztcblxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICBjb25zdCBRVUVSWSA9IGFwb2xsby5ncWxgXG4gICAgcXVlcnkgUmVsYXRpb25zaGlwU2VsZWN0KCRzZWFyY2g6IFN0cmluZyEsICRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICAgIGl0ZW1zOiAke2xpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TmFtZX0oc2VhcmNoOiAkc2VhcmNoLCBmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgICAke2lkRmllbGR9OiBpZFxuICAgICAgICAke2xhYmVsRmllbGR9OiAke2xpc3QubGFiZWxGaWVsZH1cbiAgICAgICAgJHtleHRyYVNlbGVjdGlvbn1cbiAgICAgIH1cblxuICAgICAgbWV0YTogJHtsaXN0LmdxbE5hbWVzLmxpc3RRdWVyeU1ldGFOYW1lfShzZWFyY2g6ICRzZWFyY2gpIHtcbiAgICAgICAgY291bnRcbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHtcbiAgICBkYXRhLFxuICAgIGVycm9yLFxuICAgIGxvYWRpbmcsXG4gICAgZmV0Y2hNb3JlXG4gIH0gPSBhcG9sbG8udXNlUXVlcnkoUVVFUlksIHtcbiAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBzZWFyY2gsXG4gICAgICBmaXJzdDogaW5pdGlhbEl0ZW1zVG9Mb2FkLFxuICAgICAgc2tpcDogMFxuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGNvdW50ID0gKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5tZXRhLmNvdW50KSB8fCAwO1xuICBjb25zdCByZWxhdGlvbnNoaXBTZWxlY3RDb21wb25lbnRzID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIE1lbnVMaXN0OiAoX3JlZikgPT4ge1xuICAgICAgbGV0IHtcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgIH0gPSBfcmVmLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNoaWxkcmVuXCJdKTtcblxuICAgICAgY29uc3QgbG9hZGluZ1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICAgIGNvbnN0IFFVRVJZID0gYXBvbGxvLmdxbGBcbiAgICAgICAgICAgIHF1ZXJ5IFJlbGF0aW9uc2hpcFNlbGVjdE1vcmUoJHNlYXJjaDogU3RyaW5nISwgJGZpcnN0OiBJbnQhLCAkc2tpcDogSW50ISkge1xuICAgICAgICAgICAgICBpdGVtczogJHtsaXN0LmdxbE5hbWVzLmxpc3RRdWVyeU5hbWV9KHNlYXJjaDogJHNlYXJjaCwgZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcbiAgICAgICAgICAgICAgICAke2xhYmVsRmllbGR9OiAke2xpc3QubGFiZWxGaWVsZH1cbiAgICAgICAgICAgICAgICAke2lkRmllbGR9OiBpZFxuICAgICAgICAgICAgICAgICR7ZXh0cmFTZWxlY3Rpb259XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgO1xuICAgICAgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKFt7XG4gICAgICAgIGlzSW50ZXJzZWN0aW5nXG4gICAgICB9XSkgPT4ge1xuICAgICAgICBpZiAoIXByb3BzLnNlbGVjdFByb3BzLmlzTG9hZGluZyAmJiBpc0ludGVyc2VjdGluZyAmJiBwcm9wcy5vcHRpb25zLmxlbmd0aCA8IGNvdW50KSB7XG4gICAgICAgICAgZmV0Y2hNb3JlKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBRVUVSWSxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICBzZWFyY2gsXG4gICAgICAgICAgICAgIGZpcnN0OiBzdWJzZXF1ZW50SXRlbXNUb0xvYWQsXG4gICAgICAgICAgICAgIHNraXA6IHByb3BzLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2LCB7XG4gICAgICAgICAgICAgIGZldGNoTW9yZVJlc3VsdFxuICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWV0YTogcHJldi5tZXRhLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbLi4ucHJldi5pdGVtcywgLi4uZmV0Y2hNb3JlUmVzdWx0Lml0ZW1zXVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCBsb2FkaW5nUmVmKTtcbiAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuc2VsZWN0Q29tcG9uZW50cy5NZW51TGlzdCwgcHJvcHMsIGNoaWxkcmVuLCBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgICAgIGNzczoge1xuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgICAgfSxcbiAgICAgICAgcmVmOiBsb2FkaW5nUmVmXG4gICAgICB9LCBwcm9wcy5vcHRpb25zLmxlbmd0aCA8IGNvdW50ICYmIGNvcmUuanN4KFwic3BhblwiLCB7XG4gICAgICAgIGNzczoge1xuICAgICAgICAgIHBhZGRpbmc6IDhcbiAgICAgICAgfVxuICAgICAgfSwgXCJMb2FkaW5nLi4uXCIpKSk7XG4gICAgfVxuICB9KSwgW2NvdW50LCBsaXN0LmdxbE5hbWVzLmxpc3RRdWVyeU5hbWVdKTsgLy8gVE9ETzogYmV0dGVyIGVycm9yIFVJXG4gIC8vIFRPRE86IEhhbmRsZSBwZXJtaXNzaW9uIGVycm9yc1xuICAvLyAoaWU7IHVzZXIgaGFzIHBlcm1pc3Npb24gdG8gcmVhZCB0aGlzIHJlbGF0aW9uc2hpcCBmaWVsZCwgYnV0XG4gIC8vIG5vdCB0aGUgcmVsYXRlZCBsaXN0LCBvciBzb21lIGl0ZW1zIG9uIHRoZSBsaXN0KVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiBjb3JlLmpzeChcInNwYW5cIiwgbnVsbCwgXCJFcnJvclwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RhdGEkaXRlbXMgPSBkYXRhLml0ZW1zKSA9PT0gbnVsbCB8fCBfZGF0YSRpdGVtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RhdGEkaXRlbXMubWFwKChfcmVmMikgPT4ge1xuICAgIGxldCB7XG4gICAgICBbaWRGaWVsZF06IHZhbHVlLFxuICAgICAgW2xhYmVsRmllbGRdOiBsYWJlbFxuICAgIH0gPSBfcmVmMixcbiAgICAgICAgZGF0YSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgW2lkRmllbGQsIGxhYmVsRmllbGRdLm1hcChfdG9Qcm9wZXJ0eUtleSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlLFxuICAgICAgbGFiZWw6IGxhYmVsIHx8IHZhbHVlLFxuICAgICAgZGF0YVxuICAgIH07XG4gIH0pKSB8fCBbXTtcblxuICBpZiAoc3RhdGUua2luZCA9PT0gJ29uZScpIHtcbiAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLlNlbGVjdCAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHJlYWN0LXNlbGVjdCBwYXNzZXMgYSBzZWNvbmQgYXJndW1lbnQgdG8gb25JbnB1dENoYW5nZVxuICAgIC8vIGFuZCB1c2VTdGF0ZSBzZXR0ZXJzIGxvZyBhIHdhcm5pbmcgaWYgYSBzZWNvbmQgYXJndW1lbnQgaXMgcGFzc2VkXG4gICAgLCB7XG4gICAgICBvbklucHV0Q2hhbmdlOiB2YWwgPT4gc2V0U2VhcmNoKHZhbCksXG4gICAgICBpc0xvYWRpbmc6IGxvYWRpbmcgfHwgaXNMb2FkaW5nLFxuICAgICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgICBjb21wb25lbnRzOiByZWxhdGlvbnNoaXBTZWxlY3RDb21wb25lbnRzLFxuICAgICAgcG9ydGFsTWVudTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBzdGF0ZS52YWx1ZSA/IHtcbiAgICAgICAgdmFsdWU6IHN0YXRlLnZhbHVlLmlkLFxuICAgICAgICBsYWJlbDogc3RhdGUudmFsdWUubGFiZWwsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZGF0YTogc3RhdGUudmFsdWUuZGF0YVxuICAgICAgfSA6IG51bGwsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHtcbiAgICAgICAgc3RhdGUub25DaGFuZ2UodmFsdWUgPyB7XG4gICAgICAgICAgaWQ6IHZhbHVlLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiB2YWx1ZS5sYWJlbCxcbiAgICAgICAgICBkYXRhOiB2YWx1ZS5kYXRhXG4gICAgICAgIH0gOiBudWxsKTtcbiAgICAgIH0sXG4gICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWU6IGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICAgIGlzQ2xlYXJhYmxlOiBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXG4gICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLk11bHRpU2VsZWN0IC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgcmVhY3Qtc2VsZWN0IHBhc3NlcyBhIHNlY29uZCBhcmd1bWVudCB0byBvbklucHV0Q2hhbmdlXG4gIC8vIGFuZCB1c2VTdGF0ZSBzZXR0ZXJzIGxvZyBhIHdhcm5pbmcgaWYgYSBzZWNvbmQgYXJndW1lbnQgaXMgcGFzc2VkXG4gICwge1xuICAgIG9uSW5wdXRDaGFuZ2U6IHZhbCA9PiBzZXRTZWFyY2godmFsKSxcbiAgICBpc0xvYWRpbmc6IGxvYWRpbmcgfHwgaXNMb2FkaW5nLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIGNvbXBvbmVudHM6IHJlbGF0aW9uc2hpcFNlbGVjdENvbXBvbmVudHMsXG4gICAgcG9ydGFsTWVudTogdHJ1ZSxcbiAgICB2YWx1ZTogc3RhdGUudmFsdWUubWFwKHZhbHVlID0+ICh7XG4gICAgICB2YWx1ZTogdmFsdWUuaWQsXG4gICAgICBsYWJlbDogdmFsdWUubGFiZWwsXG4gICAgICBkYXRhOiB2YWx1ZS5kYXRhXG4gICAgfSkpLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgb25DaGFuZ2U6IHZhbHVlID0+IHtcbiAgICAgIHN0YXRlLm9uQ2hhbmdlKHZhbHVlLm1hcCh4ID0+ICh7XG4gICAgICAgIGlkOiB4LnZhbHVlLFxuICAgICAgICBsYWJlbDogeC5sYWJlbCxcbiAgICAgICAgZGF0YTogeC5kYXRhXG4gICAgICB9KSkpO1xuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxuICAgIGlzQ2xlYXJhYmxlOiBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXG4gICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICB9KTtcbn07XG5cbmV4cG9ydHMuUmVsYXRpb25zaGlwU2VsZWN0ID0gUmVsYXRpb25zaGlwU2VsZWN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX29iamVjdFNwcmVhZCA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMicpO1xudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG52YXIgY29udGV4dCA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbnRleHQnKTtcbnZhciByb3V0ZXIgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9yb3V0ZXInKTtcbnZhciBidXR0b24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvYnV0dG9uJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIG1vZGFscyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9tb2RhbHMnKTtcbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG52YXIgdG9vbHRpcCA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS90b29sdGlwJyk7XG52YXIgbG9hZGluZyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9sb2FkaW5nJyk7XG52YXIgYWRtaW5VaVV0aWxzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWktdXRpbHMnKTtcbnZhciBhcG9sbG8gPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9hcG9sbG8nKTtcbnZhciB0b2FzdCA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS90b2FzdCcpO1xudmFyIGlzRGVlcEVxdWFsID0gcmVxdWlyZSgnZmFzdC1kZWVwLWVxdWFsJyk7XG52YXIgdHlwZXNfcmVsYXRpb25zaGlwX3ZpZXdzX1JlbGF0aW9uc2hpcFNlbGVjdF9kaXN0X2ZpZWxkcyA9IHJlcXVpcmUoJy4uL1JlbGF0aW9uc2hpcFNlbGVjdC9kaXN0L2ZpZWxkcy5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXknKTtcbnJlcXVpcmUoJ2ludGVyc2VjdGlvbi1vYnNlcnZlcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIGlzRGVlcEVxdWFsX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdChpc0RlZXBFcXVhbCk7XG5cbmZ1bmN0aW9uIHVzZUl0ZW1TdGF0ZSh7XG4gIHNlbGVjdGVkRmllbGRzLFxuICBsb2NhbExpc3QsXG4gIGlkLFxuICBmaWVsZFxufSkge1xuICBjb25zdCB7XG4gICAgZGF0YSxcbiAgICBlcnJvcixcbiAgICBsb2FkaW5nXG4gIH0gPSBhcG9sbG8udXNlUXVlcnkoYXBvbGxvLmdxbGBxdWVyeSgkaWQ6IElEISkge1xuICBpdGVtOiAke2xvY2FsTGlzdC5rZXl9KHdoZXJlOiB7aWQ6ICRpZH0pIHtcbiAgICBpZFxuICAgIHJlbGF0aW9uc2hpcDogJHtmaWVsZC5wYXRofSB7XG4gICAgICAke3NlbGVjdGVkRmllbGRzfVxuICAgIH1cbiAgfVxufWAsIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkXG4gICAgfSxcbiAgICBlcnJvclBvbGljeTogJ2FsbCdcbiAgfSk7XG4gIGNvbnN0IHtcbiAgICBpdGVtc0FyckZyb21EYXRhLFxuICAgIHJlbGF0aW9uc2hpcEdldHRlclxuICB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZGF0YUdldHRlciA9IGFkbWluVWlVdGlscy5tYWtlRGF0YUdldHRlcihkYXRhLCBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IuZ3JhcGhRTEVycm9ycyk7XG4gICAgY29uc3QgcmVsYXRpb25zaGlwR2V0dGVyID0gZGF0YUdldHRlci5nZXQoJ2l0ZW0nKS5nZXQoJ3JlbGF0aW9uc2hpcCcpO1xuICAgIGNvbnN0IGlzTWFueSA9IEFycmF5LmlzQXJyYXkocmVsYXRpb25zaGlwR2V0dGVyLmRhdGEpO1xuICAgIGNvbnN0IGl0ZW1zQXJyRnJvbURhdGEgPSAoaXNNYW55ID8gcmVsYXRpb25zaGlwR2V0dGVyLmRhdGEubWFwKChfLCBpKSA9PiByZWxhdGlvbnNoaXBHZXR0ZXIuZ2V0KGkpKSA6IFtyZWxhdGlvbnNoaXBHZXR0ZXJdKS5maWx0ZXIoeCA9PiB7XG4gICAgICB2YXIgX3gkZGF0YTtcblxuICAgICAgcmV0dXJuICgoX3gkZGF0YSA9IHguZGF0YSkgPT09IG51bGwgfHwgX3gkZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkZGF0YS5pZCkgIT0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVsYXRpb25zaGlwR2V0dGVyLFxuICAgICAgaXRlbXNBcnJGcm9tRGF0YVxuICAgIH07XG4gIH0sIFtkYXRhLCBlcnJvcl0pO1xuICBsZXQgW3tcbiAgICBpdGVtcyxcbiAgICBpdGVtc0FyckZyb21EYXRhOiBpdGVtc0FyckZyb21EYXRhU3RhdGVcbiAgfSwgc2V0SXRlbXNTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgaXRlbXNBcnJGcm9tRGF0YTogW10sXG4gICAgaXRlbXM6IHt9XG4gIH0pO1xuXG4gIGlmIChpdGVtc0FyckZyb21EYXRhU3RhdGUgIT09IGl0ZW1zQXJyRnJvbURhdGEpIHtcbiAgICBsZXQgbmV3SXRlbXMgPSB7fTtcbiAgICBpdGVtc0FyckZyb21EYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB2YXIgX2l0ZW1zJGl0ZW0kZGF0YSRpZCwgX2l0ZW0kZXJyb3JzLCBfaW5pdGlhbEl0ZW1JblN0YXRlJGU7XG5cbiAgICAgIGNvbnN0IGluaXRpYWxJdGVtSW5TdGF0ZSA9IChfaXRlbXMkaXRlbSRkYXRhJGlkID0gaXRlbXNbaXRlbS5kYXRhLmlkXSkgPT09IG51bGwgfHwgX2l0ZW1zJGl0ZW0kZGF0YSRpZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2l0ZW1zJGl0ZW0kZGF0YSRpZC5mcm9tSW5pdGlhbFF1ZXJ5O1xuXG4gICAgICBpZiAoKGl0ZW1zW2l0ZW0uZGF0YS5pZF0gJiYgaW5pdGlhbEl0ZW1JblN0YXRlIHx8ICFpdGVtc1tpdGVtLmRhdGEuaWRdKSAmJiAoIWluaXRpYWxJdGVtSW5TdGF0ZSB8fCBpdGVtLmRhdGEgIT09IGluaXRpYWxJdGVtSW5TdGF0ZS5kYXRhIHx8ICgoX2l0ZW0kZXJyb3JzID0gaXRlbS5lcnJvcnMpID09PSBudWxsIHx8IF9pdGVtJGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2l0ZW0kZXJyb3JzLmxlbmd0aCkgIT09ICgoX2luaXRpYWxJdGVtSW5TdGF0ZSRlID0gaW5pdGlhbEl0ZW1JblN0YXRlLmVycm9ycykgPT09IG51bGwgfHwgX2luaXRpYWxJdGVtSW5TdGF0ZSRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5pdGlhbEl0ZW1JblN0YXRlJGUubGVuZ3RoKSB8fCAoaXRlbS5lcnJvcnMgfHwgW10pLnNvbWUoKGVyciwgaSkgPT4ge1xuICAgICAgICB2YXIgX2luaXRpYWxJdGVtSW5TdGF0ZSRlMjtcblxuICAgICAgICByZXR1cm4gZXJyICE9PSAoKF9pbml0aWFsSXRlbUluU3RhdGUkZTIgPSBpbml0aWFsSXRlbUluU3RhdGUuZXJyb3JzKSA9PT0gbnVsbCB8fCBfaW5pdGlhbEl0ZW1JblN0YXRlJGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5pdGlhbEl0ZW1JblN0YXRlJGUyW2ldKTtcbiAgICAgIH0pKSkge1xuICAgICAgICBuZXdJdGVtc1tpdGVtLmRhdGEuaWRdID0ge1xuICAgICAgICAgIGN1cnJlbnQ6IGl0ZW0sXG4gICAgICAgICAgZnJvbUluaXRpYWxRdWVyeTogaXRlbVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3SXRlbXNbaXRlbS5kYXRhLmlkXSA9IGl0ZW1zW2l0ZW0uZGF0YS5pZF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgaXRlbXMgPSBuZXdJdGVtcztcbiAgICBzZXRJdGVtc1N0YXRlKHtcbiAgICAgIGl0ZW1zOiBuZXdJdGVtcyxcbiAgICAgIGl0ZW1zQXJyRnJvbURhdGFcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXRlbXM6IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbXNUb1JldHVybiA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goaWQgPT4ge1xuICAgICAgICBpdGVtc1RvUmV0dXJuW2lkXSA9IGl0ZW1zW2lkXS5jdXJyZW50O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXRlbXNUb1JldHVybjtcbiAgICB9LCBbaXRlbXNdKSxcbiAgICBzZXRJdGVtczogUmVhY3QudXNlQ2FsbGJhY2soaXRlbXMgPT4ge1xuICAgICAgc2V0SXRlbXNTdGF0ZShzdGF0ZSA9PiB7XG4gICAgICAgIGxldCBpdGVtc0ZvclN0YXRlID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICB2YXIgX3N0YXRlJGl0ZW1zJGlkO1xuXG4gICAgICAgICAgaWYgKGl0ZW1zW2lkXSA9PT0gKChfc3RhdGUkaXRlbXMkaWQgPSBzdGF0ZS5pdGVtc1tpZF0pID09PSBudWxsIHx8IF9zdGF0ZSRpdGVtcyRpZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0YXRlJGl0ZW1zJGlkLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICBpdGVtc0ZvclN0YXRlW2lkXSA9IHN0YXRlLml0ZW1zW2lkXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIF9zdGF0ZSRpdGVtcyRpZDI7XG5cbiAgICAgICAgICAgIGl0ZW1zRm9yU3RhdGVbaWRdID0ge1xuICAgICAgICAgICAgICBjdXJyZW50OiBpdGVtc1tpZF0sXG4gICAgICAgICAgICAgIGZyb21Jbml0aWFsUXVlcnk6IChfc3RhdGUkaXRlbXMkaWQyID0gc3RhdGUuaXRlbXNbaWRdKSA9PT0gbnVsbCB8fCBfc3RhdGUkaXRlbXMkaWQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RhdGUkaXRlbXMkaWQyLmZyb21Jbml0aWFsUXVlcnlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpdGVtc0FyckZyb21EYXRhOiBzdGF0ZS5pdGVtc0FyckZyb21EYXRhLFxuICAgICAgICAgIGl0ZW1zOiBpdGVtc0ZvclN0YXRlXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LCBbc2V0SXRlbXNTdGF0ZV0pLFxuICAgIHN0YXRlOiAoKCkgPT4ge1xuICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiAnbG9hZGluZydcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yICE9PSBudWxsICYmIGVycm9yICE9PSB2b2lkIDAgJiYgZXJyb3IubmV0d29ya0Vycm9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogJ2Vycm9yJyxcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5uZXR3b3JrRXJyb3IubWVzc2FnZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZmllbGQubWFueSAmJiAhcmVsYXRpb25zaGlwR2V0dGVyLmRhdGEpIHtcbiAgICAgICAgdmFyIF9yZWxhdGlvbnNoaXBHZXR0ZXIkZTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdlcnJvcicsXG4gICAgICAgICAgbWVzc2FnZTogKChfcmVsYXRpb25zaGlwR2V0dGVyJGUgPSByZWxhdGlvbnNoaXBHZXR0ZXIuZXJyb3JzKSA9PT0gbnVsbCB8fCBfcmVsYXRpb25zaGlwR2V0dGVyJGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZWxhdGlvbnNoaXBHZXR0ZXIkZVswXS5tZXNzYWdlKSB8fCAnJ1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiAnbG9hZGVkJ1xuICAgICAgfTtcbiAgICB9KSgpXG4gIH07XG59XG5mdW5jdGlvbiB1c2VGaWVsZHNPYmoobGlzdCwgZmllbGRzKSB7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBlZGl0RmllbGRzID0ge307XG4gICAgZmllbGRzID09PSBudWxsIHx8IGZpZWxkcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmllbGRzLmZvckVhY2goZmllbGRQYXRoID0+IHtcbiAgICAgIGVkaXRGaWVsZHNbZmllbGRQYXRoXSA9IGxpc3QuZmllbGRzW2ZpZWxkUGF0aF07XG4gICAgfSk7XG4gICAgcmV0dXJuIGVkaXRGaWVsZHM7XG4gIH0sIFtmaWVsZHMsIGxpc3QuZmllbGRzXSk7XG59XG5cbmZ1bmN0aW9uIElubGluZUVkaXQoe1xuICBmaWVsZHMsXG4gIGxpc3QsXG4gIHNlbGVjdGVkRmllbGRzLFxuICBpdGVtR2V0dGVyLFxuICBvbkNhbmNlbCxcbiAgb25TYXZlXG59KSB7XG4gIHZhciBfaXRlbUdldHRlciRlcnJvcnM7XG5cbiAgY29uc3QgZmllbGRzT2JqID0gdXNlRmllbGRzT2JqKGxpc3QsIGZpZWxkcyk7XG4gIGNvbnN0IFt1cGRhdGUsIHtcbiAgICBsb2FkaW5nLFxuICAgIGVycm9yXG4gIH1dID0gYXBvbGxvLnVzZU11dGF0aW9uKGFwb2xsby5ncWxgbXV0YXRpb24gKCRkYXRhOiAke2xpc3QuZ3FsTmFtZXMudXBkYXRlSW5wdXROYW1lfSEsICRpZDogSUQhKSB7XG4gICAgICAgICAgaXRlbTogJHtsaXN0LmdxbE5hbWVzLnVwZGF0ZU11dGF0aW9uTmFtZX0oaWQ6ICRpZCwgZGF0YTogJGRhdGEpIHtcbiAgICAgICAgICAgICR7c2VsZWN0ZWRGaWVsZHN9XG4gICAgICAgICAgfVxuICAgICAgICB9YCwge1xuICAgIGVycm9yUG9saWN5OiAnYWxsJ1xuICB9KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBhZG1pblVpVXRpbHMuZGVzZXJpYWxpemVWYWx1ZShmaWVsZHNPYmosIGl0ZW1HZXR0ZXIpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGl0ZW06IGl0ZW1HZXR0ZXIuZGF0YVxuICAgIH07XG4gIH0pO1xuXG4gIGlmIChzdGF0ZS5pdGVtICE9PSBpdGVtR2V0dGVyLmRhdGEgJiYgKF9pdGVtR2V0dGVyJGVycm9ycyA9IGl0ZW1HZXR0ZXIuZXJyb3JzKSAhPT0gbnVsbCAmJiBfaXRlbUdldHRlciRlcnJvcnMgIT09IHZvaWQgMCAmJiBfaXRlbUdldHRlciRlcnJvcnMuZXZlcnkoeCA9PiB7XG4gICAgdmFyIF94JHBhdGg7XG5cbiAgICByZXR1cm4gKChfeCRwYXRoID0geC5wYXRoKSA9PT0gbnVsbCB8fCBfeCRwYXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfeCRwYXRoLmxlbmd0aCkgIT09IDE7XG4gIH0pKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhZG1pblVpVXRpbHMuZGVzZXJpYWxpemVWYWx1ZShmaWVsZHNPYmosIGl0ZW1HZXR0ZXIpO1xuICAgIHNldFZhbHVlKHtcbiAgICAgIHZhbHVlLFxuICAgICAgaXRlbTogaXRlbUdldHRlci5kYXRhXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB7XG4gICAgY2hhbmdlZEZpZWxkcyxcbiAgICBkYXRhRm9yVXBkYXRlXG4gIH0gPSBhZG1pblVpVXRpbHMudXNlQ2hhbmdlZEZpZWxkc0FuZERhdGFGb3JVcGRhdGUoZmllbGRzT2JqLCBpdGVtR2V0dGVyLCBzdGF0ZS52YWx1ZSk7XG4gIGNvbnN0IGludmFsaWRGaWVsZHMgPSBhZG1pblVpVXRpbHMudXNlSW52YWxpZEZpZWxkcyhmaWVsZHNPYmosIHN0YXRlLnZhbHVlKTtcbiAgY29uc3QgW2ZvcmNlVmFsaWRhdGlvbiwgc2V0Rm9yY2VWYWxpZGF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9hc3RzID0gdG9hc3QudXNlVG9hc3RzKCk7XG4gIGNvbnN0IHNhdmVCdXR0b25Qcm9wcyA9IHtcbiAgICBpc0xvYWRpbmc6IGxvYWRpbmcsXG4gICAgd2VpZ2h0OiAnYm9sZCcsXG4gICAgc2l6ZTogJ3NtYWxsJyxcbiAgICB0b25lOiAnYWN0aXZlJyxcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdGb3JjZVZhbGlkYXRpb24gPSBpbnZhbGlkRmllbGRzLnNpemUgIT09IDA7XG4gICAgICBzZXRGb3JjZVZhbGlkYXRpb24obmV3Rm9yY2VWYWxpZGF0aW9uKTtcbiAgICAgIGlmIChuZXdGb3JjZVZhbGlkYXRpb24pIHJldHVybjtcbiAgICAgIHVwZGF0ZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGRhdGE6IGRhdGFGb3JVcGRhdGUsXG4gICAgICAgICAgaWQ6IGl0ZW1HZXR0ZXIuZ2V0KCdpZCcpLmRhdGFcbiAgICAgICAgfVxuICAgICAgfSkudGhlbigoe1xuICAgICAgICBkYXRhLFxuICAgICAgICBlcnJvcnNcbiAgICAgIH0pID0+IHtcbiAgICAgICAgLy8gd2UncmUgY2hlY2tpbmcgZm9yIHBhdGgubGVuZ3RoID09PSAxIGJlY2F1c2UgZXJyb3JzIHdpdGggYSBwYXRoIGxhcmdlciB0aGFuIDEgd2lsbCBiZSBmaWVsZCBsZXZlbCBlcnJvcnNcbiAgICAgICAgLy8gd2hpY2ggYXJlIGhhbmRsZWQgc2VwZXJhdGVseSBhbmQgZG8gbm90IGluZGljYXRlIGEgZmFpbHVyZSB0byB1cGRhdGUgdGhlIGl0ZW1cbiAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZmluZCh4ID0+IHtcbiAgICAgICAgICB2YXIgX3gkcGF0aDI7XG5cbiAgICAgICAgICByZXR1cm4gKChfeCRwYXRoMiA9IHgucGF0aCkgPT09IG51bGwgfHwgX3gkcGF0aDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF94JHBhdGgyLmxlbmd0aCkgPT09IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ0ZhaWxlZCB0byB1cGRhdGUgaXRlbScsXG4gICAgICAgICAgICB0b25lOiAnbmVnYXRpdmUnLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogZGF0YS5pdGVtW2xpc3QubGFiZWxGaWVsZF0gfHwgZGF0YS5pdGVtLmlkLFxuICAgICAgICAgICAgdG9uZTogJ3Bvc2l0aXZlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdTYXZlZCBzdWNjZXNzZnVsbHknXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgb25TYXZlKGFkbWluVWlVdGlscy5tYWtlRGF0YUdldHRlcihkYXRhLCBlcnJvcnMpLmdldCgnaXRlbScpKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ0ZhaWxlZCB0byB1cGRhdGUgaXRlbScsXG4gICAgICAgICAgdG9uZTogJ25lZ2F0aXZlJyxcbiAgICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2hpbGRyZW46ICdTYXZlJ1xuICB9O1xuICByZXR1cm4gY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJ4bGFyZ2VcIlxuICB9LCBlcnJvciAmJiBjb3JlLmpzeChjb21wb25lbnRzLkdyYXBoUUxFcnJvck5vdGljZSwge1xuICAgIG5ldHdvcmtFcnJvcjogZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm5ldHdvcmtFcnJvciAvLyB3ZSdyZSBjaGVja2luZyBmb3IgcGF0aC5sZW5ndGggPT09IDEgYmVjYXVzZSBlcnJvcnMgd2l0aCBhIHBhdGggbGFyZ2VyIHRoYW4gMSB3aWxsIGJlIGZpZWxkIGxldmVsIGVycm9yc1xuICAgIC8vIHdoaWNoIGFyZSBoYW5kbGVkIHNlcGVyYXRlbHkgYW5kIGRvIG5vdCBpbmRpY2F0ZSBhIGZhaWx1cmUgdG8gdXBkYXRlIHRoZSBpdGVtXG4gICAgLFxuICAgIGVycm9yczogZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLmdyYXBoUUxFcnJvcnMuZmlsdGVyKHggPT4ge1xuICAgICAgdmFyIF94JHBhdGgzO1xuXG4gICAgICByZXR1cm4gKChfeCRwYXRoMyA9IHgucGF0aCkgPT09IG51bGwgfHwgX3gkcGF0aDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF94JHBhdGgzLmxlbmd0aCkgPT09IDE7XG4gICAgfSlcbiAgfSksIGNvcmUuanN4KGFkbWluVWlVdGlscy5GaWVsZHMsIHtcbiAgICBmaWVsZE1vZGVzOiBudWxsLFxuICAgIGZpZWxkczogZmllbGRzT2JqLFxuICAgIGZvcmNlVmFsaWRhdGlvbjogZm9yY2VWYWxpZGF0aW9uLFxuICAgIGludmFsaWRGaWVsZHM6IGludmFsaWRGaWVsZHMsXG4gICAgb25DaGFuZ2U6IFJlYWN0LnVzZUNhbGxiYWNrKHZhbHVlID0+IHtcbiAgICAgIHNldFZhbHVlKHN0YXRlID0+ICh7XG4gICAgICAgIGl0ZW06IHN0YXRlLml0ZW0sXG4gICAgICAgIHZhbHVlOiB2YWx1ZShzdGF0ZS52YWx1ZSlcbiAgICAgIH0pKTtcbiAgICB9LCBbc2V0VmFsdWVdKSxcbiAgICB2YWx1ZTogc3RhdGUudmFsdWVcbiAgfSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBhY3Jvc3M6IHRydWUsXG4gICAgZ2FwOiBcInNtYWxsXCJcbiAgfSwgY2hhbmdlZEZpZWxkcy5zaXplID8gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgc2F2ZUJ1dHRvblByb3BzKSA6IGNvcmUuanN4KHRvb2x0aXAuVG9vbHRpcCwge1xuICAgIGNvbnRlbnQ6IFwiTm8gZmllbGRzIGhhdmUgYmVlbiBtb2RpZmllZCBzbyB5b3UgY2Fubm90IHNhdmUgY2hhbmdlc1wiXG4gIH0sIHByb3BzID0+IGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIF9leHRlbmRzKHt9LCBwcm9wcywgc2F2ZUJ1dHRvblByb3BzLCB7XG4gICAgLy8gbWFraW5nIG9uQ2xpY2sgdW5kZWZpbmVkIGluc3RlYWQgb2YgbWFraW5nIHRoZSBidXR0b24gZGlzYWJsZWQgc28gdGhlIGJ1dHRvbiBjYW4gYmUgZm9jdXNzZWQgc28ga2V5Ym9hcmQgdXNlcnMgY2FuIHNlZSB0aGUgdG9vbHRpcFxuICAgIG9uQ2xpY2s6IHVuZGVmaW5lZFxuICB9KSkpLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHdlaWdodDogXCJub25lXCIsXG4gICAgb25DbGljazogb25DYW5jZWxcbiAgfSwgXCJDYW5jZWxcIikpKTtcbn1cblxuLyogQGpzeCBqc3ggKi9cbmZ1bmN0aW9uIElubGluZUNyZWF0ZSh7XG4gIGxpc3QsXG4gIG9uQ2FuY2VsLFxuICBvbkNyZWF0ZSxcbiAgZmllbGRzOiBmaWVsZFBhdGhzLFxuICBzZWxlY3RlZEZpZWxkc1xufSkge1xuICBjb25zdCB0b2FzdHMgPSB0b2FzdC51c2VUb2FzdHMoKTtcbiAgY29uc3QgZmllbGRzID0gdXNlRmllbGRzT2JqKGxpc3QsIGZpZWxkUGF0aHMpO1xuICBjb25zdCBbY3JlYXRlSXRlbSwge1xuICAgIGxvYWRpbmcsXG4gICAgZXJyb3JcbiAgfV0gPSBhcG9sbG8udXNlTXV0YXRpb24oYXBvbGxvLmdxbGBtdXRhdGlvbigkZGF0YTogJHtsaXN0LmdxbE5hbWVzLmNyZWF0ZUlucHV0TmFtZX0hKSB7XG4gICAgICBpdGVtOiAke2xpc3QuZ3FsTmFtZXMuY3JlYXRlTXV0YXRpb25OYW1lfShkYXRhOiAkZGF0YSkge1xuICAgICAgICAke3NlbGVjdGVkRmllbGRzfVxuICAgIH1cbiAgfWApO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChmaWVsZFBhdGggPT4ge1xuICAgICAgdmFsdWVbZmllbGRQYXRoXSA9IHtcbiAgICAgICAga2luZDogJ3ZhbHVlJyxcbiAgICAgICAgdmFsdWU6IGZpZWxkc1tmaWVsZFBhdGhdLmNvbnRyb2xsZXIuZGVmYXVsdFZhbHVlXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IGludmFsaWRGaWVsZHMgPSBhZG1pblVpVXRpbHMudXNlSW52YWxpZEZpZWxkcyhmaWVsZHMsIHZhbHVlKTtcbiAgY29uc3QgW2ZvcmNlVmFsaWRhdGlvbiwgc2V0Rm9yY2VWYWxpZGF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNyZWF0ZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0ZvcmNlVmFsaWRhdGlvbiA9IGludmFsaWRGaWVsZHMuc2l6ZSAhPT0gMDtcbiAgICBzZXRGb3JjZVZhbGlkYXRpb24obmV3Rm9yY2VWYWxpZGF0aW9uKTtcbiAgICBpZiAobmV3Rm9yY2VWYWxpZGF0aW9uKSByZXR1cm47XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGNvbnN0IGFsbFNlcmlhbGl6ZWRWYWx1ZXMgPSBhZG1pblVpVXRpbHMuc2VyaWFsaXplVmFsdWVUb09iakJ5RmllbGRLZXkoZmllbGRzLCB2YWx1ZSk7XG4gICAgT2JqZWN0LmtleXMoYWxsU2VyaWFsaXplZFZhbHVlcykuZm9yRWFjaChmaWVsZFBhdGggPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb250cm9sbGVyXG4gICAgICB9ID0gZmllbGRzW2ZpZWxkUGF0aF07XG4gICAgICBjb25zdCBzZXJpYWxpemVkID0gYWxsU2VyaWFsaXplZFZhbHVlc1tmaWVsZFBhdGhdO1xuXG4gICAgICBpZiAoIWlzRGVlcEVxdWFsX19kZWZhdWx0WydkZWZhdWx0J10oc2VyaWFsaXplZCwgY29udHJvbGxlci5zZXJpYWxpemUoY29udHJvbGxlci5kZWZhdWx0VmFsdWUpKSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHNlcmlhbGl6ZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNyZWF0ZUl0ZW0oe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGRhdGFcbiAgICAgIH1cbiAgICB9KS50aGVuKCh7XG4gICAgICBkYXRhLFxuICAgICAgZXJyb3JzXG4gICAgfSkgPT4ge1xuICAgICAgLy8gd2UncmUgY2hlY2tpbmcgZm9yIHBhdGgubGVuZ3RoID09PSAxIGJlY2F1c2UgZXJyb3JzIHdpdGggYSBwYXRoIGxhcmdlciB0aGFuIDEgd2lsbCBiZSBmaWVsZCBsZXZlbCBlcnJvcnNcbiAgICAgIC8vIHdoaWNoIGFyZSBoYW5kbGVkIHNlcGVyYXRlbHkgYW5kIGRvIG5vdCBpbmRpY2F0ZSBhIGZhaWx1cmUgdG8gdXBkYXRlIHRoZSBpdGVtXG4gICAgICBjb25zdCBlcnJvciA9IGVycm9ycyA9PT0gbnVsbCB8fCBlcnJvcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9ycy5maW5kKHggPT4ge1xuICAgICAgICB2YXIgX3gkcGF0aDtcblxuICAgICAgICByZXR1cm4gKChfeCRwYXRoID0geC5wYXRoKSA9PT0gbnVsbCB8fCBfeCRwYXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfeCRwYXRoLmxlbmd0aCkgPT09IDE7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICdGYWlsZWQgdG8gY3JlYXRlIGl0ZW0nLFxuICAgICAgICAgIHRvbmU6ICduZWdhdGl2ZScsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6IGRhdGEuaXRlbVtsaXN0LmxhYmVsRmllbGRdIHx8IGRhdGEuaXRlbS5pZCxcbiAgICAgICAgICB0b25lOiAncG9zaXRpdmUnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdTYXZlZCBzdWNjZXNzZnVsbHknXG4gICAgICAgIH0pO1xuICAgICAgICBvbkNyZWF0ZShhZG1pblVpVXRpbHMubWFrZURhdGFHZXR0ZXIoZGF0YSwgZXJyb3JzKS5nZXQoJ2l0ZW0nKSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAnRmFpbGVkIHRvIHVwZGF0ZSBpdGVtJyxcbiAgICAgICAgdG9uZTogJ25lZ2F0aXZlJyxcbiAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2VcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgZ2FwOiBcInhsYXJnZVwiXG4gIH0sIGVycm9yICYmIGNvcmUuanN4KGNvbXBvbmVudHMuR3JhcGhRTEVycm9yTm90aWNlLCB7XG4gICAgbmV0d29ya0Vycm9yOiBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubmV0d29ya0Vycm9yLFxuICAgIGVycm9yczogZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLmdyYXBoUUxFcnJvcnNcbiAgfSksIGNvcmUuanN4KGFkbWluVWlVdGlscy5GaWVsZHMsIHtcbiAgICBmaWVsZE1vZGVzOiBudWxsLFxuICAgIGZpZWxkczogZmllbGRzLFxuICAgIGZvcmNlVmFsaWRhdGlvbjogZm9yY2VWYWxpZGF0aW9uLFxuICAgIGludmFsaWRGaWVsZHM6IGludmFsaWRGaWVsZHMsXG4gICAgb25DaGFuZ2U6IHNldFZhbHVlLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KSwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJzbWFsbFwiLFxuICAgIGFjcm9zczogdHJ1ZVxuICB9LCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgaXNMb2FkaW5nOiBsb2FkaW5nLFxuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB0b25lOiBcInBvc2l0aXZlXCIsXG4gICAgd2VpZ2h0OiBcImJvbGRcIixcbiAgICBvbkNsaWNrOiBvbkNyZWF0ZUNsaWNrXG4gIH0sIFwiQ3JlYXRlIFwiLCBsaXN0LnNpbmd1bGFyKSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB3ZWlnaHQ6IFwibm9uZVwiLFxuICAgIG9uQ2xpY2s6IG9uQ2FuY2VsXG4gIH0sIFwiQ2FuY2VsXCIpKSk7XG59XG5cbmNvbnN0IENhcmRDb250YWluZXIgPSAoX3JlZikgPT4ge1xuICBsZXQge1xuICAgIG1vZGUgPSAndmlldydcbiAgfSA9IF9yZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJtb2RlXCJdKTtcblxuICBjb25zdCB7XG4gICAgdG9uZXNcbiAgfSA9IGNvcmUudXNlVGhlbWUoKTtcbiAgY29uc3QgdG9uZSA9IHRvbmVzW21vZGUgPT09ICdlZGl0JyA/ICdhY3RpdmUnIDogbW9kZSA9PT0gJ2NyZWF0ZScgPyAncG9zaXRpdmUnIDogJ3Bhc3NpdmUnXTtcbiAgcmV0dXJuIGNvcmUuanN4KGNvcmUuQm94LCBfZXh0ZW5kcyh7XG4gICAgcGFkZGluZ0xlZnQ6IFwieGxhcmdlXCIsXG4gICAgY3NzOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICc6YmVmb3JlJzoge1xuICAgICAgICBjb250ZW50OiAnXCIgXCInLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRvbmUuYm9yZGVyLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgIHdpZHRoOiA0LFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHpJbmRleDogMVxuICAgICAgfVxuICAgIH1cbiAgfSwgcHJvcHMpKTtcbn07XG5cbmZ1bmN0aW9uIENhcmRzKHtcbiAgbG9jYWxMaXN0LFxuICBmaWVsZCxcbiAgZm9yZWlnbkxpc3QsXG4gIGlkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGZvcmNlVmFsaWRhdGlvblxufSkge1xuICB2YXIgX2ZpZWxkJGRpc3BsYXkkaW5saW5lO1xuXG4gIGxldCBzZWxlY3RlZEZpZWxkcyA9IFsuLi5uZXcgU2V0KFsuLi5maWVsZC5kaXNwbGF5LmNhcmRGaWVsZHMsIC4uLigoKF9maWVsZCRkaXNwbGF5JGlubGluZSA9IGZpZWxkLmRpc3BsYXkuaW5saW5lRWRpdCkgPT09IG51bGwgfHwgX2ZpZWxkJGRpc3BsYXkkaW5saW5lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkZGlzcGxheSRpbmxpbmUuZmllbGRzKSB8fCBbXSldKV0ubWFwKGZpZWxkUGF0aCA9PiB7XG4gICAgcmV0dXJuIGZvcmVpZ25MaXN0LmZpZWxkc1tmaWVsZFBhdGhdLmNvbnRyb2xsZXIuZ3JhcGhxbFNlbGVjdGlvbjtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgaWYgKCFmaWVsZC5kaXNwbGF5LmNhcmRGaWVsZHMuaW5jbHVkZXMoJ2lkJykpIHtcbiAgICBzZWxlY3RlZEZpZWxkcyArPSAnXFxuaWQnO1xuICB9XG5cbiAgaWYgKCFmaWVsZC5kaXNwbGF5LmNhcmRGaWVsZHMuaW5jbHVkZXMoZm9yZWlnbkxpc3QubGFiZWxGaWVsZCkgJiYgZm9yZWlnbkxpc3QubGFiZWxGaWVsZCAhPT0gJ2lkJykge1xuICAgIHNlbGVjdGVkRmllbGRzICs9IGBcXG4ke2ZvcmVpZ25MaXN0LmxhYmVsRmllbGR9YDtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICBzZXRJdGVtcyxcbiAgICBzdGF0ZTogaXRlbXNTdGF0ZVxuICB9ID0gdXNlSXRlbVN0YXRlKHtcbiAgICBzZWxlY3RlZEZpZWxkcyxcbiAgICBsb2NhbExpc3QsXG4gICAgaWQsXG4gICAgZmllbGRcbiAgfSk7XG4gIGNvbnN0IGNsaWVudCA9IGFwb2xsby51c2VBcG9sbG9DbGllbnQoKTtcbiAgY29uc3QgW2lzTG9hZGluZ0xhenlJdGVtcywgc2V0SXNMb2FkaW5nTGF6eUl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dDb25uZWN0SXRlbXMsIHNldFNob3dDb25uZWN0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGlkZUNvbm5lY3RJdGVtc0xhYmVsLCBzZXRIaWRlQ29ubmVjdEl0ZW1zTGFiZWxdID0gUmVhY3QudXNlU3RhdGUoJ0NhbmNlbCcpO1xuICBjb25zdCBpc01vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9KTtcblxuICBpZiAoaXRlbXNTdGF0ZS5raW5kID09PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwgbnVsbCwgY29yZS5qc3gobG9hZGluZy5Mb2FkaW5nRG90cywge1xuICAgICAgbGFiZWw6IGBMb2FkaW5nIGl0ZW1zIGZvciAke2ZpZWxkLmxhYmVsfSBmaWVsZGBcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoaXRlbXNTdGF0ZS5raW5kID09PSAnZXJyb3InKSB7XG4gICAgcmV0dXJuIGNvcmUuanN4KFwic3BhblwiLCB7XG4gICAgICBjc3M6IHtcbiAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICB9XG4gICAgfSwgaXRlbXNTdGF0ZS5tZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgZ2FwOiBcInhsYXJnZVwiXG4gIH0sIFsuLi52YWx1ZS5jdXJyZW50SWRzXS5tYXAoaWQgPT4ge1xuICAgIGNvbnN0IGl0ZW1HZXR0ZXIgPSBpdGVtc1tpZF07XG4gICAgcmV0dXJuIHZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQuaGFzKGlkKSAmJiBvbkNoYW5nZSAhPT0gdW5kZWZpbmVkID8gY29yZS5qc3goQ2FyZENvbnRhaW5lciwge1xuICAgICAgbW9kZTogXCJlZGl0XCIsXG4gICAgICBrZXk6IGlkXG4gICAgfSwgY29yZS5qc3goSW5saW5lRWRpdCwge1xuICAgICAgbGlzdDogZm9yZWlnbkxpc3QsXG4gICAgICBmaWVsZHM6IGZpZWxkLmRpc3BsYXkuaW5saW5lRWRpdC5maWVsZHMsXG4gICAgICBvblNhdmU6IG5ld0l0ZW1HZXR0ZXIgPT4ge1xuICAgICAgICBzZXRJdGVtcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGl0ZW1zKSwge30sIHtcbiAgICAgICAgICBbaWRdOiBuZXdJdGVtR2V0dGVyXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgaXRlbXNCZWluZ0VkaXRlZCA9IG5ldyBTZXQodmFsdWUuaXRlbXNCZWluZ0VkaXRlZCk7XG4gICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWQuZGVsZXRlKGlkKTtcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgaXRlbXNCZWluZ0VkaXRlZFxuICAgICAgICB9KSk7XG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRGaWVsZHM6IHNlbGVjdGVkRmllbGRzLFxuICAgICAgaXRlbUdldHRlcjogaXRlbUdldHRlcixcbiAgICAgIG9uQ2FuY2VsOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zQmVpbmdFZGl0ZWQgPSBuZXcgU2V0KHZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQpO1xuICAgICAgICBpdGVtc0JlaW5nRWRpdGVkLmRlbGV0ZShpZCk7XG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWRcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0pKSA6IGNvcmUuanN4KENhcmRDb250YWluZXIsIHtcbiAgICAgIG1vZGU6IFwidmlld1wiLFxuICAgICAga2V5OiBpZFxuICAgIH0sIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICAgIGdhcDogXCJ4bGFyZ2VcIlxuICAgIH0sIGZpZWxkLmRpc3BsYXkuY2FyZEZpZWxkcy5tYXAoZmllbGRQYXRoID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkID0gZm9yZWlnbkxpc3QuZmllbGRzW2ZpZWxkUGF0aF07XG4gICAgICBjb25zdCBpdGVtRm9yRmllbGQgPSB7fTtcblxuICAgICAgZm9yIChjb25zdCBncmFwaHFsRmllbGQgb2YgYWRtaW5VaVV0aWxzLmdldFJvb3RHcmFwaFFMRmllbGRzRnJvbUZpZWxkQ29udHJvbGxlcihmaWVsZC5jb250cm9sbGVyKSkge1xuICAgICAgICBjb25zdCBmaWVsZEdldHRlciA9IGl0ZW1HZXR0ZXIuZ2V0KGdyYXBocWxGaWVsZCk7XG5cbiAgICAgICAgaWYgKGZpZWxkR2V0dGVyLmVycm9ycykge1xuICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGZpZWxkR2V0dGVyLmVycm9yc1swXS5tZXNzYWdlO1xuICAgICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtRm9yRmllbGRbZ3JhcGhxbEZpZWxkXSA9IGZpZWxkR2V0dGVyLmRhdGE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZC52aWV3cy5DYXJkVmFsdWUsIHtcbiAgICAgICAga2V5OiBmaWVsZFBhdGgsXG4gICAgICAgIGZpZWxkOiBmaWVsZC5jb250cm9sbGVyLFxuICAgICAgICBpdGVtOiBpdGVtRm9yRmllbGRcbiAgICAgIH0pO1xuICAgIH0pKSwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgICAgYWNyb3NzOiB0cnVlLFxuICAgICAgZ2FwOiBcInNtYWxsXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwieGxhcmdlXCJcbiAgICB9LCBmaWVsZC5kaXNwbGF5LmlubGluZUVkaXQgJiYgb25DaGFuZ2UgIT09IHVuZGVmaW5lZCAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgaXRlbXNCZWluZ0VkaXRlZDogbmV3IFNldChbLi4udmFsdWUuaXRlbXNCZWluZ0VkaXRlZCwgaWRdKVxuICAgICAgICB9KSk7XG4gICAgICB9LFxuICAgICAgdG9uZTogXCJhY3RpdmVcIlxuICAgIH0sIFwiRWRpdFwiKSwgZmllbGQuZGlzcGxheS5yZW1vdmVNb2RlID09PSAnZGlzY29ubmVjdCcgJiYgb25DaGFuZ2UgIT09IHVuZGVmaW5lZCAmJiBjb3JlLmpzeCh0b29sdGlwLlRvb2x0aXAsIHtcbiAgICAgIGNvbnRlbnQ6IFwiVGhpcyBpdGVtIHdpbGwgbm90IGJlIGRlbGV0ZWQuIEl0IHdpbGwgb25seSBiZSByZW1vdmVkIGZyb20gdGhpcyBmaWVsZC5cIlxuICAgIH0sIHByb3BzID0+IGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIF9leHRlbmRzKHtcbiAgICAgIHNpemU6IFwic21hbGxcIixcbiAgICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50SWRzID0gbmV3IFNldCh2YWx1ZS5jdXJyZW50SWRzKTtcbiAgICAgICAgY3VycmVudElkcy5kZWxldGUoaWQpO1xuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICBjdXJyZW50SWRzXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9LCBwcm9wcywge1xuICAgICAgdG9uZTogXCJuZWdhdGl2ZVwiXG4gICAgfSksIFwiUmVtb3ZlXCIpKSwgZmllbGQuZGlzcGxheS5saW5rVG9JdGVtICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICAgIHNpemU6IFwic21hbGxcIixcbiAgICAgIHdlaWdodDogXCJsaW5rXCIsXG4gICAgICB0b25lOiBcImFjdGl2ZVwiLFxuICAgICAgY3NzOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICBhczogcm91dGVyLkxpbmssXG4gICAgICBocmVmOiBgLyR7Zm9yZWlnbkxpc3QucGF0aH0vJHtpZH1gXG4gICAgfSwgXCJWaWV3IFwiLCBmb3JlaWduTGlzdC5zaW5ndWxhciwgXCIgZGV0YWlsc1wiKSkpO1xuICB9KSwgb25DaGFuZ2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBmaWVsZC5kaXNwbGF5LmlubGluZUNvbm5lY3QgJiYgc2hvd0Nvbm5lY3RJdGVtcyA/IGNvcmUuanN4KENhcmRDb250YWluZXIsIHtcbiAgICBtb2RlOiBcImVkaXRcIlxuICB9LCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgZ2FwOiBcInNtYWxsXCIsXG4gICAgbWFyZ2luWTogXCJtZWRpdW1cIixcbiAgICBhY3Jvc3M6IHRydWVcbiAgfSwgY29yZS5qc3godHlwZXNfcmVsYXRpb25zaGlwX3ZpZXdzX1JlbGF0aW9uc2hpcFNlbGVjdF9kaXN0X2ZpZWxkcy5SZWxhdGlvbnNoaXBTZWxlY3QsIHtcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlOiBpc0xvYWRpbmdMYXp5SXRlbXMsXG4gICAgaXNEaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICBsaXN0OiBmb3JlaWduTGlzdCxcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZ0xhenlJdGVtcyxcbiAgICBwbGFjZWhvbGRlcjogYFNlbGVjdCBhICR7Zm9yZWlnbkxpc3Quc2luZ3VsYXJ9YCxcbiAgICBzdGF0ZToge1xuICAgICAga2luZDogJ21hbnknLFxuXG4gICAgICBhc3luYyBvbkNoYW5nZShvcHRpb25zKSB7XG4gICAgICAgIC8vIFRPRE86IG1heWJlIHVzZSB0aGUgZXh0cmFTZWxlY3Rpb24gcHJvcCBvbiBSZWxhdGlvbnNoaXBTZWxlY3QgaGVyZVxuICAgICAgICBjb25zdCBpdGVtc1RvRmV0Y2hBbmRDb25uZWN0ID0gW107XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpZiAoIXZhbHVlLmN1cnJlbnRJZHMuaGFzKGl0ZW0uaWQpKSB7XG4gICAgICAgICAgICBpdGVtc1RvRmV0Y2hBbmRDb25uZWN0LnB1c2goaXRlbS5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXRlbXNUb0ZldGNoQW5kQ29ubmVjdC5sZW5ndGgpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICBlcnJvcnNcbiAgICAgICAgICAgIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgICBxdWVyeTogYXBvbGxvLmdxbGBxdWVyeSAoJGlkczogW0lEIV0hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6ICR7Zm9yZWlnbkxpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TmFtZX0od2hlcmU6IHtpZF9pbjokaWRzfSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtzZWxlY3RlZEZpZWxkc31cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBpZHM6IGl0ZW1zVG9GZXRjaEFuZENvbm5lY3RcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChpc01vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICBjb25zdCBkYXRhR2V0dGVycyA9IGFkbWluVWlVdGlscy5tYWtlRGF0YUdldHRlcihkYXRhLCBlcnJvcnMpO1xuICAgICAgICAgICAgICBjb25zdCBpdGVtc0RhdGFHZXR0ZXIgPSBkYXRhR2V0dGVycy5nZXQoJ2l0ZW1zJyk7XG5cbiAgICAgICAgICAgICAgbGV0IG5ld0l0ZW1zID0gX29iamVjdFNwcmVhZCh7fSwgaXRlbXMpO1xuXG4gICAgICAgICAgICAgIGxldCBuZXdDdXJyZW50SWRzID0gZmllbGQubWFueSA/IG5ldyBTZXQodmFsdWUuY3VycmVudElkcykgOiBuZXcgU2V0KCk7XG5cbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXNEYXRhR2V0dGVyLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNEYXRhR2V0dGVyLmRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGl0ZW0uaWQpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3VycmVudElkcy5hZGQoaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2l0ZW0uaWRdID0gaXRlbXNEYXRhR2V0dGVyLmdldChpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChuZXdDdXJyZW50SWRzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBzZXRJdGVtcyhuZXdJdGVtcyk7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50SWRzOiBuZXdDdXJyZW50SWRzXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHNldEhpZGVDb25uZWN0SXRlbXNMYWJlbCgnRG9uZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChpc01vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICBzZXRJc0xvYWRpbmdMYXp5SXRlbXMoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgdmFsdWU6ICgoKSA9PiB7XG4gICAgICAgIGxldCBvcHRpb25zID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUuY3VycmVudElkcy5oYXMoaWQpKSB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgbGFiZWw6IGlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH0pKClcbiAgICB9XG4gIH0pLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgb25DbGljazogKCkgPT4gc2V0U2hvd0Nvbm5lY3RJdGVtcyhmYWxzZSlcbiAgfSwgaGlkZUNvbm5lY3RJdGVtc0xhYmVsKSkpIDogdmFsdWUuaXRlbUJlaW5nQ3JlYXRlZCA/IGNvcmUuanN4KENhcmRDb250YWluZXIsIHtcbiAgICBtb2RlOiBcImNyZWF0ZVwiXG4gIH0sIGNvcmUuanN4KElubGluZUNyZWF0ZSwge1xuICAgIHNlbGVjdGVkRmllbGRzOiBzZWxlY3RlZEZpZWxkcyxcbiAgICBmaWVsZHM6IGZpZWxkLmRpc3BsYXkuaW5saW5lQ3JlYXRlLmZpZWxkcyxcbiAgICBsaXN0OiBmb3JlaWduTGlzdCxcbiAgICBvbkNhbmNlbDogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGl0ZW1CZWluZ0NyZWF0ZWQ6IGZhbHNlXG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBvbkNyZWF0ZTogaXRlbUdldHRlciA9PiB7XG4gICAgICBjb25zdCBpZCA9IGl0ZW1HZXR0ZXIuZGF0YS5pZDtcbiAgICAgIHNldEl0ZW1zKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaXRlbXMpLCB7fSwge1xuICAgICAgICBbaWRdOiBpdGVtR2V0dGVyXG4gICAgICB9KSk7XG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgaXRlbUJlaW5nQ3JlYXRlZDogZmFsc2UsXG4gICAgICAgIGN1cnJlbnRJZHM6IGZpZWxkLm1hbnkgPyBuZXcgU2V0KFsuLi52YWx1ZS5jdXJyZW50SWRzLCBpZF0pIDogbmV3IFNldChbaWRdKVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSkpIDogZmllbGQuZGlzcGxheS5pbmxpbmVDcmVhdGUgfHwgZmllbGQuZGlzcGxheS5pbmxpbmVDb25uZWN0ID8gY29yZS5qc3goQ2FyZENvbnRhaW5lciwge1xuICAgIG1vZGU6IFwiY3JlYXRlXCJcbiAgfSwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJzbWFsbFwiLFxuICAgIG1hcmdpblRvcDogXCJtZWRpdW1cIixcbiAgICBhY3Jvc3M6IHRydWVcbiAgfSwgZmllbGQuZGlzcGxheS5pbmxpbmVDcmVhdGUgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICB0b25lOiBcInBvc2l0aXZlXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGl0ZW1CZWluZ0NyZWF0ZWQ6IHRydWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIFwiQ3JlYXRlIFwiLCBmb3JlaWduTGlzdC5zaW5ndWxhciksIGZpZWxkLmRpc3BsYXkuaW5saW5lQ29ubmVjdCAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHdlaWdodDogXCJub25lXCIsXG4gICAgdG9uZTogXCJwYXNzaXZlXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgc2V0U2hvd0Nvbm5lY3RJdGVtcyh0cnVlKTtcbiAgICAgIHNldEhpZGVDb25uZWN0SXRlbXNMYWJlbCgnQ2FuY2VsJyk7XG4gICAgfVxuICB9LCBcIkxpbmsgZXhpc3RpbmcgXCIsIGZvcmVpZ25MaXN0LnNpbmd1bGFyKSkpIDogbnVsbCwgZm9yY2VWYWxpZGF0aW9uICYmIGNvcmUuanN4KGNvcmUuVGV4dCwge1xuICAgIGNvbG9yOiBcInJlZDYwMFwiLFxuICAgIHNpemU6IFwic21hbGxcIlxuICB9LCBcIllvdSBtdXN0IGZpbmlzaCBjcmVhdGluZyBhbmQgZWRpdGluZyBhbnkgcmVsYXRlZCBcIiwgZm9yZWlnbkxpc3QubGFiZWwudG9Mb3dlckNhc2UoKSwgXCIgYmVmb3JlIHNhdmluZyB0aGUgXCIsIGxvY2FsTGlzdC5zaW5ndWxhci50b0xvd2VyQ2FzZSgpKSk7XG59XG5cbmZ1bmN0aW9uIExpbmtUb1JlbGF0ZWRJdGVtcyh7XG4gIHZhbHVlLFxuICBsaXN0XG59KSB7XG4gIHZhciBfdmFsdWUkdmFsdWU7XG5cbiAgY29uc3QgY29tbW9uUHJvcHMgPSB7XG4gICAgc2l6ZTogJ3NtYWxsJyxcbiAgICB0b25lOiAnYWN0aXZlJyxcbiAgICB3ZWlnaHQ6ICdsaW5rJ1xuICB9O1xuXG4gIGlmICh2YWx1ZS5raW5kID09PSAnbWFueScpIHtcbiAgICByZXR1cm4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICBhczogcm91dGVyLkxpbmsgLy8gV2hhdCBoYXBwZW5zIHdoZW4gdGhlcmUgYXJlIDEwLDAwMCBpZHM/IFRoZSBVUkwgd291bGQgYmUgdG9vXG4gICAgICAvLyBiaWcsIHNvIHdlIGFyYml0cmFyaWx5IGxpbWl0IGl0IHRvIHRoZSBmaXJzdCAxMDBcbiAgICAgIC8vIFRPRE86IHdlIHNob3VsZCBiZSBhYmxlIHRvIGZpbHRlciBieSB0aGlzLCBubz9cbiAgICAgICxcbiAgICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9PyFpZF9pbj1cIiR7dmFsdWUudmFsdWUuc2xpY2UoMCwgMTAwKS5tYXAoKHtcbiAgICAgICAgaWRcbiAgICAgIH0pID0+IGlkKS5qb2luKCcsJyl9XCJgXG4gICAgfSksIFwiVmlldyByZWxhdGVkIFwiLCBsaXN0LnBsdXJhbCk7XG4gIH1cblxuICByZXR1cm4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgYXM6IHJvdXRlci5MaW5rLFxuICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9LyR7KF92YWx1ZSR2YWx1ZSA9IHZhbHVlLnZhbHVlKSA9PT0gbnVsbCB8fCBfdmFsdWUkdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF92YWx1ZSR2YWx1ZS5pZH1gXG4gIH0pLCBcIlZpZXcgXCIsIGxpc3Quc2luZ3VsYXIsIFwiIGRldGFpbHNcIik7XG59XG5cbmNvbnN0IFJlbGF0aW9uc2hpcExpbmtCdXR0b24gPSAoe1xuICBocmVmLFxuICBjaGlsZHJlblxufSkgPT4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICBjc3M6IHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIGhlaWdodDogJ2F1dG8nXG4gIH0sXG4gIHdlaWdodDogXCJsaW5rXCIsXG4gIHRvbmU6IFwiYWN0aXZlXCIsXG4gIGFzOiByb3V0ZXIuTGluayxcbiAgaHJlZjogaHJlZlxufSwgY2hpbGRyZW4pO1xuXG5jb25zdCBSZWxhdGlvbnNoaXBEaXNwbGF5ID0gKHtcbiAgbGlzdCxcbiAgdmFsdWVcbn0pID0+IHtcbiAgaWYgKHZhbHVlLmtpbmQgPT09ICdtYW55Jykge1xuICAgIGlmICh2YWx1ZS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjb3JlLmpzeChjb3JlLklubGluZSwge1xuICAgICAgICBnYXA6IFwic21hbGxcIlxuICAgICAgfSwgdmFsdWUudmFsdWUubWFwKGkgPT4gY29yZS5qc3goUmVsYXRpb25zaGlwTGlua0J1dHRvbiwge1xuICAgICAgICBocmVmOiBgLyR7bGlzdC5wYXRofS8ke2kuaWR9YFxuICAgICAgfSwgaS5sYWJlbCkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIG51bGwsIFwiKE5vIFwiLCBsaXN0LnBsdXJhbCwgXCIpXCIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAodmFsdWUudmFsdWUpIHtcbiAgICAgIHJldHVybiBjb3JlLmpzeChSZWxhdGlvbnNoaXBMaW5rQnV0dG9uLCB7XG4gICAgICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9LyR7dmFsdWUudmFsdWUuaWR9YFxuICAgICAgfSwgdmFsdWUudmFsdWUubGFiZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwgbnVsbCwgXCIoTm8gXCIsIGxpc3Quc2luZ3VsYXIsIFwiKVwiKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIGF1dG9Gb2N1cyxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBmb3JjZVZhbGlkYXRpb25cbn0pID0+IHtcbiAgY29uc3Qga2V5c3RvbmUgPSBjb250ZXh0LnVzZUtleXN0b25lKCk7XG4gIGNvbnN0IGZvcmVpZ25MaXN0ID0gY29udGV4dC51c2VMaXN0KGZpZWxkLnJlZkxpc3RLZXkpO1xuICBjb25zdCBsb2NhbExpc3QgPSBjb250ZXh0LnVzZUxpc3QoZmllbGQubGlzdEtleSk7XG4gIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgaWYgKHZhbHVlLmtpbmQgPT09ICdjYXJkcy12aWV3Jykge1xuICAgIHJldHVybiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgICBhczogXCJmaWVsZHNldFwiLFxuICAgICAgZ2FwOiBcIm1lZGl1bVwiXG4gICAgfSwgY29yZS5qc3goZmllbGRzLkZpZWxkTGVnZW5kLCBudWxsLCBmaWVsZC5sYWJlbCksIGNvcmUuanN4KENhcmRzLCB7XG4gICAgICBmb3JjZVZhbGlkYXRpb246IGZvcmNlVmFsaWRhdGlvbixcbiAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgIGlkOiB2YWx1ZS5pZCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICAgIGZvcmVpZ25MaXN0OiBmb3JlaWduTGlzdCxcbiAgICAgIGxvY2FsTGlzdDogbG9jYWxMaXN0XG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIHtcbiAgICBhczogXCJsZWdlbmRcIlxuICB9LCBmaWVsZC5sYWJlbCksIG9uQ2hhbmdlID8gY29yZS5qc3goUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwibWVkaXVtXCJcbiAgfSwgY29yZS5qc3godHlwZXNfcmVsYXRpb25zaGlwX3ZpZXdzX1JlbGF0aW9uc2hpcFNlbGVjdF9kaXN0X2ZpZWxkcy5SZWxhdGlvbnNoaXBTZWxlY3QsIHtcbiAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWU6IHRydWUsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgaXNEaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICBsaXN0OiBmb3JlaWduTGlzdCxcbiAgICBzdGF0ZTogdmFsdWUua2luZCA9PT0gJ21hbnknID8ge1xuICAgICAga2luZDogJ21hbnknLFxuICAgICAgdmFsdWU6IHZhbHVlLnZhbHVlLFxuXG4gICAgICBvbkNoYW5nZShuZXdJdGVtcykge1xuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICB2YWx1ZTogbmV3SXRlbXNcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgfSA6IHtcbiAgICAgIGtpbmQ6ICdvbmUnLFxuICAgICAgdmFsdWU6IHZhbHVlLnZhbHVlLFxuXG4gICAgICBvbkNoYW5nZShuZXdWYWwpIHtcbiAgICAgICAgaWYgKHZhbHVlLmtpbmQgPT09ICdvbmUnKSB7XG4gICAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgICB2YWx1ZTogbmV3VmFsXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH0pLCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgYWNyb3NzOiB0cnVlLFxuICAgIGdhcDogXCJzbWFsbFwiXG4gIH0sICFmaWVsZC5oaWRlQ3JlYXRlICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgZGlzYWJsZWQ6IGlzRHJhd2VyT3BlbixcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBzZXRJc0RyYXdlck9wZW4odHJ1ZSk7XG4gICAgfVxuICB9LCBcIkNyZWF0ZSByZWxhdGVkIFwiLCBmb3JlaWduTGlzdC5zaW5ndWxhciksIGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLnN0YXRlID09PSAnYXV0aGVudGljYXRlZCcgJiYga2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0ubGlzdEtleSA9PT0gZmllbGQucmVmTGlzdEtleSAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIGlzRGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgaWYgKGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLnN0YXRlID09PSAnYXV0aGVudGljYXRlZCcpIHtcbiAgICAgICAgY29uc3QgdmFsID0ge1xuICAgICAgICAgIGxhYmVsOiBrZXlzdG9uZS5hdXRoZW50aWNhdGVkSXRlbS5sYWJlbCxcbiAgICAgICAgICBpZDoga2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0uaWRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodmFsdWUua2luZCA9PT0gJ21hbnknKSB7XG4gICAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgICB2YWx1ZTogWy4uLnZhbHVlLnZhbHVlLCB2YWxdXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgdmFsdWUua2luZCA9PT0gJ21hbnknID8gJ0FkZCAnIDogJ1NldCBhcyAnLCBrZXlzdG9uZS5hdXRoZW50aWNhdGVkSXRlbS5sYWJlbCksICEhKHZhbHVlLmtpbmQgPT09ICdtYW55JyA/IHZhbHVlLnZhbHVlLmxlbmd0aCA6IHZhbHVlLmtpbmQgPT09ICdvbmUnICYmIHZhbHVlLnZhbHVlKSAmJiBjb3JlLmpzeChMaW5rVG9SZWxhdGVkSXRlbXMsIHtcbiAgICBsaXN0OiBmb3JlaWduTGlzdCxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSkpKSwgY29yZS5qc3gobW9kYWxzLkRyYXdlckNvbnRyb2xsZXIsIHtcbiAgICBpc09wZW46IGlzRHJhd2VyT3BlblxuICB9LCBjb3JlLmpzeChjb21wb25lbnRzLkNyZWF0ZUl0ZW1EcmF3ZXIsIHtcbiAgICBsaXN0S2V5OiBmb3JlaWduTGlzdC5rZXksXG4gICAgb25DbG9zZTogKCkgPT4ge1xuICAgICAgc2V0SXNEcmF3ZXJPcGVuKGZhbHNlKTtcbiAgICB9LFxuICAgIG9uQ3JlYXRlOiB2YWwgPT4ge1xuICAgICAgc2V0SXNEcmF3ZXJPcGVuKGZhbHNlKTtcblxuICAgICAgaWYgKHZhbHVlLmtpbmQgPT09ICdtYW55Jykge1xuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICB2YWx1ZTogWy4uLnZhbHVlLnZhbHVlLCB2YWxdXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUua2luZCA9PT0gJ29uZScpIHtcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9KSkpIDogY29yZS5qc3goUmVsYXRpb25zaGlwRGlzcGxheSwge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBsaXN0OiBmb3JlaWduTGlzdFxuICB9KSk7XG59O1xuY29uc3QgQ2VsbCA9ICh7XG4gIGZpZWxkLFxuICBpdGVtXG59KSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBjb250ZXh0LnVzZUxpc3QoZmllbGQucmVmTGlzdEtleSk7XG4gIGNvbnN0IGRhdGEgPSBpdGVtW2ZpZWxkLnBhdGhdO1xuICBjb25zdCBpdGVtcyA9IChBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSk7XG4gIGNvbnN0IGRpc3BsYXlJdGVtcyA9IGl0ZW1zLmxlbmd0aCA8IDUgPyBpdGVtcyA6IGl0ZW1zLnNsaWNlKDAsIDMpO1xuICBjb25zdCBvdmVyZmxvdyA9IGl0ZW1zLmxlbmd0aCA8IDUgPyAwIDogaXRlbXMubGVuZ3RoIC0gMztcbiAgY29uc3Qge1xuICAgIGNvbG9yc1xuICB9ID0gY29yZS51c2VUaGVtZSgpO1xuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgY29sb3I6IGNvbG9ycy5mb3JlZ3JvdW5kLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJ1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgZGlzcGxheUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IGNvcmUuanN4KFJlYWN0LkZyYWdtZW50LCB7XG4gICAga2V5OiBpdGVtLmlkXG4gIH0sICEhaW5kZXggPyAnLCAnIDogJycsIGNvcmUuanN4KHJvdXRlci5MaW5rLCB7XG4gICAgaHJlZjogYC8ke2xpc3QucGF0aH0vW2lkXWAsXG4gICAgYXM6IGAvJHtsaXN0LnBhdGh9LyR7aXRlbS5pZH1gLFxuICAgIGNzczogc3R5bGVzXG4gIH0sIGl0ZW0ubGFiZWwgfHwgaXRlbS5pZCkpKSwgb3ZlcmZsb3cgPyBgLCBhbmQgJHtvdmVyZmxvd30gbW9yZWAgOiBudWxsKTtcbn07XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBmaWVsZCxcbiAgaXRlbVxufSkgPT4ge1xuICBjb25zdCBsaXN0ID0gY29udGV4dC51c2VMaXN0KGZpZWxkLnJlZkxpc3RLZXkpO1xuICBjb25zdCBkYXRhID0gaXRlbVtmaWVsZC5wYXRoXTtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgKEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdKS5maWx0ZXIoaXRlbSA9PiBpdGVtKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiBjb3JlLmpzeChSZWFjdC5GcmFnbWVudCwge1xuICAgIGtleTogaXRlbS5pZFxuICB9LCAhIWluZGV4ID8gJywgJyA6ICcnLCBjb3JlLmpzeChyb3V0ZXIuTGluaywge1xuICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9L1tpZF1gLFxuICAgIGFzOiBgLyR7bGlzdC5wYXRofS8ke2l0ZW0uaWR9YFxuICB9LCBpdGVtLmxhYmVsIHx8IGl0ZW0uaWQpKSkpO1xufTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIG1hbnk6IGNvbmZpZy5maWVsZE1ldGEubWFueSxcbiAgICBsaXN0S2V5OiBjb25maWcubGlzdEtleSxcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGRpc3BsYXk6IGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUgPT09ICdjYXJkcycgPyB7XG4gICAgICBtb2RlOiAnY2FyZHMnLFxuICAgICAgY2FyZEZpZWxkczogY29uZmlnLmZpZWxkTWV0YS5jYXJkRmllbGRzLFxuICAgICAgaW5saW5lQ3JlYXRlOiBjb25maWcuZmllbGRNZXRhLmlubGluZUNyZWF0ZSxcbiAgICAgIGlubGluZUVkaXQ6IGNvbmZpZy5maWVsZE1ldGEuaW5saW5lRWRpdCxcbiAgICAgIGxpbmtUb0l0ZW06IGNvbmZpZy5maWVsZE1ldGEubGlua1RvSXRlbSxcbiAgICAgIHJlbW92ZU1vZGU6IGNvbmZpZy5maWVsZE1ldGEucmVtb3ZlTW9kZSxcbiAgICAgIGlubGluZUNvbm5lY3Q6IGNvbmZpZy5maWVsZE1ldGEuaW5saW5lQ29ubmVjdFxuICAgIH0gOiB7XG4gICAgICBtb2RlOiAnc2VsZWN0JyxcbiAgICAgIHJlZkxhYmVsRmllbGQ6IGNvbmZpZy5maWVsZE1ldGEucmVmTGFiZWxGaWVsZFxuICAgIH0sXG4gICAgcmVmTGlzdEtleTogY29uZmlnLmZpZWxkTWV0YS5yZWZMaXN0S2V5LFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUgPT09ICdjYXJkcycgPyAvLyBUT0RPOiBuYW1lc3BhY2UgdGhpcyBzdHVmZiBhdCB0aGUgS2V5c3RvbmUgbGV2ZWxcbiAgICBgJHtjb25maWcucGF0aH1fX2lkOiBpZFxuICAgICAgICAgICAke2NvbmZpZy5wYXRofSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICB9YCA6IGAke2NvbmZpZy5wYXRofSB7XG4gICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICBsYWJlbDogJHtjb25maWcuZmllbGRNZXRhLnJlZkxhYmVsRmllbGR9XG4gICAgICAgICAgIH1gLFxuICAgIGhpZGVDcmVhdGU6IGNvbmZpZy5maWVsZE1ldGEuaGlkZUNyZWF0ZSxcbiAgICBkZWZhdWx0VmFsdWU6IGNvbmZpZy5maWVsZE1ldGEubWFueSA/IHtcbiAgICAgIGtpbmQ6ICdtYW55JyxcbiAgICAgIGluaXRpYWxWYWx1ZTogW10sXG4gICAgICB2YWx1ZTogW11cbiAgICB9IDoge1xuICAgICAga2luZDogJ29uZScsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGluaXRpYWxWYWx1ZTogbnVsbFxuICAgIH0sXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4ge1xuICAgICAgaWYgKGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUgPT09ICdjYXJkcycpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbElkcyA9IG5ldyBTZXQoKEFycmF5LmlzQXJyYXkoZGF0YVtjb25maWcucGF0aF0pID8gZGF0YVtjb25maWcucGF0aF0gOiBkYXRhW2NvbmZpZy5wYXRoXSA/IFtkYXRhW2NvbmZpZy5wYXRoXV0gOiBbXSkubWFwKHggPT4geC5pZCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdjYXJkcy12aWV3JyxcbiAgICAgICAgICBpZDogZGF0YVtgJHtjb25maWcucGF0aH1fX2lkYF0sXG4gICAgICAgICAgaXRlbXNCZWluZ0VkaXRlZDogbmV3IFNldCgpLFxuICAgICAgICAgIGl0ZW1CZWluZ0NyZWF0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGluaXRpYWxJZHMsXG4gICAgICAgICAgY3VycmVudElkczogaW5pdGlhbElkc1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLmZpZWxkTWV0YS5tYW55KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IChkYXRhW2NvbmZpZy5wYXRoXSB8fCBbXSkubWFwKHggPT4gKHtcbiAgICAgICAgICBpZDogeC5pZCxcbiAgICAgICAgICBsYWJlbDogeC5sYWJlbCB8fCB4LmlkXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiAnbWFueScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBsZXQgdmFsdWUgPSBkYXRhW2NvbmZpZy5wYXRoXTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgIGlkOiB2YWx1ZS5pZCxcbiAgICAgICAgICBsYWJlbDogdmFsdWUubGFiZWwgfHwgdmFsdWUuaWRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogJ29uZScsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBpbml0aWFsVmFsdWU6IHZhbHVlXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmtpbmQgIT09ICdjYXJkcy12aWV3JyB8fCB2YWx1ZS5pdGVtc0JlaW5nRWRpdGVkLnNpemUgPT09IDAgJiYgIXZhbHVlLml0ZW1CZWluZ0NyZWF0ZWQ7XG4gICAgfSxcblxuICAgIHNlcmlhbGl6ZTogc3RhdGUgPT4ge1xuICAgICAgaWYgKHN0YXRlLmtpbmQgPT09ICdtYW55Jykge1xuICAgICAgICBjb25zdCBuZXdBbGxJZHMgPSBuZXcgU2V0KHN0YXRlLnZhbHVlLm1hcCh4ID0+IHguaWQpKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbElkcyA9IG5ldyBTZXQoc3RhdGUuaW5pdGlhbFZhbHVlLm1hcCh4ID0+IHguaWQpKTtcbiAgICAgICAgbGV0IGRpc2Nvbm5lY3QgPSBzdGF0ZS5pbml0aWFsVmFsdWUuZmlsdGVyKHggPT4gIW5ld0FsbElkcy5oYXMoeC5pZCkpLm1hcCh4ID0+ICh7XG4gICAgICAgICAgaWQ6IHguaWRcbiAgICAgICAgfSkpO1xuICAgICAgICBsZXQgY29ubmVjdCA9IHN0YXRlLnZhbHVlLmZpbHRlcih4ID0+ICFpbml0aWFsSWRzLmhhcyh4LmlkKSkubWFwKHggPT4gKHtcbiAgICAgICAgICBpZDogeC5pZFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKGRpc2Nvbm5lY3QubGVuZ3RoIHx8IGNvbm5lY3QubGVuZ3RoKSB7XG4gICAgICAgICAgbGV0IG91dHB1dCA9IHt9O1xuXG4gICAgICAgICAgaWYgKGRpc2Nvbm5lY3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBvdXRwdXQuZGlzY29ubmVjdCA9IGRpc2Nvbm5lY3Q7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbm5lY3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBvdXRwdXQuY29ubmVjdCA9IGNvbm5lY3Q7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IG91dHB1dFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUua2luZCA9PT0gJ29uZScpIHtcbiAgICAgICAgdmFyIF9zdGF0ZSRpbml0aWFsVmFsdWU7XG5cbiAgICAgICAgaWYgKHN0YXRlLmluaXRpYWxWYWx1ZSAmJiAhc3RhdGUudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xuICAgICAgICAgICAgICBkaXNjb25uZWN0OiB7XG4gICAgICAgICAgICAgICAgaWQ6IHN0YXRlLmluaXRpYWxWYWx1ZS5pZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS52YWx1ZSAmJiBzdGF0ZS52YWx1ZS5pZCAhPT0gKChfc3RhdGUkaW5pdGlhbFZhbHVlID0gc3RhdGUuaW5pdGlhbFZhbHVlKSA9PT0gbnVsbCB8fCBfc3RhdGUkaW5pdGlhbFZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RhdGUkaW5pdGlhbFZhbHVlLmlkKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB7XG4gICAgICAgICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICAgICAgICBpZDogc3RhdGUudmFsdWUuaWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUua2luZCA9PT0gJ2NhcmRzLXZpZXcnKSB7XG4gICAgICAgIGxldCBkaXNjb25uZWN0ID0gWy4uLnN0YXRlLmluaXRpYWxJZHNdLmZpbHRlcihpZCA9PiAhc3RhdGUuY3VycmVudElkcy5oYXMoaWQpKS5tYXAoaWQgPT4gKHtcbiAgICAgICAgICBpZFxuICAgICAgICB9KSk7XG4gICAgICAgIGxldCBjb25uZWN0ID0gWy4uLnN0YXRlLmN1cnJlbnRJZHNdLmZpbHRlcihpZCA9PiAhc3RhdGUuaW5pdGlhbElkcy5oYXMoaWQpKS5tYXAoaWQgPT4gKHtcbiAgICAgICAgICBpZFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5maWVsZE1ldGEubWFueSkge1xuICAgICAgICAgIGlmIChkaXNjb25uZWN0Lmxlbmd0aCB8fCBjb25uZWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3QubGVuZ3RoID8gY29ubmVjdCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBkaXNjb25uZWN0OiBkaXNjb25uZWN0Lmxlbmd0aCA/IGRpc2Nvbm5lY3QgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29ubmVjdC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xuICAgICAgICAgICAgICBjb25uZWN0OiBjb25uZWN0WzBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXNjb25uZWN0Lmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB7XG4gICAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IGRpc2Nvbm5lY3RbMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIHNlZ21lbnRlZENvbnRyb2wgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvc2VnbWVudGVkLWNvbnRyb2wnKTtcblxuLyogQGpzeCBqc3ggKi9cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgYXV0b0ZvY3VzXG59KSA9PiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGZpZWxkLmRpc3BsYXlNb2RlID09PSAnc2VsZWN0JyA/IGNvcmUuanN4KGZpZWxkcy5TZWxlY3QsIHtcbiAgaXNDbGVhcmFibGU6IHRydWUsXG4gIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICBvcHRpb25zOiBmaWVsZC5vcHRpb25zLFxuICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICBvbkNoYW5nZTogdmFsdWUgPT4ge1xuICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZSh2YWx1ZSk7XG4gIH0sXG4gIHZhbHVlOiB2YWx1ZSxcbiAgcG9ydGFsTWVudTogdHJ1ZVxufSkgOiBjb3JlLmpzeChzZWdtZW50ZWRDb250cm9sLlNlZ21lbnRlZENvbnRyb2wsIHtcbiAgc2VnbWVudHM6IGZpZWxkLm9wdGlvbnMubWFwKHggPT4geC5sYWJlbCksXG4gIHNlbGVjdGVkSW5kZXg6IHZhbHVlID8gZmllbGQub3B0aW9ucy5maW5kSW5kZXgoeCA9PiB4LnZhbHVlID09PSB2YWx1ZS52YWx1ZSkgOiB1bmRlZmluZWQsXG4gIG9uQ2hhbmdlOiBpbmRleCA9PiB7XG4gICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKGZpZWxkLm9wdGlvbnNbaW5kZXhdKTtcbiAgfVxufSkpO1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgdmFyIF9maWVsZCRvcHRpb25zJGZpbmQ7XG5cbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xuICBjb25zdCBsYWJlbCA9IChfZmllbGQkb3B0aW9ucyRmaW5kID0gZmllbGQub3B0aW9ucy5maW5kKHggPT4geC52YWx1ZSA9PT0gdmFsdWUpKSA9PT0gbnVsbCB8fCBfZmllbGQkb3B0aW9ucyRmaW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkb3B0aW9ucyRmaW5kLmxhYmVsO1xuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goY29tcG9uZW50cy5DZWxsTGluaywgbGlua1RvLCBsYWJlbCkgOiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIGxhYmVsKTtcbn07XG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHZhciBfZmllbGQkb3B0aW9ucyRmaW5kMjtcblxuICBjb25zdCBsYWJlbCA9IChfZmllbGQkb3B0aW9ucyRmaW5kMiA9IGZpZWxkLm9wdGlvbnMuZmluZCh4ID0+IHgudmFsdWUgPT09IGl0ZW1bZmllbGQucGF0aF0pKSA9PT0gbnVsbCB8fCBfZmllbGQkb3B0aW9ucyRmaW5kMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ZpZWxkJG9wdGlvbnMkZmluZDIubGFiZWw7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGxhYmVsKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgY29uc3Qgb3B0aW9uc1dpdGhTdHJpbmdWYWx1ZXMgPSBjb25maWcuZmllbGRNZXRhLm9wdGlvbnMubWFwKHggPT4gKHtcbiAgICBsYWJlbDogeC5sYWJlbCxcbiAgICB2YWx1ZTogeC52YWx1ZS50b1N0cmluZygpXG4gIH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkYXRhVHlwZTogY29uZmlnLmZpZWxkTWV0YS5kYXRhVHlwZSxcbiAgICBkaXNwbGF5TW9kZTogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSxcbiAgICBvcHRpb25zOiBvcHRpb25zV2l0aFN0cmluZ1ZhbHVlcyxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBjb25maWcuZmllbGRNZXRhLm9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gZGF0YVtjb25maWcucGF0aF0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5sYWJlbCxcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUudG9TdHJpbmcoKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+IHtcbiAgICAgIHZhciBfdmFsdWUkdmFsdWU7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtjb25maWcucGF0aF06IChfdmFsdWUkdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUudmFsdWUpICE9PSBudWxsICYmIF92YWx1ZSR2YWx1ZSAhPT0gdm9pZCAwID8gX3ZhbHVlJHZhbHVlIDogbnVsbFxuICAgICAgfTtcbiAgICB9LFxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuTXVsdGlTZWxlY3QsIHtcbiAgICAgICAgICBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgb3B0aW9uczogb3B0aW9uc1dpdGhTdHJpbmdWYWx1ZXMsXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWw6ICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlOiBvcHRpb25zXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGludmVydGVkID0gdHlwZSA9PT0gJ25vdF9tYXRjaGVzJztcblxuICAgICAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtgJHtjb25maWcucGF0aH0ke2ludmVydGVkID8gJ19ub3QnIDogJyd9YF06IG51bGxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNNdWx0aSA9IG9wdGlvbnMubGVuZ3RoID4gMTtcbiAgICAgICAgbGV0IGtleSA9IGNvbmZpZy5wYXRoO1xuXG4gICAgICAgIGlmIChpc011bHRpICYmIGludmVydGVkKSB7XG4gICAgICAgICAga2V5ID0gYCR7Y29uZmlnLnBhdGh9X25vdF9pbmA7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgIGtleSA9IGAke2NvbmZpZy5wYXRofV9pbmA7XG4gICAgICAgIH0gZWxzZSBpZiAoaW52ZXJ0ZWQpIHtcbiAgICAgICAgICBrZXkgPSBgJHtjb25maWcucGF0aH1fbm90YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNNdWx0aSA/IG9wdGlvbnMubWFwKHggPT4geC52YWx1ZSkgOiBvcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB0eXBlID09PSAnbm90X21hdGNoZXMnID8gYGlzIHNldGAgOiBgaGFzIG5vIHZhbHVlYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUubWFwKGkgPT4gaS5sYWJlbCkuam9pbignLCAnKTtcbiAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ25vdF9tYXRjaGVzJyA/IGBpcyBub3QgaW4gWyR7dmFsdWVzfV1gIDogYGlzIGluIFske3ZhbHVlc31dYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWVbMF0ubGFiZWw7XG4gICAgICAgIHJldHVybiB0eXBlID09PSAnbm90X21hdGNoZXMnID8gYGlzIG5vdCAke29wdGlvbkxhYmVsfWAgOiBgaXMgJHtvcHRpb25MYWJlbH1gO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgbWF0Y2hlczoge1xuICAgICAgICAgIGxhYmVsOiAnTWF0Y2hlcycsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBbXVxuICAgICAgICB9LFxuICAgICAgICBub3RfbWF0Y2hlczoge1xuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3QgbWF0Y2gnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGF1dG9Gb2N1c1xufSkgPT4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBvbkNoYW5nZSA/IGZpZWxkLmRpc3BsYXlNb2RlID09PSAndGV4dGFyZWEnID8gY29yZS5qc3goZmllbGRzLlRleHRBcmVhLCB7XG4gIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICBvbkNoYW5nZTogZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKSxcbiAgdmFsdWU6IHZhbHVlXG59KSA6IGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gIG9uQ2hhbmdlOiBldmVudCA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpLFxuICB2YWx1ZTogdmFsdWVcbn0pIDogdmFsdWUpO1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goY29tcG9uZW50cy5DZWxsTGluaywgbGlua1RvLCB2YWx1ZSkgOiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIHZhbHVlKTtcbn07XG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bZmllbGQucGF0aF0pO1xufTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXG4gICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICBkaXNwbGF5TW9kZTogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbY29uZmlnLnBhdGhdO1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6ICcnO1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiB2YWx1ZSA9PiAoe1xuICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWVcbiAgICB9KSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIEZpbHRlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWw6ICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHR5cGUgPT09ICdpc19pJyA/IGAke2NvbmZpZy5wYXRofV9pYCA6IGAke2NvbmZpZy5wYXRofV8ke3R5cGV9YDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBba2V5XTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIExhYmVsKHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSB7XG4gICAgICAgIHJldHVybiBgJHtsYWJlbC50b0xvd2VyQ2FzZSgpfTogXCIke3ZhbHVlfVwiYDtcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGNvbnRhaW5zX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0NvbnRhaW5zJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9jb250YWluc19pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBjb250YWluJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGlzX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBleGFjdGx5JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0c193aXRoX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ1N0YXJ0cyB3aXRoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9zdGFydHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBzdGFydCB3aXRoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGVuZHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdFbmRzIHdpdGgnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2VuZHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBlbmQgd2l0aCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGRhdGVGbnMgPSByZXF1aXJlKCdkYXRlLWZucycpO1xudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xuXG5jb25zdCBnZXRUaW1lID0gdGltZVZhbHVlID0+IHtcbiAgaWYgKCF0aW1lVmFsdWUpIHJldHVybiBbMCwgMF07XG4gIHJldHVybiB0aW1lVmFsdWUuc3BsaXQoJzonKS5tYXAobiA9PiBOdW1iZXIobikpO1xufTtcblxuZnVuY3Rpb24gaXNWYWxpZERhdGUoZGF0ZSkge1xuICBpZiAoIWRhdGUpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEJvb2xlYW4oZGF0ZUZucy5wYXJzZUlTTyhkYXRlKS50b0lTT1N0cmluZygpKTtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRUaW1lKHRpbWUpIHtcbiAgaWYgKCF0aW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVGbnMuaXNWYWxpZChkYXRlRm5zLnBhcnNlKHRpbWUsICdISDptbScsIG5ldyBEYXRlKCkpKTtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRJU08odmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyB0b0lTT1N0cmluZyBjb252ZXJ0cyBvdXIgc3RyaW5nIGludG8genVsdSB0aW1lXG4gICAgLy8gaW5zdGVhZCBvZiBjaGVja2luZyBmb3IgdGhlIHRpbWVzdGFtcCB0byBiZSBzcGVjaWZpY2FsbHkgaW4genVsdSB0aW1lXG4gICAgLy8gd2UgcmVsYXggdGhlIHZhbGlkYXRpb24gaGVyZSBhIGxpdHRsZSwgdG8ganVzdCBiZSBhIHZhbGlkIElTTyBzdHJpbmcuXG4gICAgcmV0dXJuIEJvb2xlYW4oZGF0ZUZucy5wYXJzZUlTTyhjb25zdHJ1Y3RUaW1lc3RhbXAodmFsdWUpKS50b0lTT1N0cmluZygpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBjb25zdHJ1Y3RUaW1lc3RhbXAoe1xuICBkYXRlVmFsdWUsXG4gIHRpbWVWYWx1ZVxufSkge1xuICBsZXQgZm9ybWF0dGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGVWYWx1ZSk7XG4gIGNvbnN0IFtob3VycywgbWludXRlc10gPSBnZXRUaW1lKHRpbWVWYWx1ZSk7XG4gIGZvcm1hdHRlZERhdGUuc2V0SG91cnMoaG91cnMpO1xuICBmb3JtYXR0ZWREYXRlLnNldE1pbnV0ZXMobWludXRlcyk7XG4gIHJldHVybiBkYXRlRm5zLmZvcm1hdElTTyhmb3JtYXR0ZWREYXRlKTtcbn1cbmZ1bmN0aW9uIGRlY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZGF0ZVZhbHVlOiB2YWx1ZSxcbiAgICB0aW1lVmFsdWU6IHJlc29sdmVJbml0aWFsVGltZVZhbHVlKHZhbHVlKVxuICB9O1xufVxuZnVuY3Rpb24gZm9ybWF0T3V0cHV0KHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHJldHVybiAnJztcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgcmV0dXJuIGAke2RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCl9ICR7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1gO1xufVxuZnVuY3Rpb24gcmVzb2x2ZUluaXRpYWxUaW1lVmFsdWUodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICBjb25zdCBkYXRlID0gdmFsdWUgfHwgZGVmYXVsdFZhbHVlO1xuICBpZiAoIWRhdGUpIHJldHVybiAnJztcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICBob3VyMTI6IGZhbHNlXG4gIH0pO1xufVxuXG5jb25zdCBUaW1lUGlja2VyID0gKHtcbiAgYXV0b0ZvY3VzLFxuICBvbkJsdXIsXG4gIGRpc2FibGVkLFxuICBvbkNoYW5nZSxcbiAgZm9ybWF0ID0gJzI0aHInLFxuICB2YWx1ZVxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIG1heExlbmd0aDogZm9ybWF0ID09PSAnMjRocicgPyA1IDogNyxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIG9uQmx1cjogb25CbHVyLFxuICAgIHBsYWNlaG9sZGVyOiBmb3JtYXQgPT09ICcyNGhyJyA/ICcwMDowMCcgOiAnMDA6MDBhbScsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pO1xufTtcblxuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBmb3JjZVZhbGlkYXRpb25cbn0pID0+IHtcbiAgY29uc3QgW3RvdWNoZWRGaXJzdElucHV0LCBzZXRUb3VjaGVkRmlyc3RJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3VjaGVkU2Vjb25kSW5wdXQsIHNldFRvdWNoZWRTZWNvbmRJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3dWYWxpZGF0aW9uID0gdG91Y2hlZEZpcnN0SW5wdXQgJiYgdG91Y2hlZFNlY29uZElucHV0IHx8IGZvcmNlVmFsaWRhdGlvbjtcblxuICBjb25zdCBzaG93RGF0ZUVycm9yID0gZGF0ZVZhbHVlID0+IHtcbiAgICBpZiAoIWRhdGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICAgIH1cbiAgICAgIH0sIFwiUGxlYXNlIHNlbGVjdCBhIGRhdGUgdmFsdWUuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNWYWxpZERhdGUoZGF0ZVZhbHVlKSAmJiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgICBjc3M6IHtcbiAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICB9XG4gICAgfSwgXCJJbmNvcnJlY3QgZGF0ZSB2YWx1ZVwiKTtcbiAgfTtcblxuICBjb25zdCBzaG93VGltZUVycm9yID0gdGltZVZhbHVlID0+IHtcbiAgICBpZiAoIXRpbWVWYWx1ZSkge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICAgIH1cbiAgICAgIH0sIFwiUGxlYXNlIHNlbGVjdCBhIHRpbWUgdmFsdWUuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNWYWxpZFRpbWUodGltZVZhbHVlKSAmJiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgICBjc3M6IHtcbiAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICB9XG4gICAgfSwgXCJUaW1lIG11c3QgYmUgaW4gdGhlIGZvcm0gSEg6bW1cIik7XG4gIH07XG5cbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBjb3JlLmpzeChjb3JlLlN0YWNrLCBudWxsLCBjb3JlLmpzeChjb3JlLklubGluZSwge1xuICAgIGdhcDogXCJzbWFsbFwiXG4gIH0sIGNvcmUuanN4KGNvcmUuU3RhY2ssIG51bGwsIGNvcmUuanN4KGZpZWxkcy5EYXRlUGlja2VyLCB7XG4gICAgb25VcGRhdGU6IGRhdGUgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGRhdGVWYWx1ZTogZGF0ZSB8fCAnJ1xuICAgICAgfSkpO1xuICAgIH0sXG4gICAgb25DbGVhcjogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGRhdGVWYWx1ZTogJydcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIG9uQmx1cjogKCkgPT4gc2V0VG91Y2hlZEZpcnN0SW5wdXQodHJ1ZSksXG4gICAgdmFsdWU6IHZhbHVlLmRhdGVWYWx1ZVxuICB9KSwgc2hvd1ZhbGlkYXRpb24gJiYgc2hvd0RhdGVFcnJvcih2YWx1ZS5kYXRlVmFsdWUpKSwgY29yZS5qc3goY29yZS5TdGFjaywgbnVsbCwgY29yZS5qc3goVGltZVBpY2tlciwge1xuICAgIG9uQmx1cjogKCkgPT4gc2V0VG91Y2hlZFNlY29uZElucHV0KHRydWUpLFxuICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIGZvcm1hdDogXCIyNGhyXCIsXG4gICAgb25DaGFuZ2U6IGV2ZW50ID0+IG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgdGltZVZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KSksXG4gICAgdmFsdWU6IHZhbHVlLnRpbWVWYWx1ZSB8fCAnJ1xuICB9KSwgc2hvd1ZhbGlkYXRpb24gJiYgc2hvd1RpbWVFcnJvcih2YWx1ZS50aW1lVmFsdWUpKSkpIDogaXNWYWxpZElTTyh2YWx1ZSkgPyBmb3JtYXRPdXRwdXQoY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKSkgOiAnJyk7XG59O1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXTtcbiAgcmV0dXJuIGxpbmtUbyA/IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbExpbmssIGxpbmtUbywgZm9ybWF0T3V0cHV0KHZhbHVlKSkgOiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIGZvcm1hdE91dHB1dCh2YWx1ZSkpO1xufTtcbkNlbGwuc3VwcG9ydHNMaW5rVG8gPSB0cnVlO1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgaXRlbVtmaWVsZC5wYXRoXSk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcucGF0aCxcbiAgICBkZWZhdWx0VmFsdWU6IHtcbiAgICAgIGRhdGVWYWx1ZTogJycsXG4gICAgICB0aW1lVmFsdWU6ICcnXG4gICAgfSxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbY29uZmlnLnBhdGhdO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZVZhbHVlOiAnJyxcbiAgICAgICAgdGltZVZhbHVlOiAnJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogKHtcbiAgICAgIGRhdGVWYWx1ZSxcbiAgICAgIHRpbWVWYWx1ZVxuICAgIH0pID0+IHtcbiAgICAgIGlmIChkYXRlVmFsdWUgJiYgdGltZVZhbHVlICYmIGlzVmFsaWRJU08oe1xuICAgICAgICBkYXRlVmFsdWUsXG4gICAgICAgIHRpbWVWYWx1ZVxuICAgICAgfSkpIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBjb25zdHJ1Y3RUaW1lc3RhbXAoe1xuICAgICAgICAgIGRhdGVWYWx1ZSxcbiAgICAgICAgICB0aW1lVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2NvbmZpZy5wYXRoXTogZm9ybWF0dGVkRGF0ZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBbY29uZmlnLnBhdGhdOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB2YWxpZGF0ZSh7XG4gICAgICBkYXRlVmFsdWUsXG4gICAgICB0aW1lVmFsdWVcbiAgICB9KSB7XG4gICAgICBpZiAoIWRhdGVWYWx1ZSAmJiAhdGltZVZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICghZGF0ZVZhbHVlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoIXRpbWVWYWx1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGlzVmFsaWRJU08oe1xuICAgICAgICBkYXRlVmFsdWUsXG4gICAgICAgIHRpbWVWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxuXG52YXIgUmVhY3RfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0KFJlYWN0KTtcblxuLy8gYnV0IEknZCBsaWtlIHRvIHByZXNlbnQgaXQgYXMgYmVzdCBhcyBwb3NzaWJsZS5cbi8vIFRvRG86IEJldHRlciBwcmVzZW50YXRpb24gZm9yIG1vcmUgdHlwZXMgb2YgZGF0YVxuXG5jb25zdCBzdHJpbmdpZnkgPSBkYXRhID0+IHtcbiAgY29uc3Qgb21pdFR5cGVuYW1lID0gKGtleSwgdmFsdWUpID0+IGtleSA9PT0gJ19fdHlwZW5hbWUnID8gdW5kZWZpbmVkIDogdmFsdWU7XG5cbiAgY29uc3QgZGF0YVdpdGhvdXRUeXBlbmFtZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSksIG9taXRUeXBlbmFtZSk7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhV2l0aG91dFR5cGVuYW1lLCBudWxsLCAyKTtcbn07XG5cbmZ1bmN0aW9uIFByZXR0eURhdGEoe1xuICBkYXRhXG59KSB7XG4gIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG4gIGxldCBwcmV0dHlEYXRhID0gJyc7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHByZXR0eURhdGEgPSBkYXRhO2Vsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykgcHJldHR5RGF0YSA9IGRhdGE7ZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgcHJldHR5RGF0YSA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXCJwcmVcIiwgbnVsbCwgc3RyaW5naWZ5KGRhdGEpKTtcbiAgfSBlbHNlIHtcbiAgICBwcmV0dHlEYXRhID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0WydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcInByZVwiLCBudWxsLCBzdHJpbmdpZnkoZGF0YSkpO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBwcmV0dHlEYXRhKTtcbn1cblxuLyogQGpzeCBqc3ggKi9cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlXG59KSA9PiB2YWx1ZSA9PT0gY3JlYXRlVmlld1ZhbHVlID8gbnVsbCA6IGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgY29yZS5qc3goUHJldHR5RGF0YSwge1xuICBkYXRhOiB2YWx1ZVxufSkpO1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChQcmV0dHlEYXRhLCB7XG4gICAgZGF0YTogaXRlbVtmaWVsZC5wYXRoXVxuICB9KTtcbn07XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBjb3JlLmpzeChQcmV0dHlEYXRhLCB7XG4gICAgZGF0YTogaXRlbVtmaWVsZC5wYXRoXVxuICB9KSk7XG59O1xuY29uc3QgY3JlYXRlVmlld1ZhbHVlID0gU3ltYm9sKCdjcmVhdGUgdmlldyB2aXJ0dWFsIGZpZWxkIHZhbHVlJyk7XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGAke2NvbmZpZy5wYXRofSR7Y29uZmlnLmZpZWxkTWV0YS5ncmFwaFFMUmV0dXJuRnJhZ21lbnR9YCxcbiAgICBkZWZhdWx0VmFsdWU6IGNyZWF0ZVZpZXdWYWx1ZSxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICByZXR1cm4gZGF0YVtjb25maWcucGF0aF07XG4gICAgfSxcbiAgICBzZXJpYWxpemU6ICgpID0+ICh7fSlcbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgS2V5c3RvbmVQcm92aWRlciB9IGZyb20gJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbnRleHQnO1xuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gJ0BrZXlzdG9uZS11aS9jb3JlJztcblxuaW1wb3J0ICogYXMgdmlld2QyZjFmYmIzIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvbW9uZ29JZC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3OWJlYzM0MTIgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90ZXh0L3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXdlYzMwMmYxZSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3Bhc3N3b3JkL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXdhMGUwMDU1YSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3NzVjZjM1M2YgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90aW1lc3RhbXAvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlld2Q3NWE1OTNmIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvc2VsZWN0L3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXcyZDE0MzRlYyBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL2ludGVnZXIvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlld2NhMTQ4MjBjIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9jbG91ZGluYXJ5L3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXdjYjAxMWJiNyBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3ZpcnR1YWwvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlld2RjMTA5OGE2IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvY2hlY2tib3gvdmlld3MnO1xuXG5jb25zdCBhZG1pbkNvbmZpZyA9IHt9O1xuXG5jb25zdCBmaWVsZFZpZXdzID0ge1xuICB2aWV3ZDJmMWZiYjMsXG4gIHZpZXc5YmVjMzQxMixcbiAgdmlld2VjMzAyZjFlLFxuICB2aWV3YTBlMDA1NWEsXG4gIHZpZXc3NWNmMzUzZixcbiAgdmlld2Q3NWE1OTNmLFxuICB2aWV3MmQxNDM0ZWMsXG4gIHZpZXdjYTE0ODIwYyxcbiAgdmlld2NiMDExYmI3LFxuICB2aWV3ZGMxMDk4YTYsXG59O1xuXG5jb25zdCBsYXp5TWV0YWRhdGFRdWVyeSA9IHtcbiAga2luZDogJ0RvY3VtZW50JyxcbiAgZGVmaW5pdGlvbnM6IFtcbiAgICB7XG4gICAgICBraW5kOiAnT3BlcmF0aW9uRGVmaW5pdGlvbicsXG4gICAgICBvcGVyYXRpb246ICdxdWVyeScsXG4gICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgIHZhbHVlOiAna2V5c3RvbmUnLFxuICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDIyLCBlbmQ6IDMwIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2FkbWluTWV0YScsXG4gICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMzksIGVuZDogNDggfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbGlzdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDU5LCBlbmQ6IDY0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2tleScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNzcsIGVuZDogODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDc3LCBlbmQ6IDgwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnaXNIaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDkxLCBlbmQ6IDk5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA5MSwgZW5kOiA5OSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpZWxkcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTEwLCBlbmQ6IDExNiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdwYXRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMzEsIGVuZDogMTM1IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMzEsIGVuZDogMTM1IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnY3JlYXRlVmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTQ4LCBlbmQ6IDE1OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdmaWVsZE1vZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE3NSwgZW5kOiAxODQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE3NSwgZW5kOiAxODQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE1OSwgZW5kOiAxOTggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE0OCwgZW5kOiAxOTggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDExNywgZW5kOiAyMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDExMCwgZW5kOiAyMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDY1LCBlbmQ6IDIyMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNTksIGVuZDogMjIwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA0OSwgZW5kOiAyMjggfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDM5LCBlbmQ6IDIyOCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMzEsIGVuZDogMjM0IH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAyMiwgZW5kOiAyMzQgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICBuYW1lOiB7IGtpbmQ6ICdOYW1lJywgdmFsdWU6ICdhdXRoZW50aWNhdGVkSXRlbScgfSxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtpbmQ6ICdJbmxpbmVGcmFnbWVudCcsXG4gICAgICAgICAgICAgICAgICB0eXBlQ29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lZFR5cGUnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB7IGtpbmQ6ICdOYW1lJywgdmFsdWU6ICdVc2VyJyB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgIHsga2luZDogJ0ZpZWxkJywgbmFtZTogeyBraW5kOiAnTmFtZScsIHZhbHVlOiAnaWQnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IGtpbmQ6ICdGaWVsZCcsIG5hbWU6IHsga2luZDogJ05hbWUnLCB2YWx1ZTogJ25hbWUnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29yZT5cbiAgICAgIDxLZXlzdG9uZVByb3ZpZGVyXG4gICAgICAgIGFkbWluQ29uZmlnPXthZG1pbkNvbmZpZ31cbiAgICAgICAgYWRtaW5NZXRhSGFzaD1cIjF4bnE3eXJcIlxuICAgICAgICBmaWVsZFZpZXdzPXtmaWVsZFZpZXdzfVxuICAgICAgICBsYXp5TWV0YWRhdGFRdWVyeT17bGF6eU1ldGFkYXRhUXVlcnl9XG4gICAgICA+XG4gICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgPC9LZXlzdG9uZVByb3ZpZGVyPlxuICAgIDwvQ29yZT5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpLXV0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2Fwb2xsb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9idXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ZpZWxkc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllT2ZmSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvWEljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2xvYWRpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL21vZGFsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvcGlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvc2VnbWVudGVkLWNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL3RvYXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS90b29sdGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhc3QtZGVlcC1lcXVhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==