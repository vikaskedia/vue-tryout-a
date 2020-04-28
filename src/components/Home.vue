<template>
  <v-container>
    <v-row class="text-center">
      <StudentsPanel :students="students" />
      <StudentsCard :students="students" />
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialogVisibility" persistent max-width="500">
        <v-card>
          <v-card-title class="headline">{{dialogStatus == 0 ? "Add Student" : "Edit Student"}}</v-card-title>
          <v-card-text>
            <vue-form-generator :schema="schema" :model="studentModel" :options="formOptions"></vue-form-generator>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              :disabled="studentModel.name.length < 1"
              text
              @click="save"
            >{{dialogStatus == 0 ?"Add" : "Update"}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import StudentsPanel from "./StudentsPanel";
import StudentsCard from "./StudentsCard";
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";
import { required } from "vuelidate/lib/validators";

export default {
  components: {
    StudentsPanel,
    StudentsCard,
    "vue-form-generator": VueFormGenerator.component
  },
  computed: {
    students() {
      return this.$store.state.studentList;
    },
    dialogVisibility() {
      return this.$store.state.dialogVisibility;
    },
    dialogStatus() {
      return this.$store.state.dialogStatus;
    }
  },
  watch: {
    dialogVisibility() {
      if (this.dialogStatus == 1) {
        this.studentModel = this.$store.state.updateStudent;
      }
    }
  },
  mounted() {
    this.$store.dispatch("getStudentList");
  },
  data() {
    return {
      dialog: false,
      studentModel: {
        name: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "ID (disabled text field)",
            model: "id",
            readonly: true,
            disabled: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Name",
            model: "name",
            placeholder: "Your name",
            featured: true,
            required: true
          }
        ]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      },
      name: ""
    };
  },
  methods: {
    save() {
      if (this.dialogStatus == 0) {
        this.$store.dispatch("addStudent", this.studentModel);
      } else {
        this.$store.dispatch("updateStudent", this.studentModel);
      }
      this.studentModel = { name: "" };
    }
  },
  validations() {
    return {
      name: {
        required
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>