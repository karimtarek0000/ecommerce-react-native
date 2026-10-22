export type ModalProps = {
  visible: boolean
  headTitle: string
  description: string
  modalBody: () => React.ReactNode
  closeModal: VoidFunction
}
