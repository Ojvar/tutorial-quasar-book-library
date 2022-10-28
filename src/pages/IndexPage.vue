<template>
  <q-page class="row items-center justify-evenly"> </q-page>
</template>

<script setup lang="ts">
import { TestBooks } from 'src/models';

new TestBooks().run();
</script>
