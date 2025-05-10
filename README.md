# GIT_Grupoo# GIT_Grupoo

## Proyecto Git - Equipo Tangamandapio

### Integrantes

- Alejandro
- Jorge
- Isai

### GitFlow utilizado

Flujo basado en **GitHub Flow** con ramas protegidas:

- `main`: Rama principal (protegida, solo merge via PR).

- `feature/nombre`: Ramas para funcionalidades nuevas.

- Se requieren **2 aprobaciones** antes de mergear a `main`.

### Bitácora del proyecto

- **¿Les sirvió este GitFlow?**  
  Sí, pero en un proyecto más grande necesitaríamos ramas `develop` y `hotfix`.

- **Problemas/Conflictos:**
  - Conflicto en `script.js` (Jorge e Isai modificaron la misma función).
  - Causa: Falta de comunicación en tareas paralelas.

## Buenas y malas prácticas por integrante

### Alejandro (documentado por Jorge)

- **Buenas prácticas:**
  - Commits descriptivos (ej: `feat: add login button`).
  - Siempre crea ramas desde `main` actualizada.
- **Malas prácticas:**
  - A veces commitea archivos sin probar (`git commit -am "quick fix"`).

### Isai (documentado por Alejandro)

- **Buenas prácticas:**
  - Commits adecuados que describen los cambios realizados de manera clara.
  - Comprendio claramente los objetivos del proyecto.
- **Malas prácticas:**
  - Poco comunicativo con el equipo al momento de plantear el proyecto.

### Jorge (documentado por Isai)

- **Buenas prácticas:**
  - hace commits claros al actualizar la documentación
  - integra bien las ramas al proyecto
- **Malas prácticas**
  - Genera Ramas inecesarias varias veces

## Git Hooks / Alias usados

- Alias:

```bash
  git config --global alias.lg "log --graph --abbrev-commit --pretty=format:'%C(yellow)%h%Creset -%C(red)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'"
```
