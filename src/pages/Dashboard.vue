<template>
  <timeline v-if="loading" ref="timeline" :groups="groups" :items="items" :options="options"></timeline>
</template>
<script>
import { GetGroups, GetSubGroups } from "@/config/api";

export default {
  data() {
    return {
      groups: [],
      items: [],
      options: {
        editable: true
      },
      loading: false
    };
  },
  methods: {
    async fetchGroups() {
      return await GetGroups();
    },
    async fetchSubGroups() {
      return await GetSubGroups();
    }
  },
  async mounted() {
    try {
      this.groups = await this.fetchGroups();
      this.items = await this.fetchSubGroups();
      this.loading = true;
    } catch (error) {
      console.log(error.message)
    }
  }
};
</script>

