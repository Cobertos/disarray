<template>
  <img
    :src="discordCDNUrl"
  >
</template>

<script>
/**img that can take a url or a responsive-loader image
 * object.
 */
export default {
  props: {
    resourceType: {
      type: String,
      validator(value){ return ['guild/icon', 'user/avatar'].includes(value); },
      required: true
    },
    resource: {
      type: String,
      required: true
    },
    ext: {
      type: String,
      validator(value){ return ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(value) },
      default(){ return 'png' } //TODO: Eventhing supports png, but probably should use webp, only 2 dont support webp
    }
  },
  computed: {
    discordCDNUrl() {
      const baseUrl = `https://cdn.discordapp.com/`;

      // TODO:
      // https://discord.com/developers/docs/reference#image-formatting
      // Custom Emoji  emojis/emoji_id.png PNG, GIF
      // Guild Splash  splashes/guild_id/guild_splash.png  PNG, JPEG, WebP
      // Guild Discovery Splash  discovery-splashes/guild_id/guild_discovery_splash.png  PNG, JPEG, WebP
      // Guild Banner  banners/guild_id/guild_banner.png PNG, JPEG, WebP
      // Default User Avatar embed/avatars/user_discriminator.png * ***  PNG
      // User Avatar avatars/user_id/user_avatar.png **  PNG, JPEG, WebP, GIF
      // Application Icon  app-icons/application_id/icon.png PNG, JPEG, WebP
      // Application Asset app-assets/application_id/asset_id.png  PNG, JPEG, WebP
      // Achievement Icon  app-assets/application_id/achievements/achievement_id/icons/icon_hash.png PNG, JPEG, WebP
      // Team Icon team-icons/team_id/team_icon.png  PNG, JPEG, WebP

      // TODO: Support ?size=desired_size

      if (this.resourceType === 'guild/icon') {
        // Guild Icon  icons/guild_id/guild_icon.png **  PNG, JPEG, WebP, GIF
        return `${baseUrl}icons/${this.resource.id}/${this.resource.icon}.${this.ext}`;
      }
      else if (this.resourceType === 'user/avatar') {
        // User Avatar avatars/user_id/user_avatar.png **  PNG, JPEG, WebP, GIF
        return `${baseUrl}avatars/${this.resource.id}/${this.resource.avatar}.${this.ext}`;
      }
      else {
        throw new Error(`Unsupported resource type ${this.resource}`);
      }
    }
  }
};
</script>
