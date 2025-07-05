Aqui está a tradução para o português:

---

## 🚀 **Docker Laravel**

### 1. Clone o projeto

```bash
git clone git@github.com:gabrielprogramadorweb/laravel12-docker-vuejs3.5.git
```

### 2. Acesse o diretório do projeto

```bash
cd laravel12-docker-vuejs3.5/sistema
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

