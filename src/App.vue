<template>
  <div class="container-fluid ms-0">
    <div class="vh-100 row ">
      <WhatsappSidebar />
      <WhatsappChat />
    </div>
  </div>
</template>

<script>
import WhatsappSidebar from "@/components/whatsapp-sidebar.vue";
import WhatsappChat from "@/components/whatsapp-chat.vue";

export default{
  name: 'App',
  components:{
    WhatsappSidebar,
    WhatsappChat,
  }
}
</script>
