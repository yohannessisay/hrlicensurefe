<template>
  <div
    class=" overflow-y-auto overflow-x-hidden shadow-xl  fixed lg:sticky h-screen lg:h-auto z-40 top-0 bg-gray-900 "
    style="max-width: 380px; background: #285180;"
  >
    <div class="px-8 h-screen">
      <ul class="py-1 ">
        <new-license-side-nav
          :expertLevelId="expertLevelId"
          :adminRole="adminRole"
          :dropdownValue="dropdownValue"
          @applicationTypeSelected="applicationTypeHandler"
          @selectNewLicenseMenu="selectMenu"
        />
        <renewal-side-nav
          :expertLevelId="expertLevelId"
          :adminRole="adminRole"
          :dropdownValue="dropdownValue"
          @applicationTypeSelected="applicationTypeHandler"
          @selectRenewalMenu="selectMenu"
        />
        <verification-side-nav
          :dropdownValue="dropdownValue"
          :adminRole="adminRole"
          @applicationTypeSelected="applicationTypeHandler"
          @selectVerificationMenu="selectMenu"
        />
        <good-standing-side-nav
          :dropdownValue="dropdownValue"
          :adminRole="adminRole"
          @applicationTypeSelected="applicationTypeHandler"
          @selectGoodStandingMenu="selectMenu"
        />
        <ul>
          <li>
            <i
              style="color: white; margin-left:5px"
              class="fa fa-file-text"
              aria-hidden="true"
            ></i>
            <router-link
              style="color:white; font-size: 18px; margin-left:5px"
              to="/admin/report"
            >
              Report
            </router-link>
          </li>
        </ul>
        <ul>
          <li>
            <i
              style="color: white; margin-left:5px"
              class="fa fa-file-text"
              aria-hidden="true"
            ></i>
            <a
              style="color:white; font-size: 18px; margin-left:5px"
              href="https://hrdelk.sandboxaddis.com/s/hrl/app/kibana#/dashboard/c2450830-3817-11ec-9b4d-1fc6319d2633?_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(title:Applications),gridData:(h:7,i:'5f577b01-6de1-44c3-b436-539b2fdeccf7',w:15,x:0,y:0),id:'2650de40-3817-11ec-9b4d-1fc6319d2633',panelIndex:'5f577b01-6de1-44c3-b436-539b2fdeccf7',title:Applications,type:visualization,version:'7.7.0'),(embeddableConfig:(),gridData:(h:7,i:c0aec5b5-af7f-4a6a-96f5-943150bef92c,w:15,x:15,y:0),id:fc1221a0-3818-11ec-9b4d-1fc6319d2633,panelIndex:c0aec5b5-af7f-4a6a-96f5-943150bef92c,type:visualization,version:'7.7.0'),(embeddableConfig:(colors:(Approve:%2399440A,'Approve%20Payment':%23E0752D,'In%20Review':%23447EBC),title:'Application!'s%20Status',vis:(colors:(Approve:%2399440A,'Approve%20Payment':%23E0752D,'In%20Review':%232F575E))),gridData:(h:15,i:f8a85674-fe98-4dcf-b06c-19f0e1ecbb7a,w:28,x:0,y:7),id:'41a1a8e0-3877-11ec-9b4d-1fc6319d2633',panelIndex:f8a85674-fe98-4dcf-b06c-19f0e1ecbb7a,title:'Application!'s%20Status',type:visualization,version:'7.7.0'),(embeddableConfig:(title:'Applications%20By%20Gender'),gridData:(h:15,i:'561b576c-ad39-4187-a493-898e735a0936',w:20,x:28,y:7),id:d5b3bcc0-3878-11ec-9b4d-1fc6319d2633,panelIndex:'561b576c-ad39-4187-a493-898e735a0936',title:'Applications%20By%20Gender',type:visualization,version:'7.7.0'),(embeddableConfig:(title:'Applications%20by%20Profession'),gridData:(h:15,i:'126f4a65-8275-4277-a32d-b5cc7f0608bf',w:25,x:0,y:22),id:'301a9710-3879-11ec-9b4d-1fc6319d2633',panelIndex:'126f4a65-8275-4277-a32d-b5cc7f0608bf',title:'Applications%20by%20Profession',type:visualization,version:'7.7.0'),(embeddableConfig:(title:'Application%20by%20Region',vis:(legendOpen:!f)),gridData:(h:15,i:f8d3a450-6f27-49c8-bc04-31f8ee387e0e,w:23,x:25,y:22),id:'77ebe950-3819-11ec-9b4d-1fc6319d2633',panelIndex:f8d3a450-6f27-49c8-bc04-31f8ee387e0e,title:'Application%20by%20Region',type:visualization,version:'7.7.0')),query:(language:kuery,query:''),timeRestore:!f,title:'new%20license',viewMode:view)&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-30d,to:now))"
              target="_blank"
            >
              Dashboard
            </a>
          </li>
        </ul>

        <!-- start verification Side Nav here -->
        <!-- end verification Side Nav here -->

        <!-- start good standing Side Nav here -->
        <!-- end good standing Side Nav here -->
      </ul>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import NewLicenseSideNav from "./ReviewerSideNavComponents/NewLicenseSideNav.vue";
import RenewalSideNav from "./ReviewerSideNavComponents/RenewalSideNav.vue";
import VerificationSideNav from "./ReviewerSideNavComponents/VerificationSideNav.vue";
import GoodStandingSideNav from "./ReviewerSideNavComponents/GoodStandingSideNav.vue";
import {
  dropdown,
  applicationTypeDD,
} from "./Configurations/ApplicationDetailDropDown";
export default {
  props: ["display"],
  // methods: {
  //   selectMenu(menu) {
  //     this.$emit("changeDisplay", menu);
  //   },
  // },
  components: {
    NewLicenseSideNav,
    RenewalSideNav,
    VerificationSideNav,
    GoodStandingSideNav,
  },
  setup(props, { emit }) {
    const expertLevelId = JSON.parse(localStorage.getItem("allAdminData"))
      .expertLevelId;
    const adminRole = localStorage.getItem("role");

    let dropdownValue = ref({
      ...dropdown,
    });

    const applicationTypeHandler = (value) => {
      applicationTypeDD(value, dropdownValue.value);
    };

    const selectMenu = (menu) => {
      emit("changeDisplay", menu);
    };

    return {
      dropdownValue,
      expertLevelId,
      adminRole,
      selectMenu,
      applicationTypeHandler,
    };
  },
};
</script>
<style>
li {
  cursor: pointer;
}
li router-link {
  color: white;
  font-size: 90px;
}
</style>
