<script lang="ts" setup></script>

<template>
  <div class="circle"></div>
  <div id="scaffold" class="pt-16 px-16">
    <v-row>
      <v-col md="6" xl="6" lg="6" cols="12">
        <div class="textBox">
          <h2 style="font-size: 4em">
            It’s not just POS <br />
            It’s
            <span>Cashier</span>
          </h2>
          <p>
            simple, robust and fast POS application for grocery shops and
            marketing
          </p>

          <v-btn
            color="#604CA0"
            rounded="24"
            style="color: #fff; border-radius: 24px"
            class="mt-5"
          >
            learn more
          </v-btn>
        </div>
      </v-col>
      <v-col md="6" xl="6" lg="6" cols="12">
        <v-row justify="end">
          <v-col>
            <div class="imgBox">
              <v-img src="../assets/device.png" max-width="340"></v-img>
            </div>
          </v-col>
          <v-col cols="1">
            <div class="socialMediaBox">
              <v-btn flat variant="text" icon class="pb-16">
                <v-icon color="#ffffff">mdi-facebook</v-icon>
              </v-btn>
              <v-btn flat variant="text" icon class="pb-16">
                <v-icon color="#ffffff">mdi-instagram</v-icon>
              </v-btn>
              <v-btn flat variant="text" icon class="pb-16">
                <v-icon color="#ffffff">mdi-phone</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-row class="thumb" justify="center">
        <v-img
          src="../assets/qr-scanner.png"
          max-width="60"
          v-for="n in 3"
          :key="n"
          class="mx-4"
        ></v-img>
      </v-row>
    </v-row>
  </div>
</template>

<style scoped>
.textBox h2 {
  font-size: 4em;
  color: #333;
  line-height: 1.4em;
  font-weight: 500;
}

.textBox span {
  color: #604ca0;
  font-size: 1.2em;
  font-weight: 900;
}

.imgBox {
  justify-content: flex-end;
  display: flex;
  position: relative;
}

.thumb .v-img:hover {
  transform: translateY(-15px);
}

.socialMediaBox {
  padding-top: 200px;
}

.thumb .v-img {
  transition: 0.5s;
}

.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #604ca0;
  clip-path: circle(600px at right 800px);
}

@media (max-width: 1125px) {
  .circle {
    margin-top: 500px;
    height: 60%;
  }
  .imgBox {
    padding-top: 200px;
  }
  .textBox h2 {
    font-size: 2em;
  }
  .socialMediaBox {
    padding-top: 400px;
  }
  .thumb {
    padding-top: 50px;
  }
}

/* @media (min-width: 1200px) {
  #scaffold {
    background: black;
  }
} */
</style>
