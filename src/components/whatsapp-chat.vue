<template>

    <div class="col-8 px-0 d-flex flex-column h-100" >
        <div class="d-flex justify-content-between py-2 px-4 barra-chat w-100  ">
            <div class="d-flex align-items-center gap-3">

            
                <img src="@/Imagens/perfil-1.svg" alt="imagem perfil " class="perfil-container">
                

                <div>
                    <h4 class="m-0">Carol</h4>
                    <p class="m-0">Online</p>   
                </div>

            </div>

            <div class="d-flex gap-4 align-items-center ">
                <i class="fa-solid fa-magnifying-glass search-icon fs-5"></i>
                <img src="../Imagens/options vector.svg" alt="icone de option">
            </div>


        
        </div>
        <div class="flex-grow-1 chat-box p-3 d-flex flex-column gap-2">

            <div class="chat-baloon p-2" :class="ownerMessage === 'me' ? 'me-baloon' : 'other-baloon'" >
                <h6 class="m-0">
                    Hello!!

                </h6>
            </div>

            <div class="chat-baloon p-2" :class="ownerMessage !== 'me' ? 'me-baloon' : 'other-baloon'" >
                <h6 class="m-0">
                    Hello

                </h6>
            </div>

            <div class="chat-baloon p-2" :class="ownerMessage !== 'me' ? 'me-baloon' : 'other-baloon'" >
                <h6 class="m-0">
                    How are you doing?
                </h6>
            </div>

            <div  v-for="(message, index) in messageHistory" :key="index" class="chat-baloon p-2" :class="ownerMessage === 'me' ? 'me-baloon' : 'other-baloon'" >
                <h6 class="m-0"> 
                    {{ message }}

                </h6>
            </div>

        </div>

        <form  @submit.prevent="sendMessage" class="d-flex align-items-center gap-4 barra-mensagem">
            <button class="btn">
                <i class="far fa-laugh-beam"></i>
            </button>

            <button class="btn">
                <img src="@/Imagens/Vector.png" alt=""  class="btn-arq">
            </button>
             
            <input v-model="message" type="text " placeholder="Send a mensage" class="w-100 rounded border-0 "/>

            <button  type="submit" class="btn">
                <img src="@/Imagens/send.png" alt="" class="btn-send">
            </button>
        </form>
    </div>
</template>

<script>
    export default{

        name: "WhatsappChat",
        data() {
            return {
                messageHistory: [],
                ownerMessage: "me",
                message: "",

            }
        },

        methods: {
            sendMessage() {
                const newHistory = [...this.messageHistory, this.message]
                this.messageHistory = newHistory
                this.message = ''
                
                
            }
        }

    }






    
</script>

<style lang="scss" scoped>
.perfil-container{
    width: 83px;
    height:83px;
    background-color: $alice-100;
    border-radius: 50%;

    img{
        width: 50px;
    }

 }

 .search-icon{
    color:$alice-100;
    
 }

 .barra-chat{

    background-color: $pink-200;

 }

 .barra-mensagem{
    background-color: $pink-200;
    
    .btn{
        i{
            color: $white-100 ;
            font-size: 30px;
        }
        
    }
 }

 
 input{
    padding: 8px 35px;
    outline: 0;
 }

 .btn-send{
    width: 25px;
 }

 .btn-arq{
    width: 15px;
 }

 .chat-box{
    background-color: $white-200;
    overflow-y: scroll;
 }
 .chat-baloon{
    background-color: $pink-200;
    max-width: 300px;

 }
 .me-baloon{
    border-radius: 10px 0px 10px 10px ;
    align-self: flex-end;
    width: 250px;


 }

 .other-baloon{
    border-radius: 0px 10px 10px 10px ;
    background-color: $pink-400;
    width: 250px;
 }

 ::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-thumb {
  background-color: $pink-200;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color:  $pink-400;
}

::-webkit-scrollbar-track {
  background-color: $pink-200;
  border-radius: 4px;
}
</style>