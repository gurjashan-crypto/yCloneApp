import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Platform, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Posts you may like</Text>
          <TouchableOpacity>
            <Text style={styles.moreButton}>...</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profile}>
          <Image
            source={{
              uri: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg",
            }}
            style={styles.profilePhoto}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>jazbatii_shayar</Text>
            <Text style={styles.song}>🎵 Nirvair Pannu · Nazran</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Post Image */}
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg",
          }}
          style={styles.postImage}
        />

        {/* Interaction Buttons and Stats */}
        <View style={styles.interactions}>
          <View style={styles.leftInteractions}>
            <View style={styles.interactionItem}>
              <Text style={styles.iconEmoji}>❤️</Text>
              <Text style={styles.statText}>114K</Text>
            </View>
            <View style={styles.interactionItem}>
              <Text style={styles.iconEmoji}>💬</Text>
              <Text style={styles.statText}>179</Text>
            </View>
            <View style={styles.interactionItem}>
              <Text style={styles.iconEmoji}>📤</Text>
              <Text style={styles.statText}>38.5K</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.iconEmoji}>🔖</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.likedBy}>Liked by s.maan_ and others</Text>

        {/* Caption */}
        <View style={styles.captionContainer}>
          <Text style={styles.caption}>
            jazbatii_shayar 🌸... <Text style={styles.moreText}>more</Text>
          </Text>
          <Text style={styles.date}>December 30, 2024</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navEmoji}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navEmoji}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navEmoji}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navEmoji}>📺</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navEmoji}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Alert Button */}
      <TouchableOpacity 
        style={styles.alertButton}
        onPress={() => Alert.alert("Alert Button pressed")}
      >
        <Text style={styles.alertButtonText}>Alert</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  moreButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 14,
    fontWeight: '600',
  },
  song: {
    fontSize: 12,
    color: '#666',
  },
  followButton: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  followText: {
    color: '#262626',
    fontWeight: '600',
  },
  postImage: {
    width: '100%',
    height: 400,
    backgroundColor: '#f2f2f2',
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  leftInteractions: {
    flexDirection: 'row',
    gap: 20,
  },
  interactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  iconEmoji: {
    fontSize: 18,
  },
  statText: {
    fontSize: 14,
    fontWeight: '600',
  },
  likedBy: {
    paddingHorizontal: 12,
    fontSize: 14,
  },
  captionContainer: {
    padding: 12,
  },
  caption: {
    fontSize: 14,
  },
  moreText: {
    color: '#666',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#dbdbdb',
    backgroundColor: '#fff',
  },
  navEmoji: {
    fontSize: 24,
  },
  alertButton: {
    backgroundColor: '#0095f6',
    padding: 14,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  }
});