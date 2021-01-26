import lang from '@/config/lang'

export default {
  exit () {
    if (confirm(lang.current.exit_application)) {
      navigator.app.exitApp()
    }
  },
  githubPage () {
    window.open('', '_blank')
  }
}
