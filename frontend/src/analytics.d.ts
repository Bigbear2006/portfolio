interface Umami {
  track: (eventName: string, eventData?: Record<string, any>) => void
}

interface Window {
  umami?: Umami
}
