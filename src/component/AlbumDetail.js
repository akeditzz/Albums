import React from 'react'
import { Image, Text, StyleSheet, View ,Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {
    return <Card>
        <CardSection>
            <Image style={styles.thumbNail} source={{ uri: album.cover }} />
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>{album.album}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image style={styles.coverImage} source={{ uri: album.cover }} />
        </CardSection>

        <CardSection>
            <Button onPress={()=>Linking.openURL(album.cover) } title='Click Here !!!!'/>
        </CardSection>
    </Card>
}

const styles = StyleSheet.create({
    textContainer: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    thumbNail: {
        height: 40,
        width: 40,
        marginEnd: 8
    },
    titleText: {
        fontSize: 16,
        marginEnd: 8,
        justifyContent: 'flex-start'
    },
    coverImage: {
        flex: 1,
        height: 300,
        width: null
    }
})

export default AlbumDetail