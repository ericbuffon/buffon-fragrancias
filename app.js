const SEED = {"products":[],"purchases":[],"sales":[],"expenses":[],"consignments":[],"clients":[]};
const PATCH_COMPRAS = [];
const PATCH_FICHA = [{"nome":"Fearless Man","marcaInsp":"Yves Saint Laurent","descricao":"Floral amadeirada com flor de laranjeira, patchouli e almíscar. Moderna, limpa e elegante."},{"nome":"Saffira","marcaInsp":"Xerjoff","descricao":"Frutada almiscarada com cítricos e âmbar. Solar, doce e viciante."},{"nome":"Aqua Man","marcaInsp":"Giorgio Armani","descricao":"Aquática cítrica com bergamota, alecrim e notas marinhas. Fresca, leve e atemporal."},{"nome":"315 Prestige Black","marcaInsp":"Carolina Herrera","descricao":"Fougère aromática com absinto, lavanda e baunilha. Noturna, intensa e sedutora."},{"nome":"315 Prestige Pink","marcaInsp":"Carolina Herrera","descricao":"Floral frutada espumante, com pêssego e champanhe rosé. Jovem, festiva e vibrante."},{"nome":"Heroic Man","marcaInsp":"Giorgio Armani","descricao":"Aromática amadeirada com cardamomo, castanha e baunilha. Doce, envolvente e jovem."},{"nome":"Brave","marcaInsp":"Paco Rabanne","descricao":"Aquática amadeirada com toranja, louro e âmbar cinzento. Energética, esportiva e viciante."},{"nome":"Cash for Man","marcaInsp":"Paco Rabanne","descricao":"Especiada amadeirada com canela, couro e âmbar. Ousada, quente e marcante."},{"nome":"Extreme Story","marcaInsp":"Dior","descricao":"Fougère aromática com bergamota, pimenta e ambroxan. Fresca, potente e versátil."},{"nome":"Absolute Sport Men","marcaInsp":"Chanel","descricao":"Cítrica amadeirada com laranja, pimenta e almíscar. Fresca, esportiva e elegante."},{"nome":"315 Prestige","marcaInsp":"Carolina Herrera","descricao":"Amadeirada especiada com gengibre, vodka e couro. Urbana, festiva e marcante."},{"nome":"Black Water","marcaInsp":"Creed","descricao":"Frutada amadeirada com abacaxi, bétula e almíscar. Imponente, sofisticada e marcante."},{"nome":"Steel Essence","marcaInsp":"Jacques Bogart","descricao":"Aromática amadeirada com lavanda, cardamomo e sândalo. Fresca, sóbria e persistente."},{"nome":"Ironstone","marcaInsp":"Chanel","descricao":"Amadeirada aromática com cítricos, gengibre e sândalo. Sóbria, elegante e versátil."},{"nome":"The Greatest","marcaInsp":"Montblanc","descricao":"Amadeirada aromática com bergamota, vetiver e patchouli. Marcante, sofisticada e versátil."},{"nome":"Poetique","marcaInsp":"Parfums de Marly","descricao":"Floral frutada com lichia, rosa turca e ruibarbo. Refinada, doce e feminina."},{"nome":"Charisme","marcaInsp":"Prada","descricao":"Floral almiscarada moderna, com jasmim e âmbar. Contemporânea, limpa e sofisticada."},{"nome":"I Am Ideal","marcaInsp":"Lancôme","descricao":"Floral chipre com rosa e jasmim sobre fundo amadeirado. Limpa, elegante e feminina."},{"nome":"The Hunting Man","marcaInsp":"Azzaro","descricao":"Amadeirada especiada com gengibre, cardamomo e madeiras nobres. Vibrante, quente e masculina."},{"nome":"Her Choice","marcaInsp":"Giorgio Armani","descricao":"Floral branca com tuberosa e baunilha. Luminosa, moderna e envolvente."},{"nome":"Look of Woman","marcaInsp":"Narciso Rodriguez","descricao":"Almiscarada amadeirada com flor de laranjeira. Sensual, discreta e viciante."},{"nome":"Wild Kiss","marcaInsp":"Jean Paul Gaultier","descricao":"Floral gourmand com flor de laranjeira, mel e baunilha. Intensa, doce e sofisticada."},{"nome":"Queen of Life","marcaInsp":"Lancôme","descricao":"Floral gourmand com íris, praliné e patchouli. Doce, alegre e envolvente."},{"nome":"Eternal Kiss","marcaInsp":"Jean Paul Gaultier","descricao":"Floral gourmand com mel e gardênia. Doce, ousada e magnética."},{"nome":"Miss Dream","marcaInsp":"Carolina Herrera","descricao":"Floral gourmand com tuberosa, cacau e fava tonka. Sedutora, intensa e noturna."},{"nome":"In Flames","marcaInsp":"Paco Rabanne","descricao":"Floral aquática salgada com baunilha. Poderosa, radiante e marcante."},{"nome":"Madame Isabelle","marcaInsp":"Chanel","descricao":"Floral oriental com laranja, rosa e patchouli. Elegante, moderna e sofisticada."},{"nome":"Cuté","marcaInsp":"Chloé","descricao":"Floral almiscarada com rosa e peônia. Delicada, elegante e atemporal."},{"nome":"Black Fury","marcaInsp":"Ferrari","descricao":"Amadeirada especiada com cardamomo e âmbar. Vibrante, quente e masculina."},{"nome":"Cash Woman","marcaInsp":"Paco Rabanne","descricao":"Floral amadeirada com framboesa e mel. Luxuosa, marcante e envolvente."},{"nome":"Cabana","marcaInsp":"Jean Paul Gaultier","descricao":"Fougère oriental com lavanda, hortelã e baunilha. Doce, quente e inconfundível."},{"nome":"LR Password","marcaInsp":"Giorgio Armani","descricao":"Oriental amadeirada com bergamota, flor de laranjeira e fava tonka. Sedutora, sóbria e noturna."},{"nome":"Just On Time","marcaInsp":"Paco Rabanne","descricao":"Oriental amadeirada com gengibre, baunilha e almíscar. Sensual, quente e provocante."},{"nome":"Destinée","marcaInsp":"Yves Saint Laurent","descricao":"Floral aromática com lavanda e flor de laranjeira. Livre, quente e sensual."},{"nome":"In Love","marcaInsp":"Dior","descricao":"Floral buquê com ylang-ylang, rosa e jasmim. Clássica, opulenta e feminina."},{"nome":"Miss Dream Pink","marcaInsp":"Carolina Herrera","descricao":"Floral suave com jasmim, coco e sândalo. Luminosa, cremosa e delicada."}];
const PATCH_FAMILIA = [{"nome":"315 Prestige","familia":"Amadeirado","notasTopo":"Tangerina, toranja, pimenta-preta","notasCoracao":"Gengibre, zimbro, hortelã, violeta","notasFundo":"Âmbar, madeiras secas, fava tonka, almíscar"},{"nome":"315 Prestige Black","familia":"Aromático","notasTopo":"Anis, funcho, absinto","notasCoracao":"Lavanda, couro","notasFundo":"Almíscar, baunilha"},{"nome":"315 Prestige Pink","familia":"Floral","notasTopo":"Champanhe rosé, pimenta-rosa","notasCoracao":"Rosa, flor de pessegueiro","notasFundo":"Almíscar branco, fava tonka, notas amadeiradas"},{"nome":"Absolute Sport","familia":"Amadeirado","notasTopo":"Tangerina, aldeídos, laranja, notas marinhas","notasCoracao":"Cedro, pimenta, néroli","notasFundo":"Âmbar, almíscar branco, baunilha, fava tonka, vetiver, resina de elemi"},{"nome":"Aftermath","familia":"Fougère","notasTopo":"Bergamota da Calábria, almíscar","notasCoracao":"Gerânio bourbon, pelargônio perfumado","notasFundo":"Benjoim, bálsamo-do-peru, madeira de guaiaco"},{"nome":"Aqua Man","familia":"Cítrico","notasTopo":"Laranja, bergamota, limão, noz-moscada, coentro","notasCoracao":"Cíclame, alecrim, calone, lavanda, néroli","notasFundo":"Âmbar, patchouli, musgo de carvalho, cedro, almíscar branco"},{"nome":"Black Fury","familia":"Amadeirado","notasTopo":"Lima, bergamota, cítricos, maçã, ameixa","notasCoracao":"Cardamomo, canela, rosa, jasmim, lavanda","notasFundo":"Baunilha, almíscar, âmbar, cedro"},{"nome":"Black Water","familia":"Amadeirado","notasTopo":"Bergamota, limão, abacaxi, pimenta","notasCoracao":"Bétula, patchouli, jasmim","notasFundo":"Almíscar, musgo de carvalho, baunilha, âmbar cinzento, couro"},{"nome":"Brave Man","familia":"Amadeirado","notasTopo":"Toranja, notas marinhas","notasCoracao":"Folha de louro, madeira de guaiaco","notasFundo":"Patchouli, labdano"},{"nome":"Cabana","familia":"Amadeirado","notasTopo":"Especiarias, cardamomo, eucalipto","notasCoracao":"Cedro, lavanda","notasFundo":"Fava tonka, baunilha, almíscar"},{"nome":"Cash Woman","familia":"Floral","notasTopo":"Limão, flor de néroli, framboesa","notasCoracao":"Gardênia, jasmim, flor de laranjeira","notasFundo":"Âmbar, mel, patchouli, baunilha"},{"nome":"Cash for Men","familia":"Amadeirado","notasTopo":"Cardamomo, abacaxi, noz-moscada, hortelã, maçã","notasCoracao":"Jasmim, espinheiro-branco, ameixa, cominho, caramelo","notasFundo":"Baunilha, madeira flutuante, sândalo, flor de laranjeira"},{"nome":"Charisme","familia":"Floral","notasTopo":"Tangerina, bergamota, pera","notasCoracao":"Jasmim, néroli, flor de laranjeira","notasFundo":"Benjoim, âmbar cinzento, baunilha"},{"nome":"Cuté","familia":"Floral","notasTopo":"Pêssego, tangerina","notasCoracao":"Rosa, cedro, lírio-do-vale","notasFundo":"Almíscar, âmbar"},{"nome":"Destinée","familia":"Floral","notasTopo":"Tangerina, cassis, pera","notasCoracao":"Jasmim, lavanda, flor de laranjeira","notasFundo":"Baunilha, cedro, âmbar cinzento, almíscar"},{"nome":"Eternal Kiss","familia":"Chipre","notasTopo":"Laranja-vermelha, tangerina, toranja","notasCoracao":"Mel, gardênia, jasmim, flor de laranjeira, pêssego","notasFundo":"Patchouli, cera de abelha, caramelo, alcaçuz"},{"nome":"Extreme Story","familia":"Aromático","notasTopo":"Elemi, bergamota, tangerina, limão, pimenta","notasCoracao":"Rosa, violeta, cardamomo, gerânio, peônia, lavanda","notasFundo":"Âmbar, vetiver, couro, patchouli"},{"nome":"Fearless Man","familia":"Fougère","notasTopo":"Bergamota, pimenta-rosa, cardamomo","notasCoracao":"Flor de laranjeira, lavanda, sálvia","notasFundo":"Patchouli, madeiras secas, musgo de carvalho"},{"nome":"Her Choice","familia":"Floral","notasTopo":"Flor de laranjeira, bergamota, frutas vermelhas, maçã","notasCoracao":"Tuberosa, jasmim indiano, magnólia","notasFundo":"Baunilha, almíscar branco, cedro"},{"nome":"Heroic Man","familia":"Aromático","notasTopo":"Cardamomo, pimenta-rosa, folha de violeta, hortelã, limão, toranja","notasCoracao":"Abacaxi, melão, sálvia-esclareia, canela, lavanda","notasFundo":"Baunilha, castanha, árvore de âmbar, cedro, madeira de guaiaco"},{"nome":"I Am Ideal","familia":"Chipre","notasTopo":"Bergamota, pera, pimenta-rosa, cassis","notasCoracao":"Rosa, jasmim, violeta, framboesa","notasFundo":"Baunilha, almíscar branco, cedro, patchouli"},{"nome":"In Flames","familia":"Ambarado","notasTopo":"Laranja, acorde marinho, avelã fresca, tangerina verde, jasmim, flor de gengibre","notasCoracao":"Rosa, cassis, abacaxi, melão, heliotrópio, jasmim, sândalo, frutas exóticas","notasFundo":"Âmbar, coco, baunilha, madeira seca"},{"nome":"In Love","familia":"Floral","notasTopo":"Magnólia, melão, pêssego, pera, bergamota","notasCoracao":"Tuberosa, ameixa, violeta, orquídea, jasmim, lírio-do-vale, rosa","notasFundo":"Almíscar, sândalo, baunilha"},{"nome":"In Woman","familia":"Chipre","notasTopo":"Groselha-preta, pera","notasCoracao":"Rosa, jasmim, frésia","notasFundo":"Patchouli, baunilha, âmbar"},{"nome":"Ironstone","familia":"Amadeirado","notasTopo":"Limão, pimenta-rosa, toranja, maçã","notasCoracao":"Lavanda, folha de violeta, gerânio, hortelã","notasFundo":"Cedro, vetiver, musgo, patchouli, âmbar cinzento"},{"nome":"Just on Time","familia":"Amadeirado","notasTopo":"Limão, toranja, gengibre","notasCoracao":"Maçã, canela, patchouli, baunilha","notasFundo":"Cedro, âmbar, mirra, madeira de cashmere"},{"nome":"LR Password","familia":"Ambarado","notasTopo":"Bergamota, limão, cardamomo","notasCoracao":"Lavanda, sálvia, jasmim, alecrim","notasFundo":"Couro, fava tonka, tabaco, baunilha"},{"nome":"La Rive Isabel","familia":"Chipre","notasTopo":"Bergamota, tagetes, folhas de gardênia","notasCoracao":"Rosa, jasmim, lilás","notasFundo":"Baunilha, patchouli, sândalo, vetiver, almíscar"},{"nome":"Look of Woman","familia":"Chipre","notasTopo":"Bergamota, pêssego","notasCoracao":"Rosa, magnólia, jasmim","notasFundo":"Patchouli, sândalo, almíscar, âmbar"},{"nome":"Metaphor","familia":"Ambarado","notasTopo":"Pera, bergamota","notasCoracao":"Flor de laranjeira, jasmim sambac, tuberosa","notasFundo":"Baunilha, ambroxan, patchouli, vetiver"},{"nome":"Miss Dream","familia":"Ambarado","notasTopo":"Cassis, frutas tropicais","notasCoracao":"Jasmim, magnólia, sândalo, notas lácteas","notasFundo":"Café, baunilha"},{"nome":"Miss Dream Pink","familia":"Floral","notasTopo":"Amêndoa, bergamota, cassis","notasCoracao":"Peônia, ylang-ylang, pimenta-rosa","notasFundo":"Cumarina, baunilha, almíscar"},{"nome":"Poetique","familia":"Floral","notasTopo":"Ruibarbo, lichia, bergamota, noz-moscada","notasCoracao":"Rosa, petalia, baunilha, peônia, almíscar","notasFundo":"Incenso, madeira de cashmere, vetiver, cedro"},{"nome":"Queen of Life","familia":"Floral","notasTopo":"Cassis, pera","notasCoracao":"Íris, flor de laranjeira, jasmim","notasFundo":"Amêndoa, fava tonka, praliné, patchouli, baunilha"},{"nome":"Saffira","familia":"Ambarado","notasTopo":"Bergamota, limão, laranja","notasCoracao":"Frutas tropicais, jasmim, violeta","notasFundo":"Sândalo, cashmeran, âmbar cinzento, baunilha, almíscar branco"},{"nome":"Steel Essence","familia":"Fougère","notasTopo":"Flor de laranjeira, limão","notasCoracao":"Alecrim, gerânio, lavanda, coentro, noz-moscada","notasFundo":"Lichia, fava tonka, madeira de teca, vetiver"},{"nome":"Sweet Velvet","familia":"Floral","notasTopo":"Cassis, amêndoa, frutas exóticas","notasCoracao":"Peônia, magnólia, frangipani","notasFundo":"Leite, fava tonka, baunilha"},{"nome":"The Greatest","familia":"Amadeirado","notasTopo":"Pimenta-rosa, bergamota, cardamomo","notasCoracao":"Couro, elemi, sálvia-esclareia","notasFundo":"Patchouli, ambroxan, akigalawood, vagens de cacau, vetiver, cedro"},{"nome":"The Hunting Man","familia":"Amadeirado","notasTopo":"Limão, notas marinhas","notasCoracao":"Noz-moscada, canela, gerânio, alecrim, tomilho","notasFundo":"Vetiver, madeiras secas, patchouli, âmbar"},{"nome":"Wild Kiss","familia":"Floral","notasTopo":"Bergamota, coco","notasCoracao":"Pera, lírio-do-vale, jasmim, flor de laranjeira","notasFundo":"Cedro, sândalo, heliotrópio, baunilha"}];
const KEY = 'perfumes.sistema.v1';
const $ = s => document.querySelector(s);
let data = {products:[],purchases:[],sales:[],expenses:[],consignments:[]};
let edit = {prod:null,com:null,ven:null,des:null,con:null,cli:null};
let fotos = {prod:'', insp:''};
let fil = {
  prodGen:'',prodFoto:'',prodQ:'',prodTester:'',prodFam:'',
  comGen:'',comTipo:'',comEnt:'',comDe:'',comAte:'',comQ:'',comProdX:'',
  venGen:'',venStat:'',venEnt:'',venDe:'',venAte:'',venQ:'',venCanal:'',venProdX:'',venPedido:null,
  estGen:'',estStat:'',estQ:'',estProdX:'',estClasseAbc:'',estFam:'',
  conParc:'',conTipo:'',conSit:'',conDe:'',conAte:'',conQ:'',conProdX:'',
  tesGen:'',tesQ:'', cliSit:'',cliQ:'', canSit:'',canDe:'',canAte:'',canQ:'',
  desDe:'',desAte:'',desQ:''
};
let sel = {com:new Set(), ven:new Set(), con:new Set()};
let fichaAtual = null;
let sort = {can:{k:'total',d:-1}, cli:{k:'emAberto',d:-1}, prod:{k:'nome',d:1},com:{k:'ord',d:-1},ven:{k:'ord',d:-1},
  est:{k:'produto',d:1},tes:{k:'produto',d:1},des:{k:'ord',d:-1},con:{k:'ord',d:-1}};

const money = v => 'R$ ' + (Number(v)||0).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
const money0 = v => 'R$ ' + (Number(v)||0).toLocaleString('pt-BR',{minimumFractionDigits:0,maximumFractionDigits:0});
const pct = v => ((Number(v)||0)*100).toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1}) + '%';
const dt = v => { if(!v) return '—'; const d=new Date(v+'T00:00:00'); return isNaN(d)?v:d.toLocaleDateString('pt-BR'); };
const uid = () => Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const esc = s => (s==null?'':String(s)).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm = s => (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
const plural = (n,s,p) => n===1?s:p;

// Variável global para armazenar a taxa Selic mensal
let selicMensalAtual = 0.0085; // Fallback para 0.85% ao mês (10.5% a.a.)

async function atualizarTaxaSelic() {
  try {
    // Busca a Meta Selic anual atual (Série 432 do Banco Central do Brasil)
    const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1?formato=json');
    if (response.ok) {
      const data = await response.json();
      if (data && data.length > 0) {
        const selicAnualBruta = parseFloat(data[0].valor);
        const impostoDeRenda = 0.225; // IR de 22,5% (alíquota para curtíssimo prazo / liquidez imediata)
        const selicAnualLiquida = selicAnualBruta * (1 - impostoDeRenda);
        // Calcula a taxa mensal equivalente LÍQUIDA: (1 + anual)^(1/12) - 1
        selicMensalAtual = Math.pow(1 + (selicAnualLiquida / 100), 1 / 12) - 1;
      }
    }
  } catch (error) {
    console.log('Não foi possível atualizar a taxa Selic. Usando valor padrão.', error);
  }
}

const MESES = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const rotuloMes = ym => { const [a,m]=ym.split('-'); return MESES[Number(m)-1]+'/'+a.slice(2); };
/* filtro de data: registro sem data não entra quando há intervalo definido */
const noPeriodo = (d,de,ate) => (!de&&!ate) ? true : (!d ? false : (!de||d>=de) && (!ate||d<=ate));

function migra(){
  if(!Array.isArray(data.consignments)) data.consignments = [];
  if(!Array.isArray(data.clients)) data.clients = [];
  data.clients.forEach(c=>{ if(!c.id)c.id=uid(); if(c.telefone===undefined)c.telefone='';
    if(c.observacao===undefined)c.observacao=''; });
  /* fichas só de quem realmente tem nome anotado */
  if(!data.clientesCriados){
    const vistos = new Set(data.clients.map(c=>norm(c.nome)));
    data.sales.forEach(v=>{
      const k = norm(v.cliente);
      if(k && !SEM_NOME.has(k) && !vistos.has(k)){ vistos.add(k);
        data.clients.push({id:uid(), nome:v.cliente.trim(), telefone:'', observacao:''}); }
    });
    data.clientesCriados = true;
  }
  data.products.forEach(p=>{ if(!p.id)p.id=uid(); if(p.foto===undefined)p.foto=''; if(p.fotoInsp===undefined)p.fotoInsp=''; if(p.marcaInsp===undefined)p.marcaInsp='';
    ['familia','notasTopo','notasCoracao','notasFundo','concentracao','volume'].forEach(k=>{ if(p[k]===undefined)p[k]=''; });
    if(p.temTester===undefined) p.temTester = ''; });
  data.purchases.forEach(c=>{ if(!c.id)c.id=uid(); if(!c.entregue)c.entregue='Sim'; });
  data.sales.forEach(v=>{ if(!v.id)v.id=uid(); if(!v.entregue)v.entregue='Sim';
    if(v.canal===undefined) v.canal='Direto';
    if(v.cliente===undefined) v.cliente=''; });
  data.expenses.forEach(d=>{ if(!d.id)d.id=uid(); });
  /* primeira carga: marca provador para quem já tem tester comprado.
     Roda depois do laço acima, senão o campo ainda não existe. */
  if(!data.testerMarcado){
    const comTester = new Set(data.purchases.filter(c=>c.tipo==='Tester').map(c=>c.produto));
    data.products.forEach(p=>{ if(!p.temTester) p.temTester = comTester.has(p.nome)?'sim':'nao'; });
    data.testerMarcado = true;
  }
  /* passa para automático o que eu tinha marcado sozinho; o que você editou fica */
  if(!data.testerAuto2){
    const ct = new Set(data.purchases.filter(c=>c.tipo==='Tester').map(c=>c.produto));
    data.products.forEach(p=>{
      const eraMeu = (p.temTester==='sim' && ct.has(p.nome)) || (p.temTester==='nao' && !ct.has(p.nome));
      if(eraMeu) p.temTester = 'auto';
    });
    data.testerAuto2 = true;
  }
  if(!data.config) data.config = {contato:''};
  data.consignments.forEach(c=>{ if(!c.id)c.id=uid();
    if(c.qtdeVendida===undefined) c.qtdeVendida = c.situacao==='Vendido' ? Number(c.qtde) : 0;
    if(c.qtdeDevolvida===undefined) c.qtdeDevolvida = c.situacao==='Devolvido' ? Number(c.qtde) : 0;
    delete c.situacao; });
}
/* Aplica, uma única vez, as datas e a situação de entrega vindas da planilha. */
function aplicaPatchCompras(){
  if(data.patchCompras1) return 0;
  const usados = new Set(); let n = 0;
  PATCH_COMPRAS.forEach(pt=>{
    const i = data.purchases.findIndex((c,idx)=>
      !usados.has(idx) && !c.data && c.produto===pt.produto && c.tipo===pt.tipo &&
      Number(c.qtde)===Number(pt.qtde) && Math.abs(Number(c.custoTotal)-Number(pt.custoTotal))<0.011);
    if(i>=0){ usados.add(i); data.purchases[i].data=pt.data; data.purchases[i].entregue=pt.entregue; n++; }
  });
  data.patchCompras1 = true;
  return n;
}
/* Preenche marca da inspiração e descrição olfativa, uma vez, só onde estiver vazio. */
function aplicaPatchFicha(){
  if(data.patchFicha1) return 0;
  let n=0;
  PATCH_FICHA.forEach(f=>{
    const p = data.products.find(x=>x.nome===f.nome);
    if(!p) return;
    if(!p.marcaInsp){ p.marcaInsp=f.marcaInsp; n++; }
    if(!p.descricao){ p.descricao=f.descricao; }
  });
  data.patchFicha1 = true;
  return n;
}

/* Dados oficiais da La Rive: família (o selo da página do produto) e a
   pirâmide traduzida. Esta rodada SOBRESCREVE família e notas, para acabar
   com a mistura de maiúsculas de edições anteriores. Os demais campos
   (preço, foto, estoque ideal, provador) não são tocados. */
function aplicaPatchFamilia(){
  if(data.patchFamilia5) return 0;
  let n=0;
  PATCH_FAMILIA.forEach(f=>{
    const p = data.products.find(x=>x.nome===f.nome); if(!p) return;
    ['familia','notasTopo','notasCoracao','notasFundo'].forEach(k=>{
      if(f[k] && p[k]!==f[k]){ p[k]=f[k]; n++; } });
  });
  /* renomeia a família antiga onde ela ainda aparecer */
  data.products.forEach(p=>{ if(p.familia==='Âmbar') { p.familia='Ambarado'; n++; } });
  data.patchFamilia1=data.patchFamilia2=data.patchFamilia3=data.patchFamilia4=data.patchFamilia5=true;
  return n;
}

function load(){
  try{
    const raw = localStorage.getItem(KEY);
    if(raw){ data = Object.assign({products:[],purchases:[],sales:[],expenses:[],consignments:[]}, JSON.parse(raw));
      migra(); const a=aplicaPatchCompras(), b=aplicaPatchFicha(), c=aplicaPatchFamilia(); if(a||b||c) save(); return; }
  }catch(e){ flag('vermelho','este navegador bloqueou o salvamento — use backup'); }
  data = JSON.parse(JSON.stringify(SEED));
  migra(); aplicaPatchCompras(); aplicaPatchFicha(); aplicaPatchFamilia(); save();
}
function flag(c,t){ $('#dot').style.background=`var(--${c})`; $('#saveTxt').textContent=t; }
let tmr;
function save(){
  flag('ambar','salvando…');
  clearTimeout(tmr);
  tmr = setTimeout(()=>{
    try{ localStorage.setItem(KEY, JSON.stringify(data));
      localStorage.setItem('perfumes.nv.local', String(Date.now()));   // houve alteração aqui
      flag('verde','dados salvos neste navegador');
      if(typeof agendaGravacao==='function') agendaGravacao();
      if(typeof agendaNuvem==='function') agendaNuvem(); }
    catch(e){ flag('vermelho','memória cheia — baixe um backup');
      alert('Não foi possível salvar: o espaço deste navegador encheu.\n\nAs fotos são o que mais ocupa. Remova algumas ou baixe um backup antes de continuar.'); }
  },200);
}

const byName = n => data.products.find(p=>p.nome===n);
const gen = n => { const p=byName(n); return p?p.genero:''; };
const foto = n => { const p=byName(n); return p&&p.foto?p.foto:''; };
function custoMedio(nome){
  const rel = data.purchases.filter(c=>c.produto===nome && c.tipo==='Lacrado');
  const q = rel.reduce((s,c)=>s+Number(c.qtde),0);
  return q>0 ? rel.reduce((s,c)=>s+Number(c.custoTotal),0)/q : 0;
}
function calcVenda(v){
  const cu = custoMedio(v.produto), custo = v.qtde*cu, lucro = v.valorVenda - custo - (Number(v.custosExtras)||0);
  return {custoUnit:cu, lucro, margem: v.valorVenda>0 ? lucro/v.valorVenda : 0};
}
/* saldo que ainda está fisicamente com o parceiro */
const saldoCon = c => Math.max(0, Number(c.qtde) - Number(c.qtdeVendida||0) - Number(c.qtdeDevolvida||0));
const situacaoCon = c => saldoCon(c)>0 ? 'Em consignação' : 'Encerrada';
/* Provador: por padrão acompanha a chegada do tester. Só fica "sim" quando
   existe tester COMPRADO E RECEBIDO. Dá para forçar sim/não à mão — é o caso
   do tester feito a partir de perfume de uso pessoal, que não tem compra. */
const testerRecebido = nome => data.purchases.some(c=>
  c.produto===nome && c.tipo==='Tester' && c.entregue==='Sim');
const testerAcaminho = nome => data.purchases.some(c=>
  c.produto===nome && c.tipo==='Tester' && c.entregue!=='Sim');
function temProvador(p){
  if(p.temTester==='sim') return true;
  if(p.temTester==='nao') return false;
  return testerRecebido(p.nome);
}
const modoProvador = p => (p.temTester==='sim'||p.temTester==='nao') ? 'manual' : 'auto';

const consignadoAtivo = (nome,tipo) => data.consignments
  .filter(c=>c.produto===nome && c.tipo===tipo).reduce((s,c)=>s+saldoCon(c),0);

let HORIZ = Number(localStorage.getItem('perfumes.horiz')||60);
const JANELA_DEM = 90;
/* unidades vendidas por dia nos últimos 90 dias */
function ritmoDia(nome){
  const corte = Date.now() - JANELA_DEM*86400000;
  const un = data.sales.filter(v=>v.produto===nome && v.data &&
    Date.parse(v.data+'T00:00:00') >= corte).reduce((s,v)=>s+Number(v.qtde),0);
  return un / JANELA_DEM;
}
/* Quando o produto entrou no catálogo — usamos a compra mais antiga como referência */
function entrouEm(nome){
  const d = data.purchases.filter(c=>c.produto===nome && c.data).map(c=>c.data).sort()[0];
  return d ? Date.parse(d+'T00:00:00') : null;
}
const DIAS_NOVO = 90;
function estoque(){
  return data.products.map(p=>{
    const lac = data.purchases.filter(c=>c.produto===p.nome && c.tipo==='Lacrado');
    const recebido = lac.filter(c=>c.entregue==='Sim').reduce((s,c)=>s+Number(c.qtde),0);
    const caminho  = lac.filter(c=>c.entregue!=='Sim').reduce((s,c)=>s+Number(c.qtde),0);
    const vendas   = data.sales.filter(v=>v.produto===p.nome);
    const vendido    = vendas.filter(v=>v.entregue==='Sim').reduce((s,v)=>s+Number(v.qtde),0);
    const aEntregar  = vendas.filter(v=>v.entregue!=='Sim').reduce((s,v)=>s+Number(v.qtde),0);
    const consig = consignadoAtivo(p.nome,'Lacrado');
    const saldo = Math.max(0, recebido - vendido - consig);
    const cm = custoMedio(p.nome), preco = Number(p.precoVenda)||90;
    const custoEst = (saldo+consig)*cm;
    /* previsto considera o que já está comprado (a caminho) e o que está consignado,
       e desconta o que já foi vendido mas ainda não entregue */
    const previsto = saldo + consig + caminho - aEntregar;
    /* O estoque sugerido vem só do histórico de vendas — nada digitado à mão. */
    const porDia = ritmoDia(p.nome);
    const necessidade = Math.ceil(porDia * HORIZ);
    const comprar = necessidade - previsto;
    /* Produto recém-incluído e ainda sem venda não é excesso: é catálogo novo,
       que precisa de tempo para mostrar giro. */
    const entrada = entrouEm(p.nome);
    const nuncaVendeu = !data.sales.some(v=>v.produto===p.nome);
    const novo = nuncaVendeu && entrada !== null &&
                 (Date.now() - entrada) <= DIAS_NOVO*86400000;
    return {produto:p.nome,genero:p.genero,familia:p.familia,recebido,caminho,vendido,aEntregar,consig,saldo,previsto,
      custoMedio:cm,custoEst,lucroPot:(saldo+consig)*preco-custoEst,
      porDia, necessidade,
      novo, diasCatalogo: entrada===null?null:Math.floor((Date.now()-entrada)/86400000),
      status: novo?'NOVO':(comprar>0?'REPOR':(comprar<0?'EXCESSO':'NORMAL')),
      comprar: novo?0:comprar};        /* negativo = sobra */
  });
}
/* só testers já recebidos */
function testers(){
  const m = {};
  data.purchases.filter(c=>c.tipo==='Tester' && c.entregue==='Sim').forEach(c=>{
    if(!m[c.produto]) m[c.produto]={produto:c.produto,qtd:0,custo:0};
    m[c.produto].qtd += Number(c.qtde); m[c.produto].custo += Number(c.custoTotal);
  });
  return Object.values(m).map(r=>{
    const consig = consignadoAtivo(r.produto,'Tester');
    return {...r, genero:gen(r.produto), consig, emMaos:Math.max(0,r.qtd-consig),
      cm:r.qtd>0?r.custo/r.qtd:0, situacao:r.custo>0?'Com custo':'Bonificado'};
  });
}

const bGen   = v => v==='Feminino'?'<span class="badge rosa">Feminino</span>':v==='Masculino'?'<span class="badge azul">Masculino</span>':'—';
const bTipo  = v => v==='Tester'?'<span class="badge roxo">Tester</span>':'<span class="badge cinza">Lacrado</span>';
const bEntC  = v => v==='Não'?'<span class="badge ambar">A caminho</span>':'<span class="badge verde">Recebida</span>';
const bPag   = v => v==='Pendente'?'<span class="badge vermelho">Pendente</span>':'<span class="badge teal">Pago</span>';
const bEntV  = v => v==='Não'?'<span class="badge laranja">Não entregue</span>':'<span class="badge oliva">Entregue</span>';
const bEst   = v => v==='REPOR'?'<span class="badge vermelho">Repor</span>'
  : v==='NOVO'?'<span class="badge azul">Novo</span>'
  : v==='EXCESSO'?'<span class="badge ambar">Excesso</span>':'<span class="badge verde">Normal</span>';
const bCon   = v => v==='Encerrada'?'<span class="badge teal">Encerrada</span>':'<span class="badge terra">Em consignação</span>';
const bSitT  = v => v==='Bonificado'?'<span class="badge ambar">Bonificado</span>':'<span class="badge verde">Com custo</span>';
const thumb  = (src,alt) => src?`<img class="thumb" src="${src}" alt="${esc(alt)}" data-zoom="${esc(alt)}">`:`<div class="thumb-none" title="Sem foto">·</div>`;

/* barra de números no topo de cada tela, sempre sobre o que está filtrado */
function resumo(id, itens){
  const el = $('#'+id); if(!el) return;
  el.innerHTML = itens.filter(Boolean).map(([r,v,c,dica])=>
    `<div${dica?` data-dica="${esc(dica)}"`:''}><div class="r">${r}${dica?' <b class="dica">?</b>':''}</div>`
    + `<div class="v ${c||''}">${v}</div></div>`).join('');
}

function ord(rows, st){
  const {k,d} = st;
  return rows.slice().sort((a,b)=>{
    const x=a[k], y=b[k];
    if(typeof x==='number' && typeof y==='number') return (x-y)*d;
    return String(x==null?'':x).localeCompare(String(y==null?'':y),'pt-BR',{numeric:true,sensitivity:'base'})*d;
  });
}
function th(label,key,st,cls){
  const on = st.k===key;
  return `<th class="${cls||''} sortable${on?' sorted':''}" data-k="${key}" tabindex="0" role="button">${label}<span class="arw">${on?(st.d===1?'▲':'▼'):''}</span></th>`;
}
function bindSort(sel, st, rerender){
  $(sel).addEventListener('click', e=>{
    const h = e.target.closest('th.sortable'); if(!h) return;
    if(st.k===h.dataset.k) st.d*=-1; else { st.k=h.dataset.k; st.d=1; }
    rerender();
  });
  $(sel).addEventListener('keydown', e=>{
    if(e.key!=='Enter'&&e.key!==' ') return;
    const h = e.target.closest('th.sortable'); if(!h) return;
    e.preventDefault(); h.click();
  });
}
/* ---------------- seleção em massa ---------------- */
const chkTodos = g => `<th class="ctr"><input type="checkbox" class="tsel" data-all="${g}" title="Selecionar todos"></th>`;
const chkLinha = (g,id) => `<td class="ctr"><input type="checkbox" class="tsel" data-sel="${g}" value="${id}"${sel[g].has(id)?' checked':''}></td>`;

const ACOES_MASSA = {
  com:{ alvo:()=>data.purchases, render:()=>renderCom(), rotulo:'compra',
    botoes:[ {txt:'Marcar como recebidas', ok:r=>{r.entregue='Sim'}},
             {txt:'Marcar como a caminho', ok:r=>{r.entregue='Não'}},
             {txt:'Definir data de hoje', ok:r=>{r.data=hoje()}} ] },
  ven:{ alvo:()=>data.sales, render:()=>renderVen(), rotulo:'venda',
    botoes:[ {txt:'Marcar como entregues', ok:r=>{r.entregue='Sim'}},
             {txt:'Marcar como pagas', ok:r=>{r.status='Pago'}},
             {txt:'Definir data de hoje', ok:r=>{r.data=hoje()}} ] },
  con:{ alvo:()=>data.consignments, render:()=>renderCon(), rotulo:'consignação',
    botoes:[ {txt:'Dar baixa total como vendidos', ok:r=>{r.qtdeVendida=Number(r.qtde)-Number(r.qtdeDevolvida||0); }},
             {txt:'Dar baixa total como devolvidos', ok:r=>{r.qtdeDevolvida=Number(r.qtde)-Number(r.qtdeVendida||0); }} ] }
};
const hoje = () => { const d=new Date(), p=n=>String(n).padStart(2,'0');
  return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`; };

function renderBulk(g){
  const bar = $('#bulk'+g[0].toUpperCase()+g.slice(1));
  const n = sel[g].size;
  bar.classList.toggle('on', n>0);
  if(!n){ bar.innerHTML=''; return; }
  const A = ACOES_MASSA[g];
  bar.innerHTML = `<span class="qtd">${n} ${plural(n, A.rotulo, A.rotulo+'s')} ${plural(n,'selecionada','selecionadas')}</span>`
    + A.botoes.map((b,i)=>`<button class="btn sm" data-massa="${g}" data-i="${i}">${b.txt}</button>`).join('')
    + `<span class="sep"></span><button class="btn sm ghost" data-limpasel="${g}">Limpar seleção</button>`;
}
function aplicaMassa(g, i){
  const A = ACOES_MASSA[g], b = A.botoes[i];
  const alvo = A.alvo();
  const n = sel[g].size;
  if(!confirm(`${b.txt} — aplicar a ${n} ${plural(n, A.rotulo, A.rotulo+'s')}?`)) return;
  let mudou = 0;
  alvo.forEach(r=>{ if(sel[g].has(r.id)){ b.ok(r); mudou++; } });
  sel[g].clear();
  save(); renderAll();
  if(mudou) flag('verde', `${mudou} ${plural(mudou,'registro atualizado','registros atualizados')}`);
}
document.addEventListener('change', e=>{
  const t = e.target;
  if(t.dataset && t.dataset.sel){
    const g=t.dataset.sel; t.checked ? sel[g].add(t.value) : sel[g].delete(t.value);
    const cab = document.querySelector(`[data-all="${g}"]`); if(cab) cab.checked=false;
    renderBulk(g);
  }
  if(t.dataset && t.dataset.all){
    const g=t.dataset.all;
    document.querySelectorAll(`[data-sel="${g}"]`).forEach(c=>{
      c.checked=t.checked; t.checked ? sel[g].add(c.value) : sel[g].delete(c.value); });
    renderBulk(g);
  }
});
document.addEventListener('click', e=>{
  const m=e.target.closest('[data-massa]');
  if(m) return aplicaMassa(m.dataset.massa, Number(m.dataset.i));
  const l=e.target.closest('[data-limpasel]');
  if(l){ const g=l.dataset.limpasel; sel[g].clear(); ACOES_MASSA[g].render(); renderBulk(g); }
});

/* etiqueta do produto selecionado por clique — filtro exato, não por trecho */
function chipProduto(g, campo){
  const el = $('#chip'+g[0].toUpperCase()+g.slice(1));
  if(!el) return;
  const v = fil[campo];
  el.hidden = !v;
  if(v) el.innerHTML = `Produto: ${esc(v)} <button title="remover">×</button>`;
}
document.addEventListener('click', e=>{
  const b = e.target.closest('.chip button'); if(!b) return;
  const id = b.closest('.chip').id;
  const mapa = {chipCom:['comProdX',renderCom], chipVen:['venProdX',renderVen],
                chipCon:['conProdX',renderCon], chipEst:['estProdX',renderEst],
                chipEstAbc:['estClasseAbc',renderEst]};
  const m = mapa[id]; if(!m) return;
  fil[m[0]] = ''; m[1]();
});

const abaAtual = () => (document.querySelector('.tab.active')||{dataset:{}}).dataset.tab || 'dashboard';
let voltando = false;

/* O estado gravado pertence à tela de DESTINO. Ao voltar, o navegador nos
   entrega o estado da tela anterior — é ele que restauramos. */
function pintaAba(nome){
  document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active', x.dataset.tab===nome));
  document.querySelectorAll('section').forEach(x=>x.classList.remove('active'));
  const s = $('#sec-'+nome); if(s) s.classList.add('active');
}
function goTab(nome){
  if(!voltando && nome !== abaAtual()){
    const n = (history.state && history.state.n || 0) + 1;
    history.pushState({tab:nome, fil:{...fil}, n}, '', location.pathname + location.search);
  }
  pintaAba(nome);
  window.scrollTo({top:0,behavior:'smooth'});
  atualizaVoltar();
}
function atualizaVoltar(){
  const b = $('#btnVoltar'); if(b) b.hidden = !(history.state && history.state.n > 0);
}
/* mantém os filtros da tela atual guardados no histórico */
function guardaFiltros(){
  if(voltando) return;
  const st = history.state || {tab:abaAtual(), n:0};
  history.replaceState({...st, tab:abaAtual(), fil:{...fil}}, '', location.pathname + location.search);
}
window.addEventListener('popstate', e=>{
  const st = e.state || {tab:'dashboard', fil:{}, n:0};
  voltando = true;
  if(st.fil) Object.assign(fil, st.fil);
  Object.keys(GRUPOS).forEach(g=>{
    const G = GRUPOS[g];
    G.campos.forEach(c=>{ const el = G.els && G.els[c] ? $(G.els[c]) : null; if(el) el.value = fil[c]||''; });
    G.render();
  });
  pintaAba(st.tab || 'dashboard');
  window.scrollTo({top:0,behavior:'smooth'});
  atualizaVoltar();
  voltando = false;
});

/* ---------------- limpar filtros ---------------- */
const GRUPOS = {
  prod:{campos:['prodGen','prodFoto','prodQ','prodTester','prodFam'], els:{prodGen:'#filProdGen',prodFoto:'#filProdFoto',prodQ:'#filProdBusca',prodTester:'#filProdTester',prodFam:'#filProdFam'}, render:()=>renderProd()},
  com:{campos:['comGen','comTipo','comEnt','comDe','comAte','comQ','comProdX'], els:{comGen:'#filComGen',comTipo:'#filComTipo',comEnt:'#filComEnt',comDe:'#filComDe',comAte:'#filComAte',comQ:'#filComBusca'}, render:()=>renderCom()},
  ven:{campos:['venGen','venStat','venEnt','venDe','venAte','venQ','venCanal','venProdX','venPedido'], els:{venGen:'#filVenGen',venStat:'#filVenStat',venEnt:'#filVenEnt',venDe:'#filVenDe',venAte:'#filVenAte',venQ:'#filVenBusca',venCanal:'#filVenCanal'}, render:()=>renderVen()},
  est:{campos:['estGen','estStat','estQ','estProdX','estClasseAbc','estFam'], els:{estGen:'#filEstGen',estStat:'#filEstStat',estQ:'#filEstBusca',estFam:'#filEstFam'}, render:()=>renderEst()},
  con:{campos:['conParc','conTipo','conSit','conDe','conAte','conQ','conProdX'], els:{conParc:'#filConParc',conTipo:'#filConTipo',conSit:'#filConSit',conDe:'#filConDe',conAte:'#filConAte',conQ:'#filConBusca'}, render:()=>renderCon()},
  can:{campos:['canSit','canDe','canAte','canQ'], els:{canSit:'#filCanSit',canDe:'#filCanDe',canAte:'#filCanAte',canQ:'#filCanBusca'}, render:()=>renderCanal()},
  cli:{campos:['cliSit','cliQ'], els:{cliSit:'#filCliSit',cliQ:'#filCliBusca'}, render:()=>renderCli()},
  tes:{campos:['tesGen','tesQ'], els:{tesGen:'#filTesGen',tesQ:'#filTesBusca'}, render:()=>renderTes()},
  des:{campos:['desDe','desAte','desQ'], els:{desDe:'#filDesDe',desAte:'#filDesAte',desQ:'#filDesBusca'}, render:()=>renderDes()}
};
function limpaFiltros(g){
  setTimeout(guardaFiltros,0);
  if(g==='ven') fil.venPedido=null;
  const G = GRUPOS[g]; if(!G) return;
  G.campos.forEach(c=>{ fil[c]=''; const el=$(G.els[c]); if(el) el.value=''; });
  G.render();
}
function aplicaFiltros(g, vals){
  setTimeout(guardaFiltros,0);
  if(g==='ven' && !Object.prototype.hasOwnProperty.call(vals,'venPedido')) fil.venPedido=null;
  const G = GRUPOS[g]; if(!G) return;
  G.campos.forEach(c=>{ fil[c] = vals[c]||''; const el=$(G.els[c]); if(el) el.value=fil[c]; });
  G.render();
}
document.querySelectorAll('[data-limpa]').forEach(b=>b.addEventListener('click',()=>limpaFiltros(b.dataset.limpa)));

/* ---------------- balão de explicação ----------------
   O atributo title do navegador só aparece com o mouse parado em cima,
   e no celular não existe. Este balão abre no toque e no passar do mouse. */
const balao = document.createElement('div');
balao.id = 'balao'; balao.hidden = true; document.body.appendChild(balao);
let alvoBalao = null;
function mostraBalao(el){
  const t = el.getAttribute('data-dica'); if(!t) return;
  alvoBalao = el;
  balao.textContent = t; balao.hidden = false;
  const r = el.getBoundingClientRect();
  const larg = Math.min(300, window.innerWidth - 24);
  balao.style.width = larg + 'px';
  const alt = balao.offsetHeight;
  let topo = r.bottom + 8;
  if(topo + alt > window.innerHeight - 8) topo = Math.max(8, r.top - alt - 8);
  let esq = r.left + r.width/2 - larg/2;
  esq = Math.max(12, Math.min(esq, window.innerWidth - larg - 12));
  balao.style.top = topo + 'px'; balao.style.left = esq + 'px';
}
function escondeBalao(){ balao.hidden = true; alvoBalao = null; }
document.addEventListener('click', e=>{
  const card = e.target.closest('[data-ir]');
  if(card && !e.target.closest('[data-dica]')){
    const ir = JSON.parse(card.getAttribute('data-ir'));
    escondeBalao();
    if(ir.f) aplicaFiltros(ir.g, ir.f); else if(ir.g) limpaFiltros(ir.g);
    return goTab(ir.t);
  }
  const el = e.target.closest('[data-dica]');
  if(!el){ if(!e.target.closest('#balao')) escondeBalao(); return; }
  e.stopPropagation();
  /* alternar só faz sentido no toque; com mouse o balão já abriu ao passar por cima */
  const toque = matchMedia('(hover:none)').matches;
  if(toque && alvoBalao === el) return escondeBalao();
  mostraBalao(el);
});
let balaoTimer;
document.addEventListener('mouseover', e => {
  if(matchMedia('(hover:none)').matches) return;      // celular: só no toque
  const el = e.target.closest('[data-dica]');
  
  if(el) {
    clearTimeout(balaoTimer);
    mostraBalao(el);
  } else if (e.target.closest('#balao')) {
    // Se o mouse entrou no próprio balão, não fecha!
    clearTimeout(balaoTimer);
  } else {
    // Se o mouse saiu para qualquer outro lugar, só fecha depois de 1 segundo
    clearTimeout(balaoTimer);
    balaoTimer = setTimeout(escondeBalao, 1000);
  }
});
window.addEventListener('scroll', () => {
  // Desativado o escondeBalao no scroll para permitir leitura longa!
}, true);
window.addEventListener('resize', escondeBalao);

/* ---------------- clientes ---------------- */
function resumoCliente(nome){
  const k = norm(nome);
  const vendas = data.sales.filter(v=>temNome(v) && norm(v.cliente)===k);
  const total = vendas.reduce((s,v)=>s+Number(v.valorVenda),0);
  const pago = vendas.filter(v=>v.status==='Pago').reduce((s,v)=>s+Number(v.valorVenda),0);
  /* em aberto conta só o que já foi entregue: é o dinheiro realmente na rua */
  const emAberto = vendas.filter(v=>v.status==='Pendente' && v.entregue==='Sim')
    .reduce((s,v)=>s+Number(v.valorVenda),0);
  const aEntregar = vendas.filter(v=>v.entregue!=='Sim')
    .reduce((s,v)=>s+Number(v.valorVenda),0);
  const lucro = vendas.reduce((s,v)=>s+calcVenda(v).lucro,0);
  const datas = vendas.map(v=>v.data).filter(Boolean).sort();
  const pedidos = contaPedidos(vendas);
  const porProd = {};
  vendas.forEach(v=>{ porProd[v.produto]=(porProd[v.produto]||0)+Number(v.qtde); });
  const ranking = Object.entries(porProd).sort((a,b)=>b[1]-a[1]);
  /* só é "preferido" se repetiu: com tudo empatado em 1, não há preferência */
  const favorito = (ranking.length && ranking[0][1] > (ranking[1] ? ranking[1][1] : 0)
                    && ranking[0][1] > 1) ? ranking[0][0] : '';
  return {vendas, nCompras:vendas.length, pedidos,
    unidades:vendas.reduce((s,v)=>s+Number(v.qtde),0),
    total, pago, emAberto, aEntregar, lucro,
    ticket: pedidos ? total/pedidos : 0,
    primeira: datas[0]||'', ultima: datas[datas.length-1]||'',
    favorito};
}
function clientesRows(){
  return data.clients.map(c=>{
    const r = resumoCliente(c.nome);
    return {...c, ...r, diasSem: diasSemComprar(r),
      situacao: r.emAberto>0 ? 'Em aberto' : (r.nCompras?'Em dia':'Sem compras')};
  });
}
const soDigitos = t => (t||'').replace(/\D/g,'');
/* Um pedido é o que a mesma pessoa levou no mesmo dia, no mesmo canal.
   Sem nome ou sem data não dá para agrupar: cada linha vira um pedido. */
function chavePedido(v){
  const c = norm(v.cliente);
  if(!c || SEM_NOME.has(c) || !v.data) return 'ind|'+v.id;
  return norm(canalDe(v))+'|'+c+'|'+v.data;
}
const contaPedidos = vendas => new Set(vendas.map(chavePedido)).size;
/* quando o comprador não foi anotado */
const SEM_NOME = new Set(['','-','--','x','nao identificado','não identificado','sem nome','cliente','diverso','diversos','avulso','balcao','balcão']);
const temNome = v => { const k=norm(v.cliente); return !!k && !SEM_NOME.has(k); };
const canalDe = v => (v.canal||'Direto').trim() || 'Direto';
/* quem responde pelo dinheiro: o canal quando não é venda direta */
const responsavelDe = v => canalDe(v)==='Direto' ? (temNome(v)?v.cliente.trim():'Não identificado') : canalDe(v);
function linkZap(cli, texto){
  const d = soDigitos(cli.telefone);
  const num = d ? (d.length<=11 ? '55'+d : d) : '';
  return `https://wa.me/${num}?text=${encodeURIComponent(texto)}`;
}
/* Catálogo em texto, para mandar no WhatsApp sem depender de anexo.
   Só entra o que está disponível; o WhatsApp corta mensagens muito longas,
   então a lista é limitada e o resto vira convite para pedir a completa. */
const contaProvador = itens => {
  const com = itens.filter(temProvador).length;
  return {com, todos: com===itens.length && com>0, algum: com>0};
};
/* Mensagem única do catálogo: manda o link publicado quando existe,
   e cai para a lista em texto quando ainda não há link no ar. */
function mensagemCatalogo(){
  const id = data.config && data.config.catalogoId;
  if(id && NV.url && NV.key){
    return `Oi! Esse é o catálogo da *Buffon Fragrâncias* — o maior portfólio da *La Rive* você só encontra aqui.\n`
      + `Confira as fotos e as notas de cada fragrância:\n${linkPublico(id)}\n\n`
      + `Qualquer dúvida é só me chamar.`;
  }
  return textoCatalogo('');
}
function textoCatalogo(genero){
  const est = {}; estoque().forEach(r=>est[r.produto]=r.saldo+r.consig);
  /* manda o catálogo inteiro: o que não está em casa vai como encomenda,
     que é como você já vende. Antes só ia o que tinha em estoque. */
  let itens = data.products.slice();
  if(genero) itens = itens.filter(p=>p.genero===genero);
  const linha = p => `• ${p.nome}${p.inspiracao?` — inspirado em ${p.inspiracao}`:''}`
    + ((est[p.nome]||0)>0 ? '' : ' _(sob encomenda)_');
  const bloco = g => {
    const l = itens.filter(p=>p.genero===g).sort((a,b)=>a.nome.localeCompare(b.nome,'pt-BR'));
    return l.length ? `\n*${g==='Masculino'?'MASCULINOS':'FEMININOS'}*\n` + l.map(linha).join('\n') : '';
  };
  let corpo = bloco('Masculino') + bloco('Feminino');
  let cortou = 0;
  while(corpo.length > 3200){
    const linhas = corpo.split('\n');
    const i = linhas.map((s,k)=>s.startsWith('•')?k:-1).filter(k=>k>=0).pop();
    if(i<0) break;
    linhas.splice(i,1); cortou++; corpo = linhas.join('\n');
  }
  return `*Buffon Fragrâncias* — o maior portfólio da *La Rive* você só encontra aqui.\n`
    + `As melhores inspirações da perfumaria internacional.\n${corpo}\n`
    + (cortou?`\n_(e mais ${cortou} disponíveis)_\n`:'')

    + `\nSe preferir, envio o catálogo completo em PDF, com as fotos e as notas de cada fragrância. É só me pedir.`;
}
function textoReativacao(cli, r){
  const nome = cli.nome.split(' ')[0];
  const d = diasSemComprar(r);
  const ref = r.favorito ? `Vi aqui que o *${r.favorito}* é o seu preferido.` : '';
  return `Oi, ${nome}! Tudo bem?\n\n`
    + (d ? `Sua última compra foi em ${dt(r.ultima)}.\n\n` : '')
    + (ref ? ref + `\n\n` : '')
    + `Chegaram novidades na *Buffon Fragrâncias*.\n`
    + `Quer que eu te mande o catálogo atualizado?`;
}
const diasSemComprar = r => r.ultima ? Math.floor((Date.now()-Date.parse(r.ultima+'T00:00:00'))/86400000) : null;

function textoCobranca(cli, r){
  const pendentes = r.vendas.filter(v=>v.status==='Pendente' && v.entregue==='Sim');
  
  // Agrupar por data
  const porData = {};
  pendentes.forEach(v => {
    const dataFormatada = dt(v.data);
    if (!porData[dataFormatada]) porData[dataFormatada] = [];
    porData[dataFormatada].push(`• ${v.qtde}x ${v.produto} — ${money(v.valorVenda)}`);
  });

  // Montar texto agrupado
  let itensTexto = '';
  for (const [data, itens] of Object.entries(porData)) {
    itensTexto += `*Pedido de ${data}:*\n${itens.join('\n')}\n\n`;
  }

  return `Oi, ${cli.nome.split(' ')[0]}! Tudo bem?\n\n`
    + `Passando para lembrar do(s) pedido(s) da *Buffon Fragrâncias*:\n\n${itensTexto}`
    + `*Total: ${money(r.emAberto)}*\n\nQualquer coisa é só me chamar. Obrigado!`;
}

function renderCli(){
  let rows = clientesRows();
  const total = rows.length;
  if(fil.cliSit==='devendo') rows = rows.filter(c=>c.emAberto>0);
  if(fil.cliSit==='quitado') rows = rows.filter(c=>c.emAberto===0);
  if(fil.cliSit==='semtel') rows = rows.filter(c=>!soDigitos(c.telefone));
  if(fil.cliQ) rows = rows.filter(c=>norm(c.nome).includes(norm(fil.cliQ)));
  rows = ord(rows, sort.cli);
  const st = sort.cli;
  $('#cntCli').textContent = `${rows.length} de ${total}`;
  const cDev = rows.filter(c=>c.emAberto>0);
  const maior = cDev.slice().sort((a,b)=>b.emAberto-a.emAberto)[0];
  resumo('resCli', [
    ['Clientes', rows.length],
    ['Pedidos', rows.reduce((s,c)=>s+c.pedidos,0), '', 'Mesma pessoa, mesmo dia, mesmo canal = um pedido.'],
    ['Lançamentos', rows.reduce((s,c)=>s+c.nCompras,0), '', 'Cada linha lançada na aba Vendas — um produto por linha.'],
    ['Unidades', rows.reduce((s,c)=>s+c.unidades,0), '', 'Soma das quantidades — frascos, não linhas.'],
    ['Faturado', money(rows.reduce((s,c)=>s+c.total,0))],
    ['Em aberto', money(cDev.reduce((s,c)=>s+c.emAberto,0)), cDev.length?'al':'ok',
      `${cDev.length} ${plural(cDev.length,'cliente','clientes')} com pedido entregue e não pago.`],
    ['Maior devedor', maior ? `${maior.nome} · ${money(maior.emAberto)}` : '—', maior?'al':'ok'],
    ['Ticket médio', money(rows.reduce((s,c)=>s+c.total,0)/Math.max(1,rows.reduce((s,c)=>s+c.pedidos,0))), '', 'Faturado ÷ pedidos.'],
    ['Recorrentes', rows.filter(c=>c.pedidos>1).length, 'ok', 'Clientes que voltaram em outro pedido.'],
    ['Sem WhatsApp', rows.filter(c=>!soDigitos(c.telefone)).length, rows.some(c=>!soDigitos(c.telefone))?'am':'ok',
      'Sem telefone não dá para cobrar nem oferecer novidade.']
  ]);

  const todos = clientesRows();
  const devendo = todos.filter(c=>c.emAberto>0);

  const t = rows.reduce((a,c)=>({p:a.p+c.pedidos,n:a.n+c.nCompras,un:a.un+c.unidades,
    tot:a.tot+c.total,ab:a.ab+c.emAberto,lu:a.lu+c.lucro}),{p:0,n:0,un:0,tot:0,ab:0,lu:0});
  $('#tCli').innerHTML = rows.length
    ? `<thead><tr>${th('Cliente','nome',st)}${th('WhatsApp','telefone',st)}${th('Pedidos','pedidos',st,'num')}${th('Lançam.','nCompras',st,'num')}${th('Unidades','unidades',st,'num')}${th('Total','total',st,'num')}${th('Em aberto','emAberto',st,'num')}${th('Lucro','lucro',st,'num')}${th('Ticket','ticket',st,'num')}${th('Última','ultima',st)}${th('Última compra há','diasSem',st,'num')}${th('Preferido','favorito',st)}<th></th></tr></thead><tbody>`+
      rows.map(c=>`<tr><td><button class="linkcli" data-ficha="${c.id}">${esc(c.nome)}</button></td>
        <td>${esc(c.telefone)||'—'}</td><td class="num">${c.pedidos}</td><td class="num">${c.nCompras}</td><td class="num">${c.unidades}</td>
        <td class="num">${money(c.total)}</td>
        <td class="num">${c.emAberto>0?`<b style="color:var(--vermelho)">${money(c.emAberto)}</b>`:'—'}</td>
        <td class="num">${money(c.lucro)}</td><td class="num">${money(c.ticket)}</td>
        <td>${dt(c.ultima)}</td>
        <td class="num">${c.diasSem===null?'—':c.diasSem+' d'}</td>
        <td>${esc(c.favorito)||'—'}</td>
        <td><div class="rowacts"><button class="btn sm" data-ecl="${c.id}">Editar</button><button class="btn sm ghost" data-dcl="${c.id}">Excluir</button></div></td></tr>`).join('')+
      `</tbody><tfoot><tr><td>Total</td><td></td><td class="num">${t.p}</td><td class="num">${t.n}</td><td class="num">${t.un}</td><td class="num">${money(t.tot)}</td><td class="num">${money(t.ab)}</td><td class="num">${money(t.lu)}</td><td class="num">${money(t.p?t.tot/t.p:0)}</td><td></td><td></td><td></td><td></td></tr></tfoot>`
    : `<tbody><tr><td class="empty">Nenhum cliente encontrado.</td></tr></tbody>`;
}

function abreFicha(id){
  const cli = data.clients.find(c=>c.id===id); if(!cli) return;
  fichaAtual = cli;
  const r = resumoCliente(cli.nome);
  $('#fichaNome').textContent = cli.nome;
  $('#fichaSub').textContent = [cli.telefone, cli.observacao].filter(Boolean).join(' · ') || 'Sem telefone cadastrado';
  $('#fichaKpis').innerHTML = [
    kpi('Pedidos', r.pedidos, 'azul', `${r.nCompras} ${plural(r.nCompras,'item','itens')} · ${r.unidades} un`),
    kpi('Total gasto', money(r.total), 'verde', `ticket ${money(r.ticket)} por pedido`),
    kpi('Em aberto', money(r.emAberto), r.emAberto>0?'vermelho':'verde', r.emAberto>0?'já entregue e não pago':'em dia'),
    kpi('Lucro gerado', money(r.lucro), 'verde'),
    kpi('Preferido', r.favorito||'sem repetição', 'roxo', r.ultima?('última em '+dt(r.ultima)):'')
  ].join('');
  const vs = r.vendas.slice().sort((a,b)=>(b.data||'').localeCompare(a.data||''));
  $('#fichaTab').innerHTML = vs.length
    ? `<thead><tr><th>Data</th><th>Produto</th><th class="num">Qtde</th><th class="num">Venda</th><th class="num">Custos</th><th class="num">Líquido</th><th class="ctr">Pagamento</th><th class="ctr">Entrega</th></tr></thead><tbody>`+
      vs.map(v=>`<tr><td>${dt(v.data)}</td><td>${esc(v.produto)}</td><td class="num">${v.qtde}</td>
        <td class="num">${money(v.valorVenda)}</td><td class="num" style="color:var(--vermelho)">-${money(v.custosExtras||0)}</td><td class="num">${money((v.valorVenda||0) - (v.custosExtras||0))}</td><td class="ctr">${bPag(v.status)}</td><td class="ctr">${bEntV(v.entregue)}</td></tr>`).join('')+`</tbody>`
    : `<tbody><tr><td class="empty">Nenhuma compra registrada.</td></tr></tbody>`;
  const precisaTel = ()=>{ if(!soDigitos(cli.telefone)){ alert('Cadastre o WhatsApp deste cliente primeiro.'); return false; } return true; };
  const zap = $('#fichaZap');
  zap.hidden = !(r.emAberto>0);
  zap.onclick = ()=>{ if(precisaTel()) window.open(linkZap(cli, textoCobranca(cli,r)), '_blank'); };

  $('#fichaCat').onclick = ()=>{
    if(!precisaTel()) return;
    window.open(linkZap(cli, mensagemCatalogo()), '_blank');
  };

  const dias = diasSemComprar(r);
  const volta = $('#fichaVolta');
  volta.hidden = !r.nCompras;
  volta.textContent = dias!==null ? `Oferecer novidade (${dias} d)` : 'Oferecer novidade';
  volta.onclick = ()=>{ if(precisaTel()) window.open(linkZap(cli, textoReativacao(cli,r)), '_blank'); };
  $('#fichaVendas').onclick = ()=>{
    $('#modalFicha').classList.remove('open');
    aplicaFiltros('ven', {venQ:cli.nome}); goTab('vendas');
  };
  $('#modalFicha').classList.add('open');
}
$('#fichaFechar').addEventListener('click', ()=>$('#modalFicha').classList.remove('open'));
$('#modalFicha').addEventListener('click', e=>{ if(e.target.id==='modalFicha') $('#modalFicha').classList.remove('open'); });

/* ---------------- canais ---------------- */
function canaisRows(){
  const m = {};
  data.sales.filter(v=>noPeriodo(v.data, fil.canDe, fil.canAte)).forEach(v=>{
    const c = canalDe(v);
    if(!m[c]) m[c]={canal:c, n:0, itens:0, unidades:0, total:0, lucro:0, aAcertar:0, aEntregar:0, semNome:0, datas:[], pedidosSet:new Set()};
    const o=m[c];
    o.itens++; o.pedidosSet.add(chavePedido(v));
    o.unidades+=Number(v.qtde); o.total+=Number(v.valorVenda);
    o.lucro+=calcVenda(v).lucro;
    if(v.status==='Pendente' && v.entregue==='Sim') o.aAcertar+=Number(v.valorVenda);
    if(v.entregue!=='Sim') o.aEntregar+=Number(v.valorVenda);
    if(!temNome(v)) o.semNome++;
    if(v.data) o.datas.push(v.data);
  });
  return Object.values(m).map(o=>({...o, n:o.pedidosSet.size,
    ticket: o.pedidosSet.size?o.total/o.pedidosSet.size:0,
    margem: o.total?o.lucro/o.total:0,
    ultima: o.datas.sort().slice(-1)[0]||''
  }));
}
function renderCanal(){
  let rows = canaisRows();
  const total = rows.length;
  if(fil.canSit==='acertar') rows = rows.filter(c=>c.aAcertar>0);
  if(fil.canSit==='entregar') rows = rows.filter(c=>c.aEntregar>0);
  if(fil.canSit==='quites') rows = rows.filter(c=>c.aAcertar===0 && c.aEntregar===0);
  if(fil.canQ) rows = rows.filter(c=>norm(c.canal).includes(norm(fil.canQ)));
  const fatGeralOrd = canaisRows().reduce((s,c)=>s+c.total,0);
  rows.forEach(c=>c.pctFat = fatGeralOrd?c.total/fatGeralOrd:0);
  rows = ord(rows, sort.can);
  const st = sort.can;
  $('#cntCan').textContent = `${rows.length} de ${total}`;
  resumo('resCan', [
    ['Canais', rows.length],
    ['Pedidos', rows.reduce((s,c)=>s+c.n,0), '', 'Mesma pessoa, mesmo dia, mesmo canal = um pedido.'],
    ['Unidades', rows.reduce((s,c)=>s+c.unidades,0), '', 'Soma das quantidades — frascos, não linhas.'],
    ['Faturado', money(rows.reduce((s,c)=>s+c.total,0))],
    ['Lucro', money(rows.reduce((s,c)=>s+c.lucro,0)), 'ok'],
    ['A acertar', money(rows.reduce((s,c)=>s+c.aAcertar,0)), rows.some(c=>c.aAcertar>0)?'al':'ok',
      'Vendas do canal já entregues e ainda não pagas — é o que ele tem para acertar com você.'],
    ['Maior canal', rows.length ? rows.slice().sort((a,b)=>b.total-a.total)[0].canal : '—'],
    ['Melhor margem', rows.length ? rows.slice().sort((a,b)=>b.margem-a.margem)[0].canal : '—', 'ok']
  ]);
  const tot = rows.reduce((a,c)=>({n:a.n+c.n,it:a.it+c.itens,t:a.t+c.total,l:a.l+c.lucro,ac:a.ac+c.aAcertar}),{n:0,it:0,t:0,l:0,ac:0});
  const todos = canaisRows().slice().sort((a,b)=>b.total-a.total);
  const devendo = todos.filter(c=>c.aAcertar>0);
  const fatGeral = todos.reduce((s,c)=>s+c.total,0);   // % sempre sobre o total geral, não sobre o filtrado
  $('#tCanal').innerHTML = rows.length
    ? `<thead><tr>${th('Canal','canal',st)}${th('Pedidos','n',st,'num')}${th('Lançam.','itens',st,'num')}${th('Unidades','unidades',st,'num')}${th('Faturado','total',st,'num')}${th('Lucro','lucro',st,'num')}${th('Margem','margem',st,'num')}${th('Ticket','ticket',st,'num')}${th('% do faturamento','pctFat',st,'num')}${th('A acertar','aAcertar',st,'num')}${th('A entregar','aEntregar',st,'num')}${th('Não identificado','semNome',st,'num')}${th('Última','ultima',st)}</tr></thead><tbody>`+
      rows.map(c=>`<tr><td><button class="linkcli" data-canal="${esc(c.canal)}">${esc(c.canal)}</button></td>
        <td class="num">${c.n}</td><td class="num">${c.itens}</td><td class="num">${c.unidades}</td><td class="num">${money(c.total)}</td>
        <td class="num">${money(c.lucro)}</td><td class="num">${pct(c.margem)}</td><td class="num">${money(c.ticket)}</td>
        <td class="num">${fatGeral?pct(c.total/fatGeral):'—'}</td>
        <td class="num">${c.aAcertar>0?`<b style="color:var(--vermelho)">${money(c.aAcertar)}</b>`:'—'}</td>
        <td class="num">${c.aEntregar>0?money(c.aEntregar):'—'}</td>
        <td class="num">${c.semNome||'—'}</td><td>${dt(c.ultima)}</td></tr>`).join('')+
      `</tbody><tfoot><tr><td>Total</td><td class="num">${tot.n}</td><td class="num">${tot.it}</td><td></td><td class="num">${money(tot.t)}</td><td class="num">${money(tot.l)}</td><td></td><td></td>
        <td class="num">${fatGeral?pct(tot.t/fatGeral):'—'}</td><td class="num">${money(tot.ac)}</td><td colspan="3"></td></tr></tfoot>`
    : `<tbody><tr><td class="empty">Nenhum canal encontrado com esses filtros.</td></tr></tbody>`;
}
$('#tCanal').addEventListener('click', e=>{
  const b=e.target.closest('[data-canal]'); if(!b) return;
  aplicaFiltros('ven', {venCanal:b.dataset.canal}); goTab('vendas');
});

/* ---------------- sugestão de compra ----------------
   Estatística sobre os seus dados: ritmo de venda dos últimos 90 dias,
   posição atual e quantos dias você quer cobrir. Sem adivinhação. */
function renderSugestao(est){
  const dias = Number(($('#sugHoriz')||{}).value || 60);
  const hoje = Date.now(), JANELA = 90;
  const corte = hoje - JANELA*86400000;

  const vendasRecentes = {};
  data.sales.filter(v=>v.data && Date.parse(v.data+'T00:00:00') >= corte)
    .forEach(v=>{ vendasRecentes[v.produto] = (vendasRecentes[v.produto]||0) + Number(v.qtde); });
  const vendasTotais = {};
  data.sales.forEach(v=>{ vendasTotais[v.produto] = (vendasTotais[v.produto]||0) + Number(v.qtde); });

  const linhas = est.map(r=>{
    const un90 = vendasRecentes[r.produto] || 0;
    const cobertura = r.porDia > 0 ? r.previsto / r.porDia : (r.previsto > 0 ? Infinity : 0);
    const comprar = Math.max(0, r.comprar);              // mesmo número da aba Estoque
    return {...r, un90, cobertura, comprar,
      custo: comprar * (r.custoMedio || 0),
      semGiro: !vendasTotais[r.produto]};
  });

  const comprar = linhas.filter(l=>l.comprar > 0)
    .sort((a,b)=> (a.cobertura - b.cobertura) || (b.un90 - a.un90));
  const parados = linhas.filter(l=>l.semGiro && l.previsto > 0 && !l.novo);
  const novos = linhas.filter(l=>l.novo);
  const total = comprar.reduce((s,l)=>s+l.custo, 0);

  $('#tSug').innerHTML = comprar.length
    ? `<thead><tr><th>Produto</th><th class="num">Vendeu 90d</th><th class="num">Por mês</th>`
      + `<th class="num">Saldo</th><th class="num">Sugerido</th><th class="num">Cobre</th><th class="num">Comprar</th><th class="num">Custo</th></tr></thead><tbody>`
      + comprar.slice(0,12).map(l=>`<tr>
          <td><button class="numlink" data-sugprod="${esc(l.produto)}">${esc(l.produto)}</button>${l.previsto<=0?' <span class="badge vermelho">zerado</span>':''}</td>
          <td class="num">${l.un90} un</td>
          <td class="num">${(l.porDia*30).toFixed(1)}</td>
          <td class="num">${l.previsto}</td>
          <td class="num">${l.necessidade}</td>
          <td class="num">${l.cobertura===Infinity?'—':Math.round(l.cobertura)+' d'}</td>
          <td class="num"><button class="numlink" data-sugcomp="${esc(l.produto)}" data-qtd="${l.comprar}"
            title="lançar esta compra"><b>${l.comprar}</b></button></td>
          <td class="num">${money(l.custo)}</td></tr>`).join('')
      + `</tbody><tfoot><tr><td colspan="6">Total sugerido</td>`
      + `<td class="num">${comprar.reduce((s,l)=>s+l.comprar,0)}</td>`
      + `<td class="num">${money(total)}</td></tr></tfoot>`
    : `<tbody><tr><td class="empty">Nada a repor para cobrir ${dias} dias no ritmo atual.</td></tr></tbody>`;

  $('#sugNota').innerHTML = `Ritmo medido nos últimos 90 dias de vendas com data. `
    + `<b>Estoque sugerido</b> = ritmo de venda × ${dias} dias. `
    + `"Cobre" é quantos dias o saldo dura no ritmo atual — quanto menor, mais urgente. `
    + `É o mesmo número da coluna Comprar da aba Estoque.`
    + (novos.length ? `<br><b>${novos.length} ${plural(novos.length,'produto novo','produtos novos')} no catálogo</b> ainda sem histórico de venda — sem sugestão até criarem giro.` : '')
    + (parados.length ? `<br><b>Não sugerido:</b> ${parados.length} ${plural(parados.length,'produto','produtos')} com estoque, no catálogo há mais de ${DIAS_NOVO} dias e sem nenhuma venda`
        + ` (${money(parados.reduce((s,l)=>s+l.previsto*l.custoMedio,0))} parados). Antes de comprar mais, vale escoar esses.` : '')
    + `<br><i>Isto é estatística sobre o seu histórico, não previsão. Você conhece o cliente; o número é só o ponto de partida.</i>`;
}

/* ---------------- dashboard ---------------- */
/* Agrupa por quem responde pelo dinheiro: o comprador nas vendas diretas,
   o canal quando quem vendeu foi a barbearia ou outra pessoa. */
function inadimplentes(){
  const m = {};
  data.sales.filter(v=>v.status==='Pendente' && v.entregue==='Sim').forEach(v=>{
    const nome = responsavelDe(v), k = norm(nome);
    if(!m[k]) m[k]={nome, valor:0, n:0, qtd:0, canal: canalDe(v)!=='Direto'};
    m[k].valor += Number(v.valorVenda); m[k].n++; m[k].qtd += Number(v.qtde);
  });
  return Object.values(m).sort((a,b)=>b.valor-a.valor);
}
/* ---------------- curva ABC ----------------
   Reaproveitada no dashboard e na aba Estoque. */
function calculaABC(){
  const fatProd = {};
  data.sales.forEach(v=>{ fatProd[v.produto]=(fatProd[v.produto]||0)+Number(v.valorVenda); });
  const rank = Object.entries(fatProd).map(([p,f])=>({p,f})).sort((a,b)=>b.f-a.f);
  const totFat = rank.reduce((s,r)=>s+r.f,0);
  let acum=0; const classes={A:[],B:[],C:[]};
  rank.forEach(r=>{ acum+=r.f; const pctAcum = totFat ? acum/totFat : 0;
    r.classe = pctAcum<=0.8 ? 'A' : pctAcum<=0.95 ? 'B' : 'C';
    classes[r.classe].push(r); });
  const porProduto = {}; rank.forEach(r=>porProduto[r.p]=r.classe);
  const semVenda = data.products.filter(p=>!fatProd[p.nome]).map(p=>p.nome);
  return {rank, totFat, classes, porProduto, semVenda};
}
function renderABC(id, opt){
  opt = opt || {};
  const {rank, totFat, classes, semVenda} = calculaABC();
  const el = $('#'+id); if(!el) return;
  const linhaABC = (c, rot, cor) => {
    const l = classes[c], f = l.reduce((s,r)=>s+r.f,0);
    return `<li data-abc="${c}"><span><span class="badge ${cor}">${c}</span> ${rot}</span>
      <span class="val">${l.length} ${plural(l.length,'produto','produtos')} · ${money(f)} · ${totFat?pct(f/totFat):'—'}</span></li>`;
  };
  el.innerHTML = rank.length
    ? linhaABC('A','os que sustentam o negócio','verde')
      + linhaABC('B','importância média','ambar')
      + linhaABC('C','cauda longa','cinza')
      + (semVenda.length?`<li data-abc="—"><span><span class="badge vermelho">—</span> nunca venderam</span><span class="val">${semVenda.length} ${plural(semVenda.length,'produto','produtos')}</span></li>`:'')
      + `<li class="note">A = até 80% do faturamento, B = até 95%, C = o resto. Os A merecem nunca faltar; os C você compra sob encomenda.</li>`
      + rank.slice(0, opt.top||5).map((r,i)=>`<li data-abcprod="${esc(r.p)}"><span><b class="pos">${i+1}.</b> ${esc(r.p)}</span><span class="val">${money(r.f)} · ${pct(totFat?r.f/totFat:0)}</span></li>`).join('')
    : `<li><span class="empty">Nenhuma venda lançada.</span></li>`;
  el.querySelectorAll('[data-abcprod]').forEach(li=>li.classList.add('clic'));
  if(!el.dataset.ligado){
    el.dataset.ligado = '1';
    el.addEventListener('click', e=>{
      const lip = e.target.closest('[data-abcprod]');
      if(lip){ aplicaFiltros('ven', {venProdX:lip.dataset.abcprod}); return goTab('vendas'); }
      const lic = e.target.closest('[data-abc]');
      if(lic){ aplicaFiltros('est', {estClasseAbc:lic.dataset.abc}); return goTab('estoque'); }
    });
  }
}

function renderDash(){
  const vendas = data.sales.reduce((s,v)=>s+Number(v.valorVenda),0);
  const recebido = data.sales.filter(v=>v.status==='Pago').reduce((s,v)=>s+Number(v.valorVenda),0);
  const aReceber = data.sales.filter(v=>v.status==='Pendente').reduce((s,v)=>s+Number(v.valorVenda),0);
  const lucro = data.sales.reduce((s,v)=>s+calcVenda(v).lucro,0);
  const margem = vendas>0?lucro/vendas:0;
  const est = estoque();
  const unEst = est.reduce((s,r)=>s+r.saldo,0), valEst = est.reduce((s,r)=>s+r.custoEst,0);
  const lucroPot = est.reduce((s,r)=>s+r.lucroPot,0);
  const tes = testers(), custoTes = tes.reduce((s,t)=>s+t.custo,0), unTes = tes.reduce((s,t)=>s+t.qtd,0);
  const desp = data.expenses.reduce((s,d)=>s+Number(d.valor),0);
  const invest = data.purchases.reduce((s,c)=>s+Number(c.custoTotal),0)+desp;
  const roi = invest>0?(lucro-desp)/invest:0;
  const be = Math.max(0,invest-lucro);
  const cam = data.purchases.filter(c=>c.entregue!=='Sim');
  const camLac = cam.filter(c=>c.tipo==='Lacrado'), camTes = cam.filter(c=>c.tipo==='Tester');
  const un = l => l.reduce((s,c)=>s+Number(c.qtde),0);
  const vl = l => l.reduce((s,c)=>s+Number(c.custoTotal),0);
  const aEntregar = data.sales.filter(v=>v.entregue==='Não');
  const conAtivo = data.consignments.filter(c=>saldoCon(c)>0);
  const inad = inadimplentes();

  const invCompras = data.purchases.reduce((s,c)=>s+Number(c.custoTotal),0);
  const rendimentoCDI = valEst * selicMensalAtual;
  
  $('#kpi1').innerHTML = [
    kpi('Vendas totais',money(vendas),'azul',`Recebido ${money(recebido)}`,
      `Soma de todas as vendas lançadas (${data.sales.length} ${plural(data.sales.length,'item','itens')}).\n`
      +`Recebido ${money(recebido)} + a receber ${money(aReceber)} = ${money(vendas)}`,
      {t:'vendas', g:'ven'}),
    kpi('A receber',money(aReceber),aReceber>0?'ambar':'verde',`${data.sales.filter(v=>v.status==='Pendente').length} em aberto · ${money(inad.reduce((s,c)=>s+c.valor,0))} já entregue`,
      `Todo o valor que falta ser pago pelos clientes.\n`
      + `Dinheiro na rua: ${money(inad.reduce((s,c)=>s+c.valor,0))} (produtos que já saíram da sua mão e não foram pagos).`,
      {t:'vendas', g:'ven', f:{venStat:'Pendente'}}),
    kpi('Lucro bruto',money(lucro),'verde',`Margem ${pct(margem)}`,
      `Para cada venda: valor da venda − (custo médio do produto × quantidade).\n`
      +`Margem = lucro ÷ vendas = ${money(lucro)} ÷ ${money(vendas)} = ${pct(margem)}\n`
      +`Não desconta as despesas operacionais (${money(desp)}).`,
      {t:'vendas', g:'ven'}),
    kpi('ROI',pct(roi),roi>=0?'verde':'vermelho',`Investimento ${money(invest)}`,
      `Retorno sobre o investimento.\n`
      +`(lucro − despesas) ÷ investimento\n`
      +`(${money(lucro)} − ${money(desp)}) ÷ ${money(invest)} = ${pct(roi)}\n`
      +`Investimento = ${money(invCompras)} em compras + ${money(desp)} em despesas`),
    kpi('Recuperação de Caixa', money(Math.max(0, invest - recebido)), (invest - recebido) > 0 ? 'ambar' : 'verde', (invest - recebido) > 0 ? 'Falta entrar no caixa' : 'Caixa no azul!',
      `Mostra o dinheiro real que falta entrar para cobrir tudo o que você gastou.\n`
      + `Investimento total − Valor já recebido (pago)\n`
      + `${money(invest)} − ${money(recebido)} = ${money(Math.max(0, invest - recebido))}\n`
      + `(Contabiliza apenas o dinheiro que já está no seu bolso, ignorando o que ainda está a receber).`),
    kpi('Custo de Oportunidade', money(rendimentoCDI) + '/mês', 'roxo', `Líquido na Renda Fixa`,
      `Quanto o dinheiro travado hoje no seu estoque (${money(valEst)}) renderia na Renda Fixa (Já descontado 22,5% de IR = ~${(selicMensalAtual * 100).toFixed(2)}% líquidos ao mês).\n`
      + `O seu lucro real no negócio precisa justificar esse valor que você "deixa de ganhar" sem esforço.`,
      {t:'estoque', g:'est'})
  ].join('');
  
  const produtosVendidos = data.sales.reduce((s,v)=>s+Number(v.qtde), 0);
  $('#kpi2').innerHTML = [
    kpi('Estoque em mãos',unEst+' un','azul',`${money(valEst)} com o consignado`,
      `Unidades fisicamente com você: recebido − vendido e entregue − consignado.\n`
      +`O valor ${money(valEst)} inclui o que está no parceiro, porque continua sendo seu.`,
      {t:'estoque', g:'est'}),
    kpi('Lucro potencial',money(lucroPot),'verde','estoque próprio',
      `Se você vender todo o estoque pelo preço cadastrado:\n`
      +`(em mãos + consignado) × preço − custo do estoque\n`
      +`= ${money(lucroPot)}`, {t:'estoque', g:'est'}),
    kpi('Consignado',conAtivo.reduce((s,c)=>s+saldoCon(c),0)+' un', aReceber>0?'ambar':'verde',
      `${[...new Set(conAtivo.map(c=>c.parceiro))].length} ${plural([...new Set(conAtivo.map(c=>c.parceiro))].length,'parceiro','parceiros')}`,
      'Unidades que estão com parceiros e ainda não foram vendidas nem devolvidas.\nContinuam sendo suas, mas não estão na prateleira.',
      {t:'consignado', g:'con', f:{conSit:'Em consignação'}}),
    kpi('Compras a caminho',un(cam)+' un', roi>=0?'verde':'vermelho',
      `${un(camLac)} lacrado${un(camLac)===1?'':'s'} · ${un(camTes)} tester${un(camTes)===1?'':'s'} · ${money(vl(cam))}`,
      `Compras lançadas e ainda não marcadas como recebidas.\n`
      +`Já saiu do seu bolso, mas ainda não entrou no estoque em mãos.\n\n`
      +`Lacrados: ${un(camLac)} un · ${money(vl(camLac))}  (viram estoque de venda)\n`
      +`Testers: ${un(camTes)} un · ${money(vl(camTes))}  (não entram no estoque de venda)\n\n`
      +`Na aba Estoque, a coluna "A caminho" mostra só os ${un(camLac)} lacrados.`,
      {t:'compras', g:'com', f:{comEnt:'Não'}}),
    kpi('Vendas a entregar',aEntregar.length+' un', (invest-recebido)>0?'ambar':'verde',money(aEntregar.reduce((s,v)=>s+Number(v.valorVenda),0)),
      'Vendas lançadas que ainda não foram entregues.\nSó baixam do estoque quando você marcar como entregue.',
      {t:'vendas', g:'ven', f:{venEnt:'Não'}}),
    kpi('Produtos Vendidos', produtosVendidos+' un', 'roxo', `${contaPedidos(data.sales)} pedidos no total`,
      `Mostra a quantidade total de frascos que você já tirou do estoque e converteu em vendas.`,
      {t:'vendas', g:'ven'})].join('');

  /* Últimos pedidos: mesma pessoa + mesmo dia + mesmo canal = um pedido.
     Sem cliente/data, a linha permanece como pedido individual. */
  const gruposUltimos = new Map();
  data.sales.forEach(v=>{
    const chave = chavePedido(v);
    if(!gruposUltimos.has(chave)) gruposUltimos.set(chave,{ids:[], data:v.data||'', cliente:temNome(v)?v.cliente:'', canal:canalDe(v), valor:0, qtde:0, n:0, ordem:data.sales.indexOf(v), status:new Set(), entregue:new Set()});
    const g=gruposUltimos.get(chave);
    g.ids.push(v.id); g.valor+=Number(v.valorVenda)||0; g.qtde+=Number(v.qtde)||0; g.n++;
    if(v.status) g.status.add(v.status); if(v.entregue) g.entregue.add(v.entregue);
    if((v.data||'') > (g.data||'')) g.data=v.data;
  });
  const ultimosPedidos = [...gruposUltimos.values()].sort((a,b)=>{
    const da=a.data?Date.parse(a.data+'T00:00:00'):-Infinity, db=b.data?Date.parse(b.data+'T00:00:00'):-Infinity;
    if(db!==da) return db-da;
    return b.ordem-a.ordem;
  }).slice(0,5);
  const resumoStatus = set => set.size===1 ? [...set][0] : (set.size?'Misto':'');
  $('#tUltimasVendas').innerHTML = ultimosPedidos.length
    ? `<thead><tr><th>Data</th><th>Cliente</th><th class="num">Itens</th><th class="num">Valor</th><th class="ctr">Pagamento</th><th class="ctr">Entrega</th><th></th></tr></thead><tbody>` +
      ultimosPedidos.map(g=>{
        const stat=resumoStatus(g.status), ent=resumoStatus(g.entregue);
        const label=g.cliente || (g.canal!=='Direto'?g.canal:'Cliente não identificado');
        const info=`${g.n} ${plural(g.n,'lançamento','lançamentos')} · ${g.qtde} ${plural(g.qtde,'unidade','unidades')}`;
        const ir=esc(JSON.stringify({t:'vendas',g:'ven',f:{venPedido:g.ids}}));
        return `<tr><td>${dt(g.data)}</td><td><b>${esc(label)}</b><br><span class="mini-note">${esc(info)}</span></td><td class="num">${g.n}</td><td class="num">${money(g.valor)}</td><td class="ctr">${stat==='Misto'?'<span class="badge cinza">Misto</span>':stat?bPag(stat):'—'}</td><td class="ctr">${ent==='Misto'?'<span class="badge cinza">Misto</span>':ent?bEntV(ent):'—'}</td><td class="ctr"><button type="button" class="btn sm" data-pedido='${ir}' title="Ver detalhes deste pedido">Ver pedido</button></td></tr>`;
      }).join('') +
      `</tbody>`
    : `<tbody><tr><td class="empty">Nenhuma venda lançada.</td></tr></tbody>`;

  $('#tInad').innerHTML = inad.length
    ? `<thead><tr><th>Cliente</th><th class="num">Pedidos</th><th class="num">Valor devido</th></tr></thead><tbody>`+
      inad.map(c=>`<tr><td><button class="linkcli" data-cli="${esc(c.nome)}">${esc(c.nome)}</button>${c.canal?' <span class="badge cinza">canal</span>':''}</td>
        <td class="num">${c.n}</td><td class="num">${money(c.valor)}</td></tr>`).join('')+
      `</tbody><tfoot><tr><td>Total</td><td class="num">${inad.reduce((s,c)=>s+c.n,0)}</td><td class="num">${money(inad.reduce((s,c)=>s+c.valor,0))}</td></tr></tfoot>`
    : `<tbody><tr><td class="empty">Ninguém com pedido entregue e não pago.</td></tr></tbody>`;

  const tot = est.length || 1;
  const cnt = s => est.filter(r=>r.status===s).length;
  $('#kpiEst').innerHTML = [['Repor','REPOR','vermelho'],['Normal','NORMAL','verde'],['Excesso','EXCESSO','ambar']]
    .map(([l,s,c])=>`<button type="button" class="kpi ${c}" data-est="${s}"><div class="lbl">${l}</div>
      <div class="val">${cnt(s)}</div><div class="sub">${((cnt(s)/tot)*100).toFixed(0)}% do catálogo · ver</div></button>`).join('');

  // ----- resultado por mês, a partir das datas de compras e vendas -----
  const mesesSet = new Set();
  const cpm = {}, vpm = {};
  data.purchases.filter(c=>c.data).forEach(c=>{ const k=c.data.slice(0,7); mesesSet.add(k);
    if(!cpm[k]) cpm[k]={q:0,v:0}; cpm[k].q+=Number(c.qtde); cpm[k].v+=Number(c.custoTotal); });
  data.sales.filter(v=>v.data).forEach(v=>{ const k=v.data.slice(0,7); mesesSet.add(k);
    if(!vpm[k]) vpm[k]={q:0,f:0,l:0,n:0}; vpm[k].q+=Number(v.qtde);
    vpm[k].f+=Number(v.valorVenda); vpm[k].l+=calcVenda(v).lucro; vpm[k].n++; });
  const meses = [...mesesSet].sort().reverse();
  const semDataC = data.purchases.filter(c=>!c.data).length;
  const semDataV = data.sales.filter(v=>!v.data).length;

  $('#tMes').innerHTML = meses.length
    ? `<thead><tr><th>Mês</th><th class="num">Comprado</th><th class="num">Vendido</th><th class="num">Lucro</th><th class="num">Margem</th></tr></thead><tbody>`+
      meses.map(k=>{ const c=cpm[k]||{q:0,v:0}, s=vpm[k]||{q:0,f:0,l:0};
        return `<tr><td>${rotuloMes(k)}</td><td class="num">${c.v?money(c.v):'—'}</td>
          <td class="num">${s.f?money(s.f):'—'}</td><td class="num">${s.f?money(s.l):'—'}</td>
          <td class="num">${s.f?pct(s.l/s.f):'—'}</td></tr>`; }).join('')+
      `</tbody>`
    : `<tbody><tr><td class="empty">Nenhum lançamento com data ainda.</td></tr></tbody>`;
  const pend = [];
  if(semDataC) pend.push(`${semDataC} ${plural(semDataC,'compra','compras')}`);
  if(semDataV) pend.push(`${semDataV} ${plural(semDataV,'venda','vendas')}`);
  $('#notaMes').textContent = pend.length
    ? `Fora da conta: ${pend.join(' e ')} sem data preenchida.`
    : 'Todos os lançamentos têm data.';

  // ----- indicadores derivados das datas -----
  const comData = data.sales.filter(v=>v.data);
  const linhas = [];
  if(comData.length){
    const datas = comData.map(v=>v.data).sort();
    const d1 = new Date(datas[0]+'T00:00:00'), d2 = new Date(datas[datas.length-1]+'T00:00:00');
    const dias = Math.max(1, Math.round((d2-d1)/86400000)+1);
    const fat = comData.reduce((s,v)=>s+Number(v.valorVenda),0);
    const luc = comData.reduce((s,v)=>s+calcVenda(v).lucro,0);
    const un = comData.reduce((s,v)=>s+Number(v.qtde),0);
    /* só quem tem nome anotado é cliente; e recorrente é quem voltou
       em outro PEDIDO, não quem levou dois itens no mesmo dia */
    const identificadas = comData.filter(temNome);
    const anonimas = comData.length - identificadas.length;
    const clientes = new Set(identificadas.map(v=>norm(v.cliente))).size;
    const pedidosPorCli = {};
    identificadas.forEach(v=>{ const k=norm(v.cliente);
      (pedidosPorCli[k] = pedidosPorCli[k] || new Set()).add(chavePedido(v)); });
    const recorrentes = Object.values(pedidosPorCli).filter(s=>s.size>1).length;
    const mesesAtivos = new Set(comData.map(v=>v.data.slice(0,7))).size;
    const nPed = contaPedidos(comData);
    linhas.push(
      ['Período coberto', `${dt(datas[0])} a ${dt(datas[datas.length-1])}`],
      ['Pedidos no período', `${nPed} · ${comData.length} ${plural(comData.length,'item','itens')}`],
      ['Ticket médio por pedido', money(fat/Math.max(1,nPed))],
      ['Preço médio por unidade', money(fat/un)],
      ['Faturamento médio mensal', money(fat/Math.max(1,mesesAtivos))],
      ['Lucro médio mensal', money(luc/Math.max(1,mesesAtivos))],
      ['Pedidos por semana', (nPed/(dias/7)).toFixed(1)],
      ['Clientes identificados', `${clientes} · ${recorrentes} ${plural(recorrentes,'voltou','voltaram')} a comprar`],
      ['Gasto médio por cliente', money(identificadas.reduce((s,v)=>s+Number(v.valorVenda),0)/Math.max(1,clientes))],
      ['Compradores não identificados', anonimas ? `${anonimas} de ${comData.length} ${plural(comData.length,'venda','vendas')}` : 'nenhum']
    );
    const melhor = meses.map(k=>[k, (vpm[k]||{f:0}).f]).sort((a,b)=>b[1]-a[1])[0];
    if(melhor && melhor[1]>0) linhas.push(['Melhor mês', `${rotuloMes(melhor[0])} · ${money(melhor[1])}`]);
  }
  $('#lStats').innerHTML = linhas.length
    ? linhas.map(([l,v])=>`<li><span>${l}</span><span class="val">${v}</span></li>`).join('')
      + (semDataV?`<li class="note">Calculado só sobre as ${comData.length} vendas com data.</li>`:'')
    : `<li><span class="empty">Preencha a data das vendas para ver ticket médio, faturamento mensal e recorrência de clientes.</span></li>`;

  const pp = {};
  data.sales.forEach(v=>{ if(!pp[v.produto]) pp[v.produto]={q:0,f:0,l:0};
    pp[v.produto].q+=Number(v.qtde); pp[v.produto].f+=Number(v.valorVenda); pp[v.produto].l+=calcVenda(v).lucro; });
  const arr = Object.entries(pp).map(([p,o])=>({p,...o,m:o.f>0?o.l/o.f:0}));
  const top = arr.slice().sort((a,b)=>b.q-a.q).slice(0,8);
  $('#lTop').innerHTML = top.length
    ? top.map(t=>`<li><span>${esc(t.p)}</span><span class="val">${t.q} un · ${money(t.f)}</span></li>`).join('')
    : `<li><span class="empty">Nenhuma venda lançada.</span></li>`;
  const luc = arr.slice().sort((a,b)=>b.m-a.m).slice(0,8);
  $('#lLucro').innerHTML = luc.length
    ? luc.map(t=>`<li><span>${esc(t.p)}</span><span class="val">${pct(t.m)} · ${t.q} un · ${money(t.l)}</span></li>`).join('')
      + `<li class="note">Margem · unidades vendidas · lucro acumulado. Margem alta com uma venda só ainda é um ponto isolado.</li>`
    : `<li><span class="empty">Nenhuma venda lançada.</span></li>`;

  // ----- este mês contra o anterior -----
  const ym = d => d.slice(0,7);
  const agora = new Date();
  const mesAtual = `${agora.getFullYear()}-${String(agora.getMonth()+1).padStart(2,'0')}`;
  const ant = new Date(agora.getFullYear(), agora.getMonth()-1, 1);
  const mesAnt = `${ant.getFullYear()}-${String(ant.getMonth()+1).padStart(2,'0')}`;
  const doMes = m => data.sales.filter(v=>v.data && ym(v.data)===m);
  const bloco = vs => ({fat:vs.reduce((s,v)=>s+Number(v.valorVenda),0),
    luc:vs.reduce((s,v)=>s+calcVenda(v).lucro,0), ped:contaPedidos(vs), un:vs.reduce((s,v)=>s+Number(v.qtde),0)});
  const A = bloco(doMes(mesAtual)), B = bloco(doMes(mesAnt));
  const varia = (a,b)=> b>0 ? `<span style="color:var(--${a>=b?'verde':'vermelho'})">${a>=b?'▲':'▼'} ${Math.abs((a/b-1)*100).toFixed(0)}%</span>` : '';
  const linhaMM = (rot, a, b, fmt) =>
    `<li><span>${rot}</span><span class="val">${fmt(a)} ${varia(a,b)}<br><span style="font-weight:400;color:var(--ink-faint);font-size:11.5px">antes ${fmt(b)}</span></span></li>`;
  $('#lMesMes').innerHTML = (A.ped||B.ped)
    ? linhaMM('Faturamento', A.fat, B.fat, money)
      + linhaMM('Lucro', A.luc, B.luc, money)
      + linhaMM('Pedidos', A.ped, B.ped, v=>String(v))
      + linhaMM('Unidades', A.un, B.un, v=>String(v))
      + `<li><span>Ticket médio</span><span class="val">${money(A.ped?A.fat/A.ped:0)}</span></li>`
      + `<li class="note">Comparando ${rotuloMes(mesAtual)} com ${rotuloMes(mesAnt)}, só vendas com data.</li>`
    : `<li><span class="empty">Sem vendas com data nos dois últimos meses.</span></li>`;


  // ----- sugestão de compra a partir do histórico -----
  renderSugestao(est);

  renderABC('lABC');
  renderCharts();



  const precoRef = data.products.length?data.products.reduce((s,p)=>s+(Number(p.precoVenda)||90),0)/data.products.length:90;
  const unAdd = margem>0?Math.ceil(be/(margem*precoRef)):0;
  $('#lBE').innerHTML = `
    <li data-dica="${esc(money(invCompras))} em compras + ${esc(money(desp))} em despesas"><span>Investimento total <b class="dica">?</b></span><span class="val">${money(invest)}</span></li>
    <li data-dica="Soma do lucro de todas as vendas, sem descontar despesas"><span>Lucro bruto acumulado <b class="dica">?</b></span><span class="val">${money(lucro)}</span></li>
    <li data-dica="investimento − lucro = ${esc(money(invest))} − ${esc(money(lucro))}"><span>Falta para o break-even <b class="dica">?</b></span><span class="val">${money(be)}</span></li>
    <li data-dica="falta ÷ (margem × preço médio) = ${esc(money(be))} ÷ (${esc(pct(margem))} × ${esc(money(precoRef))})"><span>Unidades adicionais estimadas <b class="dica">?</b></span><span class="val">${unAdd}</span></li>
    <li data-dica="falta para o break-even − lucro potencial do estoque (${esc(money(lucroPot))})"><span>Falta depois de vender o estoque <b class="dica">?</b></span><span class="val">${money(Math.max(0,be-lucroPot))}</span></li>
    <li class="note">Estimativa pela margem bruta atual e preço médio de venda cadastrado.</li>`;
}
const kpi = (l,v,c,s,dica,ir) => `<div class="kpi ${c||''}${ir?' clicavel':''}"${ir?` data-ir='${esc(JSON.stringify(ir))}'`:''}>`
  + `${dica?`<button class="qm" data-dica="${esc(dica)}"  aria-label="como é calculado">?</button>`:''}`
  + `<div class="lbl">${l}</div><div class="val">${v}</div>`
  + `${s?`<div class="sub">${s}</div>`:''}</div>`;

$('#tTes').addEventListener('click', e=>{
  const b=e.target.closest('[data-tcon]'); if(!b) return;
  aplicaFiltros('con', {conSit:'Em consignação', conTipo:'Tester', conProdX:b.dataset.tcon});
  goTab('consignado');
});
$('#tEst').addEventListener('click', e=>{
  const ent=e.target.closest('[data-ent]'), cam=e.target.closest('[data-cam]'), con=e.target.closest('[data-con]');
  if(ent){ aplicaFiltros('ven', {venEnt:'Não', venProdX:ent.dataset.ent}); return goTab('vendas'); }
  /* só lacrado: é o que o estoque conta */
  if(cam){ aplicaFiltros('com', {comEnt:'Não', comTipo:'Lacrado', comProdX:cam.dataset.cam}); return goTab('compras'); }
  if(con){ aplicaFiltros('con', {conSit:'Em consignação', conTipo:'Lacrado', conProdX:con.dataset.con}); return goTab('consignado'); }
});
$('#kpiEst').addEventListener('click', e=>{
  const b = e.target.closest('[data-est]'); if(!b) return;
  aplicaFiltros('est', {estStat:b.dataset.est}); goTab('estoque');
});
function abrePedido(ids){
  if(!Array.isArray(ids) || !ids.length) return;
  const vs = data.sales.filter(v=>ids.includes(v.id));
  if(!vs.length) return;
  const primeira = vs[0];
  const cliente = temNome(primeira) ? primeira.cliente.trim() : (canalDe(primeira)!=='Direto' ? canalDe(primeira) : 'Cliente não identificado');
  const valor = vs.reduce((s,v)=>s+Number(v.valorVenda)||0,0);
  const custosExtras = vs.reduce((s,v)=>s+(Number(v.custosExtras)||0),0);
  const custoProdutos = vs.reduce((s,v)=>s+((Number(v.qtde)||0)*calcVenda(v).custoUnit),0);
  const custos = custoProdutos + custosExtras;
  const lucro = vs.reduce((s,v)=>s+calcVenda(v).lucro,0);
  const qtde = vs.reduce((s,v)=>s+Number(v.qtde)||0,0);
  const stats = [...new Set(vs.map(v=>v.status).filter(Boolean))];
  const ents = [...new Set(vs.map(v=>v.entregue).filter(Boolean))];
  const status = stats.length===1 ? stats[0] : (stats.length ? 'Misto' : '—');
  const entrega = ents.length===1 ? ents[0] : (ents.length ? 'Misto' : '—');
  const dataPedido = vs.map(v=>v.data).filter(Boolean).sort().reverse()[0] || '';
  $('#pedidoNome').textContent = 'Pedido de ' + cliente;
  $('#pedidoSub').textContent = [dataPedido ? dt(dataPedido) : '', canalDe(primeira)].filter(Boolean).join(' · ');
  $('#pedidoKpis').innerHTML = [
    kpi('Valor', money(valor), 'verde', `${qtde} ${plural(qtde,'unidade','unidades')}`),
    kpi('Lançamentos', vs.length, 'azul', `${vs.length} ${plural(vs.length,'produto','produtos')}`),
    kpi('Pagamento', status==='Misto'?'Misto':status, status==='Pago'?'verde':status==='Pendente'?'ambar':'cinza'),
    kpi('Entrega', entrega==='Misto'?'Misto':entrega, entrega==='Sim'?'verde':entrega==='Não'?'ambar':'cinza'),
    kpi('Custos extras', money(custosExtras), 'ambar', custosExtras>0 ? 'despesas adicionais do pedido' : 'sem custos extras'),
    kpi('Lucro', money(lucro), lucro>=0?'verde':'vermelho', `Valor ${money(valor)} − custos ${money(custos)}`)
  ].join('');
  $('#pedidoTab').innerHTML = vs.length
    ? `<thead><tr><th>Data</th><th>Produto</th><th class="num">Qtde</th><th class="num">Venda</th><th class="num">Custos</th><th class="num">Líquido</th><th class="ctr">Pagamento</th><th class="ctr">Entrega</th></tr></thead><tbody>`+
      vs.map(v=>{
        const venda=Number(v.valorVenda)||0, custosExtra=Number(v.custosExtras)||0, liquido=venda-custosExtra;
        return `<tr><td>${dt(v.data)}</td><td>${esc(v.produto)}</td><td class="num">${v.qtde}</td>
          <td class="num">${money(venda)}</td><td class="num" style="color:var(--vermelho)">-${money(custosExtra)}</td><td class="num">${money(liquido)}</td>
          <td class="ctr">${bPag(v.status)}</td><td class="ctr">${bEntV(v.entregue)}</td></tr>`;
      }).join('')+
      `</tbody><tfoot><tr><td>Total</td><td></td><td class="num">${qtde}</td><td class="num">${money(valor)}</td><td class="num" style="color:var(--vermelho)">-${money(custosExtras)}</td><td class="num">${money(valor-custosExtras)}</td><td colspan="2"></td></tr></tfoot>`
    : `<tbody><tr><td class="empty">Nenhum item neste pedido.</td></tr></tbody>`;
  $('#pedidoVendas').onclick = ()=>{
    $('#modalPedido').classList.remove('open');
    aplicaFiltros('ven', {venPedido:ids});
    goTab('vendas');
  };
  $('#modalPedido').classList.add('open');
}
$('#tUltimasVendas').addEventListener('click', e=>{
  const b=e.target.closest('[data-pedido]'); if(!b) return;
  const ir=JSON.parse(b.getAttribute('data-pedido'));
  escondeBalao();
  if(ir && Array.isArray(ir.f && ir.f.venPedido)) abrePedido(ir.f.venPedido);
});
$('#pedidoFechar').addEventListener('click', ()=>$('#modalPedido').classList.remove('open'));
$('#modalPedido').addEventListener('click', e=>{ if(e.target.id==='modalPedido') $('#modalPedido').classList.remove('open'); });

$('#tInad').addEventListener('click', e=>{
  const b = e.target.closest('[data-cli]'); if(!b) return;
  const nome = b.dataset.cli;
  const ehCanal = canaisRows().some(c=>norm(c.canal)===norm(nome) && norm(nome)!=='direto');
  if(ehCanal){ aplicaFiltros('ven', {venCanal:nome, venStat:'Pendente', venEnt:'Sim'}); return goTab('vendas'); }
  const c = data.clients.find(x=>norm(x.nome)===norm(nome));
  if(c) return abreFicha(c.id);
  aplicaFiltros('ven', {venStat:'Pendente', venEnt:'Sim', venQ:nome}); goTab('vendas');
});

/* ---------------- produtos ---------------- */
function renderProd(){
  let rows = data.products.map(p=>({...p, temFoto:p.foto?1:0, temInsp:p.fotoInsp?1:0, provador: temProvador(p)?1:0}));
  if(fil.prodGen) rows = rows.filter(p=>p.genero===fil.prodGen);
  if(fil.prodFam) rows = rows.filter(p=>p.familia===fil.prodFam);
  if(fil.prodTester==='sim') rows = rows.filter(p=>temProvador(p));
  if(fil.prodTester==='nao') rows = rows.filter(p=>!temProvador(p));
  if(fil.prodTester==='caminho') rows = rows.filter(p=>!temProvador(p) && testerAcaminho(p.nome));
  if(fil.prodFoto==='semProd') rows = rows.filter(p=>!p.foto);
  if(fil.prodFoto==='semInsp') rows = rows.filter(p=>!p.fotoInsp);
  if(fil.prodFoto==='semAmbas') rows = rows.filter(p=>!p.foto && !p.fotoInsp);
  if(fil.prodFoto==='comAmbas') rows = rows.filter(p=>p.foto && p.fotoInsp);
  if(fil.prodQ) rows = rows.filter(p=>norm(p.nome).includes(norm(fil.prodQ))||norm(p.inspiracao).includes(norm(fil.prodQ))||norm(p.familia).includes(norm(fil.prodQ)));
  rows = ord(rows, sort.prod);
  const st = sort.prod;
  $('#cntProd').textContent = `${rows.length} de ${data.products.length}`;
  const semF = rows.filter(p=>!p.foto).length, comP = rows.filter(p=>temProvador(p)).length;
  resumo('resProd', [
    ['Produtos', rows.length],
    ['Masculinos', rows.filter(p=>p.genero==='Masculino').length],
    ['Femininos', rows.filter(p=>p.genero==='Feminino').length],
    ['Com provador', comP, comP===rows.length?'ok':'am'],
    ['Sem foto', semF, semF?'am':'ok'],
    ['Preço médio', money(rows.length?rows.reduce((s,p)=>s+Number(p.precoVenda),0)/rows.length:0)]
  ]);
  $('#tProd').innerHTML = rows.length
    ? `<thead><tr>${th('Foto','temFoto',st,'ctr')}${th('Produto','nome',st)}${th('Inspiração','inspiracao',st)}${th('Família','familia',st)}${th('Provador','provador',st,'ctr')}${th('Gênero','genero',st,'ctr')}${th('Preço','precoVenda',st,'num')}<th></th></tr></thead><tbody>`+
      rows.map(p=>`<tr><td class="ctr">${thumb(p.foto,p.nome)}</td><td>${esc(p.nome)}</td>
        <td><div class="inspcell">${thumb(p.fotoInsp,'Inspiração de '+p.nome)}<span>${esc(p.inspiracao)||'—'}</span></div></td>
        <td>${esc(p.familia)||'—'}</td>
        <td class="ctr">${temProvador(p)
          ? `<span class="badge roxo">Sim</span>`
          : (modoProvador(p)==='auto' && testerAcaminho(p.nome)
              ? `<span class="badge ambar">A caminho</span>`
              : `<span class="badge cinza">Não</span>`)}${modoProvador(p)==='manual'?' <span class="badge cinza">fixo</span>':''}</td>
        <td class="ctr">${bGen(p.genero)}</td><td class="num">${money(p.precoVenda)}</td>
        <td><div class="rowacts"><button class="btn sm" data-ep="${p.id}">Editar</button><button class="btn sm ghost" data-dp="${p.id}">Excluir</button></div></td></tr>`).join('')+`</tbody>`
    : `<tbody><tr><td class="empty">Nenhum produto encontrado.</td></tr></tbody>`;
  const bytes = data.products.reduce((s,p)=>s+(p.foto?p.foto.length:0)+(p.fotoInsp?p.fotoInsp.length:0),0);
  const nImg = data.products.reduce((s,p)=>s+(p.foto?1:0)+(p.fotoInsp?1:0),0);
  const nf = data.products.filter(p=>p.foto||p.fotoInsp).length;
  $('#usoFotos').textContent = nf ? `${nImg} ${plural(nImg,'foto','fotos')} em ${nf} ${plural(nf,'produto','produtos')} · cerca de ${(bytes/1024).toFixed(0)} KB do espaço do navegador.` : '';
}
function fillSelects(){
  const ordenados = data.products.slice().sort((a,b)=>a.nome.localeCompare(b.nome,'pt-BR'));
  const opts = ordenados.map(p=>`<option value="${esc(p.nome)}">${esc(p.nome)}</option>`).join('');
  ['#comProd','#venProd','#conProd'].forEach(s=>{
    const el=$(s), cur=el.value;
    el.innerHTML = opts || '<option value="">Cadastre um produto primeiro</option>';
    if(cur) el.value=cur;
  });
  const clientes = [...new Set([...data.clients.map(c=>c.nome), ...data.sales.map(v=>v.cliente)]
    .map(s=>(s||'').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
  $('#listaClientes').innerHTML = clientes.map(c=>`<option value="${esc(c)}">`).join('');
  const familias = [...new Set(data.products.map(p=>(p.familia||'').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
  
  $('#listaFamilias').innerHTML = familias.map(f=>`<option value="${esc(f)}">`).join('');
  const curProdFam = fil.prodFam;
  $('#filProdFam').innerHTML = '<option value="">Todas as famílias</option>' + familias.map(f=>`<option value="${esc(f)}">${esc(f)}</option>`).join('');
  $('#filProdFam').value = curProdFam;
  const curEstFam = fil.estFam;
  $('#filEstFam').innerHTML = '<option value="">Todas as famílias</option>' + familias.map(f=>`<option value="${esc(f)}">${esc(f)}</option>`).join('');
  $('#filEstFam').value = curEstFam;

  const canais = [...new Set([...data.sales.map(v=>canalDe(v)), 'Direto',
    ...data.consignments.map(c=>c.parceiro)].map(s=>(s||'').trim()).filter(Boolean))]
    .sort((a,b)=>a.localeCompare(b,'pt-BR'));
  $('#listaCanais').innerHTML = canais.map(c=>`<option value="${esc(c)}">`).join('');
  const curC = fil.venCanal;
  $('#filVenCanal').innerHTML = `<option value="">Todos os canais</option>`+canais.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');
  $('#filVenCanal').value = curC;
  const parceiros = [...new Set(data.consignments.map(c=>c.parceiro.trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
  $('#listaParceiros').innerHTML = parceiros.map(c=>`<option value="${esc(c)}">`).join('');
  const cur = fil.conParc;
  $('#filConParc').innerHTML = `<option value="">Todos os parceiros</option>`+parceiros.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');
  $('#filConParc').value = cur;
}

/* ---------------- compras ---------------- */
function renderCom(){
  let rows = data.purchases.map((c,i)=>({...c, ord:i, genero:gen(c.produto), custoUnit: c.qtde>0 ? c.custoTotal/c.qtde : 0}));
  if(fil.comGen) rows = rows.filter(c=>c.genero===fil.comGen);
  if(fil.comTipo) rows = rows.filter(c=>c.tipo===fil.comTipo);
  if(fil.comEnt) rows = rows.filter(c=>(c.entregue==='Sim'?'Sim':'Não')===fil.comEnt);
  rows = rows.filter(c=>noPeriodo(c.data, fil.comDe, fil.comAte));
  if(fil.comProdX) rows = rows.filter(c=>c.produto===fil.comProdX);
  if(fil.comQ) rows = rows.filter(c=>norm(c.produto).includes(norm(fil.comQ))||norm(c.observacao).includes(norm(fil.comQ)));
  chipProduto('com','comProdX');
  rows = ord(rows, sort.com);
  const st = sort.com;
  const tq = rows.reduce((s,c)=>s+Number(c.qtde),0), tv = rows.reduce((s,c)=>s+Number(c.custoTotal),0);
  $('#cntCom').textContent = `${rows.length} de ${data.purchases.length}`;
  const cCam = rows.filter(c=>c.entregue!=='Sim');
  resumo('resCom', [
    ['Lançamentos', rows.length],
    ['Unidades', tq],
    ['Investido', money(tv)],
    ['Custo médio', money(tq?tv/tq:0)],
    ['A caminho', cCam.reduce((s,c)=>s+Number(c.qtde),0)+' un', cCam.length?'am':'ok'],
    ['Valor a caminho', money(cCam.reduce((s,c)=>s+Number(c.custoTotal),0)), cCam.length?'am':'ok']
  ]);
  $('#tCom').innerHTML = rows.length
    ? `<thead><tr>${chkTodos('com')}<th class="ctr">Foto</th>${th('Data','data',st)}${th('Produto','produto',st)}${th('Gênero','genero',st,'ctr')}${th('Tipo','tipo',st,'ctr')}${th('Situação','entregue',st,'ctr')}${th('Qtde','qtde',st,'num')}${th('Custo total','custoTotal',st,'num')}${th('Custo unit.','custoUnit',st,'num')}<th>Obs.</th><th></th></tr></thead><tbody>`+
      rows.map(c=>`<tr>${chkLinha('com',c.id)}<td class="ctr">${thumb(foto(c.produto),c.produto)}</td><td>${dt(c.data)}</td><td>${esc(c.produto)}</td><td class="ctr">${bGen(c.genero)}</td><td class="ctr">${bTipo(c.tipo)}</td>
        <td class="ctr">${bEntC(c.entregue)}</td><td class="num">${c.qtde}</td><td class="num">${money(c.custoTotal)}</td><td class="num">${money(c.custoUnit)}</td><td>${esc(c.observacao)||'—'}</td>
        <td><div class="rowacts"><button class="btn sm" data-ec="${c.id}">Editar</button><button class="btn sm ghost" data-dc="${c.id}">Excluir</button></div></td></tr>`).join('')+
      `</tbody><tfoot><tr><td colspan="7">Total</td><td class="num">${tq}</td><td class="num">${money(tv)}</td><td colspan="3"></td></tr></tfoot>`
    : `<tbody><tr><td class="empty">Nenhuma compra encontrada.</td></tr></tbody>`;
  renderBulk('com');
}

/* ---------------- vendas ---------------- */
function renderVen(){
  let rows = data.sales.map((v,i)=>{ const c=calcVenda(v);
    return {...v, ord:i, canal:canalDe(v), genero:gen(v.produto), lucro:c.lucro, margem:c.margem}; });
  if(fil.venCanal) rows = rows.filter(v=>v.canal===fil.venCanal);
  if(fil.venGen) rows = rows.filter(v=>v.genero===fil.venGen);
  if(fil.venStat) rows = rows.filter(v=>v.status===fil.venStat);
  if(fil.venEnt) rows = rows.filter(v=>v.entregue===fil.venEnt);
  rows = rows.filter(v=>noPeriodo(v.data, fil.venDe, fil.venAte));
  if(fil.venProdX) rows = rows.filter(v=>v.produto===fil.venProdX);
  if(fil.venQ) rows = rows.filter(v=>norm(v.produto).includes(norm(fil.venQ))||norm(v.cliente).includes(norm(fil.venQ)));
  if(fil.venPedido && Array.isArray(fil.venPedido)) rows = rows.filter(v=>fil.venPedido.includes(v.id));
  chipProduto('ven','venProdX');

  rows = ord(rows, sort.ven);
  const st = sort.ven;
  const tq = rows.reduce((s,v)=>s+Number(v.qtde),0);
  const tv = rows.reduce((s,v)=>s+Number(v.valorVenda),0);
  const tcE = rows.reduce((s,v)=>s+(Number(v.custosExtras)||0),0);
  const tl = rows.reduce((s,v)=>s+v.lucro,0);
  $('#cntVen').textContent = `${rows.length} de ${data.sales.length}`;
  const vPend = rows.filter(v=>v.status==='Pendente'), vEnt = rows.filter(v=>v.entregue!=='Sim');
  resumo('resVen', [
    ['Pedidos', contaPedidos(rows), '', 'Mesma pessoa, mesmo dia, mesmo canal = um pedido.\nDuas compras da mesma pessoa no mesmo dia contam como um só.'],
    ['Lançamentos', rows.length, '', 'Cada linha da tabela — um produto por linha.\nTrês perfumes diferentes = três lançamentos.\nTrês frascos do mesmo perfume = um lançamento só.'],
    ['Unidades', tq, '', 'Soma das quantidades — frascos, não linhas.\nUm lançamento com 3 frascos conta 3 unidades.\nÉ este o número que aparece no rodapé da tabela.'],
    ['Faturado', money(tv)],
    ['Lucro', money(tl), 'ok'],
    ['Margem', tv?pct(tl/tv):'—'],
    ['A receber', money(vPend.reduce((s,v)=>s+Number(v.valorVenda),0)), vPend.length?'al':'ok'],
    ['A entregar', vEnt.length+' un', vEnt.length?'am':'ok']
  ]);
  $('#tVen').innerHTML = rows.length
    ? `<thead><tr>${chkTodos('ven')}<th class="ctr">Foto</th>${th('Data','data',st)}${th('Produto','produto',st)}${th('Gênero','genero',st,'ctr')}${th('Canal','canal',st)}${th('Cliente','cliente',st)}${th('Qtde','qtde',st,'num')}${th('Valor','valorVenda',st,'num')}${th('Custos','custosExtras',st,'num')}${th('Lucro','lucro',st,'num')}${th('Margem','margem',st,'num')}${th('Pagamento','status',st,'ctr')}${th('Entrega','entregue',st,'ctr')}<th></th></tr></thead><tbody>`+
      rows.map(v=>`<tr>${chkLinha('ven',v.id)}<td class="ctr">${thumb(foto(v.produto),v.produto)}</td><td>${dt(v.data)}</td><td>${esc(v.produto)}</td><td class="ctr">${bGen(v.genero)}</td><td>${esc(canalDe(v))}</td>
        <td>${temNome(v)?esc(v.cliente):'<span style="color:var(--ink-faint)">não identificado</span>'}</td>
        <td class="num">${v.qtde}</td><td class="num">${money(v.valorVenda)}</td><td class="num" style="color:var(--vermelho)">-${money(v.custosExtras||0)}</td><td class="num">${money(v.lucro)}</td><td class="num">${pct(v.margem)}</td>
        <td class="ctr">${bPag(v.status)}</td><td class="ctr">${bEntV(v.entregue)}</td>
        <td><div class="rowacts"><button class="btn sm" data-ev="${v.id}">Editar</button><button class="btn sm ghost" data-dv="${v.id}">Excluir</button></div></td></tr>`).join('')+
      `</tbody><tfoot><tr><td colspan="7">Total</td><td class="num">${tq}</td><td class="num">${money(tv)}</td><td class="num" style="color:var(--vermelho)">-${money(tcE)}</td><td class="num">${money(tl)}</td><td colspan="4"></td></tr></tfoot>`
    : `<tbody><tr><td class="empty">Nenhuma venda encontrada.</td></tr></tbody>`;
  renderBulk('ven');
}

/* ---------------- estoque ---------------- */
function renderEst(){
  renderABC('lABCest', {top:8});
  const abcMapa = calculaABC().porProduto;
  let rows = estoque().map(r=>({...r, classeAbc: abcMapa[r.produto]||''}));
  const total = rows.length;
  if(fil.estGen) rows = rows.filter(r=>r.genero===fil.estGen);
  if(fil.estFam) rows = rows.filter(r=>r.familia===fil.estFam);
  if(fil.estStat) rows = rows.filter(r=>r.status===fil.estStat);
  if(fil.estProdX) rows = rows.filter(r=>r.produto===fil.estProdX);
  if(fil.estClasseAbc) rows = rows.filter(r=>(r.classeAbc||'')===fil.estClasseAbc || (fil.estClasseAbc==='—' && !r.classeAbc));
  if(fil.estQ) rows = rows.filter(r=>norm(r.produto).includes(norm(fil.estQ)));
  chipProduto('est','estProdX');
  { const el=$('#chipEstAbc'); const v=fil.estClasseAbc;
    el.hidden = !v;
    if(v) el.innerHTML = `Classe ${v==='—'?'sem venda':v} <button title="remover">×</button>`; }
  rows = ord(rows, sort.est);
  const st = sort.est;
  $('#cntEst').textContent = `${rows.length} de ${total}`;
  const t = rows.reduce((a,r)=>({rc:a.rc+r.recebido,cm:a.cm+r.caminho,vd:a.vd+r.vendido,ae:a.ae+r.aEntregar,
    cg:a.cg+r.consig,sl:a.sl+r.saldo,pv:a.pv+r.previsto,ce:a.ce+r.custoEst,lp:a.lp+r.lucroPot,
    cp:a.cp+Math.max(0,r.comprar)}),
    {rc:0,cm:0,vd:0,ae:0,cg:0,sl:0,pv:0,ce:0,lp:0,cp:0});
  t.cmed = t.sl+t.cg ? t.ce/(t.sl+t.cg) : 0;
  resumo('resEst', [
    ['Em mãos', t.sl+' un', '',
      'O que está fisicamente com você.\nrecebido − vendido e entregue − consignado'],
    ['+ Consignado', t.cg+' un', t.cg?'am':'',
      'Está com o parceiro e ainda não foi vendido nem devolvido.\nContinua sendo seu.'],
    ['+ A caminho', t.cm+' un', t.cm?'am':'',
      'Comprado e ainda não recebido. Já pagou, mas não chegou.'],
    ['− A entregar', t.ae+' un', t.ae?'am':'',
      'Vendido e ainda não entregue. Está com você, mas já tem dono —\npor isso sai da conta do saldo.'],
    ['= Saldo', t.pv+' un', '',
      `${t.sl} em mãos + ${t.cg} consignado + ${t.cm} a caminho − ${t.ae} a entregar = ${t.pv}\n`
      +`Outro caminho: tudo que comprou (${t.rc+t.cm}) − tudo que vendeu (${t.vd+t.ae}) = ${t.pv}`],
    ['Custo do estoque', money(t.ce)],
    ['Lucro potencial', money(t.lp), 'ok'],
    ['A repor', rows.filter(r=>r.status==='REPOR').length, rows.filter(r=>r.status==='REPOR').length?'al':'ok']
  ]);
  $('#tEst').innerHTML = rows.length
    ? `<thead><tr><th class="ctr">Foto</th>${th('Produto','produto',st)}${th('Gênero','genero',st,'ctr op')}${th('Recebido','recebido',st,'num op')}${th('A caminho','caminho',st,'num')}${th('Vendido','vendido',st,'num op')}${th('A entregar','aEntregar',st,'num')}${th('Consignado','consig',st,'num')}${th('Em mãos','saldo',st,'num')}${th('Saldo','previsto',st,'num')}${th('Custo médio','custoMedio',st,'num op')}${th('Custo estoque','custoEst',st,'num op')}${th('Lucro potencial','lucroPot',st,'num op')}${th('ABC','classeAbc',st,'ctr')}${th('Sugerido','necessidade',st,'num')}${th('Situação','status',st,'ctr')}${th('Comprar','comprar',st,'num')}</tr></thead><tbody>`+
      rows.map(r=>`<tr><td class="ctr">${thumb(foto(r.produto),r.produto)}</td><td>${esc(r.produto)}</td><td class="ctr op">${bGen(r.genero)}</td>
        <td class="num op">${r.recebido}</td>
        <td class="num">${r.caminho?`<button class="numlink" data-cam="${esc(r.produto)}">${r.caminho}</button>`:'—'}</td>
        <td class="num op">${r.vendido}</td>
        <td class="num">${r.aEntregar?`<button class="numlink" data-ent="${esc(r.produto)}">${r.aEntregar}</button>`:'—'}</td>
        <td class="num">${r.consig?`<button class="numlink" data-con="${esc(r.produto)}">${r.consig}</button>`:'—'}</td>
        <td class="num">${r.saldo}</td>
        <td class="num" data-dica="comprado ${r.recebido+r.caminho} − vendido ${r.vendido+r.aEntregar}${'\n'}em mãos ${r.saldo} + consignado ${r.consig} + a caminho ${r.caminho} − a entregar ${r.aEntregar}">
          <b>${r.previsto}</b></td>
        <td class="num op">${money(r.custoMedio)}</td><td class="num op">${money(r.custoEst)}</td><td class="num op">${money(r.lucroPot)}</td>
        <td class="ctr">${r.classeAbc?`<span class="badge ${{'A':'verde','B':'ambar','C':'cinza'}[r.classeAbc]}">${r.classeAbc}</span>`:'—'}</td>
        <td class="num" data-dica="${(r.porDia*30).toFixed(1)} un por mês no ritmo dos últimos 90 dias.\nEstoque sugerido = ritmo × ${HORIZ} dias.">
          <b>${r.necessidade}</b></td>
        <td class="ctr">${bEst(r.status)}</td>
        <td class="num">${r.comprar>0?`<b>${r.comprar}</b>`
          : r.comprar<0?`<span style="color:var(--ambar)">${r.comprar}</span>` : '—'}</td></tr>`).join('')+
      `</tbody><tfoot><tr><td></td><td>Total</td><td class="op"></td><td class="num op">${t.rc}</td><td class="num">${t.cm}</td><td class="num op">${t.vd}</td><td class="num">${t.ae}</td><td class="num">${t.cg}</td><td class="num">${t.sl}</td><td class="num">${t.pv}</td><td class="num op">${money(t.cmed)}</td><td class="num op">${money(t.ce)}</td><td class="num op">${money(t.lp)}</td><td class="ctr"></td><td></td><td></td><td class="num">${t.cp>0?t.cp:'—'}</td></tr></tfoot>`
    : `<tbody><tr><td class="empty">Nenhum produto encontrado.</td></tr></tbody>`;
}

/* ---------------- consignado ---------------- */
function renderCon(){
  let rows = data.consignments.map((c,i)=>({...c, ord:i, genero:gen(c.produto),
    vendida:Number(c.qtdeVendida||0), devolvida:Number(c.qtdeDevolvida||0),
    saldo:saldoCon(c), situacao:situacaoCon(c)}));
  if(fil.conParc) rows = rows.filter(c=>c.parceiro===fil.conParc);
  if(fil.conTipo) rows = rows.filter(c=>c.tipo===fil.conTipo);
  if(fil.conSit) rows = rows.filter(c=>c.situacao===fil.conSit);
  rows = rows.filter(c=>noPeriodo(c.data, fil.conDe, fil.conAte));
  if(fil.conProdX) rows = rows.filter(c=>c.produto===fil.conProdX);
  if(fil.conQ) rows = rows.filter(c=>norm(c.produto).includes(norm(fil.conQ))||norm(c.parceiro).includes(norm(fil.conQ)));
  chipProduto('con','conProdX');
  rows = ord(rows, sort.con);
  const st = sort.con;
  $('#cntCon').textContent = `${rows.length} de ${data.consignments.length}`;
  const lacr = rows.filter(c=>c.tipo==='Lacrado').reduce((s,c)=>s+c.saldo,0);
  const tst  = rows.filter(c=>c.tipo==='Tester').reduce((s,c)=>s+c.saldo,0);
  const parc = [...new Set(rows.filter(c=>c.saldo>0).map(c=>c.parceiro))];
  resumo('resCon', [
    ['No parceiro', rows.reduce((s,c)=>s+c.saldo,0)+' un', 'am',
      'Ainda com o parceiro: enviado − vendido − devolvido.\nContinua sendo seu, mas fora da prateleira.'],
    ['Lacrados', lacr+' un'],
    ['Testers', tst+' un', 'roxo'],
    ['Vendido', rows.reduce((s,c)=>s+c.vendida,0)+' un', 'ok', 'Acumulado desde o início da consignação.'],
    ['Devolvido', rows.reduce((s,c)=>s+c.devolvida,0)+' un'],
    ['Custo no parceiro', money(rows.reduce((s,c)=>s+c.saldo*custoMedio(c.produto),0))],
    ['Parceiros', parc.length ? parc.join(', ') : '—'],
    ['Lançamentos', rows.length, '', 'Cada linha da tabela — um produto por linha.\nO mesmo produto pode ter várias consignações.']
  ]);

  const todos = data.consignments;
  const saldoTotal = todos.reduce((s,c)=>s+saldoCon(c),0);
  const vendTotal = todos.reduce((s,c)=>s+Number(c.qtdeVendida||0),0);
  const devTotal = todos.reduce((s,c)=>s+Number(c.qtdeDevolvida||0),0);
  const custoAtivo = todos.reduce((s,c)=>s+saldoCon(c)*custoMedio(c.produto),0);
  const porParc = {};
  todos.forEach(c=>{ const s=saldoCon(c); if(!s) return;
    if(!porParc[c.parceiro]) porParc[c.parceiro]={lac:0,tes:0};
    porParc[c.parceiro][c.tipo==='Tester'?'tes':'lac'] += s; });

  const t = rows.reduce((a,r)=>({q:a.q+Number(r.qtde),v:a.v+r.vendida,d:a.d+r.devolvida,s:a.s+r.saldo}),{q:0,v:0,d:0,s:0});
  $('#tCon').innerHTML = rows.length
    ? `<thead><tr>${chkTodos('con')}<th class="ctr">Foto</th>${th('Data','data',st)}${th('Parceiro','parceiro',st)}${th('Produto','produto',st)}${th('Gênero','genero',st,'ctr')}${th('Tipo','tipo',st,'ctr')}${th('Enviado','qtde',st,'num')}${th('Vendido','vendida',st,'num')}${th('Devolvido','devolvida',st,'num')}${th('No parceiro','saldo',st,'num')}${th('Situação','situacao',st,'ctr')}<th>Obs.</th><th></th></tr></thead><tbody>`+
      rows.map(c=>`<tr>${chkLinha('con',c.id)}<td class="ctr">${thumb(foto(c.produto),c.produto)}</td><td>${dt(c.data)}</td><td>${esc(c.parceiro)}</td><td>${esc(c.produto)}</td><td class="ctr">${bGen(c.genero)}</td>
        <td class="ctr">${bTipo(c.tipo)}</td><td class="num">${c.qtde}</td><td class="num">${c.vendida||'—'}</td>
        <td class="num">${c.devolvida||'—'}</td><td class="num">${c.saldo}</td><td class="ctr">${bCon(c.situacao)}</td><td>${esc(c.observacao)||'—'}</td>
        <td><div class="rowacts"><button class="btn sm" data-ecn="${c.id}">Editar</button><button class="btn sm ghost" data-dcn="${c.id}">Excluir</button></div></td></tr>`).join('')+
      `</tbody><tfoot><tr><td colspan="7">Total</td><td class="num">${t.q}</td><td class="num">${t.v}</td><td class="num">${t.d}</td><td class="num">${t.s}</td><td colspan="3"></td></tr></tfoot>`
    : `<tbody><tr><td class="empty">Nenhuma consignação lançada. Use o formulário acima para registrar o que está na barbearia.</td></tr></tbody>`;
  renderBulk('con');
}

/* ---------------- testers ---------------- */
function renderTes(){
  let rows = testers();
  const total = rows.length;
  if(fil.tesGen) rows = rows.filter(r=>r.genero===fil.tesGen);
  if(fil.tesQ) rows = rows.filter(r=>norm(r.produto).includes(norm(fil.tesQ)));
  rows = ord(rows, sort.tes);
  const st = sort.tes;
  $('#cntTes').textContent = `${rows.length} de ${total}`;
  resumo('resTes', [
    ['Testers', rows.length],
    ['Unidades', rows.reduce((s,r)=>s+r.qtd,0)],
    ['Em mãos', rows.reduce((s,r)=>s+r.emMaos,0)],
    ['Consignados', rows.reduce((s,r)=>s+r.consig,0), rows.some(r=>r.consig)?'am':''],
    ['Investido', money(rows.reduce((s,r)=>s+r.custo,0))],
    ['Bonificados', rows.filter(r=>r.situacao==='Bonificado').length, 'ok']
  ]);
  const t = rows.reduce((a,r)=>({q:a.q+r.qtd,cg:a.cg+r.consig,em:a.em+r.emMaos,c:a.c+r.custo}),{q:0,cg:0,em:0,c:0});
  $('#tTes').innerHTML = rows.length
    ? `<thead><tr><th class="ctr">Foto</th>${th('Tester','produto',st)}${th('Gênero','genero',st,'ctr')}${th('Recebidos','qtd',st,'num')}${th('Consignados','consig',st,'num')}${th('Em mãos','emMaos',st,'num')}${th('Custo investido','custo',st,'num')}${th('Custo médio','cm',st,'num')}${th('Situação','situacao',st,'ctr')}</tr></thead><tbody>`+
      rows.map(r=>`<tr><td class="ctr">${thumb(foto(r.produto),r.produto)}</td><td>${esc(r.produto)}</td><td class="ctr">${bGen(r.genero)}</td>
        <td class="num">${r.qtd}</td>
        <td class="num">${r.consig?`<button class="numlink" data-tcon="${esc(r.produto)}">${r.consig}</button>`:'—'}</td>
        <td class="num">${r.emMaos}</td>
        <td class="num">${money(r.custo)}</td><td class="num">${money(r.cm)}</td><td class="ctr">${bSitT(r.situacao)}</td></tr>`).join('')+
      `</tbody><tfoot><tr><td colspan="3">Total</td><td class="num">${t.q}</td><td class="num">${t.cg}</td><td class="num">${t.em}</td><td class="num">${money(t.c)}</td><td colspan="2"></td></tr></tfoot>`
    : `<tbody><tr><td class="empty">Nenhum tester recebido ainda. Os que estão a caminho aparecem na aba Compras.</td></tr></tbody>`;
}

/* ---------------- despesas ---------------- */
function renderDes(){
  let rows = data.expenses.map((d,i)=>({...d,ord:i}));
  rows = rows.filter(d=>noPeriodo(d.data, fil.desDe, fil.desAte));
  if(fil.desQ) rows = rows.filter(d=>norm(d.item).includes(norm(fil.desQ))||norm(d.categoria).includes(norm(fil.desQ)));
  rows = ord(rows, sort.des);
  const st = sort.des;
  const t = rows.reduce((s,d)=>s+Number(d.valor),0);
  $('#cntDes').textContent = `${rows.length} de ${data.expenses.length}`;
  const porCat = {}; rows.forEach(d=>porCat[d.categoria||'—']=(porCat[d.categoria||'—']||0)+Number(d.valor));
  const maior = Object.entries(porCat).sort((a,b)=>b[1]-a[1])[0];
  resumo('resDes', [
    ['Lançamentos', rows.length],
    ['Total', money(t)],
    ['Média', money(rows.length?t/rows.length:0)],
    ['Categorias', Object.keys(porCat).length],
    maior && ['Maior categoria', `${maior[0]} · ${money(maior[1])}`]
  ]);
  $('#tDes').innerHTML = rows.length
    ? `<thead><tr>${th('Data','data',st)}${th('Item','item',st)}${th('Categoria','categoria',st)}${th('Valor','valor',st,'num')}<th>Obs.</th><th></th></tr></thead><tbody>`+
      rows.map(d=>`<tr><td>${dt(d.data)}</td><td>${esc(d.item)}</td><td>${esc(d.categoria)||'—'}</td><td class="num">${money(d.valor)}</td><td>${esc(d.observacao)||'—'}</td>
        <td><div class="rowacts"><button class="btn sm" data-ed="${d.id}">Editar</button><button class="btn sm ghost" data-dd="${d.id}">Excluir</button></div></td></tr>`).join('')+
      `</tbody><tfoot><tr><td colspan="3">Total</td><td class="num">${money(t)}</td><td colspan="2"></td></tr></tfoot>`
    : `<tbody><tr><td class="empty">Nenhuma despesa encontrada.</td></tr></tbody>`;
}

function primeiroUso(){
  const vazio = !data.products.length && !data.sales.length && !data.purchases.length;
  const el = $('#avisoBackup');
  if(!vazio) return false;
  el.className = 'on ambar';
  el.innerHTML = `<span><b>Nenhum dado neste aparelho.</b> Entre na nuvem para trazer o seu cadastro, ou restaure um backup.</span>`
    + `<span class="sep"></span><button class="btn sm primary" id="pu1">Entrar na nuvem</button>`
    + `<button class="btn sm" id="pu2">Restaurar backup</button>`;
  $('#pu1').addEventListener('click', ()=>$('#btnNuvem').click());
  $('#pu2').addEventListener('click', ()=>$('#btnImport').click());
  return true;
}
function renderAll(){ renderDash(); renderProd(); fillSelects(); renderCom(); renderVen(); renderEst(); renderCon(); renderTes(); renderDes(); renderCli(); renderCanal(); aplicarLabelsMobile();}

document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>goTab(b.dataset.tab)));
bindSort('#tCanal', sort.can, renderCanal);
bindSort('#tCli', sort.cli, renderCli);
bindSort('#tProd', sort.prod, renderProd);
bindSort('#tCom', sort.com, renderCom);
bindSort('#tVen', sort.ven, renderVen);
bindSort('#tEst', sort.est, renderEst);
bindSort('#tCon', sort.con, renderCon);
bindSort('#tTes', sort.tes, renderTes);
bindSort('#tDes', sort.des, renderDes);

function showErr(id,m){ const e=$(id); e.textContent=m; e.classList.add('show'); }
function hideErr(id){ $(id).classList.remove('show'); }

/* Remove o fundo branco por preenchimento a partir das bordas: só apaga o branco
   que está ligado à moldura da foto, preservando branco de dentro do frasco/rótulo. */
function recortaFundo(cv, tol){
  const cx=cv.getContext('2d'), W=cv.width, H=cv.height;
  const im=cx.getImageData(0,0,W,H), d=im.data;
  const claro=i=>d[i]>tol && d[i+1]>tol && d[i+2]>tol;
  const visto=new Uint8Array(W*H);
  const fila=[];
  for(let x=0;x<W;x++){ fila.push(x, (H-1)*W+x); }
  for(let y=0;y<H;y++){ fila.push(y*W, y*W+W-1); }
  while(fila.length){
    const pos=fila.pop();
    if(pos<0||pos>=W*H||visto[pos]) continue;
    const i=pos*4;
    if(!claro(i)) continue;
    visto[pos]=1; d[i+3]=0;
    const x=pos%W, y=(pos-x)/W;
    if(x>0) fila.push(pos-1);
    if(x<W-1) fila.push(pos+1);
    if(y>0) fila.push(pos-W);
    if(y<H-1) fila.push(pos+W);
  }
  /* suaviza a borda do recorte para não ficar serrilhado */
  for(let y=1;y<H-1;y++) for(let x=1;x<W-1;x++){
    const pos=y*W+x;
    if(visto[pos]) continue;
    let vz=0;
    if(visto[pos-1])vz++; if(visto[pos+1])vz++; if(visto[pos-W])vz++; if(visto[pos+W])vz++;
    if(vz>=2) d[pos*4+3]=Math.min(d[pos*4+3],150);
  }
  cx.putImageData(im,0,0);
}
function resizeImg(file,max=340,q=.72,recorta=false){
  return new Promise((res,rej)=>{
    const rd=new FileReader();
    rd.onload=()=>{ const img=new Image();
      img.onload=()=>{ let w=img.width,h=img.height;
        const sc=Math.min(1,max/Math.max(w,h));
        w=Math.max(1,Math.round(w*sc)); h=Math.max(1,Math.round(h*sc));
        const cv=document.createElement('canvas'); cv.width=w; cv.height=h;
        const cx=cv.getContext('2d');
        if(!recorta){ cx.fillStyle='#fff'; cx.fillRect(0,0,w,h); }
        cx.drawImage(img,0,0,w,h);
        if(recorta){ recortaFundo(cv,238); return res(cv.toDataURL('image/png')); }
        res(cv.toDataURL('image/jpeg',q)); };
      img.onerror=()=>rej(new Error('img')); img.src=rd.result; };
    rd.onerror=()=>rej(new Error('read')); rd.readAsDataURL(file);
  });
}
function setFotoPrev(qual, src){
  fotos[qual] = src||'';
  const im = $(qual==='prod' ? '#pFotoPrev' : '#pInspPrev');
  const bt = $(qual==='prod' ? '#pFotoDel' : '#pInspDel');
  if(src){ im.src=src; im.hidden=false; bt.hidden=false; }
  else { im.removeAttribute('src'); im.hidden=true; bt.hidden=true; }
}
async function carregaFoto(qual, input){
  const f=input.files[0]; if(!f) return;
  try{ setFotoPrev(qual, await resizeImg(f, 340, .72, false)); hideErr('#ePro'); }
  catch(err){ showErr('#ePro','Não foi possível ler essa imagem. Tente JPG ou PNG.'); }
  input.value='';
}
$('#pFoto').addEventListener('change', e=>carregaFoto('prod', e.target));
$('#pFotoInsp').addEventListener('change', e=>carregaFoto('insp', e.target));
$('#pFotoDel').addEventListener('click',()=>{ setFotoPrev('prod',''); $('#pFoto').value=''; });
$('#pInspDel').addEventListener('click',()=>{ setFotoPrev('insp',''); $('#pFotoInsp').value=''; });

$('#fProd').addEventListener('submit',e=>{
  e.preventDefault();
  const nome=$('#pNome').value.trim();
  if(!nome) return showErr('#ePro','Informe o nome do produto.');
  if(data.products.some(p=>p.nome.toLowerCase()===nome.toLowerCase() && p.id!==edit.prod))
    return showErr('#ePro','Já existe um produto com esse nome.');
  hideErr('#ePro');
  const payload={nome,inspiracao:$('#pInsp').value.trim(),marcaInsp:$('#pMarca').value.trim(),
    familia:$('#pFam').value.trim(), notasTopo:$('#pTopo').value.trim(),
    notasCoracao:$('#pCoracao').value.trim(), notasFundo:$('#pFundo').value.trim(),
    concentracao:$('#pConc').value, volume:$('#pVol').value.trim(), temTester:$('#pTester').value,
    genero:$('#pGen').value,
    precoVenda:Number($('#pPreco').value)||90,
    foto:fotos.prod, fotoInsp:fotos.insp};
  if(edit.prod){
    const i=data.products.findIndex(p=>p.id===edit.prod), old=data.products[i].nome;
    data.products[i]={...data.products[i],...payload};
    if(old!==nome){ data.purchases.forEach(c=>{if(c.produto===old)c.produto=nome});
      data.sales.forEach(v=>{if(v.produto===old)v.produto=nome});
      data.consignments.forEach(c=>{if(c.produto===old)c.produto=nome}); }
    cancProd();
  } else data.products.push({id:uid(),...payload});
  resetProd(); save(); renderAll();
});
function resetProd(){ $('#fProd').reset(); $('#pTester').value='auto'; $('#pGen').value='Masculino';  $('#pPreco').value=90;
  setFotoPrev('prod',''); setFotoPrev('insp',''); }
function cancProd(){ edit.prod=null; resetProd(); $('#tProdForm').textContent='Novo produto';
  $('#bProd').textContent='Adicionar produto'; $('#cancProd').hidden=true; }
$('#cancProd').addEventListener('click',cancProd);
$('#tProd').addEventListener('click',e=>{
  const ep=e.target.dataset.ep, dp=e.target.dataset.dp;
  if(ep){ const p=data.products.find(x=>x.id===ep); if(!p)return;
    edit.prod=ep; $('#pNome').value=p.nome; $('#pInsp').value=p.inspiracao||'';
    $('#pMarca').value=p.marcaInsp||''; $('#pFam').value=p.familia||'';
    $('#pTopo').value=p.notasTopo||''; $('#pCoracao').value=p.notasCoracao||'';
    $('#pFundo').value=p.notasFundo||''; $('#pConc').value=p.concentracao||'';
    $('#pVol').value=p.volume||''; $('#pTester').value=modoProvador(p)==='manual'?p.temTester:'auto'; $('#pGen').value=p.genero;
     $('#pPreco').value=p.precoVenda;
    setFotoPrev('prod',p.foto||''); setFotoPrev('insp',p.fotoInsp||'');
    $('#tProdForm').textContent='Editando: '+p.nome; $('#bProd').textContent='Salvar alterações'; $('#cancProd').hidden=false;
    window.scrollTo({top:0,behavior:'smooth'}); }
  if(dp){ const p=data.products.find(x=>x.id===dp); if(!p)return;
    const usado=data.purchases.some(c=>c.produto===p.nome)||data.sales.some(v=>v.produto===p.nome)||data.consignments.some(c=>c.produto===p.nome);
    if(confirm(usado?`"${p.nome}" tem lançamentos vinculados. Excluir o cadastro não apaga as compras, vendas e consignações já registradas. Continuar?`:`Excluir "${p.nome}"?`)){
      data.products=data.products.filter(x=>x.id!==dp); save(); renderAll(); } }
});

$('#fCli').addEventListener('submit',e=>{
  e.preventDefault();
  const nome=$('#cliNome').value.trim();
  if(!nome) return showErr('#eCli','Informe o nome.');
  if(data.clients.some(c=>norm(c.nome)===norm(nome) && c.id!==edit.cli))
    return showErr('#eCli','Já existe um cliente com esse nome.');
  hideErr('#eCli');
  const payload={nome, telefone:$('#cliTel').value.trim(), observacao:$('#cliObs').value.trim()};
  if(edit.cli){
    const i=data.clients.findIndex(c=>c.id===edit.cli), old=data.clients[i].nome;
    data.clients[i]={...data.clients[i],...payload};
    if(norm(old)!==norm(nome) || old!==nome)
      data.sales.forEach(v=>{ if(norm(v.cliente)===norm(old)) v.cliente=nome; });
    cancCli();
  } else data.clients.push({id:uid(),...payload});
  $('#fCli').reset(); save(); renderAll();
});
function cancCli(){ edit.cli=null; $('#fCli').reset(); $('#tCliForm').textContent='Novo cliente';
  $('#bCli').textContent='Adicionar cliente'; $('#cancCli').hidden=true; }
$('#cancCli').addEventListener('click',cancCli);
$('#tCli').addEventListener('click',e=>{
  const f=e.target.dataset.ficha, ed=e.target.dataset.ecl, dl=e.target.dataset.dcl;
  if(f) return abreFicha(f);
  if(ed){ const c=data.clients.find(x=>x.id===ed); if(!c)return;
    edit.cli=ed; $('#cliNome').value=c.nome; $('#cliTel').value=c.telefone||''; $('#cliObs').value=c.observacao||'';
    $('#tCliForm').textContent='Editando: '+c.nome; $('#bCli').textContent='Salvar alterações'; $('#cancCli').hidden=false;
    window.scrollTo({top:0,behavior:'smooth'}); }
  if(dl){ const c=data.clients.find(x=>x.id===dl); if(!c)return;
    const n=data.sales.filter(v=>norm(v.cliente)===norm(c.nome)).length;
    if(confirm(n?`"${c.nome}" tem ${n} ${plural(n,'venda registrada','vendas registradas')}. Excluir a ficha não apaga as vendas. Continuar?`:`Excluir "${c.nome}"?`)){
      data.clients=data.clients.filter(x=>x.id!==dl); save(); renderAll(); } }
});

$('#fCom').addEventListener('submit',e=>{
  e.preventDefault();
  const produto=$('#comProd').value;
  if(!produto) return showErr('#eCom','Cadastre um produto antes de lançar compras.');
  hideErr('#eCom');
  const payload={data:$('#comData').value,qtde:Number($('#comQtd').value)||1,produto,tipo:$('#comTipo').value,
    entregue:$('#comEnt').value,custoTotal:Number($('#comCusto').value)||0,observacao:$('#comObs').value.trim()};
  if(edit.com){ const i=data.purchases.findIndex(c=>c.id===edit.com); data.purchases[i]={...data.purchases[i],...payload}; cancCom(); }
  else data.purchases.push({id:uid(),...payload});
  $('#fCom').reset(); $('#comQtd').value=1; $('#comTipo').value='Lacrado'; $('#comEnt').value='Sim';
  $('#comData').value=hoje(); save(); renderAll();
});
function cancCom(){ edit.com=null; $('#fCom').reset(); $('#comQtd').value=1; $('#comTipo').value='Lacrado'; $('#comEnt').value='Sim'; $('#comData').value=hoje();
  $('#tComForm').textContent='Nova compra'; $('#bCom').textContent='Adicionar compra'; $('#cancCom').hidden=true; }
$('#cancCom').addEventListener('click',cancCom);
$('#tCom').addEventListener('click',e=>{
  const ec=e.target.dataset.ec, dc=e.target.dataset.dc;
  if(ec){ const c=data.purchases.find(x=>x.id===ec); if(!c)return;
    if(!byName(c.produto)) return showErr('#eCom',`O produto "${c.produto}" não está no cadastro. Cadastre-o na aba Produtos antes de editar esta compra.`);
    edit.com=ec; $('#comData').value=c.data||''; $('#comQtd').value=c.qtde; $('#comProd').value=c.produto;
    $('#comTipo').value=c.tipo; $('#comEnt').value=c.entregue==='Não'?'Não':'Sim';
    $('#comCusto').value=c.custoTotal; $('#comObs').value=c.observacao||''; hideErr('#eCom');
    $('#tComForm').textContent='Editando compra'; $('#bCom').textContent='Salvar alterações'; $('#cancCom').hidden=false;
    window.scrollTo({top:0,behavior:'smooth'}); }
  if(dc && confirm('Excluir esta compra?')){ data.purchases=data.purchases.filter(x=>x.id!==dc); save(); renderAll(); }
});

function sugereValor(){ const p=byName($('#venProd').value); if(p&&!edit.ven) $('#venValor').value=(p.precoVenda*(Number($('#venQtd').value)||1)).toFixed(2); }
$('#venProd').addEventListener('change',sugereValor);
$('#venQtd').addEventListener('input',sugereValor);
$('#fVen').addEventListener('submit',e=>{
  e.preventDefault();
  const produto=$('#venProd').value;
  if(!produto) return showErr('#eVen','Cadastre um produto antes de lançar vendas.');
  const cliente=$('#venCli').value.trim();
  hideErr('#eVen');
  const payload={data:$('#venData').value,qtde:Number($('#venQtd').value)||1,produto,
    valorVenda:Number($('#venValor').value)||0, custosExtras:Number($('#venCustos').value)||0, cliente,
    canal: ($('#venCanal').value.trim()||'Direto'),
    status:$('#venStat').value, entregue:$('#venEnt').value};
  if(edit.ven){ const i=data.sales.findIndex(v=>v.id===edit.ven); data.sales[i]={...data.sales[i],...payload}; cancVen(); }
  else data.sales.push({id:uid(),...payload});
  if(cliente && !SEM_NOME.has(norm(cliente)) && !data.clients.some(c=>norm(c.nome)===norm(cliente)))
    data.clients.push({id:uid(), nome:cliente, telefone:'', observacao:''});
  const ultimoCanal = payload.canal;
  $('#fVen').reset(); $('#venQtd').value=1; $('#venCustos').value=''; $('#venStat').value='Pago'; $('#venEnt').value='Sim';
  $('#venCanal').value = ultimoCanal;          // mantém o canal para o próximo lançamento
  $('#venData').value = hoje();
  save(); renderAll();
});
function cancVen(){ edit.ven=null; $('#fVen').reset(); $('#venQtd').value=1; $('#venCustos').value=''; $('#venStat').value='Pago'; $('#venEnt').value='Sim'; $('#venCanal').value=''; $('#venData').value=hoje();
  $('#tVenForm').textContent='Nova venda'; $('#bVen').textContent='Adicionar venda'; $('#cancVen').hidden=true; }
$('#cancVen').addEventListener('click',cancVen);
$('#tVen').addEventListener('click',e=>{
  const ev=e.target.dataset.ev, dv=e.target.dataset.dv;
  if(ev){ const v=data.sales.find(x=>x.id===ev); if(!v)return;
    if(!byName(v.produto)) return showErr('#eVen',`O produto "${v.produto}" não está no cadastro. Cadastre-o na aba Produtos antes de editar esta venda.`);
    edit.ven=ev; $('#venData').value=v.data||''; $('#venQtd').value=v.qtde; $('#venProd').value=v.produto;
    $('#venValor').value=v.valorVenda; $('#venCustos').value=v.custosExtras||''; $('#venCli').value=v.cliente||'';
    $('#venCanal').value=canalDe(v); $('#venStat').value=v.status; $('#venEnt').value=v.entregue;
    hideErr('#eVen');
    $('#tVenForm').textContent='Editando venda'; $('#bVen').textContent='Salvar alterações'; $('#cancVen').hidden=false;
    window.scrollTo({top:0,behavior:'smooth'}); }
  if(dv && confirm('Excluir esta venda?')){ data.sales=data.sales.filter(x=>x.id!==dv); save(); renderAll(); }
});

$('#fCon').addEventListener('submit',e=>{
  e.preventDefault();
  const produto=$('#conProd').value;
  if(!produto) return showErr('#eCon','Cadastre um produto antes de lançar consignações.');
  const parceiro=$('#conParc').value.trim();
  if(!parceiro) return showErr('#eCon','Informe o parceiro.');
  hideErr('#eCon');
  const qtde=Number($('#conQtd').value)||1;
  const vend=Number($('#conVend').value)||0, dev=Number($('#conDev').value)||0;
  if(vend+dev>qtde) return showErr('#eCon',`Vendidos + devolvidos (${vend+dev}) não pode passar da quantidade enviada (${qtde}).`);
  const payload={data:$('#conData').value,parceiro,produto,tipo:$('#conTipo').value,
    qtde, qtdeVendida:vend, qtdeDevolvida:dev, observacao:$('#conObs').value.trim()};
  if(edit.con){ const i=data.consignments.findIndex(c=>c.id===edit.con); data.consignments[i]={...data.consignments[i],...payload}; cancCon(); }
  else data.consignments.push({id:uid(),...payload});
  $('#fCon').reset(); $('#conQtd').value=1; $('#conTipo').value='Lacrado'; $('#conVend').value=0; $('#conDev').value=0;
  save(); renderAll();
});
function cancCon(){ edit.con=null; $('#fCon').reset(); $('#conQtd').value=1; $('#conTipo').value='Lacrado'; $('#conVend').value=0; $('#conDev').value=0;
  $('#tConForm').textContent='Nova consignação'; $('#bCon').textContent='Adicionar consignação'; $('#cancCon').hidden=true; }
$('#cancCon').addEventListener('click',cancCon);
$('#tCon').addEventListener('click',e=>{
  const ec=e.target.dataset.ecn, dc=e.target.dataset.dcn;
  if(ec){ const c=data.consignments.find(x=>x.id===ec); if(!c)return;
    edit.con=ec; $('#conData').value=c.data||''; $('#conParc').value=c.parceiro; $('#conProd').value=c.produto;
    $('#conTipo').value=c.tipo; $('#conQtd').value=c.qtde; $('#conVend').value=c.qtdeVendida||0;
    $('#conDev').value=c.qtdeDevolvida||0; $('#conObs').value=c.observacao||''; hideErr('#eCon');
    $('#tConForm').textContent='Editando consignação'; $('#bCon').textContent='Salvar alterações'; $('#cancCon').hidden=false;
    window.scrollTo({top:0,behavior:'smooth'}); }
  if(dc && confirm('Excluir esta consignação?')){ data.consignments=data.consignments.filter(x=>x.id!==dc); save(); renderAll(); }
});

$('#fDes').addEventListener('submit',e=>{
  e.preventDefault();
  const item=$('#desItem').value.trim();
  if(!item) return showErr('#eDes','Informe o item.');
  hideErr('#eDes');
  const payload={data:$('#desData').value,item,categoria:$('#desCat').value.trim(),
    valor:Number($('#desVal').value)||0,observacao:$('#desObs').value.trim()};
  if(edit.des){ const i=data.expenses.findIndex(d=>d.id===edit.des); data.expenses[i]={...data.expenses[i],...payload}; cancDes(); }
  else data.expenses.push({id:uid(),...payload});
  $('#fDes').reset(); $('#desData').value=hoje(); save(); renderAll();
});
function cancDes(){ edit.des=null; $('#fDes').reset(); $('#desData').value=hoje(); $('#tDesForm').textContent='Nova despesa';
  $('#bDes').textContent='Adicionar despesa'; $('#cancDes').hidden=true; }
$('#cancDes').addEventListener('click',cancDes);
$('#tDes').addEventListener('click',e=>{
  const ed=e.target.dataset.ed, dd=e.target.dataset.dd;
  if(ed){ const d=data.expenses.find(x=>x.id===ed); if(!d)return;
    edit.des=ed; $('#desData').value=d.data||''; $('#desItem').value=d.item; $('#desCat').value=d.categoria||'';
    $('#desVal').value=d.valor; $('#desObs').value=d.observacao||'';
    $('#tDesForm').textContent='Editando despesa'; $('#bDes').textContent='Salvar alterações'; $('#cancDes').hidden=false;
    window.scrollTo({top:0,behavior:'smooth'}); }
  if(dd && confirm('Excluir esta despesa?')){ data.expenses=data.expenses.filter(x=>x.id!==dd); save(); renderAll(); }
});

document.body.addEventListener('click',e=>{
  const im=e.target.closest('img.thumb');
  if(im){ $('#lbImg').src=im.src; $('#lbCap').textContent=im.dataset.zoom||''; $('#lightbox').classList.add('open'); }
});
$('#lightbox').addEventListener('click',()=>$('#lightbox').classList.remove('open'));
document.addEventListener('keydown',e=>{ if(e.key==='Escape') $('#lightbox').classList.remove('open'); });

/* filtros */
const LIGA = [
  ['#filProdTester','prodTester','change',renderProd],
  ['#filProdFam','prodFam','change',renderProd],
  ['#filProdGen','prodGen','change',renderProd],['#filProdFoto','prodFoto','change',renderProd],['#filProdBusca','prodQ','input',renderProd],
  ['#filComGen','comGen','change',renderCom],['#filComTipo','comTipo','change',renderCom],['#filComEnt','comEnt','change',renderCom],
  ['#filComDe','comDe','change',renderCom],['#filComAte','comAte','change',renderCom],['#filComBusca','comQ','input',renderCom],
  ['#filVenCanal','venCanal','change',renderVen],
  ['#filVenGen','venGen','change',renderVen],['#filVenStat','venStat','change',renderVen],['#filVenEnt','venEnt','change',renderVen],
  ['#filVenDe','venDe','change',renderVen],['#filVenAte','venAte','change',renderVen],['#filVenBusca','venQ','input',renderVen],
  ['#filEstGen','estGen','change',renderEst],['#filEstStat','estStat','change',renderEst],['#filEstFam','estFam','change',renderEst],['#filEstBusca','estQ','input',renderEst],
  ['#filConParc','conParc','change',renderCon],['#filConTipo','conTipo','change',renderCon],['#filConSit','conSit','change',renderCon],
  ['#filConDe','conDe','change',renderCon],['#filConAte','conAte','change',renderCon],['#filConBusca','conQ','input',renderCon],
  ['#filCanSit','canSit','change',renderCanal],['#filCanDe','canDe','change',renderCanal],
  ['#filCanAte','canAte','change',renderCanal],['#filCanBusca','canQ','input',renderCanal],
  ['#filCliSit','cliSit','change',renderCli],['#filCliBusca','cliQ','input',renderCli],
  ['#filTesGen','tesGen','change',renderTes],['#filTesBusca','tesQ','input',renderTes],
  ['#filDesDe','desDe','change',renderDes],['#filDesAte','desAte','change',renderDes],['#filDesBusca','desQ','input',renderDes]
];
LIGA.forEach(([sel,campo,evt,fn])=>$(sel).addEventListener(evt,e=>{ fil[campo]=e.target.value; fn(); }));

/* modo compacto da tabela de estoque */
(function(){
  const cx = $('#estCompacto'), wrap = $('#tEst').closest('.twrap');
  const aplica = v => { wrap.classList.toggle('compacto', v);
    try{ localStorage.setItem('perfumes.estCompacto', v?'1':''); }catch(e){} };
  cx.addEventListener('change', e=>aplica(e.target.checked));
  try{ if(localStorage.getItem('perfumes.estCompacto')){ cx.checked=true; aplica(true); } }catch(e){}
})();

/* ---------------- identidade ---------------- */
const LOGO_G = 'data:image/png;base64,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';   /* capa do catálogo */
const LOGO_M = 'data:image/png;base64,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';   /* cabeçalho do sistema */
const LOGO_P = 'data:image/png;base64,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';   /* topos de página e relatórios */
const logoImg = (src,cls) => `<img class="logo ${cls||''}" src="${src}" alt="Buffon Fragrâncias">`;
$('#brandLockup').innerHTML = logoImg(LOGO_M);

/* ---------------- catálogo ---------------- */
const ICO = {
  frasco:`<svg width="17" height="23" viewBox="0 0 44 58" fill="none" stroke="currentColor" stroke-width="2.4" opacity=".55"><path d="M17.4 2.6h9.2l.9 4.1h-11z"/><path d="M12.6 21.4c0-2.7 1-4.6 2.7-6.2l2.1-2v-3.6h9.2v3.6l2.1 2c1.7 1.6 2.7 3.5 2.7 6.2v28.9c0 2.6-1.9 4.5-4.5 4.5H17.1c-2.6 0-4.5-1.9-4.5-4.5z"/></svg>`
};
const ACC = {Masculino:'#1D4E7C', Feminino:'#96246A'};
/* balão de conversa com fone — marca do WhatsApp */
const ICO_ZAP = (tam, cor) => `<svg width="${tam}" height="${tam}" viewBox="0 0 32 32" fill="${cor||'currentColor'}"
  style="vertical-align:-0.15em;flex:none" aria-hidden="true"><path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.7c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4c-1.1-1.7-1.6-3.7-1.6-5.8C5.2 10 10 5.2 16 5.2S26.8 10 26.8 16 22 26.7 16 26.7zm6-7.9c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4z"/></svg>`;
const POR_PAGINA = 3;

function catalogoItens(opt){
  let itens = data.products.slice();
  if(opt.genero) itens = itens.filter(p=>p.genero===opt.genero);
  if(opt.soFoto) itens = itens.filter(p=>p.foto || p.fotoInsp);
  if(opt.soTester) itens = itens.filter(p=>temProvador(p));
  if(opt.soEstoque){
    const est = {}; estoque().forEach(r=>est[r.produto]=r.saldo+r.consig);
    itens = itens.filter(p=>(est[p.nome]||0)>0);
  }
  const bloco = g => itens.filter(p=>p.genero===g).sort((a,b)=>a.nome.localeCompare(b.nome,'pt-BR'));
  return [...bloco('Masculino'), ...bloco('Feminino')];
}
const plate = (cls,src,alt,isRef) => `<div class="plate ${cls}" style="position:relative; overflow:hidden;">${src
  ? `<img src="${src}" alt="${esc(alt)}">${isRef ? '<div style="position:absolute; left:0; right:0; bottom:1.5mm; text-align:center; font-size:4.5px; color:var(--ink); opacity:0.65; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; line-height:1.1; white-space:nowrap;">REFERÊNCIA OLFATIVA</div>' : ''}`
  : `<div class="vazio">${ICO.frasco}<span>sem foto</span></div>`}</div>`;

/* pirâmide olfativa: topo estreito, coração médio, fundo largo */
function piramideSVG(acc, tem){
  const t = tem.topo?1:.18, c = tem.coracao?1:.18, f = tem.fundo?1:.18;
  return `<svg width="62" height="58" viewBox="0 0 62 58" fill="none" aria-hidden="true">
    <path d="M31 2 44 21H18z" fill="${acc}" opacity="${t}"/>
    <path d="M16.4 23.4h29.2L52 40H10z" fill="${acc}" opacity="${c}"/>
    <path d="M8.4 42.4h45.2L60 56H2z" fill="${acc}" opacity="${f}"/>
  </svg>`;
}
/* formato único usado pelo catálogo impresso e pelo link público */
const paraCatalogo = p => ({
  nome:p.nome, genero:p.genero, inspiracao:p.inspiracao, marca:p.marcaInsp, familia:p.familia,
  conc:p.concentracao, vol:p.volume, topo:p.notasTopo, coracao:p.notasCoracao, fundo:p.notasFundo,
  tester:temProvador(p), preco:Number(p.precoVenda)||0, foto:p.foto||'', fotoInsp:p.fotoInsp||''
});
function itemHTML(p, n, opt){
  const acc = ACC[p.genero] || '#8A5330';
  const tem = {topo:!!p.topo, coracao:!!p.coracao, fundo:!!p.fundo};
  const algumaNota = tem.topo || tem.coracao || tem.fundo;
  const nv = (rot,val) => val ? `<div class="nv"><b>${rot}</b><span>${esc(val)}</span></div>` : '';
  return `<div class="item" style="--acc:${acc}">
    <div style="flex:none">${plate('p1', p.foto, p.nome)}</div>
    <div class="meio" style="overflow:hidden;">
      <div class="topolinha"><span class="num">${String(n).padStart(2,'0')}</span>
        ${(opt.marcaTester && p.tester)?`<span class="selotest">provador disponível</span>`:''}</div>
      <div class="nome">${esc(p.nome)}</div>
      <div class="edp">${[p.conc, p.vol, p.genero==='Feminino'?'Feminino':'Masculino'].filter(Boolean).join(' · ')}</div>
      ${p.familia?`<div class="fam">${esc(p.familia)}</div>`:''}
      <div class="regua"></div>
      ${algumaNota
        ? `<div class="piramide">${piramideSVG(acc,tem)}<div class="niveis">
             ${nv('Topo',p.topo)}${nv('Coração',p.coracao)}${nv('Fundo',p.fundo)}
           </div></div>`
        : `<div class="semnotas">Pirâmide olfativa não informada.</div>`}
      ${(opt.preco && p.preco)?`<div class="preco">${money(p.preco)}</div>`:''}
    </div>
    ${p.inspiracao?`<div class="inspcol">
      <div class="lbl">Inspirado em</div>
      <div class="fio"></div>
      <div class="insp">${esc(p.inspiracao)}</div>
      ${p.marca?`<div class="marca">${esc(p.marca)}</div>`:''}
    </div>`:''}
    <div class="dir" style="flex:none">${plate('p2', p.fotoInsp, p.inspiracao||'referência', true)}</div>
  </div>`;
}

function notaRodape(){ return 'Consulte disponibilidade'; }
function montaCatalogo(opt){
  return montaFolhas(catalogoItens(opt).map(paraCatalogo), opt);
}
/* Monta as páginas a partir de uma lista já no formato único.
   Usado tanto por você quanto pelo cliente que baixa pelo link. */
function montaFolhas(itens, opt){
  if(!itens || !itens.length) return 0;
  const hoje = new Date().toLocaleDateString('pt-BR');
  const nM = itens.filter(p=>p.genero==='Masculino').length;
  const nF = itens.filter(p=>p.genero==='Feminino').length;
  const folhas = [];
  for(let i=0;i<itens.length;i+=POR_PAGINA) folhas.push(itens.slice(i,i+POR_PAGINA));
  const totalPag = folhas.length + 1;
  const contato = (opt.contato||'').trim();

  let html = `<div class="pagina capa"><div class="moldura"></div><div class="miolo">
    ${logoImg(LOGO_G)}
    <div class="rive">LA RIVE</div>
    <div class="meta" style="margin-top:49px">${itens.length} ${plural(itens.length,'fragrância','fragrâncias')}<br>
      ${nM} ${plural(nM,'masculina','masculinas')} &nbsp;·&nbsp; ${nF} ${plural(nF,'feminina','femininas')}</div>
    ${contato?`<div class="contatoCapa">${ICO_ZAP(13,'#1F7A44')}<span>${esc(contato)}</span></div>`:''}
  </div></div>`;

  folhas.forEach((folha,fi)=>{
    html += `<div class="pagina">
      <div class="topo">${logoImg(LOGO_P)}<div class="rive">LA RIVE</div></div>
      <div class="lista">${folha.map((p,k)=>itemHTML(p, fi*POR_PAGINA+k+1, opt)).join('')}</div>
      <div class="pe"><span class="nota">${notaRodape(opt)}</span>
        <span class="pag">${String(fi+2).padStart(2,'0')} / ${String(totalPag).padStart(2,'0')}</span></div>
    </div>`;
  });

  $('#catalogo').innerHTML = html;
  return itens.length;
}

function imprime(classe){
  document.body.classList.add(classe);
  const limpa = ()=>{ document.body.classList.remove(classe); window.removeEventListener('afterprint',limpa); };
  window.addEventListener('afterprint',limpa);
  setTimeout(()=>{ window.print(); setTimeout(limpa,1500); },150);
}

async function geraPdfCatalogoDireto(elCatalogo, filename){
  // Geração robusta para desktop e iPhone: cada página é capturada
  // individualmente em uma largura A4 fixa e inserida em uma folha A4.
  // jsPDF e html2canvas são carregados explicitamente no index.html.
  const pages = Array.from(elCatalogo.querySelectorAll('.pagina'));
  if(!pages.length) throw new Error('Nenhuma página do catálogo foi encontrada.');

  const PDF = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
  if(typeof PDF !== 'function') throw new Error('Biblioteca jsPDF indisponível.');
  if(typeof window.html2canvas !== 'function') throw new Error('Biblioteca html2canvas indisponível.');

  const oldCatalogoWidth = elCatalogo.style.width;
  const oldCatalogoMinWidth = elCatalogo.style.minWidth;
  const oldCatalogoTransform = elCatalogo.style.transform;
  const oldCatalogoOverflow = elCatalogo.style.overflow;
  elCatalogo.style.width = '794px';
  elCatalogo.style.minWidth = '794px';
  elCatalogo.style.transform = 'none';
  elCatalogo.style.overflow = 'visible';

  const pdf = new PDF({unit:'mm', format:'a4', orientation:'portrait', compress:true});
  const A4W = 210, A4H = 296;
  const PXW = 794, PXH = 1122;

  try{
    for(let i=0;i<pages.length;i++){
      const page = pages[i];
      const old = {
        width: page.style.width, height: page.style.height,
        minWidth: page.style.minWidth, maxWidth: page.style.maxWidth,
        transform: page.style.transform
      };
      page.style.width = PXW + 'px';
      page.style.minWidth = PXW + 'px';
      page.style.maxWidth = PXW + 'px';
      page.style.height = PXH + 'px';
      page.style.transform = 'none';

      if(document.fonts && document.fonts.ready) await document.fonts.ready;
      const imgs = Array.from(page.querySelectorAll('img'));
      await Promise.all(imgs.map(img => {
        if(img.complete && img.naturalWidth) return Promise.resolve();
        return new Promise(resolve => { img.onload=img.onerror=resolve; });
      }));

      const canvas = await window.html2canvas(page, {
        scale: 1.5,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#FFFFFF',
        width: PXW,
        height: PXH,
        windowWidth: PXW,
        windowHeight: PXH,
        scrollX: 0,
        scrollY: 0,
        logging: false
      });

      if(i>0) pdf.addPage();
      const imgData = canvas.toDataURL('image/jpeg', 0.94);
      pdf.addImage(imgData, 'JPEG', 0, 0, A4W, A4H, undefined, 'FAST');

      page.style.width = old.width;
      page.style.height = old.height;
      page.style.minWidth = old.minWidth;
      page.style.maxWidth = old.maxWidth;
      page.style.transform = old.transform;
    }

    // Não usamos pdf.save() aqui porque o botão Publicar precisa do Blob.
    const blob = pdf.output('blob');
    if(filename){
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(()=>URL.revokeObjectURL(url), 30000);
    }
    return blob;
  } finally {
    elCatalogo.style.width = oldCatalogoWidth;
    elCatalogo.style.minWidth = oldCatalogoMinWidth;
    elCatalogo.style.transform = oldCatalogoTransform;
    elCatalogo.style.overflow = oldCatalogoOverflow;
  }
}
function opcoesCat(){
  return {genero:$('#catGen').value, soFoto:$('#catSoFoto').checked,
    preco:$('#catPreco').checked, soEstoque:$('#catEstoque').checked,
    soTester:$('#catTester').checked, marcaTester:$('#catMarcaTester').checked,
    contato:$('#catContato').value};
}
$('#btnCatalogo').addEventListener('click',()=>{
  if(!data.products.length) return alert('Cadastre ao menos um produto antes de gerar o catálogo.');
  $('#catContato').value = (data.config && data.config.contato) || '';
  const jaTem = data.config && data.config.catalogoId && nvLigado();
  if(jaTem){ $('#catLink').value = linkPublico(data.config.catalogoId); $('#catLinkBox').hidden=false;
    $('#catPublicar').textContent = 'Republicar (atualiza o mesmo link)'; }
  else { $('#catLinkBox').hidden=true; $('#catPublicar').textContent='Publicar link online'; }
  const semFoto = data.products.filter(p=>!p.foto && !p.fotoInsp).length;
  $('#catAviso').textContent = semFoto
    ? `${semFoto} de ${data.products.length} ${plural(semFoto,'fragrância ainda não tem','fragrâncias ainda não têm')} foto — elas saem com um contorno no lugar da imagem.`
    : 'Todas as fragrâncias têm foto. O catálogo sai completo.';
  $('#modalCat').classList.add('open');
});
$('#catCancel').addEventListener('click',()=>$('#modalCat').classList.remove('open'));
$('#modalCat').addEventListener('click',e=>{ if(e.target.id==='modalCat') $('#modalCat').classList.remove('open'); });
$('#catPublicar').addEventListener('click', async ()=>{
  if(!nvLigado()) return alert('Para publicar o link é preciso estar conectado na nuvem.\n\nAbra o botão Nuvem e entre com sua conta.');
  const b=$('#catPublicar'); b.disabled=true; b.textContent='Gerando PDF e Publicando…';
  try{
    const opt = opcoesCat();
    const r_publish = await publicaCatalogo(opt);

    const id = idPublico();
    const elCatalogo = $('#catalogo');
    const itensParaCatalogo = catalogoItens(opt).map(paraCatalogo);
    montaFolhas(itensParaCatalogo, opt);
    elCatalogo.style.display = 'block';
  

    document.body.classList.add('pdf-export');
    let pdfBlob;
    try {
      pdfBlob = await geraPdfCatalogoDireto(elCatalogo, null);
    } finally {
      elCatalogo.style.display = 'none';
      document.body.classList.remove('pdf-export');
    }

    const storageRes = await fetch(`${NV.url}/storage/v1/object/catalogos/${id}.pdf`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + NV.tok,
        'apikey': NV.key,
        'Content-Type': 'application/pdf',
        'x-upsert': 'true'
      },
      body: pdfBlob
    });

    if(!storageRes.ok) throw new Error('Falha ao hospedar o arquivo PDF na nuvem.');

    data.config = Object.assign({}, data.config, {contato:opt.contato.trim()}); save();
    $('#catLink').value = r_publish.link; $('#catLinkBox').hidden=false;
    $('#catNota').innerHTML = `O PDF foi gerado e hospedado no seu banco de dados. O link direto para download já está atualizado.`;
    b.textContent = `Republicar (${r_publish.n} no ar)`;
    alert(`Catálogo atualizado com sucesso!\n\nO PDF foi gerado silenciosamente e já substituiu o antigo na nuvem.`);
  }catch(e){
    alert('Não consegui publicar: '+e.message+'\n\nCertifique-se de ter rodado o SQL que cria o bucket "catalogos".');
    b.textContent='Publicar link online';
    $('#catalogo').style.display = 'none';
  }
  b.disabled=false;
});
$('#catCopiar').addEventListener('click', async ()=>{
  const b=$('#catCopiar');
  try{ await navigator.clipboard.writeText($('#catLink').value); b.textContent='Copiado!'; }
  catch(e){ $('#catLink').select(); b.textContent='Ctrl+C para copiar'; }
  setTimeout(()=>b.textContent='Copiar link', 2500);
});
$('#catZap').addEventListener('click', ()=>{
  window.open('https://wa.me/?text='+encodeURIComponent(mensagemCatalogo()), '_blank');
});
$('#catAbrir').addEventListener('click', ()=>window.open($('#catLink').value,'_blank'));
$('#catTirar').addEventListener('click', async ()=>{
  if(!confirm('Tirar o catálogo do ar? Quem tiver o link verá um aviso de indisponível.')) return;
  try{ await despublicaCatalogo(); $('#catLinkBox').hidden=true;
    $('#catPublicar').textContent='Publicar link online'; alert('Catálogo fora do ar.'); }
  catch(e){ alert('Não consegui tirar do ar: '+e.message); }
});

$('#catGerar').addEventListener('click', ()=>{
  const opt = opcoesCat();
  const n = montaCatalogo(opt);
  if(!n) return alert('Nenhuma fragrância atende a esses filtros. Ajuste as opções e tente de novo.');
  data.config = Object.assign({}, data.config, {contato:opt.contato.trim()}); save();
  $('#modalCat').classList.remove('open');

  const elCatalogo = $('#catalogo');
  elCatalogo.style.display = 'block';
  

  document.body.classList.add('pdf-export');
  geraPdfCatalogoDireto(elCatalogo, 'Catalogo_Buffon_Fragrancias.pdf').then(() => {
    elCatalogo.style.display = 'none';
    document.body.classList.remove('pdf-export');
  }).catch((e) => {
    elCatalogo.style.display = 'none';
    document.body.classList.remove('pdf-export');
    alert('Não consegui gerar o catálogo em PDF: ' + (e && e.message ? e.message : e));
  });
});

/* ---------------- exportação para Excel ----------------
   Monta um .xlsx de verdade (zip com XML) sem depender de biblioteca:
   assim continua funcionando offline. */
function crc32(buf){
  let c, tab = crc32.tab;
  if(!tab){ tab = crc32.tab = [];
    for(let n=0;n<256;n++){ c=n; for(let k=0;k<8;k++) c = c&1 ? 0xEDB88320^(c>>>1) : c>>>1; tab[n]=c>>>0; } }
  let crc = 0xFFFFFFFF;
  for(let i=0;i<buf.length;i++) crc = (crc>>>8) ^ tab[(crc ^ buf[i]) & 0xFF];
  return (crc ^ 0xFFFFFFFF)>>>0;
}
function zipa(arquivos){
  const enc = new TextEncoder();
  const partes = [], central = [];
  let desloc = 0;
  const num = (v,n)=>{ const a=new Uint8Array(n); for(let i=0;i<n;i++) a[i]=(v>>>(i*8))&0xFF; return a; };
  const junta = arr => { let t=0; arr.forEach(a=>t+=a.length);
    const o=new Uint8Array(t); let x=0; arr.forEach(a=>{o.set(a,x); x+=a.length;}); return o; };
  arquivos.forEach(f=>{
    const nome = enc.encode(f.nome), dados = enc.encode(f.txt), c = crc32(dados);
    const cab = junta([num(0x04034b50,4),num(20,2),num(0,2),num(0,2),num(0,2),num(0,2),
      num(c,4),num(dados.length,4),num(dados.length,4),num(nome.length,2),num(0,2),nome]);
    partes.push(cab, dados);
    central.push(junta([num(0x02014b50,4),num(20,2),num(20,2),num(0,2),num(0,2),num(0,2),num(0,2),
      num(c,4),num(dados.length,4),num(dados.length,4),num(nome.length,2),
      num(0,2),num(0,2),num(0,2),num(0,2),num(0,4),num(desloc,4),nome]));
    desloc += cab.length + dados.length;
  });
  const dir = junta(central);
  const fim = junta([num(0x06054b50,4),num(0,2),num(0,2),num(arquivos.length,2),num(arquivos.length,2),
    num(dir.length,4),num(desloc,4),num(0,2)]);
  return new Blob([junta(partes), dir, fim], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
}
const xmlEsc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const colLetra = n => { let s=''; n++; while(n>0){ const r=(n-1)%26; s=String.fromCharCode(65+r)+s; n=(n-r-1)/26; } return s; };
/* "R$ 1.234,56" -> 1234.56 · "45,2%" -> 0.452 · resto continua texto */
function paraNumero(t){
  const s = String(t).trim();
  if(/^R\$\s*-?[\d.]+,\d{2}$/.test(s)) return parseFloat(s.replace(/[R$\s.]/g,'').replace(',','.'));
  if(/^-?\d+(\.\d{3})*(,\d+)?%$/.test(s)) return parseFloat(s.replace(/\./g,'').replace(',','.').replace('%',''))/100;
  if(/^-?\d+$/.test(s)) return parseInt(s,10);
  return null;
}
function geraXlsx(titulo, cabecalhos, linhas, resumo){
  const cels = [];
  const linha = (idx, valores, estilo) => {
    const c = valores.map((v,i)=>{
      const ref = colLetra(i)+(idx+1);
      const n = estilo==='cab' ? null : paraNumero(v);
      return n!==null
        ? `<c r="${ref}"${estilo==='tot'?' s="2"':''}><v>${n}</v></c>`
        : `<c r="${ref}" t="inlineStr"${estilo==='cab'?' s="1"':estilo==='tot'?' s="2"':''}><is><t>${xmlEsc(v)}</t></is></c>`;
    }).join('');
    return `<row r="${idx+1}">${c}</row>`;
  };
  let i=0;
  cels.push(linha(i++, [titulo], 'cab'));
  if(resumo) cels.push(linha(i++, [resumo]));
  i++;                                            // linha em branco
  const linhaCab = i+1;                           // onde ficam os títulos das colunas
  cels.push(linha(i++, cabecalhos, 'cab'));
  const linhaIni = i+1;
  linhas.forEach(l=>cels.push(linha(i++, l)));
  const ultCol = colLetra(cabecalhos.length-1);
  const totalLinhas = i;
  const larg = cabecalhos.map((c,k)=>`<col min="${k+1}" max="${k+1}" width="${Math.min(42,Math.max(11,c.length+6))}" customWidth="1"/>`).join('');
  return zipa([
    {nome:'[Content_Types].xml', txt:`<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`},
    {nome:'_rels/.rels', txt:`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`},
    {nome:'xl/workbook.xml', txt:(`<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Dados" sheetId="1" r:id="rId1"/></sheets><definedNames><definedName name="_xlnm._FilterDatabase" localSheetId="0" hidden="1">Dados!$A$__CAB__:$__COL__$__FIM__</definedName></definedNames></workbook>`).replace('__CAB__',linhaCab).replace('__COL__',ultCol).replace('__FIM__',totalLinhas)},
    {nome:'xl/_rels/workbook.xml.rels', txt:`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`},
    {nome:'xl/styles.xml', txt:`<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border/></borders><cellStyleXfs count="1"><xf/></cellStyleXfs><cellXfs count="3"><xf xfId="0"/><xf xfId="0" fontId="1" applyFont="1"/><xf xfId="0" fontId="1" applyFont="1"/></cellXfs></styleSheet>`},
    {nome:'xl/worksheets/sheet1.xml', txt:`<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">`
      /* congela o cabeçalho para ele não sumir ao rolar */
      + `<sheetViews><sheetView workbookViewId="0" tabSelected="1">`
      + `<pane ySplit="${linhaCab}" topLeftCell="A${linhaIni}" activePane="bottomLeft" state="frozen"/>`
      + `<selection pane="bottomLeft" activeCell="A${linhaIni}" sqref="A${linhaIni}"/></sheetView></sheetViews>`
      + `<cols>${larg}</cols><sheetData>${cels.join('')}</sheetData>`
      /* filtro nas colunas, já pronto para usar */
      + `<autoFilter ref="A${linhaCab}:${ultCol}${totalLinhas}"/></worksheet>`}
  ]);
}
/* lê a tabela da tela, já filtrada e ordenada */
function exportaXlsx(g){
  const R = RELATORIOS[g]; if(!R) return;
  const orig = $(R.tabela);
  if(!orig || !orig.querySelector('tbody tr td:not(.empty)'))
    return alert('Não há linhas para exportar com os filtros atuais.');
  const clone = orig.cloneNode(true);
  clone.querySelectorAll('tr').forEach(tr=>{
    const ult = tr.lastElementChild;
    if(ult && (ult.querySelector('.rowacts') || (ult.tagName==='TH' && !ult.textContent.trim()))) ult.remove();
    const pri = tr.firstElementChild;
    if(pri && pri.querySelector('input[type=checkbox]')) pri.remove();
  });
  const cabs = [...clone.querySelectorAll('thead th')];
  const iFoto = cabs.findIndex(t=>norm(t.textContent)==='foto');
  if(iFoto>=0) clone.querySelectorAll('tr').forEach(tr=>{ const c=tr.children[iFoto]; if(c&&c.colSpan===1) c.remove(); });
  const cabecalhos = [...clone.querySelectorAll('thead th')].map(t=>t.textContent.replace(/[▲▼↕]/g,'').trim());
  const linhas = [...clone.querySelectorAll('tbody tr')].map(tr=>[...tr.children].map(td=>td.textContent.trim()));
  [...clone.querySelectorAll('tfoot tr')].forEach(tr=>linhas.push([...tr.children].map(td=>td.textContent.trim())));
  const ativos = R.filtros().filter(([,v])=>v).map(([l,v])=>`${l}: ${v}`);
  const resumo = `${new Date().toLocaleString('pt-BR')} · ${ativos.length?ativos.join(' · '):'sem filtros'}`;
  const blob = geraXlsx('Buffon Fragrâncias — '+R.titulo, cabecalhos, linhas, resumo);
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `buffon-${g}-${carimbo()}.xlsx`;
  a.click(); setTimeout(()=>URL.revokeObjectURL(a.href), 3000);
}

/* ---------------- relatórios por tela ---------------- */
const RELATORIOS = {
  prod:{titulo:'Catálogo de produtos', tabela:'#tProd', contador:'#cntProd',
    filtros:()=>[['Gênero',fil.prodGen],['Família',fil.prodFam],['Provador',{sim:'só com provador',nao:'só sem provador'}[fil.prodTester]],['Fotos',{semProd:'sem foto do produto',semInsp:'sem foto da inspiração',semAmbas:'sem nenhuma foto',comAmbas:'com as duas fotos'}[fil.prodFoto]],['Busca',fil.prodQ]]},
  com:{titulo:'Compras', tabela:'#tCom', contador:'#cntCom',
    filtros:()=>[['Gênero',fil.comGen],['Tipo',fil.comTipo],['Situação',fil.comEnt==='Sim'?'recebidas':fil.comEnt==='Não'?'a caminho':''],['Período',periodo(fil.comDe,fil.comAte)],['Busca',fil.comQ]]},
  ven:{titulo:'Vendas', tabela:'#tVen', contador:'#cntVen',
    filtros:()=>[['Canal',fil.venCanal],['Gênero',fil.venGen],['Pagamento',fil.venStat],['Entrega',fil.venEnt==='Sim'?'entregues':fil.venEnt==='Não'?'não entregues':''],['Período',periodo(fil.venDe,fil.venAte)],['Busca',fil.venQ]]},
  est:{titulo:'Posição de estoque', tabela:'#tEst', contador:'#cntEst',
    filtros:()=>[['Gênero',fil.estGen],['Família',fil.estFam],['Situação',fil.estStat],['Busca',fil.estQ]]},
  con:{titulo:'Estoque consignado', tabela:'#tCon', contador:'#cntCon',
    filtros:()=>[['Parceiro',fil.conParc],['Tipo',fil.conTipo],['Situação',fil.conSit],['Período',periodo(fil.conDe,fil.conAte)],['Busca',fil.conQ]]},
  can:{titulo:'Canais de venda', tabela:'#tCanal', contador:'#cntCan',
    filtros:()=>[['Situação',{acertar:'com valor a acertar',entregar:'com entrega pendente',quites:'sem pendência'}[fil.canSit]],['Período',periodo(fil.canDe,fil.canAte)],['Busca',fil.canQ]]},
  cli:{titulo:'Clientes', tabela:'#tCli', contador:'#cntCli',
    filtros:()=>[['Situação',{devendo:'com saldo em aberto',quitado:'sem pendência',semtel:'sem WhatsApp'}[fil.cliSit]],['Busca',fil.cliQ]]},
  tes:{titulo:'Testers', tabela:'#tTes', contador:'#cntTes',
    filtros:()=>[['Gênero',fil.tesGen],['Busca',fil.tesQ]]},
  des:{titulo:'Despesas operacionais', tabela:'#tDes', contador:'#cntDes',
    filtros:()=>[['Período',periodo(fil.desDe,fil.desAte)],['Busca',fil.desQ]]}
};
const periodo = (de,ate) => (!de&&!ate) ? '' : `${de?dt(de):'início'} a ${ate?dt(ate):'hoje'}`;

function imprimeRelatorio(g){
  const R = RELATORIOS[g]; if(!R) return;
  const orig = $(R.tabela);
  if(!orig || !orig.querySelector('tbody tr td:not(.empty)'))
    return alert('Não há linhas para imprimir com os filtros atuais.');
  const clone = orig.cloneNode(true);
  /* tira a coluna de ações */
  clone.querySelectorAll('tr').forEach(tr=>{
    const ult = tr.lastElementChild;
    if(ult && (ult.querySelector('.rowacts') || (ult.tagName==='TH' && !ult.textContent.trim()))) ult.remove();
  });
  /* tira a coluna das caixas de seleção */
  clone.querySelectorAll('tr').forEach(tr=>{
    const pri = tr.firstElementChild;
    if(pri && pri.querySelector('input[type=checkbox]')) pri.remove();
  });
  /* tira a coluna de foto, que não faz sentido impressa */
  const cabs = [...clone.querySelectorAll('thead th')];
  const iFoto = cabs.findIndex(t=>norm(t.textContent)==='foto');
  if(iFoto>=0) clone.querySelectorAll('tr').forEach(tr=>{
    const c = tr.children[iFoto];
    if(c && c.colSpan===1) c.remove();
  });
  clone.querySelectorAll('.arw').forEach(a=>a.remove());
  clone.querySelectorAll('th').forEach(t=>t.classList.remove('sorted','sortable'));
  const ativos = R.filtros().filter(([,v])=>v).map(([l,v])=>`<b>${l}:</b> ${esc(v)}`);
  const agora = new Date().toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'});
  $('#relatorio').innerHTML = `
    <div class="cab">
      <div class="esq">${logoImg(LOGO_P)}</div>
      <h2>${R.titulo}</h2>
      <div class="quando">${agora}<br>${$(R.contador)?$(R.contador).textContent:''}</div>
    </div>
    <div class="filtros">${ativos.length?ativos.join(' &nbsp;·&nbsp; '):'<b>Filtros:</b> nenhum — relatório completo'}</div>
    ${clone.outerHTML}
    <div class="pe">Buffon Fragrâncias · documento interno</div>`;
  imprime('pr-rel');
}
document.querySelectorAll('[data-rel]').forEach(b=>b.addEventListener('click',()=>imprimeRelatorio(b.dataset.rel)));
document.querySelectorAll('[data-xls]').forEach(b=>b.addEventListener('click',()=>exportaXlsx(b.dataset.xls)));

/* ---------------- sincronização na nuvem (Supabase) ----------------
   Guarda todo o conteúdo num registro só, ligado à sua conta. O aparelho
   continua funcionando offline; a nuvem serve para igualar os aparelhos. */
const VERSAO = 'canal-pct · 20/08';
/* Se você preencher estas duas linhas com os dados do seu projeto, o link do
   catálogo fica curto (só o código). A chave "anon public" é feita para ser
   pública — quem a tem não acessa nada, porque as permissões exigem login. */
const NV_URL_FIXA = 'https://gljknlvgszbjusdyubbd.supabase.co';
const NV_KEY_FIXA = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsamtubHZnc3pianVzZHl1YmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3NTQzNjYsImV4cCI6MjEwMjMzMDM2Nn0.gusw8YbQsRIZS4gWvC-yI8xU_Ko9tjKMbu-K4gr7DwI';

const NV = {
  get url(){ return ((localStorage.getItem('perfumes.nv.url')||NV_URL_FIXA)||'').replace(/\/+$/,''); },
  get key(){ return localStorage.getItem('perfumes.nv.key')||NV_KEY_FIXA||''; },
  get tok(){ return localStorage.getItem('perfumes.nv.tok')||''; },
  get ref(){ return localStorage.getItem('perfumes.nv.ref')||''; },
  get exp(){ return Number(localStorage.getItem('perfumes.nv.exp')||0); },
  get uid(){ return localStorage.getItem('perfumes.nv.uid')||''; },
  get carimbo(){ return Number(localStorage.getItem('perfumes.nv.carimbo')||0); },
  get local(){ return Number(localStorage.getItem('perfumes.nv.local')||0); },
  set(k,v){ localStorage.setItem('perfumes.nv.'+k, v); },
  limpa(){ ['tok','ref','uid','exp','carimbo'].forEach(k=>localStorage.removeItem('perfumes.nv.'+k)); },
  limpaSessao(){ ['tok','ref','exp'].forEach(k=>localStorage.removeItem('perfumes.nv.'+k)); },
  set2(k,v){ localStorage.setItem('perfumes.nv.'+k, v); }
};
const SQL_NUVEM = `-- Pode rodar quantas vezes quiser: não apaga dados nem dá erro se já existir.

-- 1) dados em uso
create table if not exists dados_buffon (
  usuario uuid primary key references auth.users on delete cascade,
  conteudo jsonb not null,
  atualizado timestamptz not null default now()
);
alter table dados_buffon enable row level security;
drop policy if exists "dono le" on dados_buffon;
drop policy if exists "dono grava" on dados_buffon;
drop policy if exists "dono atualiza" on dados_buffon;
create policy "dono le" on dados_buffon for select using (auth.uid() = usuario);
create policy "dono grava" on dados_buffon for insert with check (auth.uid() = usuario);
create policy "dono atualiza" on dados_buffon for update using (auth.uid() = usuario);

-- 2) cópias datadas (histórico de versões)
create table if not exists copias_buffon (
  id bigserial primary key,
  usuario uuid not null references auth.users on delete cascade,
  criado timestamptz not null default now(),
  motivo text,
  resumo jsonb,
  conteudo jsonb not null
);
create index if not exists copias_buffon_idx on copias_buffon (usuario, criado desc);
alter table copias_buffon enable row level security;
drop policy if exists "dono le copias" on copias_buffon;
drop policy if exists "dono cria copias" on copias_buffon;
drop policy if exists "dono apaga copias" on copias_buffon;
create policy "dono le copias" on copias_buffon for select using (auth.uid() = usuario);
create policy "dono cria copias" on copias_buffon for insert with check (auth.uid() = usuario);
create policy "dono apaga copias" on copias_buffon for delete using (auth.uid() = usuario);

-- 3) catálogo público (só nome, inspiração, notas, foto e preço; nunca custos ou clientes)
create table if not exists catalogo_buffon (
  id text primary key,
  usuario uuid not null references auth.users on delete cascade,
  atualizado timestamptz not null default now(),
  conteudo jsonb not null
);
alter table catalogo_buffon enable row level security;
drop policy if exists "catalogo publico le" on catalogo_buffon;
drop policy if exists "dono publica" on catalogo_buffon;
drop policy if exists "dono republica" on catalogo_buffon;
drop policy if exists "dono despublica" on catalogo_buffon;
create policy "catalogo publico le" on catalogo_buffon for select using (true);
create policy "dono publica" on catalogo_buffon for insert with check (auth.uid() = usuario);
create policy "dono republica" on catalogo_buffon for update using (auth.uid() = usuario);
create policy "dono despublica" on catalogo_buffon for delete using (auth.uid() = usuario);`;

const nvLigado = () => !!(NV.url && NV.key && NV.tok);
function nvStatus(estado, texto){
  const el=$('#nuvemStat'); el.hidden = !texto;
  el.className='nuvemstat '+(estado||''); $('#nuvemTxt').textContent=texto||'';
  $('#btnNuvem').textContent = nvLigado() ? 'Nuvem ativa' : 'Nuvem';
}
async function nvBruto(caminho, opts={}){
  /* Nas rotas de autenticação vai a chave pública, nunca o acesso do usuário:
     mandar um token vencido aqui fazia a Supabase recusar o próprio login. */
  const eAuth = caminho.startsWith('/auth');
  const cracha = eAuth ? NV.key : (NV.tok || NV.key);
  const r = await fetch(NV.url+caminho, {...opts, headers:{
    'apikey': NV.key, 'Content-Type':'application/json',
    'Authorization':'Bearer '+cracha, ...(opts.headers||{})}});
  const txt = await r.text();
  let corpo = null; try{ corpo = txt?JSON.parse(txt):null; }catch(e){}
  return {ok:r.ok, status:r.status, corpo};
}
/* O acesso da Supabase expira em cerca de uma hora. Guardamos o código de
   renovação e trocamos por um novo sem pedir a senha de novo. */
async function nvRenovar(){
  if(!NV.ref) return false;
  const r = await nvBruto('/auth/v1/token?grant_type=refresh_token',
    {method:'POST', body:JSON.stringify({refresh_token:NV.ref})});
  if(r.ok && r.corpo && r.corpo.access_token){
    guardaSessao(r.corpo);
    return true;
  }
  /* o código de renovação também venceu: derruba a sessão para o botão
     de entrar voltar a aparecer e o login funcionar de novo */
  NV.limpaSessao(); nvBotoes();
  return false;
}
function guardaSessao(r){
  NV.set('tok', r.access_token);
  if(r.refresh_token) NV.set('ref', r.refresh_token);
  if(r.user && r.user.id) NV.set('uid', r.user.id);
  NV.set('exp', String(Date.now() + (Number(r.expires_in)||3600)*1000));
}
/* Renova antes de vencer, em vez de esperar dar erro. */
async function nvValida(){
  if(!NV.tok) return false;
  if(NV.exp && NV.exp - Date.now() > 90000) return true;
  return await nvRenovar();
}
async function nvFetch(caminho, opts={}){
  let r = await nvBruto(caminho, opts);
  if(!r.ok && (r.status===401 || r.status===403) && NV.ref && !caminho.startsWith('/auth')){
    if(await nvRenovar()) r = await nvBruto(caminho, opts);   // tenta uma vez só
  }
  if(!r.ok) throw new Error((r.corpo && (r.corpo.msg||r.corpo.message||r.corpo.error_description||r.corpo.error)) || ('erro '+r.status));
  return r.corpo;
}
async function nvAutenticar(criar){
  const url=$('#nvUrl').value.trim().replace(/\/+$/,''), key=$('#nvKey').value.trim();
  const mail=$('#nvMail').value.trim(), senha=$('#nvSenha').value;
  if(!url||!key) return showErr('#eNuvem','Preencha a URL do projeto e a chave.');
  if(!mail||!senha) return showErr('#eNuvem','Preencha e-mail e senha.');
  if(senha.length<6) return showErr('#eNuvem','A senha precisa de pelo menos 6 caracteres.');
  NV.set('url',url); NV.set('key',key);
  NV.limpaSessao();          // descarta acesso vencido antes de tentar entrar
  hideErr('#eNuvem');
  try{
    const rota = criar ? '/auth/v1/signup' : '/auth/v1/token?grant_type=password';
    const r = await nvFetch(rota, {method:'POST', body:JSON.stringify({email:mail,password:senha})});
    if(!r || !r.access_token){
      return showErr('#eNuvem', criar
        ? 'Acesso criado. Confirme o e-mail que a Supabase enviou e depois clique em Entrar.'
        : 'Não foi possível entrar. Confira e-mail e senha.');
    }
    guardaSessao(r);
    nvBotoes(); nvStatus('ok','conectado'); avisoBackup();
    await nvSincronizar(true);
  }catch(e){
    const m = (e.message||'').toLowerCase();
    if(m.includes('not confirmed') || m.includes('confirm'))
      showErr('#eNuvem','Este e-mail ainda não foi confirmado. Procure a mensagem da Supabase na caixa de entrada (ou no spam) e clique no link. Depois volte e clique em Entrar.');
    else if(m.includes('invalid login') || m.includes('credentials'))
      showErr('#eNuvem','E-mail ou senha não conferem. Se nunca criou o acesso, use "Criar acesso".');
    else if(m.includes('already registered') || m.includes('already been registered'))
      showErr('#eNuvem','Este e-mail já tem acesso criado. Use "Entrar".');
    else if(m.includes('failed to fetch') || m.includes('networkerror'))
      showErr('#eNuvem','Não consegui falar com a Supabase. Confira a URL do projeto e sua conexão.');
    else showErr('#eNuvem','Falhou: '+e.message);
  }
}
async function nvBaixar(){
  const r = await nvFetch(`/rest/v1/dados_buffon?usuario=eq.${NV.uid}&select=conteudo,atualizado`);
  return (r && r[0]) ? r[0] : null;
}
async function nvEnviar(){
  const agora = new Date().toISOString();
  await nvFetch('/rest/v1/dados_buffon', {method:'POST',
    headers:{'Prefer':'resolution=merge-duplicates'},
    body: JSON.stringify({usuario:NV.uid, conteudo:data, atualizado:agora})});
  NV.set('carimbo', String(Date.parse(agora)));
  localStorage.setItem('perfumes.nv.local', String(Date.parse(agora)));
  return agora;
}
/* Compara o que está aqui com o que está na nuvem e resolve.
   inicial=true significa que acabamos de entrar: nesse caso perguntamos. */
/* Conta tudo, não só vendas: assim dá para ver o que realmente difere. */
function resumoConteudo(d){
  const fotos = (d.products||[]).reduce((s,p)=>s+(p.foto?1:0)+(p.fotoInsp?1:0),0);
  return {
    'produtos': (d.products||[]).length,
    'compras': (d.purchases||[]).length,
    'vendas': (d.sales||[]).length,
    'clientes': (d.clients||[]).length,
    'consignações': (d.consignments||[]).length,
    'despesas': (d.expenses||[]).length,
    'fotos': fotos
  };
}
function comparaConteudo(a, b){
  const ra = resumoConteudo(a), rb = resumoConteudo(b);
  const dif = Object.keys(ra).filter(k=>ra[k]!==rb[k])
    .map(k=>`  ${k}: ${ra[k]} aqui → ${rb[k]} na nuvem`);
  const igual = JSON.stringify(a)===JSON.stringify(b);
  return {dif, igual, tamanho:{aqui:JSON.stringify(a).length, nuvem:JSON.stringify(b).length}};
}
async function nvSincronizar(inicial){
  if(!nvLigado()) return;
  nvStatus('ok','sincronizando…');
  if(!(await nvValida())){
    nvBotoes(); nvStatus('erro','sessão expirada — entre de novo');
    return;
  }
  try{
    const remoto = await nvBaixar();
    const tRemoto = remoto ? Date.parse(remoto.atualizado) : 0;
    const tLocal = NV.carimbo;
    if(remoto && tRemoto > tLocal){
      const c = comparaConteudo(data, remoto.conteudo);
      /* houve alteração aqui que ainda não subiu? aí é conflito de verdade */
      const alteradoAqui = NV.local > tLocal;
      let trocar;
      if(c.igual){
        trocar = true;                                   // conteúdo idêntico: nada a perguntar
      } else if(!alteradoAqui){
        trocar = true;                                   // nada mudou aqui desde a última sincronização
      } else {
        const quando = n => new Date(n).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'});
        trocar = confirm(
          `Os dois lados mudaram desde a última sincronização.\n\n`+
          `Nuvem alterada em ${quando(tRemoto)}\n`+
          `Este aparelho alterado em ${quando(NV.local)}\n\n`+
          (c.dif.length ? `Diferenças:\n${c.dif.join('\n')}\n\n`
                        : `Os totais são iguais, mas há conteúdo diferente (algum campo foi editado).\n\n`)+
          `OK = trazer a versão da NUVEM (o que está neste aparelho será perdido)\n`+
          `Cancelar = manter ESTE APARELHO e sobrescrever a nuvem`);
      }
      if(trocar){
        data = Object.assign({products:[],purchases:[],sales:[],expenses:[],consignments:[]}, remoto.conteudo);
        migra(); localStorage.setItem(KEY, JSON.stringify(data));
        NV.set('carimbo', String(tRemoto));
        localStorage.setItem('perfumes.nv.local', String(tRemoto));
        marcaBackup(); renderAll(); avisoBackup(); nvStatus('ok','atualizado da nuvem');
        return;
      }
    }
    await nvEnviar();
    nvCopiaDoDia();                    // histórico: uma cópia por dia
    if(data.versaoVista && data.versaoVista !== VERSAO) avisaVersao(data.versaoVista);
    data.versaoVista = VERSAO;
    marcaBackup(); avisoBackup();      // sincronizar na nuvem também é um backup
    nvStatus('ok','sincronizado '+new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}));
  }catch(e){
    window.__ultimoErroNuvem = e.message || String(e);
    const caducou = /401|403|JWT|token|expired/i.test(e.message||'');
    if(caducou){ NV.limpaSessao(); nvBotoes(); }
    nvStatus('erro', caducou ? 'sessão expirada — entre de novo' : 'falha ao sincronizar');
  }
}
/* mantém a sessão viva enquanto a página estiver aberta */
setInterval(()=>{ if(NV.tok) nvValida(); }, 20*60*1000);
document.addEventListener('visibilitychange', ()=>{ if(!document.hidden && NV.tok) nvValida(); });

/* ---------------- catálogo público ----------------
   Publica só o que o cliente precisa ver. Custo, lucro, estoque, vendas e
   clientes NUNCA saem daqui. */
function montaPublico(opt){
  const est = {}; estoque().forEach(r=>est[r.produto]=r.saldo+r.consig);
  let itens = data.products.slice();
  if(opt.genero) itens = itens.filter(p=>p.genero===opt.genero);
  if(opt.soFoto) itens = itens.filter(p=>p.foto || p.fotoInsp);
  if(opt.soTester) itens = itens.filter(p=>temProvador(p));
  if(opt.soEstoque) itens = itens.filter(p=>(est[p.nome]||0)>0);
  const bloco = g => itens.filter(p=>p.genero===g).sort((a,b)=>a.nome.localeCompare(b.nome,'pt-BR'));
  return {
    v: 1,
    contato: (opt.contato||'').trim(),
    provadores: (()=>{ const c=contaProvador(itens); return {com:c.com, total:itens.length, todos:c.todos}; })(),
    preco: !!opt.preco,
    emitido: new Date().toISOString(),
    itens: [...bloco('Masculino'), ...bloco('Feminino')].map(p=>({
      nome:p.nome, genero:p.genero, inspiracao:p.inspiracao, marca:p.marcaInsp,
      familia:p.familia, conc:p.concentracao, vol:p.volume,
      topo:p.notasTopo, coracao:p.notasCoracao, fundo:p.notasFundo,
      tester:temProvador(p),
      preco: opt.preco ? Number(p.precoVenda)||0 : null,
      foto:p.foto||'', fotoInsp:p.fotoInsp||''
      /* de propósito de fora: custo, estoque, ideal, id */
    }))
  };
}
/* Fica dentro dos dados, não no navegador: assim o link é o mesmo
   publicando do computador ou do celular. */
const idPublico = () => {
  data.config = data.config || {};
  data.config.catalogoId = 'catalogo';
  return data.config.catalogoId;
};
function linkPublico(id){
  const base = location.origin;
  if(NV_URL_FIXA && NV_KEY_FIXA && NV_URL_FIXA===NV.url && NV_KEY_FIXA===NV.key)
    return base + '/' + id;                       // Retorna o link limpo (ex: /catalogo)
  const ref = (NV.url||'').replace('https://','').replace('.supabase.co','');
  return base + location.pathname + '?p=' + ref + '&k=' + NV.key + '&i=' + id;
}
async function publicaCatalogo(opt){
  const id = idPublico();
  const corpo = montaPublico(opt);
  await nvFetch('/rest/v1/catalogo_buffon', {method:'POST',
    headers:{'Prefer':'resolution=merge-duplicates'},
    body: JSON.stringify({id, usuario:NV.uid, conteudo:corpo, atualizado:new Date().toISOString()})});
  save();                       // guarda o identificador junto com os dados
  return {link: linkPublico(id), n: corpo.itens.length};
}
async function despublicaCatalogo(){
  const id = data.config && data.config.catalogoId;
  if(!id) return;
  await nvFetch(`/rest/v1/catalogo_buffon?id=eq.${id}`, {method:'DELETE'});
  delete data.config.catalogoId; save();
}

/* ---------------- cópias datadas na nuvem ----------------
   A sincronização mantém só a versão atual. Estas cópias guardam o histórico,
   para dar para voltar atrás quando algo for apagado por engano. */
const MAX_COPIAS = 20;
async function nvListaCopias(){
  return await nvFetch(`/rest/v1/copias_buffon?usuario=eq.${NV.uid}&select=id,criado,motivo,resumo&order=criado.desc&limit=${MAX_COPIAS+10}`);
}
async function nvCriaCopia(motivo){
  const resumo = resumoConteudo(data);
  await nvFetch('/rest/v1/copias_buffon', {method:'POST',
    body: JSON.stringify({usuario:NV.uid, motivo:motivo||'automática', resumo, conteudo:data})});
  localStorage.setItem('perfumes.nv.copia', String(Date.now()));
  /* poda as mais antigas para não crescer sem limite */
  try{
    const lista = await nvListaCopias();
    const sobra = (lista||[]).slice(MAX_COPIAS);
    for(const c of sobra) await nvFetch(`/rest/v1/copias_buffon?id=eq.${c.id}`, {method:'DELETE'});
  }catch(e){}
}
/* uma cópia por dia, na primeira sincronização */
async function nvCopiaDoDia(){
  const ult = Number(localStorage.getItem('perfumes.nv.copia')||0);
  const hojeStr = new Date().toDateString();
  if(ult && new Date(ult).toDateString()===hojeStr) return;
  try{ await nvCriaCopia('automática do dia'); }catch(e){}
}
async function nvRestauraCopia(id){
  const r = await nvFetch(`/rest/v1/copias_buffon?id=eq.${id}&select=conteudo,criado`);
  if(!r || !r[0]) throw new Error('cópia não encontrada');
  const c = comparaConteudo(data, r[0].conteudo);
  const quando = new Date(r[0].criado).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'});
  if(!confirm(`Restaurar a cópia de ${quando}?\n\n`+
      (c.dif.length?`Mudanças:\n${c.dif.join('\n')}\n\n`:'Os totais são iguais.\n\n')+
      `Antes de trocar, o sistema guarda uma cópia do estado atual.`)) return false;
  await nvCriaCopia('antes de restaurar');           // rede de segurança
  data = Object.assign({products:[],purchases:[],sales:[],expenses:[],consignments:[],clients:[]}, r[0].conteudo);
  migra(); localStorage.setItem(KEY, JSON.stringify(data));
  await nvEnviar(); marcaBackup(); renderAll(); avisoBackup();
  return true;
}

let tmrNv;
function agendaNuvem(){ if(!nvLigado()) return; clearTimeout(tmrNv); tmrNv=setTimeout(()=>nvSincronizar(false), 3000); }

function nvBotoes(){
  const on = nvLigado();
  $('#nvEntrar').hidden = false;                 // sempre disponível: serve para reconectar
  $('#nvEntrar').textContent = on ? 'Reconectar' : 'Entrar';
  $('#nvCriar').hidden = on;
  $('#nvSync').hidden = !on;  $('#nvSair').hidden = !on;  $('#nvCopias').hidden = !on;
  if(!on){ const lc=$('#nvListaCopias'); if(lc) lc.hidden=true; }
  $('#nuvemAjuda').hidden = on;
  const s=$('#nvSessao');
  if(s){
    if(!on) s.textContent = 'Sem sessão ativa.';
    else if(!NV.exp) s.textContent = 'Sessão antiga, sem validade registrada — clique em Reconectar.';
    else {
      const min = Math.round((NV.exp - Date.now())/60000);
      s.textContent = min>0 ? `Sessão válida por mais ${min} min.` : 'Sessão vencida — clique em Reconectar.';
    }
  }
}
$('#tSug').addEventListener('click', e=>{
  const pr = e.target.closest('[data-sugprod]');
  if(pr){ aplicaFiltros('est', {estProdX:pr.dataset.sugprod}); return goTab('estoque'); }
  const cp = e.target.closest('[data-sugcomp]');
  if(cp) preencheCompra(cp.dataset.sugcomp, Number(cp.dataset.qtd));
});
/* leva para Compras já com o essencial preenchido — falta só o custo */
function preencheCompra(produto, qtde){
  goTab('compras');
  cancCom();
  setTimeout(()=>{
    $('#comData').value = hoje();
    $('#comProd').value = produto;
    $('#comTipo').value = 'Lacrado';
    $('#comQtd').value  = qtde;
    $('#comEnt').value  = 'Não';          /* compra nova costuma vir a caminho */
    const cm = custoMedio(produto);
    if(cm) $('#comCusto').placeholder = `custo médio ${money(cm)} · sugestão ${money(cm*qtde)}`;
    $('#comCusto').value = '';
    $('#comCusto').focus();
    $('#fCom').closest('.card').scrollIntoView({block:'center', behavior:'smooth'});
    flag('verde', `${qtde} × ${produto} preenchido — informe o custo`);
  }, 60);
}
$('#sugHoriz').addEventListener('change', e=>{
  HORIZ = Number(e.target.value);
  try{ localStorage.setItem('perfumes.horiz', String(HORIZ)); }catch(x){}
  renderAll();                       /* estoque e sugestão passam a usar o mesmo alvo */
});
$('#btnVoltar').addEventListener('click', ()=>history.back());
$('#btnNuvem').addEventListener('click', ()=>{
  $('#nvVersao').textContent = VERSAO;
  if(!NV.url && NV_URL_FIXA){ NV.set('url',NV_URL_FIXA); NV.set('key',NV_KEY_FIXA); }
  $('#nvDiag').hidden = true;
  $('#nvUrl').value = NV.url; $('#nvKey').value = NV.key;
  hideErr('#eNuvem'); nvBotoes(); $('#modalNuvem').classList.add('open');
});
$('#nvFechar').addEventListener('click', ()=>$('#modalNuvem').classList.remove('open'));
$('#modalNuvem').addEventListener('click', e=>{ if(e.target.id==='modalNuvem') $('#modalNuvem').classList.remove('open'); });
$('#nvEntrar').addEventListener('click', ()=>nvAutenticar(false));
$('#nvCriar').addEventListener('click', ()=>nvAutenticar(true));
$('#nvSync').addEventListener('click', async ()=>{
  const box=$('#nvDiag'); box.hidden=false;
  const tam = Math.round(JSON.stringify(data).length/1024);
  box.textContent = `Enviando ${tam} KB…`;
  window.__ultimoErroNuvem = '';
  const antes = NV.carimbo;
  await nvSincronizar(false);
  const st = $('#nuvemTxt').textContent;
  const linhas = [`Tamanho enviado: ${tam} KB`, `Situação: ${st}`];
  if(window.__ultimoErroNuvem){
    linhas.push('Detalhe do erro: '+window.__ultimoErroNuvem);
    if(/payload|too large|413/i.test(window.__ultimoErroNuvem))
      linhas.push('→ Os dados passaram do tamanho aceito. As fotos são o que mais pesa.');
    if(/row-level|policy|permission/i.test(window.__ultimoErroNuvem))
      linhas.push('→ As permissões da tabela não estão certas. Rode o comando SQL de novo.');
  } else if(NV.carimbo !== antes || /sincronizado|atualizado/.test(st)){
    linhas.push('✓ Deu certo. Seus dados estão na nuvem.');
  }
  box.textContent = linhas.join('\n');
  nvBotoes();
});
$('#nvSair').addEventListener('click', ()=>{ NV.limpa(); nvBotoes(); nvStatus('','desconectado'); $('#nvDiag').hidden=true; avisoBackup(); });
/* Diagnóstico: testa uma etapa de cada vez e diz onde parou. */
$('#nvTestar').addEventListener('click', async ()=>{
  const box=$('#nvDiag'); box.hidden=false; box.textContent='Testando…';
  const url=$('#nvUrl').value.trim().replace(/\/+$/,''), key=$('#nvKey').value.trim();
  const mail=$('#nvMail').value.trim(), senha=$('#nvSenha').value;
  const L=[]; const ok=s=>L.push('✓ '+s), x=s=>L.push('✗ '+s), i=s=>L.push('• '+s);
  const mostra=()=>box.textContent=L.join('\n');

  L.push('VERSÃO DO SISTEMA: '+VERSAO); 
  if(!/^https:\/\/.+\.supabase\.co$/.test(url)) x('URL fora do padrão. Deve ser https://xxxxx.supabase.co (sem barra no fim).');
  else ok('URL no formato certo.');
  if(key.length<40) x('A chave parece curta demais. Copie a chave "anon public" inteira.');
  else if(!key.startsWith('eyJ')) x('A chave não parece a "anon public" (ela começa com eyJ). Não use a service_role.');
  else ok('Chave no formato certo.');
  mostra();
  if(!url||!key){ L.push('\nPreencha URL e chave para continuar.'); return mostra(); }

  // 1) o projeto responde?
  try{
    const r = await fetch(url+'/auth/v1/settings', {headers:{apikey:key}});
    if(r.status===401){ x('O projeto respondeu, mas recusou a chave. Confira a chave anon public.'); return mostra(); }
    if(!r.ok){ x('O projeto respondeu com erro '+r.status+'.'); return mostra(); }
    const s = await r.json();
    ok('Projeto Supabase respondeu.');
    if(s && s.external && s.external.email===false) x('O login por e-mail está DESLIGADO no projeto (Authentication → Providers → Email).');
    else ok('Login por e-mail habilitado.');
    if(s && s.disable_signup) i('Criação de novas contas está desativada no projeto.');
    mostra();
  }catch(e){ x('Não consegui falar com o projeto. Confira a URL e sua conexão.'); return mostra(); }

  if(!mail||!senha){ L.push('\nPreencha e-mail e senha para testar o login.'); return mostra(); }

  // 2) login
  let tok='';
  try{
    const r = await fetch(url+'/auth/v1/token?grant_type=password',
      {method:'POST', headers:{apikey:key,'Content-Type':'application/json','Authorization':'Bearer '+key},
       body:JSON.stringify({email:mail,password:senha})});
    const c = await r.json().catch(()=>({}));
    if(r.ok && c.access_token){
      tok=c.access_token;
      guardaSessao(c);                 // aproveita a sessão em vez de descartar
      nvBotoes();
      ok('Login funcionou — sessão renovada e guardada.');
    }
    else{
      const m=(c.msg||c.error_description||c.error||'').toLowerCase();
      if(m.includes('confirm')) x('O e-mail ainda NÃO foi confirmado. Procure a mensagem da Supabase (inclusive no spam) e clique no link.');
      else if(m.includes('invalid login')) x('E-mail ou senha não conferem. Se nunca criou, use "Criar acesso".');
      else x('Login recusado ('+r.status+'): '+(c.msg||c.error_description||c.error||'sem detalhe'));
      return mostra();
    }
    mostra();
  }catch(e){ x('Falha de rede no login.'); return mostra(); }

  // 3) a tabela existe e as permissões estão certas?
  try{
    const r = await fetch(url+'/rest/v1/dados_buffon?select=usuario&limit=1',
      {headers:{apikey:key,'Authorization':'Bearer '+tok}});
    if(r.status===404 || r.status===400){ x('A tabela dados_buffon não existe. Rode o comando SQL (botão "Ver o comando SQL").'); return mostra(); }
    if(!r.ok){ const c=await r.json().catch(()=>({})); x('A tabela respondeu erro '+r.status+': '+(c.message||'')); return mostra(); }
    ok('Tabela dados_buffon acessível.');
    try{
      const r2 = await fetch(url+'/rest/v1/copias_buffon?select=id&limit=1',{headers:{apikey:key,'Authorization':'Bearer '+tok}});
      if(r2.ok) ok('Tabela de cópias acessível (histórico ligado).');
      else i('Tabela de cópias ainda não existe — rode o comando SQL de novo para ativar o histórico.');
    }catch(e){ i('Não consegui checar a tabela de cópias.'); }
    const tam = Math.round(JSON.stringify(data).length/1024);
    i('Tamanho dos seus dados: '+tam+' KB'+(tam>4000?' — grande, a sincronização pode falhar por causa das fotos.':''));
    L.push('\nTudo certo. Já está conectado — clique em "Sincronizar agora".');
    mostra();
  }catch(e){ x('Falha ao consultar a tabela.'); mostra(); }
});

async function mostraCopias(){
  const box=$('#nvListaCopias'), tab=$('#tCopias');
  box.hidden=false; tab.innerHTML='<tbody><tr><td class="empty">Carregando…</td></tr></tbody>';
  try{
    const lista = await nvListaCopias();
    if(!lista || !lista.length){
      tab.innerHTML='<tbody><tr><td class="empty">Nenhuma cópia ainda. Clique em "Guardar cópia agora".</td></tr></tbody>';
      return;
    }
    tab.innerHTML = `<thead><tr><th>Quando</th><th>Motivo</th><th class="num">Vendas</th><th class="num">Produtos</th><th class="num">Fotos</th><th></th></tr></thead><tbody>`+
      lista.slice(0,MAX_COPIAS).map(c=>{
        const r=c.resumo||{};
        return `<tr><td>${new Date(c.criado).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'})}</td>
          <td>${esc(c.motivo||'—')}</td><td class="num">${r.vendas??'—'}</td>
          <td class="num">${r.produtos??'—'}</td><td class="num">${r.fotos??'—'}</td>
          <td><button class="btn sm" data-restaura="${c.id}">Restaurar</button></td></tr>`;
      }).join('')+`</tbody>`;
  }catch(e){
    tab.innerHTML=`<tbody><tr><td class="empty">Não consegui listar. Se a tabela de cópias ainda não existe, rode o comando SQL de novo (ele agora cria as duas tabelas).</td></tr></tbody>`;
  }
}
$('#nvCopias').addEventListener('click', mostraCopias);
$('#nvNovaCopia').addEventListener('click', async ()=>{
  const b=$('#nvNovaCopia'); b.disabled=true; b.textContent='Guardando…';
  try{ await nvCriaCopia('manual'); await mostraCopias(); }
  catch(e){ alert('Não consegui guardar a cópia: '+e.message); }
  b.disabled=false; b.textContent='Guardar cópia agora';
});
$('#tCopias').addEventListener('click', async e=>{
  const b=e.target.closest('[data-restaura]'); if(!b) return;
  b.disabled=true;
  try{ if(await nvRestauraCopia(b.dataset.restaura)){ alert('Cópia restaurada.'); await mostraCopias(); } }
  catch(err){ alert('Falha ao restaurar: '+err.message); }
  b.disabled=false;
});

$('#verSQL').addEventListener('click', ()=>{ const b=$('#blocoSQL'); b.textContent=SQL_NUVEM; b.hidden=!b.hidden; });
$('#copiaSQL').addEventListener('click', async ()=>{
  const b=$('#copiaSQL');
  try{ await navigator.clipboard.writeText(SQL_NUVEM); b.textContent='Copiado!'; }
  catch(e){ const t=$('#blocoSQL'); t.textContent=SQL_NUVEM; t.hidden=false;
    const r=document.createRange(); r.selectNodeContents(t);
    const s=getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent='Selecionado — Ctrl+C'; }
  setTimeout(()=>b.textContent='Copiar comando', 2500);
});

/* ---------------- backup automático em arquivo ----------------
   Grava uma cópia real no disco a cada alteração, na pasta que você escolher.
   Guardamos a permissão do arquivo no IndexedDB, porque ela não cabe no
   armazenamento comum. Só funciona em Chrome e Edge. */
const SUPORTA_FS = typeof window.showSaveFilePicker === 'function';
const KEY_ULT = 'perfumes.ultimoBackup';
let arqBackup = null;      // FileSystemFileHandle
let autoLigado = false;

function idb(){
  return new Promise((res,rej)=>{
    const r = indexedDB.open('perfumes-backup', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('h');
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function guardaHandle(hd){
  const db = await idb();
  return new Promise(res=>{ const t=db.transaction('h','readwrite');
    t.objectStore('h').put(hd,'arquivo'); t.oncomplete=()=>res(); });
}
async function leHandle(){
  try{ const db = await idb();
    return await new Promise(res=>{ const t=db.transaction('h','readonly');
      const q=t.objectStore('h').get('arquivo'); q.onsuccess=()=>res(q.result||null); q.onerror=()=>res(null); });
  }catch(e){ return null; }
}
async function apagaHandle(){
  try{ const db = await idb();
    await new Promise(res=>{ const t=db.transaction('h','readwrite');
      t.objectStore('h').delete('arquivo'); t.oncomplete=()=>res(); });
  }catch(e){}
}
const marcaBackup = () => { try{ localStorage.setItem(KEY_ULT, String(Date.now())); }catch(e){} };
const ultimoBackup = () => { const v = Number(localStorage.getItem(KEY_ULT)||0); return v||0; };

function statusAuto(estado, texto){
  const el=$('#autoStat'); el.hidden=false;
  el.className = 'autostat ' + estado;
  $('#autoTxt').textContent = texto;
  $('#btnAuto').textContent = estado==='ativo' ? 'Desligar backup automático'
    : estado==='pendente' ? 'Reativar backup automático' : 'Backup automático';
}
async function gravaArquivo(){
  if(!arqBackup || !autoLigado) return;
  try{
    const w = await arqBackup.createWritable();
    await w.write(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
    await w.close();
    marcaBackup(); avisoBackup();
    statusAuto('ativo','backup automático · salvo '+new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}));
  }catch(e){
    autoLigado=false;
    statusAuto('pendente','backup automático interrompido');
  }
}
let tmrArq;
function agendaGravacao(){ clearTimeout(tmrArq); tmrArq=setTimeout(gravaArquivo, 1500); }

async function ligaAuto(){
  if(!SUPORTA_FS) return alert('Este navegador não permite gravar direto em arquivo.\n\nUse o Chrome ou o Edge para ativar o backup automático. Nos demais, continue usando o botão "Baixar backup".');
  if(autoLigado){
    autoLigado=false; arqBackup=null; await apagaHandle();
    statusAuto('','backup automático desligado'); return;
  }
  try{
    if(!arqBackup){
      arqBackup = await window.showSaveFilePicker({
        suggestedName: 'buffon-backup.json',
        types:[{description:'Backup Buffon', accept:{'application/json':['.json']}}]
      });
      await guardaHandle(arqBackup);
    } else {
      const perm = await arqBackup.requestPermission({mode:'readwrite'});
      if(perm!=='granted') return;
    }
    autoLigado = true;
    await gravaArquivo();
    alert('Backup automático ativado.\n\nA cada lançamento o sistema grava uma cópia nesse arquivo. Se ele estiver numa pasta do Google Drive ou OneDrive, você ganha também o histórico de versões da nuvem.');
  }catch(e){ /* usuário cancelou a janela */ }
}
async function retomaAuto(){
  if(!SUPORTA_FS){ $('#btnAuto').hidden = true; return; }
  const hd = await leHandle();
  if(!hd){ statusAuto('','backup automático desligado'); return; }
  arqBackup = hd;
  const perm = await hd.queryPermission({mode:'readwrite'});
  if(perm==='granted'){ autoLigado=true; statusAuto('ativo','backup automático ativo'); gravaArquivo(); }
  else statusAuto('pendente','backup automático precisa ser reativado');
}
$('#btnAuto').addEventListener('click', ligaAuto);

/* ---------------- aviso de backup vencido ---------------- */
/* Se este aparelho abrir uma versão mais antiga do que a última usada,
   avisa — quase sempre é cache do navegador. */
function avisaVersao(anterior){
  const el = $('#avisoBackup');
  el.className = 'on ambar';
  el.innerHTML = `<span><b>Este aparelho está na versão ${esc(VERSAO)}</b>, mas a última usada foi ${esc(anterior)}.`
    + ` Se faltar algo na tela, é o navegador servindo uma cópia antiga.</span>`
    + `<span class="sep"></span><button class="btn sm primary" id="recarrega">Recarregar do zero</button>`;
  $('#recarrega').addEventListener('click', ()=>location.reload(true));
}
function avisoBackup(){
  const el = $('#avisoBackup');
  const limpa = ()=>{ el.className=''; el.innerHTML=''; };
  /* proteção ativa: arquivo automático OU nuvem conectada */
  if(primeiroUso()) return;
  if(autoLigado) return limpa();
  if(nvLigado()){
    const desdeNuvem = NV.carimbo ? Math.floor((Date.now()-NV.carimbo)/86400000) : null;
    if(desdeNuvem===null || desdeNuvem < 7) return limpa();
    el.className = 'on ambar';
    el.innerHTML = `<span><b>A nuvem não recebe seus dados há ${desdeNuvem} ${plural(desdeNuvem,'dia','dias')}.</b> Sincronize para não ficar desatualizado.</span>`
      + `<span class="sep"></span><button class="btn sm primary" id="avisoSync">Sincronizar agora</button>`;
    $('#avisoSync').addEventListener('click', ()=>nvSincronizar(false));
    return;
  }
  const ult = ultimoBackup();
  const dias = ult ? Math.floor((Date.now()-ult)/86400000) : null;
  if(dias!==null && dias < 7) return limpa();
  const grave = dias===null || dias>=21;
  el.className = 'on ' + (grave?'alerta':'ambar');
  el.innerHTML = (dias===null
      ? `<span><b>Seus dados existem em um lugar só.</b> Se este navegador for limpo, tudo se perde.</span>`
      : `<span><b>Último backup há ${dias} ${plural(dias,'dia','dias')}.</b> Vale gerar uma cópia agora.</span>`)
    + `<span class="sep"></span>`
    + `<button class="btn sm primary" id="avisoNuvem">Ligar a nuvem</button>`
    + (SUPORTA_FS?`<button class="btn sm" id="avisoAuto">Backup automático</button>`:'')
    + `<button class="btn sm" id="avisoBaixar">Baixar backup</button>`;
  const n=$('#avisoNuvem'); if(n) n.addEventListener('click', ()=>$('#btnNuvem').click());
  const a=$('#avisoAuto'); if(a) a.addEventListener('click', ligaAuto);
  $('#avisoBaixar').addEventListener('click', ()=>$('#btnExport').click());
}

/* ---------------- backup ---------------- */
function carimbo(){
  const d=new Date(), p=n=>String(n).padStart(2,'0');
  return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}_${p(d.getHours())}h${p(d.getMinutes())}m${p(d.getSeconds())}`;
}
$('#btnExport').addEventListener('click',()=>{
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`buffon-backup-${carimbo()}.json`;
  a.click(); URL.revokeObjectURL(a.href);
  marcaBackup(); avisoBackup();
});
$('#btnImport').addEventListener('click',()=>$('#fileImport').click());
$('#fileImport').addEventListener('change',e=>{
  const f=e.target.files[0]; if(!f) return;
  const rd=new FileReader();
  rd.onload=()=>{
    try{
      const p=JSON.parse(rd.result);
      if(!p.products||!p.sales) throw new Error('formato');
      if(!confirm('Restaurar este backup substitui todos os dados atuais. Continuar?')) return;
      data=Object.assign({products:[],purchases:[],sales:[],expenses:[],consignments:[]},p);
      migra(); save(); renderAll();
    }catch(err){ alert('Arquivo inválido. Selecione um backup gerado por este sistema.'); }
  };
  rd.readAsText(f); e.target.value='';
});

/* ---------------- modo vitrine (link público) ---------------- */
async function abreVitrine(cfg){
  document.body.classList.add('publico');
  const box = $('#vitrine'); box.classList.add('on');
  box.innerHTML = `<div class="carregando">Carregando catálogo…</div>`;
  const q = new URLSearchParams(location.search);
  let c;
  if(q.get('p')){                                    // formato compacto
    c = {u:'https://'+q.get('p')+'.supabase.co', k:q.get('k'), i:q.get('i')};
  } else if(cfg && (cfg.startsWith('cat_') || cfg === 'catalogo')){          // formato curto
    c = {u:NV_URL_FIXA, k:NV_KEY_FIXA, i:cfg};
  } else {
    try{ c = JSON.parse(decodeURIComponent(escape(atob(cfg)))); }
    catch(e){ box.innerHTML = `<div class="carregando">Link inválido.</div>`; return; }
  }
  if(!c.u || !c.k){ box.innerHTML = `<div class="carregando">Link incompleto.</div>`; return; }
  try{
    const r = await fetch(`${c.u}/rest/v1/catalogo_buffon?id=eq.${encodeURIComponent(c.i)}&select=conteudo,atualizado`,
      {headers:{apikey:c.k, 'Authorization':'Bearer '+c.k}});
    const j = await r.json();
    if(!r.ok || !j || !j[0]) throw new Error('fora do ar');
    desenhaVitrine(j[0].conteudo, c);
  }catch(e){
    box.innerHTML = `<div class="carregando">Este catálogo não está mais disponível.<br>Peça um link novo.</div>`;
  }
}
function desenhaVitrine(c, auth){
  window.vitrineContato = c.contato || '';
  const itens = c.itens||[];
  const zapNum = (c.contato||'').replace(/\D/g,'');
  const zapLink = t => zapNum ? `https://wa.me/${zapNum.length<=11?'55'+zapNum:zapNum}?text=${encodeURIComponent(t)}` : '';
  const foto = (src, alt, isRef) => src ? `<div style="position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center;"><img src="${src}" alt="${esc(alt)}">${isRef ? '<div style="position:absolute; left:0; right:0; bottom:6px; text-align:center; font-size:8px; color:var(--ink); opacity:0.65; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; line-height:1.1; white-space:nowrap;">Referência Olfativa</div>' : ''}</div>` : `<div><span class="vazio">sem foto</span></div>`;
  const card = p => `<div class="item" data-g="${p.genero}">
    <div class="fotos">${foto(p.foto,p.nome, false)}${p.fotoInsp?foto(p.fotoInsp,p.inspiracao||'', true):''}</div>
    <div class="txt">
      <h3>${esc(p.nome)}</h3>
      <div class="sub">${[p.conc,p.vol,p.familia].filter(Boolean).map(esc).join(' · ')}</div>
      ${p.inspiracao?`<div class="insp">Inspirado em <b>${esc(p.inspiracao)}</b>${p.marca?` · ${esc(p.marca)}`:''}</div>`:''}
      ${(p.topo||p.coracao||p.fundo)?`<div class="notas">
        ${p.topo?`<b>Topo</b> ${esc(p.topo)}<br>`:''}
        ${p.coracao?`<b>Coração</b> ${esc(p.coracao)}<br>`:''}
        ${p.fundo?`<b>Fundo</b> ${esc(p.fundo)}`:''}</div>`:''}
      <div class="rodape">
        ${p.preco?`<span class="preco">${money(p.preco)}</span>`:'<span></span>'}
        ${p.tester?'<span class="badge roxo">tem provador</span>':''}
      </div>
      <div class="cart-item-wrap" data-nome="${esc(p.nome)}">
        ${cart[p.nome] ? `<div class="qtd-ctrl"><button class="qtd-btn" onclick="window.updateItemQtd(this.closest('.cart-item-wrap').dataset.nome, -1)">-</button><span class="qtd-num">${cart[p.nome].qtd}</span><button class="qtd-btn" onclick="window.updateItemQtd(this.closest('.cart-item-wrap').dataset.nome, 1)">+</button></div>` : `<button class="vitrine-add" onclick="window.updateItemQtd(this.closest('.cart-item-wrap').dataset.nome, 1)">Adicionar ao carrinho</button>`}
      </div>
    </div></div>`;
    
  const pdfUrl = auth ? `${auth.u}/storage/v1/object/public/catalogos/${auth.i}.pdf?download=Catalogo_Buffon_Fragrancias.pdf` : '#';

  $('#vitrine').innerHTML = `
    <div class="topo">
      ${logoImg(LOGO_M)}
      <div class="rive">LA RIVE</div>
      <p>As melhores inspirações da perfumaria internacional.</p>
    </div>
    <div class="filtros">
      <button class="fbtn on" data-f="">Todas (${itens.length})</button>
      <button class="fbtn" data-f="Masculino">Masculinas (${itens.filter(p=>p.genero==='Masculino').length})</button>
      <button class="fbtn" data-f="Feminino">Femininas (${itens.filter(p=>p.genero==='Feminino').length})</button>
    </div>
    <div class="grade">${itens.map(card).join('')}</div>

    <div style="margin: 3rem auto 1rem; max-width: 700px; padding: 2rem; background: var(--paper); border-radius: 12px; border: 1px solid var(--line); text-align: left;">
      <h3 style="font-family: 'Fraunces', serif; font-size: 22px; color: var(--ink); margin-bottom: 12px;">O ABC da Perfumaria</h3>
      <p style="font-size: 14px; color: var(--ink-soft); margin-bottom: 24px; line-height: 1.6;">Você tem certeza de que sabe como aplicar perfume para que as notas da fragrância se desenvolvam corretamente na sua pele?</p>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px; color: var(--ink-soft); line-height: 1.6;">
        <li style="margin-bottom: 12px; display: flex; gap: 10px;"><span style="color: #D4AF37; font-weight: bold;">✓</span> Aplique o perfume na pele limpa, lavada e seca.</li>
        <li style="margin-bottom: 12px; display: flex; gap: 10px;"><span style="color: #D4AF37; font-weight: bold;">✓</span> Não esfregue o perfume no corpo.</li>
        <li style="margin-bottom: 12px; display: flex; gap: 10px;"><span style="color: #D4AF37; font-weight: bold;">✓</span> Perfume as áreas de maior circulação sanguínea – a parte interna dos pulsos, dobras dos cotovelos e joelhos, e o pescoço.</li>
        <li style="margin-bottom: 12px; display: flex; gap: 10px;"><span style="color: #D4AF37; font-weight: bold;">✓</span> Lembre-se de que uma fragrância muito intensa pode incomodar as pessoas ao seu redor.</li>
        <li style="display: flex; gap: 10px;"><span style="color: #D4AF37; font-weight: bold;">✓</span> Evite aplicar perfume nas roupas, pois pode ser difícil remover a fragrância depois.</li>
      </ul>
    </div>
    <div class="pe">
      <div>Disponibilidade sujeita a estoque — consulte antes de fechar o pedido.</div>
      <div>Atualizado em ${new Date(c.emitido).toLocaleDateString('pt-BR')}</div>
      ${(c.contato && !zapNum)?`<div class="contato">${ICO_ZAP(15,'#1F7A44')}<span>${esc(c.contato)}</span></div>`:''}
      ${zapNum?`<a class="zap" href="${zapLink('Oi! Vi o catálogo da Buffon Fragrâncias e queria mais informações.')}" target="_blank">${ICO_ZAP(17,'#fff')} Falar no WhatsApp</a>`:''}
      <a class="btnpdf" id="vitPdf" href="${pdfUrl}" target="_blank" download="Catalogo_Buffon_Fragrancias.pdf" style="display:inline-block; text-decoration:none; text-align:center;">Baixar catálogo em PDF</a>
    </div>`;

  $('#vitrine').addEventListener('click', e=>{
    const b=e.target.closest('.fbtn'); if(!b) return;
    document.querySelectorAll('#vitrine .fbtn').forEach(x=>x.classList.toggle('on', x===b));
    const f=b.dataset.f;
    document.querySelectorAll('#vitrine .item').forEach(it=>{
      it.style.display = (!f || it.dataset.g===f) ? '' : 'none'; });
  });
}


// Inicialização do sistema
document.addEventListener('DOMContentLoaded', async () => {
  await atualizarTaxaSelic(); // Garante a taxa Selic antes de renderizar a tela inicial
  
  const qs = new URLSearchParams(location.search);
  let paramC = qs.get('c') || (qs.get('p') ? 'compacto' : null);
  
  if (!paramC && location.pathname.length > 1) {
    paramC = location.pathname.substring(1);
  }

  if(paramC){ 
    abreVitrine(paramC); 
  } else {
    load();
    { const sel = $('#sugHoriz'); if(sel) sel.value = String(HORIZ); }
    renderAll();
    if($('#comData')) $('#comData').value = hoje(); 
    if($('#venData')) $('#venData').value = hoje(); 
    if($('#desData')) $('#desData').value = hoje();
    history.replaceState({tab:'dashboard', fil:{...fil}, n:0}, '', location.pathname + location.search);
    atualizaVoltar();
    if(typeof retomaAuto === 'function') retomaAuto().then(avisoBackup);
    if(typeof nvBotoes === 'function') nvBotoes();
    if(typeof nvLigado === 'function' && nvLigado()){ 
      nvStatus('ok','conectado'); 
      if(typeof nvRenovar === 'function') nvRenovar().finally(()=>nvSincronizar(true)); 
    } else if(typeof nvStatus === 'function') {
      nvStatus('','');
    }
  }
});

function toast(mensagem, tipo = 'sucesso') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const t = document.createElement('div');
  t.className = `toast ${tipo}`;
  t.textContent = mensagem;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function aplicarLabelsMobile() {
  document.querySelectorAll('.twrap table').forEach(tabela => {
    const headers = Array.from(tabela.querySelectorAll('th')).map(th => th.textContent.replace(/[▲▼↕]/g, '').trim());
    tabela.querySelectorAll('tbody tr, tfoot tr').forEach(tr => {
      let colIndex = 0;
      Array.from(tr.children).forEach((td) => {
        let span = parseInt(td.getAttribute('colspan') || '1', 10);
        if (headers[colIndex] && span === 1) {
          td.setAttribute('data-label', headers[colIndex]);
        }
        colIndex += span;
      });
    });
  });
}


/* ---------- Carrinho Vitrine ---------- */
let cart = {}; // { 'Nome do Perfume': { qtd } }
window.vitrineContato = ''; // Guardará o contato quando a vitrine for desenhada

window.updateItemQtd = (nome, delta) => {
    if (!cart[nome]) cart[nome] = { qtd: 0 };
    cart[nome].qtd += delta;
    if (cart[nome].qtd <= 0) delete cart[nome];
    updateCartUI();
};

window.clearCart = () => {
    if (confirm('Tem certeza que deseja esvaziar o carrinho?')) {
        cart = {};
        updateCartUI();
    }
};

function updateCartUI() {
    const totalItems = Object.values(cart).reduce((a,b)=>a+b.qtd, 0);
    const wrap = document.getElementById('cartFloatWrap');
    if(wrap) {
        if(totalItems > 0) {
            wrap.classList.add('show');
            document.getElementById('cartCount').textContent = totalItems;
        } else {
            wrap.classList.remove('show');
        }
    }
    
    // Atualiza os cartões dinamicamente
    document.querySelectorAll('.cart-item-wrap').forEach(el => {
        const nome = el.dataset.nome;
        const item = cart[nome];
        if (item && item.qtd > 0) {
            el.innerHTML = `
                <div class="qtd-ctrl">
                    <button class="qtd-btn" onclick="window.updateItemQtd(this.closest('.cart-item-wrap').dataset.nome, -1)">-</button>
                    <span class="qtd-num">${item.qtd}</span>
                    <button class="qtd-btn" onclick="window.updateItemQtd(this.closest('.cart-item-wrap').dataset.nome, 1)">+</button>
                </div>`;
        } else {
            el.innerHTML = `<button class="vitrine-add" onclick="window.updateItemQtd(this.closest('.cart-item-wrap').dataset.nome, 1)">Adicionar ao carrinho</button>`;
        }
    });
}

const cartFloatBtn = document.getElementById('cartFloatBtn');
if(cartFloatBtn) {
    cartFloatBtn.addEventListener('click', () => {
        const contato = window.vitrineContato || (data.config && data.config.contato ? data.config.contato : '');
        const num = (contato || '').replace(/\D/g,'');
        if(!num) {
            alert('O catálogo ainda não tem um número de WhatsApp configurado pelo vendedor.');
            return;
        }
        
        let texto = "Olá! Dei uma olhada no seu catálogo e gostaria de encomendar:\n\n";
        for(let nome in cart) {
            const item = cart[nome];
            texto += `• ${item.qtd}x ${nome}\n`;
        }
        texto += `\nComo podemos combinar a entrega e o pagamento?`;
        
        const zapLink = `https://wa.me/55${num}?text=${encodeURIComponent(texto)}`;
        window.open(zapLink, '_blank');
        cart = {}; // Limpa carrinho após enviar
        updateCartUI();
    });
}
const cartClearBtn = document.getElementById('cartClear');
if(cartClearBtn) {
    cartClearBtn.addEventListener('click', window.clearCart);
}

/* ---------- Gráficos ---------- */
let myChartFin = null;
let myChartGen = null;
function renderCharts(){
  if(typeof Chart === 'undefined') return;
  const ctxFin = document.getElementById('chartFin');
  const ctxGen = document.getElementById('chartGen');
  if(!ctxFin || !ctxGen) return;

  // 1. Gráfico de Faturamento vs Lucro (Últimos 6 meses)
  const mesesSet = new Set();
  const vpm = {};
  data.sales.filter(v=>v.data).forEach(v=>{
    const k=v.data.slice(0,7); 
    mesesSet.add(k);
    if(!vpm[k]) vpm[k]={f:0,l:0}; 
    vpm[k].f+=Number(v.valorVenda); 
    vpm[k].l+=calcVenda(v).lucro; 
  });
  const meses = [...mesesSet].sort().slice(-6); // Últimos 6 meses
  const labelsMeses = meses.map(rotuloMes);
  const dataFat = meses.map(m => vpm[m].f);
  const dataLucro = meses.map(m => vpm[m].l);

  if(myChartFin) myChartFin.destroy();
  myChartFin = new Chart(ctxFin, {
    type: 'bar',
    data: {
      labels: labelsMeses,
      datasets: [
        { label: 'Faturamento', data: dataFat, backgroundColor: '#0B63CE', borderRadius: 4 },
        { label: 'Lucro Bruto', data: dataLucro, backgroundColor: '#04703C', borderRadius: 4 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: { y: { beginAtZero: true, ticks: { callback: function(value) { return 'R$ ' + value.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}); } } } },
      plugins: { 
        legend: { position: 'bottom' },
        tooltip: { callbacks: { label: function(context) { return context.dataset.label + ': R$ ' + context.raw.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}); } } }
      }
    }
  });

  // 2. Gráfico de Vendas por Gênero (Geral)
  let mCount = 0, fCount = 0;
  data.sales.forEach(v => {
    const g = gen(v.produto);
    if(g === 'Masculino') mCount += Number(v.qtde);
    else if(g === 'Feminino') fCount += Number(v.qtde);
  });

  if(myChartGen) myChartGen.destroy();
  myChartGen = new Chart(ctxGen, {
    type: 'doughnut',
    data: {
      labels: ['Masculino', 'Feminino'],
      datasets: [{
        data: [mCount, fCount],
        backgroundColor: ['#0B63CE', '#B00966'],
        borderWidth: 2, borderColor: '#fff'
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
      cutout: '65%'
    }
  });

  // 3. Gráfico de Canais de Venda (Rosca)
  const ctxCanal = document.getElementById('chartCanal');
  if(ctxCanal) {
      const canaisData = {};
      data.sales.forEach(v => {
          const canal = canalDe(v);
          canaisData[canal] = (canaisData[canal] || 0) + Number(v.valorVenda);
      });
      
      const sortedCanais = Object.entries(canaisData).sort((a,b) => b[1] - a[1]);
      const labelsCanais = sortedCanais.map(c => c[0]);
      const valoresCanais = sortedCanais.map(c => c[1]);
      const coresCanais = ['#6E28D9', '#0B63CE', '#04703C', '#B00966', '#8F5A02', '#496B00'];

      if(window.myChartCanal) window.myChartCanal.destroy();
      window.myChartCanal = new Chart(ctxCanal, {
        type: 'doughnut',
        data: {
          labels: labelsCanais,
          datasets: [{
            data: valoresCanais,
            backgroundColor: coresCanais.slice(0, labelsCanais.length),
            borderWidth: 2, borderColor: '#fff'
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { 
            legend: { position: 'right' },
            tooltip: { callbacks: { label: function(context) { return 'R$ ' + context.raw.toLocaleString('pt-BR', {minimumFractionDigits:2}); } } }
          },
          cutout: '65%'
        }
      });
  }
}



document.addEventListener('DOMContentLoaded', () => {
  const btnUp = document.getElementById('btnScrollUp');
  const btnDown = document.getElementById('btnScrollDown');
  if(btnUp && btnDown) {
    btnUp.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    btnDown.addEventListener('click', () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
    
    // Hide 'Up' when at top, hide 'Down' when at bottom
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      btnUp.style.display = scrollPos > 100 ? 'flex' : 'none';
      btnDown.style.display = scrollPos < maxScroll - 100 ? 'flex' : 'none';
    });
    
    // Check periodically in case DOM changes height dynamically
    setInterval(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 1000);
  }
});


/* ---------------- Registrando o PWA (Service Worker) ---------------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registrado com sucesso!', reg))
      .catch(err => console.log('Falha ao registrar o Service Worker', err));
  });
}
