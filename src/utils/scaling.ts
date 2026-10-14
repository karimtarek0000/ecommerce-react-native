import { Dimensions } from 'react-native'

type ScalingMethods = {
  HS: (value: number) => number
  VS: (value: number) => number
  FS: (value: number, factor?: number) => number
}

// ======================= Base Dimension =======================
const guideLineBaseWidth = 375
const guideLineBaseHeight = 812

// ======================= Get dimensions from window device =======================
const { width, height } = Dimensions.get('window')
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width]

// ======================= Re-scale =======================
const scalingMethods = {} as ScalingMethods

scalingMethods.HS = (size: number) => Math.round((shortDimension / guideLineBaseWidth) * size)
scalingMethods.VS = (size: number) => Math.round((longDimension / guideLineBaseHeight) * size)
scalingMethods.FS = (size: number, factor = 0.5) =>
  Math.round(size + (scalingMethods.HS(size) - size) * factor)

export default scalingMethods

// =============================================================================
// DEBUG — Logs scaling info once at app start
// Wrapped in __DEV__ so it auto-disables in production builds.
// =============================================================================
// if (__DEV__) {
//   console.log('========== SCALING DEBUG ==========')
//   console.log(`Device: ${width} × ${height}`)
//   console.log(`Mockup: ${guideLineBaseWidth} × ${guideLineBaseHeight}`)
//   console.log(`HS ratio: ${(shortDimension / guideLineBaseWidth).toFixed(2)}`)
//   console.log(`VS ratio: ${(longDimension / guideLineBaseHeight).toFixed(2)}`)
//   console.log('--- HS test ---')
//   console.log(`HS(100) = ${scalingMethods.HS(100)}`)
//   console.log(`HS(200) = ${scalingMethods.HS(200)}`)
//   console.log('--- VS test ---')
//   console.log(`VS(100) = ${scalingMethods.VS(100)}`)
//   console.log(`VS(200) = ${scalingMethods.VS(200)}`)
//   console.log('--- FS test ---')
//   console.log(`FS(12) = ${scalingMethods.FS(12)}   // smallest (caption)`)
//   console.log(`FS(14) = ${scalingMethods.FS(14)}   // body`)
//   console.log(`FS(16) = ${scalingMethods.FS(16)}   // default`)
//   console.log(`FS(20) = ${scalingMethods.FS(20)}   // heading`)
//   console.log(`FS(38) = ${scalingMethods.FS(28)}   // title`)
//   console.log('==================================')
// }
