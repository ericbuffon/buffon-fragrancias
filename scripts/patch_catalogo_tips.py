from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')

css = """  /* ---------- ferramentas flutuantes do catálogo público ---------- */
  #vitrine .buffon-float-actions{position:fixed;right:18px;bottom:18px;z-index:80;display:flex;gap:10px;align-items:center}
  #vitrine .buffon-float-btn{border:1px solid #8F6B22;background:#141109;color:#fff;border-radius:24px;box-shadow:0 5px 18px rgba(0,0,0,.18);cursor:pointer;font:600 12px/1.2 system-ui,sans-serif;padding:10px 14px;transition:transform .15s,background .15s}
  #vitrine .buffon-float-btn:hover{background:#8F6B22;transform:translateY(-1px)}
  #vitrine .buffon-float-top{width:42px;height:42px;padding:0;font-size:20px;display:inline-flex;align-items:center;justify-content:center}
  #vitrine .buffon-tips-modal{position:fixed;inset:0;background:rgba(20,16,14,.5);display:none;align-items:center;justify-content:center;z-index:120;padding:1rem}
  #vitrine .buffon-tips-modal.open{display:flex}
  #vitrine .buffon-tips-box{background:#fff;border:1px solid #CFC5B2;border-radius:12px;box-shadow:0 16px 50px rgba(0,0,0,.2);max-width:620px;width:100%;max-height:min(86vh,760px);overflow:auto;padding:1.4rem 1.5rem;color:#141109}
  #vitrine .buffon-tips-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:.45rem}
  #vitrine .buffon-tips-head h3{margin:0;font-family:'Fraunces',serif;font-size:21px}
  #vitrine .buffon-tips-close{border:1px solid #CFC5B2;background:#fff;color:#141109;border-radius:50%;width:32px;height:32px;cursor:pointer;font-size:19px;line-height:1}
  #vitrine .buffon-tips-intro{font-size:13px;color:#453D33;margin:0 0 1rem;line-height:1.6}
  #vitrine .buffon-tips-list{margin:0;padding-left:1.25rem;color:#453D33;font-size:13px;line-height:1.65}
  #vitrine .buffon-tips-list li{margin-bottom:.75rem}
  @media(max-width:640px){
    #vitrine .buffon-float-actions{right:12px;bottom:12px;gap:8px}
    #vitrine .buffon-float-btn{font-size:11px;padding:9px 12px}
    #vitrine .buffon-float-top{width:40px;height:40px;padding:0}
    #vitrine .buffon-tips-box{max-height:88vh;padding:1.15rem 1.1rem}
    #vitrine .buffon-tips-head h3{font-size:18px}
    #vitrine .buffon-tips-list{font-size:12.5px}
  }
"""
marker = "  #vitrine{display:none;max-width:940px;margin:0 auto;padding:2rem 1.1rem 4rem}"
if 'buffon-float-actions' not in s:
    if marker not in s:
        raise SystemExit('CSS marker not found')
    s = s.replace(marker, css + marker, 1)

old = """    </div>`;
   const bp = $('#vitPdf');"""
new = """    </div>
    <div class="buffon-float-actions" aria-label="Ferramentas do catálogo">
      <button class="buffon-float-btn" id="buffonPerfumeTipsBtn" type="button" aria-haspopup="dialog" aria-controls="buffonPerfumeTipsModal">✦ Como escolher um perfume?</button>
      <button class="buffon-float-btn buffon-float-top" id="buffonCatalogTopBtn" type="button" aria-label="Voltar ao topo" title="Voltar ao topo">↑</button>
    </div>
    <div class="buffon-tips-modal" id="buffonPerfumeTipsModal" role="dialog" aria-modal="true" aria-labelledby="buffonPerfumeTipsTitle">
      <div class="buffon-tips-box">
        <div class="buffon-tips-head">
          <h3 id="buffonPerfumeTipsTitle">Como escolher um perfume?</h3>
          <button class="buffon-tips-close" id="buffonPerfumeTipsClose" type="button" aria-label="Fechar">×</button>
        </div>
        <p class="buffon-tips-intro">Escolher a fragrância perfeita não é fácil. Aqui estão algumas dicas.</p>
        <ol class="buffon-tips-list">
          <li>Escolha fragrâncias pela manhã, quando seu corpo estiver descansado. Se isso não for possível, encontre um momento em que você não esteja com pressa e possa se concentrar totalmente nas fragrâncias que está testando.</li>
          <li>Teste no máximo <b>3–4 fragrâncias ao mesmo tempo</b>. Com um número maior de fragrâncias diferentes, fica mais difícil fazer uma escolha racional.</li>
          <li>Teste os perfumes <b>na pele</b>, não apenas em uma fita olfativa. Não tenha pressa para escolher; deixe a fragrância se desenvolver na sua pele pelo maior tempo possível.</li>
          <li>Cheirar grãos de café entre diferentes fragrâncias é um mito! O café não “reseta” o olfato e apenas introduzirá um aroma adicional entre os perfumes que estão sendo testados.</li>
        </ol>
      </div>
    </div>`;
   const bp = $('#vitPdf');"""
if 'buffonPerfumeTipsBtn' not in s:
    if old not in s:
        raise SystemExit('HTML marker not found')
    s = s.replace(old, new, 1)

hook = """   const bp = $('#vitPdf');
   if(bp) bp.addEventListener('click', ()=>{"""
hook_new = """   const tipsBtn = $('#buffonPerfumeTipsBtn');
   const tipsModal = $('#buffonPerfumeTipsModal');
   const tipsClose = $('#buffonPerfumeTipsClose');
   const topBtn = $('#buffonCatalogTopBtn');
   if(tipsBtn && tipsModal && tipsClose){
     const fechaDicas = ()=>tipsModal.classList.remove('open');
     tipsBtn.addEventListener('click', ()=>tipsModal.classList.add('open'));
     tipsClose.addEventListener('click', fechaDicas);
     tipsModal.addEventListener('click', e=>{ if(e.target===tipsModal) fechaDicas(); });
     document.addEventListener('keydown', e=>{ if(e.key==='Escape') fechaDicas(); });
   }
   if(topBtn) topBtn.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
   const bp = $('#vitPdf');
   if(bp) bp.addEventListener('click', ()=>{"""
if 'const tipsBtn =' not in s:
    if hook not in s:
        raise SystemExit('JS marker not found')
    s = s.replace(hook, hook_new, 1)

p.write_text(s, encoding='utf-8')
print('catalogo atualizado')