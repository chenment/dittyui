import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loading',
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
      >
        <path
          d="M12,4 L12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 C18,10.9603196 17.7360885,9.96126435 17.2402578,9.07513926 L18.9856052,8.09853149 C19.6473536,9.28117708 20,10.6161442 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 Z"
          fill="#000000"
          fill-rule="nonzero"
          opacity="0.3"
          transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "
        />
      </svg>
    )
  },
})
