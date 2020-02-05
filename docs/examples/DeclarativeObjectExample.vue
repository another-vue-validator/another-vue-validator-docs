<template>
  <div class="layout-form">

    <div class="form-group" :class="{error: validation.show('number')}">
      <div class="label">Number</div>

      <div class="content"><input
        type="text"
        class="form-control"
        v-model="number"
        v-validate="{
                rules:[
                {
                name: 'required',
                fieldName: 'My Number',
                },
                {
                name: 'digit',
                msg: 'Only digits are allowed for My Number'
                },
                {
                name: 'between',
                args: [2,5]
                }
                ]
                }"
      /></div>

      <div class="message" v-show="validation.show('number')">{{ validation.firstError('number') }}</div>
    </div>

    <div class="form-group">
      <div class="actions">
        <button type="button" class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  data() {
    return {number: ''}
  },

  methods: {
    async submit() {
      let success = await this.$validate()
      if (success) {
        alert('Validation succeeded!');
      }
    }
  }
}
</script>
