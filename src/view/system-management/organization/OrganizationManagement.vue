<template>
  <div class="grid">
    <div class="col-3">
      <div class="">
        <Tree :value="organizationValue" selectionMode="single" v-model:selectionKeys="selectedOrganizationValue"></Tree>
      </div>
    </div>
    <div class="col-9">
      <div class="card">
        <Accordion  class="mb-4">
          <AccordionTab :header="t('search')">
            <div class="p-fluid">
              <div class="formgrid grid">
                <div class="field col">
                  <label for="searchName">{{ this.$t('organization.properties.organizationName') }}</label>
                  <inputText id="searchName" type="text"/>
                </div>
              </div>
            </div>
            <div class="grid justify-content-center mt-5">
              <Button type="button" class="ml-3" :label="t('search')" icon="pi pi-search"/>
            </div>
          </AccordionTab>
        </Accordion>

        <toolbar class="mb-4">
          <template v-slot:start>
            <div class="my-2">
              <Button type="button" :label="t('create')" class="p-button-success mr-2" icon="pi pi-plus" @click="openNew"/>
              <Button type="button" :label="t('delete')" class="p-button-danger" icon="pi pi-trash"/>
            </div>
          </template>
        </toolbar>
      </div>

      <DataTable ref="dt" value="products" selection="selectedProducts" dataKey="id" paginator="true" rows="10" filters="filters"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">
        <template #header>
          <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 class="m-0">{{ this.$t('components.OrganizationManagement') }}</h5>
            <span class="block mt-2 md:mt-0 p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText :placeholder="t('organization.searchText')" />
                            </span>
          </div>
        </template>

        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="name" :header="t('organization.properties.organizationName')" :sortable="true" headerStyle="min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title"></span>
            {{slotProps.data.code}}
          </template>
        </Column>
        <Column field="desciption" :header="t('organization.properties.description')" :sortable="true" headerStyle="min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title"></span>
            {{slotProps.data.name}}
          </template>
        </Column>
      </DataTable>

    </div>
  </div>

</template>
<script>
import {useI18n} from "vue-i18n";
import OrganizationService from "../../../service/OrganizationService";

export default {
  setup() {
    const {t} = useI18n();
    return {t}
  },

  data() {
    return {
      organizationValue: null,
      selectedOrganizationValue: null,

      statusOptions: [
        {status: 'Đang hoạt động', code: '1'},
        {status: 'Không hoạt động', code: '2'},
      ],
      componentOptions: [
        {component: 'Không có lựa chọn nào', code: '1'},
      ]
    }
  },
  organizationService: null,
  created() {
    this.organization = new OrganizationService();
  },
  mounted() {
    this.organization.getTreeOrganization().then(data => this.organizationValue = data)
  },
  methods: {
    openNew(){
      this.$router.push({
        name: 'CreateOrganization'
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>