import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DetalesComponent } from '../detales/detales.component';
import { Anime } from '../shared/anime';

const ELEMENT_DATA: Anime[] = [
  {id:1, descricao:"A história se passa em um mundo de fantasia, acompanhando Keyar, um healer (Curandeiro) que foi traído e usado pelos seus companheiros de grupo por sua classe ser vista como inútil, já que não pode lutar sozinha. Entretanto, após certos eventos, Keyar desperta uma magia de cura suprema, “regenerando” seu própria mundo e voltando no tempo 4 anos antes, para que assim possa refazer sua vida, e ter sua vingança contra todos que fizeram mal a ele.", url:"https://animesonline.cc/wp-content/uploads/2021/01/2KuzBlXrjXqAce83gkqIlqoQQCI-185x278.jpg", name:"Kaifuku Jutsushi no Yarinaoshi", genero:"Sem Censura", temporada:1},
  {id:2, descricao:"Morto ao salvar um estranho de uma colisão de trânsito, um NEET de 34 anos reencarnou em um mundo mágico como Rudeus Greyrat, um bebê recém-nascido. Com conhecimento, experiência e arrependimentos de sua vida anterior retidos, Rudeus jura levar uma vida plena e não repetir seus erros do passado. Agora dotado de uma tremenda quantidade de poder mágico, bem como a mente de um adulto, Rudeus é visto como um gênio em formação por seus novos pais. Logo, ele se encontra estudando com poderosos guerreiros, como seu pai espadachim e um mago chamado Roxy Migurdia – tudo para aprimorar seus aparentes talentos. Mas, apesar de seu exterior inocente, Rudeus ainda é um otaku pervertido, que usa sua riqueza de conhecimento para fazer movimentos em mulheres que ele nunca poderia fazer em sua vida anterior.", url:"https://animesonline.cc/wp-content/uploads/2020/12/fHXI3fJN0ZOVw2OmLmY2t9VgV83-185x278.jpg", name:"Mushoku Tensei: Isekai Ittara Honki Dasu", genero:"Drama", temporada:1},
  {id:3, descricao:"Vivendo sozinho e sem nunca ter uma namorada, Satoru Mikami, de 37 anos, está insatisfeito como onde sua vida chegou. Mas depois de morrer nas mãos de um ladrão, ele desperta para um novo começo em um novo mundo… como um slime.", url:"https://animesonline.cc/wp-content/uploads/2019/06/jMdGzltegevAmbIkFPcTUaf6eAa-185x278.jpg", name:"Tensei Shitara Slime Datta Ken", genero:"Ação", temporada:2},
  {id:4, descricao:"A Dungeon Secreta é um lugar lendário onde escondem-se raros tesouros e itens. Nor, o terceiro filho de um clã de nobres falidos que acaba de perder sua única oportunidade de emprego, ouve falar por acaso da dungeon. Ele logo adquire uma habilidade que lhe permite criar, editar e conferir habilidades… E para usá-la, ele precisa acumular pontos através de tarefas, como comer refeições deliciosas e realizando atividades sexuais com indivíduas sedutoras do sexo oposto.", url:"https://animesonline.cc/wp-content/uploads/2021/01/lTFJoGLCQxkMlUyxCha04JVnakh-185x278.jpg",name:"Ore dake Haireru Kakushi Dungeon", genero:"Ecchi", temporada:1},
  {id:5, descricao:"No MMORPG Cross Reverie, Sakamoto Takuma ostentava uma força avassaladora que foi suficiente para ele ser chamado de Rei Demônio pelos outros jogadores. Um dia, ele é invocado para outro mundo com a sua aparência do jogo. Lá, há duas pessoas que insistem que “Eu sou a verdadeira Mestra de Invocação”. As garotas utilizam Magia de Escravidão, que normalmente é usado em bestas invocadas, nele. Entretanto, a peculiar habilidade “Reflexão de Magias” é ativada! As que foram transformadas em escravas, foram as garotas! Takuma estava desnorteado. Ele é o Mago mais forte, mas, ele não tem nenhuma experiência em se socializar. Em pânico, as primeiras palavras que ele disse foi o que ele dizia enquanto interpretava o Rei Demônio?! “Eu sou incrível, você diz? É claro que sou. Eu sou Diablo… aquele que todos temiam como Rei Demônio!” Esta é a história do Rei Demônio (de mentirinha) que logo inspiraria o mundo, e sua aventura em um outro mundo no qual ele ostenta sua força absoluta, tem início!  ", url:"https://animesonline.cc/wp-content/uploads/2019/08/k9iyLvwGL5ZrH4fghYqsjHuTk4v-185x278.jpg", name:"Isekai Maou to Shoukan Shoujo no Dorei Majutsu", genero:"Comédia", temporada:1},
  {id:6, descricao:"A história acompanha Lloyd, um garoto do interior que sonha em se tornar um soldado na capital. Após convencer o líder da sua vila a deixá-lo ir para a cidade grande, Lloyd começa sua aventura, ao lado de uma bruxa loli chamada Mary. O que ele não imagina, no entanto, é que sua fama de fraco é apenas um resultado de crescer na vila que fica perto da dungeon mais difícil daquele mundo, onde vários herói e aventureiros famosos vivem.", url:"https://animesonline.cc/wp-content/uploads/2021/01/OTMUvMGFAsIDnFj0k5Im8SRcZb-185x278.jpg", name:"Tatoeba Last Dungeon Mae no Mura no Shounen ga Joban no Machi de Kurasu Youna Monogatari", genero:"Aventura", temporada:1},
  {id:7, descricao:"A história acompanha a relação entre dois colegas de trabalho, Yukuhashi Rena e Hachiya Ryouhei. Yukuhashi parece a mulher mais simples e reservada de sua empresa, mas ela se transforma em uma beleza estonteante quando se arruma fora do escritório. Perturbado ao ver Yukuhashi transformada, Hachiya inadvertidamente fala algo que soa como um convite para se conhecerem melhor… sem perceber que estão em frente a um motel.", url:"https://animesonline.cc/wp-content/uploads/2021/01/lzZF7A2J742XwlMcSIAbfc6or0c-185x278.jpg", name:"Jimihen!! Jimiko o Kae Chau Jun Isei Kouyuu", genero:"Ecchi", temporada:1},
  {id:8, descricao:"  Eu, a protagonista, era só uma garota colegial como qualquer outra, mas acabei reencarnando num monstro-aranha de um mundo de fantasia. E como se isso não fosse o bastante, eu acordei numa dungeon cheia de monstros tenebrosos. Munida apenas do meu conhecimento humano e do meu inabalável otimismo, eu serei obrigada a usar minhas teias e armadilhas para derrotar monstros muito mais forte que eu só para ficar viva… Esta é a história de uma garota com uma incrível força mental, tentando sobreviver num labirinto como uma das criaturas mais fracas que existem!", url:"https://animesonline.cc/wp-content/uploads/2021/01/rR9gNmpy8EDDYL4ImkazdmBDrqY-185x278.jpg", name:"Kumo desu ga, Nani ka?", genero:"Comédia", temporada:1}
];
@Component({
  selector: 'dio-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  displayedColumns: string[] = [ 'imgem','name', 'genero', 'temporada', 'acao'];
  dataSource: Anime[]=ELEMENT_DATA;
  dialogResult = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(anime) {
    let dialogRef = this.dialog.open(DetalesComponent, {
      width:'600px',
      data: anime
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed ${result}`);
      this.dialogResult = result;
    });
  }


}
