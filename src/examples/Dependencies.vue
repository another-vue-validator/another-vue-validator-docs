<template>
  <div>
    <div class="layout-form">
      <div class="form-group" :class="{error: validation.hasError('email')}">
        <div class="label">* Email</div>

        <div class="content"><input
          type="text"
          class="form-control"
          v-model="email"
          v-validate
        />
        </div>

        <div class="message" v-show="validation.show('email')">{{ validation.firstError('email') }}</div>
      </div>

      <div class="form-group" :class="{error: validation.hasError('phone')}">
        <div class="label">* Phone</div>

        <div class="content"><input
          type="text"
          class="form-control"
          v-model="phone"
          v-validate
        />
        </div>

        <div class="message" v-show="validation.show('phone')">{{ validation.firstError('phone') }}</div>
      </div>

      <div class="form-group">
        <div class="actions">
          <button type="button" class="btn btn-primary" @click="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import {utils} from '../../../another-vue-validator/src/avv';
import {Validator} from '../../../another-vue-validator/src/avv/';

export default {
  data: function () {
    return {
      email: '',
      phone: ''
    };
  },

  avv: {
    validators: {
      email: function (ctx) {

        return Validator
          .context(ctx)
          .custom(() => {
            return requireContactDetail(this)
          })
          .maxLength(50)
          .email("Not a valid email address");
      },
      phone: function (ctx) {

        return Validator
          .context(ctx)
          .custom(() => {
            return requireContactDetail(this)
          })
          .minLength(5)
          .maxLength(15);
      }
    },

    deps: {
      contactRequired: {
        keypaths: ['email', 'phone']
      }
    },
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

function requireContactDetail(data) {
  if (
    utils.isEmpty(data.phone) &&
    utils.isEmpty(data.email)) {
    return "Provide either an email or phone number";
  }
}


</script>
