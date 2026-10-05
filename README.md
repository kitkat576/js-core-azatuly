# js-core-azatuly
# Лабораторная работа №4 (js-core) — JavaScript Core

**Студент:** Азатұлы Кадыр  
**Репозиторий:** https://github.com/azatuly/js-core-azatuly

---

## Запуск тестов

1. Установите зависимости:
   ```bash
   npm install
## Closures in my code

In my implementation, closures are explicitly used in the `memoize` and `counter` functions to maintain private lexical environments. In `memoize`, the returned inner function retains access to the `cache` Map variable defined in its parent scope, allowing function calls to check and retrieve cached results without polluting the global namespace. In `counter`, the internal variable `count` is encapsulated within the factory function's scope and can only be accessed or modified through the returned object's methods (`inc`, `dec`, `value`). This prevents external tampering and demonstrates how closures facilitate data hiding and persistent state across function invocations in JavaScript.
