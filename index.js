module.exports = {
    "env": {
        "browser": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react-hooks/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": [
            "./**/tsconfig.json"
        ]
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "import",
        "simple-import-sort",
        "unused-imports"
    ],
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [
                ".ts",
                ".tsx"
            ]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true
            }
        }
    },
    "rules": {
        "react/react-in-jsx-scope": [0],
        // "@typescript-eslint/no-non-null-assertion": [0],
        "unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"warn",
			{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
		],
        "react/prop-types": [0],
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "@typescript-eslint/type-annotation-spacing": [
            "error"
        ],
        "@typescript-eslint/strict-boolean-expressions": [
            "error"
        ],
        "@typescript-eslint/promise-function-async": [
            "error",
            {
                "checkArrowFunctions": true,
                "checkFunctionDeclarations": true,
                "checkFunctionExpressions": true,
                "checkMethodDeclarations": true
            }
        ],
        "@typescript-eslint/prefer-reduce-type-parameter": [
            "error"
        ],
        "@typescript-eslint/non-nullable-type-assertion-style": [
            "error"
        ],
        "@typescript-eslint/no-useless-empty-export": [
            "error"
        ],
        "@typescript-eslint/no-unnecessary-type-arguments": [
            "error"
        ],
        "@typescript-eslint/no-unnecessary-condition": [
            "error"
        ],
        "@typescript-eslint/no-confusing-non-null-assertion": [
            "error"
        ],
        "@typescript-eslint/method-signature-style": [
            "error",
            "property"
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "none"
                },
                "singleline": {
                    "delimiter": "semi"
                }
            }
        ],
        "@typescript-eslint/consistent-type-definitions": [
            "error",
            "type"
        ],
        "no-multi-spaces": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 3,
                "maxEOF": 0
            }
        ],
        "import/no-unresolved": "error",
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                ignoredNodes: ['TSTypeParameterInstantiation']
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/self-closing-comp": [
            "error",
            {
                "component": true,
                "html": true
            }
        ],
        "react/jsx-boolean-value": [
            1,
            "never"
        ],
        "react/jsx-closing-bracket-location": [
            1,
            {
                "nonEmpty": "after-props",
                "selfClosing": "tag-aligned"
            }
        ],
        "react/jsx-closing-tag-location": [
            1,
            "after-props"
        ],
        "react/jsx-curly-brace-presence": [
            1,
            "never"
        ],
        "react/jsx-curly-newline": [
            1,
            {
                "multiline": "consistent",
                "singleline": "consistent"
            }
        ],
        "react/jsx-curly-spacing": [
            1,
            "never"
        ],
        "react/jsx-equals-spacing": [
            1,
            "never"
        ],
        "react/jsx-first-prop-new-line": [
            1,
            "multiline-multiprop"
        ],
        "react/jsx-fragments": [
            1,
            "element"
        ],
        "react/jsx-max-props-per-line": [
            1,
            {
                "maximum": {
                    "single": 3, 
                    "multi": 1 
                }
            }
        ],
        "react/display-name": [0],
        "react/jsx-newline": [
            1,
            {
                "prevent": false
            }
        ],
        "react/jsx-no-useless-fragment": [
            1,
            {
                "allowExpressions": true
            }
        ],
        "react/jsx-one-expression-per-line": [
            1,
            {
                "allow": "literal"
            }
        ],
        "react/jsx-props-no-multi-spaces": [
            1
        ],
        "react/jsx-sort-props": [
            1,
            {
                "callbacksLast": true,
                "shorthandFirst": true,
                "ignoreCase": true,
                "noSortAlphabetically": false,
                "reservedFirst": true
            }
        ],
        "react/jsx-tag-spacing": [
            1,
            {
                "closingSlash": "never",
                "beforeSelfClosing": "always",
                "afterOpening": "never",
                "beforeClosing": "never"
            }
        ],
        "react/jsx-wrap-multilines": [
            1,
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "parens-new-line",
                "condition": "parens-new-line",
                "logical": "parens-new-line",
                "prop": "parens-new-line"
            }
        ]
    }
}
