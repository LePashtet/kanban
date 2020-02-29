<template lang="pug">
    .row
        .row__title(:style="{ background: color }")
            span {{ title }}
            span ({{value.length}})
        .row__body
            .row__body__cards
                draggable(@change="change" v-model="value" group="people" @start="drag=true" @end="drag=false")
                    card( @del="deletee" v-for="card in value" :id="card.id" :val="card.text").row__body__cards__card
            .row__body__add(v-if="!add" @click="add = true")
                img(src="@/assets/add.png")
                span Добавить карточку
            .row__body__area(v-else)
                textarea(v-model="text")
                .row__body__area__bottom
                    button(@click="addCard") Добавить карточку
                    img(src="@/assets/close.svg" @click="close")
</template>

<script>
    import draggable from 'vuedraggable'

    import card from "./card";
    export default {
        props:['color','title','value', 'id'],
        name: "row",
        components:{
            card,
            draggable
        },
        data(){
            return{
                add: false,
                text: '',

            }
        },
        methods:{
            deletee(id){
                this.$store.dispatch('deleteCard', id)
            },
            addCard(){
                this.$store.dispatch('createCard',{row: this.id, text: this.text});
                this.close();
            },
            close(){
                this.add = false;
                this.text = '';
            },
            change(){
                this.$emit('input', this.value)
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

            textarea{
                padding: 10px;
                resize: none;
                height: 70px;
                background-color: #41454d;
                outline: none;
                border: 1px solid #16161e;
                color: white;
            }

            img{
                width: 20px;
                margin:0  10px;
            }

            &:hover{
                background-color: #16161e;
            }
        }
        &__area{
            display: flex;
            margin-top:10px;
            cursor: pointer;
            color: white;
            flex-direction: column;

            textarea{
                padding: 10px;
                resize: none;
                height: 70px;
                background-color: #41454d;
                outline: none;
                border: 1px solid #16161e;
                color: white;
            }

            img{
                width: 20px;
                margin:0  10px;
            }
            &__bottom{
                margin-top: 10px;
                display: flex;

                button{
                    background-color: #41454d;
                    outline: none;
                    color: white;
                    border: none;
                    padding: 10px;
                }

            }


        }
    }

}
</style>