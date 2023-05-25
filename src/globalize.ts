/* eslint-disable no-var */
// noinspection JSConstantReassignment,ES6ConvertVarToLetConst

import { partialize as _partialize } from './partialize'

declare global {
  var partialize: typeof _partialize
}

globalThis.partialize = _partialize
