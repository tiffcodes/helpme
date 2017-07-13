module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "globals": {
        "document": true,
        "window": true,
        "describe": true,
        "it": true
    },
    "rules": {
        "no-underscore-dangle": ["error", {"allow": ["__REDUX_DEVTOOLS_EXTENSION__"]}],
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "arrow-body-style": 0,
        "react/forbid-prop-types": [1, { forbid: ['object'] }],
        "react/prop-types": 0,
        "react/no-array-index-key": 0,
        "no-console": 0,
        "no-console": ["error", { allow: ["warn", "error", "log"] }],
        "no-underscore-dangle": 0
    }
};
