import { Image, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '@/constants/colors'
import { PokemonDetails } from '@/types/Pokemon'
import { formatPokemonName } from '@/utils/formatPokemonName'

type Props = {
  pokemon: PokemonDetails
}

// Card responsável apenas por exibir as informações do Pokémon.
// Repare que ele não busca dados da API. Isso deixa o componente mais limpo.
export default function PokemonCard({ pokemon }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        <Image
          source={{ uri: pokemon.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.number}>#{String(pokemon.id).padStart(3, '0')}</Text>

        <Text style={styles.name}>{formatPokemonName(pokemon.name)}</Text>

        <View style={styles.typeContainer}>
          {pokemon.types.map((type) => (
            <Text key={type} style={styles.type}>
              {type}
            </Text>
          ))}
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.info}>Altura: {pokemon.height / 10} m</Text>
          <Text style={styles.info}>Peso: {pokemon.weight / 10} kg</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
  backgroundColor: COLORS.card,
  borderRadius: 24,
  padding: 14,
  marginHorizontal: 20,
  marginBottom: 14,
  alignItems: 'center',
  

  }

})
