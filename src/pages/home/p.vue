<template>
  <div class="home-detail">
      <hrx-input 
        v-model="mateIdNo"
        v-bind="post"
        type="tel"
        @input="changeData"
        @blur="handleBlur"
        labelContent="配偶姓名"
        placeholder="请输入姓名"
        :required= true
        :readonly= true
        maxlength="5" />
      <input v-model="msg" type="number" />
  </div>
</template>
<script>
import hrxInput from '../../components/input/input.vue';
export default {
  components: {
    hrxInput,
  },
  data () {
    return {
      mateIdNo: '2',
      msg: '',
      post: {
        id: 1,
        title: 'My Journey with Vue'
      }
    }
  },
  methods: {
    changeData (...rest) {
      console.log(rest)
    },
    handleBlur () {
      if (this.mateIdNo) {
        let val = this.mateIdNo.trim();
        console.log(val)
      }
    }
  }
}
</script>
