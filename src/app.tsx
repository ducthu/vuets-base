import { CreateElement } from "vue";
import { Vue, Component } from 'vue-property-decorator';
import  '@/styles/main.scss';

@Component
export default class App extends Vue {

    mounted(){
        console.log('App mounted');
    }

    render(h: CreateElement){
        return (
            <div>
                <router-view></router-view>
            </div>
        );
    }

}