import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Button,
  Alert,
  Linking,
} from "react-native";

const profil = () => {
  const url = "https://www.instagram.com/putrimutiaraaa__/";
  Linking.openURL(url);
};
const dribble = () => {
  const url = "https://dribbble.com/putrimutiara_";
  Linking.openURL(url);
};
const BC = () => {
  const url = "https://www.braincodesolution.com/#/";
  Linking.openURL(url);
};
const github = () => {
  const url = "https://github.com/putrimutiaradewi";
  Linking.openURL(url);
};

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Hallo!</Text>
        <Text style={styles.names}>I'm Putri Mutiara Dewi</Text>

        <Image style={styles.profil} source={require("../assets/ava.png")} />
        <Text style={styles.desc}>
          "I am a Telkom High School student, a person who can easily adapt to
          new environments, work as a team, communicate socially, and has a
          passion for technology and the industry itself."
        </Text>
        <View style={styles.wadah_tombol2}>
          <TouchableOpacity style={styles.button_contact} onPress={profil}>
            <Text style={styles.appButtonTextContact}>Contact Me</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.screentwo}>
        <Image
          style={styles.logo_search}
          source={require("../assets/search.png")}
        />

        <View style={{ alignItems: "center" }}>
          <Text style={styles.judul_2}>See My Recent Project </Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Image
            style={{ width: 300, height: 200 }}
            source={require("../assets/braincode.png")}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.judul_porto1}> COMPANY PROFILE </Text>
        </View>
        <View style={styles.wadah_tombol2}>
          <TouchableOpacity style={styles.button_porto} onPress={BC}>
            <Text style={styles.appButtonText}>See Details</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Image
            style={{ width: 300, height: 200 }}
            source={require("../assets/corporate.png")}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.judul_porto1}> WEBSITE ADMIN CAP </Text>
        </View>
        <View style={styles.wadah_tombol2}>
          <TouchableOpacity style={styles.button_porto} onPress={github}>
            <Text style={styles.appButtonText}>See Details</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginTop: 0, paddingBottom: 10 }}>
          <Image
            style={{ width: 300, height: 200 }}
            source={require("../assets/yuksehat.png")}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.judul_porto1}> YUKSEHAT UI DESIGN </Text>
        </View>
        <View style={styles.wadah_tombol2}>
          <TouchableOpacity style={styles.button_porto} onPress={dribble}>
            <Text style={styles.appButtonText}>See Details</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Image
            style={{ width: 300, height: 200, ImageSize: 10 }}
            source={require("../assets/skincare.png")}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.judul_porto1}> SKINCARE UI DESIGN </Text>
        </View>
        <View style={styles.wadah_tombol2}>
          <TouchableOpacity style={styles.button_porto} onPress={dribble}>
            <Text style={styles.appButtonText}>See Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        padding: 24,
        backgroundColor: "#F8835B",
      },
      screentwo:{
        backgroundColor: "#F5F1F4"
    
      },
      logo_search:{
         width:65, 
        height:65,
        marginTop:70, 
        marginLeft:30, 
        borderRadius:10,
      },
      title: {
        color: '#080B25',
        fontSize: 45,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.3)', 
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 5, 
      
      },
       names: {
        color: '#FDE8E0',

        fontSize: 44,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.9)', 
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 5, 
      
      },
          judul_porto1: {
          fontWeight:'700',
          marginLeft:15,
          color:'#080B25', 
          fontSize:20, 
          marginTop:10,

          textAlign:'center',
          paddingBottom:10,
          marginHorizontal:10
          
      },
          judul_2: {
          marginLeft:10,
          color:'#080B25', 
          fontSize:40, 
          marginTop:20,

          paddingBottom:10,
          marginHorizontal:10,
          fontWeight: 'bold',
          textShadowColor: 'rgba(0, 0, 0, 0.2)', 
          textShadowOffset: { width: 2, height: 2 }, 
          textShadowRadius: 5, 
    
      },
      button_porto:{
        elevation: 8,
        backgroundColor:  "#F8835B",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        height:43,
        width:280
      },
       button_contact:{
        elevation: 8,
        backgroundColor: '#080B25',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        height:50,
        width:150
       },
      appButtonText:{
        fontSize: 15,
        color: '#FDE8E0',
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
       appButtonTextContact:{
        fontSize: 18,
        color: '#FDE8E0',
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      wadah_tombol2:{
        flex: 1,
        alignItems:'center',
        paddingHorizontal: 10,
        paddingTop:20,
        paddingBottom:30,
      },
      desc: {
      color: '#fff',
      fontSize: 17,
      fontWeight: '600',
      textAlign: 'center',
      height: 120,
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 2, height: 2 }, 
      textShadowRadius: 5,
      
      },
     
      profil: {
        width: 330,
        height: 290,
      },
});
