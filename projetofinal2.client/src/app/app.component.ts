import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecipeList } from './recipe-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cookingin';

 recipecategorylist: RecipeList[] = [ 
  {
    name: "Francesinha",
    category: "Meat",
    ingredients: "4 fatias de pão, 2 bifes de vaca, 2 salsichas, 2 linguiças, 10 fatias de queijo, 4 fatias de fiambre, 2 ovo, manteiga, cebola, alho, louro, polpa de tomate, vinho branco, cerveja",
    description: "Num tacho, leve ao lume 30 g de manteiga, a cebola, os alhos e o louro. Cozinhe até a cebola estar dourada e tenra. Adicione a polpa de tomate e o vinho branco e deixe levantar fervura. Junte a cerveja e deixe cozinhar em lume brando por 15 minutos. Adicione o cubo de caldo de carne e, quando começar a ferver, retire a folha de louro. Triture tudo com a varinha mágica. Leve novamente ao lume e adicione o brandy ou whisky, o Vinho do Porto e o molho inglês. Tempere com piri-piri. Dissolva o amido de milho em 3 colheres de sopa de água fria e adicione ao molho, cozinhe mexendo sempre até que engrosse ligeiramente. Apague o lume e reserve. Numa frigideira, aqueça a restante Manteiga Agros. Grelhe os bifes, as salsichas e as linguiças. Depois de grelhar, abra as salsichas e a linguiça em quatro partes. Num prato que possa ir ao forno, coloque uma fatia de pão torrado no fundo e coloque os outros ingredientes na seguinte ordem: 1 bife, 1 linguiça, 1 salsicha, 2 fatias de fiambre, 1 fatia de pão torrado. Termine cobrindo com 5 fatias de Queijo Flamengo Agros. Leve ao forno, a 200ºC, cerca de 5 minutos para gratinar. Depois do queijo derretido, cubra com o molho e termine com 1 ovo estrelado sobre cada francesinha",
    difficulty: 3/5,
    duration: 40,
    photo: "francesinha.jpg",
  }

 ];

 selectedCategory: RecipeList | undefined;

 updateSelectedCategory(category: RecipeList) {
  this.selectedCategory = category;
 }
}
