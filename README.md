Implementação do tutorial Angular Tour of the Heroes do seu site oficial.

O pré-requisito é ter o Node.js instalado (versão 16.15.1 ou acima) e o seu gerenciador de pacote favorito na versão mais atual. 
Caso você ainda não tenha instalado o pacote @angular/cli, instale-o via npm ou yarn.

Instalando com npm:
  npm i -g @angular/cli@^16

Caso prefira instalar com o yarn:
  yarn global add @angular/cli@^16

Baixe o projeto revisao-angular-tutorial.

Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto:
"dependencies": {
    "@angular/animations": "^14.2.0",
    "@angular/common": "^14.2.0",
    "@angular/compiler": "^14.2.0",
    "@angular/core": "^14.2.0",
    "@angular/forms": "^14.2.0",
    "@angular/platform-browser": "^14.2.0",
    "@angular/platform-browser-dynamic": "^14.2.0",
    "@angular/router": "^14.2.0",
    "angular-in-memory-web-api": "^0.14.0",
    "rxjs": "~7.5.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^14.2.7",
    "@angular/cli": "~14.2.7",
    "@angular/compiler-cli": "^14.2.0",
    "@types/jasmine": "~4.0.0",
    "jasmine-core": "~4.3.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "typescript": "~4.7.2"
  }

Após verificar se estas dependências do seu projeto estão com as versões compatíveis declaradas acima, acesse a pasta raiz do seu projeto e execute o comando abaixo:

Instalando com npm:
  npm install

Caso prefira instalar com o yarn:
  yarn install

Agora basta executar mais um comando para subir a aplicação e ver o projeto rodando no browser.
  ng serve

Abra o browser e acesse a url http://localhost:4200. Pronto!
