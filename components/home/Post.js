import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'  
import { Divider } from 'react-native-elements'

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
        <Divider 
            width={1} 
            orientation='vertical'
        />
        <PostHeader post={post} />
    </View>
  )
}

const PostHeader = ({ post }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
    }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
                source={{ uri: post.profile_picture}}
                style={styles.post}
            />
            <Text style ={{ 
                color: 'white',
                marginLeft: 5,
                fontWeight: 700,
            }}> 
                {post.user} 
            </Text>
        </View>

        <Text style={{ 
            color: 'white', 
            fontWeight: '900' 
        }}>
            ...
        </Text>
    </View>
)  

const styles = StyleSheet.create({
    post: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#d62996'
    },
}) 

export default Post