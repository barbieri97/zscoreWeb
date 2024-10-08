/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_zscoreValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/zscoreValues */ \"./src/modules/zscoreValues.ts\");\n\n// script.ts\n// Função para calcular o Z-Score\nfunction calculateZScore(rawScore, mean, stdDev, invert) {\n    const zScore = (rawScore - mean) / stdDev;\n    return invert ? -zScore : zScore; // Retorna o Z-Score invertido se a checkbox estiver marcada\n}\n// Função para lidar com o envio do formulário\nfunction handleFormSubmit(event) {\n    var _a;\n    event.preventDefault(); // Evita o comportamento padrão de envio do formulário\n    // Obtendo os valores dos inputs\n    const rawScore = parseFloat(document.getElementById('raw-score').value);\n    const mean = parseFloat(document.getElementById('mean').value);\n    const stdDev = parseFloat(document.getElementById('std-dev').value);\n    const invertZScore = document.getElementById('inverted').checked;\n    // Calculando o Z-Score\n    const zScore = calculateZScore(rawScore, mean, stdDev, invertZScore);\n    const percentil = (_a = _modules_zscoreValues__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((e) => e.zscore === zScore)) === null || _a === void 0 ? void 0 : _a.percentil;\n    // Exibindo os resultados\n    document.getElementById('zscore-result').textContent = `${zScore.toFixed(2)}`;\n    document.getElementById('percentile-result').textContent = `${percentil}%`;\n}\n// Adicionando o listener ao formulário\ndocument.getElementById('zscore-form').addEventListener('submit', handleFormSubmit);\n\n\n//# sourceURL=webpack://zscoreweb/./src/index.ts?");

/***/ }),

/***/ "./src/modules/zscoreValues.ts":
/*!*************************************!*\
  !*** ./src/modules/zscoreValues.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst zscoreValues = [\n    { zscore: 3.0, percentil: 100 },\n    { zscore: 2.99, percentil: 100 },\n    { zscore: 2.98, percentil: 100 },\n    { zscore: 2.97, percentil: 100 },\n    { zscore: 2.96, percentil: 100 },\n    { zscore: 2.95, percentil: 100 },\n    { zscore: 2.94, percentil: 100 },\n    { zscore: 2.93, percentil: 100 },\n    { zscore: 2.92, percentil: 100 },\n    { zscore: 2.91, percentil: 100 },\n    { zscore: 2.9, percentil: 100 },\n    { zscore: 2.89, percentil: 100 },\n    { zscore: 2.88, percentil: 100 },\n    { zscore: 2.87, percentil: 100 },\n    { zscore: 2.86, percentil: 100 },\n    { zscore: 2.85, percentil: 100 },\n    { zscore: 2.84, percentil: 100 },\n    { zscore: 2.83, percentil: 100 },\n    { zscore: 2.82, percentil: 100 },\n    { zscore: 2.81, percentil: 100 },\n    { zscore: 2.8, percentil: 100 },\n    { zscore: 2.79, percentil: 100 },\n    { zscore: 2.78, percentil: 100 },\n    { zscore: 2.77, percentil: 100 },\n    { zscore: 2.76, percentil: 100 },\n    { zscore: 2.75, percentil: 100 },\n    { zscore: 2.74, percentil: 100 },\n    { zscore: 2.73, percentil: 100 },\n    { zscore: 2.72, percentil: 100 },\n    { zscore: 2.71, percentil: 100 },\n    { zscore: 2.7, percentil: 100 },\n    { zscore: 2.69, percentil: 100 },\n    { zscore: 2.68, percentil: 100 },\n    { zscore: 2.67, percentil: 100 },\n    { zscore: 2.66, percentil: 99 },\n    { zscore: 2.65, percentil: 99 },\n    { zscore: 2.64, percentil: 99 },\n    { zscore: 2.63, percentil: 99 },\n    { zscore: 2.62, percentil: 99 },\n    { zscore: 2.61, percentil: 99 },\n    { zscore: 2.6, percentil: 99 },\n    { zscore: 2.59, percentil: 99 },\n    { zscore: 2.58, percentil: 99 },\n    { zscore: 2.57, percentil: 99 },\n    { zscore: 2.56, percentil: 99 },\n    { zscore: 2.55, percentil: 99 },\n    { zscore: 2.54, percentil: 99 },\n    { zscore: 2.53, percentil: 99 },\n    { zscore: 2.52, percentil: 99 },\n    { zscore: 2.51, percentil: 99 },\n    { zscore: 2.5, percentil: 99 },\n    { zscore: 2.49, percentil: 99 },\n    { zscore: 2.48, percentil: 99 },\n    { zscore: 2.47, percentil: 99 },\n    { zscore: 2.46, percentil: 99 },\n    { zscore: 2.45, percentil: 99 },\n    { zscore: 2.44, percentil: 99 },\n    { zscore: 2.43, percentil: 99 },\n    { zscore: 2.42, percentil: 99 },\n    { zscore: 2.41, percentil: 99 },\n    { zscore: 2.4, percentil: 99 },\n    { zscore: 2.39, percentil: 99 },\n    { zscore: 2.38, percentil: 99 },\n    { zscore: 2.37, percentil: 99 },\n    { zscore: 2.36, percentil: 99 },\n    { zscore: 2.35, percentil: 99 },\n    { zscore: 2.34, percentil: 99 },\n    { zscore: 2.33, percentil: 99 },\n    { zscore: 2.32, percentil: 99 },\n    { zscore: 2.31, percentil: 99 },\n    { zscore: 2.3, percentil: 99 },\n    { zscore: 2.29, percentil: 99 },\n    { zscore: 2.28, percentil: 99 },\n    { zscore: 2.27, percentil: 99 },\n    { zscore: 2.26, percentil: 99 },\n    { zscore: 2.25, percentil: 99 },\n    { zscore: 2.24, percentil: 99 },\n    { zscore: 2.23, percentil: 99 },\n    { zscore: 2.22, percentil: 99 },\n    { zscore: 2.21, percentil: 99 },\n    { zscore: 2.2, percentil: 99 },\n    { zscore: 2.19, percentil: 99 },\n    { zscore: 2.18, percentil: 98 },\n    { zscore: 2.17, percentil: 98 },\n    { zscore: 2.16, percentil: 98 },\n    { zscore: 2.15, percentil: 98 },\n    { zscore: 2.14, percentil: 98 },\n    { zscore: 2.13, percentil: 98 },\n    { zscore: 2.12, percentil: 98 },\n    { zscore: 2.11, percentil: 98 },\n    { zscore: 2.1, percentil: 98 },\n    { zscore: 2.09, percentil: 98 },\n    { zscore: 2.08, percentil: 98 },\n    { zscore: 2.07, percentil: 98 },\n    { zscore: 2.06, percentil: 98 },\n    { zscore: 2.05, percentil: 98 },\n    { zscore: 2.04, percentil: 98 },\n    { zscore: 2.03, percentil: 98 },\n    { zscore: 2.02, percentil: 98 },\n    { zscore: 2.01, percentil: 98 },\n    { zscore: 2.0, percentil: 98 },\n    { zscore: 1.99, percentil: 98 },\n    { zscore: 1.98, percentil: 98 },\n    { zscore: 1.97, percentil: 98 },\n    { zscore: 1.96, percentil: 98 },\n    { zscore: 1.95, percentil: 97 },\n    { zscore: 1.94, percentil: 97 },\n    { zscore: 1.93, percentil: 97 },\n    { zscore: 1.92, percentil: 97 },\n    { zscore: 1.91, percentil: 97 },\n    { zscore: 1.9, percentil: 97 },\n    { zscore: 1.89, percentil: 97 },\n    { zscore: 1.88, percentil: 97 },\n    { zscore: 1.87, percentil: 97 },\n    { zscore: 1.86, percentil: 97 },\n    { zscore: 1.85, percentil: 97 },\n    { zscore: 1.84, percentil: 97 },\n    { zscore: 1.83, percentil: 97 },\n    { zscore: 1.82, percentil: 97 },\n    { zscore: 1.81, percentil: 96 },\n    { zscore: 1.8, percentil: 96 },\n    { zscore: 1.79, percentil: 96 },\n    { zscore: 1.78, percentil: 96 },\n    { zscore: 1.77, percentil: 96 },\n    { zscore: 1.76, percentil: 96 },\n    { zscore: 1.75, percentil: 96 },\n    { zscore: 1.74, percentil: 96 },\n    { zscore: 1.73, percentil: 96 },\n    { zscore: 1.72, percentil: 96 },\n    { zscore: 1.71, percentil: 96 },\n    { zscore: 1.7, percentil: 96 },\n    { zscore: 1.69, percentil: 95 },\n    { zscore: 1.68, percentil: 95 },\n    { zscore: 1.67, percentil: 95 },\n    { zscore: 1.66, percentil: 95 },\n    { zscore: 1.65, percentil: 95 },\n    { zscore: 1.64, percentil: 95 },\n    { zscore: 1.63, percentil: 95 },\n    { zscore: 1.62, percentil: 95 },\n    { zscore: 1.61, percentil: 95 },\n    { zscore: 1.6, percentil: 95 },\n    { zscore: 1.59, percentil: 94 },\n    { zscore: 1.58, percentil: 94 },\n    { zscore: 1.57, percentil: 94 },\n    { zscore: 1.56, percentil: 94 },\n    { zscore: 1.55, percentil: 94 },\n    { zscore: 1.54, percentil: 94 },\n    { zscore: 1.53, percentil: 94 },\n    { zscore: 1.52, percentil: 94 },\n    { zscore: 1.51, percentil: 93 },\n    { zscore: 1.5, percentil: 93 },\n    { zscore: 1.49, percentil: 93 },\n    { zscore: 1.48, percentil: 93 },\n    { zscore: 1.47, percentil: 93 },\n    { zscore: 1.46, percentil: 93 },\n    { zscore: 1.45, percentil: 93 },\n    { zscore: 1.44, percentil: 93 },\n    { zscore: 1.43, percentil: 92 },\n    { zscore: 1.42, percentil: 92 },\n    { zscore: 1.41, percentil: 92 },\n    { zscore: 1.4, percentil: 92 },\n    { zscore: 1.39, percentil: 92 },\n    { zscore: 1.38, percentil: 92 },\n    { zscore: 1.37, percentil: 91 },\n    { zscore: 1.36, percentil: 91 },\n    { zscore: 1.35, percentil: 91 },\n    { zscore: 1.34, percentil: 91 },\n    { zscore: 1.33, percentil: 91 },\n    { zscore: 1.32, percentil: 91 },\n    { zscore: 1.31, percentil: 90 },\n    { zscore: 1.3, percentil: 90 },\n    { zscore: 1.29, percentil: 90 },\n    { zscore: 1.28, percentil: 90 },\n    { zscore: 1.27, percentil: 90 },\n    { zscore: 1.26, percentil: 90 },\n    { zscore: 1.25, percentil: 89 },\n    { zscore: 1.24, percentil: 89 },\n    { zscore: 1.23, percentil: 89 },\n    { zscore: 1.22, percentil: 89 },\n    { zscore: 1.21, percentil: 89 },\n    { zscore: 1.2, percentil: 88 },\n    { zscore: 1.19, percentil: 88 },\n    { zscore: 1.18, percentil: 88 },\n    { zscore: 1.17, percentil: 88 },\n    { zscore: 1.16, percentil: 88 },\n    { zscore: 1.15, percentil: 87 },\n    { zscore: 1.14, percentil: 87 },\n    { zscore: 1.13, percentil: 87 },\n    { zscore: 1.12, percentil: 87 },\n    { zscore: 1.11, percentil: 87 },\n    { zscore: 1.1, percentil: 86 },\n    { zscore: 1.09, percentil: 86 },\n    { zscore: 1.08, percentil: 86 },\n    { zscore: 1.07, percentil: 86 },\n    { zscore: 1.06, percentil: 86 },\n    { zscore: 1.05, percentil: 85 },\n    { zscore: 1.04, percentil: 85 },\n    { zscore: 1.03, percentil: 85 },\n    { zscore: 1.02, percentil: 85 },\n    { zscore: 1.01, percentil: 84 },\n    { zscore: 1.0, percentil: 84 },\n    { zscore: 0.99, percentil: 84 },\n    { zscore: 0.98, percentil: 84 },\n    { zscore: 0.97, percentil: 83 },\n    { zscore: 0.96, percentil: 83 },\n    { zscore: 0.95, percentil: 83 },\n    { zscore: 0.94, percentil: 83 },\n    { zscore: 0.93, percentil: 82 },\n    { zscore: 0.92, percentil: 82 },\n    { zscore: 0.91, percentil: 82 },\n    { zscore: 0.9, percentil: 82 },\n    { zscore: 0.89, percentil: 81 },\n    { zscore: 0.88, percentil: 81 },\n    { zscore: 0.87, percentil: 81 },\n    { zscore: 0.86, percentil: 81 },\n    { zscore: 0.85, percentil: 80 },\n    { zscore: 0.84, percentil: 80 },\n    { zscore: 0.83, percentil: 80 },\n    { zscore: 0.82, percentil: 79 },\n    { zscore: 0.81, percentil: 79 },\n    { zscore: 0.8, percentil: 79 },\n    { zscore: 0.79, percentil: 79 },\n    { zscore: 0.78, percentil: 78 },\n    { zscore: 0.77, percentil: 78 },\n    { zscore: 0.76, percentil: 78 },\n    { zscore: 0.75, percentil: 77 },\n    { zscore: 0.74, percentil: 77 },\n    { zscore: 0.73, percentil: 77 },\n    { zscore: 0.72, percentil: 76 },\n    { zscore: 0.71, percentil: 76 },\n    { zscore: 0.7, percentil: 76 },\n    { zscore: 0.69, percentil: 75 },\n    { zscore: 0.68, percentil: 75 },\n    { zscore: 0.67, percentil: 75 },\n    { zscore: 0.66, percentil: 75 },\n    { zscore: 0.65, percentil: 74 },\n    { zscore: 0.64, percentil: 74 },\n    { zscore: 0.63, percentil: 74 },\n    { zscore: 0.62, percentil: 73 },\n    { zscore: 0.61, percentil: 73 },\n    { zscore: 0.6, percentil: 73 },\n    { zscore: 0.59, percentil: 72 },\n    { zscore: 0.58, percentil: 72 },\n    { zscore: 0.57, percentil: 72 },\n    { zscore: 0.56, percentil: 71 },\n    { zscore: 0.55, percentil: 71 },\n    { zscore: 0.54, percentil: 71 },\n    { zscore: 0.53, percentil: 70 },\n    { zscore: 0.52, percentil: 70 },\n    { zscore: 0.51, percentil: 69 },\n    { zscore: 0.5, percentil: 69 },\n    { zscore: 0.49, percentil: 68 },\n    { zscore: 0.48, percentil: 68 },\n    { zscore: 0.47, percentil: 68 },\n    { zscore: 0.46, percentil: 68 },\n    { zscore: 0.45, percentil: 67 },\n    { zscore: 0.44, percentil: 67 },\n    { zscore: 0.43, percentil: 67 },\n    { zscore: 0.42, percentil: 66 },\n    { zscore: 0.41, percentil: 66 },\n    { zscore: 0.4, percentil: 66 },\n    { zscore: 0.39, percentil: 65 },\n    { zscore: 0.38, percentil: 65 },\n    { zscore: 0.37, percentil: 64 },\n    { zscore: 0.36, percentil: 64 },\n    { zscore: 0.35, percentil: 64 },\n    { zscore: 0.34, percentil: 63 },\n    { zscore: 0.33, percentil: 63 },\n    { zscore: 0.32, percentil: 63 },\n    { zscore: 0.31, percentil: 62 },\n    { zscore: 0.3, percentil: 62 },\n    { zscore: 0.29, percentil: 61 },\n    { zscore: 0.28, percentil: 61 },\n    { zscore: 0.27, percentil: 61 },\n    { zscore: 0.26, percentil: 60 },\n    { zscore: 0.25, percentil: 60 },\n    { zscore: 0.24, percentil: 59 },\n    { zscore: 0.23, percentil: 59 },\n    { zscore: 0.22, percentil: 59 },\n    { zscore: 0.21, percentil: 58 },\n    { zscore: 0.2, percentil: 58 },\n    { zscore: 0.19, percentil: 58 },\n    { zscore: 0.18, percentil: 57 },\n    { zscore: 0.17, percentil: 57 },\n    { zscore: 0.16, percentil: 56 },\n    { zscore: 0.15, percentil: 56 },\n    { zscore: 0.14, percentil: 56 },\n    { zscore: 0.13, percentil: 55 },\n    { zscore: 0.12, percentil: 55 },\n    { zscore: 0.11, percentil: 54 },\n    { zscore: 0.1, percentil: 54 },\n    { zscore: 0.09, percentil: 54 },\n    { zscore: 0.08, percentil: 53 },\n    { zscore: 0.07, percentil: 53 },\n    { zscore: 0.06, percentil: 52 },\n    { zscore: 0.05, percentil: 52 },\n    { zscore: 0.04, percentil: 52 },\n    { zscore: 0.03, percentil: 51 },\n    { zscore: 0.02, percentil: 51 },\n    { zscore: 0.01, percentil: 51 },\n    { zscore: 0.0, percentil: 50 },\n    { zscore: -0.01, percentil: 50 },\n    { zscore: -0.02, percentil: 49 },\n    { zscore: -0.03, percentil: 49 },\n    { zscore: -0.04, percentil: 48 },\n    { zscore: -0.05, percentil: 48 },\n    { zscore: -0.06, percentil: 48 },\n    { zscore: -0.07, percentil: 47 },\n    { zscore: -0.08, percentil: 47 },\n    { zscore: -0.09, percentil: 46 },\n    { zscore: -0.1, percentil: 46 },\n    { zscore: -0.11, percentil: 46 },\n    { zscore: -0.12, percentil: 45 },\n    { zscore: -0.13, percentil: 45 },\n    { zscore: -0.14, percentil: 44 },\n    { zscore: -0.15, percentil: 44 },\n    { zscore: -0.16, percentil: 44 },\n    { zscore: -0.17, percentil: 43 },\n    { zscore: -0.18, percentil: 43 },\n    { zscore: -0.19, percentil: 42 },\n    { zscore: -0.2, percentil: 42 },\n    { zscore: -0.21, percentil: 42 },\n    { zscore: -0.22, percentil: 41 },\n    { zscore: -0.23, percentil: 41 },\n    { zscore: -0.24, percentil: 41 },\n    { zscore: -0.25, percentil: 40 },\n    { zscore: -0.26, percentil: 40 },\n    { zscore: -0.27, percentil: 39 },\n    { zscore: -0.28, percentil: 39 },\n    { zscore: -0.29, percentil: 39 },\n    { zscore: -0.3, percentil: 38 },\n    { zscore: -0.31, percentil: 38 },\n    { zscore: -0.32, percentil: 37 },\n    { zscore: -0.33, percentil: 37 },\n    { zscore: -0.34, percentil: 37 },\n    { zscore: -0.35, percentil: 36 },\n    { zscore: -0.36, percentil: 36 },\n    { zscore: -0.37, percentil: 36 },\n    { zscore: -0.38, percentil: 35 },\n    { zscore: -0.39, percentil: 35 },\n    { zscore: -0.4, percentil: 34 },\n    { zscore: -0.41, percentil: 34 },\n    { zscore: -0.42, percentil: 34 },\n    { zscore: -0.43, percentil: 33 },\n    { zscore: -0.44, percentil: 33 },\n    { zscore: -0.45, percentil: 33 },\n    { zscore: -0.46, percentil: 32 },\n    { zscore: -0.47, percentil: 32 },\n    { zscore: -0.48, percentil: 32 },\n    { zscore: -0.49, percentil: 31 },\n    { zscore: -0.5, percentil: 31 },\n    { zscore: -0.51, percentil: 31 },\n    { zscore: -0.52, percentil: 30 },\n    { zscore: -0.53, percentil: 30 },\n    { zscore: -0.54, percentil: 29 },\n    { zscore: -0.55, percentil: 29 },\n    { zscore: -0.56, percentil: 29 },\n    { zscore: -0.57, percentil: 28 },\n    { zscore: -0.58, percentil: 28 },\n    { zscore: -0.59, percentil: 28 },\n    { zscore: -0.6, percentil: 27 },\n    { zscore: -0.61, percentil: 27 },\n    { zscore: -0.62, percentil: 27 },\n    { zscore: -0.63, percentil: 26 },\n    { zscore: -0.64, percentil: 26 },\n    { zscore: -0.65, percentil: 26 },\n    { zscore: -0.66, percentil: 25 },\n    { zscore: -0.67, percentil: 25 },\n    { zscore: -0.68, percentil: 25 },\n    { zscore: -0.69, percentil: 25 },\n    { zscore: -0.7, percentil: 24 },\n    { zscore: -0.71, percentil: 24 },\n    { zscore: -0.72, percentil: 24 },\n    { zscore: -0.73, percentil: 23 },\n    { zscore: -0.74, percentil: 23 },\n    { zscore: -0.75, percentil: 23 },\n    { zscore: -0.76, percentil: 22 },\n    { zscore: -0.77, percentil: 22 },\n    { zscore: -0.78, percentil: 22 },\n    { zscore: -0.79, percentil: 21 },\n    { zscore: -0.8, percentil: 21 },\n    { zscore: -0.81, percentil: 21 },\n    { zscore: -0.82, percentil: 21 },\n    { zscore: -0.83, percentil: 20 },\n    { zscore: -0.84, percentil: 20 },\n    { zscore: -0.85, percentil: 20 },\n    { zscore: -0.86, percentil: 19 },\n    { zscore: -0.87, percentil: 19 },\n    { zscore: -0.88, percentil: 19 },\n    { zscore: -0.89, percentil: 19 },\n    { zscore: -0.9, percentil: 18 },\n    { zscore: -0.91, percentil: 18 },\n    { zscore: -0.92, percentil: 18 },\n    { zscore: -0.93, percentil: 18 },\n    { zscore: -0.94, percentil: 17 },\n    { zscore: -0.95, percentil: 17 },\n    { zscore: -0.96, percentil: 17 },\n    { zscore: -0.97, percentil: 17 },\n    { zscore: -0.98, percentil: 16 },\n    { zscore: -0.99, percentil: 16 },\n    { zscore: -1.0, percentil: 16 },\n    { zscore: -1.01, percentil: 16 },\n    { zscore: -1.02, percentil: 15 },\n    { zscore: -1.03, percentil: 15 },\n    { zscore: -1.04, percentil: 15 },\n    { zscore: -1.05, percentil: 15 },\n    { zscore: -1.06, percentil: 14 },\n    { zscore: -1.07, percentil: 14 },\n    { zscore: -1.08, percentil: 14 },\n    { zscore: -1.09, percentil: 14 },\n    { zscore: -1.1, percentil: 14 },\n    { zscore: -1.11, percentil: 13 },\n    { zscore: -1.12, percentil: 13 },\n    { zscore: -1.13, percentil: 13 },\n    { zscore: -1.14, percentil: 13 },\n    { zscore: -1.15, percentil: 13 },\n    { zscore: -1.16, percentil: 12 },\n    { zscore: -1.17, percentil: 12 },\n    { zscore: -1.18, percentil: 12 },\n    { zscore: -1.19, percentil: 12 },\n    { zscore: -1.2, percentil: 12 },\n    { zscore: -1.21, percentil: 11 },\n    { zscore: -1.22, percentil: 11 },\n    { zscore: -1.23, percentil: 11 },\n    { zscore: -1.24, percentil: 11 },\n    { zscore: -1.25, percentil: 11 },\n    { zscore: -1.26, percentil: 10 },\n    { zscore: -1.27, percentil: 10 },\n    { zscore: -1.28, percentil: 10 },\n    { zscore: -1.29, percentil: 10 },\n    { zscore: -1.3, percentil: 10 },\n    { zscore: -1.31, percentil: 10 },\n    { zscore: -1.32, percentil: 9 },\n    { zscore: -1.33, percentil: 9 },\n    { zscore: -1.34, percentil: 9 },\n    { zscore: -1.35, percentil: 9 },\n    { zscore: -1.36, percentil: 9 },\n    { zscore: -1.37, percentil: 9 },\n    { zscore: -1.38, percentil: 8 },\n    { zscore: -1.39, percentil: 8 },\n    { zscore: -1.4, percentil: 8 },\n    { zscore: -1.41, percentil: 8 },\n    { zscore: -1.42, percentil: 8 },\n    { zscore: -1.43, percentil: 8 },\n    { zscore: -1.44, percentil: 7 },\n    { zscore: -1.45, percentil: 7 },\n    { zscore: -1.46, percentil: 7 },\n    { zscore: -1.47, percentil: 7 },\n    { zscore: -1.48, percentil: 7 },\n    { zscore: -1.49, percentil: 7 },\n    { zscore: -1.5, percentil: 7 },\n    { zscore: -1.51, percentil: 7 },\n    { zscore: -1.52, percentil: 6 },\n    { zscore: -1.53, percentil: 6 },\n    { zscore: -1.54, percentil: 6 },\n    { zscore: -1.55, percentil: 6 },\n    { zscore: -1.56, percentil: 6 },\n    { zscore: -1.57, percentil: 6 },\n    { zscore: -1.58, percentil: 6 },\n    { zscore: -1.59, percentil: 6 },\n    { zscore: -1.6, percentil: 5 },\n    { zscore: -1.61, percentil: 5 },\n    { zscore: -1.62, percentil: 5 },\n    { zscore: -1.63, percentil: 5 },\n    { zscore: -1.64, percentil: 5 },\n    { zscore: -1.65, percentil: 5 },\n    { zscore: -1.66, percentil: 5 },\n    { zscore: -1.67, percentil: 5 },\n    { zscore: -1.68, percentil: 5 },\n    { zscore: -1.69, percentil: 5 },\n    { zscore: -1.7, percentil: 4 },\n    { zscore: -1.71, percentil: 4 },\n    { zscore: -1.72, percentil: 4 },\n    { zscore: -1.73, percentil: 4 },\n    { zscore: -1.74, percentil: 4 },\n    { zscore: -1.75, percentil: 4 },\n    { zscore: -1.76, percentil: 4 },\n    { zscore: -1.77, percentil: 4 },\n    { zscore: -1.78, percentil: 4 },\n    { zscore: -1.79, percentil: 4 },\n    { zscore: -1.8, percentil: 4 },\n    { zscore: -1.81, percentil: 4 },\n    { zscore: -1.82, percentil: 3 },\n    { zscore: -1.83, percentil: 3 },\n    { zscore: -1.84, percentil: 3 },\n    { zscore: -1.85, percentil: 3 },\n    { zscore: -1.86, percentil: 3 },\n    { zscore: -1.87, percentil: 3 },\n    { zscore: -1.88, percentil: 3 },\n    { zscore: -1.89, percentil: 3 },\n    { zscore: -1.9, percentil: 3 },\n    { zscore: -1.91, percentil: 3 },\n    { zscore: -1.92, percentil: 3 },\n    { zscore: -1.93, percentil: 3 },\n    { zscore: -1.94, percentil: 3 },\n    { zscore: -1.95, percentil: 3 },\n    { zscore: -1.96, percentil: 2 },\n    { zscore: -1.97, percentil: 2 },\n    { zscore: -1.98, percentil: 2 },\n    { zscore: -1.99, percentil: 2 },\n    { zscore: -2.0, percentil: 2 },\n    { zscore: -2.01, percentil: 2 },\n    { zscore: -2.02, percentil: 2 },\n    { zscore: -2.03, percentil: 2 },\n    { zscore: -2.04, percentil: 2 },\n    { zscore: -2.05, percentil: 2 },\n    { zscore: -2.06, percentil: 2 },\n    { zscore: -2.07, percentil: 2 },\n    { zscore: -2.08, percentil: 2 },\n    { zscore: -2.09, percentil: 2 },\n    { zscore: -2.1, percentil: 2 },\n    { zscore: -2.11, percentil: 2 },\n    { zscore: -2.12, percentil: 2 },\n    { zscore: -2.13, percentil: 2 },\n    { zscore: -2.14, percentil: 2 },\n    { zscore: -2.15, percentil: 2 },\n    { zscore: -2.16, percentil: 2 },\n    { zscore: -2.17, percentil: 2 },\n    { zscore: -2.18, percentil: 2 },\n    { zscore: -2.19, percentil: 2 },\n    { zscore: -2.2, percentil: 1 },\n    { zscore: -2.21, percentil: 1 },\n    { zscore: -2.22, percentil: 1 },\n    { zscore: -2.23, percentil: 1 },\n    { zscore: -2.24, percentil: 1 },\n    { zscore: -2.25, percentil: 1 },\n    { zscore: -2.26, percentil: 1 },\n    { zscore: -2.27, percentil: 1 },\n    { zscore: -2.28, percentil: 1 },\n    { zscore: -2.29, percentil: 1 },\n    { zscore: -2.3, percentil: 1 },\n    { zscore: -2.31, percentil: 1 },\n    { zscore: -2.32, percentil: 1 },\n    { zscore: -2.33, percentil: 1 },\n    { zscore: -2.34, percentil: 1 },\n    { zscore: -2.35, percentil: 1 },\n    { zscore: -2.36, percentil: 1 },\n    { zscore: -2.37, percentil: 1 },\n    { zscore: -2.38, percentil: 1 },\n    { zscore: -2.39, percentil: 1 },\n    { zscore: -2.4, percentil: 1 },\n    { zscore: -2.41, percentil: 1 },\n    { zscore: -2.42, percentil: 1 },\n    { zscore: -2.43, percentil: 1 },\n    { zscore: -2.44, percentil: 1 },\n    { zscore: -2.45, percentil: 1 },\n    { zscore: -2.46, percentil: 1 },\n    { zscore: -2.47, percentil: 1 },\n    { zscore: -2.48, percentil: 1 },\n    { zscore: -2.49, percentil: 1 },\n    { zscore: -2.5, percentil: 1 },\n    { zscore: -2.51, percentil: 1 },\n    { zscore: -2.52, percentil: 1 },\n    { zscore: -2.53, percentil: 1 },\n    { zscore: -2.54, percentil: 1 },\n    { zscore: -2.55, percentil: 1 },\n    { zscore: -2.56, percentil: 1 },\n    { zscore: -2.57, percentil: 1 },\n    { zscore: -2.58, percentil: 1 },\n    { zscore: -2.59, percentil: 1 },\n    { zscore: -2.6, percentil: 1 },\n    { zscore: -2.61, percentil: 1 },\n    { zscore: -2.62, percentil: 1 },\n    { zscore: -2.63, percentil: 1 },\n    { zscore: -2.64, percentil: 1 },\n    { zscore: -2.65, percentil: 1 },\n    { zscore: -2.66, percentil: 1 },\n    { zscore: -2.67, percentil: \"<1\" },\n    { zscore: -2.68, percentil: \"<1\" },\n    { zscore: -2.69, percentil: \"<1\" },\n    { zscore: -2.7, percentil: \"<1\" },\n    { zscore: -2.71, percentil: \"<1\" },\n    { zscore: -2.72, percentil: \"<1\" },\n    { zscore: -2.73, percentil: \"<1\" },\n    { zscore: -2.74, percentil: \"<1\" },\n    { zscore: -2.75, percentil: \"<1\" },\n    { zscore: -2.76, percentil: \"<1\" },\n    { zscore: -2.77, percentil: \"<1\" },\n    { zscore: -2.78, percentil: \"<1\" },\n    { zscore: -2.79, percentil: \"<1\" },\n    { zscore: -2.8, percentil: \"<1\" },\n    { zscore: -2.81, percentil: \"<1\" },\n    { zscore: -2.82, percentil: \"<1\" },\n    { zscore: -2.83, percentil: \"<1\" },\n    { zscore: -2.84, percentil: \"<1\" },\n    { zscore: -2.85, percentil: \"<1\" },\n    { zscore: -2.86, percentil: \"<1\" },\n    { zscore: -2.87, percentil: \"<1\" },\n    { zscore: -2.88, percentil: \"<1\" },\n    { zscore: -2.89, percentil: \"<1\" },\n    { zscore: -2.9, percentil: \"<1\" },\n    { zscore: -2.91, percentil: \"<1\" },\n    { zscore: -2.92, percentil: \"<1\" },\n    { zscore: -2.93, percentil: \"<1\" },\n    { zscore: -2.94, percentil: \"<1\" },\n    { zscore: -2.95, percentil: \"<1\" },\n    { zscore: -2.96, percentil: \"<1\" },\n    { zscore: -2.97, percentil: \"<1\" },\n    { zscore: -2.98, percentil: \"<1\" },\n    { zscore: -2.99, percentil: \"<1\" },\n    { zscore: -3.0, percentil: 0.1 },\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zscoreValues);\n\n\n//# sourceURL=webpack://zscoreweb/./src/modules/zscoreValues.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;