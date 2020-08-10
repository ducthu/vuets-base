import { Vue, Component } from "vue-property-decorator";
import { CreateElement } from 'vue';

@Component
export default class HomeView extends Vue {

    data(){
        return {};
    }

    mounted(){
        console.log("HomeView mounted");
    }

    render(h: any){
        return (
            <div class="container">
                <h1 class="text-center">Home Page</h1>
            </div>
        );
    }

}