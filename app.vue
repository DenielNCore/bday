<template>
  <div>
    <NuxtPage />
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Caveat:wght@400;500;600;700&display=swap');

body{

}
.crayon-card {
  position: relative;
  background: linear-gradient(135deg, #fff9e6 0%, #fff3cd 50%, #ffe8a1 100%);
  border: 10px solid #8b4513;
  border-radius: 35px 55px 30px 50px / 45px 35px 50px 30px;
  box-shadow:
      0 15px 40px rgba(0, 0, 0, 0.25),
      inset 0 0 60px rgba(255, 255, 255, 0.4),
      0 0 20px rgba(139, 69, 19, 0.1);
  transform: rotate(-0.8deg);
  animation: wobble 4s ease-in-out infinite;
  overflow: visible;
}

.crayon-card::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 3px dashed rgba(139, 69, 19, 0.3);
  border-radius: 30px 50px 25px 45px;
  z-index: -1;
}

.hand-drawn-title {
  font-family: 'Caveat', cursive;
  font-weight: 700;
  text-shadow:
      2px 2px 0px rgba(139, 69, 19, 0.3),
      4px 4px 8px rgba(0, 0, 0, 0.1);
  transform: rotate(-0.5deg);
  letter-spacing: 2px;
}

.hand-drawn-text {
  font-family: 'Kalam', cursive;
  line-height: 1.6;
}

.hand-drawn-border {
  border: 5px solid #8b4513;
  border-radius: 25px 35px 20px 30px / 30px 25px 35px 20px;
  position: relative;
  box-shadow:
      inset 0 0 15px rgba(139, 69, 19, 0.15),
      4px 4px 0px rgba(139, 69, 19, 0.3),
      inset 0 0 30px rgba(255, 255, 255, 0.3);
}

.hand-drawn-border::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border: 3px dashed rgba(255, 165, 0, 0.6);
  border-radius: 25px 35px 20px 30px / 30px 25px 35px 20px;
  pointer-events: none;
}

/* Corner decorations */
.corner-decoration {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 4px solid #8b4513;
  z-index: 5;
}

.corner-top-left {
  top: -15px;
  left: -15px;
  border-right: none;
  border-bottom: none;
  border-radius: 20px 0 0 0;
  transform: rotate(-5deg);
}

.corner-top-right {
  top: -15px;
  right: -15px;
  border-left: none;
  border-bottom: none;
  border-radius: 0 20px 0 0;
  transform: rotate(5deg);
}

.corner-bottom-left {
  bottom: -15px;
  left: -15px;
  border-right: none;
  border-top: none;
  border-radius: 0 0 0 20px;
  transform: rotate(5deg);
}

.corner-bottom-right {
  bottom: -15px;
  right: -15px;
  border-left: none;
  border-top: none;
  border-radius: 0 0 20px 0;
  transform: rotate(-5deg);
}

/* Hand-drawn decorative elements */
.hand-drawn-underline {
  width: 200px;
  height: 4px;
  background: #8b4513;
  border-radius: 2px;
  position: relative;
  transform: rotate(-0.5deg);
}

.hand-drawn-underline::after {
  content: '';
  position: absolute;
  top: -2px;
  left: 10px;
  right: 10px;
  height: 3px;
  background: #d4a574;
  border-radius: 2px;
  transform: rotate(1deg);
}

.hand-drawn-divider {
  height: 6px;
  background: repeating-linear-gradient(
      to right,
      #8b4513 0px,
      #8b4513 10px,
      #d4a574 10px,
      #d4a574 20px
  );
  border-radius: 3px;
  transform: rotate(0.5deg);
  margin: 20px 0;
}

.hand-drawn-cloud {
  font-size: 4rem;
  animation: drift 15s ease-in-out infinite;
  transform: rotate(-5deg);
}

@keyframes drift {
  0%, 100% { transform: translateX(0) rotate(-5deg); }
  50% { transform: translateX(30px) rotate(5deg); }
}

.hand-drawn-dice {
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));
  animation: float 4s ease-in-out infinite;
}

.hand-drawn-number {
  font-family: 'Kalam', cursive;
}

.crayon-stroke {
  stroke-linejoin: round;
  stroke-linecap: round;
}

@keyframes wobble {
  0%, 100% { transform: rotate(-1deg) translateY(0px); }
  50% { transform: rotate(1deg) translateY(-3px); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(12deg); }
  50% { transform: translateY(-10px) rotate(8deg); }
}

/* Rough texture effect */
.crayon-card {
  background-image:
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
      radial-gradient(circle at 80% 70%, rgba(255, 200, 100, 0.3) 1px, transparent 1px);
  background-size: 40px 40px, 60px 60px;
}

/* Crayon-like text effect */
.hand-drawn-text,
.hand-drawn-title {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>
<script setup lang="ts">
</script>
