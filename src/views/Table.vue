<template lang="pug">
    .table
        .table__body
            row(color="#FB7E46"  title="on-hold" :id="0" v-model="hold").table__body__row.first
            row(color="#2C93C0"  title="in-progress" :id="1" v-model="progress").table__body__row
            row(color="#F4CE46"  title="needs-review" :id="2" v-model="review").table__body__row
            row(color="#00B961"  title="approved" :id="3" v-model="approved").table__body__row.last
</template>

<script>

    import row from "../components/row";
    export default {
        name: "Table",
        components:{
            row,
        },
        data(){
            return{

            }
        },
        computed: {
            hold: {
                get () {
                    return this.$store.state.hold
                },
                set (value) {
                    this.$store.commit('UPDATE_HOLD', value)
                }
            },
            progress: {
                get () {
                    return this.$store.state.progress
                },
                set (value) {
                    this.$store.commit('UPDATE_PROGRESS', value)
                }
            },
            review: {
                get () {
                    return this.$store.state.review
                },
                set (value) {
                    this.$store.commit('UPDATE_REVIEW', value)
                }
            },
            approved: {
                get () {
                    return this.$store.state.approved
                },
                set (value) {
                    this.$store.commit('UPDATE_APPROVED', value)
                }
            }
        },
        created() {
            this.$store.dispatch('getCards');

        }

    }
</script>

<style scoped lang="scss">
.table{
    height: 100%;
    overflow-x: auto;


    &__body{
        margin: 0 auto;
        width: max-content;
        display: flex;

        &__row{
            padding: 60px 20px 0 20px;
        }
    }

}
</style>