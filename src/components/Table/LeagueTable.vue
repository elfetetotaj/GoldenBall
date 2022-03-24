<template>
  <div class="xeko">
    <p v-for="fete in fetes" :key="fete.id">{{ fete.name}}</p>
    <div
      class="ptable"
      style="
        display: flex;
        background-color: black;
        border-top: 1px solid white;
      "
    >
      
      <table>
        <tr class="col">
          <th>Premier League</th>
        </tr>
        <tr class="col">
          <th>#</th>
          <th>Team</th>
          <th>GP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <th>PTS</th>
        </tr>
        <tr class="wpos">
          <td>1</td>
          <td></td>
          <td>2</td>
          <td>2</td>
          <td>0</td>
          <td>0</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr class="wpos">
          <td>2</td>
          <td>Liverpool</td>
          <td>2</td>
          <td>2</td>
          <td>0</td>
          <td>0</td>
          <td>4</td>
          <td>6</td>
        </tr>
        <tr class="wpos">
          <td>3</td>
          <td>Chelsea</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr class="wpos">
          <td>4</td>
          <td>Manchester United</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>4</td>
        </tr>
        <tr class="pos">
          <td>5</td>
          <td>Arsenal</td>
          <td>2</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>3</td>
        </tr>
        <tr class="pos">
          <td>6</td>
          <td>West Ham United</td>
          <td>3</td>
          <td>1</td>
          <td>0</td>
          <td>2</td>
          <td>-1</td>
          <td>3</td>
        </tr>
        <tr class="pos">
          <td>7</td>
          <td>Tottenham Hotspur</td>
          <td>2</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>-2</td>
          <td>3</td>
        </tr>
        <tr class="pos">
          <td>8</td>
          <td>Wolverhampton Wanderers</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr class="pos">
          <td>9</td>
          <td>Southampton</td>
          <td>2</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>-1</td>
          <td>1</td>
        </tr>
        <tr class="pos">
          <td>10</td>
          <td>Brighton Hove Albion</td>
          <td>2</td>
          <td>0</td>
          <td>0</td>
          <td>2</td>
          <td>-4</td>
          <td>0</td>
        </tr>
        <tr class="pos">
          <td>11</td>
          <td>Crystal Palace</td>
          <td>2</td>
          <td>0</td>
          <td>0</td>
          <td>2</td>
          <td>-5</td>
          <td>0</td>
        </tr>
      </table>
      <table>
        <tr class="col">
          <th>LaLiga</th>
        </tr>
        <tr class="col">
          <th>#</th>
          <th>Team</th>
          <th>GP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <th>PTS</th>
        </tr>
        <tr class="wpos">
          <td>1</td>
          <td>Real Madrid</td>
          <td>2</td>
          <td>2</td>
          <td>0</td>
          <td>0</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr class="wpos">
          <td>2</td>
          <td>Sevilla</td>
          <td>2</td>
          <td>2</td>
          <td>0</td>
          <td>0</td>
          <td>4</td>
          <td>6</td>
        </tr>
        <tr class="wpos">
          <td>3</td>
          <td>Real Betis</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr class="wpos">
          <td>4</td>
          <td>Atletico Madrid</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>4</td>
        </tr>
        <tr class="pos">
          <td>5</td>
          <td>Villarreal</td>
          <td>2</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>3</td>
        </tr>
        <tr class="pos">
          <td>6</td>
          <td>Barcelona</td>
          <td>3</td>
          <td>1</td>
          <td>0</td>
          <td>2</td>
          <td>-1</td>
          <td>3</td>
        </tr>
        <tr class="pos">
          <td>7</td>
          <td>Real Sociedad</td>
          <td>2</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>-2</td>
          <td>3</td>
        </tr>
        <tr class="pos">
          <td>8</td>
          <td>Athletic Bilbao</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr class="pos">
          <td>9</td>
          <td>Valencia</td>
          <td>2</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>-1</td>
          <td>1</td>
        </tr>
        <tr class="pos">
          <td>10</td>
          <td>Celta Vigo</td>
          <td>2</td>
          <td>0</td>
          <td>0</td>
          <td>2</td>
          <td>-4</td>
          <td>0</td>
        </tr>
        <tr class="pos">
          <td>11</td>
          <td>Osasuna</td>
          <td>2</td>
          <td>0</td>
          <td>0</td>
          <td>2</td>
          <td>-5</td>
          <td>0</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import firebase from "../../services/firebase";

export default {
  data() {
    return {
      fetes: [],
      fete: {
        name: "",
      },
    };
  },
  methods: {
    async getFetes() {
      var fetesRef = await firebase.firestore
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("fetes");

      fetesRef.onSnapshot((snap) => {
        this.fetes = [];
        snap.forEach((doc) => {
          var fete = doc.data();
          fete.id = doc.id;
          this.fetes.push(fete);
        });
      });
    },
    created() {
      this.getFetes();
    },
  },
};
</script>
//
<script>
// // import {db} from '@/services/firebase';
// // import firebase from "firebase/compat/app";
// // require("firebase/compat/firestore");
// // const db = firebase.firestore();
// import { collection, getDocs } from "firebase/compat/firestore";

// export default {
//   name: "LeagueTable",
//   props: {
//     msg: String,
//   },
//   data() {
//     return {
//       fete: [],
//     };
//   },

//   firestore() {
//     return {
//       fete: db.collection("fete"),
//     };
//   },
//   methods: {

//   }
// };
//
</script>

<style scoped>
* {
  font-family: Fjalla One;
  margin: 0;
  border: 0;
  padding: 0;
  color: white;
}

html {
  background-color: #000000;
}

.ptable table {
  margin: 30px auto;
  border-collapse: collapse;
}

/* .ptable {
  margin: 0px 0% 30px 0%;
} */

th,
td {
  padding: 10px;
}

th {
  background-color: black;
  color: #ffe221;
}

.headin {
  text-align: center;
  text-decoration: none;
  color: #ffe221;
  margin: 30px;
  display: block;
}

.wpos {
  text-align: center;
}

.wpos td {
  color: #77ff21;
}

.pos {
  text-align: center;
}

.pos td {
  color: #ff7b21;
}

/* table .col {
  border-bottom: 1px solid #ffffff;
} */

.wpos:hover {
  background-color: #77ff21;
}

.wpos:hover td {
  color: #000000;
}

.pos:hover {
  background-color: #ff7b21;
}

.pos:hover td {
  color: #000000;
}
</style>
