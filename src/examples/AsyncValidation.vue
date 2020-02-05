<template>
  <div class="layout-form">
    <div class="form-group" :class="{error: validation.show('domain')}">
      <div class="label">Domain</div>
      <div class="content"><input type="text" class="form-control" v-model="domain"
                                  placeholder="only vuejs.org is available, others are taken"/></div>
      <div class="message">
        {{ validation.firstError('domain') }}
        <i v-if="validation.isValidating('domain')" class="fa fa-spinner fa-spin"></i>
        <i v-if="validation.isPassed('domain')" class="text-success fa fa-check-circle"></i>
      </div>
    </div>
    <div class="form-group">
      <div class="actions">
        <button type="button" class="btn btn-default" @click="reset">Reset</button>
        <button type="button" class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import utils from "../utils";

let id = 0;
import {Validator} from '../../../another-vue-validator/src/avv';

export default {
  data: function () {
    return {
      domain: ''
    };
  },

  validation: {
    validators: {
      domain(ctx) {
        let validator = Validator
          .context(ctx)
          .required()
          .maxLength(20);
        //return validator;

        return validator
          .custom(() => {
            //console.log("validating: ", ctx.value)
            // let hasError = validator.hasImmediateError();
            // if (hasError) return;

            if (!Validator.isEmpty(ctx.value)) {

              let promise = utils.delay(1000, () => {
                if (ctx.value !== 'vuejs.org') {
                  return 'Already taken!';
                }
              });

              return promise;
            }
          });
      }
    }
  },

  methods: {

    submit: async function () {
      let promise = this.$validate();
      promise.then(function (success) {
        if (success) {
          throw new Error(success);
          console.log("validation SUCCEEDS", success)
          //alert('Validation succeeded!');
        } else {
          console.log("VALIDATION FAIL")
        }
      });
    },

    reset: function () {
      this.validation.reset();
    }
  }
}

</script>
