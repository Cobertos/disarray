<template>
  <div>
    <h1>Template test site</h1>
    <nuxt-link to="style-test">Style test</nuxt-link>
    <h2>Template features</h2>
    <table>
      <tr
        v-for="invite in json"
      >
        <td>
          {{invite.approximate_member_count}}
        </td>
        <td>
          {{invite.approximate_presence_count}}
        </td>
        <td>
          <a :href="`https://discord.gg/${invite.code}`">Invite link</a>
        </td>
        <td>
          <div
            v-if="invite.inviter"
          >
            {{invite.inviter.username}}
            {{invite.inviter.id}}
            <discord-image-resource
              :resourceType="'user/avatar'"
              :resource="invite.inviter"
            />
          </div>
        </td>
        <td>
          <div
            v-if="invite.guild"
          >
            {{invite.guild.name}}
            {{invite.guild.id}}
            <discord-image-resource
              :resourceType="'guild/icon'"
              :resource="invite.guild"
            />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import json from '@/../discord-crawler/invites100.json';
import DiscordImageResource from '@/components/discord/DiscordImageResource.vue';
export default {
  components: { DiscordImageResource },
  data(){
    return {
      json
    };
  }
}
</script>

<style lang="scss">

</style>