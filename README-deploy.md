Instruções rápidas para publicar `minha-calculadora-de-imc-by-machgui.com.br`

1) Comprar/registrar o domínio
- Registre `minha-calculadora-de-imc-by-machgui.com.br` em um registrador (ex.: registro.br, GoDaddy, Namecheap, Cloudflare).

2) Opções de hospedagem (escolha uma):

A) GitHub Pages (grátis, ideal para sites estáticos)
- Crie um repositório no GitHub e envie todo o conteúdo do projeto para ele (root do repositório deve conter `index.html`, `style.css`, `script.js` e o arquivo `CNAME`).
- Em `Settings > Pages`, selecione a branch (`main`/`master`) e a pasta `/ (root)` e ative Pages.
- O arquivo `CNAME` na raiz já informa ao GitHub o domínio personalizado.
- DNS recomendado para domínio apex (sem www): adicione registros A apontando para os IPs do GitHub Pages:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Se preferir usar `www`, crie um `CNAME` no DNS: `www` -> `username.github.io`.
- Aguarde propagação e ative o HTTPS em `Settings > Pages` (o GitHub costuma emitir certificado automaticamente).

B) Netlify (fácil deploy; arrastar e soltar ou conectar repo)
- Crie uma conta em Netlify e arraste a pasta do projeto para o painel ou conecte um repositório Git.
- No painel do site em `Domain settings`, adicione o domínio `minha-calculadora-de-imc-by-machgui.com.br`.
- Netlify fornece instruções DNS; tipicamente adiciona um registro CNAME para `www` apontando para `your-site.netlify.app` e/ou A/ALIAS para o domínio apex.
- Netlify emite SSL automático (Let's Encrypt).

C) Vercel (similar ao Netlify)
- Conecte o repositório e adicione domínio nas configurações do projeto. Siga instruções de DNS.

3) Exemplo de passos locais (PowerShell) para enviar ao GitHub:
```powershell
cd "c:\Users\macha\OneDrive\Documentos\Programas\HTML, primeiro programa"; 
git init; 
git add .; 
git commit -m "Initial commit"; 
git branch -M main; 
# criar repo no GitHub e substituir <URL-DO-REPO> abaixo
git remote add origin <URL-DO-REPO>; 
git push -u origin main
```

4) Verificação e SSL
- Depois de configurar DNS e o site no host, aguarde a propagação DNS (pode levar minutos até 48h, normalmente é rápida).
- Verifique o site em `https://minha-calculadora-de-imc-by-machgui.com.br`.
- Caso o host não emita SSL automático, habilite Let's Encrypt conforme o painel do provedor.

Observações
- Coloque a imagem `foto de academia.jpg` na pasta do projeto (já usada no CSS). Se mover para `images/`, atualize o `background-image` no CSS.
- Se quiser, eu posso:
  - configurar o repositório GitHub (criar .gitignore, texto do commit, etc.);
  - gerar instruções DNS específicas para um provedor (registro.br, Cloudflare, GoDaddy) se você me disser qual usará.
