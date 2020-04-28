<template>
  <v-col>
    <v-card>
      <v-card-title>
        <div class="primary--text">Student names panel</div>
        <v-spacer></v-spacer>
        <v-btn small color="primary" @click="openAddDialog">Add</v-btn>
      </v-card-title>
      <v-card-text>
        <v-list>
          <div v-for="(student, index) in students" :key="`panel-${index}`">
            <v-list-item>
              <v-list-item-content>{{student.name}}</v-list-item-content>
              <v-list-item-icon>
                <v-btn text small color="primary" @click="openEditDialog(student)">edit</v-btn>
                <v-btn text small color="error" @click="deleteStudent(student.id)">delete</v-btn>
              </v-list-item-icon>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["students"],
  data() {
    return {};
  },
  methods: {
    openAddDialog() {
      this.$store.commit("updateDialogStatus", 0);
      this.$store.commit("updateDialogVisibility", true);
    },
    openEditDialog(student) {
      this.$store.commit("updateDialogStatus", 1);
      this.$store.commit("setUpdateStudent", student);
      this.$store.commit("updateDialogVisibility", true);
    },
    async deleteStudent(id) {
      await this.$store.dispatch("deleteStudent", id);
      this.$store.dispatch("getStudentList");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>