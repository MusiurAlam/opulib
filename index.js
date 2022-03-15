import { eraseAt, insertAt } from "./functions";

const opulib = {
    arrayMethods: {
        insertAt,
        eraseAt
    }
}

module.exports.opulib = opulib;
module.exports.arrayMethods = opulib.arrayMethods;