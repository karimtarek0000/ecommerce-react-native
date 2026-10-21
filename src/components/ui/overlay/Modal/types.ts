export type ModalProps = {
  visible: boolean
  headTitle: string
  description: string
  modalBody: () => React.JSX.Element
  closeModal: VoidFunction
}
