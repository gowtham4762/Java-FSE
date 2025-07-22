# JWT Auth Service (Basic -> JWT Demo)

Minimal Spring Boot project that accepts Basic credentials (`-u user:pwd`)
and returns a signed JSON Web Token (JWT). Intended for hands-on learning.

---
## Quick Start

### Prerequisites
* Java 17+
* Maven 3.8+
* Internet connection for first build (to download dependencies)

### Build
```bash
mvn clean package
```

### Run
```bash
mvn spring-boot:run
```
or:
```bash
java -jar target/jwt-auth-service-0.0.1-SNAPSHOT.jar
```

Server starts on **port 8090** (see `application.properties`).

### Test with curl
```bash
curl -s -u user:pwd http://localhost:8090/authenticate
```

**Sample response:**
```json
{"token":"<JWT token here>"}
```

---
## Hands-on Exercises

This project is structured to map to the three steps you outlined:

### 1. Create Authentication Controller & Configure Security
* `AuthController` handles `/authenticate`.
* `SecurityConfig` disables default Basic processing and permits all so we can manually parse the header.

### 2. Read Authorization Header & Decode Username/Password
* `AuthController.authenticate()` checks `Authorization: Basic <base64>`
* Decodes Base64, splits into `username:password`.

### 3. Generate JWT
* `JwtTokenService.generateToken()` builds an HS256-signed token using a secret from `application.properties`.
* Includes subject (username) and roles claim.

---
## Change Demo Credentials
Credentials are configured programmatically in `SecurityConfig`:
* user / pwd (ROLE_USER)
* admin / admin (ROLE_ADMIN)

Update these or switch to a persistent `UserDetailsService` as needed.

---
## Change JWT Secret & Expiration
In `src/main/resources/application.properties`:
```properties
app.jwt.secret=ChangeThisSecretForProd_ReplaceWithAtLeast256BitKey!!!!!!!!!!!!!!!!
app.jwt.expiration-ms=600000
```
Replace with a strong, random key in production.

---
## Decode & Inspect Tokens
You can view decoded tokens at <https://jwt.io/> (for learning only; do not upload sensitive real tokens).

---
## Troubleshooting
* **401 Missing Basic** – Did you include `-u user:pwd` in your curl command?
* **Invalid username/password** – Credentials don't match configured users.
* **SignatureException** when validating elsewhere – Check that the same secret key is used.

---
## License
MIT (do anything, no warranty). See `LICENSE` if included.
