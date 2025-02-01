# Nearby 📍

O **Nearby** é um aplicativo móvel desenvolvido em React Native com TypeScript que permite aos usuários visualizar estabelecimentos próximos em um mapa e aproveitar descontos exclusivos utilizando QR Codes. Com uma interface intuitiva e funcionalidades poderosas, o app oferece uma experiência única para descobrir e aproveitar ofertas locais. 🛍️✨

---

## Funcionalidades 🚀

- **📍 Mapa de Estabelecimentos Próximos**: Visualize no mapa todos os estabelecimentos parceiros que oferecem descontos e benefícios.
- **🎟️ Descontos com QR Code**: Gere e escaneie QR Codes para resgatar descontos diretamente nos estabelecimentos.
- **🔍 Busca e Filtros**: Encontre estabelecimentos por categoria, distância ou avaliação.
- **🏬 Detalhes do Estabelecimento**: Veja informações detalhadas sobre cada estabelecimento, como endereço, horário de funcionamento e ofertas disponíveis.
- **📍 Integração com GPS**: Utilize o GPS do dispositivo para encontrar estabelecimentos próximos à sua localização atual.

---

## Tecnologias Utilizadas 🛠️

- **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, melhorando a qualidade e a manutenção do código.
- **Expo**: Facilita o desenvolvimento e a publicação do app.
- **React Navigation**: Gerencia a navegação entre telas no app.
- **React Native Maps**: Integração de mapas para visualização de estabelecimentos.
- **QR Code Scanner**: Biblioteca para leitura e geração de QR Codes.
- **Redux ou Context API**: Gerenciamento de estado global do app.
- **API de Localização**: Para obter a localização do usuário e estabelecimentos próximos.

---

## Como Executar o Projeto ▶️

Siga os passos abaixo para configurar e executar o projeto localmente:

### Pré-requisitos 📋

- Node.js (versão 16 ou superior)
- Yarn ou npm
- Expo CLI instalado globalmente (`npm install -g expo-cli`)
- Um dispositivo físico ou emulador para testar o app

### Passos 🚶‍♂️

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nearby.git
   cd nearby
   ```
2. Instale as dependências:
   ```bash
   yarn install
   # ou
   npm install
   ```
3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione as chaves necessárias, como chaves de API para mapas e serviços de localização.

4. Inicie o servidor de desenvolvimento:
   ```bash
   expo start
   ```
5. Escaneie o QR Code com o aplicativo Expo Go (disponível na App Store ou Google Play) ou execute em um emulador.

---

## Estrutura do Projeto 🗂️

```
nearby/
├── assets/              # Arquivos de mídia (imagens, ícones, fonts)
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── screens/         # Telas do aplicativo
│   ├── navigation/      # Configuração de navegação
│   ├── services/        # Integrações com APIs e serviços externos
│   ├── store/           # Gerenciamento de estado (Redux ou Context API)
│   ├── utils/           # Funções utilitárias e helpers
│   └── App.tsx          # Ponto de entrada do aplicativo
├── .env                 # Variáveis de ambiente
├── app.json             # Configurações do Expo
├── package.json         # Dependências do projeto
├── tsconfig.json        # Configurações do TypeScript
```

---

## Contribuição 🤝

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. Push para a branch:
   ```bash
   git push origin feature/nova-feature
   ```
5. Abra um Pull Request.

---

## Licença 📜

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

## Contato 📞

Para dúvidas ou sugestões, entre em contato:

- **Email**: edulacerdaaa@gmail.com
- **GitHub**: [seu-usuario](https://github.com/lacerdaaa)
