import { defineStore } from 'pinia';
import { team_list } from '~/stores/datas/JDS-2024';

export const useTeamStore = defineStore('teams', {
  state: () => ({ 
    list: [], 
    players: [] ,
    form: {
      team_id: null,
      isWin: true,
      players: [
        {
          player_id: null,
          hero_id: null,
          kill: 0,
          assist: 0,
          kda: 0,
        },
        {
          player_id: null,
          hero_id: null,
          kill: 0,
          assist: 0,
          kda: 0,
        },
        {
          player_id: null,
          hero_id: null,
          kill: 0,
          assist: 0,
          kda: 0,
        },
        {
          player_id: null,
          hero_id: null,
          kill: 0,
          assist: 0,
          kda: 0,
        },
        {
          player_id: null,
          hero_id: null,
          kill: 0,
          assist: 0,
          kda: 0,
        },
      ]
    }
  }),
  actions: {
    getTeamList() {
      this.list = team_list;
    },
    getPlayerByTeam(team_id) {
      const team = team_list.find((team) => team.team_id == team_id)

      this.players = team.players;
    },
    setMatch() {
      console.log(this.form)
    },
    resetForm() {
      this.form.players = [
        {
          player_id: null,
          hero_id: null,
          kill: 0,
          assist: 0,
          kda: 0,
        },
        {
          player_id: null,
          hero_id: null,
          kill: 0,
          assist: 0,
          kda: 0,
        },
        {
          player_id: null,
          hero_id: null,
          kill: 0,
          assist: 0,
          kda: 0,
        },
        {
          player_id: null,
          hero_id: null,
          kill: 0,
          assist: 0,
          kda: 0,
        },
        {
          player_id: null,
          hero_id: null,
          kill: 0,
          assist: 0,
          kda: 0,
        },
      ];
    }
  }
})