import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        class="w-10 h-10"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <rect x="0" y="0" width="24" height="24"></rect>
          <rect
            fill="#000000"
            opacity="0.3"
            x="7"
            y="4"
            width="3"
            height="13"
            rx="1.5"
          ></rect>
          <rect
            fill="#000000"
            opacity="0.3"
            x="12"
            y="9"
            width="3"
            height="8"
            rx="1.5"
          ></rect>
          <path
            d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
            fill="#000000"
            fill-rule="nonzero"
          ></path>
          <rect
            fill="#000000"
            opacity="0.3"
            x="17"
            y="11"
            width="3"
            height="6"
            rx="1.5"
          ></rect>
        </g>
      </svg>
    )
  },
})
