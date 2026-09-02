// Service Worker básico para ativar o modo PWA (Instalação)
const CACHE_NAME = 'buffon-v1';

self.addEventListener('install', event => {
  self.skipWaiting(); // Força o SW novo a assumir imediatamente
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim()); // Faz o SW tomar controle das páginas imediatamente
});

self.addEventListener('fetch', event => {
  // Passa direto pela rede, garantindo que os dados (como vendas e estoque) sempre venham frescos.
  event.respondWith(fetch(event.request));
});
