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
  <!-- TODO: Show date using snowflake -->
  <div
    class="invite-card-top"
  >
    <discord-image-resource
      class="invite-card-image"
      :resourceType="'guild/icon'"
      :resource="invite.guild"
    />
    <div
      class="invite-card-content"
    >
      <h3
        class="invite-card-title"
        :title="`Guild id: ${invite.guild.id}`"
        v-text="invite.guild.name"
      />
      <div
        class="invite-card-under-title"
      >
        <div
          class="invite-card-user-count"
        >
          <fa :icon="['fas', 'users']" />
          {{invite.approximate_member_count}}
        </div>
        <div
          class="invite-card-presence-count"
        >
          <fa class="online-icon" :icon="['fas', 'circle']" />
          {{invite.approximate_presence_count}}
        </div>
        <p
          class="invite-card-channel"
          :title="`Channel id: ${invite.channel.id}`"
          v-text="`> #${invite.channel.name}`"
        />
      </div>
    </div>
  </div>
  <p
    class="invite-card-description"
    v-if="invite.guild.description"
    v-text="invite.guild.description"
  />
  <p
    v-if="invite.matchStr"
    v-html="invite.matchStr"
  />
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
  color: #000;
  background-blend-mode: difference;
  padding: 30px 10px 10px;

  .invite-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .invite-card-image {
    max-height: 60px;
    margin-right: 20px;
  }

  .invite-card-content {
    width: 100%;

    .invite-card-title {
      margin: 0;
    }

    .invite-card-channel {
      margin-left: 20px;
      color: #444;
      font-size: 14px;
    }

    .invite-card-under-title {
      display: flex;
      flex-align: flex-start;
      align-items: center;
      margin-top: 3px;
      font-size: 16px;

      > *:nth-child(n+2) {
        margin-left: 10px;
        margin-bottom: 0;
        margin-top: 0;
      }

      .online-icon {
        color: #7F7;
      }

      .invite-card-user-count,
      .invite-card-presence-count {
        white-space: nowrap;
      }
    }
  }

  .invite-card-description {
    margin-top: 10px;
  }

  b {
    color: #F0F;
  }
}
</style>