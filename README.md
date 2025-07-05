## **Docker Laravel**

### 1. Clone o projeto

```bash
git clone git@github.com:gabrielprogramadorweb/laravel12-docker-vuejs3.5.git
```

### 2. Acesse o diretório do projeto

```bash
cd laravel12-docker-vuejs3.5/backend
```

### 3. Crie o arquivo `.env`

```bash
cp .env.example .env
```

### 4. Inicie tudo com Docker

```bash
docker-compose up -d --build
```

---

## 🧩 Composer

### Acesse o container PHP:

```bash
docker compose exec php bash
```

### Instale as dependências:

```bash
composer install
```

---

### 5. Gere a chave da aplicação Laravel

```bash
php artisan key:generate
```

### 6. Execute as migrations (criar tabelas)

```bash
php artisan migrate
```

### 7. Instalar npm no frontend
```bash
cd frontend
npm install
```
## 🚀 Acesso Rápido

- 🌐 Frontend Vue: [http://localhost:5173/](http://localhost:5173/)
- 🔧 API Laravel: [http://localhost:8080/](http://localhost:8080/)
- 🗃️ PHPMyAdmin: [http://localhost:8888/](http://localhost:8888/)
