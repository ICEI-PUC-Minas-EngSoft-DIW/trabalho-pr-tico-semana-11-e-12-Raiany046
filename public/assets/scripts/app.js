const dados = [
  {
    id: 1,
    titulo: "Sem Título (Caveira) - 1982",
    descricao: "<b>Vendida por US$ 110,5 milhões — obra mais cara de Basquiat.",
    conteudo: "<br><b>Tema:</b> Retrata um crânio com pinceladas fortes e expressivas, incorporando textos sobrepostos, a coroa de três pontas icônica de Basquiat e um fundo que remete a paredes de grafite.<br><br><b>Significado:</b> A caveira pode ser interpretada como uma referência à mortalidade e também aos rituais de vodu e cultura caribenha/africana, refletindo as origens de seu pai. ",
    imagem: "img/caveira.jpg"
  },
  {
    id: 2,
    titulo: "Caveira Coroada - 1981",
    descricao: "<b>Reflexão sobre poder e reconhecimento na arte.",
    conteudo: "<br><b>Contexto:</b> Criada durante o período de transição de Basquiat do grafite de rua, sob o pseudônimo SAMO, para o reconhecimento na galeria de arte. A obra foi exibida em sua primeira exposição individual em Nova York.<br><br><b>Inspiração:</b> O interesse do artista em anatomia começou na infância, após sua mãe lhe dar um exemplar de Gray's Anatomy quando ele estava hospitalizado por um acidente. Essa fascinação se reflete na representação de caveiras e cabeças ao longo de sua carreira.<br><br><b>Características:</b> A pintura de 1981 é marcada por uma intensa energia e uma estética de 'dentro e fora', com a caveira mostrando a estrutura óssea e o crânio de forma desconstruída, mas com olhos, nariz e boca visíveis. A peça explora a dualidade entre vida e morte. ",
    imagem: "img/caveira-coroada.jpg"
  },
  {
    id: 3,
    titulo: "Ironia do Policial Negro - 1981",
    descricao: "<b>Crítica à brutalidade policial e ao racismo nos EUA.",
    conteudo: "<br><b>A ironia central:</b>O título da obra sugere a contradição de um policial negro, que faz parte de uma comunidade oprimida, trabalhando para uma instituição que historicamente perpetuou a brutalidade e o racismo contra pessoas negras.<br><br><b>Opressor e oprimido:</b> Ao vestir o uniforme da polícia, a figura se torna, simultaneamente, vítima e agente de um sistema opressor. Isso aponta para a complexidade da opressão institucional, que pode levar membros de grupos marginalizados a colaborar com as estruturas que os exploram.<br><br><b>Crítica social:</b> Basquiat, um artista negro com experiências de marginalização, usava sua arte para abordar questões sociais de forma crua e direta. A obra critica não apenas a brutalidade policial, mas também a lógica do racismo estrutural, que força oprimidos a reproduzir a opressão.<br><br><b>Estilo artístico:</b> A estética de Basquiat, que mistura o grafite com o expressionismo, reforça a mensagem da pintura. As pinceladas intensas, os traços infantis e a figura esquemática criam uma sensação de urgência e crítica social.<br>",
    imagem: "img/police.jpg"
  },
  {
    id: 4,
    titulo: "Pescaria - 1981",
    descricao: "<b> Pescaria (ou 'Sem Título') é uma pintura neo-expressionista de Jean-Michel Basquiat de 1981",
    conteudo: "<br>A obra retrata uma figura de pescador, com traços de seu esqueleto visíveis e um peixe pendurado na linha, emergindo de sua transição de artista de rua para o mundo das galerias de arte. A pintura é caracterizada por seu estilo enérgico, uso de cores vibrantes e pinceladas rápidas, refletindo as influências da street art. ",
    imagem: "img/pescaria.jpg"
  },
    {
    id: 5,
    titulo: "Passaro no dinheiro - 1981",
    descricao: "<b> Bird on Money é uma pintura de 1981 criada pelo artista americano Jean-Michel Basquiat",
    conteudo: "<br>Trata-se de uma pintura abstrata no estilo neoexpressionista e presta homenagem ao músico de jazz Charlie Parker, idolatrado por Basquiat. <br><br>A complexidade e a disposição livre desta pintura representam uma galinha ou passarinho, apelido pelo qual Parker era conhecido. A desordem espontânea de formas e símbolos parece imitar as composições improvisadas de jazz do estilo de tocar de Charlie Parker. Há um primitivismo quase espiritual na arte de Basquiat, e ele gostava de pintar com o público. <br><br> As palavras 'Para Morir', que se traduzem como 'Morrer', estão presentes, assim como as palavras 'Green Wood' acima de um cemitério. Green Wood é onde Basquiat nasceu, e o cemitério é seu último local de descanso. ",
    imagem: "img/passaro.jpg"
  },

  
];

const container = document.getElementById("container");
if (container) {
  dados.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card", "text-center");
    card.innerHTML = `
      <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
      <div class="card-body">
        <h5 class="card-title">${item.titulo}</h5>
        <p class="card-text">${item.descricao}</p>
        <a href="detalhes.html?id=${item.id}" class="btn btn-dark">Ver detalhes</a>
      </div>
    `;
    container.appendChild(card);
  });
};

const detalhesDiv = document.getElementById("detalhes");
if (detalhesDiv) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const item = dados.find(d => d.id === id);

  if (item) {
    detalhesDiv.innerHTML = `
      <div class="card mx-auto" style="max-width: 700px;">
        <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
        <div class="card-body">
          <h2>${item.titulo}</h2>
          <p>${item.conteudo}</p>
          <a href="index.html" class="btn btn-secondary mt-3">← Voltar</a>
        </div>
      </div>
    `;
  } else {
    detalhesDiv.innerHTML = "<p class='text-center'>Obra não encontrada.</p>";
  }
}