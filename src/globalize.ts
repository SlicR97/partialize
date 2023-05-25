/* eslint-disable no-var */
// noinspection JSConstantReassignment,ES6ConvertVarToLetConst

import { hello } from './hello'

type HelloType = () => string

declare global {
  var hello: HelloType
}

globalThis.hello = hello
