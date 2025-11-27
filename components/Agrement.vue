<script setup lang="ts">
import type { RecordModel } from 'pocketbase';

const { $pb } = useNuxtApp();
const props = defineProps<{ user: UserI }>();

const status = defineModel<'pending' | 'declined' | 'accepted' | ''>('status', { default: 'pending' });


// const user = ref<RecordModel | undefined>();
// const status = ref('');
const alcohol = useLocalStorage('alcohol', '');
const wasNonAlco = ref(false);
const count = ref(0);

const time = useLocalStorage('time', '');
const allergy = useLocalStorage('allergy', '');
const nickname = useLocalStorage('nickname', '');

watch(alcohol, (newVal) => {
    if(newVal === 'non') {
      wasNonAlco.value = true;
      count.value +=1;
    } else {
      wasNonAlco.value = false;
    }
});
// const route = useRoute();
// const participants = ref<RecordModel[]>([]);

// $pb.collection('participants').getFullList().then((list) => {
//     list.forEach(p => {
//         participants.value.push(p);
//     });
//
//   user.value = list.find(p => p.email === route.query.email)
//   status.value = user.value?.status || 'pending';
// });

// const user = computed(() => {
//     return participants.value.find(p => p.email === route.query.email);
// });

console.log(props.user);



const acceptHandler = () => {
    console.log('accept');
  if(!props.user) return ;
  const options = { status: 'accepted', allergy: allergy.value, time:time.value, alcohol: alcohol.value, nickname: nickname.value }

  return $pb.collection('participants').update(props.user.id, options).then((updated) => {
    status.value = 'accepted';
  });
};
const declineHandler = () => {
  if(!props.user) return ;

  return $pb.collection('participants').update(props.user.id, { status: 'declined' }).then((updated) => {
      status.value = 'declined';
  });
};

</script>

<template>
            <!-- RSVP Section -->
<div v-if="status==='pending'" class="text-center hand-drawn-border bg-pink-50 p-5 mt-10">
  <p class="hand-drawn-text text-lg font-bold text-purple-800 mb-2 transform -rotate-0.5 relative">
    <div v-if="nickname.length" class="text-green-500 text-2xl font-extrabold absolute top-0 right-0">🧙‍</div>
    <div v-else class="text-green-500 text-2xl font-extrabold absolute top-0 right-0">😈️</div>

    <form>
      <fieldset class="border flex justify-around p-5 w-full ">
        <legend>How should we call you? </legend>

        <div class="flex gap-1 w-full">
          <input :placeholder="user.name" class="w-full px-2 bg-amber-50" type="text" v-model="nickname" />
        </div>

      </fieldset>
    </form>
  </p>

    <p class="hand-drawn-text text-lg font-bold text-purple-800 mb-2 transform -rotate-0.5 relative">
      <div v-if="alcohol === 'non'" class="text-green-500 text-2xl font-extrabold absolute top-0 right-0">🤔</div>
      <div v-if="alcohol === 'hard'" class="text-green-500 text-2xl font-extrabold absolute top-0 right-0">🤼</div>
      <div v-if="alcohol === 'wine' || alcohol ==='beer' || alcohol === 'cocktails'" class="text-green-500 text-2xl font-extrabold absolute top-0 right-0">ꪜ</div>

      <form>
        <fieldset class="border ">
          <legend>What do you prefer to drink?</legend>
          <div v-if="alcohol==='non' && count < 2" class="text-red-500">Are you sure??? 😱😱😱</div>
          <div v-if="count === 2 && wasNonAlco" class="text-red-500">Not again please 😭🥺😵‍💫</div>
          <div v-if="count > 2 && wasNonAlco" class="text-red-500">Ohh, come on... 🥺👉👈</div>
          <div v-if="count === 1 && !wasNonAlco" class="text-green-500">Phew 😮‍💨🫡💪</div>
          <div v-if="count === 2 && !wasNonAlco" class="text-green-500">I though were you serious 😮‍💨😓😰 </div>
          <div v-if="count > 2 && !wasNonAlco" class="text-green-500">I almost believed you 😂🤣🤪😁</div>

          <div class="flex justify-around p-1">
            <div class="flex ">
              <input type="radio" id="wine" name="alcohol" value="wine" :checked="alcohol==='wine'" v-model="alcohol" />
              <label for="wine">Wine 🍷</label>
            </div>

            <div class="flex ">
              <input type="radio" id="beer" name="alcohol" value="beer" :checked="alcohol==='beer'" v-model="alcohol" />
              <label for="beer">Beer 🍺</label>
            </div>

            <div class="flex ">
              <input type="radio" id="cocktails" name="alcohol" value="cocktails" :checked="alcohol==='cocktails'" v-model="alcohol" />
              <label for="cocktails">Cocktails 🍹</label>
            </div>

            <div class="flex ">
              <input type="radio" id="non" name="alcohol" value="non" :checked="alcohol==='non'" v-model="alcohol" />
              <label for="non">Non-alco 🔞</label>
            </div>

            <div class="flex">
              <input type="radio" id="hard" name="alcohol" value="hard" :checked="alcohol==='hard'" v-model="alcohol"  />
              <label for="hard">Hard drinks 🥃</label>
            </div>
          </div>


        </fieldset>
      </form>
    </p>

  <p class="hand-drawn-text text-lg font-bold text-purple-800 mb-2 transform -rotate-0.5 relative">
    <div v-if="time === 'intime'" class="text-green-500 text-2xl font-extrabold absolute top-0 right-0">☺️</div>
    <div v-if="time === 'late'" class="text-green-500 text-2xl font-extrabold absolute top-0 right-0">🫣</div>
    <div v-if="time === 'later'" class="text-green-500 text-2xl font-extrabold absolute top-0 right-0">😱</div>

    <form>
      <fieldset class="border flex justify-around p-1 ">
        <legend>I will </legend>

        <div class="flex gap-1">
          <input type="radio" id="intime" name="time" value="intime" :checked="time==='intime'" v-model="time" />
          <label for="intime"> be in time</label>
        </div>

        <div class="flex gap-1">
          <input type="radio" id="late" name="time" value="late" :checked="time==='late'" v-model="time" />
          <label for="late"> little bit late</label>
        </div>

        <div class="flex gap-1">
          <input type="radio" id="later" name="time" value="later" :checked="time==='later'" v-model="time" />
          <label for="later"> much later</label>
        </div>
      </fieldset>
    </form>
  </p>

  <p class="hand-drawn-text text-lg font-bold text-purple-800 mb-2 transform -rotate-0.5 relative">
    <div v-if="allergy.length" class="text-green-500 text-2xl font-extrabold absolute top-0 right-0">✍️</div>
    <div v-else class="text-green-500 text-2xl font-extrabold absolute top-0 right-0">☺️</div>

    <form>
      <fieldset class="border flex justify-around p-5 w-full ">
        <legend>Do you have any allergies? </legend>

        <div class="flex gap-1 w-full">
          <input placeholder="I don't have such weaknesses ⚔️ " class="w-full px-2 bg-amber-50" type="text" v-model="allergy" />
        </div>

      </fieldset>
    </form>
  </p>

    <p class="hand-drawn-text text-lg font-bold text-purple-800 mb-2 transform -rotate-0.5 flex justify-center gap-10">
        <button @click="acceptHandler" class="hand-drawn-text text-lg font-bold text-purple-800 mb-2 transform -rotate-0.5 bg-purple-500 text-white px-4 py-2 rounded-md active:translate-y-[1px]">
            Accept
        </button>
        <button @click="declineHandler" class="hand-drawn-text text-lg font-bold text-purple-800 mb-2 transform -rotate-0.5 bg-red-500 text-white px-4 py-2 rounded-md active:translate-y-[1px]">
            Decline
        </button>
    </p>
</div>

</template>

<style scoped>
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
</style>
