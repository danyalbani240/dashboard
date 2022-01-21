<template>
  <div @click="$store.commit('sidebar/toggleSidebar')"  class="toggle  inline-flex items-center justify-center  ml-2  cursor-pointer">
        <img src="../assets/images/toggleicon.svg" alt="">
    </div>
</template> 

<script>
export default {
    computed:{
      closed(){
        return this.$store.state.sidebar.isClosed;
      }
    }
}
</script>

<style scoped>
.toggle{
 width: 32px;
height: 32px; 
background: #15AB89;
box-shadow: 0px 0px 10px #15AB89;
border-radius: 5px; 


/* transform: translateX(-50%); */
  transition: all 0.4s ease-in;

}
.toggle.closed{
  transform: translateX(-100%);
  transition: all 0.4s ease-in;

  }
  </style>