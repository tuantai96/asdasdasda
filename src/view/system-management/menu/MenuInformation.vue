<template>
  <div class="menu-information card">
    <h5>
      <slot name="title">{{ this.$t("menu.name") }}</slot>
    </h5>
    <div class="p-fluid">
      <div class="formgrid grid">
        <div class="field col">
          <label for="name">{{ this.$t("menu.properties.name") }}</label>
          <inputText id="name" type="text"/>
        </div>
        <div class="field col">
          <label for="url">{{ this.$t("menu.properties.url") }}</label>
          <inputText id="url" type="text"/>
        </div>
      </div>
      <div class="formgrid grid">
        <div class="field col">
          <label for="parentMenu">{{ this.$t("menu.properties.parentMenu") }}</label>
          <Dropdown
              id="parentMenu"
              name="parentMenu"
              v-model="parentMenuOption"
              optionLabel="parent"
              :options="parentMenuOptions"
              :placeholder="t('select')"></Dropdown>
        </div>
        <div class="field col">
          <label for="component">{{ this.$t("menu.properties.component") }}</label>
          <Dropdown
              id="component"
              name="component"
              v-model="componentOption"
              optionLabel="component"
              :options="componentOptions"
              :placeholder="t('select')"></Dropdown>
        </div>
      </div>
      <div class="formgrid grid">
        <div class="field col">
          <label for="icon">{{ this.$t("menu.properties.icon") }}</label>
          <inputText id="icon" type="text"/>
        </div>
        <div class="field col">
          <label for="active">{{ this.$t("menu.properties.status") }}</label>
          <Dropdown
              id="active"
              name="active"
              v-model="statusOption"
              optionLabel="status"
              :options="statusOptions"
              :placeholder="t('select')"></Dropdown>
        </div>
      </div>
    </div>
    <div class="grid justify-content-center mt-5">
      <Button type="button" class="p-button-outlined p-button-plain mr-3" :label="t('cancel')" icon="pi pi-times"/>
      <Button type="button" class="ml-3" :label="t('save')" icon="pi pi-save"/>
    </div>
  </div>
</template>

<script>
import {useI18n} from 'vue-i18n';

export default {
  setup() {
    const {t} = useI18n();
    return {t}
  },

  data() {
    return {
      parentMenuOption: null,
      statusOption: null,
      componentOption: null,

      parentMenuOptions: [
        {parent: 'Không có lựa chọn nào', code: '1'},
      ],
      statusOptions: [
        {status: 'Đang hoạt động', code: '1'},
        {status: 'Không hoạt động', code: '2'},
      ],
      componentOptions: [
        {component: 'Không có lựa chọn nào', code: '1'},
      ]
    }
  },
}

</script>

<style scoped lang="scss">
@import "src/assets/styles_Demo/createUser";
</style>