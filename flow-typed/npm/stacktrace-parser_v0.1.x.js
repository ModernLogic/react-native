/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 *
 * @flow strict
 * @format
 */

type StackFrame = {
  file: string,
  methodName: string,
  lineNumber: number,
  column: ?number,
};

declare module 'stacktrace-parser' {
  declare module.exports: {
    parse: string => Array<StackFrame>,
  };
}
