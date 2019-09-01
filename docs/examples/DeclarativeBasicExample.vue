<template>
  <div class="layout-form">

    <div class="form-group" :class="{error: validation.hasError('firstname')}">
      <div class="label">* Firstname</div>

      <div class="content"><input type="text" class="form-control"
                                  v-model="firstname"
                                  v-validate="{rules: 'required'}"
      /></div>
      <div class="message" v-show="validation.show('firstname')">{{ validation.firstError('firstname') }}</div>
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
  data: function () {
    return {
      firstname: ''
    };
  },

  methods: {
    submit: function () {
      this.$validate()
        .then(function (success) {
          if (success) {
            alert('Validation succeeded!');
          }
        });
    }
  }
}
</script>
