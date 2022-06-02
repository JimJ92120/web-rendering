<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/examples/1">Example 1</router-link> |
    <router-link to="/examples/2">Example 2</router-link> |
    <router-link to="/examples/3">Example 3</router-link> |
    <router-link to="/examples/4">Example 4</router-link> |
    <router-link to="/examples/5">Example 5</router-link> |
    <router-link to="/examples/6">Example 6</router-link>
  </nav>
  <p>Select an example and press start.</p>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d2deeb;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #d2deeb;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
