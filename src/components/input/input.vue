<template>
  <div>
    <div :class="['hrx-input', 'clear']">
      <div class="test">
        {{labelContent}}
        <span class="input-norequire" v-if="!required">选填</span>
      </div>
      <div class="hrx-input-box">
        <input :class="['input-style', type==='select' ? 'select-style' : '']"
          :style="{'color': color, 'line-height': isIOS}"
          :readonly="readonly"
          v-model="currentValue"
          :placeholder="placeholder"
          :type="type"
          :name="name"
          :min="min"
          :max="max"
          :minlength="minlength"
          :maxlength="maxlength"
          @change.prevent="handleChange"
          @focus.prevent="handleFocus"
          @blur.prevent="handleBlur"
          @click.prevent="handleClick"
          @keyup.prevent="handleKeyup($event)"
        />
        {{title}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hrx-input',
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: String,
    },
    minlength: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    labelContent: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#000',
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
  },
  data () {
    return {
      currentValue: parseInt(this.maxlength)>0 ? this.value.substring(0,parseInt(this.maxlength)) : this.value,
      focus: false,
      isIOS: '30px',
      timer: null,
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val);
      if (this.type === 'tel') {// 只能输入数字
        this.currentValue = this.currentValue ? this.currentValue.replace(/[^\0-9\-]/g, '') : "";
      } else if (this.type === 'email') {
        this.currentValue = this.currentValue ? this.currentValue.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.\_\-]/g, '') : "";
      } else if (this.type === 'number') {// 带有上下加减的箭头数字
        this.currentValue = this.currentValue ? this.currentValue.replace(/[^\d]/g, '') : "";
      } else {
        this.currentValue = this.currentValue ? this.currentValue.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.\_\-\/\,\!，。；#&（）、()]/g, '') : "";
      }
    },
    value (val) {
      this.currentValue = parseInt(this.maxlength)>0 ? this.value.substring(0,parseInt(this.maxlength)) : this.value;
    }
  },
  methods: {
    handleChange () {
      this.$emit('change');
    },
    handleClick () {
      this.$emit('click');
    },
    handleFocus () {
      if (this.currentValue && this.currentValue.indexOf('@') !== -1) {
        var valArr = this.currentValue.split('@');
        if (valArr.length === 2 && valArr[1]) {
          this.autotipShow = true;
        }
      }
      this.$emit('focus');
    },
    handleBlur () {
      var _this = this;
      this.currentValue = this.currentValue ? this.currentValue.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.\_\-\/\,\!，。；#&（）、()]/g, '') : "";
      // 处理空字符串
      this.currentValue = this.currentValue ? this.currentValue.replace(/(^\s*)|(\s*$)/g, '') : "";
      this.$emit('blur');
    },
    handleKeyup (ev) {
      this.focus = true;
      if (this.type === 'email') {
        if (this.currentValue && this.currentValue.indexOf('@') !== -1) {
          var valArr = this.currentValue.split('@');
          if (valArr.length === 2 && valArr[1]) {
            this.autotipShow = true;
          }
        }
      }
      this.$emit('keyup');
    },
    select (val) {
      this.currentValue = val;
      this.autotipShow = false;
    }
  }
}
// 外部使用 需引入并注册为组件
//import hrxInput from '../../components/input/input.vue';
// <hrx-input 
//   v-model="mateIdNo"
//   v-bind="post"
//   type="tel"
//   @input="changeData"
//   @blur="handleBlur"
//   labelContent="配偶姓名"
//   placeholder="请输入姓名"
//   :required= true
//   :readonly= true 
//   maxlength="5" />
</script>
