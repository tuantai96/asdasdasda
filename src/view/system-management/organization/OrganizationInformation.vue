<template>
  <div class="organization-information card">
    <h5>
      <slot name="title">{{ this.$t("organization.name") }}</slot>
    </h5>
    <div class="p-fluid">
      <div class="formgrid grid">
        <div class="field col">
          <label for="organizationName">{{ this.$t("organization.properties.organizationName") }}</label>
          <inputText id="organizationName" type="text"/>
        </div>
        <div class="field col">
          <label for="parentOrganization">{{ this.$t("organization.properties.parentOrganization") }}</label>
          <Dropdown
              id="parentOrganization"
              name="parentOrganization"
              v-model="parentOption"
              optionLabel="parent"
              :options="parentOptions"
              :placeholder="t('selectParentOrganization')"></Dropdown>
        </div>
      </div>
      <div class="formgrid grid">
        <label for="description">{{ this.$t("organization.properties.description") }}</label>
        <Textarea id="description" autoResize="true" rows="5"/>
      </div>
    </div>
    <div class="grid justify-content-center mt-5">
      <Button type="button" class="p-button-outlined p-button-plain mr-3" :label="t('back')" icon="pi pi-times"/>
      <Button type="button" class="ml-3" :label="t('save')" icon="pi pi-save"/>
    </div>
  </div>
</template>

<script>

import {useI18n} from "vue-i18n";

export default {
  setup() {
    const {t} = useI18n();
    return {t}
  },

  data() {
    return {
      parentOption: null,

      parentOptions: [
        {parent: 'Không có lựa chọn nào', code: '1'},

      ]
    }
  },
}

</script>

<style scoped lang="scss">
@import "src/assets/styles_Demo/createUser";
</style>