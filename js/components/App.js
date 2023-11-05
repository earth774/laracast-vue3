import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  components: { Assignments,Panel },

  template: `
        <div>
            <assignments>  
            </assignments>    

            <Panel class="mt-4 w-70">
                <template v-slot:heading>
                    Heading
                </template>

                    test
                    
                <template v-slot:footer>
                    Footer
                </template>
            </Panel>
        </div>
    `,
};
