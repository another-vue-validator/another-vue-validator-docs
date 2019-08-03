<template>
  <form>

    <div>
      <label>Firstname</label>
    </div>

    <div>
      <input name="firstname"
             v-model="firstname"/>
    </div>

    <div class="val-message">
      <div>
        {{ bag.firstError('firstname') }}
      </div>
    </div>

    <h4>Form status:</h4>

    <div>Has Error? {{hasError}}</div>
    <div>Submitted? {{submitted}}</div>
    <div>
      Number of errors: {{ bag.countErrors() }}
    </div>

    <div>
      All errors:

      <ul class="all-errors">
        <li v-for="fieldErrors in bag.allErrors()">
          <ul>
            <li v-for="error in fieldErrors">
              <div class="val-message">{{ error}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div>
      All error fields:

      <ul class="all-errors">
        <li v-for="field in bag.allErrorFields()">

          <ul>
            <li v-for="error in field.errors()">
              <div class="val-message">{{$utils.prettyLabel(field.name)}} : {{error}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>


    <button @click.prevent="submit">Submit</button>

    <button @click.prevent="reset">Reset</button>

  </form>

</template>
<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .all-errors {
    margin: 5px;
  }

</style>
<script>
import ValidationBag from '../../../another-vue-validator/src/avv/core/validation-bag';
import * as utils from '../../../another-vue-validator/src/avv/utils/utils';

export default {

  data() {
    return {
      bag: null,
      submitted: false,
      firstname: ''
    }
  },

  created() {
    this.$utils = utils;
    this.bag = new ValidationBag({vm: this});
    this.bag.addField({keypath: 'firstname'});

    this.$watch('firstname', (newVal, oldVal) => {
      this.validate();
    });
  },

  computed: {
    hasError() {
      return this.bag.hasError();
    }
  },

  methods: {
    submit() {
      this.validate();
      if (this.bag.hasError()) {
        return;

      } else {
        this.submitted = true;

      }
    },

    reset() {
      this.bag.removeErrors();
      this.submitted = false;
    },

    validate() {

      // First we clear all errors
      this.bag.removeErrors();

      let field = 'firstname';

      // Perform validations and add errors when a validation fails
      if (this[field].trim() === '') {
        this.bag.addError(field, "Required!");
      }
    }
  }
}
</script>
