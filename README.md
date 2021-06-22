
# ☀️ Weather Now Component Library 🌧️  

Weather Now é um projeto simples que exibe as condições climáticas de três localidades.

Confesso que eu poderia tê-lo escrito diretamente em algum framework javascript que gera web-components vide React, Vue ou Angular. No entanto, optei por uma abordagem não tão tradicional, mas que pode vir a ser muito útil.



![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

  
## 💭 FAQ 

#### Por que utilizar Stenciljs na geração de componentes da web?

Stencil tem apenas 1 dependência: Typescript. 

E é um compilador de web-components agnóstico de framework. Embora o projeto que consome esses componentes está escrito em Angular, poderia ser Vue, React, Svelte, ou javascript puro.

O ganho é justamente esse: uma biblioteca de componentes visuais que pode ser consumida por qualquer tecnologia de front-end com suporte a componentes da web.

  
## Curioso?

Se você quiser brincar no código fonte, sinta-se a vontade para clonar o repositório.

Existem regras de lint e hooks de pre-commit que podem parecer chatas no começo, elas funcionarão melhor se o workspace for a pasta component-library. Mas lembre-se de instalar as dependências de desenvolvimento.

```bash 
  npm i --save
```

Você pode rodar os testes em component-library apenas rodando 

```bash 
  npm test
```

ou, numa visualização mais compacta

```bash 
  npm run test:silent
```

O motor dos testes unitários é o Jest.


## 📦 Instalação via NPM 

Tão simples quanto qualquer outra dependência. Consulte a documentação do Stencil para entender melhor as integrações com diferentes frameworks.

```bash 
  npm i @deprecat3d/weather-now-component-library
```



