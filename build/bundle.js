/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItems = [{ id: 'own_credentials', display: 'My Credentials' }, { id: 'shared_with_me', display: 'Shared with Me' }];

var Dashboard = function (_React$Component) {
    _inherits(Dashboard, _React$Component);

    function Dashboard() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dashboard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call.apply(_ref, [this].concat(args))), _this), Object.defineProperty(_this, 'onSelectedMenu', {
            enumerable: true,
            writable: true,
            value: function value(selectedMenu) {
                _this.setState({
                    selectedMenu: selectedMenu,
                    selectedCredentialIndex: null
                });
            }
        }), Object.defineProperty(_this, 'onSelectedCredential', {
            enumerable: true,
            writable: true,
            value: function value(index) {
                _this.setState({
                    selectedCredentialIndex: index
                });
            }
        }), Object.defineProperty(_this, 'onShareInput', {
            enumerable: true,
            writable: true,
            value: function value(_value) {
                var _this$state = _this.state,
                    data = _this$state.data,
                    selectedMenu = _this$state.selectedMenu,
                    selectedCredentialIndex = _this$state.selectedCredentialIndex;


                var _data = _.cloneDeep(data);
                _data[selectedMenu][selectedCredentialIndex].borrower_user_id = _value;

                _this.setState({
                    data: _data
                });
            }
        }), Object.defineProperty(_this, 'onDelete', {
            enumerable: true,
            writable: true,
            value: function value() {
                var _this$state2 = _this.state,
                    data = _this$state2.data,
                    selectedMenu = _this$state2.selectedMenu,
                    selectedCredentialIndex = _this$state2.selectedCredentialIndex;


                var _data = _.cloneDeep(data);
                _data[selectedMenu].splice(selectedCredentialIndex, 1);

                _this.setState({
                    data: _data,
                    selectedCredentialIndex: null
                });
            }
        }), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dashboard, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                data: this.props.data, // initialize the state with mock data
                selectedMenu: MenuItems[0].id,
                selectedCredentialIndex: null
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                data = _state.data,
                selectedMenu = _state.selectedMenu,
                selectedCredentialIndex = _state.selectedCredentialIndex;


            var selectedCredential = selectedCredentialIndex ? data[selectedMenu][selectedCredentialIndex] : null;

            return React.createElement(
                'div',
                { className: 'Dashboard' },
                React.createElement(MainMenu, {
                    onSelectedMenu: this.onSelectedMenu,
                    selectedMenu: selectedMenu
                }),
                React.createElement(CredentialList, {
                    credentials: data[selectedMenu],
                    onSelectedCredential: this.onSelectedCredential
                }),
                React.createElement(CredentialDetails, {
                    selectedCredential: selectedCredential,
                    isDeletable: selectedMenu === 'own_credentials',
                    onDelete: this.onDelete,
                    isSharable: selectedMenu === 'own_credentials',
                    onShareInput: this.onShareInput
                })
            );
        }
    }]);

    return Dashboard;
}(React.Component);

var MainMenu = function (_React$Component2) {
    _inherits(MainMenu, _React$Component2);

    function MainMenu() {
        var _ref2;

        var _temp2, _this2, _ret2;

        _classCallCheck(this, MainMenu);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).call.apply(_ref2, [this].concat(args))), _this2), Object.defineProperty(_this2, 'onClick', {
            enumerable: true,
            writable: true,
            value: function value(e) {
                _this2.props.onSelectedMenu(e.currentTarget.dataset.id);
            }
        }), _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(MainMenu, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                { className: 'MainMenu' },
                MenuItems.map(function (item) {
                    var classname = _this3.props.selectedMenu === item.id ? 'selected' : null;
                    return React.createElement(
                        'div',
                        {
                            key: item.id,
                            'data-id': item.id,
                            onClick: _this3.onClick,
                            className: classname
                        },
                        item.display
                    );
                })
            );
        }
    }]);

    return MainMenu;
}(React.Component);

var CredentialList = function (_React$Component3) {
    _inherits(CredentialList, _React$Component3);

    function CredentialList() {
        var _ref3;

        var _temp3, _this4, _ret3;

        _classCallCheck(this, CredentialList);

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return _ret3 = (_temp3 = (_this4 = _possibleConstructorReturn(this, (_ref3 = CredentialList.__proto__ || Object.getPrototypeOf(CredentialList)).call.apply(_ref3, [this].concat(args))), _this4), Object.defineProperty(_this4, 'onClick', {
            enumerable: true,
            writable: true,
            value: function value(e) {
                _this4.props.onSelectedCredential(e.currentTarget.dataset.id);
            }
        }), _temp3), _possibleConstructorReturn(_this4, _ret3);
    }

    _createClass(CredentialList, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            var credentials = this.props.credentials;


            if (_.isEmpty(credentials)) {
                return React.createElement(
                    'div',
                    { className: 'CredentialList' },
                    'This list is empty'
                );
            }

            return React.createElement(
                'div',
                { className: 'CredentialList' },
                credentials.map(function (credentials, index) {
                    return React.createElement(
                        'div',
                        {
                            key: index,
                            'data-id': index,
                            onClick: _this5.onClick,
                            className: 'CredentialList__item'
                        },
                        React.createElement(
                            'div',
                            { className: 'website_title' },
                            credentials.website
                        ),
                        React.createElement(
                            'div',
                            null,
                            credentials.username
                        ),
                        credentials.borrower_user_id ? React.createElement(
                            'div',
                            { className: 'CredentialList__shared' },
                            'Shared'
                        ) : null
                    );
                })
            );
        }
    }]);

    return CredentialList;
}(React.Component);

var CredentialDetails = function (_React$Component4) {
    _inherits(CredentialDetails, _React$Component4);

    function CredentialDetails() {
        var _ref4;

        var _temp4, _this6, _ret4;

        _classCallCheck(this, CredentialDetails);

        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        return _ret4 = (_temp4 = (_this6 = _possibleConstructorReturn(this, (_ref4 = CredentialDetails.__proto__ || Object.getPrototypeOf(CredentialDetails)).call.apply(_ref4, [this].concat(args))), _this6), Object.defineProperty(_this6, 'onShareInput', {
            enumerable: true,
            writable: true,
            value: function value(e) {
                _this6.props.onShareInput(e.target.value);
            }
        }), _temp4), _possibleConstructorReturn(_this6, _ret4);
    }

    _createClass(CredentialDetails, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                selectedCredential = _props.selectedCredential,
                isDeletable = _props.isDeletable,
                onDelete = _props.onDelete,
                isSharable = _props.isSharable;


            if (!selectedCredential) {
                return null;
            }

            var website = selectedCredential.website,
                username = selectedCredential.username,
                lender_user_id = selectedCredential.lender_user_id,
                borrower_user_id = selectedCredential.borrower_user_id;


            return React.createElement(
                'div',
                { className: 'CredentialDetails' },
                React.createElement(
                    'div',
                    { className: 'website_title' },
                    website
                ),
                React.createElement(
                    'div',
                    null,
                    username
                ),
                isSharable ? React.createElement(
                    'div',
                    { className: 'CredentialDetails_sharing' },
                    React.createElement(
                        'label',
                        null,
                        'Share with:'
                    ),
                    React.createElement('input', {
                        type: 'text',
                        value: borrower_user_id || '',
                        onChange: this.onShareInput }),
                    React.createElement(
                        'div',
                        null,
                        '(Leave blank to stop sharing)'
                    )
                ) : null,
                isDeletable ? React.createElement(
                    'button',
                    {
                        className: 'CredentialDetails__delete-button',
                        onClick: onDelete
                    },
                    'Delete'
                ) : null
            );
        }
    }]);

    return CredentialDetails;
}(React.Component);

var mungeData = function mungeData(data) {
    // merge shared_with_others into own_credentials
    var _data = _.cloneDeep(data);

    _data.shared_with_others.map(function (shared_credential) {
        _data.own_credentials.map(function (own_credential, index) {
            if (own_credential.website === shared_credential.website && own_credential.username === shared_credential.username) {
                own_credential.borrower_user_id = shared_credential.borrower_user_id;
            }
        });
    });

    delete _data.shared_with_others;

    return _data;
};

// load the initial data
axios.get('data/initial_data.json').then(function (response) {
    ReactDOM.render(React.createElement(Dashboard, {
        data: mungeData(response.data)
    }), document.getElementById('root'));
}).catch(function (error) {
    console.log(error);
});

/***/ })
/******/ ]);