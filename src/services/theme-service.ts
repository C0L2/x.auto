import { signal, effect } from '@preact/signals-react'

const root = window.document.documentElement

export type Theme = 'dark' | 'light' | 'system'

const storageKey = 'ai-bot-theme'

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'

const savedTheme = (localStorage.getItem(storageKey) as Theme) || systemTheme

export const theme = signal<Theme>(savedTheme)

effect(() => {
  root.classList.remove('light', 'dark')

  root.classList.add(theme.value)
})

export const setTheme = (value: Theme) => {
  localStorage.setItem(storageKey, value)
  theme.value = value
}