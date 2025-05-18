# Mobile Gas Station App

Aplicativo desenvolvido como **trabalho final da disciplina de Programação para Dispositivos Móveis** no Instituto Federal. O projeto tem como objetivo principal oferecer uma solução prática para usuários localizarem postos de combustíveis próximos, além de funcionalidades auxiliares como comparação entre preços de gasolina e etanol.

> ⚠️ **Aviso:** Este aplicativo ainda está em fase de aprimoramento. Algumas funcionalidades estão representadas de forma estática ou parcial, o aplicativo em si está em fase de proposta e o que foi desenvolvido foi majoritariamente a ideia e algumas funcionalidades principais de navegação.

---

## 📱 Funcionalidades Implementadas

- **Listagem de postos de combustíveis:** Exibição de postos cadastrados com suas respectivas localizações e preços (dados simulados).
- **Simulação de mapa:** Um print estático do Google Maps é utilizado como referência visual. Está previsto para ser substituído por uma API real de mapas (como Google Maps SDK ou Mapbox).
- **Comparador de preço entre Gasolina e Etanol:** Ferramenta que calcula automaticamente qual combustível compensa mais abastecer com base nos valores informados.
- **Visualização de notícias:** Exibição de manchetes sobre o setor de combustíveis. Atualmente, as notícias são estáticas e desatualizadas; pretende-se implementar a integração com uma API de notícias em tempo real.
- **Tela de login/cadastro:** Interface funcional, porém sem validação real — a integração com um banco de dados para autenticação é um dos próximos passos de um possível desenvolvimento.

---

## 🧪 Funcionalidades a Melhorar

- Integração com API de mapas em tempo real para exibir localização dinâmica.
- Implementação de API de notícias para obter dados atualizados.
- Conexão com banco de dados real para login, cadastro e persistência de dados dos usuários.
- Melhorias no design da interface e experiência do usuário.

---

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **Expo**
- **JavaScript**

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

  ```bash
  git clone https://github.com/fabricioabdalla/Mobile-Gas-Station-App.git
  ```

2. **Instale as Dependências**
   
  ```bash
  cd Mobile-Gas-Station-App
  npm install
  ```

3. **Inicie o projeto:**

```bash
npx expo start
```

4. **Execute no seu smartphone:**

Use o app **Expo Go** para escanear o QR Code.

Ou execute em um emulador Android/iOS já configurado, caso prefira utilize o site próprio do [Expo go](https://expo.dev/go)

---

## 📄 **Licença**
Projeto desenvolvido para fins acadêmicos. Pode ser usado e modificado livremente (MIT License).


