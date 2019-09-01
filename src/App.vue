<template>
  <div class="layout-container">

    <Header/>

    <Sidebar/>
<!--        <Test/>-->

    <main class="layout-main">
      <div class="hero"><h1 class="text-center">Another Vue Validator</h1>
        <div class="text-center">Yet another vue validation</div>
      </div>
      <GettingStarted/>
      <!--<Intro></Intro>-->
      <!--<Setup></Setup>-->
<!--      <UsageAndExamples/>-->


      <!--<transition name="fade" mode="out-in">-->
      <!--</transition>-->
    </main>

    <!--<footer>FOOTER</footer>-->
  </div>

</template>

<script>

//console.log("Rule", avv.Rule)
import Vue from 'vue';
import GettingStarted from './chapters/GettingStarted';
import UsageAndExamples from './chapters/UsageAndExamples';
import Intro from './examples/Intro';
import Setup from './examples/Setup';
import ValidationBag from './examples/ValidationBag';
import DeclarativeBasicExample from './examples/DeclarativeBasicExample';
import DeclarativeExample from './examples/DeclarativeExample';
import DeclarativeObjectExample from './examples/DeclarativeObjectExample';
import BasicExample from './examples/BasicExample';
import Dependencies from './examples/Dependencies';
import AsyncValidation from './examples/AsyncValidation';
import AsyncValidationCache from './examples/AsyncValidationCache';

import avv from '../../another-vue-validator/src/avv';
import DemoWithCode from './components/DemoWithCode.vue';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Test from './components/Test';

Vue.use(avv);

// Components
Vue.component('Header', Header);
Vue.component('Sidebar', Sidebar);
Vue.component('Test', Test);

Vue.component('DemoWithCode', DemoWithCode);

// Chapters
Vue.component('GettingStarted', GettingStarted);
Vue.component('UsageAndExamples', UsageAndExamples);

// Examples
Vue.component('Intro', Intro);
Vue.component('Setup', Setup);
Vue.component('ValidationBag', ValidationBag);
Vue.component('BasicExample', BasicExample);
Vue.component('AsyncValidation', AsyncValidation);
Vue.component('AsyncValidationCache', AsyncValidationCache);
Vue.component('DeclarativeBasicExample', DeclarativeBasicExample);
Vue.component('DeclarativeExample', DeclarativeExample);
Vue.component('DeclarativeObjectExample', DeclarativeObjectExample);
Vue.component('Dependencies', Dependencies);

export default {
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
