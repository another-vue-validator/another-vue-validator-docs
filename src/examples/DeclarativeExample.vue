<template>
  <div class="layout-form">

    <div class="form-group" :class="{error: validation.show('age')}">
      <div class="label">* Age</div>

      <div class="content"><input
        name="age"
        type="text"
        class="form-control"
        v-model="age"
        v-validate="{
                rules:
                [
                'required',
                'integer',
                'between:10,20'
                ]}"
      /></div>

      <div class="message" v-show="validation.show('age')">{{ validation.firstError('age') }}</div>
    </div>

    <div class="form-group" :class="{error: validation.show('firstname')}">
      <div class="label">* Firstname</div>

      <div class="content"><input type="text" class="form-control"
                                  name="name"
                                  v-model="firstname"
                                  v-validate="{rules: [
                                                  'required: \'Firstname is required, please provide one\''
                                                  ]}"
      /></div>
      <div class="message" v-show="validation.show('firstname')">{{ validation.firstError('firstname') }}</div>
    </div>

    <div class="form-group" :class="{error: validation.show('email')}">
      <div class="label">* Email</div>

      <div class="content"><input type="text" class="form-control"
                                  name="email"
                                  v-model="email"
                                  v-validate="{rules: [
                                                  'required',
                                                  'maxLength: 10, \'Sorry emails cannot exceed 10 characters\'',
                                                  'email: \'That is no email, check your format\''
                                                  ]}"
      /></div>
      <div class="message" v-show="validation.show('email')">{{ validation.firstError('email') }}</div>
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
      age: '',
      firstname: '',
      email: ''
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
