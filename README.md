# 👑 Taller POO - Reinas del Chisme

Este proyecto modela un sistema de **chismosas profesionales**, donde cada tipo de reina del chisme recolecta información y difunde chismes con su estilo único. Al final, se simula una *batalla de chismes* para determinar quién logra hacer el chisme más viral.

---
> Participantes Hely Santiago Diaz Almeida - David Alberto Medina 

## 📁 Estructura del proyecto

```
batalla-chismes/
├── classes/
│   ├── Chismosa.js
│   ├── TiaVecina.js
│   ├── CompaneraCuriosa.js
│   └── EstudianteEspia.js
├── index.js
├── package.json
├── .gitignore
└── README.md
```

---

## 🧠 Clases y comportamiento

### 🧩 Clase abstracta `Chismosa`

Define la estructura básica de toda chismosa.

- **Privadas:** `#reputacion`, `#nivelChisme`
- **Constructor:** `nombre, reputacion (5), nivelChisme (0)`
- **Métodos:**
  - `getReputacion()` y `getNivelChisme()`
  - `modificarReputacion(valor)`
  - `modificarNivelChisme(valor)`
  - `recolectarInfo()` y `contarChisme()` → deben ser sobreescritos

> ❗ No se puede instanciar directamente. Lanza error si los métodos abstractos no se implementan.

---

### 👵 `TiaVecina`

- `recolectarInfo()`: Escucha en reuniones del barrio.
- `contarChisme()`: Difunde mientras ofrece café.
- Chisme sube más rápido, pero la reputación puede variar.

---

### 👩‍💼 `CompaneraCuriosa`

- `recolectarInfo()`: Pregunta en tono profesional.
- `contarChisme()`: Usa el chisme como reflexión laboral.
- Aumenta su reputación lentamente y sube poco el nivel de chisme.

---

### 🧑‍🎓 `EstudianteEspia`

- `recolectarInfo()`: Lee chats ajenos.
- `contarChisme()`: Lo filtra por estados de WhatsApp.
- El chisme crece rápido, pero la reputación es volátil.

---

## 🎮 index.js (Simulación)

- Se instancian las chismosas
- Cada una recolecta y cuenta chismes por 2 rondas
- Se muestran estadísticas de reputación y nivel de chisme
- Se declara una ganadora

```bash
node index.js
```

---

## ⚙️ Reglas del juego

- Nivel de chisme: 0 a 10
- Reputación: 0 a 10
- Al menos 2 rondas por chismosa
- `Math.random()` para resultados variables
- Chisme más viral = mayor nivel de chisme

---

## 🎨 Formato sugerido

- 🟣 Morado: chismes virales
- 🟠 Naranja: buena reputación
- ⚫ Negro: cancelación o baja reputación


---

