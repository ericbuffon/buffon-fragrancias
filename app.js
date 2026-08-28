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
  prodGen:'',prodFoto:'',prodQ:'',prodTester:'',
  comGen:'',comTipo:'',comEnt:'',comDe:'',comAte:'',comQ:'',comProdX:'',
  venGen:'',venStat:'',venEnt:'',venDe:'',venAte:'',venQ:'',venCanal:'',venProdX:'',
  estGen:'',estStat:'',estQ:'',estProdX:'',estClasseAbc:'',
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
  const cu = custoMedio(v.produto), custo = v.qtde*cu, lucro = v.valorVenda-custo;
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
    return {produto:p.nome,genero:p.genero,recebido,caminho,vendido,aEntregar,consig,saldo,previsto,
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
  prod:{campos:['prodGen','prodFoto','prodQ','prodTester'], els:{prodGen:'#filProdGen',prodFoto:'#filProdFoto',prodQ:'#filProdBusca',prodTester:'#filProdTester'}, render:()=>renderProd()},
  com:{campos:['comGen','comTipo','comEnt','comDe','comAte','comQ','comProdX'], els:{comGen:'#filComGen',comTipo:'#filComTipo',comEnt:'#filComEnt',comDe:'#filComDe',comAte:'#filComAte',comQ:'#filComBusca'}, render:()=>renderCom()},
  ven:{campos:['venGen','venStat','venEnt','venDe','venAte','venQ','venCanal','venProdX'], els:{venGen:'#filVenGen',venStat:'#filVenStat',venEnt:'#filVenEnt',venDe:'#filVenDe',venAte:'#filVenAte',venQ:'#filVenBusca',venCanal:'#filVenCanal'}, render:()=>renderVen()},
  est:{campos:['estGen','estStat','estQ','estProdX','estClasseAbc'], els:{estGen:'#filEstGen',estStat:'#filEstStat',estQ:'#filEstBusca'}, render:()=>renderEst()},
  con:{campos:['conParc','conTipo','conSit','conDe','conAte','conQ','conProdX'], els:{conParc:'#filConParc',conTipo:'#filConTipo',conSit:'#filConSit',conDe:'#filConDe',conAte:'#filConAte',conQ:'#filConBusca'}, render:()=>renderCon()},
  can:{campos:['canSit','canDe','canAte','canQ'], els:{canSit:'#filCanSit',canDe:'#filCanDe',canAte:'#filCanAte',canQ:'#filCanBusca'}, render:()=>renderCanal()},
  cli:{campos:['cliSit','cliQ'], els:{cliSit:'#filCliSit',cliQ:'#filCliBusca'}, render:()=>renderCli()},
  tes:{campos:['tesGen','tesQ'], els:{tesGen:'#filTesGen',tesQ:'#filTesBusca'}, render:()=>renderTes()},
  des:{campos:['desDe','desAte','desQ'], els:{desDe:'#filDesDe',desAte:'#filDesAte',desQ:'#filDesBusca'}, render:()=>renderDes()}
};
function limpaFiltros(g){
  setTimeout(guardaFiltros,0);
  const G = GRUPOS[g]; if(!G) return;
  G.campos.forEach(c=>{ fil[c]=''; const el=$(G.els[c]); if(el) el.value=''; });
  G.render();
}
function aplicaFiltros(g, vals){
  setTimeout(guardaFiltros,0);
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
document.addEventListener('mouseover', e=>{
  if(matchMedia('(hover:none)').matches) return;      // celular: só no toque
  const el = e.target.closest('[data-dica]');
  if(el) mostraBalao(el); else if(!e.target.closest('#balao')) escondeBalao();
});
window.addEventListener('scroll', escondeBalao, true);
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
    return `Oi! Esse é o catálogo da *Buffon Fragrâncias* — perfumes La Rive.\n`
      + `Dá para ver as fotos e as notas de cada fragrância aqui:\n${linkPublico(id)}\n\n`
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
  return `*Buffon Fragrâncias* — perfumes La Rive\n`
    + `Fragrâncias inspiradas nos grandes lançamentos da perfumaria.\n${corpo}\n`
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
  const itens = r.vendas.filter(v=>v.status==='Pendente' && v.entregue==='Sim')
    .map(v=>`• ${v.qtde}x ${v.produto} — ${money(v.valorVenda)}`).join('\n');
  return `Oi, ${cli.nome.split(' ')[0]}! Tudo bem?\n\n`
    + `Passando para lembrar do pedido da Buffon Fragrâncias:\n${itens}\n\n`
    + `Total: ${money(r.emAberto)}\n\nQualquer coisa é só me chamar. Obrigado!`;
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
    ? `<thead><tr><th>Data</th><th>Produto</th><th class="num">Qtde</th><th class="num">Valor</th><th class="ctr">Pagamento</th><th class="ctr">Entrega</th></tr></thead><tbody>`+
      vs.map(v=>`<tr><td>${dt(v.data)}</td><td>${esc(v.produto)}</td><td class="num">${v.qtde}</td>
        <td class="num">${money(v.valorVenda)}</td><td class="ctr">${bPag(v.status)}</td><td class="ctr">${bEntV(v.entregue)}</td></tr>`).join('')+`</tbody>`
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
  $('#kpi1').innerHTML = [
    kpi('Vendas totais',money(vendas),'azul',`Recebido ${money(recebido)}`,
      `Soma de todas as vendas lançadas (${data.sales.length} ${plural(data.sales.length,'item','itens')}).\n`
      +`Recebido ${money(recebido)} + a receber ${money(aReceber)} = ${money(vendas)}`,
      {t:'vendas', g:'ven'}),
    kpi('A receber',money(aReceber),aReceber>0?'ambar':'verde',`${data.sales.filter(v=>v.status==='Pendente').length} em aberto`,
      `Tudo que está marcado como Pendente, entregue ou não.`,
      {t:'vendas', g:'ven', f:{venStat:'Pendente'}}),
    kpi('A receber entregue',money(inad.reduce((s,c)=>s+c.valor,0)),inad.length?'vermelho':'verde',`${inad.length} ${plural(inad.length,'responsável','responsáveis')}`,
      `Só o que já saiu da sua mão e não foi pago — o dinheiro realmente na rua.\n`
      +`Do total a receber (${money(aReceber)}), ${money(aReceber-inad.reduce((s,c)=>s+c.valor,0))} ainda nem foi entregue.`,
      {t:'vendas', g:'ven', f:{venStat:'Pendente', venEnt:'Sim'}}),
    kpi('Lucro bruto',money(lucro),'verde',`Margem ${pct(margem)}`,
      `Para cada venda: valor da venda − (custo médio do produto × quantidade).\n`
      +`Margem = lucro ÷ vendas = ${money(lucro)} ÷ ${money(vendas)} = ${pct(margem)}\n`
      +`Não desconta as despesas operacionais (${money(desp)}).`,
      {t:'vendas', g:'ven'}),
    kpi('ROI',pct(roi),roi>=0?'verde':'vermelho',`Investimento ${money0(invest)}`,
      `Retorno sobre o investimento.\n`
      +`(lucro − despesas) ÷ investimento\n`
      +`(${money(lucro)} − ${money(desp)}) ÷ ${money(invest)} = ${pct(roi)}\n`
      +`Investimento = ${money(invCompras)} em compras + ${money(desp)} em despesas`,
      {t:'compras', g:'com'})].join('');
  $('#kpi2').innerHTML = [
    kpi('Estoque em mãos',unEst+' un','azul',`${money(valEst)} com o consignado`,
      `Unidades fisicamente com você: recebido − vendido e entregue − consignado.\n`
      +`O valor ${money(valEst)} inclui o que está no parceiro, porque continua sendo seu.`,
      {t:'estoque', g:'est'}),
    kpi('Lucro potencial',money(lucroPot),'verde','estoque próprio',
      `Se você vender todo o estoque pelo preço cadastrado:\n`
      +`(em mãos + consignado) × preço − custo do estoque\n`
      +`= ${money(lucroPot)}`, {t:'estoque', g:'est'}),
    kpi('Consignado',conAtivo.reduce((s,c)=>s+saldoCon(c),0)+' un',conAtivo.length?'terra':'verde',
      `${[...new Set(conAtivo.map(c=>c.parceiro))].length} ${plural([...new Set(conAtivo.map(c=>c.parceiro))].length,'parceiro','parceiros')}`,
      'Unidades que estão com parceiros e ainda não foram vendidas nem devolvidas.\nContinuam sendo suas, mas não estão na prateleira.',
      {t:'consignado', g:'con', f:{conSit:'Em consignação'}}),
    kpi('Compras a caminho',un(cam)+' un',cam.length?'ambar':'verde',
      `${un(camLac)} lacrado${un(camLac)===1?'':'s'} · ${un(camTes)} tester${un(camTes)===1?'':'s'} · ${money(vl(cam))}`,
      `Compras lançadas e ainda não marcadas como recebidas.\n`
      +`Já saiu do seu bolso, mas ainda não entrou no estoque em mãos.\n\n`
      +`Lacrados: ${un(camLac)} un · ${money(vl(camLac))}  (viram estoque de venda)\n`
      +`Testers: ${un(camTes)} un · ${money(vl(camTes))}  (não entram no estoque de venda)\n\n`
      +`Na aba Estoque, a coluna "A caminho" mostra só os ${un(camLac)} lacrados.`,
      {t:'compras', g:'com', f:{comEnt:'Não'}}),
    kpi('Vendas a entregar',aEntregar.length+' un',aEntregar.length?'laranja':'verde',money(aEntregar.reduce((s,v)=>s+Number(v.valorVenda),0)),
      'Vendas lançadas que ainda não foram entregues.\nSó baixam do estoque quando você marcar como entregue.',
      {t:'vendas', g:'ven', f:{venEnt:'Não'}}),
    kpi('Testers recebidos',unTes+' un','roxo',money(custoTes),
      `Testers comprados e recebidos. Não entram no estoque de venda,\n`
      +`mas o custo (${money(custoTes)}) entra no investimento total.`,
      {t:'testers', g:'tes'})].join('');

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

  // ----- dinheiro parado: estoque sem giro -----
  const ultimaVenda = {};
  data.sales.filter(v=>v.data).forEach(v=>{ if(!ultimaVenda[v.produto]||v.data>ultimaVenda[v.produto]) ultimaVenda[v.produto]=v.data; });
  const parados = est.filter(r=>r.saldo+r.consig>0 && !r.novo).map(r=>{
    const u = ultimaVenda[r.produto];
    return {...r, dias: u ? Math.floor((Date.now()-Date.parse(u+'T00:00:00'))/86400000) : null,
            valor: (r.saldo+r.consig)*r.custoMedio};
  }).filter(r=>r.dias===null || r.dias>=45).sort((a,b)=>b.valor-a.valor);
  const totParado = parados.reduce((s,r)=>s+r.valor,0);
  $('#lParado').innerHTML = parados.length
    ? `<li><span>Produtos sem giro</span><span class="val">${parados.length} de ${est.filter(r=>r.saldo+r.consig>0).length}</span></li>`
      + `<li><span>Custo empatado</span><span class="val" style="color:var(--vermelho)">${money(totParado)}</span></li>`
      + parados.slice(0,5).map(r=>`<li><span>${esc(r.produto)}</span><span class="val">${money(r.valor)} · ${r.dias===null?'nunca vendeu':r.dias+' d'}</span></li>`).join('')
      + `<li class="note">Com estoque e sem venda há 45 dias ou mais. Produtos novos no catálogo (até ${DIAS_NOVO} dias) ficam de fora.</li>`
    : `<li><span class="empty">Tudo com estoque teve venda nos últimos 45 dias.</span></li>`;

  // ----- sugestão de compra a partir do histórico -----
  renderSugestao(est);

  renderABC('lABC');



  // ----- tempo entre comprar e vender -----
  const giro = [];
  data.products.forEach(prod=>{
    const compras = data.purchases.filter(c=>c.produto===prod.nome && c.tipo==='Lacrado' && c.data).map(c=>c.data).sort();
    const vendas = data.sales.filter(v=>v.produto===prod.nome && v.data).map(v=>v.data).sort();
    if(!compras.length || !vendas.length) return;
    /* casa cada venda com a compra mais recente que a antecede */
    const dias = [];
    vendas.forEach(dv=>{
      const ant = compras.filter(dc=>dc<=dv).pop();
      if(ant) dias.push(Math.round((Date.parse(dv)-Date.parse(ant))/86400000));
    });
    if(dias.length) giro.push({p:prod.nome, media: dias.reduce((s,d)=>s+d,0)/dias.length, n:dias.length});
  });
  giro.sort((a,b)=>a.media-b.media);
  const mediaGeral = giro.length ? giro.reduce((s,g)=>s+g.media*g.n,0)/giro.reduce((s,g)=>s+g.n,0) : 0;
  $('#lGiro').innerHTML = giro.length
    ? `<li><span>Média geral</span><span class="val">${mediaGeral.toFixed(0)} dias entre comprar e vender</span></li>`
      + `<li class="note" style="padding-top:2px">Mais rápidos</li>`
      + giro.slice(0,3).map(g=>`<li><span>${esc(g.p)}</span><span class="val" style="color:var(--verde)">${g.media.toFixed(0)} dias</span></li>`).join('')
      + `<li class="note" style="padding-top:8px">Mais lentos</li>`
      + giro.slice(-3).reverse().map(g=>`<li><span>${esc(g.p)}</span><span class="val" style="color:var(--ambar)">${g.media.toFixed(0)} dias</span></li>`).join('')
      + `<li class="note">Quanto tempo seu dinheiro fica preso em cada perfume. Calculado sobre ${giro.length} ${plural(giro.length,'produto','produtos')} com compra e venda datadas.</li>`
    : `<li><span class="empty">Precisa de compras e vendas com data para calcular.</span></li>`;

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
  + `${dica?`<button class="qm" data-dica="${esc(dica)}" title="como é calculado" aria-label="como é calculado">?</button>`:''}`
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
  chipProduto('ven','venProdX');

  rows = ord(rows, sort.ven);
  const st = sort.ven;
  const tq = rows.reduce((s,v)=>s+Number(v.qtde),0);
  const tv = rows.reduce((s,v)=>s+Number(v.valorVenda),0);
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
    ? `<thead><tr>${chkTodos('ven')}<th class="ctr">Foto</th>${th('Data','data',st)}${th('Produto','produto',st)}${th('Gênero','genero',st,'ctr')}${th('Canal','canal',st)}${th('Cliente','cliente',st)}${th('Qtde','qtde',st,'num')}${th('Valor','valorVenda',st,'num')}${th('Lucro','lucro',st,'num')}${th('Margem','margem',st,'num')}${th('Pagamento','status',st,'ctr')}${th('Entrega','entregue',st,'ctr')}<th></th></tr></thead><tbody>`+
      rows.map(v=>`<tr>${chkLinha('ven',v.id)}<td class="ctr">${thumb(foto(v.produto),v.produto)}</td><td>${dt(v.data)}</td><td>${esc(v.produto)}</td><td class="ctr">${bGen(v.genero)}</td><td>${esc(canalDe(v))}</td>
        <td>${temNome(v)?esc(v.cliente):'<span style="color:var(--ink-faint)">não identificado</span>'}</td>
        <td class="num">${v.qtde}</td><td class="num">${money(v.valorVenda)}</td><td class="num">${money(v.lucro)}</td><td class="num">${pct(v.margem)}</td>
        <td class="ctr">${bPag(v.status)}</td><td class="ctr">${bEntV(v.entregue)}</td>
        <td><div class="rowacts"><button class="btn sm" data-ev="${v.id}">Editar</button><button class="btn sm ghost" data-dv="${v.id}">Excluir</button></div></td></tr>`).join('')+
      `</tbody><tfoot><tr><td colspan="7">Total</td><td class="num">${tq}</td><td class="num">${money(tv)}</td><td class="num">${money(tl)}</td><td colspan="4"></td></tr></tfoot>`
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
  try{ setFotoPrev(qual, await resizeImg(f, 340, .72, $('#pRecorta').checked)); hideErr('#ePro'); }
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
    valorVenda:Number($('#venValor').value)||0, cliente,
    canal: ($('#venCanal').value.trim()||'Direto'),
    status:$('#venStat').value, entregue:$('#venEnt').value};
  if(edit.ven){ const i=data.sales.findIndex(v=>v.id===edit.ven); data.sales[i]={...data.sales[i],...payload}; cancVen(); }
  else data.sales.push({id:uid(),...payload});
  if(cliente && !SEM_NOME.has(norm(cliente)) && !data.clients.some(c=>norm(c.nome)===norm(cliente)))
    data.clients.push({id:uid(), nome:cliente, telefone:'', observacao:''});
  const ultimoCanal = payload.canal;
  $('#fVen').reset(); $('#venQtd').value=1; $('#venStat').value='Pago'; $('#venEnt').value='Sim';
  $('#venCanal').value = ultimoCanal;          // mantém o canal para o próximo lançamento
  $('#venData').value = hoje();
  save(); renderAll();
});
function cancVen(){ edit.ven=null; $('#fVen').reset(); $('#venQtd').value=1; $('#venStat').value='Pago'; $('#venEnt').value='Sim'; $('#venCanal').value=''; $('#venData').value=hoje();
  $('#tVenForm').textContent='Nova venda'; $('#bVen').textContent='Adicionar venda'; $('#cancVen').hidden=true; }
$('#cancVen').addEventListener('click',cancVen);
$('#tVen').addEventListener('click',e=>{
  const ev=e.target.dataset.ev, dv=e.target.dataset.dv;
  if(ev){ const v=data.sales.find(x=>x.id===ev); if(!v)return;
    if(!byName(v.produto)) return showErr('#eVen',`O produto "${v.produto}" não está no cadastro. Cadastre-o na aba Produtos antes de editar esta venda.`);
    edit.ven=ev; $('#venData').value=v.data||''; $('#venQtd').value=v.qtde; $('#venProd').value=v.produto;
    $('#venValor').value=v.valorVenda; $('#venCli').value=v.cliente||'';
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
  ['#filProdGen','prodGen','change',renderProd],['#filProdFoto','prodFoto','change',renderProd],['#filProdBusca','prodQ','input',renderProd],
  ['#filComGen','comGen','change',renderCom],['#filComTipo','comTipo','change',renderCom],['#filComEnt','comEnt','change',renderCom],
  ['#filComDe','comDe','change',renderCom],['#filComAte','comAte','change',renderCom],['#filComBusca','comQ','input',renderCom],
  ['#filVenCanal','venCanal','change',renderVen],
  ['#filVenGen','venGen','change',renderVen],['#filVenStat','venStat','change',renderVen],['#filVenEnt','venEnt','change',renderVen],
  ['#filVenDe','venDe','change',renderVen],['#filVenAte','venAte','change',renderVen],['#filVenBusca','venQ','input',renderVen],
  ['#filEstGen','estGen','change',renderEst],['#filEstStat','estStat','change',renderEst],['#filEstBusca','estQ','input',renderEst],
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
const LOGO_G = '/logo.png';   /* capa do catálogo */
const LOGO_M = '/logo.png';   /* cabeçalho do sistema */
const LOGO_P = '/logo.png';   /* topos de página e relatórios */
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
const plate = (cls,src,alt) => `<div class="plate ${cls}">${src
  ? `<img src="${src}" alt="${esc(alt)}">`
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
    ${plate('p1', p.foto, p.nome)}
    <div class="meio">
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
    <div class="dir">${plate('p2', p.fotoInsp, p.inspiracao||'referência')}
      <div class="cap">referência</div></div>
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
    <div class="meta" style="margin-top:13mm">${itens.length} ${plural(itens.length,'fragrância','fragrâncias')}<br>
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
  const b=$('#catPublicar'); b.disabled=true; b.textContent='Publicando…';
  try{
    const opt = opcoesCat();
    const r = await publicaCatalogo(opt);
    data.config = Object.assign({}, data.config, {contato:opt.contato.trim()}); save();
    $('#catLink').value = r.link; $('#catLinkBox').hidden=false;
    const n = r.link.length;
    $('#catNota').innerHTML = `O link mostra só nome, inspiração, notas, foto e preço — custo, estoque, vendas e clientes não vão junto. Republicar atualiza o mesmo link.`
      + (n>120 ? `<br><b>Link com ${n} caracteres.</b> Para encurtar, me peça a versão com a sua configuração fixada no arquivo — o link vira algo como <code>${location.origin}/?c=${(data.config&&data.config.catalogoId)||'cat_xxxx'}</code>.` : ` Link com ${n} caracteres.`);
    b.textContent = `Republicar (${r.n} no ar)`;
    alert(`Catálogo atualizado com ${r.n} ${plural(r.n,'fragrância','fragrâncias')}.\n\nO link continua o mesmo — quem já recebeu vê a versão nova.`);
  }catch(e){
    alert('Não consegui publicar: '+e.message+'\n\nSe a tabela do catálogo ainda não existe, rode o comando SQL de novo (na janela Nuvem).');
    b.textContent='Publicar link online';
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

$('#catGerar').addEventListener('click',()=>{
  const opt = opcoesCat();
  const n = montaCatalogo(opt);
  if(!n) return alert('Nenhuma fragrância atende a esses filtros. Ajuste as opções e tente de novo.');
  data.config = Object.assign({}, data.config, {contato:opt.contato.trim()}); save();
  $('#modalCat').classList.remove('open');
  imprime('pr-cat');
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
    filtros:()=>[['Gênero',fil.prodGen],['Provador',{sim:'só com provador',nao:'só sem provador'}[fil.prodTester]],['Fotos',{semProd:'sem foto do produto',semInsp:'sem foto da inspiração',semAmbas:'sem nenhuma foto',comAmbas:'com as duas fotos'}[fil.prodFoto]],['Busca',fil.prodQ]]},
  com:{titulo:'Compras', tabela:'#tCom', contador:'#cntCom',
    filtros:()=>[['Gênero',fil.comGen],['Tipo',fil.comTipo],['Situação',fil.comEnt==='Sim'?'recebidas':fil.comEnt==='Não'?'a caminho':''],['Período',periodo(fil.comDe,fil.comAte)],['Busca',fil.comQ]]},
  ven:{titulo:'Vendas', tabela:'#tVen', contador:'#cntVen',
    filtros:()=>[['Canal',fil.venCanal],['Gênero',fil.venGen],['Pagamento',fil.venStat],['Entrega',fil.venEnt==='Sim'?'entregues':fil.venEnt==='Não'?'não entregues':''],['Período',periodo(fil.venDe,fil.venAte)],['Busca',fil.venQ]]},
  est:{titulo:'Posição de estoque', tabela:'#tEst', contador:'#cntEst',
    filtros:()=>[['Gênero',fil.estGen],['Situação',fil.estStat],['Busca',fil.estQ]]},
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
    desenhaVitrine(j[0].conteudo);
  }catch(e){
    box.innerHTML = `<div class="carregando">Este catálogo não está mais disponível.<br>Peça um link novo.</div>`;
  }
}
function desenhaVitrine(c){
  const itens = c.itens||[];
  const zapNum = (c.contato||'').replace(/\D/g,'');
  const zapLink = t => zapNum ? `https://wa.me/${zapNum.length<=11?'55'+zapNum:zapNum}?text=${encodeURIComponent(t)}` : '';
  const foto = (src,alt) => src ? `<div><img src="${src}" alt="${esc(alt)}"></div>` : `<div><span class="vazio">sem foto</span></div>`;
  const card = p => `<div class="item" data-g="${p.genero}">
    <div class="fotos">${foto(p.foto,p.nome)}${p.fotoInsp?foto(p.fotoInsp,p.inspiracao||''):''}</div>
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
      ${zapNum?`<a class="zap" style="margin-top:10px;text-align:center;padding:8px 14px;font-size:13px"
         href="${zapLink('Oi! Tenho interesse no '+p.nome+'. Ainda tem disponível?')}" target="_blank">${ICO_ZAP(15,'#fff')} Tenho interesse</a>`:''}
    </div></div>`;
  $('#vitrine').innerHTML = `
    <div class="topo">
      ${logoImg(LOGO_M)}
      <div class="rive">LA RIVE</div>
      <p>Fragrâncias inspiradas nos grandes lançamentos da perfumaria.</p>
    </div>
    <div class="filtros">
      <button class="fbtn on" data-f="">Todas (${itens.length})</button>
      <button class="fbtn" data-f="Masculino">Masculinas (${itens.filter(p=>p.genero==='Masculino').length})</button>
      <button class="fbtn" data-f="Feminino">Femininas (${itens.filter(p=>p.genero==='Feminino').length})</button>
    </div>
    <div class="grade">${itens.map(card).join('')}</div>
    <div class="pe">
      <div>Disponibilidade sujeita a estoque — consulte antes de fechar o pedido.</div>
      <div>Atualizado em ${new Date(c.emitido).toLocaleDateString('pt-BR')}</div>
      ${(c.contato && !zapNum)?`<div class="contato">${ICO_ZAP(15,'#1F7A44')}<span>${esc(c.contato)}</span></div>`:''}
      ${zapNum?`<a class="zap" href="${zapLink('Oi! Vi o catálogo da Buffon Fragrâncias e queria mais informações.')}" target="_blank">${ICO_ZAP(17,'#fff')} Falar no WhatsApp</a>`:''}
      <button class="btnpdf" id="vitPdf">Baixar catálogo em PDF</button>
    </div>`;
  const bp = $('#vitPdf');
  if(bp) bp.addEventListener('click', ()=>{
    /* mesma diagramação que a dona usa: capa, 3 por página, pirâmide */
    const n = montaFolhas(itens, {preco:!!c.preco, marcaTester:true, contato:c.contato||''});
    if(!n) return;
    document.body.classList.add('pr-cat');
    const limpa = ()=>{ document.body.classList.remove('pr-cat'); window.removeEventListener('afterprint',limpa); };
    window.addEventListener('afterprint', limpa);
    setTimeout(()=>{ window.print(); setTimeout(limpa,1500); }, 200);
  });
  $('#vitrine').addEventListener('click', e=>{
    const b=e.target.closest('.fbtn'); if(!b) return;
    document.querySelectorAll('#vitrine .fbtn').forEach(x=>x.classList.toggle('on', x===b));
    const f=b.dataset.f;
    document.querySelectorAll('#vitrine .item').forEach(it=>{
      it.style.display = (!f || it.dataset.g===f) ? '' : 'none'; });
  });
}


// Inicialização do sistema
document.addEventListener('DOMContentLoaded', () => {
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
    tabela.querySelectorAll('tbody tr').forEach(tr => {
      Array.from(tr.children).forEach((td, i) => {
        if (headers[i]) td.setAttribute('data-label', headers[i]);
      });
    });
  });
}
