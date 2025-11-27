<script setup lang="ts">
const age = ref(35) // Update with your age
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 flex items-center justify-center p-4 relative">
    <!-- Hand-drawn background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="hand-drawn-cloud absolute top-10 left-10 text-blue-200 opacity-40">☁️</div>
      <div class="hand-drawn-cloud absolute top-20 right-20 text-pink-200 opacity-40">☁️</div>
      <div class="hand-drawn-cloud absolute bottom-20 left-1/4 text-purple-200 opacity-40">☁️</div>
    </div>
    
    <div class="crayon-card max-w-2xl w-full relative">
      <!-- Hand-drawn corner decorations -->
      <div class="corner-decoration corner-top-left"></div>
      <div class="corner-decoration corner-top-right"></div>
      <div class="corner-decoration corner-bottom-left"></div>
      <div class="corner-decoration corner-bottom-right"></div>
      
      <!-- Decorative D&D Dice -->
      <div class="absolute top-0 right-0 transform rotate-12 w-20 h-20 z-20">
        <!-- <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="hand-drawn-dice w-full h-full">
          <path d="M 50 10 L 90 30 L 90 70 L 50 90 L 10 70 L 10 30 Z" 
                fill="#dc2626" 
                stroke="#dc2626" 
                stroke-width="3"
                class="crayon-stroke"/>
          <text x="50" y="65" 
                font-size="35" 
                font-weight="bold" 
                fill="white" 
                text-anchor="middle"
                class="hand-drawn-number">20</text>
        </svg> -->
        <img src="/d20.png" alt="Dice" class="hand-drawn-dice w-full h-full"></img>
      </div>
      <div class="absolute -bottom-6 -left-6 transform -rotate-12 w-16 h-16 z-20">
        <!-- <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="hand-drawn-dice w-full h-full">
          <path d="M 50 10 L 90 30 L 90 70 L 50 90 L 10 70 L 10 30 Z" 
                fill="#2563eb" 
                stroke="#2563eb" 
                stroke-width="3"
                class="crayon-stroke"/>
          <text x="50" y="65" 
                font-size="35" 
                font-weight="bold" 
                fill="white" 
                text-anchor="middle"
                class="hand-drawn-number">20</text>
        </svg> -->
        <img src="/d20_2.png" alt="Dice" class="hand-drawn-dice w-full h-full"></img>

      </div>
      <div class="absolute top-1/4 -left-4 transform rotate-45 w-12 h-12 z-20">
        <!-- <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="hand-drawn-dice w-full h-full">
          <path d="M 50 10 L 90 30 L 90 70 L 50 90 L 10 70 L 10 30 Z" 
                fill="#16a34a" 
                stroke="#16a34a" 
                stroke-width="3"
                class="crayon-stroke"/>
          <text x="50" y="65" 
                font-size="35" 
                font-weight="bold" 
                fill="white" 
                text-anchor="middle"
                class="hand-drawn-number">6</text>
        </svg> -->
        <img src="/d10.png" alt="Dice" class="hand-drawn-dice w-full h-full"></img>

      </div>

      <!-- Card Content -->
      <div class="relative z-10 p-8 md:p-12">
        <!-- Decorative border elements -->
        <div class="absolute top-2 left-2 text-yellow-400 transform -rotate-12 text-2xl">✨</div>
        <div class="absolute top-4 right-4 text-pink-400 transform rotate-12 text-2xl">⭐</div>
        <div class="absolute bottom-4 left-6 text-blue-400 transform rotate-45 text-2xl">💫</div>
        <div class="absolute bottom-2 right-2 text-green-400 transform -rotate-45 text-2xl">🌟</div>
        
        <!-- Title -->
        <h1 class="hand-drawn-title text-center mb-4 text-4xl md:text-6xl relative z-20">
          QUEST INVITATION
        </h1>
        
        <!-- Decorative underline -->
        <div class="hand-drawn-underline mx-auto mb-6"></div>

        <!-- Main Message -->
        <div class="text-center space-y-3 mb-8">
          <p class="hand-drawn-text text-2xl md:text-3xl text-purple-800 transform -rotate-0.5">
            You're invited to an epic adventure!
          </p>
          <p class="hand-drawn-text text-xl md:text-2xl text-indigo-800 transform rotate-0.5">
            Join me as I level up to Level {{ age }}!
          </p>
        </div>

        <!-- Decorative divider -->
        <div class="hand-drawn-divider mb-6"></div>

        <!-- Details Section -->
        <div class="hand-drawn-border bg-yellow-50 p-6 md:p-8 mb-6 space-y-4">
          <div class="flex items-center gap-3">
            <span class="hand-drawn-text text-4xl transform -rotate-6">📅</span>
            <div>
              <p class="hand-drawn-text text-xl font-bold text-red-700">Date:</p>
              <p class="hand-drawn-text text-lg text-gray-900 transform rotate-0.5">Saturday, December 6th</p>
            </div>
          </div>
          
          <div class="flex items-center gap-3">
            <span class="hand-drawn-text text-4xl transform rotate-6">⏰</span>
            <div>
              <p class="hand-drawn-text text-xl font-bold text-blue-700">Time:</p>
              <p class="hand-drawn-text text-lg text-gray-900 transform -rotate-0.5">15:00 PM - Late Night</p>
            </div>
          </div>
          
          <div class="flex items-center gap-3">
            <span class="hand-drawn-text text-4xl transform -rotate-3">📍</span>
            <div>
              <p class="hand-drawn-text text-xl font-bold text-green-700">Location:</p>
              <p class="hand-drawn-text text-lg text-gray-900 transform rotate-0.5">Garage</p>
            </div>
          </div>
        </div>

        <!-- What to Expect -->
        <div class="mb-6">
          <h2 class="hand-drawn-text text-2xl font-bold text-orange-800 mb-4 text-center transform -rotate-0.5">
            What to Expect:
          </h2>
          <ul class="hand-drawn-text text-lg space-y-2 text-gray-900 pl-6">
            <li class="transform rotate-0.5">⚔️ Epic Campaign Session</li>
            <li class="transform -rotate-0.5">🍕 Food & Snacks (Lots of them!)</li>
            <li class="transform rotate-0.3">🎲 Dice Rolling</li>
            <li class="transform -rotate-0.3">🍹 Drinking elixirs</li>
            <li class="transform rotate-0.5">🎉 Fun Times with Fellow Adventurers</li>
          </ul>
        </div>

        <!-- RSVP Section -->
        <div class="text-center hand-drawn-border bg-pink-50 p-5">
          <p class="hand-drawn-text text-lg font-bold text-purple-800 mb-2 transform -rotate-0.5">
            Good vibes required! 🎭
          </p>
          <p class="hand-drawn-text text-base text-gray-800 transform rotate-0.5">
            You can bring your own dice if you want! 🎲
          </p>
          <p class="hand-drawn-text text-base text-xl text-gray-800 transform rotate-0.5">
            Wishlist available <a target="_blank" class="underline font-bold" href="https://wishpicks.com/uk/wishlist/6592d9be-9801-4428-8d8d-078511c3855f">here</a>! 🎭
          </p>
        </div>

        <div>
          <!-- <iframe src="https://wishpicks.com/uk/wishlist/6592d9be-9801-4428-8d8d-078511c3855f"></iframe> -->
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Caveat:wght@400;500;600;700&display=swap');

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

