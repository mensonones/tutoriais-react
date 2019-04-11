## How to run the project

First, navigate to the project folder through the terminal. After that, run the `npm install` command to install the project dependencies. After that, still in the project folder, enter the command `npm run start` to run the project. To generate the project build, simply run the `npm run build` command.


Neste tutorial é exemplificado como obter o item de uma lista pelo click com dados obtidos de uma API. 

Os comentários abaixo se referem ao arquivos: App.js

Primeiramente os dados são obtidos dentro do ComponentDidMount, os mesmos são convertidos para json e após isso o resultado é passado para o array vazio,no caso o data: []

A lista no HTML é construida iterando sobre o data, e a partir disto é mostrado os dados que queremos. 

Foi feito uma função chamada getItem(), onde é passado o evento e o item que se quer obter pelo click. Ao ser clickado, o item(objeto), será mostrado no console. 

No trecho da linha 33 do código é passado a função para o evento onClick na tag li, pois é onde os itens estão sendo renderizados. Ao clickar no item os dados do item são mostrados no console. 

