"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        })
            .map(this.mapRow);
        /**
         * Au lieu d'appliquer directement la logique.
         * On exporte la logique dans une méthode qui sera appeler ensuite
         */
        // .map((row: string[]): MatchData => {
        //   return [
        //     dateStringToDate(row[0]),
        //     row[1],
        //     row[2],
        //     +row[3],
        //     +row[4],
        //     row[5] as MatchResult, // Type assertion ==> Nous disons que cette valeur est soit 'H', 'A', ou 'D'
        //     row[6]
        //   ]
        // })
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
