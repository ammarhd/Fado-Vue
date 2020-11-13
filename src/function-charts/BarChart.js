import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: ["options"],
    watch: {
        chartData: {
            handler: function() {

                this.$data._chart.update();
            },
        }
    },

    mounted() {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object

        this.renderChart(this.chartData, this.options);
    },
};