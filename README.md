# X's and O's

<div align="center">
  <img src="./resources/xsandos-board.png" alt="X's And O's" width="30%" style="display:inline-block; margin: 0 10px;">
  <img src="./resources/xsandos-history.png" alt="X's And O's" width="30%" style="display:inline-block; margin: 0 10px;">
</div>


**X's and O's** es una aplicación móvil desarrollada con **React Native** y **TypeScript** que recrea el clásico juego **Tic Tac Toe** (Tres en Raya). La aplicación ofrece una experiencia interactiva y visualmente atractiva, diseñada para jugar entre dos personas en el mismo dispositivo.

## Tabla de contenidos

- [Características principales](#características-principales)
- [Requisitos](#requisitos)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Puesta en marcha](#puesta-en-marcha)


## Características principales

- **Tablero interactivo:** El juego muestra un tablero de 3x3 donde los jugadores alternan turnos colocando sus marcas (❌ y ⭕).
- **Indicador de turno:** Antes de cada jugada, la interfaz muestra claramente de quién es el turno actual, permitiendo a los jugadores seguir fácilmente el flujo de la partida.
- **Historial de movimientos:** Permite visualizar la secuencia de jugadas realizadas durante la partida, ofreciendo la posibilidad de analizar el progreso del juego.
- **Mensaje de resultado:** Al finalizar la partida, se muestra un mensaje indicando si hay un ganador o si la partida terminó en empate.
- **Botón de reinicio:** Incluye un botón que permite reiniciar el juego en cualquier momento para comenzar una nueva partida.
- **Lógica con TypeScript:** Toda la lógica del juego está implementada con TypeScript, garantizando tipado seguro, mantenimiento más sencillo y mayor fiabilidad en el código.


## Requisitos

* **Node.js:** v18 o superior
* **npm**
* **Expo CLI** (`npm install -g expo-cli`) — opcional si usas `npx`


## Estructura del proyecto

```
tictactoe
├── app
│   └── index.tsx
├── app.json
├── assets                                  # Recursos gráficos
│   └── images
│       ├── favicon.png
│       └── icon.png
├── eslint.config.js
├── expo-env.d.ts
├── package.json                            # Dependencias y scripts
├── package-lock.json
├── src
│   ├── components                          # Componentes reutilizables (button, board, etc.)
│   │   ├── Board.tsx
│   │   ├── ResetButton.tsx
│   │   └── Square.tsx
│   ├── Game.tsx
│   ├── styles                              # Estilos globales
│   │   └── GlobalStyles.tsx
│   └── utils
│       └── calculateWinner.tsx
└── tsconfig.json                           # Configuración y alias de TypeScript
```


## Puesta en marcha

1. Install dependencies

```bash
  npm install
```

2. Navega al directorio del proyecto:

```bash
  cd tictactoe
```

3. Start the app

```bash
  npx expo start
```

4. Desde la interfaz de **Expo**, abre la app en:

* **iOS:** presiona `i` para abrir el simulador.
* **Android:** presiona `a` o escanea el QR con **Expo Go**.
* **Web:** selecciona la opción `w`.
