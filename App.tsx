
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View >
      {/* Header */}
      <View>
        <Text >3:16</Text>
        <Text >Posts You may like</Text>
      </View>

      {/* Post Content */}
      <View >
        {/* Profile Info */}
        <View>
          <Image
            source={{
              uri: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg",
            }}
            
          />
          <View>
            <Text>nature_lover</Text>
            <Text> Nature · Taylor Swift</Text>
          </View>
          <TouchableOpacity >
            <Text>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Image */}
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", 
          }}
        />

        

        {/* Likes and Interactions */}
        <View >
          <View>
            <Image 
              source={require('./assets/heart.png')} 
             
            />
            <Text>114K</Text>
          </View>
          <View>
            <Image 
              source={require('./assets/comment.png')} 
               
            />
            <Text >179</Text>
          </View>
          <View >
            <Image 
              source={require('./assets/share.png')} 
               
            />
            <Text >38.5K</Text>
          </View>
        </View>


        
        <Text >Liked by john_william and others</Text>
        {/* Caption */}
        <View>
          <Text>
          There’s nothing better than feeling small in nature. 
            <Text>
              {" "}
              It's the best way to instill a fresh sense of awe.
            </Text>
          </Text>
          <Text>IG | @NATURE_BEAUTIFUL</Text>
        </View>
        <Text>December 30, 2024</Text>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
