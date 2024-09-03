<template>
  <div class="my-[60px] max-w-[800px] mx-auto">
    <div class="text-xl pb-3 font-bold">
      Form Match Submit
    </div>
    <v-card class="w-full" elevation="4">
      <div class="p-5">
        <div class="grid grid-cols-4 gap-4 mt-2">
          <v-select
            label="Team"
            density="comfortable"
            variant="outlined"
            v-model="teamStore.form.team_id"
            :items="teamStore.list"
            :item-title="'team_name'"
            :item-value="'team_id'"
            @update:modelValue="actionTeamChange"
          ></v-select>
          <v-radio-group inline v-model="teamStore.form.isWin">
            <v-radio label="Win" :value="true"></v-radio>
            <v-radio label="Lose" :value="false"></v-radio>
          </v-radio-group>
        </div>
        
        <div class="grid grid-cols-5 gap-5" v-for="(player, index) in teamStore.form.players" :key="index">
          <v-select
            label="Player Name"
            density="comfortable"
            variant="outlined"
            v-model="player.player_id"
            :items="teamStore.players"
            :item-title="'username'"
            :item-value="'player_id'"
          ></v-select>
          <v-autocomplete
            label="Hero"
            density="comfortable"
            variant="outlined"
            v-model="player.hero_id"
            :items="heroesStore.list"
            :item-title="'hero_name'"
            :item-value="'hero_id'"
          >
            <template v-slot:item="{ item, props }">
              <v-list-item :append-avatar="item.raw.hero_avatar" v-bind="props"></v-list-item>
            </template>
          </v-autocomplete>
          <v-text-field
            label="Kill"
            type="number"
            variant="outlined"
            density="comfortable"
            v-model="player.kill"
          ></v-text-field>
          <v-text-field
            label="Assist"
            type="number"
            variant="outlined"
            density="comfortable"
            v-model="player.assist"
          ></v-text-field>
          <v-text-field
            label="KDA"
            variant="outlined"
            density="comfortable"
            v-model="player.kda"
            ></v-text-field>
        </div>

        <div class="flex justify-end">
          <v-btn color="success" @click="teamStore.setMatch()">
            Submit
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { useHeroesStore } from "~/stores/modules/heroes.js";
import { useTeamStore } from "~/stores/modules/team.js";

const heroesStore = useHeroesStore();
const teamStore = useTeamStore();

onMounted(() => {
  heroesStore.getHeroList();
  teamStore.getTeamList();
})

const actionTeamChange = (selected_id) => {
  teamStore.resetForm();
  teamStore.getPlayerByTeam(selected_id);
}
</script>