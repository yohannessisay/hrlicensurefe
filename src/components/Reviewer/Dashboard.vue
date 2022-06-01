<template>
  <div>
    <div class="flex flex-row">


      <iframe
        src="https://hrdelk.sandboxaddis.com/s/hrl/app/kibana#/dashboard/661420a0-e0aa-11ec-8ff1-6f15801473c2?embed=true&embed=true&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(colors:('New%20Licence':%23E0F9D7),vis:(colors:('New%20Licence':%237EB26D))),gridData:(h:7,i:'4db6c2c8-09c9-41b3-a911-ac271ba74910',w:11,x:0,y:0),id:'45dbc430-e0ac-11ec-8ff1-6f15801473c2',panelIndex:'4db6c2c8-09c9-41b3-a911-ac271ba74910',type:visualization,version:'7.7.0'),(embeddableConfig:(colors:('New%20%20Licence':%23CFFAFF),title:In-process,vis:(colors:('New%20%20Licence':%239AC48A))),gridData:(h:7,i:b4527055-2f41-4ecf-832a-56a23c2ba2d5,w:11,x:11,y:0),id:d5899390-e0ad-11ec-8ff1-6f15801473c2,panelIndex:b4527055-2f41-4ecf-832a-56a23c2ba2d5,title:In-process,type:visualization,version:'7.7.0'),(embeddableConfig:(),gridData:(h:9,i:d09c4350-c857-46c1-8fff-01218e1cfa7c,w:25,x:23,y:0),id:'50924c70-e0aa-11ec-8ff1-6f15801473c2',panelIndex:d09c4350-c857-46c1-8fff-01218e1cfa7c,type:visualization,version:'7.7.0'),(embeddableConfig:(colors:(Applications:%23447EBC),vis:(colors:(Applications:%23447EBC,Rejected:%23E5AC0E))),gridData:(h:8,i:'104b3aa9-6215-435f-8a38-f607be63b81e',w:11,x:0,y:7),id:bcbaba70-e0b1-11ec-8ff1-6f15801473c2,panelIndex:'104b3aa9-6215-435f-8a38-f607be63b81e',type:visualization,version:'7.7.0'),(embeddableConfig:(colors:(Applications:%23447EBC),vis:(colors:(Applications:%23447EBC,Rejected:%23E5AC0E))),gridData:(h:8,i:c25efb33-f977-48d5-9407-085dd2bb8edf,w:11,x:11,y:7),id:'0103e3d0-e0b4-11ec-8ff1-6f15801473c2',panelIndex:c25efb33-f977-48d5-9407-085dd2bb8edf,type:visualization,version:'7.7.0'),(embeddableConfig:(),gridData:(h:6,i:'1167d9fe-5394-4dd9-a91f-f7a2183fb943',w:12,x:23,y:9),id:'985373a0-e0ae-11ec-8ff1-6f15801473c2',panelIndex:'1167d9fe-5394-4dd9-a91f-f7a2183fb943',type:visualization,version:'7.7.0'),(embeddableConfig:(),gridData:(h:6,i:'43b12b60-0106-404f-863b-25e151a8019c',w:13,x:35,y:9),id:'350bb0e0-e0af-11ec-8ff1-6f15801473c2',panelIndex:'43b12b60-0106-404f-863b-25e151a8019c',type:visualization,version:'7.7.0'),(embeddableConfig:(),gridData:(h:12,i:ed06f7c6-731a-4596-8342-5a31493b6a46,w:22,x:0,y:15),id:'916cece0-e0b5-11ec-8ff1-6f15801473c2',panelIndex:ed06f7c6-731a-4596-8342-5a31493b6a46,type:lens,version:'7.7.0'),(embeddableConfig:(),gridData:(h:17,i:e461f587-5bb6-4fac-87a6-f7338888deb5,w:25,x:23,y:15),id:b7287910-e0b8-11ec-8ff1-6f15801473c2,panelIndex:e461f587-5bb6-4fac-87a6-f7338888deb5,type:lens,version:'7.7.0')),query:(language:kuery,query:''),timeRestore:!f,title:HRL_Dashboard,viewMode:view)&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-1y,to:now))"
        height="900" width="1800"></iframe>

    </div>
  </div>
</template>

<script>
import ReviewerSideNav from "./ReviewerSideNav.vue";
import ReviewerNavBar from "./ReviewerNavBar";
import Title from "@/sharedComponents/TitleWithIllustration";
import { ref } from "vue";
export default {
  components: {
    ReviewerSideNav,
    ReviewerNavBar,
    Title,
  },
  setup() {
    let display = ref("dashboard");

    const displaySet = (menu) => {
      display.value = menu;
    };

    return {
      displaySet,
      display,
    };
  },
};
</script>

