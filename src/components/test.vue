<template>
  <div class="fc-head-container">
    <h1>Test</h1>
    <hr/>
    <div class="field-checkbox">
      <Checkbox inputId="binary" v-model="checked" :binary="true" />
      <label for="binary">{{checked}}</label>
    </div>
  </div>


</template>