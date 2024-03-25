<template>
  <div class="col-4 border border-1 h-100 sidebar d-flex flex-column">
    <div class="d-flex justify-content-between align-items-center p-4">
      <img src="../Imagens/2920072.png" alt="imagem perfil" class="img-perfil">

      <div class="menu d-flex gap-2 align-items-center">
        <img src="../Imagens/statuses vector.svg" alt="icone de status">
        <img src="../Imagens/Subtract.svg" alt="icone de mensagem">
        <img src="../Imagens/options vector.svg" alt="icone de option">
      </div>
    </div>

    <div class="px-3 position-relative">
      <i class="fa-solid fa-magnifying-glass position-absolute search-icon"></i>
      <input placeholder="Search or start a new chat" type="text" class="w-100 rounded border-0">
    </div>

    <div class=" d-flex">
      <div class="flex-grow-1 py-2 text-center border-bottom border-4 conversa">
        <p class="m-0 fw-medium fs-5">Chats</p>
      </div>

      <div class="flex-grow-1 py-2 text-center border-bottom border-4 grupos ">
        <p class="m-0 fw-medium fs-5">Groups</p>
      </div>
    </div>

    <div class="chat flex-grow-1 pt-3 px-4 pb-2 ">
      <div v-for="conversa in conversas" :key="conversa.id"
        class="d-flex justify-content-between align-items-center p-2 border-bottom border-3 talk">
        <div class="d-flex align-items-center gap-3">
          <div class="d-flex justify-content-center align-items-center perfil-container">
            <img :src="conversa.imagem" alt="imagem perfil">
          </div>

          <div>
            <h5>
              {{ conversa.name }}
            </h5>

            <p class="m-0">{{ conversa.mensagem }}</p>
          </div>
        </div>

        <p class="m-0">{{ conversa.hora }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import perfil1 from "@/Imagens/perfil-1.svg";
import perfil2 from "@/Imagens/perfil-2.svg";
import perfil3 from "@/Imagens/perfil-3.svg";
import perfil4 from "@/Imagens/perfil-4.svg";
import perfil5 from "@/Imagens/perfil-5.svg";
import perfil6 from "@/Imagens/perfil-6.svg";

export default {
  name: 'WhatsappSidebar',
  data() {
    return {
      conversas: [
        {
          id: 1,
          name: "Carol",
          imagem: perfil1,
          mensagem: "The meeting is in 12:00 at noon.",
          hora: "13:50"
        },
        {
          id: 2,
          name: "Ana",
          mensagem: "Hello, Girl",
          imagem: perfil2,
          hora: "12:02"
        },
        {
          id: 3,
          name: "Leticia",
          mensagem: "Just try your best and don't worry.",
          imagem: perfil3,
          hora: "11:30"
        },
        {
          id: 4,
          name: "Andressa",
          mensagem: "Take Care",
          imagem: perfil4,
          hora: "09:50"
        },
        {
          id: 5,
          name: "Maria",
          mensagem: "Can you go today?",
          imagem: perfil5,
          hora: "Yesterday"
        },
        {
          id: 6,
          name: "Alice",
          mensagem: "I'm working now",
          imagem: perfil6,
          hora: "Yesterday"
        }
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.img-perfil {
  width: 45px;
}

.sidebar {
  background-color: $pink-200;
}

i {
  color: $pink-400;
}

.menu {
  img {
    width: 32px;
    height: 32px;
  }
}

.search-icon {
  top: 13px;
  left: 28px;
}

input {
  padding: 8px 35px;
  outline: 0;
}

.conversa {
  border-color: $pink-400 !important;

  p {
    color: $pink-400;

  }
}

.grupos {
  border-color: $white-100 !important;

  p {
    color: $white-100;
  }
}

.chat {
  background-color: $white-300;
  overflow-y: scroll;
}

.perfil-container {
  width: 83px;
  height: 83px;
  background-color: $white-100;
  border-radius: 50%;

  img {
    width: 50px;
  }
}

.talk {
  border-color: $pink-400 !important;
}

::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-thumb {
  background-color: $pink-200;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: $pink-400;
}

::-webkit-scrollbar-track {
  background-color: $pink-200;
  border-radius: 4px;
}
</style>