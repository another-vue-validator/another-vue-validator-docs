<template>
  <div id="setup">
    <h1>Setup</h1>

    <form>

      <div>
        <input name="firstname"
               v-validate
               v-model="firstname"/>
      </div>

      <div class="val-message" v-if="validation.show('firstname')">
        {{ validation.firstError('firstname') }}
      </div>

      <button @click.prevent="submit">Submit</button>
    </form>
  </div>

</template>
<script>
import {Validator} from '../../../another-vue-validator/src/avv';

export default {

  data() {
    return {
      firstname: ''
    }
  },

  avv: {
    validators: {
      firstname(ctx) {
        return Validator.context(ctx).required();
      }
    }
  },

  methods: {
    submit() {
      this.$validate();
    }
  }


}
</script>
