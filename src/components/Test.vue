<template>

  <div>
    <h1>TEST</h1>

    <p>
      <input
        v-test
        name="one"
        v-model="form.one"
      />
    <p/>

    <input
      v-test
      name="one"
      v-model="form.one"
    />


    <p/>

    <p/>
      <input
        v-test
        name="two"
        v-model="form.two"
      />
    <p/>
    {{form}}
    <p/>


  </div>

</template>

<script>

import Vue from 'vue';
import TestDirective from './TestDirective';

export default {

  data() {

    return {
      form: {}
    }
  }

}

</script>
