import React from 'react'
import { View, FlatList, StyleSheet, Dimensions } from 'react-native'
import cars from '../cars'
import CarItem from './CarItem'

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});

export default CarsList
