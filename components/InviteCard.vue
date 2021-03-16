<template>
<a
  class="invite-card"
  :href="`https://discord.gg/${invite.code}`"
>
  <!--div
    class="invite-card-inviter"
    v-if="invite.inviter"
  >
    <p
      :title="`User id: ${invite.inviter.id}`"
    >
      {{invite.inviter.username}}
    </p>
    <discord-image-resource
      :resourceType="'user/avatar'"
      :resource="invite.inviter"
    />
  </div-->
  <div
    class="invite-card-content"
  >
    <div
      class="invite-card-content-text"
    >
      <header>
        <h3
          class="invite-card-content-name"
          :title="`Guild id: ${invite.guild.id}`"
          v-text="invite.guild.name"
        />
        <p
          class="invite-card-content-channel"
          :title="`Channel id: ${invite.channel.id}`"
          v-text="`> #${invite.channel.name}`"
        />
      </header>
      <div
        class="invite-card-presence">
        <fa :icon="['fas', 'users']" />
        {{invite.approximate_member_count}}
        <fa class="online-icon" :icon="['fas', 'circle']" />
        {{invite.approximate_presence_count}}
      </div>
    </div>
    <discord-image-resource
      class="invite-card-image"
      :resourceType="'guild/icon'"
      :resource="invite.guild"
    />
    <p
      class="invite-card-description"
      v-if="invite.guild.description"
      v-text="invite.guild.description"
    />
  </div>
</a>
</template>

<script>
import DiscordImageResource from '@/components/discord/DiscordImageResource.vue';
export default {
  components: { DiscordImageResource },
  props: {
    invite: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.invite-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FFF;
  background-blend-mode: difference;

  .invite-card-presence {
    margin-top: 8px;
    font-size: 16px;

    .online-icon {
      color: #7F7;
      margin-left: 5px;
    }
  }

  .invite-card-image {
    width: 96px;
    height: auto;
  }

  .invite-card-content {
    width: 100%;
    padding: 30px 10px 10px;

    .invite-card-content-text {
      header {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        h3, p {
          margin: 0;
        }

        .invite-card-content-name {

        }

        .invite-card-content-channel {
          margin-left: 20px;
          color: #CCC;
        }
      }
    }

    .invite-card-description {
      margin-top: 10px;
    }

    .invite-card-image {
      float: left;
      margin: 10px;
    }
  }
}
</style>