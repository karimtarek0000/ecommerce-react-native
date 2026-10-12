export type TypographyVariant =
  | 'heroBold'
  | 'heroRegular'
  | 'xlargeBold'
  | 'xlargeRegular'
  | 'largeBold'
  | 'largeRegular'
  | 'largeLight'
  | 'mediumBold'
  | 'mediumRegular'
  | 'mediumLight'
  | 'normalBold'
  | 'normalRegular'
  | 'normalLight'
  | 'smallBold'
  | 'smallRegular'
  | 'smallLight'
  | 'xsmallBold'
  | 'xsmallRegular'
  | 'xsmallLight'

export type TypographyStyle = {
  fontFamily: string
  fontSize: number
  lineHeight: number
}

export type Languages = 'en' | 'ar'
export type TypographyStyles = Record<TypographyVariant, TypographyStyle>
