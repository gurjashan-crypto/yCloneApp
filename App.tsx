
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
      {/* Header */}
      <View>
        <Text style={styles.time}>3:16</Text>
        <Text style={styles.header}>Posts You may like</Text>
      </View>

      {/* Post Content */}
      <View >
        {/* Profile Info */}
        <View style={styles.profile}>
          <Image
            source={{
              uri: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg",
            }}
            style={styles.profilePhoto}
          />
          <View>
            <Text style={styles.profileName}>nature_lover</Text>
            <Text style={styles.song}> Nature · Taylor Swift</Text>
          </View>
          <TouchableOpacity style={styles.followButton} >
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Image */}
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", 
          }}
          style={styles.post}
        />

        

        {/* Likes and Interactions */}
        <View style={styles.interactions}>
          <View style={styles.Item}>
            <Image 
              source={require('./assets/heart.png')} 
              style={styles.icon} 
            />
            <Text style={styles.Text} >114K</Text>
          </View>
          <View style={styles.Item}>
            <Image 
              source={require('./assets/comment.png')} 
              style={styles.icon} 
            />
            <Text style={styles.Text}>179</Text>
          </View>
          <View style={styles.Item}>
            <Image 
              source={require('./assets/share.png')} 
              style={styles.icon} 
            />
            <Text style={styles.Text} >38.5K</Text>
          </View>
        </View>


        
        <Text style={styles.footerText} >Liked by john_william and others</Text>
        {/* Caption */}
        <View style={styles.captionContainer}>
          <Text style={styles.captionText}>
          There’s nothing better than feeling small in nature. 
            <Text style={styles.subCaption}>
              {" "}
              It's the best way to instill a fresh sense of awe.
            </Text>
          </Text>
          <Text style={styles.tag}>IG | @NATURE_BEAUTIFUL</Text>
        </View>
        <Text style={styles.date}>December 30, 2024</Text>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    backgroundColor: "#f5f5f5",
  },
  header: {
   fontSize:18,
   fontWeight:"bold",
   textAlign:"center"
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  song: {
    fontSize: 14,
    color: "#555",
  },
  followButton: {
    marginLeft: "auto",
    padding: 10,
  },
  followText: {
    color: "#007bff",
  },
  post: {
    width: "100%",
    height: 250,
  },
  interactions: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  Item: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20, 
  },
  icon: {
    width: 20, 
    height: 20, 
  },
  Text: {
    fontSize: 14,
    marginLeft: 5, 
  },
  captionContainer: {
    padding: 10,
  },
  captionText: {
    fontSize: 16,
    fontWeight: "600",
  },
  subCaption: {
    fontWeight: "400",
    color: "#555",
  },
  tag: {
    marginTop: 5,
    fontSize: 14,
    color: "#888",
  },
  footerText: {
    padding: 10,
    fontSize: 14,
  },
  date: {
    padding: 10,
    fontSize: 12,
  },
});
