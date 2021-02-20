<template>
  <nav
    class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-white container-p-x"
    id="layout-navbar"
  >
    <div class="navbar-nav align-items-lg-center ml-auto mr-2">
      <button
        v-on:click="$emit('log-out')"
        class="btn btn-danger font-weight-bold my-1"
      >
        Sign Out
      </button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>