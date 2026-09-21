export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { itens } = req.body;

    // A sua InfiniteTag (sem o $)
    const HANDLE = 'ericbuffon'; 

    // Formata os itens para o padrão que a InfinitePay exige
    const itensMapeados = (itens || []).map(i => ({
      description: i.nome,
      quantity: i.qtd,
      price: Math.round(i.preco * 100) // Converte para centavos
    }));

    // URL para onde o cliente volta após pagar
    const redirectUrl = 'https://buffon-fragrancias.vercel.app/catalogo';

    const payload = {
      handle: HANDLE,
      items: itensMapeados,
      redirect_url: redirectUrl
    };

    const response = await fetch('https://api.checkout.infinitepay.io/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro InfinitePay:", data);
      return res.status(400).json({ error: `A InfinitePay recusou o pedido: ${JSON.stringify(data)}` });
    }

    const checkoutUrl = data.url || data.link || (data.payment_link && data.payment_link.url);

    if (checkoutUrl) {
        return res.status(200).json({ url: checkoutUrl });
    } else {
        console.log("Retorno da IP:", data);
        throw new Error('URL não encontrada na resposta.');
    }

  } catch (error) {
    console.error("Exceção:", error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
