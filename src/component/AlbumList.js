import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {

    state = { albums: [] }

    componentDidMount() {
        axios.get('https://api.happi.dev/v1/music/artists/70170/albums?apikey=62e5be1IrY08XOPFYKLQb7PSdKmzsuLyxv2JZLQ9kxpgE4OUg2G4geaV')
            .then(response => {
                this.setState({ albums: response.data.result.albums })
            })
    }

    renderAlbums() {
        return this.state.albums.map(albums => <AlbumDetail key={albums.id_album} album={albums} />)
    }

    render() {
        return <ScrollView>{this.renderAlbums()}</ScrollView>
    }
}

export default AlbumList