<template lang="pug">
    .card
        span.card__id <b>id:</b> {{ id }}
        span.card__body {{ val }}
        img(src="@/assets/close.svg" @click="deletee")
</template>

<script>
export default {
  props: ["id", "val"],
  name: "card",
  methods: {
    deletee() {
      this.$emit("del", this.id);
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  font-weight: 200;
  color: white;
  background-color: #16161e;
  padding: 10px;
  display: flex;
  flex-direction: column;
  img {
    cursor: pointer;
  }
  span {
    margin-bottom: 20px;
    display: block;
  }
}
</style>
