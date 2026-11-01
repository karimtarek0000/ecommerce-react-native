type AccordionItem = {
  id: number
  title: string
  textBody: string
}

export type AccordionProps = {
  items: AccordionItem[]
  currentId?: number
}
