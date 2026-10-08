import { createContext, useContext, useState } from 'react'
import type { Dispatch, ReactNode, SetStateAction } from 'react'

interface ModalContextType {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  openModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextType | null>(null)

export function useModalContext() {
  const ctx = useContext<ModalContextType | null>(ModalContext)
  if (!ctx) {
    throw new Error('Use modal context within the provider')
  }
  return ctx
}

export function ModalContextProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const modelContextValue = {
    isOpen,
    setIsOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  }
  return <ModalContext value={modelContextValue}>{children}</ModalContext>
}
