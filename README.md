# Documentação do Projeto - Catálogo de Produtos

## Visão Geral

Este projeto é um aplicativo de catálogo de produtos desenvolvido em React Native. O aplicativo permite visualizar uma lista de produtos, excluir produtos e ver detalhes de cada produto.

## Instruções para Rodar a Aplicação

### Requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado. Você pode baixá-lo [aqui](https://nodejs.org/).
- **npm**: O npm é instalado automaticamente com o Node.js.

### Rodar a Aplicação em um Emulador ou Dispositivo Físico

1. **Certifique-se de ter o Expo CLI instalado.** Se ainda não o tiver, instale-o globalmente.

```bash
   npm install -g expo-cli
```

2. **Clone o repositório do projeto.**

```bash
   git clone <URL_DO_REPOSITORIO>
```

3. **Navegue até o diretório do projeto.**

```bash
   cd <NOME_DO_DIRETORIO_DO_PROJETO>
```

4. **Instale as dependências do projeto.**

```bash
   npm install
```

5. **Inicie o servidor de desenvolvimento Expo.**

```bash
   npx expo start
```

6. **Para rodar o aplicativo em um emulador ou dispositivo físico:**
   - **Emulador Android:** Certifique-se de que o Android Studio está instalado e o emulador está configurado. Pressione `a` no terminal para abrir o app no emulador Android.
   - **Emulador iOS:** Certifique-se de que você está em um sistema macOS com Xcode instalado. Pressione `i` no terminal para abrir o app no emulador iOS.
   - **Dispositivo Físico:** Escaneie o QR Code exibido no terminal com o aplicativo Expo Go, disponível na Google Play Store ou App Store.

### Instalar o APK no Dispositivo

1. **Baixe o arquivo APK:** O APK do aplicativo está disponível para download através do Expo. Você pode acessar o APK pelo link fornecido na Expo [neste local](https://expo.dev/artifacts/eas/twCdBAGTFovecv6nnvex3W.apk).

2. **Permita a instalação de aplicativos de fontes desconhecidas:** Antes de instalar o APK, você precisará permitir a instalação de aplicativos de fontes desconhecidas nas configurações de segurança do seu dispositivo Android.

3. **Instale o APK:** Transfira o arquivo APK para o seu dispositivo e abra-o para iniciar a instalação.

   **Nota:** Como o aplicativo não está disponível na Google Play Store, você precisará permitir a instalação de aplicativos de fontes desconhecidas. Isso pode ser feito nas configurações de segurança do seu dispositivo Android ou ao iniciar a instalação do aplicativo.

### Rodar o Aplicativo na Web

1. **Inicie o servidor de desenvolvimento Expo (caso ainda não esteja rodando).**

```bash
   npx expo start
```

2. **Para abrir o aplicativo na web, pressione `w` no terminal para abrir o aplicativo em um navegador da web.**

   Após gerar o QR Code, você pode escanear o código com o Expo Go para visualizar no dispositivo móvel ou usar o navegador para visualizar o aplicativo na web.

## Documentação Adicional

- **Licença:** Este projeto está licenciado sob a [Licença MIT](LICENSE).
