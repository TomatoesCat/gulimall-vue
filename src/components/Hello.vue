<template>
  <div>
    <h1>Hello world, {{name}}</h1>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "zhangsan",
      radio: "2"
    };
  },
};
</script>

<style>
</style>