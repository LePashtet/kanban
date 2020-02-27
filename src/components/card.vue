<template lang="pug">
    .card
        span.card__id <b>id:</b> {{ id }}
        span.card__body {{ val }}
</template>

<script>
    export default {
        props:['id','val'],
        name: "card"
    }
</script>

<style scoped lang="scss">
.card{
    font-weight: 200;
    color: white;
    background-color: #16161e;
    padding: 10px;

    span{
        margin-bottom: 20px;
        display: block;
    }
}
</style>