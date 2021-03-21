<template>
  <img
    loading
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
      type: Object, //guild, user, whatever type of object we're handling
      required: true
    },
    ext: {
      type: String,
      validator(value){ return ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(value) },
      // Default is undefined, which is a special-sauce choose (based on some context)
      default(){ return undefined }
    },
    animate: {
      // If set, will animate, if the resource supports it
      type: Boolean,
      default() { return false; }
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
        if (this.resource.icon === null) {
          // Generate a data-url for the missing guild icon (like the Discord web client does)
          // Data URL is this svg (the example just shows BB
          //  <svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
          //   <rect height="128" width="128" y="0" x="0" fill="#595959"/>
          //   <text text-anchor="start" font-family="sans-serif" font-size="60" y="78.5" x="23.5" fill="#ffffff">BB</text>
          // </svg>
          const guildInitials = this.resource.name.split(' ').slice(0,3).map(w => w[0]).join('') || 'NA';
          const dataUrl = `data:image/svg+xml,%3Csvg width='128' height='128' xmlns='http://www.w3.org/2000/svg'%3E%3Crect height='128' width='128' y='0' x='0' fill='%23595959'/%3E%3Ctext text-anchor='middle' font-family='sans-serif' font-size='54' y='84' x='64' fill='%23ffffff'%3E${guildInitials}%3C/text%3E%3C/svg%3E`;
          return dataUrl;
        }

        let ext = this.ext;
        if (!ext) {
          ext = this.resource.icon.startsWith('a_') && this.animate ? 'gif' : 'webp';
        }

        // Guild Icon  icons/guild_id/guild_icon.png **  PNG, JPEG, WebP, GIF
        return `${baseUrl}icons/${this.resource.id}/${this.resource.icon}.${ext}`;
      }
      else if (this.resourceType === 'user/avatar') {
        let ext = this.ext;
        if (!ext) {
          ext = this.resource.icon.startsWith('a_') && this.animate ? 'gif' : 'webp';
        }

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
