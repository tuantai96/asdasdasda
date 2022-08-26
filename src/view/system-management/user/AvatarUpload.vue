<template>
  <div class="field flex flex-column align-items-center justify-content-center">
    <label class="flex">
      <img src="#" alt="avatar"/>
      <i class="pi default-avatar"></i>
      <div class="avatar-border border-3"></div>
      <i class="pi pi-times-circle remove-avatar"/>

<!--      <img v-if="previewImage" :src="previewImage" alt="avatar"/>-->
<!--      <i v-else :class="iconClass"></i>-->
<!--      <div v-tooltip.top="t('avatarUpload.clickToUpdateAvatar')" class="avatar-border border-3"></div>-->
<!--      <i v-if="previewImage"-->
<!--         v-tooltip.top="t('avatarUpload.removeAvatar')"-->
<!--         class="pi pi-times-circle remove-avatar" @click="removeImage"/>-->
<!--      <input ref="avatarInput" accept="image/*" name="avatar" type="file" @change="onFileChange">-->
<!--      <input :value="isAvatarChange" name="isAvatarChange" type="hidden">-->
    </label>

    <div class="flex mt-2 flex-row w-full">
      <Button class="flex-1 flex-grow-1 flex-basis-0 p-button-outlined justify-content-center w-auto ml-5 mr-1">
        {{ $t('update') }}
      </Button>

      <Button class="flex-1 flex-grow-1 flex-basis-0 p-button-outlined p-button-secondary justify-content-center w-auto  ml-1 mr-5">
        {{ $t('avatarUpload.removeAvatar') }}
      </Button>
    </div>

  </div>
</template>

<script>
import {useI18n} from 'vue-i18n';

export default {
  name: "AvatarUpload",

  setup() {
    const {t} = useI18n();
    return {t}
  },

  data() {
    return {
      previewImage: null
    };
  },
  props: {
    avatarUrl: String,
    icon: {
      type: String,
      default: 'pi-user'
    }
  },
};
</script>

<style scoped>
.avatar-upload {
  position: relative;
  height: 16rem;
  width: 16rem;
  cursor: pointer;
}

.avatar-upload .default-avatar {
  font-size: 10rem;
  position: absolute;
  top: 3rem;
  left: 3rem;
}

.avatar-upload .remove-avatar:hover {
  opacity: 100%;
  transition: 0.5s;
}

.avatar-upload .remove-avatar {
  position: absolute;
  font-size: 2rem;
  top: 1rem;
  right: 1rem;
  opacity: 20%;
}

.avatar-upload.avatar-circle .remove-avatar {
  top: 2.5rem;
  right: 2.5rem;
}

.avatar-upload .avatar-border {
  width: 16rem;
  height: 16rem;
  position: absolute;
  top: 0;
  left: 0;
  color: var(--surface-500);
}

.avatar-upload img {
  width: 16rem;
  height: 16rem;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}

.avatar-upload.avatar-circle {
  border-radius: 50%;
}

.avatar-upload.avatar-circle img {
  border-radius: 50%;
}

.avatar-upload.avatar-circle .avatar-border {
  border-radius: 50%;
}

.avatar-upload input {
  display: none;
}
</style>