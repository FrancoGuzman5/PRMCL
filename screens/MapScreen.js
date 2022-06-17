import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import data from '../data'

const MapScreen = (props) => { 

    React.useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setMapRegion({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
            longitudeDelta: 0.0922,
            latitudeDelta: 0.0421
          })
        })();
      }, []);

    return (
        <View>
            <MapView 
            style={styles.map} 
            initialRegion={{
              latitude: -33.460679891210425, 
              longitude: -70.64837881986182,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            >
              <Marker
              title='Parque Nacional Lauca'
                coordinate={{
                  latitude:-18.22037624318208, 
                  longitude: -69.31367375951541 
                }}
              />
              <Marker
                title='Reserva Nacional Las Vicuñas'
                coordinate={{
                  latitude:-18.633831408553846, 
                  longitude: -69.20074031428065
                }}
              />
              <Marker
              title='Monumento Natural Salar de Surire'
                coordinate={{
                  latitude:-18.842445213788714, 
                  longitude: -69.04515916491026
                }}
              />
              <Marker
              title='Monumento Natural Quebrada de Cardones'
                coordinate={{
                  latitude:-18.5964446241434, 
                  longitude: -69.48400337692286 
                }}
              />
              <Marker
              title='Parque Nacional Volcán Isluga'
                coordinate={{
                  latitude:-19.29573746918303,  
                  longitude: -69.03968157884145 
                }}
              />
              <Marker
              title='Reserva Nacional Pampa del Tamarugal'
                coordinate={{
                  latitude:-20.446116502790694, 
                  longitude: -69.67914906713132 
                }}
              />
              
              <Marker
              title='Parque Nacional Llullaillaco'
                coordinate={{
                  latitude:-24.909019307276036,  
                  longitude: -68.82186799431108 
                }}
              />
              <Marker
              title='Parque Nacional Morro Moreno'
                coordinate={{
                  latitude:-23.464204528870418,  
                  longitude: -70.56518317162191
                }}
              />
              <Marker
              title='Reserva Nacional Los Flamencos'
                coordinate={{
                  latitude:-23.209436831726094,  
                  longitude: -67.53474173413134
                }}
              />
              <Marker
              title='Reserva Nacional La Chimba'
                coordinate={{
                  latitude:-23.55583731450346, 
                  longitude: -70.32468038753042
                }}
              />
              <Marker
              title='Monumento Natural La Portada'
                coordinate={{
                  latitude:-23.50661093074268, 
                  longitude: -70.4271500322776 
                }}
              />
              <Marker
              title='Monumento Natural Paposo Norte'
                coordinate={{
                  latitude:-25.002673890329678, 
                  longitude: -70.46272506107461
                }}
              />
              <Marker
              title='Parque Nacional Pan de Azúcar'
                coordinate={{
                  latitude:-26.177389263780352, 
                  longitude: -70.54989813745395
                }}
              />
              <Marker
              title='Parque Nacional Nevado de Tres Cruces'
                coordinate={{
                  latitude:-27.028963698091445,  
                  longitude: -69.05161266101932
                }}
              />
              <Marker
              title='Parque Nacional Llanos de Challe'
                coordinate={{
                  latitude:-28.196348037153037,  
                  longitude: -71.04415066467838
                }}
              />
              <Marker
              title='Parque Nacional Bosque Fray Jorge'
                coordinate={{
                  latitude:-30.65191803263985, 
                  longitude: -71.68596743207554
                }}
              />
              <Marker
              title='Reserva Nacional Pingüino de Humboldt'
                coordinate={{
                  latitude:-29.25792926189527,  
                  longitude: -71.538784460954
                }}
              />
              <Marker
              title='Reserva Nacional Las Chinchillas'
                coordinate={{
                  latitude:-31.50888753440709, 
                  longitude:-71.10616266088324 
                }}
              />
              <Marker
              title='Monumento Natural Pichasca'
                coordinate={{
                  latitude:-30.38560386512517,   
                  longitude: -70.88258870509503
                }}
              />
              <Marker
              title='Parque Nacional La Campana'
                coordinate={{
                  latitude:-32.954143517998745,    
                  longitude: -71.07742866452789
                }}
              />
              <Marker
              title='Parque Nacional Archipiélago Juan Fernández'
                coordinate={{
                  latitude:-33.64007586980262,   
                  longitude: -78.84685663011611
                }}
              />
              <Marker
              title='Parque Nacional Rapa Nui'
                coordinate={{
                  latitude:-27.072541778253047,    
                  longitude: -109.34893012607388
                }}
              />
              <Marker
              title='Reserva Nacional Lago Peñuelas'
                coordinate={{
                  latitude:-33.14722932808786,   
                  longitude: -71.47615112588439
                }}
              />
              <Marker
              title='Reserva Nacional El Yali'
                coordinate={{
                  latitude:-33.749437218414926,  
                  longitude: -71.70168536080807
                }}
              />
              <Marker
              title='Reserva Nacional Río Blanco'
                coordinate={{
                  latitude:-32.95026409447524, 
                  longitude: -70.30908540316487 
                }}
              />
              <Marker
              title='Monumento Natural Isla Cachagua'
                coordinate={{
                  latitude:-32.58628898102992,   
                  longitude: -71.45722568968287
                }}
              />
              <Marker
              title='Santuario de la Naturaleza Laguna El Peral'
                coordinate={{
                  latitude:-33.50529390431339,   
                  longitude: -71.60845831848677
                }}
              />
              <Marker
              title='Parque Nacional Río Clarillo'
                coordinate={{
                  latitude:-33.76352574210009,  
                  longitude: -70.41969543197236 
                }}
              />
              <Marker
              title='Reserva Nacional Roblería del Cobre de Loncha'
                coordinate={{
                  latitude:-34.13855876029633,   
                  longitude: -70.97935270312408
                }}
              />
              <Marker
              title='Monumento Natural El Morado'
                coordinate={{
                  latitude:-33.780304592956945,   
                  longitude: -70.07201823197173
                }}
              />
              <Marker
              title='Parque Nacional Las Palmas de Cocalán'
                coordinate={{
                  latitude:-34.16929181961718,    
                  longitude: -71.19026647337974
                }}
              />
              <Marker
              title='Reserva Nacional Río de Los Cipreses'
                coordinate={{
                  latitude:-34.17169057331095,    
                  longitude: -70.66448695673986
                }}
              />
              <Marker
              title='Parque Nacional Radal Siete Tazas'
                coordinate={{
                  latitude:-35.45836996314239,     
                  longitude: -71.02638128958283
                }}
              />
              <Marker
              title='Reserva Nacional Radal Siete Tazas'
                coordinate={{
                  latitude:-35.45783688016501,     
                  longitude: -71.02394584399428
                }}
              />
              <Marker
              title='Reserva Nacional Los Ruiles'
                coordinate={{
                  latitude:-35.842164688712224,     
                  longitude:-72.41981696073381
                }}
              />
              <Marker
              title='Reserva Nacional Los Queules'
                coordinate={{
                  latitude:-35.94851605999899,     
                  longitude: -72.6171013225987
                }}
              />
              <Marker
              title='Reserva Nacional Laguna Torca'
                coordinate={{
                  latitude:-34.76975313606278,    
                  longitude: -72.06071891667366
                }}
              />
              <Marker
              title='Reserva Nacional Federico Albert'
                coordinate={{
                  latitude:-35.73167766168827,    
                  longitude: -72.53617093190253
                }}
              />
              <Marker
              title='Reserva Nacional Altos de Lircay'
                coordinate={{
                  latitude:-35.60563346517138,    
                  longitude: -70.96635354724795
                }}
              />
              <Marker
              title='Reserva Nacional Los Bellotos del Melado'
                coordinate={{
                  latitude:-35.85783033046265,  
                  longitude: -71.10475226627227
                }}
              />
              <Marker
              title='Reserva Nacional Huemules del Niblinto'
                coordinate={{
                  latitude:-36.74337151836963,   
                  longitude: -71.50127447604132
                }}
              />
              <Marker
              title='Reserva Nacional Ñuble'
                coordinate={{
                  latitude:-36.97848599650737,  
                  longitude: -71.50462284719735
                }}
              />
              <Marker
              title='Parque Nacional Laguna del Laja'
                coordinate={{
                  latitude:-37.38564930550868,   
                  longitude: -71.37812656067655
                }}
              />
              <Marker
              title='Parque Nacional Nonguén'
                coordinate={{
                  latitude:-36.87635356822859,  
                  longitude: -72.99331886069565
                }}
              />
              <Marker
              title='Reserva Nacional Ralco'
                coordinate={{
                  latitude:-37.89730667973725, 
                  longitude: -71.36450866065711 
                }}
              />
              <Marker
              title='Reserva Nacional Isla Mocha'
                coordinate={{
                  latitude:-38.37622502589013,   
                  longitude: -73.91220713918885
                }}
              />
              <Marker
              title='Reserva Nacional Altos de Pemehue'
                coordinate={{
                  latitude:-37.92888649184671, 
                  longitude: -71.61985898949106
                }}
              />
              <Marker
              title='Parque Nacional Tolhuaca'
                coordinate={{
                  latitude:-38.206869796496505, 
                  longitude: -71.82051800851384
                }}
              />
              <Marker
              title='Parque Nacional Nahuelbuta'
                coordinate={{
                  latitude:-37.7926822014735, 
                  longitude: -72.99818738949621
                }}
              />
              <Marker
              title='Parque Nacional Huerquehue'
                coordinate={{
                  latitude:-39.16846990760744,  
                  longitude: -71.72550308944298
                }}
              />
              <Marker
              title='Parque Nacional Villarrica'
                coordinate={{
                  latitude:-39.47701808893739, 
                  longitude: -71.76499849769357
                }}
              />
              <Marker
              title='Parque Nacional Conguillío'
                coordinate={{
                  latitude:-38.691047779602954, 
                  longitude: -71.67355463179123
                }}
              />
              <Marker
              title='Reserva Nacional Villarrica o Hualalafquén'
                coordinate={{
                  latitude:-39.115196103335805,  
                  longitude: -71.51441835957411
                }}
              />
              <Marker
              title='Reserva Nacional Malleco'
                coordinate={{
                  latitude:-38.13598766983111, 
                  longitude: -71.77913540482402
                }}
              />
              <Marker
              title='Reserva Nacional China Muerta'
                coordinate={{
                  latitude:-38.82074044377037, 
                  longitude: -71.46558868945667
                }}
              />
              <Marker
              title='Reserva Nacional Alto Biobío'
                coordinate={{
                  latitude:-38.60316921969535, 
                  longitude: -70.95577434313554
                }}
              />
              <Marker
              title='Reserva Nacional Malalcahuello'
                coordinate={{
                  latitude:-38.40405746765583, 
                  longitude: -71.59954863241784
                }}
              />
              <Marker
              title='Monumento Natural Cerro Ñielol'
                coordinate={{
                  latitude:-38.72392830054915, 
                  longitude: -72.58842610230927
                }}
              />
              <Marker
              title='Parque Nacional Alerce Costero'
                coordinate={{
                  latitude:-40.19137513614927, 
                  longitude: -73.4377884524399
                }}
              />
              <Marker
              title='Reserva Nacional Mocho Choshuenco'
                coordinate={{
                  latitude:-39.925235700877636, 
                  longitude: -72.03586939796753
                }}
              />
              <Marker
              title='Parque Nacional Pumalín Douglas Tompkins'
                coordinate={{
                  latitude:-43.009050131123225,  
                  longitude: -72.4856089232433
                }}
              />
              <Marker
              title='Parque Nacional Vicente Pérez Rosales'
                coordinate={{
                  latitude:-41.1728561548946, 
                  longitude: -72.44947766250563
                }}
              />
              <Marker
              title='Parque Nacional Puyehue'
                coordinate={{
                  latitude:-40.678488933243756, 
                  longitude:-72.11202438938278
                }}
              />
              <Marker
              title='Parque Nacional Corcovado'
                coordinate={{
                  latitude:-43.4452582929312, 
                  longitude: -72.68844921666222
                }}
              />
              <Marker
              title='Parque Nacional Chiloé'
                coordinate={{
                  latitude:-42.422864619551774,  
                  longitude: -74.08296123164043
                }}
              />
              <Marker
              title='Parque Nacional Alerce Andino'
                coordinate={{
                  latitude:-41.581978662996434,  
                  longitude: -72.61184647400506
                }}
              />
              <Marker
              title='Parque Nacional Hornopirén'
                coordinate={{
                  latitude:-41.91665869570677, 
                  longitude: -72.26760011148808
                }}
              />
              <Marker
              title='Reserva Nacional Llanquihue'
                coordinate={{
                  latitude:-41.35794692019959,  
                  longitude: -72.50489434702537
                }}
              />
              <Marker
              title='Reserva Nacional Lago Palena'
                coordinate={{
                  latitude:-43.90874650189834, 
                  longitude: -71.82610129109395
                }}
              />
              <Marker
              title='Reserva Nacional Futaleufú'
                coordinate={{
                  latitude:-43.25597937920309,  
                  longitude: -71.83419183345153
                }}
              />
              <Marker
              title='Monumento Natural Lahuen Ñadi'
                coordinate={{
                  latitude:-41.40630703815457, 
                  longitude: -73.03234224702344
                }}
              />
              <Marker
              title='Monumento Natural Islotes de Puñihuil'
                coordinate={{
                  latitude:-41.9223532480322, 
                  longitude: -74.04084895713738
                }}
              />
              <Marker
              title='Parque Nacional Patagonia'
                coordinate={{
                  latitude:-46.93863515125623, 
                  longitude: -72.16898697739595
                }}
              />
              <Marker
              title='Parque Nacional Isla Guamblin'
                coordinate={{
                  latitude:-44.84441603473312, 
                  longitude: -75.10855041510989
                }}
              />
              <Marker
              title='Parque Nacional Queulat'
                coordinate={{
                  latitude:-44.382951576027494, 
                  longitude: -72.25128603155672
                }}
              />
              <Marker
              title='Parque Nacional Laguna San Rafael'
                coordinate={{
                  latitude:-46.84653266702123,  
                  longitude: -73.539154298021
                }}
              />
              <Marker
              title="Parque Nacional Bernardo O'Higgins"
                coordinate={{
                  latitude:-49.7974757032832, 
                  longitude: -74.48498068898061
                }}
              />
              <Marker
              title='Parque Nacional Isla Magdalena'
                coordinate={{
                  latitude:-44.62472036237713, 
                  longitude: -73.07017182483901 
                }}
              />
              <Marker
              title='Parque Nacional Cerro Castillo'
                coordinate={{
                  latitude:-45.99948473205643, 
                  longitude: -72.15216531799098
                }}
              />
              <Marker
              title='Reserva Nacional Katalalixar'
                coordinate={{
                  latitude:-48.15542957187057, 
                  longitude: -74.98848280882692
                }}
              />
              <Marker
              title='Reserva Nacional Trapananda'
                coordinate={{
                  latitude:-45.35148149259095,
                  longitude:  -71.79396345134519 
                }}
              />
              <Marker
              title='Reserva Nacional Coyhaique'
                coordinate={{
                  latitude:-45.52285127011753, 
                  longitude: -71.98945960416974
                }}
              />
              <Marker
              title='Reserva Nacional Río Simpson'
                coordinate={{
                  latitude:-45.55769141795751, 
                  longitude: -72.32457426034024
                }}
              />
              <Marker
              title='Reserva Nacional Las Guaitecas'
                coordinate={{
                  latitude:-45.48993041525021, 
                  longitude: -74.33119606034323
                }}
              />
              <Marker
              title='Reserva Nacional Lago Rosselot'
                coordinate={{
                  latitude:-43.974533480222384, 
                  longitude: -72.4017232438513
                }}
              />
              <Marker
              title='Reserva Nacional Lago Las Torres'
                coordinate={{
                  latitude:-44.81505723509675, 
                  longitude: -72.12092020478435
                }}
              />
              <Marker
              title='Reserva Nacional Lago Carlota'
                coordinate={{
                  latitude:-44.51108164830709, 
                  longitude: -71.51906930353393
                }}
              />
              <Marker
              title='Monumento Natural Dos Lagunas'
                coordinate={{
                  latitude:-45.52899492587184, 
                  longitude: -71.83945692170454
                }}
              />
              <Marker
              title='Monumento Natural Cinco Hermanas'
                coordinate={{
                  latitude:-45.26912807909915, 
                  longitude: -73.25507168918823
                }}
              />
              <Marker
              title='Parque Nacional Pali Aike'
                coordinate={{
                  latitude:-52.11348811694653, 
                  longitude: -69.73770267537428
                }}
              />
              <Marker
              title='Parque Nacional Cabo de Hornos'
                coordinate={{
                  latitude:-55.66698142511659, 
                  longitude: -67.65959460218465
                }}
              />
              <Marker
              title='Parque Nacional Alberto de Agostini'
                coordinate={{
                  latitude:-54.76192834581618, 
                  longitude: -70.12393157708843
                }}
              />
              <Marker
              title='Parque Nacional Torres del Paine'
                coordinate={{
                  latitude:-50.94229913847982, 
                  longitude: -73.40680936009053
                }}
              />
              <Marker
              title='Reserva Nacional Magallanes'
                coordinate={{
                  latitude:-53.14599947518235, 
                  longitude: -71.00357975998254
                }}
              />
              <Marker
              title='Reserva Nacional Laguna Parrillar'
                coordinate={{
                  latitude:-53.422549714014664, 
                  longitude: -71.27944624949868
                }}
              />
              <Marker
              title='Reserva Nacional Alacalufes'
                coordinate={{
                  latitude:-52.510403160796656, 
                  longitude:-73.77747038884915
                }}
              />
              <Marker
              title='Monumento Natural Los Pingüinos'
                coordinate={{
                  latitude:-52.918498010935586, 
                  longitude: -70.57383938882901
                }}
              />
              <Marker
              title='Monumento Natural Laguna de los Cisnes'
                coordinate={{
                  latitude:-53.2390992656376, 
                  longitude:  -70.36506053298905
                }}
              />
              <Marker
              title='Monumento Natural Cueva del Milodón'
                coordinate={{
                  latitude:-51.569580073682616, 
                  longitude: -72.60501603122495
                }}
              />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
})

export default MapScreen