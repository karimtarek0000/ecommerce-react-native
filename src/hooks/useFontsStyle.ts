import fonts from '@/constants/fonts'
import { type Languages, type TypographyStyles } from '@/types'

const fontStyles: Record<Languages, TypographyStyles> = {
  en: {
    heroBold: {
      fontFamily: fonts.en.bold,
      fontSize: 38,
      lineHeight: 50,
    },
    heroRegular: {
      fontFamily: fonts.en.regular,
      fontSize: 38,
      lineHeight: 50,
    },
    xlargeBold: {
      fontFamily: fonts.en.bold,
      fontSize: 22,
      lineHeight: 30,
    },
    xlargeRegular: {
      fontFamily: fonts.en.regular,
      fontSize: 22,
      lineHeight: 30,
    },
    largeBold: {
      fontFamily: fonts.en.bold,
      fontSize: 18,
      lineHeight: 26,
    },
    largeRegular: {
      fontFamily: fonts.en.regular,
      fontSize: 18,
      lineHeight: 26,
    },
    largeLight: {
      fontFamily: fonts.en.light,
      fontSize: 18,
      lineHeight: 26,
    },
    mediumBold: {
      fontFamily: fonts.en.bold,
      fontSize: 16,
      lineHeight: 26,
    },
    mediumRegular: {
      fontFamily: fonts.en.regular,
      fontSize: 16,
      lineHeight: 26,
    },
    mediumLight: {
      fontFamily: fonts.en.light,
      fontSize: 16,
      lineHeight: 26,
    },
    normalBold: {
      fontFamily: fonts.en.bold,
      fontSize: 14,
      lineHeight: 22,
    },
    normalRegular: {
      fontFamily: fonts.en.regular,
      fontSize: 14,
      lineHeight: 22,
    },
    normalLight: {
      fontFamily: fonts.en.light,
      fontSize: 14,
      lineHeight: 22,
    },
    smallBold: {
      fontFamily: fonts.en.bold,
      fontSize: 13,
      lineHeight: 22,
    },
    smallRegular: {
      fontFamily: fonts.en.regular,
      fontSize: 13,
      lineHeight: 22,
    },
    smallLight: {
      fontFamily: fonts.en.light,
      fontSize: 13,
      lineHeight: 22,
    },
    xsmallBold: {
      fontFamily: fonts.en.bold,
      fontSize: 11,
      lineHeight: 14,
    },
    xsmallRegular: {
      fontFamily: fonts.en.regular,
      fontSize: 11,
      lineHeight: 14,
    },
    xsmallLight: {
      fontFamily: fonts.en.light,
      fontSize: 11,
      lineHeight: 14,
    },
  },
  ar: {
    heroBold: {
      fontFamily: fonts.ar.bold,
      fontSize: 38,
      lineHeight: 65,
    },
    heroRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: 38,
      lineHeight: 65,
    },
    xlargeBold: {
      fontFamily: fonts.ar.bold,
      fontSize: 22,
      lineHeight: 39,
    },
    xlargeRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: 22,
      lineHeight: 39,
    },
    largeBold: {
      fontFamily: fonts.ar.bold,
      fontSize: 18,
      lineHeight: 34,
    },
    largeRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: 18,
      lineHeight: 34,
    },
    largeLight: {
      fontFamily: fonts.ar.light,
      fontSize: 18,
      lineHeight: 34,
    },
    mediumBold: {
      fontFamily: fonts.ar.bold,
      fontSize: 16,
      lineHeight: 34,
    },
    mediumRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: 16,
      lineHeight: 34,
    },
    mediumLight: {
      fontFamily: fonts.ar.light,
      fontSize: 16,
      lineHeight: 34,
    },
    normalBold: {
      fontFamily: fonts.ar.bold,
      fontSize: 14,
      lineHeight: 29,
    },
    normalRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: 14,
      lineHeight: 29,
    },
    normalLight: {
      fontFamily: fonts.ar.light,
      fontSize: 14,
      lineHeight: 29,
    },
    smallBold: {
      fontFamily: fonts.ar.bold,
      fontSize: 13,
      lineHeight: 29,
    },
    smallRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: 13,
      lineHeight: 29,
    },
    smallLight: {
      fontFamily: fonts.ar.light,
      fontSize: 13,
      lineHeight: 29,
    },
    xsmallBold: {
      fontFamily: fonts.ar.bold,
      fontSize: 11,
      lineHeight: 18,
    },
    xsmallRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: 11,
      lineHeight: 18,
    },
    xsmallLight: {
      fontFamily: fonts.ar.light,
      fontSize: 11,
      lineHeight: 18,
    },
  },
} as const

const useFontStyle = () => {
  const lang: Languages = 'en'

  return fontStyles[lang]
}

export default useFontStyle
