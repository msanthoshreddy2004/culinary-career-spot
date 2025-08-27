import * as Dialog from '@radix-ui/react-dialog'

export default function Modal({ open, onOpenChange, title, description, children, footer }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-md rounded-xl bg-white p-5 shadow-lg border">
          {title ? <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title> : null}
          {description ? <Dialog.Description className="mt-1 text-sm text-gray-600">{description}</Dialog.Description> : null}
          <div className="mt-4">{children}</div>
          {footer ? <div className="mt-5 flex justify-end gap-2">{footer}</div> : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
