<template>
  <div class="layout-form">
    <div class="form-group" :class="{error: validation.hasError('email')}">
      <div class="label">* Email</div>

      <div class="content"><input
        type="text"
        class="form-control"
        v-model="email"
        v-validate/></div>

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
import {Validator} from '../../../another-vue-validator/src/avv';

export default {
  data: function () {
    return {
      email: ''
    };
  },

  avv: {
    validators: {
      email: function (ctx) {
        return Validator.context(ctx).required().email();
      }
    }
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
