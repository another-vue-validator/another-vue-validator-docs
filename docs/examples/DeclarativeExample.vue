<template>
  <div class="layout-form">

    <div class="form-group" :class="{error: validation.hasError('email')}">
      <div class="label">* Email</div>

      <div class="content"><input
        type="text"
        class="form-control"
        v-model="email"
        v-validate="{
                rules:
                [
                'required:Mail is required, please provide one',
                'integer'
                ]}"
      /></div>

      <div class="message" v-show="validation.show('email')">{{ validation.firstError('email') }}</div>
    </div>


    <div class="form-group" :class="{error: validation.hasError('dynamicemail')}">
      <div class="label">* Dynamic Email</div>

      <div class="content"><input
        type="text"
        class="form-control"
        v-model="dynamicemail"
        v-validate="{rules: ['required']}"
        /></div>
      <div class="message" v-show="validation.show('dynamicemail')">{{ validation.firstError('dynamicemail') }}</div>
    </div>

    <div class="form-group" >
      <div class="label">* Moo</div>

      <div class="content"><input
        type="text"
        class="form-control"
        v-model="moo"

      /></div>
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
      //obj: { active: true},
      //pok: {email: ''},
      email: '',
      dynamicemail: '',
      moo: ''
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
  },

  //
  // mounted() {
  //
  //   setTimeout(() => {
  //     console.log("active ", this.obj.active)
  //     this.obj.active = false;
  //     console.log("active ", this.obj.active)
  //   }, 5000);
  // },
}
</script>
