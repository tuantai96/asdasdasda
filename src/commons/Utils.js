/**
 * Escape HTML (anti XSS attack)
 * @param { string } str html string
 */
const escapeHTML = (str) => {
    str.replace(
        /[&<>'"]/g,
        (tag) =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;',
            }[tag] || tag)
    );
};

/**
 * Random integer in range
 * @param { number } min
 * @param { number } max
 */
const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Random hex colorcode
 * @param { number } ms miliseconds
 */
const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

/**
 * Random rgba colorcode
 * @param { number } alpha opacity
 */
const randomRPGA = (alpha) => {
    if (typeof alpha === 'undefined') {
        alpha = 1;
    }
    let o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + alpha + ')';
};

/**
 * Detect mobile / PC devices
 */
const detectDeviceType = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ? 'Mobile'
        : 'Desktop';
};

/**
 * @param { string } str String to be converted
 * @param { number } type 1-All capital 2 - all lowercase 3 - initial capital other - no conversion
 */
function turnCase(str, type) {
    switch (type) {
        case 1:
            return str.toUpperCase();
        case 2:
            return str.toLowerCase();
        case 3:
            return str[0].toUpperCase() + str.substr(1).toLowerCase();
        default:
            return str;
    }
}

/**
 * format miliseconds to readable in english
 * @param { number } ms miliseconds
 */
const formatDurationEnglish = (ms) => {
    if (ms < 0) ms = -ms;
    const time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 3600000) % 24,
        minute: Math.floor(ms / 60000) % 60,
        second: Math.floor(ms / 1000) % 60,
        millisecond: Math.floor(ms) % 1000,
    };
    return Object.entries(time)
        .filter((val) => val[1] !== 0)
        .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
        .join(', ');
};

/**
 * format miliseconds to readable in vietnamese
 * @param { number } ms miliseconds
 */
const formatDurationVietnamese = (ms) => {
    if (ms < 0) ms = -ms;
    const time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 3600000) % 24,
        minute: Math.floor(ms / 60000) % 60,
        second: Math.floor(ms / 1000) % 60,
        millisecond: Math.floor(ms) % 1000,
    };

    const timeVietnamese = {
        day: 'Ngày',
        hour: 'Giờ',
        minute: 'Phút',
        second: 'Giây',
        millisecond: 'Mili giây',
    };
    return Object.entries(time)
        .filter((val) => val[1] !== 0)
        .map(([key, val]) => `${val} ${timeVietnamese[key]}`)
        .join(', ');
};

/**
 * sort array by date
 * @param { object } data
 * @param { string } field
 * @param { number } reverse 0: asc, 1: desc
 */
const sortByDate = (data, field, reverse = 1) => {
    let result = data;
    if (data && data.length) {
        result = data.sort((d1, d2) => {
            let date1 = new Date(d1[field] || '');
            let date2 = new Date(d2[field] || '');
            return (date1 ? date1.getTime() : 0) - (date2 ? date2.getTime() : 0) > 0 ? reverse : reverse * -1;
        });
    }
    return result;
};

/**
 * get URL parameters in object from url
 * @param { string } url
 */
const getURLParameters = (url) =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
        {}
    );

/**
 * merge 2 objects
 * @param { object } a
 * @param { object } b
 */
const mergeObjects = (a, b) => {
    if (!a) {
        return a || {};
    }
    if (!b) {
        return b || {};
    }
    return {...a, ...b};
};

/**
 * merge 2 arrays
 * @param { object } a
 * @param { object } b
 */
const combineArray = (a, b) => {
    let result = Array.isArray(a) ? [...a] : [a];
    if (Array.isArray(b)) {
        result = [...result, ...b];
    } else {
        result.push(b);
    }
    return result;
};

/**
 * find first item by value of the field
 * @param { object } array
 * @param { string } field
 * @param { string } value
 */
const getItemByFieldValue = (array, field, value) => {
    const result = array.find((obj) => {
        return obj[field] === value;
    });
    return result;
};

/**
 *  check string is empty
 * @param { string } text
 */
const isEmpty = (text) => {
    return !text || `${text}`.trim().length === 0;
};

/**
 * validate email
 * @param { string } text
 */
const isEmail = (text) => {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(text).toLowerCase());
};

/**
 * validate url
 * @param { string } text
 */
const isUrl = (text) => {
    const regex =
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return regex.test(text);
};

/**
 * auto add http protocol to url
 * @param { string } url
 */
const addHttp = (url) => {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = 'http://' + url;
    }
    return url;
};

/**
 * validate password: contain at least 1 lowercase character, 1 upppercase character, 1 number, 1 special character !@#$%^&* and min length is 8 characters
 * @param { string } password
 */
const validPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return regex.test(password);
};

/**
 * generate tree from flat array
 * @param { object } data
 * @param { object } options { idKey: 'id', parentKey: 'parentId', childrenKey: 'children' }
 */
function arrayToTree(data, options) {
    options = options || {};
    const ID_KEY = options.idKey || 'id';
    const PARENT_KEY = options.parentKey || 'parentId';
    const CHILDREN_KEY = options.childrenKey || 'children';

    let map = {};
    for (let i = 0; i < data.length; i++) {
        if (data[i][ID_KEY]) {
            map[data[i][ID_KEY]] = data[i];
            data[i][CHILDREN_KEY] = [];
        }
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i][PARENT_KEY]) {
            // is a child
            if (map[data[i][PARENT_KEY]]) {
                // for dirty data
                map[data[i][PARENT_KEY]][CHILDREN_KEY].push(data[i]); // add child to parent
                data.splice(i, 1); // remove from root
                i--; // iterator correction
            } else {
                data[i][PARENT_KEY] = 0; // clean dirty data
            }
        }
    }
    return data;
}

function convertToVueTree(data, keyName, labelName, dataName, iconName, childrenName) {
    if (typeof data == 'object') {
        if (Array.isArray(data)) {
            data = data.map((item) => {
                let newItem = {
                    key: item[keyName],
                    label: item[labelName],
                    data: item[dataName],
                    icon: '',
                    children: convertToVueTree(item[childrenName], keyName, labelName, dataName, iconName, childrenName),
                    leaf: false,
                };
                return newItem;
            });
        } else {
            data = {
                key: data[keyName],
                label: data[labelName],
                data: data[dataName],
                icon: '',
                children: convertToVueTree(data[childrenName], keyName, labelName, dataName, iconName, childrenName),
                leaf: false,
            };
        }
    }

    return data;
}

function convertToVueTreeTable(data, lazy, keyName, object, childrenName) {
    if (typeof data == 'object') {
        if (!Array.isArray(data)) {
            data = [data];
        }
        data = data.map((item) => {
            return {
                key: item[keyName],
                data: object.reduce((acc, key) => (acc[key] = item[key], acc), {}),
                children: item[childrenName] ? convertToVueTreeTable(item[childrenName], lazy, keyName, object, childrenName) : [],
                leaf: lazy ? false : !(item[childrenName] && item[childrenName].length)
            };
        });
    }

    return data;
}

const findItemNested = (array, key, value, nestingKey = 'children') =>
    array.reduce((a, item) => {
        if (a) return a;
        if (item[key] === value) return item;
        if (item[nestingKey]) return findItemNested(item[nestingKey], key, value, nestingKey);
    }, null);

function updateNestedArrayById(data, id, newItem, idKey, childrenKey = 'children') {
    if (Array.isArray(data)) {
        data = data.map((item) => {
            return updateNestedArrayById(item, id, newItem, idKey);
        });
    }
    if (data[idKey] == id) {
        data = newItem;
    }
    if (data[childrenKey] !== undefined && data[childrenKey].length > 0) {
        for (let i = 0; i < data[childrenKey].length; i++) {
            data[childrenKey][i] = updateNestedArrayById(data[childrenKey][i], id, newItem, idKey);
        }
    }

    return data;
}

// function removeNestedArrayById(array, id, idKey, childrenKey) {
//   return array
//     .filter((el) => el[idKey] !== id)
//     .map((el) => {
//       if (!el[childrenKey] || !Array.isArray(el[childrenKey])) return el;
//       el[childrenKey] = removeNestedArrayById(el[childrenKey], id);
//       return el;
//     });
// }

function removeNestedArrayById(array, id, idKey, childrenKey) {
    return array
        .map((item) => {
            return {...item};
        })
        .filter((item) => {
            if (childrenKey in item) {
                item[childrenKey] = removeNestedArrayById(item[childrenKey], id, idKey, childrenKey);
            }
            return item[idKey] !== id;
        });
}

const moveItemNestedArray = (data, fromId, toId, idKey, childrenKey) => {
    const search = (array) =>
        array.some((o, index) => {
            if (o[idKey] === fromId) source = {array, index};
            else if (o[idKey] === toId) target = o;
            return (source && target) || search(o[childrenKey]);
        });
    let source, target;

    if (!search(data)) return;
    target[childrenKey].push(...source.array.splice(source.index, 1));
};

function getKeyByValue(object, value) {
    return object ? Object.keys(object).find((key) => object[key] === value) : null;
}

function clone(from) {
    let to = undefined;
    if (from == null || typeof from != 'object') return from;
    if (from.constructor !== Object && from.constructor !== Array) return from;
    if (
        from.constructor === Date ||
        from.constructor === RegExp ||
        from.constructor === Function ||
        from.constructor === String ||
        from.constructor === Number ||
        from.constructor === Boolean
    )
        return new from.constructor(from);

    to = new from.constructor();

    for (let name in from) {
        to[name] = typeof to[name] == 'undefined' ? clone(from[name], null) : to[name];
    }

    return to;
}

function objectDataToQueryString(obj) {
    let str = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
    }
    return str.join('&');
}

function validateCode(code) {
    const regex = /^\w+$/;
    if (!regex.test(code)) {
        return false;
    }
    return true;
}

// function groupArrayByMultipleKeys(array, idKey, keys, arrayKey) {
//     return array.reduce(function (res, currentValue) {
//         if (res.findIndex((item) => {
//             return keys.some((itm) => {
//                 return item[itm] === currentValue[itm];
//             });
//         }) === -1) {
//
//             res.push(keys.reduce((arr, cur) => {
//                 arr[cur] = currentValue[cur]
//                 return arr;
//             }, {}));
//         }
//         return res;
//     }, []).map(function (group) {
//         return {
//             ...group,
//             [arrayKey]: array.filter(function (_el) {
//                 return _el[idKey] === group[idKey];
//             }).map(function (_el) {
//                 const {, ...el} = _el;
//                 return el;
//             })
//         }
//     });
// }

export {
    escapeHTML,
    randomHexColorCode,
    randomInteger,
    randomRPGA,
    detectDeviceType,
    turnCase,
    formatDurationEnglish,
    formatDurationVietnamese,
    sortByDate,
    getURLParameters,
    mergeObjects,
    combineArray,
    getItemByFieldValue,
    isEmpty,
    isEmail,
    isUrl,
    addHttp,
    validPassword,
    arrayToTree,
    convertToVueTree,
    convertToVueTreeTable,
    findItemNested,
    updateNestedArrayById,
    moveItemNestedArray,
    removeNestedArrayById,
    clone,
    getKeyByValue,
    objectDataToQueryString,
    validateCode
};
