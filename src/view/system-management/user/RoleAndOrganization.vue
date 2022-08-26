<template>
  <div class="role-organization">
    <h5>{{ `${t('userDetail.roleAndOrganization')}` }}</h5>
    <div class="default-roles-container">
      <div class="flex justify-content-between align-items-center mt-5 mb-3">
        <label for="defaultRole">{{ t('roleAndOrganization.defaultRole') }}</label>
        <Button :label="t('select')" @click="showRolesDialog"/>
      </div>
      <!--      <Divider/>-->
      <div class="list-default-roles">
        <DataTable v-if="defaultRoles.length" :value="defaultRoles" responsiveLayout="scroll">
          <Column :header="t('roleAndOrganization.defaultRole')" field="roleName"></Column>
          <Column :header="t('actions')">
            <template #body="slotProps">
              <Button v-tooltip.top="t('delete')" class="p-button-rounded p-button-danger p-button-text p-button-sm"
                      icon="pi pi-times" @click="confirmRemoveDefaultRole(slotProps.data)"/>
            </template>
          </Column>
        </DataTable>
        <div v-else>
          <label class="text-center block">{{ t('emptyRecords', {itemName: t('role.name')}) }}</label>
        </div>
      </div>
    </div>

    <div class="organization-container">
      <div class="flex justify-content-between align-items-center mt-5 mb-3">
        <label for="organizations">{{ t('roleAndOrganization.organizations') }}</label>
        <Button :label="t('select')" @click="showOrganizationsDialog"/>
      </div>
      <!--      <Divider/>-->
      <div class="list-organization">
        <DataTable v-if="organizations.length" :value="organizations" responsiveLayout="scroll">
          <Column :header="t('roleAndOrganization.organizations')" field="organizationName"></Column>
          <Column :header="t('roleAndOrganization.organizationRole')">
            <template #body="slotProps">
              <label v-for="role of slotProps.data.roles">
                <div v-if="role && role.roleId" :class="{'organization-role-default' : role.isDefault}"
                     class="organization-role-chip border-none p-0 mr-3">
                  <Button v-tooltip.top="role.isDefault ? null : t('roleAndOrganization.setDefault')"
                          class="m-0 px-3"
                          @click="setDefaultOrganizationRole(slotProps.data, role)">
                    {{ role.roleName }}
                  </Button>
                  <Button
                      v-if="!role.isDefault"
                      v-tooltip.top="role.isDefault ? null : t('delete')"
                      class=""
                      icon="pi pi-times"
                      @click="confirmRemoveOrganizationRole(slotProps.data, role)"
                  />
                </div>
              </label>
            </template>
          </Column>
          <Column :header="t('actions')">
            <template #body="slotProps">
              <Button
                  v-tooltip.top="t('roleAndOrganization.addRole')"
                  class="p-button-rounded p-button-text p-button-sm"
                  icon="pi pi-plus"
                  @click="showOrganizationRoleDialog(slotProps.data)"
              />
              <Button v-tooltip.top="t('delete')" class="p-button-rounded p-button-danger p-button-text p-button-sm"
                      icon="pi pi-times" @click="confirmRemoveOrganization(slotProps.data)"/>
            </template>
          </Column>
        </DataTable>
        <div v-else>
          <label class="text-center block">{{ t('emptyRecords', {itemName: t('organization.name')}) }}</label>
        </div>
      </div>
    </div>
  </div>

  <RolesDialog
      v-if="rolesDialog"
      :default-roles="defaultRoles"
      :hide-dialogs="hideDialogs"
      :organization="organization"
      :roles-dialog="rolesDialog"
      :type="type"
      :update-role="updateRole"
      :user="user"
  />

  <OrganizationsDialog
      v-if="organizationsDialog"
      :hide-dialogs="hideDialogs"
      :organizations="organizations"
      :organizations-dialog="organizationsDialog"
      :update-organization="updateOrganization"
      :user="user"
  />

  <CustomConfirmDialog
      v-if="confirmDialog"
      :action-confirm="actionConfirm"
      :confirm-dialog="confirmDialog"
      :confirm-message="confirmMessage"
      :hide-dialogs="hideDialogs"
      :item="item"
  />
</template>

<script>
import {useI18n} from 'vue-i18n';
import Constants from '/src/commons/Constants';
import RolesDialog from './dialogs/RolesDialog.vue';
import CustomConfirmDialog from "/src/components/CustomConfirmDialog.vue";
import OrganizationsDialog from "./dialogs/OrganizationsDialog.vue";
import {
  defaultOrganizationRole,
  getOrganizationRole,
  leaveOrganization,
  removeDefaultRole,
  removeOrganizationRole
} from "/src/api/admin/userApi";
import {toastError, toastSuccess, toastWarn} from "/src/commons/ToastCustomService";

export default {
  name: "RoleAndOrganization",

  data() {
    return {
      type: "",
      organization: {},

      defaultRoles: this.user.roles.filter(role => role.roleType === Constants.roleType.roleTypeDefault),
      rolesDialog: false,

      organizations: [],
      organizationsDialog: false,

      defaultOrganizationRoles: this.user.roles.filter(role => role.roleType === Constants.roleType.roleTypeOrganization),
      defaultOrganizationRoleDialog: false,

      confirmDialog: false,
      confirmMessage: "",
      item: {},
      actionConfirm: () => {
      }
    }
  },

  setup() {
    const {t} = useI18n();
    return {t, Constants};
  },

  created() {
    this.loadOrganizationRole();
  },

  methods: {
    loadOrganizationRole() {
      const api = getOrganizationRole({userId: this.user.id});
      api.then((response) => {

        this.organizations = response;
      }).catch(() => {
        toastError({});
      });
    },

    updateRole(type, selectedRole) {
      if (type === Constants.roleType.roleTypeDefault) {
        this.defaultRoles.push(selectedRole);
      } else if (type === Constants.roleType.roleTypeOrganization) {
        if (!this.organization.roles) {
          this.organization.roles = [];
        }
        this.organization.roles.push(selectedRole);
        const organizationIndex = this.organizations.findIndex((item) => {
          return item.organizationId === this.organization.organizationId;
        });
        this.organizations[organizationIndex] = this.organization;
      }
    },

    confirmRemoveDefaultRole(role) {
      this.confirmDialog = true;
      this.confirmMessage = this.$t("roleAndOrganization.confirmRemoveDefaultRole", {itemName: role.roleName});
      this.actionConfirm = () => this.removeDefaultRole(role.roleId);
    },

    removeDefaultRole(roleId) {
      const api = removeDefaultRole({
        userId: this.user.id,
        roleId
      });

      api.then(() => {
        this.defaultRoles = this.defaultRoles.filter((role) =>
            role.roleId !== roleId
        );
        this.hideDialogs();
        toastSuccess({});
      }).catch(() => {
        toastError({});
      });
    },

    updateOrganization(organization) {
      this.organizations.push(organization);
    },

    confirmRemoveOrganization(organization) {
      this.confirmDialog = true;
      this.confirmMessage = this.$t("roleAndOrganization.confirmRemoveOrganization", {itemName: organization.organizationName});
      this.actionConfirm = () => this.removeOrganization(organization.organizationId);
    },

    showRolesDialog() {
      this.type = Constants.roleType.roleTypeDefault;
      this.rolesDialog = true;
    },

    showOrganizationRoleDialog(organization) {
      this.type = Constants.roleType.roleTypeOrganization;
      this.organization = organization;
      this.rolesDialog = true;
    },

    showOrganizationsDialog() {
      this.organizationsDialog = true;
    },

    setDefaultOrganizationRole(organization, role) {
      if (role.isDefault) {
        toastWarn({
          message: this.$t("roleAndOrganization.roleAlreadyDefault")
        });
        return;
      }

      const api = defaultOrganizationRole({
        id: {
          userId: this.user.id,
          organizationId: organization.organizationId,
          roleId: role.roleId
        },
        isDefault: true
      });
      api.then(() => {
        this.organizations.forEach((org) => {
          org.roles && org.roles.length && org.roles.forEach((r) => {
            if (r.roleId === role.roleId && org.organizationId === organization.organizationId) {
              r.isDefault = true
            } else {
              r.isDefault = false;
            }
          });
        });
        toastSuccess({});
      }).catch(() => {
        toastError({});
      });
    },

    confirmRemoveOrganizationRole(organization, role) {
      this.confirmDialog = true;
      this.confirmMessage = this.$t("roleAndOrganization.confirmRemoveOrganizationRole", {itemName: role.roleName});
      this.actionConfirm = () => this.removeOrganizationRole(organization, role);
    },

    removeOrganizationRole(organization, role) {
      const api = removeOrganizationRole({
        id: {
          userId: this.user.id,
          organizationId: organization.organizationId,
          roleId: role.roleId
        },
        isDefault: true
      });
      api.then(() => {
        const {roles} = organization;
        organization.roles = roles.filter((item) => {
          return item.roleId !== role.roleId;
        });
        const organizationIndex = this.organizations.findIndex((item) => {
          return item.organizationId === organization.organizationId;
        });
        this.organizations[organizationIndex] = organization;
        this.hideDialogs();
        toastSuccess({});
      }).catch(() => {
        toastError({});
      });
    },

    removeOrganization(organizationId) {
      const api = leaveOrganization({
        id: {
          userId: this.user.id,
          organizationId: organizationId,
          roleId: null
        },
        isDefault: false
      });
      api.then(() => {
        const organizationIndex = this.organizations.findIndex((item) => {
          return item.organizationId === organizationId;
        });
        this.organizations.splice(organizationIndex, 1);
        this.hideDialogs();
        toastSuccess({});
      }).catch(() => {
        toastError({});
      });
    },

    hideDialogs() {
      this.rolesDialog = false;
      this.defaultOrganizationRoleDialog = false;
      this.confirmDialog = false;
      this.organizationsDialog = false;
    }
  },

  components: {
    RolesDialog,
    OrganizationsDialog,
    CustomConfirmDialog
  },

  props: ['user']
}
</script>

<style scoped>

</style>