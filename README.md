## DesafioB7Web
### Qustão 1
** Quais as partes principais de uma requisição HTTP? **
```
  R:  
      A requisão HTTP é composta por tres partes:
      1. Request Line: Onde está o método, a URL e o protocolo.
      2. Request Headers: Onde estão os cabeçalhos da requisição.
      3. Request Body: O corpo da requisição.
```

### Qustão 2
** Qual a diferença entre colocar um script dentro do "head" e no fim do "body"? **
```
  R:
      A diferença é que o script dentro do "head" é executado antes do "body" e o script no fim do "body" é executado depois do "body",isso implica pois quando o script e excultado antes do body os elementos ainda não foram renderizados, e se o script depender de algum elemento que não foi renderizado, o script não será executado.
      Já quando o script é executado no fim do body, os elementos já foram renderizados, e o script será executado. 
```

### Qustão 3
** Qual a diferença entre display: block e display: inline-block ? **
```
  R:
      Um elemento com display: block é exibido em linha separada do outro, ou seja terá uma quebra de linha em relação ao proximo elemento, enquanto um elemento com display: inline-block é exibido em linha junto com o outro.
```

### Qustão 4
** É possível criar um site responsivo SEM media queries? Por que? ** 
```
  R:
    Apesar de ser possível criar um site responsivo SEM media queries, é necessário que seja utilizado algum media query para que o site se comporte com uma melhor fluidez.
```

### Qustão 5
** No Javascript, é obrigatório usar VAR para criar uma variável? **
```
  R:
      Não é obrigatório usar VAR para criar uma variável, pois se omitir o VAR, o Javascript irá criar uma variável com escopo global, ou seja, todo o código será acessível globalmente, também é possível criar uma varivel com escopo local com o LET para que a variável seja acessível apenas dentro do bloco.
```

### Qustão 6
** Criar funções com "function() {}" e com "() => {}" tem alguma diferença além da sintaxe? **
```
  R:
    As Arrow functions "() => {}" são funções anônimas e não sendo possível chamar a função diretamente, é necessário utilizar o "call" para chamar a função.
    Já as funções com "function() {}" são funções normais e podem ser chamadas diretamente desde que estejam dentro de do mesmo escopo que foram criadas.
```

### Qustão 7
** Explique a lógica pra fazer uma paginação. **
```
  R:
    No backend, é necessário criar uma função que receba dois parâmetros:
    1. A quantidade de itens por página.
    2. A página atual.
    na função e realizado um filtro de acordo com a página atual e a quantidade de itens por página, e retorna um array com os itens da página.
    
    No frontend, é necessário criar um componente que receba o array com os dados e o número de páginas depois e realizado a um calculo com o total de itens dividido pelo número de itens por página e assim verificando o total de páginas,
    e criando um botão para cada página, e quando o botão é clicado, o componente deve chamar a função do backend e passar o número da página atual.

```

### Qustão 8
** Qual a melhor forma de armazenar uma imagem no banco de dados? **
```
  R:
    É possível armazenar uma imagem no banco de dados como um blob, ou seja, um array de bytes, ou seja, um array de bytes que representa a imagem.
    Mas a melhor maneira de armazenar a imagem e com um ponteiro de arquivo, que aponta para o arquivo que em vias de fato é armazenado no disco do servidor.
```

### Qustão 9
** No React, quantos useEffect eu posso usar? **
```
  R:
    No React, é possível utilizar quantos useEffect eu quiser, eu posso utilizar um useEffect para fazer alguma lógica apenas uma vez, ou seja, quando o componente é renderizado pela primeira vez.

  ```

### Qustão 10
**  Quais métodos de requisição preciso para criar um CRUD via API? **
```
  R:
    GET: Para buscar um recurso.
    POST: Para criar um recurso.
    PUT: Para atualizar um recurso.
    DELETE: Para deletar um recurso.
```
