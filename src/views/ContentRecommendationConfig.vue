<template>
  <div class="rootContainer">
    <GlobalHeader></GlobalHeader>
    <div class="container mt-5 contentrec_formHolder">
      <div class="row">
        <div class="col-12 contentrec_titleHolder">
          <h5 class="contentrec_title">Content Recommendation Configuration</h5>
        </div>
        <div class="col-12 contentrec_inputFormHolder">
          <form class="contentrec_inputForm">
            <div class="contentrec_formElement form-group">
              <div class="contentrec_labelHolder">
                <label for="inputPath">Input Path</label>
                <span class="contentrec_requiredMark mr-2">*</span>
                <span>
                  <svg
                    class="bi bi-question-circle-fill"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    v-b-tooltip.hover.right="
                      'Specify the Input Path for the experiment'
                    "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16 8A8 8 0 110 8a8 8 0 0116 0zM6.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div class="contentrec_inputHolder">
                <input
                  type="text"
                  required
                  class="contentrec_formInput form-control"
                  id="inputPath"
                />
              </div>
            </div>
            <div class="contentrec_formElement form-group">
              <div class="contentrec_labelHolder">
                <label for="outputPath">Output Path</label>
                <span class="contentrec_requiredMark mr-2">*</span>
                <span>
                  <svg
                    class="bi bi-question-circle-fill"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    v-b-tooltip.hover.right="
                      'Specify the Output Path for the experiment'
                    "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16 8A8 8 0 110 8a8 8 0 0116 0zM6.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div class="contentrec_inputHolder">
                <input
                  type="text"
                  required
                  class="contentrec_formInput form-control"
                  id="outputPath"
                />
              </div>
            </div>
            <div class="contentrec_formElement form-group">
              <div class="contentrec_labelHolder">
                <label for="outputPath">Selected Assets</label>
                <span class="contentrec_requiredMark mr-2">*</span>
                <span>
                  <svg
                    class="bi bi-question-circle-fill"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    v-b-tooltip.hover.right="'Select assets for the experiment'"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16 8A8 8 0 110 8a8 8 0 0116 0zM6.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div class="contentrec_inputHolder">
                <b-form-select
                  v-model="selected"
                  :options="options"
                  class="form-control"
                ></b-form-select>
              </div>
            </div>
            <div class="contentrec_formElement">
              <div class="contentrec_buttonHolder">
                <button type="button" class="btn btn-outline-success">
                  Done
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalHeader from "@/components/GlobalHeader.vue";

export default {
  name: "ClickConversionConfig",
  components: {
    GlobalHeader
  },
  data() {
    return {
      selected: null,
      options: [
        { value: "1", text: "First Option" },
        { value: "2", text: "Second Option" },
        { value: "3", text: "Third Option" },
        //{ value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "4", text: "Disabled Option", disabled: true }
      ]
    };
  }
};
</script>
