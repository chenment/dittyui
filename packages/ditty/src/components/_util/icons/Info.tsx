import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Info',
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path
          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
})
