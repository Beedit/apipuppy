import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";


export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: {
            js,
            "@stylistic": stylistic
        },
        rules: {
            "@stylistic/indent": ["error", 4],
            "@stylistic/quotes": ["warn", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/no-extra-semi": "error",
            "@stylistic/line-comment-position": ["error", { "position": "above" }]
        },
        extends: ["js/recommended"],
        languageOptions: {
            globals: globals.node
        } 
    },
  
  
    tseslint.configs.recommended,
    {
        files: ["**/*.jsonc"],
        plugins: { json },
        language: "json/jsonc",
        extends: ["json/recommended"] },
]);