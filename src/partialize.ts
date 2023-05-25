type OneAry<T0, T1> = (arg0: T0) => T1
type TwoAry<T0, T1, T2> = (arg0: T0, arg1: T1) => T2
type ThreeAry<T0, T1, T2, T3> = (arg0: T0, arg1: T1, arg2: T2) => T3
type FourAry<T0, T1, T2, T3, T4> = (
  arg0: T0,
  arg1: T1,
  arg2: T2,
  arg3: T3,
) => T4
type FiveAry<T0, T1, T2, T3, T4, T5> = (
  arg0: T0,
  arg1: T1,
  arg2: T2,
  arg3: T3,
  arg4: T4,
) => T5
type SixAry<T0, T1, T2, T3, T4, T5, T6> = (
  arg0: T0,
  arg1: T1,
  arg2: T2,
  arg3: T3,
  arg4: T4,
  arg5: T5,
) => T6
type SevenAry<T0, T1, T2, T3, T4, T5, T6, T7> = (
  arg0: T0,
  arg1: T1,
  arg2: T2,
  arg3: T3,
  arg4: T4,
  arg5: T5,
  arg6: T6,
) => T7
type EightAry<T0, T1, T2, T3, T4, T5, T6, T7, T8> = (
  arg0: T0,
  arg1: T1,
  arg2: T2,
  arg3: T3,
  arg4: T4,
  arg5: T5,
  arg6: T6,
  arg7: T7,
) => T8
type NineAry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9> = (
  arg0: T0,
  arg1: T1,
  arg2: T2,
  arg3: T3,
  arg4: T4,
  arg5: T5,
  arg6: T6,
  arg7: T7,
  arg8: T8,
) => T9
type TenAry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = (
  arg0: T0,
  arg1: T1,
  arg2: T2,
  arg3: T3,
  arg4: T4,
  arg5: T5,
  arg6: T6,
  arg7: T7,
  arg8: T8,
  arg9: T9,
) => T10

type OnePart<T0, T1> = (arg0: T0) => T1
type TwoPart<T0, T1, T2> = (arg0: T0) => (arg1: T1) => T2
type ThreePart<T0, T1, T2, T3> = (arg0: T0) => (arg1: T1) => (arg2: T2) => T3
type FourPart<T0, T1, T2, T3, T4> = (
  arg0: T0,
) => (arg1: T1) => (arg2: T2) => (arg3: T3) => T4
type FivePart<T0, T1, T2, T3, T4, T5> = (
  arg0: T0,
) => (arg1: T1) => (arg2: T2) => (arg3: T3) => (arg4: T4) => T5
type SixPart<T0, T1, T2, T3, T4, T5, T6> = (
  arg0: T0,
) => (arg1: T1) => (arg2: T2) => (arg3: T3) => (arg4: T4) => (arg5: T5) => T6
type SevenPart<T0, T1, T2, T3, T4, T5, T6, T7> = (
  arg0: T0,
) => (
  arg1: T1,
) => (arg2: T2) => (arg3: T3) => (arg4: T4) => (arg5: T5) => (arg6: T6) => T7
type EightPart<T0, T1, T2, T3, T4, T5, T6, T7, T8> = (
  arg0: T0,
) => (
  arg1: T1,
) => (
  arg2: T2,
) => (arg3: T3) => (arg4: T4) => (arg5: T5) => (arg6: T6) => (arg7: T7) => T8
type NinePart<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9> = (
  arg0: T0,
) => (
  arg1: T1,
) => (
  arg2: T2,
) => (
  arg3: T3,
) => (arg4: T4) => (arg5: T5) => (arg6: T6) => (arg7: T7) => (arg8: T8) => T9
type TenPart<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = (
  arg0: T0,
) => (
  arg1: T1,
) => (
  arg2: T2,
) => (
  arg3: T3,
) => (
  arg4: T4,
) => (arg5: T5) => (arg6: T6) => (arg7: T7) => (arg8: T8) => (arg9: T9) => T10

export function partialize<T0, T1>(fn: OneAry<T0, T1>): OnePart<T0, T1>
export function partialize<T0, T1, T2>(
  fn: TwoAry<T0, T1, T2>,
): TwoPart<T0, T1, T2>
export function partialize<T0, T1, T2, T3>(
  fn: ThreeAry<T0, T1, T2, T3>,
): ThreePart<T0, T1, T2, T3>
export function partialize<T0, T1, T2, T3, T4>(
  fn: FourAry<T0, T1, T2, T3, T4>,
): FourPart<T0, T1, T2, T3, T4>
export function partialize<T0, T1, T2, T3, T4, T5>(
  fn: FiveAry<T0, T1, T2, T3, T4, T5>,
): FivePart<T0, T1, T2, T3, T4, T5>
export function partialize<T0, T1, T2, T3, T4, T5, T6>(
  fn: SixAry<T0, T1, T2, T3, T4, T5, T6>,
): SixPart<T0, T1, T2, T3, T4, T5, T6>
export function partialize<T0, T1, T2, T3, T4, T5, T6, T7>(
  fn: SevenAry<T0, T1, T2, T3, T4, T5, T6, T7>,
): SevenPart<T0, T1, T2, T3, T4, T5, T6, T7>
export function partialize<T0, T1, T2, T3, T4, T5, T6, T7, T8>(
  fn: EightAry<T0, T1, T2, T3, T4, T5, T6, T7, T8>,
): EightPart<T0, T1, T2, T3, T4, T5, T6, T7, T8>
export function partialize<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn: NineAry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>,
): NinePart<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>
export function partialize<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn: TenAry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>,
): TenPart<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>
export function partialize<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn:
    | OneAry<T0, T1>
    | TwoAry<T0, T1, T2>
    | ThreeAry<T0, T1, T2, T3>
    | FourAry<T0, T1, T2, T3, T4>
    | FiveAry<T0, T1, T2, T3, T4, T5>
    | SixAry<T0, T1, T2, T3, T4, T5, T6>
    | SevenAry<T0, T1, T2, T3, T4, T5, T6, T7>
    | EightAry<T0, T1, T2, T3, T4, T5, T6, T7, T8>
    | NineAry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>
    | TenAry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>,
):
  | OnePart<T0, T1>
  | TwoPart<T0, T1, T2>
  | ThreePart<T0, T1, T2, T3>
  | FourPart<T0, T1, T2, T3, T4>
  | FivePart<T0, T1, T2, T3, T4, T5>
  | SixPart<T0, T1, T2, T3, T4, T5, T6>
  | SevenPart<T0, T1, T2, T3, T4, T5, T6, T7>
  | EightPart<T0, T1, T2, T3, T4, T5, T6, T7, T8>
  | NinePart<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>
  | TenPart<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> {
  const args = fn.length

  if (args === 1) {
    return (arg0: T0) => (fn as OneAry<T0, T1>)(arg0)
  }

  if (args === 2) {
    return (arg0: T0) => (arg1: T1) => (fn as TwoAry<T0, T1, T2>)(arg0, arg1)
  }

  if (args === 3) {
    return (arg0: T0) => (arg1: T1) => (arg2: T2) =>
      (fn as ThreeAry<T0, T1, T2, T3>)(arg0, arg1, arg2)
  }

  if (args === 4) {
    return (arg0: T0) => (arg1: T1) => (arg2: T2) => (arg3: T3) =>
      (fn as FourAry<T0, T1, T2, T3, T4>)(arg0, arg1, arg2, arg3)
  }

  if (args === 5) {
    return (arg0: T0) => (arg1: T1) => (arg2: T2) => (arg3: T3) => (arg4: T4) =>
      (fn as FiveAry<T0, T1, T2, T3, T4, T5>)(arg0, arg1, arg2, arg3, arg4)
  }

  if (args === 6) {
    return (arg0: T0) =>
      (arg1: T1) =>
      (arg2: T2) =>
      (arg3: T3) =>
      (arg4: T4) =>
      (arg5: T5) =>
        (fn as SixAry<T0, T1, T2, T3, T4, T5, T6>)(
          arg0,
          arg1,
          arg2,
          arg3,
          arg4,
          arg5,
        )
  }

  if (args === 7) {
    return (arg0: T0) =>
      (arg1: T1) =>
      (arg2: T2) =>
      (arg3: T3) =>
      (arg4: T4) =>
      (arg5: T5) =>
      (arg6: T6) =>
        (fn as SevenAry<T0, T1, T2, T3, T4, T5, T6, T7>)(
          arg0,
          arg1,
          arg2,
          arg3,
          arg4,
          arg5,
          arg6,
        )
  }

  if (args === 8) {
    return (arg0: T0) =>
      (arg1: T1) =>
      (arg2: T2) =>
      (arg3: T3) =>
      (arg4: T4) =>
      (arg5: T5) =>
      (arg6: T6) =>
      (arg7: T7) =>
        (fn as EightAry<T0, T1, T2, T3, T4, T5, T6, T7, T8>)(
          arg0,
          arg1,
          arg2,
          arg3,
          arg4,
          arg5,
          arg6,
          arg7,
        )
  }

  if (args === 9) {
    return (arg0: T0) =>
      (arg1: T1) =>
      (arg2: T2) =>
      (arg3: T3) =>
      (arg4: T4) =>
      (arg5: T5) =>
      (arg6: T6) =>
      (arg7: T7) =>
      (arg8: T8) =>
        (fn as NineAry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>)(
          arg0,
          arg1,
          arg2,
          arg3,
          arg4,
          arg5,
          arg6,
          arg7,
          arg8,
        )
  }

  return (arg0: T0) =>
    (arg1: T1) =>
    (arg2: T2) =>
    (arg3: T3) =>
    (arg4: T4) =>
    (arg5: T5) =>
    (arg6: T6) =>
    (arg7: T7) =>
    (arg8: T8) =>
    (arg9: T9) =>
      (fn as TenAry<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>)(
        arg0,
        arg1,
        arg2,
        arg3,
        arg4,
        arg5,
        arg6,
        arg7,
        arg8,
        arg9,
      )
}
