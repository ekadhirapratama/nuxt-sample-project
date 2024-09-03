import { defineStore } from 'pinia';
import { additionalHeroes } from '~/stores/datas/heroes';

export const useHeroesStore = defineStore('heroes', {
  state: () => ({ list: [] }),
  actions: {
    async getHeroList() {
      const response = await $fetch('https://api.dazelpro.com/mobile-legends/hero', {
        method: 'GET',
      });

      if (response.success) {
        const heroApi = response.hero.map((hero) => {
          const tempHero = hero;
          if (tempHero.hero_name == 'Kufra') {
            tempHero.hero_name = 'Khufra'
          } else if (tempHero.hero_name == 'Chang`e') {
            tempHero.hero_name = "Chang'e"
          } else if (tempHero.hero_name == 'Yi Sun-shin') {
            tempHero.hero_name = "Yi_Sun-Shin"
          }

          const hero_avatar = 'https://cdn2.vistek.id/mlbb/heroes/' + tempHero.hero_name.replace(/\s/g,'') + '.jpg'

          return {
            ...tempHero,
            hero_avatar,
          };
        });

        this.list = heroApi.concat(additionalHeroes).sort((a,b) => a.hero_name.charCodeAt(0) - b.hero_name.charCodeAt(0));
      }

      return response;
    }
  }
})