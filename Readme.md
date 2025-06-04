# 🧠 Simple TypeScript Dependency Injection (DI) Container

This is a minimal TypeScript project that demonstrates **constructor-based dependency injection**, inspired by how frameworks like **NestJS** work under the hood.

It uses:
- `@Injectable()` decorators
- `reflect-metadata` to read constructor param types
- A tiny custom DI container that recursively resolves and injects dependencies

---

## 📁 Project Structure

```

src/
├── main.ts                   # Entry point
├── container.ts              # Simple DI container
├── decorators/
│   └── injectable.ts         # @Injectable decorator
├── services/
│   ├── logger.service.ts     # Logs messages
│   ├── user.service.ts       # Depends on LoggerService
│   └── app.service.ts        # Depends on UserService & LoggerService
|___ interfaces/
|    |_user.interface.ts      # Interfaces
````

---

## 🚀 How to Run

```bash
npm install
npx ts-node src/main.ts
````

---

## ⚙️ TypeScript Configuration

Make sure `tsconfig.json` includes the following:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```

### 👉 Why These Settings Matter

* `"experimentalDecorators": true`
  Enables support for `@Injectable()` and other decorators.

* `"emitDecoratorMetadata": true`
  Lets TypeScript emit constructor parameter types at runtime (used with `reflect-metadata`).

* `"esModuleInterop": true`
  Allows compatibility when importing CommonJS modules like `reflect-metadata`.

---

## 📦 Dependencies

Install the only external dependency:

```bash
npm install reflect-metadata
```

Then import it once at the top of your app (e.g., in `main.ts` and `container.ts`):

```ts
import 'reflect-metadata';
```

---

## 🧪 Sample Output

Running the app should give:

```
[Logger]: Fetching user...
[Logger]: User fetched: Alice
```

---

## ✅ What You’ll Learn

* How constructor injection works
* How to build a basic DI container
* How NestJS reads metadata to resolve dependencies
* Why decorators and `reflect-metadata` are powerful in TypeScript

---

## 🔄 Ideas for Extensions

* Add support for injection tokens (e.g. `@Inject('CONFIG')`)
* Support transient instances
* Add scoped lifetimes (e.g. per request)

---

Happy hacking! 🎯
