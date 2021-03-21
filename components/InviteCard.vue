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
        <p
          title="Date guild created on"
        >
          Est. <vue-time
            :datetime="timestampFromSnowflake(invite.guild.id)"
            :format="'MMM YYYY'"
          />
        </p>
        <p class="diamond">⬥</p>
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
        <p class="diamond">⬥</p>
        <p
          class="invite-card-channel"
          :title="`Channel id: ${invite.channel.id}`"
        >
          >&nbsp;{{invite.channel.name}}
        </p>
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
import VueTime from '@/components/util/VueTime.vue';
export default {
  components: { DiscordImageResource, VueTime },
  props: {
    invite: {
      type: Object,
      required: true
    }
  },
  methods: {
    timestampFromSnowflake(id) {
      // BigInt is only somewhat recently supported
      // From the docs (get timestamp bits only, then add Discord epoch offset)
      // https://discord.com/developers/docs/reference#snowflakes
      return Number((BigInt(id) >> 22n)) + 1420070400000;
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/_utils.scss";

.invite-card {
  display: block;
  position: relative;
  color: #000;
  background-blend-mode: difference;
  padding: 10px 0;

  .invite-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @include desktop {
      align-items: center;
    }
  }

  .invite-card-image {
    max-height: 50px;
    margin-right: 10px;

    @include desktop {
      max-height: 60px;
      margin-right: 20px;
    }
  }

  .invite-card-content {
    width: 100%;

    .invite-card-title {
      margin: 0;
      font-size: 25px;

      @include desktop {
        font-size: 30px;
      }
    }

    .invite-card-channel {
      margin-left: 20px;
      color: #444;
      font-size: 12px;

      @include desktop {
        font-size: 14px;
      }
    }

    .invite-card-under-title {
      display: flex;
      flex-align: flex-start;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 3px;
      font-size: 14px;

      @include desktop {
        font-size: 16px;
      }

      > * {
        margin-bottom: 0;
        margin-top: 0;
      }

      p {
        font-size: inherit;
      }

      > *:nth-child(n+2) {
        margin-left: 10px;
      }

      .diamond {
        margin-top: -4px;
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