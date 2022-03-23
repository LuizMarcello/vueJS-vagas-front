import { createApp } from 'vue'
import App from './App.vue'

//Importando o pacote "mitt"
//É um "barramento de evento global", para
//comunicação entre todos os componentes
//da aplicação. 
import mitt from 'mitt'

//Criando a instância do pacote "mitt"
const emitter = mitt()

//definindo algumas configurações globais:

//Iniciando a instância do vueJS com base no componente App
//createApp(App).mount('#app')
const app = createApp(App)

//Configurando a instância do pacote mitt, como sendo uma propriedade global
//Essa propriedade estará disponível para todas as instâncias de
//componentes dentro do app
app.config.globalProperties.emitter = emitter

//Associando a instância do vueJS com o elemento html de id app
app.mount('#app')