<script setup lang="ts">
import type { RecordModel } from 'pocketbase';
const { $pb } = useNuxtApp();

const age = ref(35) // Update with your age
const user = ref<UserI | undefined>();
const status = ref<'pending' | 'declined' | 'accepted' | ''>('');

const route = useRoute();
const participants = ref<RecordModel[]>([]);

const isFetchingData = ref(true);

$pb.collection('participants').getFullList().then((list) => {
  list.forEach(p => {
    participants.value.push(p);
  });

  user.value = list.find(p => p.id === route.query?.id);
  isFetchingData.value = false;
  console.log('user, ',user.value);

  status.value = user.value?.status || 'pending';
});

const changeYourMindHandler = () => {
  if(!user.value) return ;

  return $pb.collection('participants').update(user.value.id, { status: 'pending' }).then((updated) => {
    status.value = 'pending';
  });
};
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
        <img src="/d20.png" alt="Dice" class="hand-drawn-dice w-full h-full"></img>
      </div>
      <div class="absolute -bottom-6 -left-6 transform -rotate-12 w-16 h-16 z-20">
        <img src="/d20_2.png" alt="Dice" class="hand-drawn-dice w-full h-full"></img>

      </div>
      <div class="absolute top-1/4 -left-4 transform rotate-45 w-12 h-12 z-20">
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

      <template v-if="user">
        <!-- Main Message -->
        <div class="text-center space-y-3 mb-8">
          <p class="hand-drawn-text text-2xl md:text-3xl text-purple-800 transform -rotate-0.5">
            {{user?.name}} you're invited to an epic adventure!
          </p>
          <p class="hand-drawn-text text-xl md:text-2xl text-indigo-800 transform rotate-0.5">
            Join me as I level up to Level {{ age }}!
          </p>
        </div>

        <!-- Decorative divider -->
        <div class="hand-drawn-divider mb-6"></div>

        <!-- Details Section -->
        <Details/>
        <Expectations/>


        <!-- RSVP Section -->
        <div class="text-center hand-drawn-border bg-pink-50 p-5">
          <p class="hand-drawn-text text-lg font-bold text-purple-800 mb-2 transform -rotate-0.5">
            Good vibes required! 🎭
          </p>
          <p class="hand-drawn-text text-base text-gray-800 transform rotate-0.5">
            You can bring your own dice if you want! 🎲
          </p>
          <p class="hand-drawn-text  text-xl text-gray-800 transform rotate-0.5">
            Don't know what to bring with you?
          </p>
          <p class="hand-drawn-text text-xl text-gray-800 transform rotate-0.5">
            Check out the <a target="_blank" class="underline font-bold" href="https://wishpicks.com/uk/wishlist/6592d9be-9801-4428-8d8d-078511c3855f">wishlist here</a>! 🎭
          </p>
        </div>

        <Agrement :user="user" v-model:status="status" />

        <div v-if="status==='declined'" class="text-center hand-drawn-border bg-pink-50 p-5 mt-10">
          <p>It's a pity you won't be coming. 😭</p>

          <p>Changed you mind?
            <button @click="changeYourMindHandler" class="underline font-bold active:translate-y-[1px] hover:bg-green-600 rounded-md p-2">Yes!!!</button>
          </p>


        </div>

        <div v-if="status==='accepted'" class="text-center hand-drawn-border bg-pink-50 p-5 mt-10">
          <p class="text-2xl">🎉🥳🎊🎁</p>
          <p>Great news {{user?.name}}! </p>
          <p v-if="user?.nickname">We'll call you <i class="text-green-700 font-bold">{{user.nickname}}</i>. </p>
          <p v-if="user?.alcohol==='non'">Hopefully you are doing well and if you'll change you mind about drinks - let me now. </p>

          <p v-if="user?.allergy.length">I'll note down the information about your <i class="text-green-700 font-bold">{{user.allergy}}</i> allergy and inform our chef about them!!!</p>
          <p>I can't wait to see you there and dive into epic adventures!!! </p>
          <p>See you there!!!</p>
        </div>

      </template>
        <div v-if="isFetchingData">Our mage is searching you invitation. Please wait...</div>
        <div v-if="!isFetchingData && !user">We can't find your invitation. Ask our adventurer about it.</div>
      </div>
    </div>
  </div>
</template>



<style>

</style>

