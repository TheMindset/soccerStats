"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    // 28/10/2018
    var dateParts = dateString
        .split('/')
        .map(function (value) {
        // return parsInt(value)
        return +value;
    });
    return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
};
