<template>
  <div class="rootContainer">
    <GlobalHeader></GlobalHeader>
    <div class="container mt-5 ms_formHolder">
      <div class="row">
        <div class="col-12 ms_titleHolder">
          <h5 class="ms_title">Select a Model</h5>
        </div>
      </div>
      <div class="row ms_modelList mt-4">
        <div class="col-5 ms_model mr-4 ml-5" @click="audConfig">
          <div class="row">
            <div class="col-3 ms_modelImage">
              <img src="../assets/audience.png" class="modelImage" />
            </div>
            <div class="col-9 ms_modelContent">
              <div class="ms_modelContentTitle">
                <h5 class="ms_modelTitle">Audience Segmentation</h5>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, impedit?
              </div>
            </div>
          </div>
        </div>
        <div class="col-5 ms_model ml-5" @click="clickConfig">
          <div class="row">
            <div class="col-3 ms_modelImage">
              <img src="../assets/click.png" class="modelImage" />
            </div>
            <div class="col-9 ms_modelContent">
              <div class="ms_modelContentTitle">
                <h5 class="ms_modelTitle">Click Conversion</h5>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, impedit?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row ms_modelList mt-5">
        <div class="col-5 ms_model mr-4 ml-5" @click="webConfig">
          <div class="row">
            <div class="col-3 ms_modelImage">
              <img src="../assets/web conversion.png" class="modelImage" />
            </div>
            <div class="col-9 ms_modelContent">
              <div class="ms_modelContentTitle">
                <h5 class="ms_modelTitle">Web Conversion</h5>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, impedit?
              </div>
            </div>
          </div>
        </div>
        <div class="col-5 ms_model ml-5" @click="contentConfig">
          <div class="row">
            <div class="col-3 ms_modelImage">
              <img
                src="../assets/contentrecommendation.png"
                class="modelImage"
              />
            </div>
            <div class="col-9 ms_modelContent">
              <div class="ms_modelContentTitle">
                <h5 class="ms_modelTitle">Content Recommendation</h5>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, impedit?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalHeader from "@/components/GlobalHeader.vue";

export default {
  name: "ModelSelection",
  components: {
    GlobalHeader
  },
  methods: {
    audConfig() {
      this.$router.push({ path: "/audiencesegmentconfig" });
    },
    clickConfig() {
      this.$router.push({ path: "/clickconversionconfig" });
    },
    webConfig() {
      this.$router.push({ path: "/webconversionconfig" });
    },
    contentConfig() {
      this.$router.push({ path: "/contentrecconfig" });
    }
  }
};
</script>
