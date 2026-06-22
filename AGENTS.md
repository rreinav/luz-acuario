# AGENTS.md — Luz Acuario

## Proyecto
App web estática para simular el control de una pantalla LED RGB de acuario según la hora del día. Sin build step, sin bundler, sin tests.

## Stack
- **HTML/CSS/JS vanilla** (sin frameworks)
- **Package manager**: `pnpm` (no usar `npm`)
- Dev server: `servor`

## Entrypoint
- `src/index.html` — contiene el JS inline funcional. Abrir con dev server o directamente en navegador.

## Comandos
- `pnpm run dev` — servidor dev con recarga (`servor src --reload`)
- `pnpm run lint` — `oxlint src/`
- `pnpm run format` — `oxfmt src/`

## Estructura relevante
```
src/
  index.html      ← app completa (HTML + JS inline)
  css/index.css   ← estilos
```

## Ciclo de luz
- **Modo reducido (defecto)**: ciclo 12:00→20:00, temp=pico 6500K a las 16:00, 0K al inicio/fin.
- **Modo 24h**: ciclo completo 0:00→23:50, la luz visible solo entre 12-20, temp=0 fuera de ese rango.
- Switch checkbox `#modo24h` en `#parametros` para alternar.
- Avanza en saltos de 10 minutos cada 1 segundo (`setInterval`).

## Notas
- El JS está inline en `index.html`, no hay archivos `.mjs` funcionales.
- `pnpm-lock.yaml` versionado, `node_modules/` ignorado.
- Sin tests, sin CI/CD, sin README descriptivo.
- `src/controller.mjs`, `src/js/controller.mjs`, `src/js/utils.mjs` — eliminados por tener errores de sintaxis. No regenerar sin verificar con `node -c`.
