import Vue,  { CreateElement } from "vue";
import Component from "vue-class-component";

@Component
export default class AboutView extends Vue {
    data(){
        return {};
    }

    mounted(){
        console.log("AboutView mounted");
    }

    render(h: CreateElement){
        return (
            <div class="container" id="articles">
                <h2 class="text-center">About Page</h2>
            </div>
        );
    }
}