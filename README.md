# Portfólio Moderno e Minimalista

Um portfólio moderno, minimalista e totalmente responsivo desenvolvido com React, Vite e Tailwind CSS.

## 🚀 Tecnologias

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações para React
- **Lucide React** - Ícones modernos e minimalistas

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:5173](http://localhost:5173) no navegador

## 🏗️ Estrutura do Projeto

```
projeto-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── projects/ (adicione suas imagens aqui)
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## ✏️ Personalização

### Adicionar seus projetos

Edite o arquivo `src/data/projects.js` e substitua os projetos de exemplo pelos seus:

```javascript
export const projects = [
  {
    id: 1,
    title: "Meu Projeto",
    image: "/projects/meu-projeto.png",
    description: "Descrição do projeto",
    github: "https://github.com/usuario/projeto",
    demo: "https://meusite.com/projeto" // ou null se não tiver deploy
  },
  // ...
];
```

### Adicionar imagens dos projetos

1. Crie a pasta `public/projects/`
2. Adicione suas imagens (PNG, JPG, etc.)
3. No componente `ProjectCard.jsx`, descomente a linha do `<img>` e comente o placeholder

### Personalizar informações

- **Nome**: Edite `src/components/Footer.jsx` (linha com "Seu Nome")
- **Sobre**: Edite `src/components/About.jsx`
- **Skills**: Edite o array `skills` em `src/components/About.jsx`
- **Links sociais**: Edite os links em `src/components/Contact.jsx`
- **Foto**: Substitua o placeholder em `src/components/About.jsx`

### Cores e estilos

As cores podem ser personalizadas no arquivo `tailwind.config.js` ou diretamente nos componentes usando classes Tailwind.

## 🎨 Características

- ✅ Design minimalista e moderno
- ✅ Totalmente responsivo
- ✅ Animações suaves com Framer Motion
- ✅ Header fixo com blur
- ✅ Navegação suave entre seções
- ✅ Formulário de contato funcional
- ✅ Componentização limpa e reutilizável

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona perfeitamente em:
- Desktop
- Tablet
- Mobile

## 🚀 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📄 Licença

Este projeto é livre para uso pessoal e comercial.

