<template lang="pug">
    .row
        .row__title(:style="{ background: color }")
            span {{ title }}
            span ({{value.length}})
        .row__body
            .row__body__cards
                draggable(@change="change" v-model="val" group="people" @start="drag=true" @end="drag=false")
                    card(v-for="card in value" :id="card.id" :val="card.text").row__cards__card
            .row__body__add
                img(src="@/assets/add.png")
                span Добавить карточку
</template>

<script>
    import draggable from 'vuedraggable'

    import card from "./card";
    export default {
        props:['color','title','value'],
        name: "row",
        components:{
            card,
            draggable
        },
        data(){
            return{
                val: this.value,
            }
        },
        methods:{
            change(){
                this.$emit('input', this.val)
            }
        }

    }
</script>

<style scoped lang="scss">
.row {
    min-width: 300px;
    height: max-content;
    &__title{
        display: flex;
        justify-content: space-between;
        height: max-content;
        padding: 10px;
        color: white;
        text-transform: uppercase;
    }
    &__body{
        min-height: 50px;
        padding: 10px;
        background-color: #343640;

        &__cards{
            &__card{
                margin-bottom: 10px;
            }
        }
        &__add{
            display: flex;
            align-items: center;
            margin-top:10px ;
            padding: 10px 0;
            cursor: pointer;
            color: white;

            img{
                width: 20px;
                margin:0  10px;
            }

            &:hover{
                background-color: #16161e;
            }
        }
    }

}
</style>