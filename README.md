# Luz Acuario

App web estática para simular el control de una pantalla LED RGB de acuario según la hora del día.

## Uso

Abrir `src/index.html` en navegador o:

```
pnpm run dev
```

## Ciclo de luz

- **Modo 24h** (defecto): ciclo 0:00→23:50 con luz visible entre 12:00 y 20:00
- **Modo reducido**: ciclo 12:00→20:00 con reinicio al llegar a 20:00
- Temperatura de color: pico 6500K a las 16:00, 0K fuera del rango 12-20
- Brillo: sigue curva senoidal 0→1→0 entre 12-20

## Desarrollo

- HTML/CSS/JS vanilla sin build step
- Package manager: pnpm
- Lint: `pnpm run lint` (oxlint)
- Format: `pnpm run format` (oxfmt)

## Licencia

MIT
