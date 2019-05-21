<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-ma-md">
        <div class="q-pa-md" style="max-width: 360px">
          <div class="q-pa-md q-gutter-sm">
            <q-btn label="Maximized" color="primary" @click="dialog = true"/>

            <q-dialog
              v-model="dialog"
              persistent
              :maximized="true"
              transition-show="slide-up"
              transition-hide="slide-down"
            >
              <q-layout class="bg-white">
                <q-toolbar class="bg-primary text-white">
                  <q-toolbar-title>Manage Collection</q-toolbar-title>

                  <q-btn flat round dense icon="fas fa-times" size="10px" @click="dialog = false"/>
                </q-toolbar>
                <q-card flat>
                  <q-card-section>
                    <q-item class="q-pa-none">
                      <q-item-section side>
                        <q-avatar size="48px">
                          <img src="https://cdn.quasar-framework.org/img/avatar6.jpg">
                        </q-avatar>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label class="text-subtitle2">Maria Juana Dela Cruz</q-item-label>
                        <q-item-label class="text-h6">
                          0.00
                          <span class="text-grey">●</span> 10,000.00
                        </q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-badge color="blue">
                          <select name="select" style="height: 25px">
                            <option value="P" selected>PRESENT</option>
                            <option value="U">UNDERTIME</option>
                            <option value="T">TARDY</option>
                            <option value="A">ABSENT</option>
                            <option value="L">LEAVE</option>
                            <option value="I">INACTIVE</option>
                            <option value="E">EXCUSED</option>
                          </select>
                        </q-badge>
                      </q-item-section>
                    </q-item>
                    <q-separator class="q-mt-sm"/>
                    <q-tab-panels v-model="tab" animated>
                      <q-tab-panel class="q-pa-none" name="loans">
                        <div class="text-h6">Loans</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </q-tab-panel>
                      <q-tab-panel class="q-pa-none" name="collections">
                        <div class="text-h6">Collections</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </q-tab-panel>
                      <q-tab-panel class="q-pa-none" name="savings">
                        <div class="text-h6">Savings</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </q-tab-panel>
                      <q-tab-panel class="q-pa-none" name="center_release">
                        <div class="text-h6">Center Release</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </q-tab-panel>
                      <q-tab-panel class="q-pa-none" name="emergency_loan">
                        <div class="text-h6">Emergency Loan</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </q-tab-panel>
                    </q-tab-panels>
                    <!-- <q-item-section avatar>
                      
                      <q-item-label>Maria Juana Dela Cruz</q-item-label>
                      <q-item-label caption lines="1">client@sedp.ph</q-item-label>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Maria Juana Dela Cruz</q-item-label>
                      <q-item-label caption lines="1">client@sedp.ph</q-item-label>
                    </q-item-section>-->
                  </q-card-section>
                </q-card>
                <q-page-sticky expand position="bottom">
                  <div class="row full-width">
                    <div class="col">
                      <q-tabs v-model="tab" dense switch-indicator class="bg-grey-2 text-primary">
                        <q-tab class="text-green" name="loans" icon="fas fa-cash-register"/>
                        <q-tab class="text-teal" name="collections" icon="fas fa-coins"/>
                        <q-tab class="text-orange" name="savings" icon="fas fa-piggy-bank"/>
                        <q-tab class="text-blue" name="center_release" icon="fas fa-wallet"/>
                        <q-tab class="text-red" name="emergency_loan" icon="fas fa-first-aid"/>
                      </q-tabs>
                    </div>
                  </div>
                </q-page-sticky>
              </q-layout>
            </q-dialog>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      maximizedToggle: false,
      tab: "loans"
    };
  }
};
</script>

<style>
select {
  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  /* needed for Firefox: */
  overflow: hidden;
  width: 120%;
  text-align-last: center;
  color: white;
}

select option {
  color: black;
}
</style>
