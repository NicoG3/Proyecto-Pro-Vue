
<template>
<h1>Hola</h1>
<p></p>
<p>{{ contador }}</p>
<p></p>
<button @click="incrementar">Incrementar</button>
<p></p>
<button @click="decrementar">Decrementar</button>
</template>

<script setup>
import {ref} from 'vue';
const contador = ref(0);

const incrementar = () => {
  contador.value++;
}

const decrementar = () => {
  contador.value--;
}
</script>



<style scoped>
p{
  color: red;
}

</style>
