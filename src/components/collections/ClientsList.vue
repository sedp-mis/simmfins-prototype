<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-ma-md">
       <div class="q-pa-md" style="max-width: 360px">
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label class="text-weight-bold">
              <q-avatar size="26px" color="primary">
                <span class="text-white">1</span>
              </q-avatar> 
              Maria Juan Dela Cruz</q-item-label>
            <q-item-label>
              <q-icon name="fas fa-money-bill-alt" color="orange" size="24px"></q-icon>
              1,200.00</q-item-label>
            <div class="row">
              <div class="col">
                <q-icon name="fas fa-first-aid" color="red" size="18px"></q-icon>
              </div>
            </div>
          </q-item-section>
  
          <q-item-section side top>
            <div>
              <q-popup-edit v-model="payment1" buttons>
                <q-input type="number" v-model="payment1" dense autofocus/>
              </q-popup-edit>  
              <q-item-label class="text-h6">{{ payment1 }}</q-item-label> 
            </div>
              
            <q-item-label class="text-h6">
               <q-badge color="blue">
                <select name="select">
                  <option value="P" selected>PRESENT</option> 
                  <option value="U" >UNDERTIME</option>
                  <option value="T" >TARDY</option>
                  <option value="A" >ABSENT</option>
                  <option value="L" >LEAVE</option>
                  <option value="I" >INACTIVE</option>
                  <option value="E" >EXCUSED</option>
                </select>
               </q-badge>
            </q-item-label> 
          </q-item-section>   
        </q-item>
  
        <q-separator inset></q-separator>
        
        <q-item>
          <q-item-section>
            <q-item-label class="text-weight-bold">
              <q-avatar size="24px" color="primary">
                <span class="text-white">2</span>
              </q-avatar> 
              Juana Consolacion</q-item-label>
            <q-item-label>
              <q-icon name="money" color="orange" size="24px"></q-icon>
              1,200.00</q-item-label>
            <div class="row">
              <div class="col">
                <q-icon name="star" color="yellow" size="20px"></q-icon>
                <q-icon name="star" color="yellow" size="20px"></q-icon>
                <q-icon name="star" color="yellow" size="20px"></q-icon>
              </div>
            </div>
          </q-item-section>
  
          <q-item-section side top>
            <div>
              <q-popup-edit v-model="payment2" buttons>
                <q-input type="number" v-model="payment2" dense autofocus/>
              </q-popup-edit>  
              <q-item-label class="text-h6">{{ payment2 }}</q-item-label> 
            </div>
              
            <q-item-label class="text-h6">
               <q-badge color="red">
                <select name="select">
                  <option value="P">PRESENT</option> 
                  <option value="U" >UNDERTIME</option>
                  <option value="T" >TARDY</option>
                  <option value="A" selected>ABSENT</option>
                  <option value="L" >LEAVE</option>
                  <option value="I" >INACTIVE</option>
                  <option value="E" >EXCUSED</option>
                </select>
               </q-badge>
            </q-item-label> 
          </q-item-section>   
        </q-item>
  
        <q-separator inset></q-separator>
  
        <q-item>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
  
          <q-item-section side top>
            <q-item-label caption>Voted!</q-item-label>
          </q-item-section>
        </q-item>
  
        <q-separator spaced inset ></q-separator>
  
        <q-item>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
  
          <q-item-section side top>
            <q-badge color="teal" label="10k" ></q-badge>
          </q-item-section>
        </q-item>
  
        <q-separator spaced inset ></q-separator>
  
        <q-item>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
  
          <q-item-section side top>
            <q-item-label caption>2 min ago</q-item-label>
            <div class="text-orange">
              <q-icon name="star" ></q-icon>
              <q-icon name="star" ></q-icon>
              <q-icon name="star" ></q-icon>
            </div>
          </q-item-section>
        </q-item>
  
        <q-separator spaced inset ></q-separator>
  
        <q-item>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
  
          <q-item-section side top>
            <q-item-label caption>meta</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      payment1: 200.51,
      payment2: 0
    }
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
    overflow:hidden;
    width: 120%;
    text-align-last:center;
    color: white;  
}

select option { color: black; }
</style>
