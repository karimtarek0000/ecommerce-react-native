import fonts from '@/constants/fonts'
import { type Languages, type TypographyStyles } from '@/types'
import { scalingMethods } from '@/utils'
import useTranslations from './useTranslations'
const { FS, VS } = scalingMethods

const fontStyles: Record<Languages, TypographyStyles> = {
  en: {
    heroBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(38),
      lineHeight: VS(50),
    },
    heroRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(38),
      lineHeight: VS(50),
    },
    xlargeBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(22),
      lineHeight: VS(30),
    },
    xlargeRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(22),
      lineHeight: VS(30),
    },
    largeBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(18),
      lineHeight: VS(26),
    },
    largeRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(18),
      lineHeight: VS(26),
    },
    largeLight: {
      fontFamily: fonts.en.light,
      fontSize: FS(18),
      lineHeight: VS(26),
    },
    mediumBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(16),
      lineHeight: VS(26),
    },
    mediumRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(16),
      lineHeight: VS(26),
    },
    mediumLight: {
      fontFamily: fonts.en.light,
      fontSize: FS(16),
      lineHeight: VS(26),
    },
    normalBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(14),
      lineHeight: VS(22),
    },
    normalRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(14),
      lineHeight: VS(22),
    },
    normalLight: {
      fontFamily: fonts.en.light,
      fontSize: FS(14),
      lineHeight: VS(22),
    },
    smallBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(13),
      lineHeight: VS(22),
    },
    smallRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(13),
      lineHeight: VS(22),
    },
    smallLight: {
      fontFamily: fonts.en.light,
      fontSize: FS(13),
      lineHeight: VS(22),
    },
    xsmallBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(11),
      lineHeight: VS(14),
    },
    xsmallRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(11),
      lineHeight: VS(14),
    },
    xsmallLight: {
      fontFamily: fonts.en.light,
      fontSize: FS(11),
      lineHeight: VS(14),
    },
  },
  ar: {
    heroBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(38),
      lineHeight: VS(65),
    },
    heroRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(38),
      lineHeight: VS(65),
    },
    xlargeBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(22),
      lineHeight: VS(39),
    },
    xlargeRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(22),
      lineHeight: VS(39),
    },
    largeBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(18),
      lineHeight: VS(34),
    },
    largeRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(18),
      lineHeight: VS(34),
    },
    largeLight: {
      fontFamily: fonts.ar.light,
      fontSize: FS(18),
      lineHeight: VS(34),
    },
    mediumBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(16),
      lineHeight: VS(34),
    },
    mediumRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(16),
      lineHeight: VS(34),
    },
    mediumLight: {
      fontFamily: fonts.ar.light,
      fontSize: FS(16),
      lineHeight: VS(34),
    },
    normalBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(14),
      lineHeight: VS(29),
    },
    normalRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(14),
      lineHeight: VS(29),
    },
    normalLight: {
      fontFamily: fonts.ar.light,
      fontSize: FS(14),
      lineHeight: VS(29),
    },
    smallBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(13),
      lineHeight: VS(29),
    },
    smallRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(13),
      lineHeight: VS(29),
    },
    smallLight: {
      fontFamily: fonts.ar.light,
      fontSize: FS(13),
      lineHeight: VS(29),
    },
    xsmallBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(11),
      lineHeight: VS(18),
    },
    xsmallRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(11),
      lineHeight: VS(18),
    },
    xsmallLight: {
      fontFamily: fonts.ar.light,
      fontSize: FS(11),
      lineHeight: VS(18),
    },
  },
} as const

const useFontStyle = (switchLanguage?: Languages) => {
  const { currentLanguage } = useTranslations()

  return fontStyles[switchLanguage ?? currentLanguage]
}

export default useFontStyle
